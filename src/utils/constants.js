const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" + YOUTUBE_API_KEY;

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