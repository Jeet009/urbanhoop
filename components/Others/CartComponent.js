import React, { useContext, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Row,
} from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { CheckoutContext } from "../../context/CheckoutContext";
import BackgroundImageContainerEle from "../Elements/BackgroundImageContainerEle";
import RectCardElement from "../Elements/RectCardElement";
import styles from "./cart.module.css";

function CartComponent() {
  const [userDetails, setUserDetails] = useState();
  const [checkout, setCheckout] = useState(false);

  const [address, setAddress] = useState();
  const [pincode, setPincode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [landmark, setLandmark] = useState();
  const [paymentMode, setPaymentMode] = useState();

  const { user, checkingUserAvailability } = useContext(AuthContext);
  const { handleCheckoutAddition } = useContext(CheckoutContext);
  const {
    cartData,
    setTotalCartPrice,
    setTotalCartQuantity,
    totalCartPrice,
    totalCartQuantity,
  } = useContext(CartContext);

  let totalQuantity = 0.0;
  let totalPrice = 0.0;

  if (user) {
    checkingUserAvailability(user.phoneNumber.slice(3)).then((res) =>
      setUserDetails(res[0])
    );
  }

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlePincode = (e) => {
    setPincode(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleLandmark = (e) => {
    setLandmark(e.target.value);
  };
  const handlePaymentMode = (e) => {
    setPaymentMode(e);
  };

  const handleCheckout = () => {
    setTotalCartPrice(totalPrice);
    setTotalCartQuantity(totalQuantity);
    setCheckout(!checkout);
  };
  const handleCheckoutConfirm = async (e) => {
    e.preventDefault();
    let cart_data = [];
    const res = await cartData.forEach((data) => {
      cart_data.push({
        product_quantity: data.quantity,
        product_name: data.cart.product_name,
        product_price: data.cart.product_selling_price,
        product_unit: data.cart.unit,
        product_net_value: data.cart.unit_net_value,
        product_gross_value: data.cart.unit_gross_value,
      });
    });

    handleCheckoutAddition({
      cart_data,
      user: {
        phoneNumber: user.phoneNumber,
        uid: user.uid,
      },
      totalCartPrice,
      totalCartQuantity,
      locationDetails: {
        address,
        pincode,
        phoneNumber,
        landmark,
        paymentMode,
      },
    });
  };
  const handleProfileWindow = () => {
    window.location.href = "/profile/register";
  };
  return (
    <div>
      {checkout ? (
        <div className={styles.cartContainer}>
          <h4>Checkout</h4>
          <hr />
          <div>
            <h6>PERSONAL DETAILS</h6>
            <Row>
              <Col xs={12}>
                <h5>
                  {userDetails &&
                    (userDetails.name
                      ? userDetails.name
                      : "Complete Registration")}
                </h5>
                <Col xs={12}>
                  <h5>+91 {userDetails && userDetails.phoneNumber}</h5>
                </Col>
              </Col>
            </Row>
            <button className="btn btn-large" onClick={handleProfileWindow}>
              Update Personal Details
            </button>
          </div>
          <hr />
          <h6>CART DETAILS</h6>

          <h5>Total Price : {totalCartPrice}</h5>
          <h5>Total Quantity : {totalCartQuantity}</h5>

          <button className="btn btn-large" onClick={handleCheckout}>
            Edit Cart Details
          </button>

          <hr />
          <div>
            <h6>LOCATION DETAILS</h6>
            <Form>
              <Row>
                <Col xs={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      onChange={handleAddress}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Pincode"
                      onChange={handlePincode}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="phone"
                      placeholder="Phone Number"
                      onChange={handlePhoneNumber}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Landmark"
                      onChange={handleLandmark}
                    />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group className="mb-3">
                    <DropdownButton
                      variant="outline-secondary"
                      title={paymentMode ? paymentMode : "Choose Payment Mode"}
                      id="input-group-dropdown-1"
                      className={styles.dropdown}
                      onSelect={handlePaymentMode}
                    >
                      <Dropdown.Item href="#" key="online" eventKey="online">
                        Online
                      </Dropdown.Item>
                      <Dropdown.Item href="#" key="offline" eventKey="offline">
                        Offline
                      </Dropdown.Item>
                    </DropdownButton>
                  </Form.Group>
                </Col>
              </Row>
              <button className="btn btn-large" onClick={handleCheckoutConfirm}>
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
                    selling_price={data.cart.product_selling_price}
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
                    {cartData &&
                      cartData.map((data) => {
                        totalQuantity =
                          totalQuantity + parseFloat(data.quantity);
                        totalPrice =
                          totalPrice +
                          parseFloat(data.cart.product_selling_price);
                        return;
                      })}
                    <h6>Rs. {totalPrice} /-</h6>
                    <h6>Quantity - {totalQuantity}</h6>
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
