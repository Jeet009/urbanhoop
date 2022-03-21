import React, { useContext, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  InputGroup,
  FormControl,
  Badge,
} from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { SearchContext } from "../../context/SearchContext";
import ModalTemplate from "../../template/ModalTemplate";
import styles from "./navbar.module.css";

function NavbarComponent() {
  const [show, setShow] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [searchText, setSearchText] = useState();

  const { user } = useContext(AuthContext);
  const { cartData } = useContext(CartContext);
  const { handleSearchText, showSearch, setShowSearch } =
    useContext(SearchContext);

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
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };
  const handleCloseSearch = () => {
    setShowSearch(!showSearch);
  };
  const captureSearchText = (e) => {
    setSearchText(e.target.value);
    handleSearchText(e.target.value);
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
      <ModalTemplate
        show={showSearch}
        handleClose={handleCloseSearch}
        modalType="search"
        sz="lg"
      />
      <Navbar className={"navbar-bg" + " " + styles.navbarBg} expand="lg">
        <Container className="navbar-container">
          {/* Logo  */}
          <Navbar.Brand href="/" className={styles.logo}>
            {/* UrbanHoop.in */}
            <img src="/assets/Final.png" className={styles.mainlogo} />
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
                onChange={captureSearchText}
              />
              <InputGroup.Text id="basic-addon2" className={styles.btnCover}>
                <button
                  className="btn fa fa-search"
                  onClick={handleSearch}
                ></button>
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
              >
                <Badge className={styles.cartBadge}>{cartData.length}</Badge>
              </Nav.Link>
              <Nav.Link href="#auth">
                {user ? (
                  <Navbar.Brand
                    href="/profile/register"
                    className={styles.logo}
                  >
                    {user.phoneNumber}
                  </Navbar.Brand>
                ) : (
                  <button
                    className="btn btn-secondary"
                    onClick={handleLoginModal}
                  >
                    Login / Register
                  </button>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
