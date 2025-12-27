import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../store/searchSlice";

const useSearchSuggestions = (searchQuery) => {
  const dispatch = useDispatch();
  const { cache } = useSelector((store) => store.search);

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(async () => {
      // ✅ Cache hit
      if (cache[searchQuery]) {
        setSuggestions(cache[searchQuery]);
        return;
      }

      // ❌ Cache miss → API call
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();

      setSuggestions(json[1]);

      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  return suggestions;
};

export default useSearchSuggestions;
