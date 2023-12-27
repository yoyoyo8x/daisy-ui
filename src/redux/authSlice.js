import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true;
      state.user = action.payload?.username;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
