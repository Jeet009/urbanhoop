import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardElement from "../Elements/CardElement";

function ListComponent({ title }) {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    handlePhotoFetch().then((data) => setPhotos(data));
  }, []);

  const handlePhotoFetch = async () => {
    const res = await fetch(
      `http://139.59.38.251:1337/products/?show_in_home_page_eq=true&&category=2`
    );
    const data = await res.json();

    return data;
  };
  return (
    <div>
      <h4>{title}</h4>

      <Row>
        {photos &&
          photos.map((data) => (
            <Col xs={6} md={2}>
              <CardElement
                backgroundImage={
                  data.background_image[0] && data.background_image[0].url
                }
                title={data.product_name}
                price={data.product_selling_price}
                href={`/products/${data.id}?product_name=${data.product_name}`}
                sub_category_name={data.subcategory.name}
                product={true}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default ListComponent;
