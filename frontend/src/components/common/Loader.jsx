import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

const Loader = ({
  message = "Loading...",
  size = 50,
  color = "primary",
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <CircularProgress
        size={size}
        color={color}
      />

      <Typography
        variant="body1"
        sx={{
          color: "#666",
          fontWeight: 500,
        }}
      >
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;