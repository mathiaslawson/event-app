import React from "react";
import { Button } from "@ariakit/react";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import * as Ariakit from "@ariakit/react";
import "./Attendees.css";

function Attendes() {
  const form = Ariakit.useFormStore({ defaultValues: { name: "", email: "" } });
  return (
    <div className="d-flex justify-content-center ">
      <div
        style={{ backgroundColor: "", width: "100%", height: "100%" }}
        className=""
      >
        <div className="d-flex justify-content-between gap-2 align-items">
          <div className=""></div>
          <div className=""></div>
        </div>
        {/* menu */}

        <div className="mt-5 mb-5">
          <div className="field">
            <Ariakit.Form store={form} aria-labelledby="add-new-participant">
              <Ariakit.FormInput
                type="text"
                name={form.names.name}
                placeholder="Search Attendees ...."
                className="input"
              />
              <Ariakit.FormError name={form.names.name} className="error" />
            </Ariakit.Form>
          </div>
        </div>

        <div>
          <div className="mt-2 " style={{height: "400px", overflow: 'scroll'}}>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#171a1d",
                border: "1px solid #495057",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              className="p-2 d-flex align-items-center justify-content-between mt-2"
            >
              <div>
                <img
                  src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                  width="70px"
                  alt="img"
                  style={{ borderRadius: "10px", border: "1px solid #495057" }}
                ></img>
              </div>
              <div className="text-start mx-4">Mathias Prince Lawson</div>
              <div
                className="text-start mx-3 button"
                style={{ width: "max-content", border: "1px solid white" }}
              >
                <EnvelopeClosedIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendes;
