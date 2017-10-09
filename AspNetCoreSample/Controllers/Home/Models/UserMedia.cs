using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace AspNetCoreSample.Controllers.Home.Models
{
    public partial class UserMedia
    {
        [JsonProperty("more_available")]
        public bool MoreAvailable { get; set; }

        [JsonProperty("items")]
        public Item[] Items { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }
    }

    public partial class Item
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("code")]
        public string Code { get; set; }

        [JsonProperty("created_time")]
        public string CreatedTime { get; set; }

        [JsonProperty("images")]
        public Images Images { get; set; }

        [JsonProperty("link")]
        public string Link { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }
    }

    public partial class Images
    {
        [JsonProperty("standard_resolution")]
        public Image StandardResolution { get; set; }

        [JsonProperty("low_resolution")]
        public Image LowResolution { get; set; }

        [JsonProperty("thumbnail")]
        public Image Thumbnail { get; set; }
    }

    public partial class Image
    {
        [JsonProperty("id")]
        public string Id { get; set; }

        [JsonProperty("height")]
        public long Height { get; set; }

        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("width")]
        public long Width { get; set; }
    }

}
