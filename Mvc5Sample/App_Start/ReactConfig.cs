using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.V8;
using Mvc5Sample;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactConfig), "Configure")]

namespace Mvc5Sample
{
    public static class ReactConfig
    {
        public static void Configure()
        {
            JsEngineSwitcher engineSwitcher = JsEngineSwitcher.Instance;
            engineSwitcher.EngineFactories
                .AddV8()
                .AddChakraCore();

            engineSwitcher.DefaultEngineName = ChakraCoreJsEngine.EngineName;

            ReactSiteConfiguration.Configuration
                .SetLoadBabel(false)
                .SetLoadReact(false)
                .AddScriptWithoutTransform("~/js/server.js");
        }
    }
}