import React, { useEffect } from "react";
import { attendeeList } from "../../../services/redux/slices/AttendeeSlice";
import { CheckIcon } from "@radix-ui/react-icons";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import * as Ariakit from "@ariakit/react";
import "./Attendees.css";
import { Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPrivateBurial } from "../../../services/redux/slices/OrganizerSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";

function Attendes() {
  const form = Ariakit.useFormStore({ defaultValues: { name: "", email: "" } });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, data } = useSelector((state) => ({
    loading: state.privateBurial.isAddPrivateBurialLoading,
    error: state.privateBurial.isAddPrivateBurialError,
    data: state.attendees.attendeeList,
  }));

  useEffect(() => {
    dispatch(attendeeList());
  }, [dispatch]);

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

        {loading === true ? (
          <Spinner />
        ) : (
          <div>
            <div
              className="mt-2 "
              style={{ height: "400px", overflow: "scroll" }}
            >
              {data?.data?.map((item, key) => {
                return (
                  <>
                    <div
                      key={key}
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
                          style={{
                            borderRadius: "10px",
                            border: "1px solid #495057",
                          }}
                        ></img>
                      </div>
                      <div className="text-start mx-4">{item?.name}</div>
                      <div
                        className="text-start mx-3 button"
                        style={{
                          width: "max-content",
                          border: "1px solid white",
                          backgroundColor:
                            item?.burial_type === "Private" ? "gray" : "",
                        }}
                        onClick={() => {
                          dispatch(addPrivateBurial({ id: item?.id }))
                            .then(unwrapResult)
                            .then(() => console.log("success"))
                            .catch(() => console.log("Login failed"));
                        }}
                      >
                        {loading === false ? (
                          item?.burial_type === "Private" ? (
                            <CheckIcon />
                          ) : (
                            <EnvelopeClosedIcon style={{ color: "black" }} />
                          )
                        ) : (
                          <Spinner size={"sm"} style={{ color: "gray" }} />
                        )}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Attendes;
