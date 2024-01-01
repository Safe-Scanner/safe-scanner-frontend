import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";

function Transactions() {
	const transaction: any[] = useSelector(
		(state: any) => state.transaction.transaction
	);
	const [transactions, setTransaction] = useState([] as any);
	const [networkIcon, setNetworkIcon] = useState("" as any);
	useEffect(() => {
		console.log("entered", transaction);
		let keys = [] as any[];
		if (transaction != null && transaction.length > 0) {
			transaction.forEach((el: any) => {
				let temp = Object.keys(el);
				keys.push(...temp);
				setNetworkIcon(
					NETWORK_LIST.find((e: any) => {
            console.log(e);
						return keys[0] === e.name;
					})
				);
				console.log("Results are", transaction[0][keys[0]].results);
				setTransaction(transaction[0][keys[0]].results);
			});
		}
	}, [transaction]);
	return (
		<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
			{transactions.length > 0 &&
				transactions.map((el: any, index: any) => (
					<Grid key={index} item xs={12} md={12} lg={12}>
						<Transaction
							value="0x242a…6b96"
							message="Not supported"
							icon={networkIcon?.iconPath}
							statusValue="+21.504 MATIC"
							statusSubValue="+$21.03"
							variant="complete"
							date="1 day ago"
						/>
					</Grid>
				))}
		</Grid>
	);
}

export default Transactions;
