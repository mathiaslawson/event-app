import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoginLoading: false,
  isLoginError: null,
  isRegisterLoading: false,
  isRegisterError: null,
  isloggedIn: false,
  isVerifyLoading: false,
  isVerifyError: null,
  eventType: "",
};

//loginAPICALL
export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  const response = await axios.post(
    "https://event-app-1.onrender.com/organizer/signin",
    payload
  );
  return response.data;
});

export const loginAttendee = createAsyncThunk(
  "auth/login",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/attendee/signin",
      payload
    );
    return response.data;
  }
);

//registerAPICALL
export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/organizer/signup",
      payload
    );
    console.log(response);
  }
);

export const registerAttendee = createAsyncThunk(
  "auth/register",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/attendee/signup",
      payload
    );
    return response.data.data;
  }
);

export const verifyUser = createAsyncThunk(
  "auth/verify",
  async ({ param1, param2 }) => {
    const response = await axios.get(
      `https://event-app-1.onrender.com/organizer/email-verification/${param1}/${param2}`
    );
    return response.data.data;
  }
);

export const verifyAttendeeUser = createAsyncThunk(
  "auth/verify",
  async ({ param1, param2 }) => {
    const response = await axios.get(
      `https://event-app-1.onrender.com/attendee/email-verification/${param1}/${param2}`
    );
    return response.data.data;
  }
);

const LoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    uidynamic: (state, action) => {
      state.eventType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.isLoginLoading = true;
      state.isLoginError = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      state.isloggedIn = true;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoginLoading = false;
      state.error = action.error.message;
    });
  },
});

const AttendeeLoginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAttendee.pending, (state) => {
      state.isLoginLoading = true;
      state.isLoginError = null;
    });
    builder.addCase(loginAttendee.fulfilled, (state, action) => {
      state.isLoginLoading = false;
      state.isloggedIn = true;
      state.data = action.payload;
    });
    builder.addCase(loginAttendee.rejected, (state, action) => {
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

const AttendeeRegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerAttendee.pending, (state) => {
      state.isRegisterLoading = true;
      state.isRegisterError = null;
    });
    builder.addCase(registerAttendee.fulfilled, (state, action) => {
      console.log(state);
      state.isRegisterLoading = false;
      state.data = action.payload;
    });
    builder.addCase(registerAttendee.rejected, (state, action) => {
      state.isRegisterLoading = false;
      state.error = action.error.message;
    });
  },
});

const VerifySlice = createSlice({
  name: "verify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyUser.pending, (state) => {
      state.isVerifyLoading = true;
      state.isVerifyError = null;
    });
    builder.addCase(verifyUser.fulfilled, (state, action) => {
      state.isVerifyLoading = false;
      state.data = action.payload;
    });
    builder.addCase(verifyUser.rejected, (state, action) => {
      state.isVerifyLoading = false;
      state.error = action.error.message;
    });
  },
});

const VerifyAttendeeSlice = createSlice({
  name: "verify",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(verifyAttendeeUser.pending, (state) => {
      state.isVerifyLoading = true;
      state.isVerifyError = null;
    });
    builder.addCase(verifyAttendeeUser.fulfilled, (state, action) => {
      state.isVerifyLoading = false;
      state.data = action.payload;
    });
    builder.addCase(verifyAttendeeUser.rejected, (state, action) => {
      state.isVerifyLoading = false;
      state.error = action.error.message;
    });
  },
});

export {
  LoginSlice,
  RegisterSlice,
  VerifySlice,
  AttendeeRegisterSlice,
  AttendeeLoginSlice,
  VerifyAttendeeSlice
};
