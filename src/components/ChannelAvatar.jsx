import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import { avatars } from "../assets/avatars";

/* ---------- STABLE RANDOM ---------- */
const getFallbackAvatar = (channelId) => {
  if (!channelId) return avatars[0];
  const index = channelId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatars[index % avatars.length];
};

const ChannelAvatar = ({ channelId }) => {
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await fetch(YOUTUBE_CHANNEL_API(channelId));
        const json = await res.json();

        const thumbnails = json?.items?.[0]?.snippet?.thumbnails;
        const img = thumbnails?.high?.url || thumbnails?.medium?.url || thumbnails?.default?.url || null;

        setLogo(img);
      } catch (err) {
        setError(true);
      }
    };

    if (channelId) fetchChannel();
  }, [channelId]);

  const fallback = getFallbackAvatar(channelId);

  return (
    <img
      src={!error && logo ? logo : fallback}
      alt="channel avatar"
      className="h-9 w-9 lg:h-10 lg:w-10 rounded-full object-cover"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

export default ChannelAvatar;
