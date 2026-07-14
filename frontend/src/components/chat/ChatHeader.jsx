import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Tooltip,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import AddCommentIcon from "@mui/icons-material/AddComment";

const ChatHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#ffffff",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px",
      }}
    >
      {/* Left Side */}

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#1976d2",
            width: 50,
            height: 50,
          }}
        >
          <SmartToyIcon />
        </Avatar>

        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            AI Assistant
          </Typography>

          <Chip
            label="Online"
            color="success"
            size="small"
            sx={{
              mt: 0.5,
              fontWeight: 600,
            }}
          />
        </Box>
      </Box>

      {/* Right Side */}

      <Tooltip title="New Chat">
        <IconButton
          sx={{
            bgcolor: "#1976d2",
            color: "#fff",

            "&:hover": {
              bgcolor: "#1565c0",
            },
          }}
        >
          <AddCommentIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default ChatHeader;