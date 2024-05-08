import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import privacyToggleSlice from "./privacyToggleSlice";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    privacytoggle: privacyToggleSlice,
  },
});

export default store;
