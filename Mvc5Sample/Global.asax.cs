using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using JsPoolOptimization;
using Mvc5Sample;
using React;

namespace Mvc5Sample
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            React.AssemblyRegistration.Container.Register<IJavaScriptEngineFactory, AfishaJavaScriptEngineFactory>().AsSingleton();

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
