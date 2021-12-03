import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

function useProfileData(
  id,
  name,
  phoneNumber,
  email,
  address,
  gender,
  pincode
) {
  const router = useRouter();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    creatingUser();
  }, []);
  const creatingUser = async () => {
    try {
      const res = await axios.post(
        "http://139.59.38.251:1337/auth/local/register",
        userData
      );

      return res;
    } catch (err) {
      return err.response.data;
    }
  };
}

export default useProfileData;
