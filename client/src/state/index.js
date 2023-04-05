import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "dark", //start with the dak mode
  userId: "63701cc1f03239b700000e", //This exists in the back end mock data. User ID is created in the routes>general.js in the server(backend)
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
