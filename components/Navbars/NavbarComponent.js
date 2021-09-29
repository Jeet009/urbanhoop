import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import ModalTemplate from "../../template/ModalTemplate";
import styles from "./navbar.module.css";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleLoginModal = () => {
    setShow(!show);
  };
  const handleCartModal = () => {
    setShowCart(!showCart);
  };

  const handleClose = () => {
    setShow(!show);
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
      <Navbar className={"navbar-bg" + " " + styles.navbarBg} expand="lg">
        <Container className="navbar-container">
          {/* Logo  */}
          <Navbar.Brand href="/" className={styles.logo}>
            UrbanHoop.in
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Search  */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-start"
          >
            <InputGroup className={styles.input}>
              <FormControl
                placeholder="Looking For Something ..."
                aria-label="search"
                aria-describedby="basic-addon2"
                className={styles.search}
              />
              <InputGroup.Text id="basic-addon2" className={styles.btnCover}>
                <button className="btn fa fa-search"></button>
              </InputGroup.Text>
            </InputGroup>
          </Navbar.Collapse>

          {/* Buttomn */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link
                href="#cart"
                className="fa fa-big fa-shopping-cart"
                onClick={handleCartModal}
              ></Nav.Link>
              <Nav.Link href="#auth">
                <button
                  className="btn btn-secondary"
                  onClick={handleLoginModal}
                >
                  Login / Register
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
