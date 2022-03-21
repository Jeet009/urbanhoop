import React, { useContext, useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { SearchContext } from "../../context/SearchContext";
import CardElement from "../Elements/CardElement";

function SearchComponent() {
  const { SearchText, setShowSearch } = useContext(SearchContext);
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchClose = () => {
    setShowSearch(false);
  };

  const fetchProducts = async () => {
    const res = await fetch(`https://urbanhoop.online/products`);
    const data = await res.json();

    setProducts(data);
  };
  return (
    <div>
      <div>
        <center>
          <br />
          <h4>
            {products
              ? "We've found the bellow items for you"
              : `Searching for ${SearchText} ...`}{" "}
          </h4>
          <br />
        </center>
        <>
          <Row>
            {SearchText &&
              products &&
              products
                .filter(
                  (product) =>
                    product.product_name
                      .toUpperCase()
                      .indexOf(SearchText.toUpperCase()) > -1
                )
                .map((product) => (
                  <Col
                    xs={6}
                    md={4}
                    lg={3}
                    xl={3}
                    key={product.id}
                    onClick={handleSearchClose}
                  >
                    <CardElement
                      backgroundImage={
                        product.background_image[0] &&
                        product.background_image[0].url
                      }
                      title={product.product_name}
                      price={product.product_selling_price}
                      unit={product.unit}
                      net_value={product.unit_net_value}
                      href={`/products/${product.id}?product_name=${product.product_name}`}
                      sub_category_name={product.subcategory.name}
                      product={true}
                    />
                  </Col>
                ))}
          </Row>
        </>
      </div>
    </div>
  );
}

export default SearchComponent;
