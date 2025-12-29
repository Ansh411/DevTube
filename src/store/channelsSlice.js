import { createSlice } from "@reduxjs/toolkit";

const channelsSlice = createSlice({
  name: "channels",
  initialState: {
    cache: {}, // { channelId: channelData }
  },
  reducers: {
    setChannel: (state, action) => {
      const { channelId, data } = action.payload;
      state.cache[channelId] = data;
    },
  },
});

export const { setChannel } = channelsSlice.actions;
export default channelsSlice.reducer;
