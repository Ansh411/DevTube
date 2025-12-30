import { useEffect, useState } from "react";
import ChannelInfo from "./ChannelInfo";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { YOUTUBE_VIDEO_DATA_API } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setVideoById } from "../../store/videosSlice";


const VideoInfo = ({ videoId }) => {
  const [video, setVideo] = useState(null);
  const dispatch = useDispatch();
  const cachedVideo = useSelector(store => store.videos.videoById[videoId]);
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";


  useEffect(() => {
    if(cachedVideo) {
      setVideo(cachedVideo);
      return;
    }

  fetch(YOUTUBE_VIDEO_DATA_API(videoId))
    .then(res => res.json())
    .then(data => {
      setVideo(data.items[0]);
      dispatch(setVideoById({
        videoId,
        video: data.items[0],
      }));
    });
}, [videoId]);

  if (!video) return null;

  return (
    <div className="mt-4">
      <h1 className={`text-xl font-semibold ${isDark ? "text-gray-100" : "text-gray-900"}`}>
        {video.snippet.title}
      </h1>

      <div className="flex justify-between items-center mt-4">
        <ChannelInfo channelId={video.snippet.channelId} />

        <div className="flex gap-3">
          <Action icon={<AiOutlineLike className="text-xl" />} label="Like" isDark={isDark} />
          <Action icon={<AiOutlineDislike className="text-xl" />} label="Dislike" isDark={isDark} />
          <Action icon={<FiShare2 className="text-xl" />} label="Share" isDark={isDark} />
          <Action icon={<BsBookmark className="text-xl" />} label="Save" isDark={isDark} />
        </div>
      </div>
    </div>
  );
};

const Action = ({ icon, label, isDark }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer transition
      ${isDark ? "bg-[#1f1f1f] hover:bg-[#2a2a2a] text-gray-200" : "bg-gray-100 hover:bg-gray-200 text-black"}`} >
    {icon}
    <span className="text-sm font-semibold">{label}</span>
  </button>
);



export default VideoInfo;
