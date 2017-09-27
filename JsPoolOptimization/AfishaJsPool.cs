using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Threading;
using JavaScriptEngineSwitcher.Core;
using JSPool;

namespace JsPoolOptimization
{
    public class AfishaJsPool : JsPool<IJsEngine>, IJsPool
    {
        private readonly AutoResetEvent _enginePopulateEvent = new AutoResetEvent(false);
        private readonly AutoResetEvent _engineEnqueuedEvent = new AutoResetEvent(false);
        private readonly ConcurrentDictionary<IJsEngine, DateTime> _engineGcTime = new ConcurrentDictionary<IJsEngine, DateTime>();
        private readonly ConcurrentQueue<IJsEngine> _enginesToGc = new ConcurrentQueue<IJsEngine>();

        public AfishaJsPool(JsPoolConfig<IJsEngine> config) : base(config)
        {
#if DEBUG
            new Thread(
                () =>
                {
                    while (!_cancellationTokenSource.IsCancellationRequested)
                    {
                        Debug.WriteLine($"AvailableEngines: {_availableEngines.Count}");
                        Debug.WriteLine($"EnginesToGC: {_enginesToGc.Count}");
                        Thread.Sleep(1000);
                    }
                }).Start();
#endif

            new Thread(
                () =>
                {
                    while (!_cancellationTokenSource.IsCancellationRequested)
                    {
                        WaitHandle.WaitAny(new WaitHandle[] { _enginePopulateEvent }, TimeSpan.FromSeconds(5));

                        while (EngineCount < _config.MaxEngines)
                        {
                            var engine = CreateEngine();
                            _availableEngines.Add(engine);
                        }
                    }
                }).Start();

            new Thread(
                () =>
                {
                    while (!_cancellationTokenSource.IsCancellationRequested)
                    {
                        _engineEnqueuedEvent.WaitOne();

                        while (!_cancellationTokenSource.IsCancellationRequested && _enginesToGc.TryDequeue(out var engine))
                        {
                            if (!_metadata.TryGetValue(engine, out _))
                            {
                                // This engine was from another pool. This could happen if a pool is recycled
                                // and replaced with a different one (like what ReactJS.NET does when any 
                                // loaded files change). Let's just pretend we never saw it.
                                engine.Dispose();

                                continue;
                            }

                            engine.CollectGarbage();
                            _availableEngines.Add(engine);
                            _engineGcTime[engine] = DateTime.UtcNow;
                        }
                    }
                }).Start();
        }

        public override void ReturnEngineToPool(IJsEngine engine)
        {
            if (!_metadata.TryGetValue(engine, out var metadata))
            {
                // This engine was from another pool. This could happen if a pool is recycled
                // and replaced with a different one (like what ReactJS.NET does when any 
                // loaded files change). Let's just pretend we never saw it.
                engine.Dispose();

                return;
            }

            metadata.InUse = false;
            var usageCount = metadata.UsageCount;
            if ((_config.MaxUsagesPerEngine > 0) && (usageCount >= _config.MaxUsagesPerEngine))
            {
                // Engine has been reused the maximum number of times, recycle it.
                DisposeEngine(engine);
                return;
            }

            if (_engineGcTime.GetOrAdd(engine, jsEngine => DateTime.UtcNow).AddSeconds(_config.GarbageCollectionInterval) < DateTime.UtcNow)
            {
                _enginesToGc.Enqueue(engine);
                _engineEnqueuedEvent.Set();
            }
            else
            {
                _availableEngines.Add(engine);
            }
        }

        protected override void PopulateEngines()
        {
            _enginePopulateEvent.Set();
        }
    }
}