import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { useNavigate, useParams } from "react-router-dom";
import { verifyUser } from "../../services/redux/slices/AuthSlice";
import { Spinner } from "reactstrap";

function Verification() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { param1, param2 } = useParams();

  console.log(param1, param2);

  const { loading, error } = useSelector((state) => ({
    loading: state.verify.isVerifyLoading,
    error: state.verify.isVerifyError,
  }));

  useEffect(() => {
    dispatch(verifyUser({ param1, param2 }))
      .then(unwrapResult)
      .then(() => {
        console.log("success");
      })
      .catch(() => {
        console.log("error");
      });
  }, [param1, param2, dispatch]);

  return (
    <>
      <div
        className="d-flex justify-content-center mt-5 p-3"
        // style={{ backgroundColor: "#212529", borderRadius: "10px" , maxWidth: '50%'}}
      >
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          {loading === true ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <div>
              <img
                src="https://cdn3.emoji.gg/emojis/5609-purple-verified.png"
                alt="verify"
              />
            </div>
          )}

          <div className="mt-5 mb-5 fw-bolder">Email Verification</div>
          <div
            className="fs-5 fw-lighter"
            style={{
              cursor: "pointer",
              display: loading === true ? "none" : "block",
            }}
          >
            Your mail has been verified
          </div>
          <div
            className="fw-lighter mt-5"
            style={{
              cursor: "pointer",
              display: loading === true ? "none" : "block",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            <u>Login To Your Account</u>
          </div>
        </div>
      </div>
    </>
  );
}

export default Verification;
