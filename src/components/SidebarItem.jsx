
const SidebarItem = ({ icon: Icon, label, collapsed }) => {
  
  return (
    <div className={`relative group ${!collapsed ? "pl-3.25" : ""}`}>
      <div className={`flex items-center gap-4 px-4 py-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors ${collapsed ? "pl-7" : ""}`}>
        <Icon className="text-xl shrink-0" />

        {/* Animated label */}
        <span className={`text-sm font-semibold whitespace-nowrap transition-all duration-200
            ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100 w-auto"}`}>
          {label}
        </span>
      </div>

      {/* Tooltip (collapsed mode) */}
      {/* {collapsed && (
        <span className="absolute left-full top-1/2 z-50 -translate-y-1/2 ml-3 px-3 py-1.5 text-xs font-medium bg-black text-white
         rounded-md shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity duration-200">
          {label}
        </span>
      )} */}
    </div>
  );
};

export default SidebarItem;