using System;
using System.Linq;
using JavaScriptEngineSwitcher.Core;
using JSPool;
using React;

namespace JsPoolOptimization
{
    public class AfishaJavaScriptEngineFactory : JavaScriptEngineFactory
    {
        public AfishaJavaScriptEngineFactory(JsEngineSwitcher engineSwitcher, IReactSiteConfiguration config, IFileSystem fileSystem) : base(engineSwitcher, config, fileSystem)
        {
        }

        protected override IJsPool CreatePool()
        {
            var allFiles = _config.Scripts
                .Concat(_config.ScriptsWithoutTransform)
                .Select(_fileSystem.MapPath);
            
            var poolConfig = new JsPoolConfig
            {
                EngineFactory = _factory,
                Initializer = InitialiseEngine,
                WatchPath = _fileSystem.MapPath("~/"),
                WatchFiles = allFiles,
                GetEngineTimeout = TimeSpan.FromSeconds(10.0),
                MaxUsagesPerEngine = 0,
                StartEngines = 10,
                MaxEngines = 10,
                GarbageCollectionInterval = 60
            };

            var pool = new AfishaJsPool(poolConfig);

            // Reset the recycle exception on recycle. If there *are* errors loading the scripts
            // during recycle, the errors will be caught in the initializer.
            pool.Recycled += (sender, args) => _scriptLoadException = null;
            return pool;
        }
    }
}