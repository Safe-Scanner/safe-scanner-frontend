/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";

function Searchbar() {
  return (
    <Box maxWidth={950} marginX="auto">
      <Stack spacing={1}>
        <TextField
          sx={{
            "& fieldset": {
              borderWidth: 2,
              borderColor: "primary.light",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
            sx: {
              pl: 2,
              "& input::placeholder": {
                color: "text.disabled",
                opacity: 1,
              },
            },
          }}
          fullWidth
          placeholder="Search for addresses & hashes..."
        />
        <Stack
          direction={{xs: "column", md: "row"}}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography color="text.disabled">Scanner Network Status</Typography>
            <Chip
              sx={{border: 0}}
              icon={<img src="/images/checkbox-marked-circle-outline.svg" alt="" />}
              variant="outlined"
              label="Available"
              color="primary"
            />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography color="text.disabled">Total Safe Transactions</Typography>
            <Chip
              sx={{border: 0}}
              icon={<img src="/images/safe-transactions.svg" alt="" />}
              variant="outlined"
              label="33 013 011"
              color="primary"
            />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Searchbar;
