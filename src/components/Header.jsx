import { HiMenu } from "react-icons/hi";
import { MdLibraryAdd } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";
import SearchBar from "../components/SearchComponent/SearchBar";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-4.75 py-3 shadow-sm border-b border-gray-200">

        {/* Left */}
        <div className="flex items-center gap-4">
          <button onClick={() => dispatch(toggleMenu())} className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <HiMenu className="text-2xl" />
          </button>
          <a href="/">
            <img src="/DevTube_Light.png" alt="DevTube Logo" className="hidden lg:block h-10 md:h-11 cursor-pointer" />
          </a>
        </div>

        {/* Center */}
        <SearchBar />

        {/* Right */}
        <div className="flex items-center gap-5">

          <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <MdLibraryAdd className="text-xl" />
            <span className="text-sm font-medium">Create</span>
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100 transition relative cursor-pointer">
            <IoNotificationsOutline className="text-2xl" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>

          <button className="p-1 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <FaUserCircle className="text-3xl text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
