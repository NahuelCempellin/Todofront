import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: { user: [], isAuthenticated: false },
  reducers: {
    getUser: (state, action) => {
      state.user.push(action.payload);
      state.isAuthenticated = true;

      console.log(state.user);
      if (!state.user) {
        const usuario = localStorage.getItem("user");
        const us = JSON.parse(usuario);
        state.user.push(us);
        console.log(state.user);
      }
    },
    logoutUser: (state, action) => {
      if (action.payload === "logout") {
        state.user.pop();
        localStorage.removeItem("user");
      }
    },
  },
});

export const { getUser, logoutUser } = loginSlice.actions;
export default loginSlice.reducer;
