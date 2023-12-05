import React from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import Status from "../../components/global/DataTable/Status";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Box from "@mui/material/Box";

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
          icon: <Image src="images/pound.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              safe Tx Hash
            </Typography>
          ),
        }}
        action={
          <IconButton>
            <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
          </IconButton>
        }
      >
        <Typography fontWeight="medium" noWrap>
          0xcbe165494374e8aadf6b3ce94d8c9db8311091674df25da1318d6811655f0200
        </Typography>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/circle-half-full.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Status
            </Typography>
          ),
          info: "demo",
        }}
      >
        <Status status="Signed" />
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/account-arrow-right.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Created Transaction
            </Typography>
          ),
        }}
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
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <ArrowDownwardIcon sx={{fontSize: 20}} />
          <Typography color="primary">eth:0x62ab...bc7d</Typography>
        </Stack>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/account-arrow-down.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              To Safe address
            </Typography>
          ),
        }}
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
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <SubdirectoryArrowRightRoundedIcon sx={{fontSize: 20}} />
          <Typography color="primary">eth:0x62ab...bc7d</Typography>
        </Stack>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/currency-eth.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Value
            </Typography>
          ),
        }}
        action={
          <IconButton>
            <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
          </IconButton>
        }
      >
        <Stack direction="row" alignItems="center" spacing={2}>
          <Image src="/images/Group 55.svg" alt="" width={20} height={20} />
          <Typography fontWeight="medium">0 ETH ($0.00)</Typography>
        </Stack>
      </SmartRow>
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
      >
        <Typography fontWeight="medium">-</Typography>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/calendar.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Submission Date
            </Typography>
          ),
        }}
      >
        <Typography fontWeight="medium">2023-10-17 17:50:04</Typography>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/calendar (1).svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              modified date
            </Typography>
          ),
          info: "null",
        }}
      >
        <Typography fontWeight="medium">2023-10-17 17:51:07</Typography>
      </SmartRow>
      <SmartRow
        label={{
          icon: <Image src="images/code-array.svg" alt="" width={20} height={20} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Data
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton>
            <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
          </IconButton>
        }
      >
        <Typography fontWeight="medium" noWrap>
          0xa9059cbb000000000000000000000000e95c4707ecf588dfd8ab3b253e00f45339ac305400000000000000000000000000000000000000000000000000000000000f42400xa9059cbb000000000000000000000000e95c4707ecf588dfd8ab3b253e00f45339ac305400000000000000000000000000000000000000000000000000000000000f4240
        </Typography>
      </SmartRow>
    </Paper>
  );
}

export default Overview;
