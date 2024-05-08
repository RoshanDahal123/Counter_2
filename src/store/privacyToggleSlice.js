import { createSlice } from "@reduxjs/toolkit";

const privacyToggleSlice = createSlice({
  name: "privacytoggle",
  initialState: false,
  reducers: {
    privacyToggle: (state) => {
      return (state = !state);
    },
  },
});

export const { privacyToggle } = privacyToggleSlice.actions;
export default privacyToggleSlice.reducer;
