"use client";
import React, {useState} from "react";
import Box from "@mui/material/Box";
import Searchbar from "@/components/global/Searchbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Overview from "./Overview";
import HashTab from "@/components/global/HashTab";
// import Confirmations from "./Confirmations";

function WalletPage() {
  return (
    <div>
      <Box component="section">
        <Box marginBottom={6} marginTop={3}>
          <Searchbar />
        </Box>
      </Box>
      <Box component="section" marginBottom={8}>
        <Container>
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Image src="/images/wallet.svg" width={24} height={24} alt="" />
              <Typography variant="h3" component="h1" fontWeight="medium">
                Wallet
              </Typography>
            </Stack>
            <HashTab tabs={["Overview", "Balance", "Transactions", "Owners"]}>
              <Overview />
            </HashTab>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default WalletPage;
