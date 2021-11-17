import React, { useContext, useEffect, useState } from "react";
import BackgroundImageContainerEle from "../../components/Elements/BackgroundImageContainerEle";
import { CategoryContext } from "../../context/CategoryContext";

function index({ data }) {
  const [categories, setCategories] = useState(data);
  const { handleCategoryAddition, ...contextRest } =
    useContext(CategoryContext);

  useEffect(() => {
    if (typeof data === "object" && data.length > 0) {
      handleCategoryAddition(data);
    }
  }, [handleCategoryAddition]);

  useEffect(() => {
    if (data.length <= 0 && contextRest.categories.length > 0) {
      setCategories(contextRest.categories);
    }
  }, []);

  return (
    <div>
      <center>
        <br />
        <h4>Categoris</h4>
      </center>
      {categories.map((category) => (
        <BackgroundImageContainerEle
          key={category.id}
          title={category.name}
          height={"50vh"}
          href={`/categories/${category.id}?name=${encodeURIComponent(
            category.name
          )}`}
          overlay={true}
          backgroundImage={`http://139.59.38.251:1337${category.background_image.url}`}
        />
      ))}

      <br />
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(`http://139.59.38.251:1337/categories`);
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
