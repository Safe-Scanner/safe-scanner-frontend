import React, {Fragment} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import HashTab from "@/components/global/HashTab";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import Grid from "@mui/material/Grid";

function Balance() {
  return (
    <Stack spacing={3}>
      <div>
        <HashTab size="small" tabs={["Crypto (7)", "NFTs (15)"]}>
          <Grid container sx={{marginTop: 2}} spacing={0.5} aria-label="Crypto">
            {[...Array(12)].map((_, index) => (
              <Grid key={index} item xs={12} md={6} lg={4}>
                <Paper sx={{padding: 2}}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        flexGrow={1}
                        alignItems="center"
                      >
                        <Image
                          src="/images/ethereum.svg"
                          alt=""
                          width={40}
                          height={40}
                        />
                        <Typography color="text.secondary">Ethereum</Typography>
                      </Stack>
                      <Stack>
                        <Typography fontWeight="medium">2.45 ETH</Typography>
                        <Typography
                          color="text.disabled"
                          variant="subtitle2"
                          fontWeight="medium"
                        >
                          $4,163.44
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
          <Paper sx={{p: 3, mt: 2}} aria-label="NFT">
            <Grid container columnSpacing={4} rowSpacing={2.5}>
              {[...Array(9)].map((_, index) => (
                <Grid item key={index} xs={12} md={6} lg={4}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Stack flexGrow={1} spacing={0.5}>
                      <Typography
                        variant="subtitle2"
                        color="text.disabled"
                        fontWeight="medium"
                      >
                        NFT {index + 1}
                      </Typography>
                      <Typography color="text.secondary" fontWeight="medium">
                        0x242a…6b96
                      </Typography>
                    </Stack>
                    <Stack spacing={0.5} direction="row">
                      <IconButton>
                        <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
                      </IconButton>
                      <IconButton href="/">
                        <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </HashTab>
      </div>
    </Stack>
  );
}

export default Balance;
