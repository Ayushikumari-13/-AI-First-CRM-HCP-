import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ChatInput = ({ onSend, loading }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        p: 2,
        borderTop: "1px solid #ddd",
        backgroundColor: "#fff",
      }}
    >
      <TextField
        fullWidth
        placeholder="Type your interaction here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        multiline
        maxRows={4}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <IconButton
        color="primary"
        onClick={handleSend}
        disabled={loading}
        sx={{
          bgcolor: "#1976d2",
          color: "#fff",
          width: 50,
          height: 50,
          "&:hover": {
            bgcolor: "#1565c0",
          },
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default ChatInput;