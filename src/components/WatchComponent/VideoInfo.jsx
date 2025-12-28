import { useEffect, useState } from "react";
import ChannelInfo from "./ChannelInfo";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { YOUTUBE_VIDEO_DATA_API } from "../../utils/constants";

const VideoInfo = ({ videoId }) => {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    fetch(YOUTUBE_VIDEO_DATA_API(videoId))
      .then(res => res.json())
      .then(data => setVideo(data.items[0]));
  }, [videoId]);

  if (!video) return null;

  return (
    <div className="mt-4">
      <h1 className="text-xl font-semibold text-gray-900">
        {video.snippet.title}
      </h1>

      <div className="flex justify-between items-center mt-4">
        <ChannelInfo channelId={video.snippet.channelId} />

        <div className="flex gap-3">
          <Action icon={<AiOutlineLike className="text-xl" />} label="Like" />
          <Action icon={<AiOutlineDislike className="text-xl" />} label="Dislike" />
          <Action icon={<FiShare2 className="text-xl" />} label="Share" />
          <Action icon={<BsBookmark className="text-xl" />} label="Save" />
        </div>
      </div>
    </div>
  );
};

const Action = ({ icon, label }) => (
  <button className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-gray-100 hover:bg-gray-200 transition">
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </button>
);

export default VideoInfo;
