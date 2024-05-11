import React, { useEffect, useState } from "react";
import { Button } from "@ariakit/react";
import { useDispatch, useSelector } from "react-redux";
import { attendeeList } from "../../../services/redux/slices/AttendeeSlice";
import { makeDonation } from "../../../services/redux/slices/OrganizerSlice";
import { Spinner } from "reactstrap";

function AttendEvent() {
  const dispatch = useDispatch();

  const { data, loading, error, url } = useSelector((state) => ({
    data: state.login.data,
    loading: state.makeDonation.isMakeDonationLoading,
    error: state.makeDonation.isMakeDonationError,
    url: state.makeDonation.donationInfo,
  }));

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  console.log(url, "url");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    if (!isNaN(value) && Number(value) > 1) {
      setAmount(value);
    } else {
      setAmount("");
    }
  };

  useEffect(() => {
    if (url.authorization_url) {
      window.open(url.authorization_url, "_blank");
    }
  }, [url.authorization_url]);

  console.log(data?.data, "data");

  const handleMakeDonation = () => {
    // You can replace this with your actual dispatch logic
    console.log("Email:", email);
    console.log("Amount:", amount);
    dispatch(
      makeDonation({
        email: data?.data?.email,
        amount: amount,
        id: data?.data?.id,
      })
    );
    setAmount("");
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5 mb-5"
        >
          <div className="mb-5">
            <img
              src="https://i.pinimg.com/736x/98/1d/6b/981d6b2e0ccb5e968a0618c8d47671da.jpg"
              alt=""
              width="100px"
              height="100px"
              style={{ borderRadius: "50%" }}
              className="mb-3"
            ></img>
            <div className="fw-lighter">{data?.data?.name}</div>
            <div>
              <b>{data?.data?.email}</b>
            </div>
          </div>

          <div className="fw-bolder">Confirm Attendance</div>
          <div className="fw-lighter">
            <p>Scan QR Code To Download Brochure</p>
          </div>
          <div
            className="mt-3 p-3 px-5"
            style={{
              // border: "1px dashed white",
              borderRadius: "10px",
              height: "300px",
              width: "auto",
            }}
          >
            <img
              src="data:image/png;base64,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"
              alt="w"
              width="200px"
            ></img>
          </div>

          <h6>
            <u>Assigned Locations</u>
          </h6>
          <div
            style={{
              display: "flex",
            }}
            className="justify-content-center gap-4 p-3"
          >
            {data?.data?.event_type?.map((location) => (
              <div
                style={{
                  border: "1px solid gray",
                  backgroundColor: "#0e1012",
                  borderRadius: "10px",
                }}
                className="px-3 p-2"
              >
                {location}
              </div>
            ))}
          </div>

          {/* <div className="mt-4">
            <h6>The Jenkins Funeral</h6>
          </div> */}
          <div className="mt-3">
            <label style={{ color: "white" }} className="fw-bolder">
              Amount (GHC)
            </label>
            <input
              id="amount"
              name="amount"
              type="amount"
              className="Input mt-3"
              style={{ border: "1px solid gray" }}
              value={amount}
              onChange={handleAmountChange}
            />
            {/* <div className="mt-3">
              <label style={{ color: "white" }} className="fw-bolder">
                Amount (GHC)
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                className="Input mt-3"
                style={{ border: "1px solid gray" }}
                value={amount}
                onChange={handleAmountChange}
                disabled={!(amount && Number(amount) > 1)}
              />
            </div> */}
            <div className="mt-4">
              <button
                className="btn btn-dark"
                style={{ border: "1px solid gray" }}
                onClick={handleMakeDonation}
                // disabled={!(amount && Number(amount) > 1)}
              >
                <Spinner
                  size={"sm"}
                  className="mx-2"
                  style={{ display: loading ? "" : "none" }}
                />
                Make Donation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AttendEvent;
