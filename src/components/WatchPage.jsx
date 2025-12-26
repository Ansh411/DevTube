import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../store/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  
  const [ searchParams ] = useSearchParams();
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(closeMenu());
  },[]);
    
  return (
    <div className="p-2.5 flex">
        <iframe 
        className="rounded-xl"
        width="1366" 
        height="768" 
        src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?autoplay=1"} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
  );
};

export default WatchPage;