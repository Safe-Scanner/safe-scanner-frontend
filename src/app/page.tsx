/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Features from "./home/Features";
import Help from "./home/Help";
import MultiChain from "./home/MultiChain";

function HomePage() {
  return (
    <div>
      <Box component="section" aria-label="Introduction">
        <Container>
          <Stack alignItems="center" marginBottom={4} textAlign="center">
            <Box marginBottom={1} component="img" width={348} src="/images/logo.svg" />
            <Typography color="text.disabled">
              Super User-friendly Transaction Explorer for the Safe Eco-system
            </Typography>
          </Stack>
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
        </Container>
      </Box>

      <Box
        component="section"
        aria-label="Services"
        sx={{marginTop: {xs: 8, sm: 10, md: 16}, marginBottom: 6}}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <MultiChain />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Features />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Help />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default HomePage;
