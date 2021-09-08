import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";
import styles from "./navbar.module.css";

function BottomNav() {
  return (
    <div className={"shadow " + styles.navItemContainer}>
      <Container>
        <Row>
          <Col xs={6} lg={3}>
            <BackgroundImageContainerEle
              title={"top-offers"}
              overlay={true}
              href="/"
              height={"8vh"}
              backgroundImage={
                "https://images.pexels.com/photos/1128317/pexels-photo-1128317.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              }
            />
          </Col>
          <Col xs={6} lg={3}>
            <BackgroundImageContainerEle
              title={"Food & Beverage"}
              overlay={true}
              href={`/categories/1?name=${encodeURIComponent(
                "Food & Beverage"
              )}`}
              height={"8vh"}
              backgroundImage={
                "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </Col>
          <Col xs={6} lg={3}>
            <BackgroundImageContainerEle
              title={"Home Service"}
              overlay={true}
              href={`/categories/2?name=${encodeURIComponent("Home Service")}`}
              height={"8vh"}
              backgroundImage={
                "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </Col>
          <Col xs={6} lg={3}>
            <BackgroundImageContainerEle
              title={"All Categories"}
              overlay={true}
              href="/categories"
              height={"8vh"}
              backgroundImage={
                "https://images.pexels.com/photos/3270162/pexels-photo-3270162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BottomNav;
