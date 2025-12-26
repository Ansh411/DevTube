import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

const ChannelAvatar = ({ channelId }) => {
  const [logo, setLogo] = useState(null);

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await fetch(YOUTUBE_CHANNEL_API(channelId));
      const json = await res.json();
      const thumbnails = json?.items?.[0]?.snippet?.thumbnails;
      setLogo(thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url);
    };

    fetchChannel();
  }, [channelId]);

  return (
    <img src={logo} 
    alt="channel logo" className="h-9 w-9 rounded-full object-cover"
    />
  );
};

export default ChannelAvatar;
