import { useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { format } from "../../utils/helpers";
import { YOUTUBE_CHANNEL_API } from "../../utils/constants";

const ChannelInfo = ({ channelId }) => {
  const [channel, setChannel] = useState(null);
  const [subscribed, setSubscribed] = useState(false);

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
        <span className="font-semibold text-base">
          {channel.snippet.title}
        </span>
        <span className="text-sm text-gray-600">
          {format(channel.statistics.subscriberCount)} subscribers
        </span>
      </div>

      {/* Subscribe Button */}
      <button
        onClick={() => setSubscribed(!subscribed)}
        className={`ml-4 px-5 py-2 rounded-full cursor-pointer font-medium transition ${
          subscribed
            ? "bg-gray-200 text-black"
            : "bg-black text-white hover:bg-gray-900"
        }`}
      >
        {subscribed ? "Subscribed" : "Subscribe"}
      </button>

      {/* Bell Icon */}
      {subscribed && (
        <button className="p-2 rounded-full hover:bg-gray-200 cursor-pointer transition">
          <BsBell className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default ChannelInfo;
