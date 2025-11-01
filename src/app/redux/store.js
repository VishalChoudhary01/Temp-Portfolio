import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./featuresSlice/themeSlice";
import uiReducer from "./featuresSlice/UISlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
  },
});
