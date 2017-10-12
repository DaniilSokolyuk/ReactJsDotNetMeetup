using System;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;

namespace Mvc5Sample
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new JsonHandlerAttribute());
            filters.Add(new HandleErrorAttribute());
        }
    }

    public class JsonHandlerAttribute : ActionFilterAttribute
    {
        public class JsonNetResult : JsonResult
        {
            public JsonNetResult()
            {
                Settings = new JsonSerializerSettings
                {
                    ReferenceLoopHandling = ReferenceLoopHandling.Error,
                    DateFormatHandling = DateFormatHandling.IsoDateFormat,
                    DateTimeZoneHandling = DateTimeZoneHandling.Local
                };
            }

            public JsonSerializerSettings Settings { get; }

            public override void ExecuteResult(ControllerContext context)
            {
                if (context == null)
                {
                    throw new ArgumentNullException("context");
                }

                if (this.JsonRequestBehavior == JsonRequestBehavior.DenyGet &&
                    string.Equals(context.HttpContext.Request.HttpMethod, "GET", StringComparison.OrdinalIgnoreCase))
                {
                    throw new InvalidOperationException("JSON GET is not allowed");
                }

                HttpResponseBase response = context.HttpContext.Response;
                response.ContentType = string.IsNullOrEmpty(this.ContentType) ? "application/json" : this.ContentType;

                if (this.ContentEncoding != null)
                {
                    response.ContentEncoding = this.ContentEncoding;
                }

                if (this.Data == null)
                {
                    return;
                }

                var scriptSerializer = JsonSerializer.Create(this.Settings);
                scriptSerializer.Serialize(response.Output, this.Data);
            }
        }

        public override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            if (filterContext.Result is JsonResult jsonResult)
            {
                filterContext.Result = new JsonNetResult
                {
                    ContentEncoding = jsonResult.ContentEncoding,
                    ContentType = jsonResult.ContentType,
                    Data = jsonResult.Data,
                    JsonRequestBehavior = jsonResult.JsonRequestBehavior
                };
            }

            base.OnActionExecuted(filterContext);
        }
    }

}
