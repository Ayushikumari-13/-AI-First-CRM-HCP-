import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";

import Layout from "../../components/layout/Layout";
import InteractionForm from "../../components/form/InteractionForm";
import ChatHeader from "../../components/chat/ChatHeader";
import ChatBox from "../../components/chat/ChatBox";
import ChatInput from "../../components/chat/ChatInput";

import useChat from "../../hooks/useChat";

const Dashboard = () => {

  // Shared Form State
  const [formData, setFormData] = useState({
    hcpName: "",
    interactionType: "",
    date: "",
    time: "",
    attendees: "",
    topics: "",
    voiceSummary: "",
    materials: "",
    samples: "",
    sentiment: "",
    outcomes: "",
    followup: "",
  });

  // Chat Hook
  const {
    messages,
    loading,
    sendMessage,
  } = useChat(setFormData);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 3,
          width: "100%",
          minHeight: "calc(100vh - 90px)",
        }}
      >
        {/* Left */}
        <Paper
          elevation={3}
          sx={{
            flex: 7,
            p: 3,
            borderRadius: 3,
            minHeight: "80vh",
            overflowY: "auto",
            bgcolor: "#ffffff",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={3}
          >
            Log Interaction
          </Typography>

          <InteractionForm
            formData={formData}
            setFormData={setFormData}
          />
        </Paper>

        {/* Right */}
        <Paper
          elevation={3}
          sx={{
            flex: 5,
            borderRadius: 3,
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ffffff",
          }}
        >
          <ChatHeader />

          <Box
            sx={{
              flex: 1,
              overflowY: "auto",
              p: 2,
              bgcolor: "#f8f9fa",
            }}
          >
            <ChatBox messages={messages} />
          </Box>

          <ChatInput
            onSend={sendMessage}
            loading={loading}
          />
        </Paper>
      </Box>
    </Layout>
  );
};

export default Dashboard;