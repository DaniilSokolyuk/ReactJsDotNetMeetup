using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Autofac;
using Autofac.Integration.Mvc;
using JsPoolOptimization;
using Mvc5Sample;
using Mvc5Sample.Controllers.Home.Services;
using Newtonsoft.Json;
using React;

namespace Mvc5Sample
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            React.AssemblyRegistration.Container.Register<IJavaScriptEngineFactory, AfishaJavaScriptEngineFactory>()
                .AsSingleton();

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);

            var builder = new ContainerBuilder();

            builder.RegisterType<InstagramDataService>()
                .AsSelf()
                .AsImplementedInterfaces()
                .SingleInstance();

            // Register your MVC controllers. (MvcApplication is the name of
            // the class in Global.asax.)
            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            var container = builder.Build();
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}
