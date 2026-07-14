import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  IconButton,
  Badge,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        background: "#ffffff",
        color: "#222",
        borderBottom: "1px solid #ddd",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section */}
        <Box display="flex" alignItems="center" gap={2}>
          <SmartToyIcon sx={{ color: "#1976d2", fontSize: 35 }} />

          <Box>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="primary"
            >
              AI CRM HCP
            </Typography>

            <Typography
              variant="caption"
              color="gray"
            >
              Log Interaction Management
            </Typography>
          </Box>
        </Box>

        {/* Right Section */}

        <Box display="flex" alignItems="center" gap={3}>

          <IconButton>
            <Badge badgeContent={2} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Box
            display="flex"
            alignItems="center"
            gap={1}
          >
            <Avatar
              sx={{
                bgcolor: "#1976d2",
                width: 40,
                height: 40,
              }}
            >
              A
            </Avatar>

            <Box>
              <Typography
                fontWeight="bold"
                fontSize="14px"
              >
                Ayushi Kumari
              </Typography>

              <Typography
                variant="caption"
                color="gray"
              >
                Sales Executive
              </Typography>
            </Box>

          </Box>

        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;