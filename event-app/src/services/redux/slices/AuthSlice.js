import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoginLoading: false,
  isLoginError: null,
  isRegisterLoading: false,
  isRegisterError: null,
};

//loginAPICALL
export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  const response = await axios.post(
    "https://event-app-1.onrender.com/organizer/signin",
    payload
  );
  return response.data;
});

//registerAPICALL
export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/organiser/signup",
      payload
    );
    console.log(response);
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoginLoading = true;
      state.isLoginError = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoginLoading = false;
      state.error = action.error.message;
    });
  },
});

const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isRegisterLoading = true;
      state.isRegisterError = null;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      console.log(state);
      state.isRegisterLoading = false;
      state.data = action.payload;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isRegisterLoading = false;
      state.error = action.error.message;
    });
  },
});

export { LoginSlice, RegisterSlice };
