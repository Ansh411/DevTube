import { useSelector } from "react-redux";

const Loader = () => {
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";
  return (
    <div className={`fixed inset-0 flex items-center justify-center ${isDark ? "bg-gray-950" : "bg-white"}  z-50`}>
      <div className={`w-12 h-12 border-4 ${isDark ? "border-gray-700" : "border-gray-200"}  border-t-red-600 rounded-full animate-spin`} />
    </div>
  );
};

export default Loader;
