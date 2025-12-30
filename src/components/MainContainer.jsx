// import { useState } from "react";
// import TagList from "./TagList";
// import VideoContainer from "./VideoContainer";
// import LoaderBar from "./LoaderBar";

// const MainContainer = () => {
//   const [selectedTag, setSelectedTag] = useState("All");
//   const [loading, setLoading] = useState(false);

//   return (
//     <main className="flex-1 min-w-0 relative">

//       <LoaderBar loading={loading} />

//       <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>

//       <VideoContainer selectedTag={selectedTag} setLoading={setLoading}/>
      
//     </main>
//   );
// };

// export default MainContainer;

import { useState } from "react";
import TagList from "./TagList";
import VideoContainer from "./VideoContainer";
import LoaderBar from "./LoaderBar";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [loading, setLoading] = useState(false);
  const theme = useSelector(store => store.app.theme);
  const isDark = theme === "dark";

  return (
    <main
      className={`flex-1 min-w-0 relative ${
        isDark ? "bg-[#0f0f0f] text-gray-200" : ""
      }`}
    >
      <LoaderBar loading={loading} />
      <TagList selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <VideoContainer selectedTag={selectedTag} setLoading={setLoading} />
    </main>
  );
};

export default MainContainer;
