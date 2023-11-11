import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "../reduxTookit/sidebarContext";

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    // other reducers...
  },
});

export default store;
