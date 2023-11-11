import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSmallOpen: boolean;
}

const initialState: SidebarState = {
  isSmallOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isSmallOpen = !state.isSmallOpen;
    },
    close: (state) => {
      state.isSmallOpen = false;
    },
  },
});

export const { toggle, close } = sidebarSlice.actions;
export default sidebarSlice.reducer;
