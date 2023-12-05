import React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Grid from "@mui/material/Grid";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SmartRow from "../../components/global/DataTable/SmartRow";
import ErrorIcon from "@mui/icons-material/Error";

function Confirmations() {
  return (
    <Paper sx={{p: 3}}>
      <Stack direction="row" spacing={2} alignItems="center" marginBottom={1}>
        <Typography fontWeight="medium" flexGrow={1}>
          Confirmations
        </Typography>
        <IconButton>
          <MoreHorizIcon color="primary" />
        </IconButton>
      </Stack>

      <SmartRow
        label={{
          icon: <AccessTimeFilledIcon sx={{fontSize: 20, fill: "#F7D383"}} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Pending Signatures
            </Typography>
          ),
          info: "null",
        }}
      >
        <Typography fontWeight="medium" noWrap>
          2/3 signatures left
        </Typography>
      </SmartRow>
      <SmartRow
        action={
          <Button
            startIcon={<Image src="/images/qrcode-scan.svg" alt="" width={20} height={20} />}
            size="small"
          >
            Sign Now
          </Button>
        }
      >
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
      </SmartRow>
      <SmartRow
        action={
          <Button
            startIcon={<Image src="/images/qrcode-scan.svg" alt="" width={20} height={20} />}
            size="small"
          >
            Sign Now
          </Button>
        }
      >
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
      </SmartRow>

      <SmartRow
        label={{
          icon: <CheckCircleIcon sx={{fontSize: 20, fill: "#13FF75"}} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Succesful Signatures
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton>
            <KeyboardArrowUpIcon sx={{fontSize: 20}} color="primary" />
          </IconButton>
        }
      >
        <Typography fontWeight="medium" noWrap>
          1/3 successful signature
        </Typography>
      </SmartRow>
      <SmartRow action={<Button size="small">View Hash</Button>}>
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
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
              <Typography color="primary">eth:0x62ab...bc7d</Typography>
            </Stack>
          </Grid>
        </Grid>
      </SmartRow>
      <SmartRow disabledBorder>
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography textTransform="capitalize" color="text.secondary">
            Time stamp
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image src="/images/Value Icon.svg" alt="" width={32} height={32} />
            <Typography>1 hr ago (Oct-21-2023 04:55:23 PM +UTC)</Typography>
          </Stack>
        </Stack>
      </SmartRow>

      <SmartRow
        label={{
          icon: <ErrorIcon sx={{fontSize: 20, fill: "#FF5467"}} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Failed Signing
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton>
            <KeyboardArrowUpIcon sx={{fontSize: 20}} color="primary" />
          </IconButton>
        }
      >
        <Typography fontWeight="medium" noWrap>
          1 failed signing
        </Typography>
      </SmartRow>
      <SmartRow action={<Button size="small">View Error</Button>}>
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
            <Stack direction="row" alignItems="center" justifyContent="flex-end" spacing={2}>
              <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
              <Typography color="primary">eth:0x62ab...bc7d</Typography>
            </Stack>
          </Grid>
        </Grid>
      </SmartRow>
      <SmartRow disabledBorder>
        <Stack direction="row" spacing={4} alignItems="center">
          <Typography textTransform="capitalize" color="text.secondary">
            Time stamp
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image src="/images/Value Icon.svg" alt="" width={32} height={32} />
            <Typography>1 hr ago (Oct-21-2023 04:55:23 PM +UTC)</Typography>
          </Stack>
        </Stack>
      </SmartRow>
    </Paper>
  );
}

export default Confirmations;
