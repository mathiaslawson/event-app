import React from "react";
import * as Form from "@radix-ui/react-form";
import "./styles.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
            <div className="mt-3 mb-5">Register</div>
          <Form.Root className="FormRoot">
            <Form.Field className="FormField" name="email">
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <Form.Label className="FormLabel">Email Name</Form.Label>
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
                <Form.Label className="FormLabel">Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input className="Input" type="password" required />
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
                <Form.Label className="FormLabel">Confirm Password</Form.Label>
                <Form.Message className="FormMessage" match="valueMissing">
                  Please enter your password
                </Form.Message>
              </div>
              <Form.Control asChild>
                <input className="Input" type="password" required />
              </Form.Control>
            </Form.Field>
            <div
              className="text-endfw-lighter mt-4"
              style={{
                fontSize: "0.7rem",

                cursor: "pointer",
              }}
            >
              <Link
                to="/creator-auth-login"
                style={{ textDecoration: "none", color: "#c9d1ce" }}
              >
                <p>Already Registered? Login here </p>
              </Link>
            </div>

            {/* <Form.Field className="FormField" name="question">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Question</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter a question
              </Form.Message>
            </div>
            <Form.Control asChild>
              <textarea className="Textarea" required />
            </Form.Control>
          </Form.Field> */}
            <Form.Submit asChild className="mt-3">
              <button
                className="Button"
                style={{ marginTop: 10, backgroundColor: "#c9d1ce", color: 'black' }}
              >
                Submit
              </button>
            </Form.Submit>
          </Form.Root>
        </div>
      </div>
    </>
  );
}

export default Register;
