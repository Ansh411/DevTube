import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_API, YOUTUBE_SEARCH_VIDEOS_API, YOUTUBE_VIDEOS_BY_IDS_API } from "../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTrending, setSearchResults } from "../store/videosSlice";

const VideoContainer = ({ selectedTag, setLoading }) => {

  const [videos, setVideos] = useState([]);
  const dispatch = useDispatch();
  const { trending, searchResults } = useSelector(store => store.videos);

  useEffect(() => {
    fetchVideos();
  }, [selectedTag]);


  const fetchVideos = async () => {
    try {

      setLoading(true);
      
      // 🟢 TRENDING
      if (selectedTag === "All") {
        if(trending) {
          setVideos(trending);
          setLoading(false);
          return;
        }

        const res = await fetch(YOUTUBE_VIDEOS_API);
        const json = await res.json();
        dispatch(setTrending(json.items));
        setVideos(json.items || []);
        setLoading(false);
        return;
      }

      if(searchResults [selectedTag]) {
        setVideos(searchResults[selectedTag]);
        setLoading(false);
        return;
      }

      // 🔍 SEARCH STEP 1 → get IDs
      const searchRes = await fetch(YOUTUBE_SEARCH_VIDEOS_API(selectedTag));
      const searchJson = await searchRes.json();

      const videoIds = searchJson.items.map((item) => item.id.videoId).join(",");

      // 🔍 SEARCH STEP 2 → get statistics
      const statsRes = await fetch(YOUTUBE_VIDEOS_BY_IDS_API(videoIds));
      const statsJson = await statsRes.json();

      dispatch(setSearchResults({
        query : selectedTag,
        videos : statsJson.items,
      }));

      setVideos(statsJson.items || []);
      setLoading(false);
    } catch (err) {
      console.error("Video fetch failed", err);
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
