import { useState } from "react";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <main className="flex-1 min-w-0">
      <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <VideoContainer selectedTag={selectedTag} />
    </main>
  );
};

export default MainContainer;
