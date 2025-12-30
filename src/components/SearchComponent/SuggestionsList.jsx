import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";


const SuggestionsList = ({ suggestions, activeIndex, setActiveIndex, onSelect }) => {

  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  return (
    <div className={`absolute top-full mt-2 w-full max-w-xl border rounded-xl overflow-hidden shadow-xl z-50
                    ${isDark ? "bg-[#1f1f1f] border-gray-700" : "bg-white border-gray-200"}`}>
      <ul>
        {suggestions.map((item, index) => (
          <li
            key={item}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition
              ${index === activeIndex
                ? `${isDark ? "bg-[#2a2a2a]" : "bg-gray-100"}`
                : `${isDark ? "hover:bg-[#2a2a2a]" : "hover:bg-gray-50"}`}`}
            onMouseDown={() => onSelect(item)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <CiSearch className="text-gray-400 text-lg" />
            <span className={`text-sm font-bold ${isDark ? "text-gray-200" : "text-gray-700"}`}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;
