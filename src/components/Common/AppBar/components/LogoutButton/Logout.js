import React from "react";
import AppButton from "../../../Button/Button";

const LogoutButton = ({ token }) => {
  /* Role Based Access control can be catered with HOCs */
  return (
    token && (
      <AppButton
        text={"Logout"}
        variant={"inherit"}
        onClick={() => {
          localStorage.removeItem("persist:root");
          window.location = "/activity/castle-of-gerald-the-devil";
        }}
      />
    )
  );
};

export default LogoutButton;
