import React from "react";
import { Button } from "@ariakit/react";

function AttendEvent() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          <div className="fw-bolder">Confirm Attendance</div>
          <div className="fw-lighter">
            <p>Scan QR Code</p>
          </div>
          <div
            className="mt-5 p-3 px-5"
            style={{
              border: "1px dashed white",
              borderRadius: "10px",
              height: "300px",
              width: "300px",
            }}
          ></div>
          <div className="mt-4">
            <h6>The Jenkins Funeral</h6>
          </div>
          <div className="mt-4">
            <Button
              className="btn btn-dark"
              style={{ border: "1px solid gray" }}
            >
              Confirm Attendance
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendEvent;
