import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isAddAttendeeLoading: false,
  isAddAttendeeError: null,
  isMakeDonationLoading: false, 
  isMakeDonationError: null
};

//add-new-attendee
export const addAttendee = createAsyncThunk(
  "attendee/add-attendee",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/organizer/add-new-attendee",
      payload
    );
    console.log(response);
  }
);

//make-donation
export const makeDonation = createAsyncThunk(
  "attendee/make-donation",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/organizer/donate",
      payload
    );
    console.log(response);
  }
);

const AddAttendeeSlice = createSlice({
  name: "add-attendee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAttendee.pending, (state) => {
      state.isAddAttendeeLoading = true;
    });
    builder.addCase(addAttendee.fulfilled, (state, action) => {
      state.isAddAttendeeLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addAttendee.rejected, (state, action) => {
      state.isAddAttendeeLoading = false;
      state.error = action.error.message;
    });
  },
});

const makeDonationSlice = createSlice({
  name: "make-donation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(makeDonation.pending, (state) => {
      state.isMakeDonationLoading = true;
    });
    builder.addCase(makeDonation.fulfilled, (state, action) => {
      state.isMakeDonationLoading = false;
      state.data = action.payload;
    });
    builder.addCase(makeDonation.rejected, (state, action) => {
      state.isMakeDonationLoading = false;
      state.error = action.error.message;
    });
  },
});

export { AddAttendeeSlice , makeDonationSlice};
