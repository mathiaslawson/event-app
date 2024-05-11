import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";
import "./landing.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginSlice } from "../../services/redux/slices/AuthSlice";

function LandingPage() {
  const dispatch = useDispatch();

  return (
    <>
      <div
        className="d-flex "
        style={{ justifyContent: "center", flexWrap: "wrap" }}
      >
        <div
          className="text-start fw-bolder"
          style={{ marginTop: "13rem", color: "#fff" }}
          data-aos="fade-up"
        >
          <p
            style={{
              fontFamily: "arial",
              fontSize: "2rem",
              textAlign: "center",
            }}
            className=""
          >
            <span
              style={{ fontFamily: "arial", color: "#c9d1ce" }}
              className="fw-lighter"
            >
              {" "}
              Desiderata Events <br />
            </span>
          </p>
        </div>
      </div>

      <div
        className="d-flex mt-5 justify-content-center gap-4"
        style={{ flexWrap: "wrap" }}
      >
        <div data-aos="zoom-in text-center">
          <Link to="/auth">
            <Button
              style={{
                backgroundColor: "#2e343c",
                border: "1px solid #304852",
                borderRadius: "30px",
              }}
              className=" px-5 py-2 text-center "
              onClick={() => {
                dispatch(LoginSlice.actions.uidynamic("organizer"));
              }}
            >
              Setup Event
            </Button>
          </Link>
        </div>
        <div data-aos="zoom-in text-center">
          <Link to="/auth">
            <Button
              style={{
                backgroundColor: "#2e343c",
                border: "1px solid #304852",
                borderRadius: "30px",
              }}
              className=" px-5 py-2 text-center "
              onClick={() => {
                dispatch(LoginSlice.actions.uidynamic("attend"));
              }}
            >
              Attend Event
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
