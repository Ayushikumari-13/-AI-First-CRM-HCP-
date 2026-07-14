import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "80px", md: "140px" },
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mt: 2,
          fontWeight: "bold",
        }}
      >
        Page Not Found
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          color: "#666",
          maxWidth: "500px",
        }}
      >
        Sorry, the page you are looking for doesn't exist or has been moved.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          borderRadius: "10px",
          textTransform: "none",
          fontWeight: "bold",
        }}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default NotFound;