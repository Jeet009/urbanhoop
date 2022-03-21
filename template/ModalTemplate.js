import React from "react";
import { Modal } from "react-bootstrap";
import LoginComponent from "../components/Auth/LoginComponent";
import CartComponent from "../components/Others/CartComponent";
import SearchComponent from "../components/Others/SearchComponent";

function ModalTemplate({ show, handleClose, modalType, sz }) {
  return (
    <Modal show={show} onHide={handleClose} size={sz}>
      <Modal.Body>
        {modalType == "login" && <LoginComponent />}
        {modalType == "cart" && <CartComponent />}
        {modalType == "search" && <SearchComponent />}
      </Modal.Body>
    </Modal>
  );
}

export default ModalTemplate;
