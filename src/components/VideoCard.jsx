// import ChannelAvatar from "./ChannelAvatar";
// import { format, timeAgo } from "../utils/helpers";

// const VideoCard = ({ info }) => {
//   const { snippet, statistics } = info;
//   const { title, channelTitle, channelId, thumbnails, publishedAt } = snippet;

//   return (
//     <div className="cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
//       {/* THUMBNAIL */}
//       <div className="relative">
//         <img
//           src={thumbnails?.high?.url}
//           alt="thumbnail"
//           className="w-full rounded-xl object-cover aspect-video"
//         />
//       </div>

//       {/* INFO */}
//       <div className="flex gap-3 mt-3">
//         <ChannelAvatar channelId={channelId} />

//         <div className="flex flex-col">
//           <h3 className="text-sm font-semibold line-clamp-2 leading-snug">
//             {title}
//           </h3>

//           <p className="text-xs font-semibold hover:text-gray-900 text-gray-600 mt-1">
//             {channelTitle}
//           </p>

//           <p className="text-xs font-semibold  text-gray-600">
//             {format(statistics?.viewCount) + "views"} • {timeAgo(publishedAt)}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoCard;

import ChannelAvatar from "./ChannelAvatar";
import { format, timeAgo } from "../utils/helpers";
import { useSelector } from "react-redux";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, channelId, thumbnails, publishedAt } = snippet;
  const theme = useSelector(store => store.app.theme);
  const isDark = theme === "dark";

  return (
    <div className="cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.05]">
      <div className="relative">
        <img
          src={thumbnails?.high?.url}
          alt="thumbnail"
          className="w-full rounded-xl object-cover aspect-video"
        />
      </div>

      <div className="flex gap-3 mt-3">
        <ChannelAvatar channelId={channelId} />

        <div className="flex flex-col">
          <h3 className={`text-sm font-semibold line-clamp-2 leading-snug ${isDark ? "text-gray-100" : ""}`}>
            {title}
          </h3>

          <p className={`text-xs font-semibold mt-1 ${isDark ? "text-gray-400 hover:text-gray-200" : "text-gray-600 hover:text-gray-900"}`}>
            {channelTitle}
          </p>

          <p className={`text-xs font-semibold ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {format(statistics?.viewCount) + "views"} • {timeAgo(publishedAt)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
