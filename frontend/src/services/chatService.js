import API from "./api";

// Send Chat Message to AI
export const sendChatMessage = async (message) => {
  const response = await API.post("/chat", {
    message,
  });

  return response.data;
};

// Summarize Interaction
export const summarizeInteraction = async (text) => {
  const response = await API.post("/chat/summarize", {
    text,
  });

  return response.data;
};

// Sentiment Analysis
export const analyzeSentiment = async (text) => {
  const response = await API.post("/chat/sentiment", {
    text,
  });

  return response.data;
};

// Follow-up Recommendation
export const generateFollowup = async (text) => {
  const response = await API.post("/chat/followup", {
    text,
  });

  return response.data;
};