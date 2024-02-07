import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import UserOps from "./UserOps";
import { NETWORK_ICON_MAP, NETWORK_LIST } from "@/constants/constants";
import { useSelector } from "react-redux";
import { getFee, shortenString } from "@/components/utils/utils";
import { useSearchParams } from "next/navigation";
import { Paper, Skeleton } from "@mui/material";

type Width = {
	width: number;
};

interface UserOpProps {
	icon: string;
	userOpHash: string;
	network: string;
	fee: any;
}

function UserOp() {
	const searchParams = useSearchParams();
	const userOp: any[] = useSelector((state: any) => state.userOp.userOp);
	const [userOps, setUserOps] = useState<UserOpProps[]>([]);
	const [networkIcon, setNetworkIcon] = useState("" as any);
	const [network, setNetwork] = useState("" as any);
	const [width, setWidth] = useState(0);
	const [temp, setTemp] = useState([] as any);
	useEffect(() => {
		let net = searchParams.get("network");
		setNetwork(net);
	}, []);
	useEffect(() => {
		if (userOp && userOp !== undefined) {
			console.log(userOp[network]?.accountDetail?.userOps);
			setTemp(userOp[network]?.accountDetail?.userOps);
		}
	}, [userOp]);

	console.log("network is", network);
	console.log("userOps are", userOps);
	// useEffect(() => {
	// 	setNetwork(searchParams.get("network"));
	// 	let keys = [] as any[];
	// 	if (transaction != null) {
	// 		let network: any = Object.keys(transaction);
	// 		const temp = transaction[network[0]].results;
	// 		setTransaction([]);
	// 		temp.forEach((el: any) => {
	// 			let safeHash = "";
	// 			if (width < 900) {
	// 				safeHash = shortenString(el?.safeTxHash);
	// 			} else {
	// 				safeHash = el?.safeTxHash;
	// 			}
	// 			let value = getFee(
	// 				el?.value ? el.value : 0,
	// 				network[0] ? network[0] : "mainnet"
	// 			);
	// 			setTransaction((prev: any) => [
	// 				...prev,
	// 				{
	// 					safeTxHash: el?.safeTxHash,
	// 					icon: NETWORK_ICON_MAP[network[0]],
	// 					value: value?.value.toString() + " " + value?.gas.children,
	// 					date: el?.executionDate,
	// 					transactionHash: el?.txHash,
	// 					method: el?.dataDecoded?.method,
	// 					txType: el?.txType,
	// 				},
	// 			]);
	// 		});
	// 	}
	// }, [transaction]);

	useEffect(() => {
		if (temp && temp.length > 0) {
			temp.forEach((el: any) => {
				let fee = getFee(el?.actualGasCost, network);
				setUserOps((prev: any) => [
					...prev,
					{
						userOpHash: el.userOpHash,
						icon: NETWORK_ICON_MAP[network],
						fee: fee,
					},
				]);
			});
		}
	}, [temp]);

	console.log(" User Ops are ", userOps);

	useEffect(() => {
		if (width === 0) {
			setWidth(screen.width);
		}
	}, []);
	return (
		<Grid container sx={{ marginTop: 2 }} spacing={0.5}>
			{userOps.length > 0 &&
				userOps.map((el: any, index: any) => (
					<Grid key={index} item xs={12} md={12} lg={12}>
						<UserOps
							icon={el?.icon}
							network={network}
							fee={el.fee}
							userOpHash={el.userOpHash}
						/>
					</Grid>
				))}
		</Grid>
	);
}

export default UserOp;
