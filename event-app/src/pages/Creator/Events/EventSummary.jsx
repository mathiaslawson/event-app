import React, { useState, useContext } from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "reactstrap";
import Dialogue from "../../../components/Dialogue";
import { DialogContext } from "../../../components/Dialogue/DialogContext";
import MultiSelect from "../../../components/MutliSelect";
import { PlusCircledIcon } from "@radix-ui/react-icons";

function EventSummary() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { openDialog } = useContext(DialogContext);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          {/* <div className="mt-3 mb-5">
            <h6>Manage Events</h6>
          </div> */}
          <div className="d-flex justify-content-between gap-2 align-items">
            <div className=""></div>
            <div className="">
              {/* <Button
                style={{
                  backgroundColor: "black",
                  color: "gwhite",
                  border: "1px solid #495057",
                }}
                className="fw-lighter"
                onClick={() => {
                  openDialog();
                }}
              >
                <PlusCircledIcon /> Add Event
              </Button> */}
            </div>
          </div>
          {/* menu */}
          <div className="d-flex justify-content-center gap-2 mb-4 mt-2">
            {/* <div>
              <p>Events</p>
            </div> */}
          </div>
          {/* second */}
          <div>
            <div className="mt-2 d-flex justify-content-center gap-2 mb-4 mt-2">
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "220px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p className="fw-lighter text-center">Attendees</p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    40
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "220px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p className="fw-lighter text-center">Donations</p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    GHC 2,300.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventSummary;
