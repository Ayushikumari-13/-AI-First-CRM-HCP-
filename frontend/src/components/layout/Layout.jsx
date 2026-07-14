import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>

      {/* Sidebar */}

      <Sidebar />

      {/* Main Content */}

      <Box
        sx={{
          flex: 1,
          background: "#f4f6f9",
        }}
      >
        <Navbar />

        <Box
          sx={{
            padding: 3,
          }}
        >
          {children}
        </Box>

      </Box>

    </Box>
  );
};

export default Layout;