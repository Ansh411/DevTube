
// const Tag = ({ name, active, onClick }) => {
//   return (
//     <button
//         onClick={() => onClick(name)} 
//         className={`shrink-0 px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-200
//         ${active ? "bg-black text-white" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}>
//       {name}
//     </button>
//   );
// };

// export default Tag;

import { useSelector } from "react-redux";

const Tag = ({ name, active, onClick }) => {
  const theme = useSelector(store => store.app.theme);
  const isDark = theme === "dark";

  return (
    <button
      onClick={() => onClick(name)}
      className={`shrink-0 px-4 py-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-200
        ${
          active
            ? isDark
              ? "bg-white text-black"
              : "bg-black text-white"
            : isDark
            ? "bg-[#1f1f1f] text-gray-200 hover:bg-gray-800"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        }`}
    >
      {name}
    </button>
  );
};

export default Tag;
