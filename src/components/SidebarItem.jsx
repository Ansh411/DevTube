import { useSelector } from "react-redux";

const SidebarItem = ({ icon: Icon, label, collapsed }) => {
  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  return (
    <div className={`relative group ${!collapsed ? "pl-3.25" : ""}`}>
      <div
        className={`flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer transition-colors
          hover:bg-gray-100
          ${collapsed ? "pl-7" : ""}
          ${isDark ? "hover:bg-gray-800 text-gray-300" : ""}`}
      >
        <Icon className="text-xl shrink-0" />

        <span
          className={`text-sm font-semibold whitespace-nowrap transition-all duration-200 hidden lg:inline-block
            ${collapsed ? "lg:opacity-0 w-0 overflow-hidden" : "lg:opacity-100 w-auto"}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
};

export default SidebarItem;
