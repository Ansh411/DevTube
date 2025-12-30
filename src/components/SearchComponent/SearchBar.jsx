import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useSearchSuggestions from "../../hooks/useSearchSuggestions";
import SuggestionsList from "./SuggestionsList";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const theme = useSelector((store) => store.app.theme);
  const isDark = theme === "dark";

  const navigate = useNavigate();
  const suggestions = useSearchSuggestions(searchQuery);

  const submitSearch = (query) => {
    if (!query.trim()) return;
    setShowSuggestions(false);
    navigate(`/results?search_query=${encodeURIComponent(query)}`);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) {
      if (e.key === "Enter") submitSearch(searchQuery);
      return;
    }

    if (e.key === "ArrowDown") {
      setActiveIndex((i) => (i + 1) % suggestions.length);
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((i) =>
        i <= 0 ? suggestions.length - 1 : i - 1
      );
    }

    if (e.key === "Enter") {
      submitSearch(activeIndex >= 0 ? suggestions[activeIndex] : searchQuery);
    }
  };

  return (
    <div className="relative flex w-full max-w-xl">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        onKeyDown={handleKeyDown}
        placeholder="Search"
        className={`grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-rose-500
                   ${isDark ? "text-white border-gray-700 placeholder-gray-400 bg-[#121212]" : "bg-white text-black"}`}/>

      <button
        onClick={() => submitSearch(searchQuery)}
        className={`px-5 border border-l-0  rounded-r-full  hover:border-rose-600 cursor-pointer transition
                   ${isDark ? "bg-[#1f1f1f] border-gray-700 hover:bg-[#2a2a2a]" : "border-gray-300 bg-gray-100 hover:bg-gray-200"}`}
      >
        <CiSearch className={`text-2xl ${isDark && "text-gray-300"}`} />
      </button>

      {showSuggestions && suggestions.length > 0 && (
        <SuggestionsList
          suggestions={suggestions}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onSelect={submitSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;
