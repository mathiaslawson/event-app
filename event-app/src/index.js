import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import "@radix-ui/themes/styles.css";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("Here is your toast.");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster />

      <div className="intro-hero" style={{ height: "100svh" }}>
        <div className="intro-hero-overlay"></div>
        <Container className=" intro-hero-content">
          <div className="d-flex justify-content-between mt-5">
            <div style={{ cursor: "pointer", color: "#fff" }}></div>
            <div style={{ color: "#fff" }}>{/* <Navbar /> */}</div>
          </div>

          <App />
        </Container>
      </div>
    </Provider>
  </React.StrictMode>
);
