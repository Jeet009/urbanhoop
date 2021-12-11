import React, { useContext, useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import styles from "./profile.module.css";

function register() {
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [pincode, setPincode] = useState();
  const [address, setAddress] = useState();

  const [userDetails, setUserDetails] = useState();

  const { user, checkingUserAvailability, updateUserDetails } =
    useContext(AuthContext);

  useEffect(() => {
    if (user) {
      checkingUserAvailability(user.phoneNumber.slice(3)).then((res) => {
        console.log(res);
        setId(res[0].id),
          setName(res[0].name),
          setEmail(res[0].email),
          setPhoneNumber(res[0].phoneNumber),
          setPincode(res[0].pincode),
          setAddress(res[0].address);
        setUserDetails(res[0]);
      });
    }
  }, [user]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value.length <= 10 ? e.target.value : "10 Digits");
  };
  const handlePincodeChange = (e) => {
    setPincode(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    updateUserDetails(id, name, phoneNumber, email, pincode, address);
  };

  return (
    <Container className={styles.formDiv}>
      <h4>Update Profile Details</h4>
      <br />
      <br />
      <br />
      <Form>
        <Row>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="name"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="phone"
                placeholder="Phone Number"
                pattern="[1-9]{1}[0-9]{9}"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Pincode"
                value={pincode}
                onChange={handlePincodeChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={12} className={styles.col}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                value={address}
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
