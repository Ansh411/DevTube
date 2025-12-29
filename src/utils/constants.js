const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=28&regionCode=IN&key=" + YOUTUBE_API_KEY;

export const YOUTUBE_CHANNEL_API = (channelId) => `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://devtube-backend-8ffj.onrender.com/api/search?q=";

export const YOUTUBE_VIDEO_DATA_API = (videoId) => `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_COMMENTS_API = (videoId) => `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${videoId}&maxResults=10&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_VIDEOS_API = (query) => `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=28&q=${encodeURIComponent(query)}&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_VIDEOS_BY_IDS_API = (ids) => `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${ids}&key=${YOUTUBE_API_KEY}`;

export const OFFSET_LIVE_CHAT = 14;


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