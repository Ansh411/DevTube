import { useSelector } from "react-redux";
import { format, timeAgo } from "../../utils/helpers";

const SuggestedVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  return (
    <div className={`flex gap-3 cursor-pointer ${isDark ? "hover:bg-[#1f1f1f]" : "hover:bg-gray-100"} p-2 rounded-lg`}>
      {/* Thumbnail */}
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-40 h-24 rounded-lg object-cover shrink-0"
      />

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className={`text-sm font-semibold line-clamp-2 leading-snug ${isDark ? "text-gray-100" : "text-black"}`}>
          {title}
        </h3>

        <p className={`text-xs ${isDark ? "text-gray-400" : "text-gray-600"} font-semibold`}>
          {channelTitle}
        </p>

        <p className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"} font-semibold`}>
          {format(statistics?.viewCount)} views • {timeAgo(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;

