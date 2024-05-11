import { configureStore } from "@reduxjs/toolkit";
import {
  AttendeeLoginSlice,
  AttendeeRegisterSlice,
  LoginSlice,
  RegisterSlice,
  VerifyAttendeeSlice,
  VerifySlice,

} from "./slices/AuthSlice";
import { AddAttendeeSlice, AttendeeListSlice, makeDonationSlice } from "./slices/AttendeeSlice";
import { PrivateBurialSlice, listDonationsSlide } from "./slices/OrganizerSlice";

/*


*/

const store = configureStore({
  reducer: {
    login: LoginSlice.reducer,
    register: RegisterSlice.reducer,
    addAttendee: AddAttendeeSlice.reducer,
    makeDonation: makeDonationSlice.reducer,
    privateBurial: PrivateBurialSlice.reducer,
    verify: VerifySlice.reducer,
    attendeeVerify: VerifyAttendeeSlice.reducer,
    attendees: AttendeeListSlice.reducer,
    donations: listDonationsSlide.reducer, 
    attendeelogin: AttendeeLoginSlice.reducer,
    attendeeRegister: AttendeeRegisterSlice.reducer,
  },
});

export default store;
