import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";
import { avatars } from "../assets/avatars";
import { useDispatch, useSelector } from "react-redux";
import { setChannel } from "../store/channelsSlice";

/* ---------- STABLE RANDOM FALLBACK ---------- */
const getFallbackAvatar = (channelId) => {
  if (!channelId) return avatars[0];
  const index = channelId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return avatars[index % avatars.length];
};

const ChannelAvatar = ({ channelId }) => {

  const [logo, setLogo] = useState(null);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const cachedChannel = useSelector((store) => store.channels.cache[channelId]);

  useEffect(() => {

    if (!channelId || cachedChannel) return;

    const fetchChannel = async () => {
      try {
        const res = await fetch(YOUTUBE_CHANNEL_API(channelId));
        const json = await res.json();

        dispatch(setChannel({
            channelId,
            data: json.items?.[0],
          })
        );
      } catch (err) {
        console.error("Channel fetch failed", err);
      }
    };

    fetchChannel();
  }, [channelId, cachedChannel, dispatch]);

  const avatarUrl = !error && cachedChannel?.snippet?.thumbnails?.high?.url;

  return (
    <img src={avatarUrl || getFallbackAvatar(channelId)}
      alt="channel avatar"
      className="h-9 w-9 lg:h-10 lg:w-10 rounded-full object-cover"
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

export default ChannelAvatar;

