import React from "react";
import GranteePortal from "./GranteePortal";
import GranteeSignin from "./GranteeSignIn";

const Grantee = ({connect}) => {
  const GranteeUser = localStorage.getItem("GranteeProfile");
  console.log("Displaying Grantee User");
  console.log(GranteeUser);
  return <div>{GranteeUser ? <GranteePortal /> : <GranteeSignin connect={connect}/>}</div>;
};

export default Grantee;
