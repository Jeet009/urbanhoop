import React from "react";
import { Modal } from "react-bootstrap";
import LoginComponent from "../components/Auth/LoginComponent";
import CartComponent from "../components/Others/CartComponent";

function ModalTemplate({ show, handleClose, modalType, sz }) {
  return (
    <Modal show={show} onHide={handleClose} size={sz}>
      <Modal.Body>
        {modalType == "login" && <LoginComponent />}
        {modalType == "cart" && <CartComponent />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplate;
