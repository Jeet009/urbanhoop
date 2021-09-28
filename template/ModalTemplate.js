import React from "react";
import { Modal } from "react-bootstrap";
import LoginComponent from "../components/Auth/LoginComponent";

function ModalTemplate({ show, handleClose, modalType }) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Body>{modalType == "login" && <LoginComponent />}</Modal.Body>
    </Modal>
  );
}

export default ModalTemplate;
