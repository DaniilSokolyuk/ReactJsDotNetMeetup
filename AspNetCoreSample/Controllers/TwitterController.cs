using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Tweetinvi;
using Tweetinvi.Models;
using Tweetinvi.Parameters;

namespace AspNetCoreSample.Controllers
{
    public class TwitterController : Controller
    {


        public IActionResult Index()
        {
            ITwitterCredentials creds = new TwitterCredentials(
                "1",
                "1",
                "1",
                "1");
            Auth.SetCredentials(creds);

            Search.SearchTweets(new SearchTweetsParameters("C#")
            {
                MaximumNumberOfResults = 100,
                SinceId = 399616835892781056,
                MaxId = 405001488843284480,
                Filters = TweetSearchFilters.Images
            });

            var matchingTweets = Search.SearchTweets("tweetinvi");

            return View(matchingTweets);
        }
    }
}