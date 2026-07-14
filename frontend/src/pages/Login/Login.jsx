import { useState } from "react";

const useChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I am your AI CRM Assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  // Add User Message
  const addUserMessage = (text) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
  };

  // Add AI Message
  const addAIMessage = (text) => {
    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text,
    };

    setMessages((prev) => [...prev, aiMessage]);
  };

  // Send Message (Temporary AI Response)
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    addUserMessage(text);

    setLoading(true);

    try {
      // TODO:
      // Backend FastAPI API call yahan hogi
      // Example:
      // const response = await chatService.sendMessage(text);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      addAIMessage(
        "✅ Interaction received successfully. AI analysis will be available after backend integration."
      );
    } catch (error) {
      addAIMessage("❌ Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: 1,
        sender: "ai",
        text: "👋 Hello! I am your AI CRM Assistant. How can I help you today?",
      },
    ]);
  };

  return {
    messages,
    loading,
    sendMessage,
    clearChat,
    addUserMessage,
    addAIMessage,
  };
};

export default useChat;