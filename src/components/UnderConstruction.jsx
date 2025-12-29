import { Link } from "react-router-dom";
import { ErrorImg } from "../assets/avatars";
import { MdMail } from "react-icons/md";
import { BiPhone } from "react-icons/bi";
import { LiaSkullCrossbonesSolid } from "react-icons/lia";
import { TbError404 } from "react-icons/tb";

const UnderConstruction = ({
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      
      <div className="space-y-2">
      {/* ERROR CODE */}
      <p className="flex justify-center hover:text-rose-500 items-center text-lg tracking-[0.35em] space-x-2 text-gray-500 mb-2">
        <LiaSkullCrossbonesSolid className="text-2xl" /> <span className="cursor-pointer"> ERROR </span>
      </p>

      {/* TITLE */}
      <h1 className="flex text-3xl items-center md:text-4xl font-semibold text-gray-800 mb-1">
        <span className="hover:text-rose-500 cursor-pointer"> Website Under Construction </span>  
      </h1>
      </div>

      <TbError404 className="text-3xl" />

      {/* IMAGE */}
      <div>
      <img
        src={ErrorImg}
        alt="Website under construction"
        className="max-w-5xl w-full object-fill my-5"
      />
      </div>
      

      <Link to="/"><p className="flex gap-6 bg-gray-700 hover:bg-gray-900 hover:text-lime-500 text-white px-6 mb-6 rounded-xl shadow-sm text-lg">Home</p></Link>

      {/* CONTACT */}
      <div className="flex gap-6 bg-white px-6 py-4 rounded-xl shadow-sm text-lg">
        <span className="flex items-center gap-2 text-gray-900">
          <MdMail className="font-2xl hover:text-red-600 " /> <span className="hover:text-rose-500 cursor-pointer">4gansh11@gmail.com</span>
        </span>
        <span className="flex items-center gap-2 text-gray-900">
          <BiPhone className="text-xl hover:text-lime-500"/> <span className="hover:text-emerald-500 cursor-pointer">+91 8949423532</span>
        </span>
      </div>
    </div>
  );
};

export default UnderConstruction;
