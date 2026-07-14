import React from "react";
import { Button as MuiButton } from "@mui/material";

const Button = ({
  text,
  onClick,
  type = "button",
  variant = "contained",
  color = "primary",
  fullWidth = false,
  size = "medium",
  startIcon,
  endIcon,
  disabled = false,
  sx = {},
}) => {
  return (
    <MuiButton
      type={type}
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
      onClick={onClick}
      sx={{
        borderRadius: "10px",
        textTransform: "none",
        fontWeight: 600,
        padding: "10px 20px",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "0 4px 12px rgba(25,118,210,0.25)",
        },
        ...sx,
      }}
    >
      {text}
    </MuiButton>
  );
};

export default Button;