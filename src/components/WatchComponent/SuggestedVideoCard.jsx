import { format, timeAgo } from "../../utils/helpers";

const SuggestedVideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className="flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg">
      {/* Thumbnail */}
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="w-40 h-24 rounded-lg object-cover shrink-0"
      />

      {/* Info */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-semibold line-clamp-2 leading-snug">
          {title}
        </h3>

        <p className="text-xs text-gray-600 font-semibold">
          {channelTitle}
        </p>

        <p className="text-xs text-gray-500 font-semibold">
          {format(statistics?.viewCount)} views • {timeAgo(publishedAt)}
        </p>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
