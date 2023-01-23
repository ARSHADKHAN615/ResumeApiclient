import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.error = false;
    },
    loginFailed: (state) => {
      state.error = true;
      state.currentUser = null;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginSuccess, loginFailed, logout } = authSlice.actions;

export default authSlice.reducer;
