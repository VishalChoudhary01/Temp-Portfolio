import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  DarkMode: false, // Change to false initially to match server
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.DarkMode = !state.DarkMode;
    },
    setDarkMode: (state, action) => {
      state.DarkMode = action.payload;
    },
  },
});

export const { toggleDarkMode, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;