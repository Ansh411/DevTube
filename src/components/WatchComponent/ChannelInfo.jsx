import { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { format } from "../../utils/helpers";
import { YOUTUBE_CHANNEL_API } from "../../utils/constants";
import { useSelector } from "react-redux";

const ChannelInfo = ({ channelId }) => {
  const [channel, setChannel] = useState(null);
  const [subscribed, setSubscribed] = useState(false);
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  useEffect(() => {
    const fetchChannelInfo = async () => {
      try {
        const res = await fetch(YOUTUBE_CHANNEL_API(channelId));
        const json = await res.json();

        // SAFETY CHECK
        if (json?.items?.length > 0) {
          setChannel(json.items[0]);
        }
      } catch (error) {
        console.error("Failed to fetch channel info", error);
      }
    };

    if (channelId) fetchChannelInfo();
  }, [channelId]);

  if (!channel) return null;

  return (
    <div className="flex items-center gap-4">
      {/* Channel Logo */}
      <img
        src={channel.snippet.thumbnails.default.url}
        alt="channel"
        className="w-12 h-12 cursor-pointer rounded-full"
      />

      {/* Channel Details */}
      <div className="flex flex-col">
        <span className={`font-semibold text-base ${isDark ? "text-white" : "text-black"}`}>
          {channel.snippet.title}
        </span>
        <span className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
          {format(channel.statistics.subscriberCount)} subscribers
        </span>
      </div>

      {/* Subscribe Button */}
      <button
        onClick={() => setSubscribed(!subscribed)}
        className={`ml-4 px-5 py-2 rounded-full cursor-pointer font-medium transition ${
          subscribed
            ? `${isDark ? "bg-[#2a2a2a] text-white" : "bg-gray-200 text-black"}`
            : `${isDark ? "hover:bg-[#333]" : "hover:bg-gray-950"} bg-zinc-800 text-white`
        }`}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>

      {/* Bell Icon */}
      {subscribed && (
        <button className={`p-2 rounded-full ${isDark ? "hover:bg-[#2a2a2a]" : "hover:bg-gray-200"} cursor-pointer transition`}>
          <BsBell className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChannelInfo;
