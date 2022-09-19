import React from "react";
import AppButton from "../../../Button/Button";
import LogoutButton from "../LogoutButton/Logout";

const NavLinks = ({ navLinks, token }) => {
  return (
    <>
      {navLinks.map((link, idx) => (
        <AppButton
          key={link.text}
          text={link.text}
          variant={"inherit"}
          style={{ display: { xs: "none", md: "flex" } }}
        />
      ))}

      <LogoutButton token={token} />
    </>
  );
};

export default NavLinks;
