import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
};

const interactionSlice = createSlice({
  name: "interaction",

  initialState,

  reducers: {

    updateField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },

    resetInteraction: () => initialState,

  },
});

export const {
  updateField,
  resetInteraction,
} = interactionSlice.actions;

export default interactionSlice.reducer;