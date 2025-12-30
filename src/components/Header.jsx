
import { HiMenu } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleTheme } from "../store/appSlice";
import SearchBar from "../components/SearchComponent/SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.app.theme);

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 ${
        isDark ? "bg-black" : "bg-white"
      }`}
    >
      <div
        className={`flex items-center justify-between px-4.75 py-3 shadow-sm border-b ${
          isDark ? "border-gray-800" : "border-gray-200"
        }`}
      >

        {/* Left */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => dispatch(toggleMenu())}
            className={`p-2 rounded-full transition cursor-pointer ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
          >
            <HiMenu className={`text-2xl ${isDark ? "text-white" : ""}`} />
          </button>

          <Link to="/" className="block">
            <img
              src={isDark ? "/DevTube_Dark.png" : "/DevTube_Light.png"}
              alt="DevTube Logo"
              className="hidden lg:block h-11 md:h-12 cursor-pointer"
            />
          </Link>
        </div>

        {/* Center */}
        <div className="flex-1 max-w-150 mx-4 hidden sm:block"> <SearchBar /> </div>

        {/* Right */}
        <div className="flex items-center gap-3 shrink-0">

          {/* 🌙 / ☀️ THEME TOGGLE */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={`p-2 rounded-full transition cursor-pointer ${
              isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
            }`}
            title="Toggle theme"
          >
            {isDark ? (
              <FiSun className="text-xl text-yellow-400" />
            ) : (
              <FiMoon className="text-xl text-gray-700" />
            )}
          </button>

          <Link to="/create">
            <button
              className={`hidden md:flex items-center gap-2 px-4 py-2 border rounded-full transition cursor-pointer
                 ${isDark ? "border-gray-700 hover:bg-gray-800 text-white" : "border-gray-300 hover:bg-gray-100"}`}>
              <MdLibraryAdd className="text-xl" />
              <span className="text-sm font-medium">Create</span>
            </button>
          </Link>

          <Link to="/notifications">
            <button
              className={`p-2 rounded-full transition relative cursor-pointer ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <IoNotificationsOutline
                className={`text-2xl ${isDark ? "text-white" : ""}`}
              />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
          </Link>

          <Link to="/user">
            <button
              className={`p-1 rounded-full transition cursor-pointer ${
                isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
              }`}
            >
              <FaUserCircle
                className={`text-3xl ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              />
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
};

export default Header;
