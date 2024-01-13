import React, { Fragment, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import HashTab from "@/components/global/HashTab";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";

function Balance(props: any) {
    const [balanceData, setBalanceData] = useState([] as any);
    const [nft, setNft] = useState([] as any);
    const { balances } = props;

    useEffect(() => {
        setBalanceData([]);
        setNft([]);
        if (balances != undefined && balances) {
            balances?.forEach((el: any) => {
                if (el.type === "nft") {
                    setNft((prev: any) => [...prev, el]);
                } else {
                    setBalanceData((prev: any) => [...prev, el]);
                }
            });
        }
    }, [balances]);

    return (
        <>
            {balanceData.length > 0 ? (
                <Stack spacing={3}>
                    <div>
                        <HashTab size="small" tabs={[`Crypto (${balanceData.length})`, `NFTs (${nft.length})`]}>
                            <Grid container sx={{ marginTop: 2 }} spacing={0.5} aria-label="Crypto">
                                {balanceData.map((el: any, index: any) => {
                                    return (
                                        <Grid key={index} item xs={12} md={12} lg={12}>
                                            <Paper sx={{ padding: 2 }}>
                                                <Stack spacing={2}>
                                                    <Stack direction="row" spacing={2}>
                                                        <Stack direction="row" spacing={2} flexGrow={1} alignItems="center">
                                                            <img
                                                                // src="/images/ethereum.svg"
                                                                src={`${
                                                                    el?.logo_urls?.token_logo_url
                                                                        ? el?.logo_urls?.token_logo_url
                                                                        : el?.logo_url
                                                                }`}
                                                                alt=""
                                                                width={40}
                                                                height={40}
                                                            />
                                                            <Typography color="text.secondary">{el?.contract_ticker_symbol}</Typography>
                                                        </Stack>
                                                        <Stack>
                                                            <Typography fontWeight="medium">
                                                                {(el?.balance / Math.pow(10, el?.contract_decimals)).toFixed(2)}{" "}
                                                                {el?.contract_name}
                                                            </Typography>
                                                            <Typography color="text.disabled" variant="subtitle2" fontWeight="medium">
                                                                {/* $4,163.44 */}${el.quote}
                                                            </Typography>
                                                        </Stack>
                                                    </Stack>
                                                </Stack>
                                            </Paper>
                                        </Grid>
                                    );
                                })}
                            </Grid>
                            <Paper sx={{ p: 3, mt: 2 }} aria-label="NFT">
                                <Grid container columnSpacing={4} rowSpacing={2.5}>
                                    {nft.length > 0 &&
                                        nft.map((el: any, index: any) => (
                                            <Grid key={index} item xs={12} md={12} lg={12}>
                                                <Paper sx={{ padding: 2 }}>
                                                    <Stack spacing={2}>
                                                        <Stack direction="row" spacing={2}>
                                                            <Stack direction="row" spacing={2} flexGrow={1} alignItems="center">
                                                                <img
                                                                    // src="/images/ethereum.svg"
                                                                    src={`${
                                                                        el?.logo_urls?.token_logo_url
                                                                            ? el?.logo_urls?.token_logo_url
                                                                            : el?.logo_url
                                                                    }`}
                                                                    alt=""
                                                                    width={40}
                                                                    height={40}
                                                                />
                                                                <Typography color="text.secondary">{el?.contract_ticker_symbol}</Typography>
                                                            </Stack>
                                                            <Stack>
                                                                <Typography fontWeight="medium">
                                                                    {el?.balance / Math.pow(10, el?.contract_decimals)} {el?.contract_name}
                                                                </Typography>
                                                                <Typography color="text.disabled" variant="subtitle2" fontWeight="medium">
                                                                    {/* $4,163.44 */}${el.totalQuote}
                                                                </Typography>
                                                            </Stack>
                                                        </Stack>
                                                    </Stack>
                                                </Paper>
                                            </Grid>
                                            // <Grid item key={index} xs={12} md={12} lg={12}>
                                            // 	<Stack direction="row" spacing={1} alignItems="center">
                                            // 		<Stack flexGrow={1} spacing={0.5}>
                                            // 			<Typography
                                            // 				variant="subtitle2"
                                            // 				color="text.disabled"
                                            // 				fontWeight="medium"
                                            // 			>
                                            // 				NFT {index + 1}
                                            // 			</Typography>
                                            // 			<Typography
                                            // 				color="text.secondary"
                                            // 				fontWeight="medium"
                                            // 			>
                                            // 				{el.contract_address}
                                            // 			</Typography>
                                            // 		</Stack>
                                            // 		<Stack spacing={0.5} direction="row">
                                            // 			<IconButton>
                                            // 				<ContentCopyIcon
                                            // 					color="primary"
                                            // 					sx={{ fontSize: 20 }}
                                            // 				/>
                                            // 			</IconButton>
                                            // 			<IconButton href="/">
                                            // 				<OpenInNewIcon
                                            // 					color="primary"
                                            // 					sx={{ fontSize: 20 }}
                                            // 				/>
                                            // 			</IconButton>
                                            // 		</Stack>
                                            // 	</Stack>
                                            // </Grid>
                                        ))}
                                </Grid>
                            </Paper>
                        </HashTab>
                    </div>
                </Stack>
            ) : (
                <Paper sx={{ p: 3 }}>
                    <Skeleton variant="rounded" height={100} />
                </Paper>
            )}
        </>
    );
}

export default Balance;
