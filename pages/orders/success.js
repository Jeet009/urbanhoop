import React from "react";

function success() {
  const handleOrder = () => {
    window.location.href = "/orders/";
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <center>
        <h4>Order Placed Successfully</h4>

        <button className="btn btn-secondary" onClick={handleOrder}>
          Manage Orders
        </button>
      </center>
    </div>
  );
}

export default success;
