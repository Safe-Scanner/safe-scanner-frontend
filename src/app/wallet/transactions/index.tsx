import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_ICON_MAP, NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";
import { shortenString } from "@/components/utils/utils";
import { useSearchParams } from "next/navigation";

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
				let safeHash = "";
				if (width < 900) {
					safeHash = shortenString(el?.safeTxHash);
				} else {
					safeHash = el?.safeTxHash;
				}
				setTransaction((prev: any) => [
					...prev,
					{
						safe: safeHash,
						icon: NETWORK_ICON_MAP[network[0]],
						value: el?.value,
						date: el?.submissionDate,
						transactionHash: el?.transactionHash,
						txType: el?.txType,
					},
				]);
			});
		}
	}, [transaction]);

	useEffect(() => {
		if (width === 0) {
			setWidth(screen.width);
		}
	}, []);

	console.log("Width of the screen is ", width);
	return (
		<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
			{transactions.length > 0 &&
				transactions.map((el: any, index: any) => (
					<Grid key={index} item xs={12} md={12} lg={12}>
						<Transaction
							value={el?.safe}
							message={el?.txType}
							icon={el?.icon}
							statusValue={el?.value}
							statusSubValue="+$21.03"
							variant="complete"
							date={new Date(el.date).toLocaleDateString("em-GB")}
							txHash={el?.transactionHash}
							network={network}
						/>
					</Grid>
				))}
		</Grid>
	);
}

export default Transactions;
