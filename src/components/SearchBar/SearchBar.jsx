import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import useSearchSuggestions from "../../hooks/useSearchSuggestions";
import SuggestionsList from "./SuggestionsList";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const suggestions = useSearchSuggestions(searchQuery);

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;

    if (e.key === "ArrowDown") {
      setActiveIndex((i) => (i + 1) % suggestions.length);
    }

    if (e.key === "ArrowUp") {
      setActiveIndex((i) =>
        i <= 0 ? suggestions.length - 1 : i - 1
      );
    }

    if (e.key === "Enter" && activeIndex >= 0) {
      setSearchQuery(suggestions[activeIndex]);
      setShowSuggestions(false);
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
        className="grow px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-rose-500"
      />

      <button className="px-5 border border-l-0 border-gray-300 rounded-r-full bg-gray-100 hover:bg-gray-200 hover:border-rose-600 cursor-pointer transition">
        <CiSearch className="text-2xl" />
      </button>

      {showSuggestions && suggestions.length > 0 && (
        <SuggestionsList
          suggestions={suggestions}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          onSelect={(value) => {
            setSearchQuery(value);
            setShowSuggestions(false);
          }}
        />
      )}
    </div>
  );
};

export default SearchBar;
