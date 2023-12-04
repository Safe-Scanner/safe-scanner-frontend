import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MultiChain from "./MultiChain";
import Help from "./Help";
import Features from "./Features";

function Services() {
  return (
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
  );
}

export default Services;
