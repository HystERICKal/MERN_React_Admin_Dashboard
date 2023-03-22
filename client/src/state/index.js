import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark", //start with the dak mode
};

export const globalSlice = createSlice({
  name: "global", //global state
  initialState,
  reducers: {
    setMode: (state) => {
      //function that changes mode from dark to light
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;
