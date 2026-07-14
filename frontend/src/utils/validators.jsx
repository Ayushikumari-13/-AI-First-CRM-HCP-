// Email Validation
export const validateEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
};

// Password Validation
export const validatePassword = (password) => {
  return password.length >= 6;
};

// Required Field
export const isRequired = (value) => {
  return value.trim() !== "";
};

// Phone Validation
export const validatePhone = (phone) => {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(phone);
};

// Form Validation
export const validateInteractionForm = (data) => {
  const errors = {};

  if (!data.hcpName)
    errors.hcpName = "HCP Name is required";

  if (!data.interactionType)
    errors.interactionType =
      "Interaction Type is required";

  if (!data.date)
    errors.date = "Date is required";

  if (!data.time)
    errors.time = "Time is required";

  if (!data.topics)
    errors.topics = "Topics are required";

  return errors;
};