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
            <Col xs={6} md={4} lg={3} xl={2} key={product.id}>
              <CardElement
                backgroundImage={
                  product.background_image[0] && product.background_image[0].url
                }
                title={product.product_name}
                price={product.product_selling_price}
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
