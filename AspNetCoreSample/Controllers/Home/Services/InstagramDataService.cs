using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AspNetCoreSample.Controllers.Home.Models;
using Newtonsoft.Json;

namespace AspNetCoreSample.Controllers.Home.Services
{
    public interface IInstagramDataService
    {
        Task<InstagramSearch> Search(string text, CancellationToken cancellationToken);
    }

    public class InstagramDataService : IInstagramDataService
    {
        private readonly HttpClient _httpClient;

        public InstagramDataService()
        {
            var baseAddress = new Uri("https://www.instagram.com/");

            _httpClient = new HttpClient
            {
                BaseAddress = baseAddress
            };
            _httpClient.DefaultRequestHeaders.ConnectionClose = false;
        }

        public async Task<InstagramSearch> Search(string text, CancellationToken cancellationToken)
        {
            using (var httpResponseMessage = await _httpClient.GetAsync($"web/search/topsearch/?context=blended&query={text}", cancellationToken))
            {
                httpResponseMessage.EnsureSuccessStatusCode();

                var content = await httpResponseMessage.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<InstagramSearch>(content);
            }
        }

        public async Task<UserMedia> GetUser(string userName, CancellationToken cancellationToken)
        {
            using (var httpResponseMessage = await _httpClient.GetAsync($"{userName}/media/", cancellationToken))
            {
                httpResponseMessage.EnsureSuccessStatusCode();

                var content = await httpResponseMessage.Content.ReadAsStringAsync();
                return JsonConvert.DeserializeObject<UserMedia>(content);
            }
        }
    }
}
