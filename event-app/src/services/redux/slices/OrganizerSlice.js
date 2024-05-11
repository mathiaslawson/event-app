import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isAddPrivateBurialLoading: false,
  isAddPrivateBurialError: null,
  donationsLoading: false, 
  donationsError: null, 
  donationsList: []
  //   isMakeDonationLoading: false,
  //   isMakeDonationError: null
};

//add-new-attendee
export const addPrivateBurial = createAsyncThunk(
  "attendee/add-attendee",
  async (payload) => {
    const response = await axios.post(
      "https://event-app-1.onrender.com/organizer/add-to-private-burial",
      payload
    );
    console.log(response);
  }
);

export const listDonations = createAsyncThunk(
  "attendee/list-dontations",
  async (payload) => {
    const response = await axios.get(
      "https://event-app-1.onrender.com/organizer/get-all-donations",
      payload
    );
    return response.data;
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

const PrivateBurialSlice = createSlice({
  name: "private-burial",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPrivateBurial.pending, (state) => {
      state.isAddPrivateBurialLoading = true;
    });
    builder.addCase(addPrivateBurial.fulfilled, (state, action) => {
      state.isAddPrivateBurialLoading = false;
      state.data = action.payload;
    });
    builder.addCase(addPrivateBurial.rejected, (state, action) => {
      state.isAddPrivateBurialLoading = false;
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


const listDonationsSlide = createSlice({
  name: "list-donations",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listDonations.pending, (state) => {
      state.donationsLoading = true;
    });
    builder.addCase(listDonations.fulfilled, (state, action) => {
      state.donationsLoading = false;
      state.donationsList = action.payload;
    });
    builder.addCase(listDonations.rejected, (state, action) => {
      state.donationsLoading = false;
      state.donationsError = action.error.message;
    });
  },
});

export { PrivateBurialSlice, makeDonationSlice, listDonationsSlide };
