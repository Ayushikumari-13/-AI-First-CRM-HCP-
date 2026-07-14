import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [
    {
      id: 1,
      sender: "ai",
      text: "Hello 👋 I am your AI CRM Assistant.",
    },
  ],
};

const chatSlice = createSlice({
  name: "chat",

  initialState,

  reducers: {

    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },

    clearChat: (state) => {
      state.messages = [];
    },

  },
});

export const {
  addMessage,
  clearChat,
} = chatSlice.actions;

export default chatSlice.reducer;