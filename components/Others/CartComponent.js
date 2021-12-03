import React, { useContext, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";
import RectCardElement from "../Elements/RectCardElement";
import styles from "./cart.module.css";

function CartComponent() {
  const [checkout, setCheckout] = useState(false);
  const { user } = useContext(AuthContext);
  const { cartData } = useContext(CartContext);

  const handleCheckout = () => {
    setCheckout(!checkout);
  };
  return (
    <div>
      {checkout ? (
        <div className={styles.cartContainer}>
          <h4>Checkout</h4>
          <hr />
          <div>
            <h6>PERSONAL DETAILS</h6>
          </div>
          <div>
            <h6>LOCATION DETAILS</h6>
            <Form>
              <Row>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="number" placeholder="Pincode" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="phone" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Landmark" />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Payment Mode" />
                  </Form.Group>
                </Col>
              </Row>
              <button className="btn btn-large" onClick={handleCheckout}>
                Checkout
              </button>
            </Form>
          </div>
        </div>
      ) : (
        <>
          <BackgroundImageContainerEle
            title={"UrbanHoop"}
            height={"20vh"}
            overlay={false}
            href="#"
            backgroundImage={
              "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
          {user ? (
            <div className={styles.cartContainer}>
              <h4>Cart</h4>
              {cartData &&
                cartData.map((data) => (
                  <RectCardElement
                    key={data.key}
                    type="cart"
                    name={data.cart.product_name}
                    subcategory={data.cart.subcategory.name}
                    backgroundImage={
                      data.cart.background_image[0] &&
                      data.cart.background_image[0].url
                    }
                    ProductId={data.key}
                    quantity={data.quantity}
                  />
                ))}
              <Container className={styles.couponContainer}>
                <Row>
                  <Col xs={6}>
                    <h6>Total</h6>
                    <h6>Rs. 500 /-</h6>
                    <h6>Quantity - 2</h6>
                  </Col>
                  <Col xs={6}>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>Enter Coupon Code</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Coupon Code"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Container>
              <br />
              <button className="btn btn-large" onClick={handleCheckout}>
                Add Location
              </button>
            </div>
          ) : (
            <div className={styles.cartContainer}>
              <center>
                <h4>
                  Login & Add Product To Your Cart
                  <hr />
                </h4>
              </center>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default CartComponent;
