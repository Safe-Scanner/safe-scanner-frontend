import { Alert, IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React, { useState } from "react";
import toast, { toastConfig } from "react-simple-toasts";
import "react-simple-toasts/dist/theme/light.css";
type Props = {
  text: string;
  setOpen: any;
};

toastConfig({ theme: "light" });

const CopyButton = ({ text, setOpen }: Props) => {
  return (
    <IconButton
      onClick={() => {
        navigator.clipboard.writeText(text).then(
          () => {
            setOpen((prev: any) => !prev);
            toast(`${text} Copied to Clipboard`, 3000);
            /* Resolved - text copied to clipboard successfully */
          },
          () => {
            setOpen((prev: any) => !prev);
            /* Rejected - text failed to copy to the clipboard */
          }
        );
      }}
    >
      <ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
    </IconButton>
  );
};

export default CopyButton;
