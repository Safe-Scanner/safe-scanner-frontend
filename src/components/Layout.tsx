"use client";
import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import verdeNight from "@/theme/scanner";
import Box from "@mui/material/Box";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout({children}: {children: React.ReactNode}) {
  return (
    <ThemeProvider theme={verdeNight}>
      <Box sx={{backgroundColor: "background.default", minHeight: "100vh"}}>
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default Layout;
