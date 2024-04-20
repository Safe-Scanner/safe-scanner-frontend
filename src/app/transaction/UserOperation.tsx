import React, { useEffect, useState } from "react";
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
import { CircularProgress, Skeleton, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { NETWORK_MAP, NETWORK_SCANNER_MAP } from "@/constants/constants";
import CopyButton from "@/components/global/CopyButton";
import RedirectButton from "@/components/global/RedirectButton";
import { getFee, shortenString, sixDigitShortrenString } from "@/components/utils/utils";
import { PowerButton } from "./PowerButton";
import Action from "@/components/global/DataTable/Action";

const determineAndSetStatus = (transactionData: any, func: any): void => {
    let status = "Signature Pending";
    if (transactionData.isExecuted) {
        status = "Successful";
    } else {
        status = "Signature Pending";
    }
    if (transactionData.success) {
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

function UserOperation({ transactionData }: any) {
    const [open, setOpen] = useState(false);
    const [network, setNetwork] = React.useState("");
    const [status, setStatus] = React.useState<StatusT>("Signature Pending");
    const [data, setData] = useState([] as any);
    const [fee, setFee] = useState<any>();

    useEffect(() => {
        if (transactionData != undefined) {
            let net = transactionData?.network;
            setNetwork(net);
            // let status = "";
            determineAndSetStatus(transactionData?.transactionInfo, setStatus);
            setData(transactionData?.transactionInfo);
            let calculatedFee = getFee(transactionData?.transactionInfo?.actualGasCost, transactionData.network);
            console.log("Fee is ", calculatedFee);
            setFee(calculatedFee);
        }
    }, [transactionData]);

    return (
        <>
            {transactionData != undefined ? (
                <Paper sx={{ p: 3 }}>
                    <Stack direction="row" spacing={2} alignItems="center" marginBottom={1}>
                        <Typography fontWeight="medium" flexGrow={1}>
                            UserOperation
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
                                            Transaction Hash
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.transactionHash} setOpen={setOpen} />
                                        <RedirectButton
                                            redirectLink={
                                                // "https://app.safe.global/apps?safe=matic:" + data?.safe
                                                `${NETWORK_MAP[network]}/tx/${data?.transactionHash}`
                                            }
                                        />
                                    </>
                                }
                            >
                                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                                    {sixDigitShortrenString(data?.transactionHash)}
                                    {/* {data?.transactionHash} */}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/pound.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            User Op Hash
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.safe} setOpen={setOpen} />
                                        <RedirectButton
                                            redirectLink={
                                                // "https://app.safe.global/apps?safe=matic:" + data?.safe
                                                `https://jiffyscan.xyz/userOpHash/${data?.userOpHash}`
                                            }
                                        />
                                    </>
                                }
                            >
                                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                                    {sixDigitShortrenString(data?.userOpHash)}
                                    {/* {data?.userOpHash} */}
                                </Typography>
                            </SmartRow>

                            <SmartRow
                                label={{
                                    icon: <Image src="/images/account-arrow-right.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Sender
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.sender} setOpen={setOpen} />
                                        <RedirectButton redirectLink={`wallet?safe=${data?.sender}&network=${network}`} />
                                    </>
                                }
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <ArrowDownwardIcon sx={{ fontSize: 20 }} />
                                    <Typography color="primary" fontFamily="'DM Mono'">
                                        {data?.sender}
                                    </Typography>
                                </Stack>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/account-arrow-right.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Target
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <>
                                        <CopyButton text={data?.to} setOpen={setOpen} />
                                        <RedirectButton
                                            // redirectLink={NETWORK_SCANNER_MAP + "/address/" + data?.to}
                                            redirectLink={`wallet?safe=${data?.sender}&network=${network}`}
                                        />
                                    </>
                                }
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <SubdirectoryArrowRightRoundedIcon sx={{ fontSize: 20 }} />
                                    <Typography color="primary" fontFamily="'DM Mono'">
                                        {data?.target}
                                    </Typography>
                                </Stack>
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
                                    icon: <Image src="/images/currency-eth.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Value
                                        </Typography>
                                    ),
                                }}
                                action={
                                    <CopyButton
                                        text={data?.value && "hex" in data?.value ? parseInt(data?.value?.[0].hex) : data?.value}
                                        setOpen={setOpen}
                                    />
                                }
                            >
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Image src="/images/Group 55.svg" alt="" width={20} height={20} />
                                    <Typography fontWeight="medium">
                                        {data?.value && "hex" in data?.value?.[0] ? parseInt(data?.value?.[0].hex) : data?.value}
                                    </Typography>
                                </Stack>
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
                                action={<PowerButton sponsoredBy={data?.sponsoredBy} />}
                            >
                                <Typography fontWeight="medium">
                                    {fee?.value} {fee?.gas?.children}
                                </Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/local_gas_station.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Gas Used
                                        </Typography>
                                    ),
                                }}
                            >
                                <Typography fontWeight="medium">{data?.actualGasUsed}</Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/building.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Paymaster
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                            >
                                <Typography fontWeight="medium">{data?.paymaster}</Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/Beneficiary.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Beneficiary
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                            >
                                <Typography fontWeight="medium">{data?.beneficiary}</Typography>
                            </SmartRow>
                            <SmartRow
                                label={{
                                    icon: <Image src="/images/cube.svg" alt="" width={20} height={20} />,
                                    text: (
                                        <Typography color="text.secondary" textTransform="capitalize">
                                            Block
                                        </Typography>
                                    ),
                                    info: "null",
                                }}
                                action={<CopyButton text={data?.blockNumber} setOpen={setOpen} />}
                            >
                                <Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
                                    {data?.blockNumber}
                                </Typography>
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

export default UserOperation;
