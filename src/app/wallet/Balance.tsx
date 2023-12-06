import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Balance() {
  return (
    <Paper sx={{p: 3}}>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={1}>
        <Typography fontWeight="medium" flexGrow={1}>
          Overview
        </Typography>
        <IconButton>
          <MoreHorizIcon color="primary" />
        </IconButton>
      </Stack>
      <Stack></Stack>
    </Paper>
  );
}

export default Balance;
