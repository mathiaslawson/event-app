import LandingPage from "../pages/Landing";
import CreatorLogin from '../pages/Creator/Auth/Login';
import CreatorRegister from '../pages/Creator/Auth/Register';
import CreatorAddEvent from '../pages/Creator/Events/'
import AttendEvent from "../pages/Attendee/AttendEvent";


const ROUTES = [
  {
    path: "/",
    element: <LandingPage />,
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
