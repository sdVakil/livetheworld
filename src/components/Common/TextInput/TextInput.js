import { TextField } from "@mui/material";
import React from "react";

const TextInput = ({
  value,
  label,
  name,
  type,
  fullWidth,
  handleChange,
  ...rest
}) => {
  return (
    <TextField
      id="outlined-basic"
      value={value}
      label={label || ""}
      variant={"outlined"}
      size="small"
      type={type || "text"}
      onChange={handleChange}
      name={name}
      classes={name}
      {...rest}
    />
  );
};

export default TextInput;
