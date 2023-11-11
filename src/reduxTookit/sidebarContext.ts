import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSmallOpen: boolean;
  isActive: boolean
}

const initialState: SidebarState = {
  isSmallOpen: false,
  isActive: false
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
    activeToggle: (state) => {
      state.isActive = !state.isActive
    }
  },
});

export const { toggle, close, activeToggle } = sidebarSlice.actions;
export default sidebarSlice.reducer;
