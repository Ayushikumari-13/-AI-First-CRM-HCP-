import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

const ChatBox = ({ messages }) => {
  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 2,
        p: 2,
      }}
    >
      {messages.map((msg) => (
        <Box
          key={msg.id}
          sx={{
            display: "flex",
            justifyContent:
              msg.sender === "user" ? "flex-end" : "flex-start",
            alignItems: "flex-start",
          }}
        >
          {msg.sender === "ai" && (
            <Avatar
              sx={{
                bgcolor: "#1976d2",
                mr: 1,
              }}
            >
              <SmartToyIcon />
            </Avatar>
          )}

          <Box
            sx={{
              maxWidth: "75%",
              backgroundColor:
                msg.sender === "user" ? "#1976d2" : "#F3F4F6",
              color: msg.sender === "user" ? "#fff" : "#000",
              p: 2,
              borderRadius: 3,
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography variant="body2">
              {msg.text}
            </Typography>
          </Box>

          {msg.sender === "user" && (
            <Avatar
              sx={{
                bgcolor: "#4CAF50",
                ml: 1,
              }}
            >
              <PersonIcon />
            </Avatar>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ChatBox;