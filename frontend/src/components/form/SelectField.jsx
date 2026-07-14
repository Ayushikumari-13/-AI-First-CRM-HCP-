import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { TextField } from "@mui/material";

const DatePickerField = ({
  label = "Select Date",
  selectedDate,
  onChange,
  placeholder = "Choose Date",
  dateFormat = "dd/MM/yyyy",
}) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={onChange}
      dateFormat={dateFormat}
      placeholderText={placeholder}
      customInput={
        <TextField
          fullWidth
          label={label}
          variant="outlined"
        />
      }
    />
  );
};

export default DatePickerField;