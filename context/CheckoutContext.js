import React, { createContext, useContext, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { AuthContext } from "./AuthContext";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {
  const [checkoutDetails, setCheckoutDetails] = useState({});
  const { user } = useContext(AuthContext);

  const handleCheckoutAddition = async (data) => {
    setCheckoutDetails(data);
    try {
      const docRef = await addDoc(collection(db, "orders"), {
        data,
        phoneNumber: user.phoneNumber,
        createdAt: serverTimestamp(),
      });

      fetch(`${process.env.API_URL}/orders`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: docRef._key.path.segments[1],
          total_order_amount: data.totalCartPrice,
          total_order_quantity: data.totalCartQuantity,
          cart_data: data.cart_data,
          location_details: data.locationDetails,
          user: data.user,
          phone_number: user.phoneNumber,
        }),
      })
        .then((res) => res.json())
        .then(() => {
          fetch(`http://139.59.38.251:5000/v1/api/orders`, {
            mode: "cors",
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              order_id: docRef._key.path.segments[1],
              cart_data: data.cart_data,
              total_order_amount: data.totalCartPrice,
              total_order_quantity: data.totalCartQuantity,
              location_details: data.locationDetails,
              user: data.user,
              phone_number: user.phoneNumber,
            }),
          }).then(() => {
            if (data.locationDetails.paymentMode === "offline") {
              window.location.href = "/orders/success";
            } else {
              displayRazorpay(data, docRef._key.path.segments[1]);
            }
          });
        });
    } catch (error) {
      console.log(error);
    }
  };

  // PaymentHandle
  const displayRazorpay = async (orderData, key) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://139.59.38.251:8080/razorpay", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: orderData.totalCartPrice,
      }),
    }).then((t) => t.json());

    const options = {
      key: "rzp_test_bF1zcaw6Ryy3lr",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Urbanhoop",
      description: "Thank you for choosing us",
      image: "http://localhost:1337/logo.svg",
      handler: async (response) => {
        await updateDoc(doc(db, "orders", key), {
          razorpay_order_id: response.razorpay_payment_id,
          razorpay_payment_id: response.razorpay_order_id,
          razorpay_signature: response.razorpay_signature,
        });

        window.location.href = "/orders/success";
      },
      prefill: {
        name: "",
        email: "",
        phone_number: "",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const contextProps = {
    checkoutDetails,
    handleCheckoutAddition,
  };

  return (
    <CheckoutContext.Provider value={contextProps}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
