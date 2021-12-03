import React from "react";
import useProfileData from "../../hooks/useProfileData";

function register() {
  const res = useProfileData();
  console.log(res);
  return <div>register</div>;
}

export default register;
