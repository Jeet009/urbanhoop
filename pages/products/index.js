import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import CardElement from "../../components/Elements/CardElement";
import { ProductContext } from "../../context/ProductContext";
function index({ data }) {
  const [products, setProducts] = useState(data);
  const { handleProductAddition, ...contextRest } = useContext(ProductContext);

  const router = useRouter();
  const { subcategoryname } = router.query;

  useEffect(() => {
    if (typeof data === "object" && data.length > 0) {
      handleProductAddition(data);
    }
  }, [handleProductAddition]);

  useEffect(() => {
    if (data.length <= 0 && contextRest.products.length > 0) {
      setProducts(contextRest.products);
    }
  }, []);

  return (
    <div>
      <center>
        <br />
        <h4>{subcategoryname}</h4>
        <br />
      </center>
      <>
        <Row>
          {products.map((product) => (
            <Col xs={6} md={2} key={product.id}>
              <CardElement
                backgroundImage="https://images.pexels.com/photos/4054850/pexels-photo-4054850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                title={product.product_name}
                href={`/products/${product.id}?product_name=${product.product_name}`}
                sub_category_name={subcategoryname}
                product={true}
              />
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.subcategoryid;
  const res = await fetch(
    `http://139.59.38.251:1337/products/?subcategory=${slug}`
  );
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default index;
