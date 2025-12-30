import { FaTools } from "react-icons/fa";
import { useSelector } from "react-redux";

const WorkInProgress = ({ pageName }) => {
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen text-center px-6
        ${isDark ? "bg-black text-gray-200" : "bg-white text-gray-900"}`}
    >
      {/* ICON */}
      <div
        className={`w-20 h-20 flex items-center justify-center rounded-full mb-6
          ${isDark ? "bg-red-900/30" : "bg-red-100"}`}
      >
        <FaTools
          className={`text-4xl animate-pulse
            ${isDark ? "text-red-400" : "text-red-600"}`}
        />
      </div>

      {/* TITLE */}
      <h1
        className={`text-2xl font-bold
          ${isDark ? "text-gray-100" : "text-gray-900"}`}
      >
        {pageName} Page
      </h1>

      {/* SUBTITLE */}
      <p
        className={`mt-2 max-w-md
          ${isDark ? "text-gray-400" : "text-gray-600"}`}
      >
        This page is currently under development.
        We’re working hard to bring this feature to you soon 🚀
      </p>

      {/* DIVIDER */}
      <div
        className={`w-24 h-1 animate-pulse rounded-full mt-6
          ${isDark ? "bg-red-500" : "bg-red-600"}`}
      />

      {/* FOOTER TEXT */}
      <p
        className={`text-xs mt-4
          ${isDark ? "text-gray-500" : "text-gray-400"}`}
      >
        Thank you for your patience
      </p>
    </div>
  );
};

export default WorkInProgress;
