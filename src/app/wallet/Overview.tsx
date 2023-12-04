import React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HistoryIcon from "@mui/icons-material/History";
import Tooltip from "@mui/material/Tooltip";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function Overview() {
  return (
    <Paper sx={{p: 3}}>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={1}>
        <Typography fontWeight="medium" flexGrow={1}>
          Overview
        </Typography>
        <IconButton>
          <MoreHorizIcon color="primary" />
        </IconButton>
      </Stack>

      <SmartRow
        label={{
          icon: <Image src="/images/Group 57.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              safe Address
            </Typography>
          ),
        }}
        body={
          <Stack spacing={2} alignItems="center" direction="row">
            <Image src="/images/Group 58.svg" alt="" width={20} height={20} />
            <Typography fontWeight="medium" noWrap>
              eth:0x3a12868E33505424aCbdf53F11C8d447D59A8cfc
            </Typography>
          </Stack>
        }
        action={
          <IconButton>
            <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
          </IconButton>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="images/pound.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Created Transaction
            </Typography>
          ),
        }}
        body={
          <Typography color="primary" textTransform="capitalize">
            0x62ab...bc7d
          </Typography>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="/images/tools.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Fallback handler
            </Typography>
          ),
        }}
        body={
          <Typography color="primary" textTransform="capitalize">
            0x00000000
          </Typography>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="/images/file-code.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              master copy
            </Typography>
          ),
        }}
        body={
          <Typography color="primary" textTransform="capitalize">
            0x00000000
          </Typography>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="images/shield-check.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Guardian
            </Typography>
          ),
        }}
        body={
          <Stack direction="row" alignItems="center" spacing={2}>
            <Image src="/images/Group 58.svg" alt="" width={20} height={20} />
            <Typography color="primary">eth:0x62ab...bc7d</Typography>
          </Stack>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="images/Vector.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Nounce
            </Typography>
          ),
          info: "null",
        }}
        body={<Typography fontWeight="medium">3 203 transactions done</Typography>}
        action={
          <Button size="small" endIcon={<KeyboardArrowRightIcon />}>
            View Transactions
          </Button>
        }
      />

      <SmartRow
        label={{
          icon: <Image src="images/account-key 1.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Total Owners
            </Typography>
          ),
          info: "null",
        }}
        body={
          <Typography fontWeight="medium" noWrap>
            3 owners (2 signatures required for confirming transactions)
          </Typography>
        }
      />
      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Image src="/images/account-key 1.svg" alt="" width={20} height={20} />
                <Typography textTransform="capitalize" color="text.secondary">
                  Owner 1
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
                <Typography color="primary">eth:0x62ab...bc7d</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Image src="/images/account-key 1.svg" alt="" width={20} height={20} />
                <Typography textTransform="capitalize" color="text.secondary">
                  Owner 2
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
                <Typography color="primary">eth:0x62ab...bc7d</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />
      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Image src="/images/account-key 1.svg" alt="" width={20} height={20} />
                <Typography textTransform="capitalize" color="text.secondary">
                  Owner 3
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
                <Typography color="primary">eth:0x62ab...bc7d</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <IconButton>
              <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
            <IconButton href="/">
              <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
            </IconButton>
          </>
        }
      />

      <SmartRow
        label={{
          icon: <Image src="images/cube.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Installed Modules
            </Typography>
          ),
          info: "null",
        }}
        body={
          <Typography fontWeight="medium" noWrap>
            1
          </Typography>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="images/code-array.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Version
            </Typography>
          ),
          info: "null",
        }}
        body={
          <Typography fontWeight="medium" noWrap>
            1.3.0 + L2
          </Typography>
        }
      />
      <SmartRow
        label={{
          icon: <Image src="images/hand-coin.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Wallet Value
            </Typography>
          ),
          info: "null",
        }}
        body={
          <Typography fontWeight="medium" noWrap>
            3 500 000 (75 tokens)
          </Typography>
        }
        action={
          <Box sx={{position: "absolute", transform: `translateY(-50%)`}}>
            <Button
              endIcon={<KeyboardArrowDownIcon sx={{fontSize: 20}} color="primary" />}
              variant="text"
            >
              <Typography fontWeight="medium" color="primary">
                <Typography component="span" color="common.white">
                  Sort -{" "}
                </Typography>
                Show highest value
              </Typography>
            </Button>
          </Box>
        }
      />

      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    aspectRatio: "1/1",
                    height: 20,
                    display: "grid",
                    placeContent: "center",
                    bgcolor: "#D7D9DC1A",
                    borderRadius: 999,
                    paddingTop: 0.25,
                    marginRight: 0.25,
                  }}
                >
                  <Typography component="span" variant="body2">
                    1
                  </Typography>
                </Box>
                <Typography textTransform="capitalize" color="text.secondary">
                  Ethereum, ETH
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 59.svg" alt="" width={20} height={20} />
                <Typography>67.332 / $2,450,000.00</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <Tooltip title="Coming Soon" arrow>
              <IconButton>
                <HistoryIcon color="primary" sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    aspectRatio: "1/1",
                    height: 20,
                    display: "grid",
                    placeContent: "center",
                    bgcolor: "#D7D9DC1A",
                    borderRadius: 999,
                    paddingTop: 0.25,
                    marginRight: 0.25,
                  }}
                >
                  <Typography component="span" variant="body2">
                    2
                  </Typography>
                </Box>
                <Typography textTransform="capitalize" color="text.secondary">
                  Avalanche, AVAX
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 60.svg" alt="" width={20} height={20} />
                <Typography>67.332 / $2,450,000.00</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <Tooltip title="Coming Soon" arrow>
              <IconButton>
                <HistoryIcon color="primary" sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      <SmartRow
        body={
          <Grid container>
            <Grid item xs={6}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    aspectRatio: "1/1",
                    height: 20,
                    display: "grid",
                    placeContent: "center",
                    bgcolor: "#D7D9DC1A",
                    borderRadius: 999,
                    paddingTop: 0.25,
                    marginRight: 0.25,
                  }}
                >
                  <Typography component="span" variant="body2">
                    3
                  </Typography>
                </Box>
                <Typography textTransform="capitalize" color="text.secondary">
                  EtheFantom, FTM
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6}>
              <Stack justifyContent="flex-end" direction="row" alignItems="center" spacing={2}>
                <Image src="/images/Group 61.svg" alt="" width={20} height={20} />
                <Typography>67.332 / $2,450,000.00</Typography>
              </Stack>
            </Grid>
          </Grid>
        }
        action={
          <>
            <Tooltip title="Coming Soon" arrow>
              <IconButton>
                <HistoryIcon color="primary" sx={{fontSize: 20}} />
              </IconButton>
            </Tooltip>
          </>
        }
      />
      <SmartRow
        isLastRow
        body={
          <Button size="small" endIcon={<KeyboardArrowRightIcon />}>
            View All 75 Tokens
          </Button>
        }
      />
    </Paper>
  );
}

export default Overview;
