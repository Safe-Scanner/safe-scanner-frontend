import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_ICON_MAP, NETWORK_LIST } from "@/constants/constants";
import { useDispatch } from "react-redux";
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
import { paginationTransactionApi } from "@/apis/addresspage";
import { storetransaction } from "../../../store/feature/transactionSlice";

type Width = {
	width: number;
};

function Transactions() {
	const searchParams = useSearchParams();
	const dispatch = useDispatch();
	// const transaction: any[] = useSelector(
	// 	(state: any) => state.transaction.transaction
	// );
	const [transaction, setTransaction] = useState<any>();
	const [transactions, setTransactions] = useState([] as any);
	const [networkIcon, setNetworkIcon] = useState("" as any);
	const [network, setNetwork] = useState("" as any);
	const [safe, setSafe] = useState(searchParams.get("safe") || "");
	const [width, setWidth] = useState(0);
	const [skip, setSkip] = useState("10");
	const [start, setStart] = useState("1");
	const [end, setEnd] = useState(skip);
	const [paginatedTransaction, setPaginatedTransaction] = useState<any>([]);
	const [newResponse, setNewResponse] = useState<any>();
	const handleChange = (event: SelectChangeEvent) => {
		console.log("skip updated");
		setSkip(event.target.value as string);
	};

	const handleTransactionApiCall = async () => {
		setTransaction(null);
		setTransactions([]);
		const response = await paginationTransactionApi(
			safe,
			network,
			skip,
			start,
			setNewResponse
		);
		dispatch(storetransaction(response));
	};

	useEffect(() => {
		handleTransactionApiCall();
	}, []);

	useEffect(() => {
		// console.log(newResponse);
		if (newResponse && newResponse != undefined) {
			// console.log("setting");
			setTransaction(newResponse);
		}
	}, [newResponse]);

	useEffect(() => {
		setNetwork(searchParams.get("network"));
		let keys = [] as any[];
		if (transaction && transaction != undefined) {
			let network: any = Object.keys(transaction);
			const temp = transaction[network[0]].results;
			setTransactions([]);
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

				setTransactions((prev: any) => [
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
						action: el?.dataDecoded?.method || "transfer",
						success: el?.isSuccessful || true,
						execution: el?.isExecuted || true,
					},
				]);
			});
		}
	}, [transaction]);

	const signTransactionData = async (transactionData: any) => {
		const txData: any = {
			to: transactionData.to, // Recipient address
			value: parseEther(transactionData.value.split(" ")[0]), // Amount
		};
	};

	useEffect(() => {
		if (width === 0) {
			setWidth(screen.width);
		}
	}, []);

	const handlePrevious = () => {
		if (+start - +skip < 1) {
			setStart("1");
			setEnd(skip);
		}
		console.log("start is ", +start - +skip);
		setStart((prev) => (+prev - +skip).toString());
		setEnd((prev) => (+prev - +skip).toString());
	};
	const handleNext = () => {
		setStart((prev) => (+prev + +skip).toString());
		setEnd((prev) => (+prev + +skip).toString());
	};

	useEffect(() => {
		handleTransactionApiCall();
	}, [start]);

	useEffect(() => {
		if (newResponse && newResponse != undefined) {
			if (newResponse[network]?.count < +skip) {
				setStart("1");
				setEnd(newResponse[network]?.count);
			} else {
				console.log("updateing");
				setEnd((prev) => (+start + +skip - 1).toString());
			}
		}

		handleTransactionApiCall();
	}, [skip]);
	return (
		<>
			{transactions?.length > 0 ? (
				<Paper>
					<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
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
								{start} - {end} of {newResponse[network]?.count}
							</Typography>
							<IconButton onClick={handlePrevious} disabled={start <= "1"}>
								<KeyboardArrowLeftIcon />
							</IconButton>
							<IconButton
								onClick={handleNext}
								disabled={+end >= newResponse[network]?.count}
							>
								<KeyboardArrowRightIcon />
							</IconButton>
						</Box>
					</Grid>
				</Paper>
			) : (
				<Paper sx={{ p: 3 }}>
					<Skeleton variant="rounded" height={600} />
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
							{start} - {end} of{" "}
							{newResponse && newResponse != undefined
								? newResponse[network]?.count
								: ""}
						</Typography>
						<IconButton onClick={handlePrevious} disabled={true}>
							<KeyboardArrowLeftIcon />
						</IconButton>
						<IconButton onClick={handleNext} disabled={true}>
							<KeyboardArrowRightIcon />
						</IconButton>
					</Box>
				</Paper>
			)}
		</>
	);
}

export default Transactions;
