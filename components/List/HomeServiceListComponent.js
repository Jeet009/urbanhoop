import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import CardElement from "../Elements/CardElement";

function HomeServiceListComponent({ title, category }) {
  const [photos, setPhotos] = useState();
  useEffect(() => {
    handlePhotoFetch().then((data) => setPhotos(data));
  }, []);

  const handlePhotoFetch = async () => {
    const res = await fetch(
      `http://139.59.38.251:1337/products/?show_in_home_page_eq=true&&category=1`
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
                product={true}
                href={"/"}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
}

export default HomeServiceListComponent;
