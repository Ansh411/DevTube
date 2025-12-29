import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import searchReducer from "./searchSlice";
import videosReducer from "./videosSlice";
import channelsReducer from "./channelsSlice";

const appStore = configureStore({
    reducer : {
        app : appReducer,
        search : searchReducer,
        videos: videosReducer,
        channels : channelsReducer,
    }
});

export default appStore;