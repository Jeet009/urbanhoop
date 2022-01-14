import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import BackgroundImageContainerEle from "../../components/Elements/BackgroundImageContainerEle";
import RectCardElement from "../../components/Elements/RectCardElement";
import { OrderContext } from "../../context/OrderContext";

function index() {
  const { orders } = useContext(OrderContext);

  return (
    <>
      <Container>
        <BackgroundImageContainerEle
          title={"UrbanHoop"}
          height={"40vh"}
          overlay={true}
          href="#"
          backgroundImage={
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <br />
        <center>
          <h4>Manage Orders</h4>
        </center>
        <br />
        {orders.reverse().map((data) => (
          <RectCardElement type="order" orderData={data.data} />
        ))}
      </Container>
    </>
  );
}

export default index;
