using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(Mvc5Sample.ReactConfig), "Configure")]

namespace Mvc5Sample
{
	public static class ReactConfig
	{
		public static void Configure()
		{
		    ReactSiteConfiguration.Configuration
		        .SetLoadBabel(false)
		        .AddScriptWithoutTransform("~/js/server.js");
		}
	}
}