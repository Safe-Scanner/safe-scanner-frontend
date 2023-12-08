import React from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";

function Transactions() {
  return (
    <Grid container sx={{marginTop: 2}} spacing={0.5}>
      {[...Array(12)].map((_, index) => (
        <Grid key={index} item xs={12} md={6} lg={4}>
          <Transaction
            value="0x242a…6b96"
            message="Not supported"
            icon="/images/ethereum.svg"
            statusValue="+21.504 MATIC"
            statusSubValue="+$21.03"
            variant="complete"
            date="1 day ago"
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Transactions;
