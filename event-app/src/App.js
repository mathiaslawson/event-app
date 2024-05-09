import * as Tooltip from "@radix-ui/react-tooltip";
import { Button, Nav } from "reactstrap";
import * as Form from "@radix-ui/react-form";
import Navbar from "./components/Navbar";
import { DialogProvider } from "./components/Dialogue/DialogContext";

import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./layout/Routes";
import LayoutWrapper from "./layout";

function App() {
  /*  
[x] - create landing page
[x] - create event creator login/signup page
[x] - add dynamic routing
[x] - create creator - add event page
[x] - creator view events
[x] - creator send private burial codes
[x] - creator dashboard

[] - view events (donattion)
[] - scan qr code or accept event
[] - overview of event

*/

  return (
    <div className="">
      <Navbar />
      <Router>
       
          <DialogProvider>
            <LayoutWrapper allroutes={AllRoutes} />
          </DialogProvider>
      
      </Router>
    </div>
  );
}

export default App;
