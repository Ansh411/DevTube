import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../store/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  
  const [ searchParams ] = useSearchParams();
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
    
  return (
      <div className="flex gap-6 py-2.5 pl-2.5">
      {/* LEFT SECTION */}
      <div className="w-341.5 max-w-full">

        {/* 👇 iframe stays EXACTLY same */}
        <iframe 
          className="rounded-xl"
          width="1366" 
          height="768" 
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>

        <VideoInfo videoId={searchParams.get("v")} />
        <Comments videoId={searchParams.get("v")} />
      </div>

      {/* RIGHT SIDE (Live Chat later) */}
      <div className="hidden xl:block w-90">
        {!isMenuOpen && <LiveChat/>}
      </div>
    </div>
  );
};

export default WatchPage;