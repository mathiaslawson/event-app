import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup"; // For form validation
import "./styles.css";
import { Link } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginAttendee, loginUser } from "../../../services/redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, eventType } = useSelector((state) => ({
    loading: state.login.isLoginLoading,
    error: state.login.isLoginError,
    eventType: state.login.eventType,
  }));

  console.log(loading, error);

  // Use Formik hook
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (eventType === "organizer") {
        dispatch(loginUser(values))
          .then(unwrapResult)
          .then(() => {
            toast.success("Login successful");
            navigate("/creator-add-event")})
          .catch(() => {
            toast.error("Error occured in login, Please try again!");
            console.log("Login failed")});
      } else {
        dispatch(loginAttendee(values))
          .then(unwrapResult)
          .then(() => {
            toast.success("Login successful");
            navigate("/attend-event")})
          .catch(() => {console.log("Login failed")

          toast.error("Error occured in login, Please try again!");
          });
      }
    },
  });

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
          <div className="mt-3 mb-5">Login</div>
          <form onSubmit={formik.handleSubmit}>
            <div className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="email" className="FormLabel">
                  Email
                </label>
                {formik.errors.email && formik.touched.email ? (
                  <div className="FormMessage">{formik.errors.email}</div>
                ) : null}
              </div>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="Input"
              />
            </div>
            <div className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="password" className="FormLabel">
                  Password
                </label>
                {formik.errors.password && formik.touched.password ? (
                  <div className="FormMessage">{formik.errors.password}</div>
                ) : null}
              </div>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="Input"
              />
            </div>

            <div
              className="text-end fw-lighter mt-4"
              style={{
                fontSize: "0.7rem",
                cursor: "pointer",
              }}
            >
              {/* <Link
                to="/creator-auth-register"
                style={{ textDecoration: "none", color: "#c9d1ce" }}
              >
                <p>Not Registered? Sign Up here</p>
              </Link> */}
            </div>
            <button
              type="submit"
              className="Button mt-3"
              disabled={loading}
              style={{
                marginTop: 10,
                backgroundColor: "#c9d1ce",
                color: "black",
              }}
            >
              <Spinner
                size={"sm"}
                color={"#c9d1ce"}
                className="mx-2"
                style={{ display: loading ? "block" : "none" }}
                loading={loading}
              />
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
