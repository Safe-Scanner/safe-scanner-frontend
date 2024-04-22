"use client";
import React from "react";
import { ThemeProvider, styled } from "@mui/material/styles";
import verdeNight from "@/theme/scanner";
import Box from "@mui/material/Box";
import Navbar from "./navbar";
import Footer from "./footer";

const Wrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  minHeight: "100vh",
  overflow: "hidden",
  position: "relative",
  zIndex: 0,
}));

const Abstraction = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "100%",
  left: 0,
  right: 0,
  top: 0,
  zIndex: -10,
}));

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={verdeNight}>
      <Wrapper>
        <Abstraction src="/images/desktop-background-abstraction.svg" alt="" />
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Layout;
