import { useContext, useState } from "react";
import CarouselComponent from "../components/Carousel/CarouselComponent";
import HomeServiceListComponent from "../components/List/HomeServiceListComponent";
import ListComponent from "../components/List/ListComponent";
import OfferComponent from "../components/Others/OfferComponent";
import TestimonialComponent from "../components/Others/TestimonialComponent";
import { AuthContext } from "../context/AuthContext";
import ModalTemplate from "../template/ModalTemplate";

export default function Home() {
  const [show, setShow] = useState();
  const [showCart, setShowCart] = useState();

  const { user } = useContext(AuthContext);

  const handleLoginModal = () => {
    setShow(!show);
  };
  const handleClose = () => {
    setShow(!show);
  };
  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  const handleCloseCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <ModalTemplate
        show={show}
        handleClose={handleClose}
        modalType="login"
        sz="md"
      />
      <ModalTemplate
        show={showCart}
        handleClose={handleCloseCart}
        modalType="cart"
        sz="md"
      />

      {user ? (
        <button className={"btn btn-custom-float"} onClick={handleShowCart}>
          <span className="fa fa-shopping-cart"></span>
          {"  "} My Cart
        </button>
      ) : (
        <button
          className={"btn btn-custom-float-login"}
          onClick={handleLoginModal}
        >
          Login/Register {"  "}
        </button>
      )}
      <CarouselComponent />

      <ListComponent title="Food & Beverage" />
      <HomeServiceListComponent title="Home Service" />
      <OfferComponent />
      <ListComponent title="Top Offer" />
      <TestimonialComponent />
    </div>
  );
}
