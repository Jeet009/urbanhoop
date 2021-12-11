import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import styles from "./profile.module.css";

function index() {
  const [userDetails, setUserDetails] = useState();
  const { checkingUserAvailability, user } = useContext(AuthContext);

  if (user) {
    checkingUserAvailability(user.phoneNumber.slice(3)).then((res) =>
      setUserDetails(res[0])
    );
  }

  return (
    <>
      <Container className={styles.profileDiv}>
        <Row>
          <Col xs={6} md={6}>
            <div
              className={styles.profileImage}
              style={{
                backgroundImage:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png)",
              }}
            ></div>
          </Col>
          <Col xs={6} md={6}>
            <div className={styles.profileText}>
              <h5>
                {userDetails &&
                  (userDetails.name
                    ? userDetails.name
                    : "Complete Registration")}
              </h5>
              <h6>+91 {userDetails && userDetails.phoneNumber}</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default index;
