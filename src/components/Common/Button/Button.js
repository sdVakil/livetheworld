import React from "react";
import Button from "@mui/material/Button";

const AppButton = ({
  text,
  onClick,
  variant,
  size,
  color,
  disabled,
  style,
}) => {
  return (
    <Button
      onClick={onClick}
      variant={variant || "contained"}
      size={size || "medium"}
      color={color}
      disabled={disabled}
      sx={style}
    >
      {text}
    </Button>
  );
};

export default AppButton;
