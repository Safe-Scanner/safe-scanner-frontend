"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Searchbar from "@/components/global/Searchbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Overview from "./Overview";
import Confirmations from "./Confirmations";
import HashTab from "@/components/global/HashTab";

import { useSearchParams } from "next/navigation";
import { getTransactionData } from "@/apis/transctionPage";

function TransactionPage() {
    const searchParams = useSearchParams();
    const [transactionData, setTransactionData] = useState<any>(null);
    const safeTransactionhash: string = searchParams.get("transactionHash") || "";

    useEffect(() => {
        console.log(safeTransactionhash);
        const txData = getTransactionData(safeTransactionhash, setTransactionData);
    }, [safeTransactionhash]);

    useEffect(() => {
        console.log(transactionData);
    }, [transactionData]);

    return (
        <div>
            <Box component="section">
                <Box marginBottom={6} marginTop={3}>
                    <Searchbar />
                </Box>
            </Box>
            <Box component="section" marginBottom={8}>
                <Container>
                    <Stack spacing={3}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <Image src="/images/pound.svg" width={24} height={24} alt="" />
                            <Typography variant="h3" component="h1" fontWeight="medium">
                                Transaction
                            </Typography>
                        </Stack>

                        <HashTab tabs={["Overview", "Confirmations"]}>
                            <Overview transactionData={transactionData} />
                            <Confirmations transactionData={transactionData} />
                        </HashTab>
                    </Stack>
                </Container>
            </Box>
        </div>
    );
}

export default TransactionPage;
