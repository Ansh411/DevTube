import { CiSearch } from "react-icons/ci";

const SuggestionsList = ({ suggestions, activeIndex, setActiveIndex, onSelect }) => {
  return (
    <div className="absolute top-full mt-2 w-full max-w-xl bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xl z-50">
      <ul>
        {suggestions.map((item, index) => (
          <li
            key={item}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition
              ${index === activeIndex ? "bg-gray-100" : "hover:bg-gray-50"}`}
            onMouseDown={() => onSelect(item)}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <CiSearch className="text-gray-400 text-lg" />
            <span className="text-sm font-bold text-gray-700">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionsList;
