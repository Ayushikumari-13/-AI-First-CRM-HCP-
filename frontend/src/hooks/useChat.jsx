import { useState } from "react";
import { sendChatMessage } from "../services/chatService";

const useChat = (setFormData) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "👋 Hello! I am your AI CRM Assistant. How can I help you today?",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendChatMessage(text);

      const aiText =
        response.response ||
        response.ai_response ||
        "✅ Interaction processed successfully.";

      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: aiText,
      };

      setMessages((prev) => [...prev, aiMessage]);

      // ===========================
      // AUTO FILL FORM
      // ===========================
      if (setFormData) {
        const updatedData = {};

        // HCP Name
        const hcpMatch = aiText.match(
          /\*\*(Extracted )?HCP Name:\*\*\s*(.*)/i
        );

        if (hcpMatch) {
          updatedData.hcpName = hcpMatch[2].trim();
        }

        // Interaction Type
        const interactionMatch = aiText.match(
          /\*\*Interaction Type:\*\*\s*(.*)/i
        );

        if (interactionMatch) {
          updatedData.interactionType = interactionMatch[1].trim();
        }

        // Topics
        const topicMatch = aiText.match(
          /\*\*(Discussion Summary|Summary of Discussion):\*\*\s*(.*)/i
        );

        if (topicMatch) {
          updatedData.topics = topicMatch[2].trim();
        }

        // Materials
        const materialMatch = aiText.match(
          /\*\*Materials Shared:\*\*\s*(.*)/i
        );

        if (materialMatch) {
          updatedData.materials = materialMatch[1].trim();
        }

        // Voice Summary
        updatedData.voiceSummary = aiText;

        // Follow-up
        const followupMatch = aiText.match(
          /\*\*Follow-up Actions:\*\*([\s\S]*)/i
        );

        if (followupMatch) {
          updatedData.followup = followupMatch[1].trim();
        }

        // Sentiment
        if (aiText.toLowerCase().includes("positive")) {
          updatedData.sentiment = "Positive";
        } else if (aiText.toLowerCase().includes("negative")) {
          updatedData.sentiment = "Negative";
        } else if (aiText.toLowerCase().includes("neutral")) {
          updatedData.sentiment = "Neutral";
        }

        setFormData((prev) => ({
          ...prev,
          ...updatedData,
        }));
      }
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "ai",
          text: "❌ Failed to connect to AI Backend.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
};

export default useChat;