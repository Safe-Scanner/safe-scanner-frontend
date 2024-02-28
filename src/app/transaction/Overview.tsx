import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import Status, { StatusT } from "../../components/global/DataTable/Status";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Box from "@mui/material/Box";
import { CircularProgress, Skeleton, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { NETWORK_SCANNER_MAP, POWERED_BY_LOGO_MAP } from "@/constants/constants";
import CopyButton from "@/components/global/CopyButton";
import RedirectButton from "@/components/global/RedirectButton";
import { getFee, shortenString } from "@/components/utils/utils";
import moment from "moment";
import Action from "@/components/global/DataTable/Action";
import { PowerButton } from "./PowerButton";

const determineAndSetStatus = (transactionData: any, func: any): void => {
    let status = "Signature Pending";
    if (transactionData.isExecuted) {
        status = "Successful";
    } else {
        status = "Signature Pending";
    }
    if (transactionData.isSuccessful) {
        status = "Successful";
    } else {
        status = "Failed";
    }
    func(status);
};

const tableStyles = {
    border: "none",
};

const cellStyles = {
    borderBottom: "none",
};

function Overview({ transactionData }: any) {
    const [open, setOpen] = useState(false);
    const [network, setNetwork] = React.useState("");
    const [status, setStatus] = React.useState<StatusT>("Signature Pending");
    const [data, setData] = useState([] as any);
    const [fee, setFee] = useState("");

    useEffect(() => {
        if (transactionData != undefined) {
            setNetwork(transactionData?.network);
            let status = "";
            determineAndSetStatus(transactionData?.transactionInfo, setStatus);
            setData(transactionData?.transactionInfo);
            const calculatedFee = getFee(transactionData?.transactionInfo.fee, transactionData?.network);
            console.log(calculatedFee);
            setFee(calculatedFee?.value);
        }
    }, [transactionData]);

    return (
        <>
            {transactionData != undefined ? (
                <Paper sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" marginBottom={1}>
                        <Typography fontWeight="medium" flexGrow={1}>
                            Overview
                        </Typography>
                        <IconButton>
                            <MoreHorizIcon color="primary" />
                        </IconButton>
                    </Stack>
                    {transactionData != undefined && (
                        <>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/pound.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            safe Tx Hash
                                        </Typography>
                                    ),
                                }}
                                action={<CopyButton text={data?.safeTxHash} setOpen={setOpen} />}
                            >
                                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                                    {data?.safeTxHash}
                                    {/* {data?.safeTxHash} */}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/pound.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Safe
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.safe} setOpen={setOpen} />
                                        <RedirectButton
                                            redirectLink={
                                                // "https://app.safe.global/apps?safe=matic:" + data?.safe
                                                `/wallet?safe=${data?.to}&network=${network}`
                                            }
                                        />
                                    </>
                                }
                            >
                                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                                    {data?.safe}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/circle-half-full.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Status & Action
                                        </Typography>
                                    ),
                                    info: "demo",
                                }}
                            >
                                <Status status={status} />
                                <Action action={data?.dataDecoded?.method} />
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/account-arrow-right.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Created Transaction
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.transactionHash} setOpen={setOpen} />
                                        <RedirectButton redirectLink={NETWORK_SCANNER_MAP + "/tx/" + data?.transactionHash} />
                                    </>
                                }
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <ArrowDownwardIcon sx={{ fontSize: 20 }} />
                                    <Typography color="primary" fontFamily="'DM Mono'">
                                        {shortenString(data?.transactionHash)}
                                    </Typography>
                                </Stack>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/account-arrow-down.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            To
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.to} setOpen={setOpen} />
                                        <RedirectButton
                                            // redirectLink={NETWORK_SCANNER_MAP + "/address/" + data?.to}
                                            redirectLink={`/wallet?safe=${data?.to}&network=${network}`}
                                        />
                                    </>
                                }
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <SubdirectoryArrowRightRoundedIcon sx={{ fontSize: 20 }} />
                                    <Typography color="primary" fontFamily="'DM Mono'">
                                        {shortenString(data?.to)}
                                    </Typography>
                                </Stack>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/currency-eth.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Value
                                        </Typography>
                                    ),
                                }}
                                action={<CopyButton text={data?.value} setOpen={setOpen} />}
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Image src="/images/Group 55.svg" alt="" width={20} height={20} />
                                    <Typography fontWeight="medium">{data?.value}</Typography>
                                </Stack>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/LabelIconquestion.svg" alt="nounce" width={25} height={25} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Nounce
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                            >
                                <Typography fontWeight="medium">{data?.nonce}</Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/calendar.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Submission Date
                                        </Typography>
                                    ),
                                }}
                            >
                                <Typography fontWeight="medium">
                                    {/* {data?.submissionDate ? data?.submissionDate : "-"} */}
                                    {data?.submissionDate ? moment(data?.submissionDate).fromNow() : "-"}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/calendar (1).svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Execution date
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                            >
                                <Typography fontWeight="medium">
                                    {/* {data?.executionDate ? data?.executionDate : "-"} */}
                                    {data?.executionDate ? moment(data?.executionDate).fromNow() : "-"}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/calendar (1).svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Block Number
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                            >
                                <Typography fontWeight="medium">{data?.blockNumber ? data?.blockNumber : "-"}</Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/Fee.svg" alt="fee" width={25} height={25} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Fee
                                        </Typography>
                                    ),

                                    info: "null",
                                }}
                                // action={
                                // <PowerButton
                                //     style={{
                                //         "margin-left": "10px",
                                //     }}
                                //     sponsoredBy={data.sponsoredBy}
                                // />
                                // }
                            >
                                <Typography fontWeight="medium">
                                    {fee} {network.toUpperCase()}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/code-array.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Data
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                                action={<CopyButton text={data?.data ? data?.data : "-"} setOpen={setOpen} />}
                            >
                                {/* <Typography
									fontWeight="medium"
									variant="body1"
									fontFamily="'DM Mono'"
								>
							</Typography> */}
                                <Box
                                    sx={{
                                        width: "100%",
                                        overflow: "auto",
                                    }}
                                >
                                    <Typography
                                        fontWeight="medium"
                                        fontFamily=" 'DM Mono'"
                                        display="inline"
                                        sx={{
                                            whiteSpace: "pre-wrap",
                                            width: "100%",
                                            overflowWrap: "break-word",
                                        }}
                                    >
                                        {data?.data ? data?.data : "-"}
                                    </Typography>
                                </Box>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/code-array.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Params
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                                // action={
                                // 	<CopyButton
                                // 		text={data?.data ? data?.data : "-"}
                                // 		setOpen={setOpen}
                                // 	/>
                                // }
                            >
                                {/* <Typography
									fontWeight="medium"
									variant="body1"
									fontFamily="'DM Mono'"
								>
							</Typography> */}
                                <TableContainer component={Paper}>
                                    <TableRow style={tableStyles}>
                                        <TableBody>
                                            <TableRow sx={{ borderBottom: "none" }}>
                                                {data?.dataDecoded?.parameters?.map((el: any, index: any) => (
                                                    <TableCell key={index} style={cellStyles}>
                                                        <Typography>{el?.name}</Typography>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                            <TableRow sx={{ borderBottom: "none" }}>
                                                {data?.dataDecoded?.parameters?.map((el: any, index: any) => (
                                                    <TableCell key={index} style={cellStyles}>
                                                        <Typography fontFamily="'DM Mono'">{el?.value}</Typography>
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableBody>
                                    </TableRow>
                                </TableContainer>
                            </SmartRow>
                        </>
                    )}
                </Paper>
            ) : (
                <Paper sx={{ p: 3 }}>
                    <Skeleton variant="rounded" height={700} />
                </Paper>
            )}
        </>
    );
}

export default Overview;
