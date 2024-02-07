import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Skeleton } from "@mui/material";
import { NETWORK_LIST, NETWORK_MAP } from "@/constants/constants";

interface TransactionProps {
    icon: string;
    variant: "warning" | "success" | "complete";
    txType: string;
    value: string;
    statusSubValue: string;
    date: string | React.JSX.Element;
    txHash: string;
    network: string;
    safeTxHash: string;
    method: string;
}

const variantIcon = {
    warning: "/images/arrow-top-right-thick.svg",
    success: "/images/arrow-bottom-right-thick.svg",
    complete: "/images/check-bold.svg",
};

function Transaction(props: TransactionProps) {
    const { icon, variant, value, safeTxHash, statusSubValue, date, txType, txHash, network, method } = props;

    const handleRedirect = () => {
        if (txType != undefined) {
            console.log("txType");
            if (txType == "ETHEREUM_TRANSACTION") {
                window.open(`${NETWORK_MAP[network].explorerUrl}/tx/${txHash}`, "_blank");
            } else if (txType == "MULTISIG_TRANSACTION") {
                window.open(`/transaction?transactionHash=${safeTxHash}&network=${network}`, "_blank");
            } else {
                window.open(`/transaction?moduleTxId=${safeTxHash}&network=${network}`, "_blank");
            }
        } else {
            console.error("Hash not found");
        }
    };

    return (
        <>
            {value != date ? (
                <Paper sx={{ padding: 2 }}>
                    <Stack spacing={2.5} direction="row">
                        <Box sx={{ width: 40, height: 40, position: "relative" }}>
                            <Image src={icon} alt="" width={40} height={40} style={{ backgroundColor: "black", borderRadius: "50%" }} />
                            <Avatar
                                sx={{
                                    width: 16,
                                    height: 16,
                                    position: "absolute",
                                    right: -0.5,
                                    bottom: -0.5,
                                }}
                                src={variantIcon[variant]}
                                alt=""
                            />
                        </Box>
                        <Stack direction="row" alignItems="center" flexGrow={1}>
                            <Typography variant="body2" color="text.secondary" flexGrow={1}>
                                {method ? txType + " (" + method + ")" : txType}
                            </Typography>
                            <Stack direction="row" alignItems="center">
                                <Typography color="text.secondary" variant="body2">
                                    {safeTxHash ? safeTxHash : txHash}
                                </Typography>
                                <IconButton color="primary">
                                    <OpenInNewIcon sx={{ fontSize: 20 }} onClick={handleRedirect} />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Divider variant="inset" sx={{ ml: 7.5, mb: 1.5 }} />
                    <Stack direction="row" alignItems="flex-start" sx={{ ml: 7.5 }}>
                        <Stack flexGrow={1}>
                            <Typography fontWeight="medium">{value}</Typography>
                            {/* <Typography color="text.disabled" variant="body2">
                                {statusSubValue}
                            </Typography> */}
                        </Stack>
                        <Typography color="text.secondary" variant="subtitle2">
                            {date}
                        </Typography>
                    </Stack>
                </Paper>
            ) : (
                <Paper sx={{ p: 3 }}>
                    <Skeleton variant="rounded" height={100} />
                </Paper>
            )}
        </>
    );
}

export default Transaction;
