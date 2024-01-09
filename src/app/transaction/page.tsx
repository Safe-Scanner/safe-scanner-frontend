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

type OwnerInfo = {
	owner: string;
	signature: string;
	signatureType: string;
	submissionDate: string;
	transactionHash: string | null;
};

function TransactionPage() {
	const searchParams = useSearchParams();
	const network: any = searchParams.get("network");
	const [transactionData, setTransactionData] = useState<any>(null);
	const safeTransactionhash: string = searchParams.get("transactionHash") || "";
	const [key, setkey] = useState([] as any);
	const [confirmation, setConfirmation] = useState<OwnerInfo[]>([]);

	useEffect(() => {
		const txData = getTransactionData(
			safeTransactionhash,
			network,
			setTransactionData
		);
	}, [safeTransactionhash]);

	useEffect(() => {
		if (transactionData != undefined) {
			const keys = Object.keys(transactionData);
			console.log(keys);
			setConfirmation(transactionData[keys[0]][0]?.confirmations);
			// console.log(transactionData[keys[0]]);
		}
	}, [transactionData]);

	console.log(confirmation);

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
								Safe Transaction
							</Typography>
						</Stack>

						{transactionData != undefined &&
						Object.keys(transactionData)[0] != "statusCode" ? (
							<HashTab tabs={["Overview", "Confirmations"]}>
								<Overview transactionData={transactionData} />
								{/* <Confirmations transactionData={transactionData} /> */}
								{<Confirmations confirmation={confirmation} />}
							</HashTab>
						) : (
							<Typography color="text.secondary" textTransform="capitalize">
								No Record Found
							</Typography>
						)}
					</Stack>
				</Container>
			</Box>
		</div>
	);
}

export default TransactionPage;
