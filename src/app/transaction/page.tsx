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
import Confirmations from "./Confirmations";

const tabs = ["Overview", "Confirmations"];

function TransactionPage() {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (index: number) => {
    setCurrentTab(index);
  };

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
              <Image src="/images/pound.svg" width={24} height={24} alt="" />
              <Typography variant="h3" component="h1" fontWeight="medium">
                Transaction
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
              {tabs.map((tab, index) => (
                <Button
                  key={index}
                  size="large"
                  sx={{py: 1, px: 2, ...(currentTab === index ? {} : {bgcolor: "grey.600"})}}
                  variant="contained"
                  onClick={() => handleTabChange(index)}
                >
                  {tab}
                </Button>
              ))}
            </Stack>

            <Overview />

            <Confirmations />
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default TransactionPage;
