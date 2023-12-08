/* eslint-disable @next/next/no-img-element */
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Searchbar from "@/components/global/Searchbar";

function Introduction() {
  return (
    <Box marginTop={7} component="section" aria-label="Introduction">
      <Container>
        <Stack alignItems="center" marginBottom={4} textAlign="center">
          <Box
            marginBottom={1}
            component="img"
            width={348}
            src="/images/logo.svg"
          />
          <Typography color="text.disabled">
            Super User-friendly Transaction Explorer for the Safe Eco-system
          </Typography>
        </Stack>
        <Searchbar status />
      </Container>
    </Box>
  );
}

export default Introduction;
