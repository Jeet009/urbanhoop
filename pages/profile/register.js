import React, { useContext, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { ProfileContext } from "../../context/ProfileContext";
import styles from "./profile.module.css";

function register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [pincode, setPincode] = useState();
  const [address, setAddress] = useState();

  const { handleProfileAddition } = useContext(ProfileContext);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    handleProfileAddition({ name, email, phoneNumber, pincode, address });
  };

  return (
    <Container className={styles.formDiv}>
      <h4>Update Profile Details</h4>
      <Form>
        <Row>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="name"
                placeholder="Name"
                onChange={handleNameChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email"
                onChange={handleEmailChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Pincode"
                onChange={handlePincodeChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={handleAddressChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <button className="btn btn-large shadow" onClick={handleProfileUpdate}>
          Update
        </button>
      </Form>
    </Container>
  );
}

export default register;
