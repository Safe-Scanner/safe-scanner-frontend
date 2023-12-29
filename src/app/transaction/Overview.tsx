import React, { useEffect } from "react";
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
import Status, { StatusT } from "../../components/global/DataTable/Status";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Box from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
import { NETWORK_SCANNER_MAP } from "@/constants/constants";
import CopyButton from "@/components/global/CopyButton";
import RedirectButton from "@/components/global/RedirectButton";
import { shortenString } from "@/components/utils/utils";

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

function Overview({ transactionData }: any) {
    const [network, setNetwork] = React.useState("");
    const [status, setStatus] = React.useState<StatusT>("Signature Pending");

    useEffect(() => {
        if (transactionData != undefined) {
            let net = Object.keys(transactionData)[0];
            setNetwork(net);
            let status = "";
            determineAndSetStatus(transactionData[net], setStatus);
        }
    }, [transactionData]);

    if (transactionData == undefined) return <CircularProgress />;

    return (
        <Paper sx={{ p: 3 }}>
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
                action={<CopyButton text={transactionData[network]?.safeTxHash} />}
            >
                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                    {transactionData[network]?.safeTxHash}
                </Typography>
            </SmartRow>
            <SmartRow
                label={{
                    icon: <Image src="images/pound.svg" alt="" width={20} height={20} />,
                    text: (
                        <Typography color="text.secondary" textTransform="capitalize">
                            safe
                        </Typography>
                    ),
                }}
                action={
                    <>
                        <CopyButton text={transactionData[network]?.safe} />
                        <RedirectButton redirectLink={"https://app.safe.global/apps?safe=matic:" + transactionData[network]?.safe} />
                    </>
                }
            >
                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                    {transactionData[network]?.safe}
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
                <Status status={status} />
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
                        <CopyButton text={transactionData[network]?.transactionHash} />
                        <RedirectButton redirectLink={NETWORK_SCANNER_MAP + "/tx/" + transactionData[network]?.transactionHash} />
                    </>
                }
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <ArrowDownwardIcon sx={{ fontSize: 20 }} />
                    <Typography color="primary" fontFamily="'DM Mono'">
                        {shortenString(transactionData[network]?.transactionHash)}
                    </Typography>
                </Stack>
            </SmartRow>
            <SmartRow
                label={{
                    icon: <Image src="images/account-arrow-down.svg" alt="" width={20} height={20} />,
                    text: (
                        <Typography color="text.secondary" textTransform="capitalize">
                            To
                        </Typography>
                    ),
                }}
                action={
                    <>
                        <CopyButton text={transactionData[network]?.to} />
                        <RedirectButton redirectLink={NETWORK_SCANNER_MAP + "/address/" + transactionData[network]?.to} />
                    </>
                }
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <SubdirectoryArrowRightRoundedIcon sx={{ fontSize: 20 }} />
                    <Typography color="primary" fontFamily="'DM Mono'">
                        {shortenString(transactionData[network]?.to)}
                    </Typography>
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
                action={<CopyButton text={transactionData[network]?.value} />}
            >
                <Stack direction="row" alignItems="center" spacing={2}>
                    <Image src="/images/Group 55.svg" alt="" width={20} height={20} />
                    <Typography fontWeight="medium">{transactionData[network]?.value}</Typography>
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
                <Typography fontWeight="medium">{transactionData[network]?.nonce}</Typography>
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
                <Typography fontWeight="medium">
                    {transactionData[network]?.submissionDate ? transactionData[network]?.submissionDate : "-"}
                </Typography>
            </SmartRow>
            <SmartRow
                label={{
                    icon: <Image src="images/calendar (1).svg" alt="" width={20} height={20} />,
                    text: (
                        <Typography color="text.secondary" textTransform="capitalize">
                            Execution date
                        </Typography>
                    ),
                    info: "null",
                }}
            >
                <Typography fontWeight="medium">
                    {transactionData[network]?.executionDate ? transactionData[network]?.executionDate : "-"}
                </Typography>
            </SmartRow>
            <SmartRow
                label={{
                    icon: <Image src="images/calendar (1).svg" alt="" width={20} height={20} />,
                    text: (
                        <Typography color="text.secondary" textTransform="capitalize">
                            Block Number
                        </Typography>
                    ),
                    info: "null",
                }}
            >
                <Typography fontWeight="medium">
                    {transactionData[network]?.blockNumber ? transactionData[network]?.blockNumber : "-"}
                </Typography>
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
                action={<CopyButton text={transactionData[network]?.data ? transactionData[network]?.data : "-"} />}
            >
                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                    {transactionData[network]?.data ? transactionData[network]?.data : "-"}
                </Typography>
            </SmartRow>
        </Paper>
    );
}

export default Overview;
