import React from "react";
import { TextField } from "@mui/material";

const Input = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  type = "text",
  multiline = false,
  rows = 1,
  fullWidth = true,
  required = false,
  disabled = false,
  error = false,
  helperText = "",
  sx = {},
}) => {
  return (
    <TextField
      fullWidth={fullWidth}
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      multiline={multiline}
      rows={rows}
      required={required}
      disabled={disabled}
      error={error}
      helperText={helperText}
      variant="outlined"
      size="medium"
      sx={{
        mb: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: "10px",
        },
        ...sx,
      }}
    />
  );
};

export default Input;