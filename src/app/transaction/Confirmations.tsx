"use client";
import React, { useEffect, useState } from "react";
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
import SmartRow from "@/components/global/DataTable/SmartRow";
import ErrorIcon from "@mui/icons-material/Error";
import Collapse from "@mui/material/Collapse";

import TimeAgo from "javascript-time-ago";
// English.
import en from "javascript-time-ago/locale/en";
import { NETWORK_SCANNER_MAP } from "@/constants/constants";
import useSafeHooks from "@/hooks/SafeHooks";
import { ownerSlice } from "@/components/utils/utils";
import { useAccount } from "wagmi";

TimeAgo.addDefaultLocale(en);

// Create formatter (English).
const timeAgo = new TimeAgo("en-US");

// function Confirmations({ transactionData }: any) {
function Confirmations({ confirmation, txnInfo }: any) {
  const [collapse, setCollapse] = useState<string>("successful-signatures");
  const [confirmations, setConfirmations] = useState<any>();
  const [network, setNetwork] = useState<any>();
  const { address, isConnected } = useAccount();
  const { signTransaction, createTransaction, sendTransaction } = useSafeHooks({
    safeWallet: txnInfo?.safe,
    safeOwner: address,
  });

  console.log(confirmation);
  console.log("===> this is the address", address);

  const signHandler = async () => {
    console.log(txnInfo);
    console.log(network);
    await signTransaction(txnInfo.safeTxHash, txnInfo);
  };

  useEffect(() => {
    if (confirmation != undefined) {
      setConfirmations(confirmation);
    }
  }, [confirmation]);

  const handleCollapse = (id: string) => {
    if (collapse === id) {
      setCollapse("");
    } else {
      setCollapse(id);
    }
  };

  return (
    <Paper sx={{ p: 3 }}>
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
          icon: <AccessTimeFilledIcon sx={{ fontSize: 20, fill: "#F7D383" }} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Pending Signatures
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton onClick={() => handleCollapse("pending-signatures")}>
            <KeyboardArrowUpIcon
              sx={{
                fontSize: 20,
                transform:
                  collapse === "pending-signatures" ? "rotate(-180deg)" : "",
                transition: "transform 0.2s ease-in-out",
              }}
              color="primary"
            />
          </IconButton>
        }
      >
        <Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
          {
            confirmations?.filter((el: any) => !el.confirmationSignStatus)
              .length
          }
          /{confirmations?.length} signatures left
        </Typography>
      </SmartRow>
      <Collapse in={collapse === "pending-signatures"}>
        <SmartRow
          action={
            <Button
              onClick={signHandler}
              startIcon={
                <Image
                  src="/images/qrcode-scan.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              }
              size="small"
            >
              Sign Now
            </Button>
          }
        >
          <Grid container spacing={1}>
            {confirmations
              ?.filter((el: any) => !el.confirmationSignStatus)
              ?.map((el: any, i: number) => (
                <>
                  <Grid item xs={12} md={6}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Image
                        src="/images/account-key 1.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <Typography
                        textTransform="capitalize"
                        color="text.secondary"
                      >
                        Owner {confirmations?.filter((el: any) => !el.confirmationSignStatus).length+1}
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack
                      justifyContent={{ xs: "flex-start", md: "flex-end" }}
                      direction="row"
                      alignItems="center"
                      spacing={2}
                    >
                      <Image
                        src="/images/Group 56.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                      <Typography color="primary" fontFamily="'DM Mono'">
                        {ownerSlice(el?.owner)}
                      </Typography>
                    </Stack>
                  </Grid>
                </>
              ))}
          </Grid>
        </SmartRow>
      </Collapse>
      {/* <SmartRow
            >
                <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Image src="/images/account-key 1.svg" alt="" width={20} height={20} />
                            <Typography textTransform="capitalize" color="text.secondary">
                                Owner 3
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </SmartRow> */}

      <SmartRow
        label={{
          icon: <CheckCircleIcon sx={{ fontSize: 20, fill: "#13FF75" }} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Succesful Signatures
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton onClick={() => handleCollapse("successful-signatures")}>
            <KeyboardArrowUpIcon
              sx={{
                fontSize: 20,
                transform:
                  collapse === "successful-signatures" ? "rotate(-180deg)" : "",
                transition: "transform 0.2s ease-in-out",
              }}
              color="primary"
            />
          </IconButton>
        }
      >
        <Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
          {
            confirmations?.filter(
              (el: any) => el.confirmationSignStatus === "CONFIRMED"
            ).length
          }
          /{confirmations?.length} successful signature
          {confirmations?.filter(
            (el: any) => el.confirmationSignStatus === "CONFIRMED"
          )?.length > 1
            ? "s"
            : ""}
        </Typography>
      </SmartRow>
      <Collapse in={collapse === "successful-signatures"}>
        {confirmations
          ?.filter((el: any) => el.confirmationSignStatus === "CONFIRMED")
          ?.map((confirmation: any, i: number) => {
            return (
              <>
                <SmartRow
                  action={
                    confirmation.transactionHash && (
                      <Button
                        href={
                          NETWORK_SCANNER_MAP[network] +
                          "/tx/" +
                          confirmation.transactionHash
                        }
                        size="small"
                      >
                        View Hash
                      </Button>
                    )
                  }
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={6}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Image
                          src="/images/account-key 1.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <Typography
                          textTransform="capitalize"
                          color="text.secondary"
                        >
                          Owner {i + 1}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ xs: "flex-start", md: "flex-end" }}
                        spacing={2}
                      >
                        <Image
                          src="/images/Group 56.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <Typography color="primary" fontFamily="'DM Mono'">
                          {ownerSlice(confirmation?.owner)}
                        </Typography>
                      </Stack>
                    </Grid>
                  </Grid>
                </SmartRow>
                <SmartRow disabledBorder>
                  <Stack direction="row" spacing={4} alignItems="center">
                    <Typography
                      textTransform="capitalize"
                      color="text.secondary"
                    >
                      Time stamp
                    </Typography>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Image
                        src="/images/Value Icon.svg"
                        alt=""
                        width={32}
                        height={32}
                      />
                      <Typography fontFamily="'DM Mono'">
                        {confirmation?.submissionDate &&
                          timeAgo?.format(
                            new Date(confirmation?.submissionDate)
                          )}{" "}
                        ({confirmation?.submissionDate})
                      </Typography>
                    </Stack>
                  </Stack>
                </SmartRow>
              </>
            );
          })}
      </Collapse>

      {/* <SmartRow
        label={{
          icon: <CheckCircleIcon sx={{ fontSize: 20, fill: "#13FF75" }} />,
          text: (
            <Typography color="text.secondary" textTransform="capitalize">
              Pending Signatures
            </Typography>
          ),
          info: "null",
        }}
        action={
          <IconButton onClick={() => handleCollapse("successful-signatures")}>
            <KeyboardArrowUpIcon
              sx={{
                fontSize: 20,
                transform:
                  collapse === "successful-signatures" ? "rotate(-180deg)" : "",
                transition: "transform 0.2s ease-in-out",
              }}
              color="primary"
            />
          </IconButton>
        }
      >
        <Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
          {
            confirmations?.filter((el: any) => !el?.confirmationSignStatus)
              ?.length
          }{" "}
          pending signature
          {confirmations?.filter((el: any) => !el?.confirmationSignStatus)
            ?.length > 1
            ? "s"
            : ""}
        </Typography>
      </SmartRow>
      <Collapse in={collapse === "successful-signatures"}>
        {confirmations
          ?.filter((el: any) => !el?.confirmationSignStatus)
          ?.map((confirmation: any, i: number) => {
            return (
              <>
                <SmartRow
                  action={
                    confirmation.transactionHash && (
                      <Button
                        href={
                          NETWORK_SCANNER_MAP[network] +
                          "/tx/" +
                          confirmation.transactionHash
                        }
                        size="small"
                      >
                        View Hash
                      </Button>
                    )
                  }
                >
                  <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                      <Stack direction="row" alignItems="center" spacing={2}>
                        <Image
                          src="/images/account-key 1.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <Typography
                          textTransform="capitalize"
                          color="text.secondary"
                        >
                          Owner {i + 1}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ xs: "flex-start", md: "flex-end" }}
                        spacing={2}
                      >
                        <Image
                          src="/images/Group 56.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <Typography color="primary" fontFamily="'DM Mono'">
                          {confirmation.owner}
                        </Typography>
                      </Stack>
                    </Grid>
                    <Grid item xs={12} md={2}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent={{ xs: "flex-start", md: "flex-end" }}
                        spacing={2}
                      >
                        <Button
                          startIcon={
                            <Image
                              src="/images/qrcode-scan.svg"
                              alt=""
                              width={20}
                              height={20}
                            />
                          }
                          size="small"
                        >
                          Sign Now
                        </Button>
                      </Stack>
                    </Grid>
                  </Grid>
                </SmartRow>
                <SmartRow disabledBorder>
                  <Stack direction="row" spacing={4} alignItems="center">
                    <Stack
                      style={{ marginLeft: "auto" }}
                      direction="row"
                      alignItems="center"
                      spacing={1}
                    >
                    </Stack>
                  </Stack>
                </SmartRow>
              </>
            );
          })}
      </Collapse> */}

      {/* <SmartRow
                label={{
                    icon: <ErrorIcon sx={{ fontSize: 20, fill: "#FF5467" }} />,
                    text: (
                        <Typography color="text.secondary" textTransform="capitalize">
                            Failed Signing
                        </Typography>
                    ),
                    info: "null",
                }}
                action={
                    <IconButton onClick={() => handleCollapse("failed-signing")}>
                        <KeyboardArrowUpIcon
                            sx={{
                                fontSize: 20,
                                transform: collapse === "failed-signing" ? "rotate(-180deg)" : "",
                                transition: "transform 0.2s ease-in-out",
                            }}
                            color="primary"
                        />
                    </IconButton>
                }
            >
                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                    1 failed signing
                </Typography>
            </SmartRow>
            <Collapse in={collapse === "failed-signing"}>
                <SmartRow action={<Button size="small">View Error</Button>}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Image src="/images/account-key 1.svg" alt="" width={20} height={20} />
                                <Typography textTransform="capitalize" color="text.secondary">
                                    Owner 2
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Stack direction="row" alignItems="center" justifyContent={{ xs: "flex-start", md: "flex-end" }} spacing={2}>
                                <Image src="/images/Group 56.svg" alt="" width={20} height={20} />
                                <Typography color="primary" fontFamily="'DM Mono'">
                                    eth:0x62ab...bc7d
                                </Typography>
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
                            <Typography fontFamily="'DM Mono'">1 hr ago (Oct-21-2023 04:55:23 PM +UTC)</Typography>
                        </Stack>
                    </Stack>
                </SmartRow>
            </Collapse> */}
    </Paper>
  );
}

export default Confirmations;
