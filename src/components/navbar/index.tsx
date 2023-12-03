import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";

function Navbar() {
  return (
    <nav>
      <Stack padding={3} aria-label="Navigation" direction="row">
        <Box sx={{flexGrow: 1}}>
          <Link href="/">
            <Box
              component={"img"}
              width={134}
              src="/images/logo.svg"
              alt="Safe Scanner"
            />
          </Link>
        </Box>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button size="small" variant="contained" color="black">
            Connect Wallet
          </Button>
          <IconButton size="small" sx={{bgcolor: "grey.600"}}>
            <MoreHorizIcon sx={{fontSize: 20}} />
          </IconButton>
        </Stack>
      </Stack>
    </nav>
  );
}

export default Navbar;
