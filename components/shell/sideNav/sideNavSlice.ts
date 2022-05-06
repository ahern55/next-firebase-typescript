import { createSlice } from "@reduxjs/toolkit";
import type { AppState } from "../../../utils/store";

export interface SideNavState {
  expanded: boolean;
}

const initialState: SideNavState = {
  expanded: true,
};

export const sideNavSlice = createSlice({
  name: "sideNav",
  initialState,
  reducers: {
    toggle: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggle } = sideNavSlice.actions;

export const selectSideNavExpanded = (state: AppState) =>
  state.sideNav.expanded;

export default sideNavSlice.reducer;
