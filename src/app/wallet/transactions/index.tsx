import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_ICON_MAP, NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";
import { getFee, shortenString } from "@/components/utils/utils";
import { useSearchParams } from "next/navigation";
import { Paper, Skeleton } from "@mui/material";
import { parseEther, serializeTransaction } from "viem";
import { signTransaction } from "viem/accounts";
import ModuleTransaction from "./ModuleTransaction";
import TransactionNew from "./TransactionNew";

type Width = {
	width: number;
};

function Transactions() {
	const searchParams = useSearchParams();
	const transaction: any[] = useSelector(
		(state: any) => state.transaction.transaction
	);
	const [transactions, setTransaction] = useState([] as any);
	const [networkIcon, setNetworkIcon] = useState("" as any);
	const [network, setNetwork] = useState("" as any);
	const [width, setWidth] = useState(0);
	useEffect(() => {
		setNetwork(searchParams.get("network"));
		let keys = [] as any[];
		if (transaction != null) {
			let network: any = Object.keys(transaction);
			const temp = transaction[network[0]].results;
			setTransaction([]);
			temp.forEach((el: any) => {
				console.log("here", el);
				let safeHash = "";
				if (width < 900) {
					safeHash = shortenString(el?.safeTxHash);
				} else {
					safeHash = el?.safeTxHash;
				}
				let value = getFee(
					el?.value ? el.value : 0,
					network[0] ? network[0] : "mainnet"
				);
				console.log(value);
				setTransaction((prev: any) => [
					...prev,
					{
						safeTxHash:
							el?.txType == "MODULE_TRANSACTION"
								? el?.transactionHash
								: el?.safeTxHash,
						icon: NETWORK_ICON_MAP[network[0]],
						value: value?.value.toString() + " " + value?.gas.children,
						date: el?.executionDate,
						transactionHash: el?.txHash,
						method: el?.dataDecoded?.method,
						txType: el?.txType,
						to: el?.to,
						safe: el?.safe,
						action: el?.dataDecoded?.method,
						success: el?.isSuccessful,
						execution: el?.isExecuted,
					},
				]);
			});
		}
	}, [transaction]);

	const signTransactionData = async (transactionData: any) => {
		console.log("===> signing started", transactionData);
		const txData: any = {
			to: transactionData.to, // Recipient address
			value: parseEther(transactionData.value.split(" ")[0]), // Amount in ether
			//   data: transactionData.data, // Data payload, if any
		};
		// const serializedTransaction = serializeTransaction(txData);

		// // Sign the transaction
		// const signature = await signTransaction(txData);

		// console.log("Signature:", signature);
	};

	useEffect(() => {
		if (width === 0) {
			setWidth(screen.width);
		}
	}, []);

	console.log("Width of the screen is ", width);
	console.log("Tranasction are", transactions);
	return (
		<>
			{transactions?.length > 0 ? (
				<Paper>
					<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
						{/* <TransactionNew /> */}
						{transactions.length > 0 &&
							transactions.map((el: any, index: any) => (
								<Grid key={index} item xs={12} md={12} lg={12}>
									{/* <Transaction
							value={el?.value}
							safeTxHash={el?.safeTxHash}
							txType={el?.txType}
							icon={el?.icon}
							statusSubValue="+$21.03"
							variant="complete"
							date={
								el.date ? new Date(el.date).toLocaleDateString("em-GB") : "-"
							}
							txHash={el?.transactionHash}
							network={network}
							method={el.method}
						/> */}
									<TransactionNew
										confirm={el?.success}
										action={el?.action}
										toHash={el?.to}
										fromHash={el?.safe}
										icon={network}
										execution={el?.execution}
										executionDate={el?.date}
										safeTxHash={el?.safeTxHash}
									/>
								</Grid>
							))}
					</Grid>
				</Paper>
			) : (
				<Paper sx={{ p: 3 }}>
					<Skeleton variant="rounded" height={300} />
				</Paper>
			)}
		</>
	);
}

export default Transactions;
