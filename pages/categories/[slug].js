import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";
import CardElement from "../../components/Elements/CardElement";
import { SubcategoryContext } from "../../context/SubcategoryContext";

function SubCategories({ data }) {
  const [subcategories, setSubcategories] = useState(data);
  const { handleSubcategoryAddition } = useContext(SubcategoryContext);

  useEffect(() => {
    if (typeof data === "object" && data.length > 0) {
      handleSubcategoryAddition(data);
    }
  }, [handleSubcategoryAddition]);

  useEffect(() => {
    if (data.length <= 0 && contextRest.subcategories.length > 0) {
      setSubcategories(contextRest.subcategories);
    }
  }, []);
  const router = useRouter();
  const { name } = router.query;

  return (
    <div>
      <center>
        <br />
        <h4>{name}</h4>
        <br />
      </center>
      <>
        <Row>
          {subcategories.map((subcategory) => (
            <Col xs={6} md={3} lg={2} key={subcategory.id}>
              <CardElement
                backgroundImage={subcategory.background_image[0].url}
                title={subcategory.name}
                href={`/products?subcategoryname=${subcategory.name}&&subcategoryid=${subcategory.id}`}
                sub_category_name={name}
                product={false}
              />
            </Col>
          ))}
        </Row>
      </>
    </div>
  );
}

export async function getServerSideProps(context) {
  const slug = context.query.slug;
  const res = await fetch(
    `${process.env.API_URL}/subcategories/?category=${slug}`
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
export default SubCategories;
