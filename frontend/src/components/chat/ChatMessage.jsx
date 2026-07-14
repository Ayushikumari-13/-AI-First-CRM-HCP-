import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

const ChatMessage = ({ sender, text }) => {
  const isUser = sender === "user";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        alignItems: "flex-start",
        gap: 1.5,
        mb: 2,
      }}
    >
      {/* AI Avatar */}

      {!isUser && (
        <Avatar
          sx={{
            bgcolor: "#1976d2",
            width: 40,
            height: 40,
          }}
        >
          <SmartToyIcon />
        </Avatar>
      )}

      {/* Message */}

      <Box
        sx={{
          maxWidth: "75%",
          bgcolor: isUser ? "#1976d2" : "#F3F4F6",
          color: isUser ? "#fff" : "#222",
          px: 2,
          py: 1.5,
          borderRadius: 3,
          boxShadow: 2,
          whiteSpace: "pre-line",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            lineHeight: 1.7,
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* User Avatar */}

      {isUser && (
        <Avatar
          sx={{
            bgcolor: "#4CAF50",
            width: 40,
            height: 40,
          }}
        >
          <PersonIcon />
        </Avatar>
      )}
    </Box>
  );
};

export default ChatMessage;