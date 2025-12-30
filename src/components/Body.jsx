// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { Outlet, useLocation } from "react-router-dom";

// const Body = () => {

//   const location = useLocation();
//   const isWatchPage = location.pathname === "/watch";

//   return (
//     <>
//     <Header />
//     <div className="flex">
//       <Sidebar />
//       <main className={`${!isWatchPage ? "flex-1 min-w-0 min-h-screen" : ""}`}>
//         <Outlet />
//       </main>
//     </div>
//     </>
//   );
// };

// export default Body;

import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";
  const theme = useSelector(store => store.app.theme);
  const isDark = theme === "dark";

  return (
    <>
      <Header />
      <div
        className={`flex min-h-[calc(100vh-4rem)]
        ${isDark ? "bg-[#0f0f0f]" : "bg-white"}`}
      >
        <Sidebar />

        <main className={`${!isWatchPage ? "flex-1 min-w-0 min-h-screen" : ""}`}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Body;
