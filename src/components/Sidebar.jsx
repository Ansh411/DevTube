import { useState } from "react";
import { useSelector } from "react-redux";

import { TbHomeFilled } from "react-icons/tb";
import { SiYoutubeshorts, SiYoutubegaming, SiPodcastindex } from "react-icons/si";
import { MdSubscriptions, MdPlaylistPlay, MdOutlineTimer } from "react-icons/md";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { PiMusicNotesFill, PiFilmSlateBold, PiCoatHangerFill } from "react-icons/pi";
import { GiNewspaper } from "react-icons/gi";
import { FaTrophy, FaHistory, FaAngleDown, FaAngleUp } from "react-icons/fa";
import { FaGraduationCap, FaMicrophoneLines } from "react-icons/fa6";
import { BiSolidLike } from "react-icons/bi";
import { PiVideoFill, PiDownloadSimpleBold } from "react-icons/pi";

const SidebarItem = ({ icon: Icon, label, collapsed }) => {
  return (
    <div className="relative group">
      <div className={`flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors ${collapsed ? "pl-7" : ""}`}>
        <Icon className="text-xl shrink-0" />

        {/* Animated label */}
        <span className={`text-sm font-medium whitespace-nowrap transition-all duration-200
            ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>
          {label}
        </span>
      </div>

      {/* Tooltip (collapsed mode) */}
      {collapsed && (
        <span className="absolute left-full top-1/2 z-50 -translate-y-1/2 ml-3 px-3 py-1.5 text-xs font-medium bg-black text-white
         rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200">
          {label}
        </span>
      )}
    </div>
  );
};

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [showMore, setShowMore] = useState(false);

  // Always collapsed on small/medium screens
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
      className={`h-[calc(100vh-4rem)] bg-white border-r border-gray-200
        overflow-y-auto overflow-x-hidden transition-[width] duration-300 ease-in-out shrink-0 w-20
        ${isMenuOpen ? "lg:w-64" : "lg:w-20"}`}>
      <div className="py-4 space-y-3">

        {/* MAIN */}
        <SidebarItem icon={TbHomeFilled} label="Home" collapsed={collapsed} />
        <SidebarItem icon={SiYoutubeshorts} label="Shorts" collapsed={collapsed} />
        <SidebarItem icon={MdSubscriptions} label="Subscriptions" collapsed={collapsed} />

        <hr className="my-3 border-t-2 border-gray-400/50 w-[90%] mx-auto" />

        {/* YOU */}
        {!collapsed && (
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase">
            You
          </p>
        )}

        <SidebarItem icon={FaHistory} label="History" collapsed={collapsed} />
        <SidebarItem icon={MdPlaylistPlay} label="Playlists" collapsed={collapsed} />
        <SidebarItem icon={MdOutlineTimer} label="Watch Later" collapsed={collapsed} />
        <SidebarItem icon={BiSolidLike} label="Liked Videos" collapsed={collapsed} />
        <SidebarItem icon={PiVideoFill} label="Your Videos" collapsed={collapsed} />
        <SidebarItem icon={PiDownloadSimpleBold} label="Downloads" collapsed={collapsed} />

        <hr className="my-3 border-t-2 border-gray-400/50 w-[90%] mx-auto" />

        {/* EXPLORE */}
        {!collapsed && (
          <p className="px-4 text-xs font-semibold text-gray-500 uppercase">
            Explore
          </p>
        )}

        {(showMore ? exploreItems : exploreItems.slice(0, 4)).map((item) => (
          <SidebarItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            collapsed={collapsed}
          />
        ))}

        {/* SHOW MORE */}
        {!collapsed && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 transition cursor-pointer">
            {showMore ? (
              <>
                Show less <FaAngleUp />
              </>
            ) : (
              <>
                Show more <FaAngleDown />
              </>
            )}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
