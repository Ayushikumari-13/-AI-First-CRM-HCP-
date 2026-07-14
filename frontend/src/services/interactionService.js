import API from "./api";

// Get All Interactions
export const getInteractions = async () => {
  const response = await API.get("/interactions/");
  return response.data;
};

// Get Single Interaction
export const getInteractionById = async (id) => {
  const response = await API.get(`/interactions/${id}`);
  return response.data;
};

// Create Interaction
export const createInteraction = async (data) => {
  const response = await API.post("/interactions/", data);
  return response.data;
};

// Update Interaction
export const updateInteraction = async (id, data) => {
  const response = await API.put(`/interactions/${id}`, data);
  return response.data;
};

// Delete Interaction
export const deleteInteraction = async (id) => {
  const response = await API.delete(`/interactions/${id}`);
  return response.data;
};