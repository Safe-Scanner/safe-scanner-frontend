import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_ICON_MAP, NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";
import { getFee, shortenString } from "@/components/utils/utils";
import { useSearchParams } from "next/navigation";
import {
	Box,
	Divider,
	FormControl,
	IconButton,
	InputLabel,
	MenuItem,
	Paper,
	Select,
	SelectChangeEvent,
	Skeleton,
	Typography,
} from "@mui/material";
import { parseEther, serializeTransaction } from "viem";
import { signTransaction } from "viem/accounts";
import ModuleTransaction from "./ModuleTransaction";
import TransactionNew from "./TransactionNew";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
	const [skip, setSkip] = useState("10");
	const [start, setStart] = useState("1");
	const [end, setEnd] = useState(skip);
	const [paginatedTransaction, setPaginatedTransaction] = useState<any>([]);
	const handleChange = (event: SelectChangeEvent) => {
		setSkip(event.target.value as string);
	};

	useEffect(() => {
		setNetwork(searchParams.get("network"));
		let keys = [] as any[];
		if (transaction != null) {
			let network: any = Object.keys(transaction);
			const temp = transaction[network[0]].results;
			setTransaction([]);
			temp.forEach((el: any) => {
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
						safe: el?.txType === "ETHEREUM_TRANSACTION" ? el?.from : el?.safe,
						action: el?.dataDecoded?.method,
						success: el?.isSuccessful,
						execution: el?.isExecuted,
					},
				]);
			});
		}
	}, [transaction]);

	useEffect(() => {
		let to;
		let from;
		setPaginatedTransaction([]);
		if (transactions.length > 0) {
			if (+skip > transactions?.length) {
				setEnd((+start + +skip - 1).toString());
				to = (+start + +skip - 1).toString();
			} else {
				setEnd(skip);
				to = skip;
			}

			if (+skip > transactions?.length) {
				for (let i = +start - 1; i < transactions?.length; i++) {
					if (transactions[i] != undefined) {
						setPaginatedTransaction((prev: any) => [...prev, transactions[i]]);
					}
				}
			} else {
				for (let i = +start - 1; i < +to; i++) {
					if (transactions[i] != undefined) {
						setPaginatedTransaction((prev: any) => [...prev, transactions[i]]);
					}
				}
			}
		}
	}, [transactions, skip]);

	const signTransactionData = async (transactionData: any) => {
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

	const handlePrevious = () => {
		let from;
		let to;
		if (+start - +skip > 1) {
			setStart((prev) => (+prev - +skip).toString());
			from = (+start - +skip).toString();
		} else {
			setStart("1");
			from = "1";
		}

		if (+end - +skip <= +skip) {
			setEnd((prev) => (+prev - +skip).toString());
			to = (+end - +skip).toString();
		} else {
			setEnd(skip);
			to = skip;
		}
		setPaginatedTransaction([]);
		console.log({ start: start, end: end });
		for (let i = +from; i <= +to; i++) {
			console.log(i);
			transactions[i];
			setPaginatedTransaction((prev: any) => [...prev, transactions[i]]);
		}
	};
	const handleNext = () => {
		let from;
		let to;
		setStart((prev) => (+prev + +skip).toString());

		// if (+end + +skip > transactions?.length) {
		// 	setEnd;
		// }
		setEnd((prev) => (+prev + +skip).toString());
		console.log({ start: start, end: end });

		setPaginatedTransaction([]);
		for (let i = +start + 1; i < +skip; i++) {
			if (transactions[i] != undefined) {
				setPaginatedTransaction((prev: any) => [...prev, transactions[i]]);
			}
		}
	};

	console.log("paginated transcations are", paginatedTransaction);
	return (
		<>
			{transactions?.length > 0 ? (
				<Paper>
					<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
						{/* <TransactionNew /> */}
						{paginatedTransaction.length > 0 &&
							paginatedTransaction.map((el: any, index: any) => (
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
									<Divider variant="middle" />
								</Grid>
							))}
						<Box
							sx={{
								minWidth: 70,
								display: "flex",
								justifyContent: "flex-end",
								alignItems: "center",
								width: "100%",
								gap: 3,
								padding: 2,
							}}
						>
							<Box sx={{ width: "7%" }}>
								<FormControl fullWidth>
									<InputLabel id="demo-simple-select-label">Skip</InputLabel>
									<Select
										labelId="demo-simple-select-label"
										id="demo-simple-select"
										value={skip}
										label="Age"
										onChange={handleChange}
									>
										<MenuItem value={10}>10</MenuItem>
										<MenuItem value={20}>20</MenuItem>
										<MenuItem value={30}>30</MenuItem>
									</Select>
								</FormControl>
							</Box>
							<Typography>
								{" "}
								{start} - {end} of {transactions?.length}
							</Typography>
							<IconButton onClick={handlePrevious} disabled={start === "1"}>
								<KeyboardArrowLeftIcon />
							</IconButton>
							<IconButton
								onClick={handleNext}
								disabled={+end >= transactions?.length}
							>
								<KeyboardArrowRightIcon />
							</IconButton>
						</Box>
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
