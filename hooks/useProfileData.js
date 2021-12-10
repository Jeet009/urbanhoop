import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/dist/client/router";

function useProfileData(phoneNumber) {
  const [userData, setUserData] = useState({
    name: "Jeet",
    phoneNumber: "9704",
  });

  return userData;
}

export default useProfileData;
