import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const res = await fetch(YOUTUBE_VIDEOS_API);
      const json = await res.json();
      setVideos(json.items || []);
    } catch (err) {
      console.error("Failed to fetch videos", err);
    }
  };

  return (
    <section className="px-6 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default VideoContainer;
