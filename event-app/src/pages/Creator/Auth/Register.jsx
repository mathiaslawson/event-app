import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.css";
import { Link } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {

  registerAttendee,
  registerUser,
} from "../../../services/redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, eventType } = useSelector((state) => ({
    loading: state.register.isRegisterLoading,
    error: state.register.isRegisterError,
    eventType: state.login.eventType,
  }));

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),
    onSubmit: (values) => {
      if (eventType === "organizer") {
        dispatch(registerUser(values))
          .then(unwrapResult)
          .then(() => navigate("/"))
          .catch(() => console.log("Register failed"));
      } else {
        dispatch(registerAttendee({name: values.username, ...values}))
          .then(unwrapResult)
          .then(() => navigate("/"))
          .catch(() => console.log("Register failed"));
      }
    },
  });

  return (
    <>
      <div className="d-flex justify-content-center mt-5 p-3">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          <div className="mt-3 mb-5">Register</div>
          <form onSubmit={formik.handleSubmit}>
            <div className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="username" className="FormLabel">
                  Username
                </label>
                {formik.errors.username && formik.touched.username ? (
                  <div className="FormMessage">{formik.errors.username}</div>
                ) : null}
              </div>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
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
            <div className="FormField">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <label htmlFor="confirmPassword" className="FormLabel">
                  Confirm Password
                </label>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div className="FormMessage">
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
              </div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
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
                to="/creator-auth-login"
                style={{ textDecoration: "none", color: "#c9d1ce" }}
              >
                <p>Already Registered? Login here</p>
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

export default Register;
