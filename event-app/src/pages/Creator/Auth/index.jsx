import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { Button } from "reactstrap";

function Index() {
  const [view, setView] = useState("login");

  return (
    <>
      <div>
        <div className="d-flex justify-content-center mt-5 p-3 gap-4">
          <Button
            style={{
              marginTop: 10,
              backgroundColor: view === "login" ? "#c9d1ce" : "#212529",
              color: view === "login" ? "black" : "white",
              width: "200px",
              maxWidth: "200px",
            }}
            onClick={() => setView("login")}
          >
            Login
          </Button>
          <Button
            style={{
              marginTop: 10,
              backgroundColor: view === "register" ? "#c9d1ce" : "#212529",
              color: view === "register" ? "black" : "white",
              width: "200px",
              maxWidth: "200px",
            }}
            onClick={() => setView("register")}
          >
            Register
          </Button>
        </div>
        {view === "login" ? <Login /> : <Register />}
      </div>
    </>
  );
}

export default Index;
