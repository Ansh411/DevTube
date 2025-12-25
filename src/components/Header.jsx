import { HiMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { MdLibraryAdd } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/appSlice";

const Header = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 py-3 shadow-sm border-b border-gray-200">

        <div className="flex items-center gap-4">
          <button onClick={() => toggleMenuHandler()} className="p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
            <HiMenu className="text-2xl" />
          </button>

          <a href="/">
          <img
            src="/DevTube_Light.png" alt="DevTube Logo" className="h-9 md:h-10 cursor-pointer"
          />
          </a>
        </div>

        <div className="flex flex-1 justify-center">
          <div className="flex w-full max-w-xl">
            <input type="text" placeholder="Search" className="grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-rose-500 "/>
            <button className="px-5 border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 cursor-pointer transition">
              <CiSearch className="text-2xl" />
            </button>
          </div>
        </div>

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
