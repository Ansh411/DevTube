import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import SuggestedVideoCard from "./SuggestedVideoCard";

const MAX_SUGGESTED = 10;

const SuggestedVideos = () => {
  const trending = useSelector(store => store.videos.trending);
  const [searchParams] = useSearchParams();
  const currentVideoId = searchParams.get("v");

  if (!trending) return null;

  const suggestedVideos = trending
    .filter(video => video.id !== currentVideoId)
    .slice(0, MAX_SUGGESTED);

  return (
    <div className="flex flex-col gap-2 mt-4">
      {suggestedVideos.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <SuggestedVideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SuggestedVideos;
