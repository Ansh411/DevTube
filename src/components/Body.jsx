import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";

const Body = () => {

  const location = useLocation();
  const isWatchPage = location.pathname === "/watch";

  return (
    <>
    <Header />
    <div className="flex">
      <Sidebar />
      <main className={`${!isWatchPage ? "flex-1 min-w-0 min-h-screen" : ""}`}>
        <Outlet />
      </main>
    </div>
    </>
  );
};

export default Body;
