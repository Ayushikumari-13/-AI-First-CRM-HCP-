// Format Date
export const formatDate = (date) => {
  return new Date(date).toLocaleDateString("en-IN");
};

// Format Time
export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString("en-IN");
};

// Capitalize Text
export const capitalize = (text) => {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// Generate Unique ID
export const generateId = () => {
  return Date.now();
};

// Trim Text
export const trimText = (text) => {
  return text.trim();
};

// Chat Timestamp
export const getCurrentTime = () => {
  return new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
};