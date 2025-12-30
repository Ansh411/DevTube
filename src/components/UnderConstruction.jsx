import { Link } from "react-router-dom";
import { getRandomErrorImg } from "../assets/avatars";
import { MdMail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { TbError404 } from "react-icons/tb";
import { useSelector } from "react-redux";

const UnderConstruction = () => {
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";
  const ErrorImg = getRandomErrorImg();

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 text-center
        ${isDark ? "bg-black text-gray-200" : "bg-white text-gray-900"}`}
    >
      
      <div className="space-y-2">
        {/* ERROR CODE */}
        <p
          className={`flex justify-center  items-center text-lg tracking-[0.35em] space-x-2 mb-2
            ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          <span> ERROR </span>
        </p>

        {/* TITLE */}
        <h1
          className={`flex text-3xl gap-x-2 items-center md:text-4xl font-semibold mb-1
            ${isDark ? "text-gray-100" : "text-gray-800"}`}
        >
          <LiaSkullCrossbonesSolid className="text-5xl text-rose-500" />
          <span className="text-rose-500">
            Website Under Maintenance
          </span>
          <LiaSkullCrossbonesSolid className="text-5xl text-rose-500" />
        </h1>
      </div>

      <TbError404
        className={`${isDark ? "text-gray-300" : "text-gray-700"} text-3xl`}
      />

      {/* IMAGE */}
      <div>
        <img
          src={ErrorImg}
          alt="Website under construction"
          className="max-w-5xl w-full object-fill my-5"
        />
      </div>

      {/* HOME BUTTON */}
      <Link to="/">
        <p
          className={`flex gap-6 px-6 mb-6 rounded-xl shadow-sm text-lg transition cursor-pointer
            ${
              isDark
                ? "bg-gray-800 hover:bg-gray-700 text-gray-100 hover:text-lime-400"
                : "bg-gray-700 hover:bg-gray-900 text-white hover:text-lime-500"
            }`}
        >
          Home
        </p>
      </Link>

      {/* CONTACT */}
      <div
        className={`flex gap-6 px-6 py-4 rounded-xl shadow-sm text-lg
          ${isDark ? "bg-[#1f1f1f]" : "bg-white"}`}
      >
        <span
          className={`flex items-center gap-2
            ${isDark ? "text-gray-200" : "text-gray-900"}`}
        >
          <MdMail className="font-2xl text-red-500" />
          <span className={`${isDark ? "hover:text-zinc-100" : "hover:text-slate-900"} cursor-pointer`}>
            4gansh11@gmail.com
          </span>
        </span>

        <span
          className={`flex items-center gap-2
            ${isDark ? "text-gray-200" : "text-gray-900"}`}
        >
          <BiPhone className="text-xl text-lime-500" />
          <span className={`${isDark ? "hover:text-zinc-100" : "hover:text-slate-900"} cursor-pointer`}>
            +91 8949423532
          </span>
        </span>
      </div>
    </div>
  );
};

export default UnderConstruction;

