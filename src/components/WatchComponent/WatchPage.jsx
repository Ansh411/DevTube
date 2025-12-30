import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../store/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import LiveChat from "./LiveChat";
import SuggestedVideos from "./SuggestedVideos";


const WatchPage = () => {
  
  const [ searchParams ] = useSearchParams();
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
    
  return (
      <div className={`flex gap-6 py-2.5 pl-2.5 ${isDark ? "bg-black" : "bg-white"} min-h-screen`}>
      {/* LEFT SECTION */}
      <div className="w-341.5 max-w-full">
        {/* 👇 iframe stays EXACTLY same */}
        <div className="relative w-full aspect-video">
        <iframe 
          className="absolute inset-0 w-full h-full rounded-xl"
          src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen>
        </iframe>
        </div>

        <VideoInfo videoId={searchParams.get("v")} />
        <Comments videoId={searchParams.get("v")} />
      </div>

      {/* RIGHT SIDE (Live Chat later) */}
      <div className="hidden xl:flex flex-col w-100 gap-4">
        {!isMenuOpen && (
          <>
          <LiveChat />
            <h2 className={`text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"} tracking-wide uppercase pt-2`}>Suggestions</h2>
          <SuggestedVideos />
        </>
        )}
    </div>
  </div>
  );
};

export default WatchPage;