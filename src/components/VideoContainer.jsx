import { useEffect } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoContainer = () => {

  useEffect(() => { 
    getVideos(); 
  },[]);

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
  }

  return (
    <div><VideoCard/></div>
  );
};

export default VideoContainer;