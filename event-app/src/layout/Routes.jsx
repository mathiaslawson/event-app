import LandingPage from "../pages/Landing";
import CreatorLogin from '../pages/Creator/Auth/Login';
import CreatorRegister from '../pages/Creator/Auth/Register';
import CreatorAddEvent from '../pages/Creator/Events/'
import AttendEvent from "../pages/Attendee/AttendEvent";
import Verification from '../pages/Verification'
import AttendeeVerification from '../pages/Verification/AttendeeVer'
import Auth from '../pages/Creator/Auth'


const ROUTES = [
  {
    path: "/",
    element: <LandingPage />,
    routeId: 0
  },
  {
    path: "/auth",
    element: <Auth />,
    routeId: 0
  },
  {
    path: "/organizer/email-verification/:param1/:param2",
    element: <Verification />,
    routeId: 0
  },
  {
    path: "/attendee/email-verification/:param1/:param2",
    element: <AttendeeVerification />,
    routeId: 0
  },
  {
    path: "/creator-auth-login",
    element: <CreatorLogin />,
    routeId: 1
  },
  {
    path: "/creator-auth-register",
    element: <CreatorRegister />,
    routeId: 1
  },
  {
    path: "/creator-add-event",
    element: <CreatorAddEvent />,
    routeId: 1
  },
  {
    path: "/attend-event",
    element: <AttendEvent />,
    routeId: 2
  },
];

export default ROUTES;
