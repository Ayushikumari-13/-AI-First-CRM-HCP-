import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

const Modal = ({
  open,
  onClose,
  onConfirm,
  title = "Confirmation",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
    >
      {/* Modal Title */}
      <DialogTitle
        sx={{
          fontWeight: "bold",
        }}
      >
        {title}
      </DialogTitle>

      {/* Modal Content */}
      <DialogContent>
        <DialogContentText>
          {message}
        </DialogContentText>
      </DialogContent>

      {/* Buttons */}
      <DialogActions sx={{ p: 2 }}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onClose}
        >
          {cancelText}
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={onConfirm}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;