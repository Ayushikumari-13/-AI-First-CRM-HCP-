import React from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import { NavLink } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HistoryIcon from "@mui/icons-material/History";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const menuItems = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    path: "/",
  },
  {
    title: "Log Interaction",
    icon: <AddTaskIcon />,
    path: "/",
  },
  {
    title: "Interaction History",
    icon: <HistoryIcon />,
    path: "/history",
  },
  {
    title: "AI Assistant",
    icon: <SmartToyIcon />,
    path: "/",
  },
  {
    title: "Analytics",
    icon: <AnalyticsIcon />,
    path: "/analytics",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    path: "/settings",
  },
];

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 260,
        minHeight: "100vh",
        background: "#1F2937",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Logo */}
      <Box>
        <Box
          sx={{
            p: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#4FC3F7"
          >
            AI CRM
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#d1d5db",
              mt: 1,
            }}
          >
            HCP Management
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "#374151" }} />

        {/* Menu */}

        <List sx={{ mt: 2 }}>
          {menuItems.map((item) => (
            <ListItemButton
              key={item.title}
              component={NavLink}
              to={item.path}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: 2,
                color: "#fff",

                "&.active": {
                  bgcolor: "#2563EB",
                },

                "&:hover": {
                  bgcolor: "#374151",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#fff",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Logout */}

      <Box sx={{ p: 2 }}>
        <Divider sx={{ bgcolor: "#374151", mb: 2 }} />

        <ListItemButton
          component={NavLink}
          to="/login"
          sx={{
            borderRadius: 2,
            color: "#fff",

            "&:hover": {
              bgcolor: "#374151",
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: "#fff",
            }}
          >
            <LogoutIcon />
          </ListItemIcon>

          <ListItemText primary="Logout" />
        </ListItemButton>
      </Box>
    </Box>
  );
};

export default Sidebar;