import { useState } from "react";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";
import LoaderBar from "./LoaderBar";

const MainContainer = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [loading, setLoading] = useState(false);

  return (
    <main className="flex-1 min-w-0 relative">

      <LoaderBar loading={loading} />

      <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>

      <VideoContainer selectedTag={selectedTag} setLoading={setLoading}/>
      
    </main>
  );
};

export default MainContainer;
