using System;
using AspNetCoreSample.Controllers.Home.Services;
using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using JsPoolOptimization;
// using JsPoolOptimization;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using React;
using React.AspNet;

namespace AspNetCoreSample
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddMvc()
                .AddJsonOptions(options =>
                {
                    options.SerializerSettings.ContractResolver = new DefaultContractResolver();
                });

            services.AddSingleton<IInstagramDataService, InstagramDataService>();

            services
                .AddJsEngineSwitcher(options => options.DefaultEngineName = ChakraCoreJsEngine.EngineName)
                .AddChakraCore();

            services.AddReact();

            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            return services.BuildServiceProvider();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseReact(config =>
                {
                    React.AssemblyRegistration.Container.Register<IJavaScriptEngineFactory, AfishaJavaScriptEngineFactory>().AsSingleton();

                    config
                        .SetLoadBabel(false)
                        .SetLoadReact(false)
                        .AddScriptWithoutTransform("~/js/server.js")
                        .SetJsonSerializerSettings(new JsonSerializerSettings
                        {
                            StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                            ContractResolver = new DefaultContractResolver()
                        });
                });

                app.UseStaticFiles();

                app.UseMvc(routes =>
                {
                    routes.MapRoute(
                        name: "default",
                        template: "{controller=Home}/{action=Index}/{id?}");
                });
            }
        }
    }
}