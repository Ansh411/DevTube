import { useState } from "react";
import { useSelector } from "react-redux";

import SidebarItem from "./SidebarItem";

import { TbHomeFilled } from "react-icons/tb";
import { SiYoutubeshorts, SiYoutubegaming, SiPodcastindex } from "react-icons/si";
import { MdSubscriptions, MdPlaylistPlay, MdOutlineTimer, MdFeedback } from "react-icons/md";
import { HiMiniShoppingBag, HiMiniQuestionMarkCircle } from "react-icons/hi2";
import { PiMusicNotesFill, PiFilmSlateBold, PiCoatHangerFill } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { FaTrophy, FaHistory, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaGraduationCap, FaMicrophoneLines } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { PiVideoFill, PiDownloadSimpleBold } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { RiFlagFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  const [showMore, setShowMore] = useState(false);

  const collapsed = !isMenuOpen;

  const exploreItems = [
    { icon: HiMiniShoppingBag, label: "Shopping" },
    { icon: PiMusicNotesFill, label: "Music" },
    { icon: PiFilmSlateBold, label: "Movies" },
    { icon: SiPodcastindex, label: "Live" },
    { icon: SiYoutubegaming, label: "Gaming" },
    { icon: GiNewspaper, label: "News" },
    { icon: FaTrophy, label: "Sports" },
    { icon: FaGraduationCap, label: "Courses" },
    { icon: PiCoatHangerFill, label: "Fashion & Beauty" },
    { icon: FaMicrophoneLines, label: "Podcasts" },
  ];

  return (
    <aside
      className={`h-[calc(100vh-4rem)] border-r
        overflow-y-auto overflow-x-hidden transition-[width] duration-300 ease-in-out shrink-0 w-20 no-scrollbar
        ${isMenuOpen ? "lg:w-64" : "lg:w-20"}
        ${isDark ? "bg-[#0f0f0f] border-gray-800 text-gray-200" : "bg-white border-gray-200"}`}
    >
      <div className="py-4 space-y-1.5">

        {/* MAIN */}
        <Link className="block" to="/"><SidebarItem icon={TbHomeFilled} label="Home" collapsed={collapsed} /></Link>
        <Link className="block" to="/shorts"><SidebarItem icon={SiYoutubeshorts} label="Shorts" collapsed={collapsed} /></Link>
        <Link className="block" to="/subscriptions"><SidebarItem icon={MdSubscriptions} label="Subscriptions" collapsed={collapsed} /></Link>

        <hr className={`my-3 border-t-2 w-[90%] mx-auto ${isDark ? "border-gray-700/70" : "border-gray-400/50"}`} />

        {/* YOU */}
        {!collapsed && (
          <p className={`hidden lg:block px-4 text-xs font-bold uppercase ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            You
          </p>
        )}

        <Link className="block" to="/history"><SidebarItem icon={FaHistory} label="History" collapsed={collapsed} /></Link>
        <Link className="block" to="/playlists"><SidebarItem icon={MdPlaylistPlay} label="Playlists" collapsed={collapsed} /></Link>
        <Link className="block" to="/watch-later"><SidebarItem icon={MdOutlineTimer} label="Watch Later" collapsed={collapsed} /></Link>
        <Link className="block" to="/liked-videos"><SidebarItem icon={BiSolidLike} label="Liked Videos" collapsed={collapsed} /></Link>
        <Link className="block" to="/your-videos"><SidebarItem icon={PiVideoFill} label="Your Videos" collapsed={collapsed} /></Link>
        <Link className="block" to="/downloads"><SidebarItem icon={PiDownloadSimpleBold} label="Downloads" collapsed={collapsed} /></Link>

        <hr className={`my-3 border-t-2 w-[90%] mx-auto ${isDark ? "border-gray-700/70" : "border-gray-400/50"}`} />

        {/* EXPLORE */}
        {!collapsed && (
          <p className={`hidden lg:block px-4 text-xs font-bold uppercase ${isDark ? "text-gray-400" : "text-gray-500"}`}>
            Explore
          </p>
        )}

        {(showMore ? exploreItems : exploreItems.slice(0, 4)).map((item) => (
          <Link
            className="block"
            key={item.label}
            to={"/explore/" + item.label.toLowerCase().replace(/\s+|&/g, "-")}
          >
            <SidebarItem icon={item.icon} label={item.label} collapsed={collapsed} />
          </Link>
        ))}

        {/* SHOW MORE */}
        {!collapsed && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`hidden lg:flex w-full items-center gap-2 px-4 py-2 text-sm font-bold rounded-lg transition cursor-pointer
              ${isDark ? "hover:bg-gray-800 text-gray-300" : "hover:bg-gray-100"}`}
          >
            {showMore ? <>Show less <FaAngleUp /></> : <>Show more <FaAngleDown /></>}
          </button>
        )}

        <hr className={`my-3 border-t-2 w-[90%] mx-auto ${isDark ? "border-gray-700/70" : "border-gray-400/50"}`} />

        <Link className="block" to="/settings"><SidebarItem icon={IoSettings} label="Settings" collapsed={collapsed} /></Link>
        <Link className="block" to="/report-history"><SidebarItem icon={RiFlagFill} label="Report History" collapsed={collapsed} /></Link>
        <Link className="block" to="/help"><SidebarItem icon={HiMiniQuestionMarkCircle} label="Help" collapsed={collapsed} /></Link>
        <Link className="block" to="/send-feedback"><SidebarItem icon={MdFeedback} label="Send Feedback" collapsed={collapsed} /></Link>

        <hr className={`my-3 border-t-2 w-[90%] mx-auto ${isDark ? "border-gray-700/70" : "border-gray-400/50"}`} />
      </div>
    </aside>
  );
};

export default Sidebar;
