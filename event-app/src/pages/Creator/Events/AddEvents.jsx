import React, { useState, useContext } from "react";
import * as Form from "@radix-ui/react-form";
import { Button } from "reactstrap";
import Dialogue from "../../../components/Dialogue";
import { DialogContext } from "../../../components/Dialogue/DialogContext";
import MultiSelect from "../../../components/MutliSelect";
import { PlusCircledIcon } from "@radix-ui/react-icons";

function AddEvents() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { openDialog } = useContext(DialogContext);

  return (
    <>
      <Dialogue>
        {" "}
        <div style={{ backgroundColor: "#212529", color: "#f6f4fa" }}>
          <div className="d-flex justify-content-center mt-4">
            <p>Add Event</p>
          </div>

          <div className="d-flex justify-content-center mb-5">
            <Form.Root className="FormRoot">
              <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Event Name</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your email
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid email
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input className="Input" type="email" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">
                    Event Description
                  </Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input className="Input" type="text" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Date</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input className="Input" type="date" required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Event Locations</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <MultiSelect />
                </Form.Control>
              </Form.Field>

              <Form.Submit asChild className="mt-3">
                <button
                  className="Button"
                  style={{
                    marginTop: 10,
                    backgroundColor: "#c9d1ce",
                    color: "black",
                  }}
                >
                  Submit
                </button>
              </Form.Submit>
            </Form.Root>
          </div>
        </div>
      </Dialogue>

      <div className="d-flex justify-content-center ">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          {/* <div className="mt-3 mb-5">
            <h6>Manage Events</h6>
          </div> */}
          {/* <div className="d-flex justify-content-between gap-2 align-items">
            <div className=""></div>
            <div className="">
              {" "}
              <Button
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
              </Button>
            </div>
          </div> */}
          {/* menu */}
          <div className="d-flex justify-content-center gap-2 mb-4 mt-2">
            {/* <div>
              <p>Events</p>
            </div> */}
          </div>
          {/* second */}
          <div className="mt-2">
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex gap-2 align-items-center "
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="100px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-3">
                <p className="fw-lighter">
                  Exclusive Funeral Event (The Jenkins Family)
                </p>
                <p className="fw-lighter" style={{ fontSize: "0.8rem" }}>
                  Event Name
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex gap-2 align-items-center "
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="100px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-3">
                <p className="fw-lighter">
                  Exclusive Funeral Event (The Jenkins Family)
                </p>
                <p className="fw-lighter" style={{ fontSize: "0.8rem" }}>
                  Event Name
                </p>
              </div>
            </div>
          </div>
          <div className="mt-2">
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex gap-2 align-items-center "
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="100px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-3">
                <p className="fw-lighter">
                  Exclusive Funeral Event (The Jenkins Family)
                </p>
                <p className="fw-lighter" style={{ fontSize: "0.8rem" }}>
                  Event Name
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEvents;
