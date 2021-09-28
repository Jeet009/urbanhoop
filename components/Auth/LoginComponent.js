import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import styles from "./auth.module.css";

function LoginComponent() {
  const [gotOTP, setGotOTP] = useState(false);

  const handleOTP = (e) => {
    e.preventDefault();
    setGotOTP(true);
  };
  return (
    <div>
      <center>
        <h2>Enter Your Phone Number To Get OTP</h2>
        <hr />
      </center>
      <Container>
        <Row className={styles.loginSection}>
          <Col xs={12} md={6}>
            <img src="/assets/img.png" alt="..." className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <Form>
              {gotOTP ? (
                <Form.Group className="mb-3">
                  <Form.Label>Enter Your OTP</Form.Label>
                  <Form.Control type="number" placeholder="Enter OTP" />
                </Form.Group>
              ) : (
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="phone" placeholder="Enter Phone Number" />
                </Form.Group>
              )}

              <button className="btn btn-custom" onClick={handleOTP}>
                {"  "}Get OTP
              </button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginComponent;
