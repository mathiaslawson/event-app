import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice, RegisterSlice } from "./slices/AuthSlice";
import { AddAttendeeSlice, makeDonationSlice } from "./slices/AttendeeSlice";

/*

[x] - add url for login 
[x] - hit from ui
[] - set up from actions
[] - do registration


*/

const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
    register: RegisterSlice.reducer,
    addAttendee: AddAttendeeSlice.reducer,
    makeDonationSlice: makeDonationSlice.reducer
  },
});

export default store;
