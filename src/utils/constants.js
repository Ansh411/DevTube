const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_CHANNEL_API = (channelId) => `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API = "https://devtube-backend-8ffj.onrender.com/api/search?q=";

export const Tags = [
  "All",
  "For You",
  "Cricket",
  "Action Movies",
  "Music",
  "Mixes",
  "Thrillers",
  "Web Series",
  "DSA",
  "Tourism",
  "Jungle Safari",
  "Anime",
  "Web Development",
  "Live",
  "MERN",
  "React-Native",
  "DBMS",
  "OOPS",
  "Operating Systems",
  "Computer Networks",
  "TypeScript",
  "Recently Uploaded",
  "New To You",
];