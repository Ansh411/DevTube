import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import VideoCard from "../VideoCard";
import { YOUTUBE_SEARCH_VIDEOS_API, YOUTUBE_VIDEOS_BY_IDS_API } from "../../utils/constants";
import Loader_Results from "./Loader_Results";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search_query");

  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!query) return;

    const fetchSearchVideos = async () => {
      try {
        setLoading(true);

        // 🔍 STEP 1 → SEARCH (get IDs)
        const searchRes = await fetch(YOUTUBE_SEARCH_VIDEOS_API(query));
        const searchJson = await searchRes.json();

        const videoIds = searchJson.items.map((item) => item.id.videoId).filter(Boolean).join(",");

        if (!videoIds) {
          setVideos([]);
          return;
        }

        // 🔍 STEP 2 → GET STATISTICS
        const statsRes = await fetch(YOUTUBE_VIDEOS_BY_IDS_API(videoIds));
        const statsJson = await statsRes.json();

        setVideos(statsJson.items || []);
      } catch (err) {
        console.error("Search fetch failed", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchVideos();
  }, [query]);

  if (loading) {
    return <div className="mt-20 flex justify-center text-lg"><Loader_Results/></div>;
  }

  return (
    <section className="px-6 py-4">
      <h2 className="text-lg font-semibold mb-4">
        Search results for <span className="font-bold">"{query}"</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SearchResults;
