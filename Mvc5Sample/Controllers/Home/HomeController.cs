using System.Threading;
using System.Threading.Tasks;
using System.Web.Mvc;
using Mvc5Sample.Controllers.Home.Services;

namespace Mvc5Sample.Controllers.Home
{
    public class HomeController : Controller
    {
        private readonly IInstagramDataService _instagramDataService;

        public HomeController(IInstagramDataService instagramDataService)
        {
            _instagramDataService = instagramDataService;
        }

        public async Task<ActionResult> Index()
        {
            var searchResult = await _instagramDataService.Search("csharp", CancellationToken.None);

            return View(searchResult);
        }

        public async Task<ActionResult> Search(string text)
        {
            var searchResult = await _instagramDataService.Search(text, CancellationToken.None);

            return Json(searchResult, JsonRequestBehavior.AllowGet);
        }

        public async Task<ActionResult> User(string userName)
        {
            var userMedia = await _instagramDataService.GetUser(userName, CancellationToken.None);

            return Json(userMedia, JsonRequestBehavior.AllowGet);
        }
    }
}