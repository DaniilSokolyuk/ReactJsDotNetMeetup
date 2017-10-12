using Newtonsoft.Json;

namespace Mvc5Sample.Controllers.Home.Models
{
    public class InstagramSearch
    {
        [JsonProperty("places")]
        public object[] Places { get; set; }

        [JsonProperty("has_more")]
        public bool HasMore { get; set; }

        [JsonProperty("clear_client_cache")]
        public bool ClearClientCache { get; set; }

        [JsonProperty("hashtags")]
        public Hashtag[] Hashtags { get; set; }

        [JsonProperty("status")]
        public string Status { get; set; }

        [JsonProperty("rank_token")]
        public string RankToken { get; set; }

        [JsonProperty("users")]
        public User[] Users { get; set; }

        public class Hashtag
        {
            [JsonProperty("hashtag")]
            public OtherHashtag OtherHashtag { get; set; }

            [JsonProperty("position")]
            public long Position { get; set; }
        }

        public class OtherHashtag
        {
            [JsonProperty("media_count")]
            public long MediaCount { get; set; }

            [JsonProperty("id")]
            public long Id { get; set; }

            [JsonProperty("name")]
            public string Name { get; set; }
        }

        public class User
        {
            [JsonProperty("position")]
            public long Position { get; set; }

            [JsonProperty("user")]
            public OtherUser OtherUser { get; set; }
        }

        public class OtherUser
        {
            [JsonProperty("has_anonymous_profile_picture")]
            public bool HasAnonymousProfilePicture { get; set; }

            [JsonProperty("pk")]
            public string Pk { get; set; }

            [JsonProperty("follower_count")]
            public long FollowerCount { get; set; }

            [JsonProperty("byline")]
            public string Byline { get; set; }

            [JsonProperty("full_name")]
            public string FullName { get; set; }

            [JsonProperty("is_verified")]
            public bool IsVerified { get; set; }

            [JsonProperty("is_private")]
            public bool IsPrivate { get; set; }

            [JsonProperty("mutual_followers_count")]
            public long MutualFollowersCount { get; set; }

            [JsonProperty("profile_pic_url")]
            public string ProfilePicUrl { get; set; }

            [JsonProperty("profile_pic_id")]
            public string ProfilePicId { get; set; }

            [JsonProperty("username")]
            public string Username { get; set; }
        }
    }
}
