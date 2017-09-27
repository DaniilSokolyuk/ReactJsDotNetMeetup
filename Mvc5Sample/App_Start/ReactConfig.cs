using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using JsPoolOptimization;
using Mvc5Sample;
using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(ReactConfig), "Configure")]

namespace Mvc5Sample
{
	public static class ReactConfig
	{
		public static void Configure()
		{

            ReactSiteConfiguration.Configuration
		        .SetLoadBabel(false)
		        .AddScriptWithoutTransform("~/js/server.js");

		    JsEngineSwitcher engineSwitcher = JsEngineSwitcher.Instance;

		    engineSwitcher.EngineFactories.Clear();

            engineSwitcher.EngineFactories.Add(new ChakraCoreJsEngineFactory());
            engineSwitcher.DefaultEngineName = ChakraCoreJsEngine.EngineName;

            //engineSwitcher.EngineFactories.Add(new V8JsEngineFactory());
            //engineSwitcher.DefaultEngineName = V8JsEngine.EngineName;
        }
	}
}