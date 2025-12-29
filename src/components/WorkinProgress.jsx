import { FaTools } from "react-icons/fa";

const WorkInProgress = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center px-6">
      {/* ICON */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-100 mb-6">
        <FaTools className="text-red-600 text-4xl animate-pulse" />
      </div>

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900">
        {pageName} Page
      </h1>

      {/* SUBTITLE */}
      <p className="text-gray-600 mt-2 max-w-md">
        This page is currently under development.
        We’re working hard to bring this feature to you soon 🚀
      </p>

      {/* DIVIDER */}
      <div className="w-24 h-1 bg-red-600 animate-pulse rounded-full mt-6" />

      {/* FOOTER TEXT */}
      <p className="text-xs text-gray-400 mt-4">
        Thank you for your patience
      </p>
    </div>
  );
};

export default WorkInProgress;
