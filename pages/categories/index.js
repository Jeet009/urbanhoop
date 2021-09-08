import React from "react";
import BackgroundImageContainerEle from "../../components/Elements/BackgroundImageContainerEle";

function index() {
  return (
    <div>
      <center>
        <br />
        <h4>Categoris</h4>
      </center>
      <BackgroundImageContainerEle
        title={"Food & Beverage"}
        height={"50vh"}
        href={`/categories/1?name=${encodeURIComponent("Food & Beverage")}`}
        overlay={true}
        backgroundImage={
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <BackgroundImageContainerEle
        title={"Home Service"}
        overlay={true}
        href={`/categories/2?name=${encodeURIComponent("Home Service")}`}
        height={"50vh"}
        backgroundImage={
          "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
      />
      <br />
    </div>
  );
}

export default index;
