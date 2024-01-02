import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import { NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";
import { shortenString } from "@/components/utils/utils";

function Transactions() {
	const transaction: any[] = useSelector(
		(state: any) => state.transaction.transaction
	);
	const [transactions, setTransaction] = useState([] as any);
	const [networkIcon, setNetworkIcon] = useState("" as any);
	useEffect(() => {
		let keys = [] as any[];
		if (transaction != null && transaction.length > 0) {
			transaction.forEach((el: any) => {
				let temp = Object.keys(el);
				keys.push(...temp);
				setNetworkIcon(
					NETWORK_LIST.find((e: any) => {
						return keys[0] === e.name;
					})
				);
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
							value={shortenString(el?.safe)}
							message="Not supported"
							icon={networkIcon?.iconPath}
							statusValue={el?.value}
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
