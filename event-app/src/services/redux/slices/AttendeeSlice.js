import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isAddAttendeeLoading: false,
  isAddAttendeeError: null,
  isMakeDonationLoading: false,
  isMakeDonationError: null,
  isAttendeesLoading: false,
  isAttendeesError: null,
  attendeeList: [],
  donationInfo: [],
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
   
    return response.data.data;
  }
);

export const attendeeList = createAsyncThunk(
  "attendee/attendee-list",
  async () => {
    const response = await axios.get(
      "https://event-app-1.onrender.com/organizer/get-all-attendees"
    );
    return response.data;
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
      state.donationInfo = action.payload;
    });
    builder.addCase(makeDonation.rejected, (state, action) => {
      state.isMakeDonationLoading = false;
      state.isMakeDonationError = action.error.message;
    });
  },
});

const AttendeeListSlice = createSlice({
  name: "attendee-list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(attendeeList.pending, (state) => {
      state.isAttendeesLoading = true;
    });
    builder.addCase(attendeeList.fulfilled, (state, action) => {
      state.isAttendeesLoading = false;
      state.attendeeList = action.payload;
    });
    builder.addCase(attendeeList.rejected, (state, action) => {
      state.isAttendeesLoading = false;
      state.isAttendeesError = action.error.message;
    });
  },
});

export { AddAttendeeSlice, makeDonationSlice, AttendeeListSlice };
