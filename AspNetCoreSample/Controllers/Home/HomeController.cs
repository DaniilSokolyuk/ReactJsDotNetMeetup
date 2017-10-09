using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using AspNetCoreSample.Controllers.Home.Services;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreSample.Controllers.Home
{
    public class HomeController : Controller
    {
        private readonly IInstagramDataService _instagramDataService;

        public HomeController(IInstagramDataService instagramDataService)
        {
            _instagramDataService = instagramDataService;
        }

        public async Task<IActionResult> Index()
        {
            var searchResult = await _instagramDataService.Search("csharp", CancellationToken.None);

            return View(searchResult);
        }

        public async Task<IActionResult> Search(string text)
        {
            var searchResult = await _instagramDataService.Search(text, CancellationToken.None);

            return Json(searchResult);
        }
    }
}