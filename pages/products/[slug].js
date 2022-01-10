import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import styles from "./product.module.css";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

function productList({ data, subcategory, category }) {
  const router = useRouter();
  const { product_name } = router.query;
  const { user } = useContext(AuthContext);
  const { handleCartAddition, cartData } = useContext(CartContext);

  const [cartFilteredData, setCartFilteredData] = useState();

  useEffect(() => {
    filterCart();
  }, [cartData]);

  const filterCart = () => {
    if (cartData) {
      cartData.forEach((res) => {
        if (res.cart && res.cart.id == data.id) {
          setCartFilteredData(res.cart.id);
        }
      });
    } else {
      filterCart();
    }
  };

  const handleAddCart = async () => {
    const res = await handleCartAddition(data);
    window.location.href = "/";
  };

  return (
    <div className={styles.details_container}>
      <Container>
        <h1>{product_name}</h1>
        <h6>
          {subcategory.name} - {category.name}
        </h6>
        <p>{data.product_info}</p>
        <br />
        <Row>
          {data.product_images.map((image) => (
            <Col xs={6} md={4} key={data.id}>
              <div
                className={styles.product_detail_image}
                style={{
                  backgroundImage: `url(http://139.59.38.251:1337${image.url})`,
                }}
              ></div>
            </Col>
          ))}
        </Row>
        <br />
        <h4>
          Get this item at Rs. {data.product_selling_price} /- ({" "}
          {data.unit_net_value} {data.unit} )
        </h4>
        {user && (
          <button
            className={
              cartFilteredData !== data.id ? "btn btn-large" : "d-none"
            }
            onClick={handleAddCart}
          >
            <span className="fa fa-shopping-cart"></span>
            {"  "} Add To Cart
          </button>
        )}
        <p>{data.product_description}</p>
        <Row className={styles.details_table}>
          <>
            <Col xs={6}>
              <h5>Details</h5>
            </Col>
            <Col xs={6}>
              <p>{data.product_description_table.details}</p>
            </Col>
          </>
          <hr />
          <>
            <Col xs={6}>
              <h5>About Product</h5>
            </Col>
            <Col xs={6}>
              <p>{data.product_description_table.about_product}</p>
            </Col>
          </>
        </Row>
        {user && (
          <button
            className={
              cartFilteredData !== data.id ? "btn btn-custom-float" : "d-none"
            }
            onClick={handleAddCart}
          >
            <span className="fa fa-shopping-cart"></span>
            {"  "} Add To Cart
          </button>
        )}
      </Container>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const res = await fetch(`http://139.59.38.251:1337/products/${slug}`);
  const data = await res.json();
  const categoryDetails = await fetch(
    `http://139.59.38.251:1337/categories/${data.subcategory.category}`
  );
  const category = await categoryDetails.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data: data, subcategory: data.subcategory, category: category }, // will be passed to the page component as props
  };
}

export default productList;
