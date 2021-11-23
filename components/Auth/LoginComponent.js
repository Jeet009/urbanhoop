import React, { useContext, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import styles from "./auth.module.css";

import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../firebase/config";

function LoginComponent() {
  const [gotOTP, setGotOTP] = useState(false);
  const [otp, setOtp] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [confirmationResult, setConfirmationResult] = useState();

  const { initializeUser } = useContext(AuthContext);

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleOTP = (e) => {
    e.preventDefault();

    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    signInWithPhoneNumber(auth, `+91${phoneNumber}`, window.recaptchaVerifier)
      .then(function (confirmationResult) {
        setConfirmationResult(confirmationResult);
        setGotOTP(true);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOTPSubmit = (e) => {
    e.preventDefault();
    confirmationResult
      .confirm(otp)
      .then(function (result) {
        var user = result.user;
        initializeUser(user);
        window.location.href = "/";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <center>
        <h4>Enter Your Phone Number To Get OTP</h4>
        <hr />
      </center>
      <div id="recaptcha-container"></div>
      <Container>
        <Row className={styles.loginSection}>
          <Col xs={12} md={12}>
            <img src="/assets/img.png" alt="..." className="img-fluid" />
          </Col>
          <Col xs={12} md={12}>
            <Form>
              {gotOTP ? (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Your OTP</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={handleOtpChange}
                    />
                  </Form.Group>
                  <button className="btn btn-custom" onClick={handleOTPSubmit}>
                    {"  "}Submit
                  </button>
                </>
              ) : (
                <>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="phone"
                      placeholder="Enter Phone Number"
                      value={phoneNumber}
                      onChange={handlePhoneNumber}
                    />
                  </Form.Group>
                  <button
                    className="btn btn-custom"
                    type="submit"
                    onClick={handleOTP}
                  >
                    {"  "}Get OTP
                  </button>
                </>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginComponent;
