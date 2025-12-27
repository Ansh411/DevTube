import { createSlice } from "@reduxjs/toolkit";

const MAX_CACHE_SIZE = 100;

const searchSlice = createSlice({
  name: "search",
  initialState: {
    cache: {},      // { query: suggestions[] }
    order: [],      // LRU order: oldest → newest
  },
  reducers: {
    cacheResults: (state, action) => {
      const [query, results] = Object.entries(action.payload)[0];

      // If query already exists → remove it from order
      if (state.cache[query]) {
        state.order = state.order.filter((q) => q !== query);
      }

      // Add/update cache
      state.cache[query] = results;
      state.order.push(query);

      // Evict least recently used if limit exceeded
      if (state.order.length > MAX_CACHE_SIZE) {
        const lruKey = state.order.shift(); // remove oldest
        delete state.cache[lruKey];
      }
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
