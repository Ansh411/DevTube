import { createSlice } from "@reduxjs/toolkit";

const videosSlice = createSlice({
  name: "videos",
  initialState: {
    trending: null,
    searchResults: {},    
    videoById: {},         
  },
  reducers: {
    setTrending: (state, action) => {
      state.trending = action.payload;
    },
    setSearchResults: (state, action) => {
      const { query, videos } = action.payload;
      state.searchResults[query] = videos;
    },
    setVideoById: (state, action) => {
      const { videoId, video } = action.payload;
      state.videoById[videoId] = video;
    },
  },
});

export const { setTrending, setSearchResults, setVideoById } = videosSlice.actions;

export default videosSlice.reducer;
