"use client";
import React, { useEffect, useState, CSSProperties } from "react";
import Box from "@mui/material/Box";
import Searchbar from "@/components/global/Searchbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Overview from "./Overview";
import HashTab from "@/components/global/HashTab";
import Balance from "./Balance";
import Transactions from "./transactions";
import Owners from "./Owners";
import { useSearchParams } from "next/navigation";
import { balanceApi, balancesApi, transactionApi } from "@/apis/addresspage";
import { useDispatch, useSelector } from "react-redux";
import { storebalance } from "../../store/feature/balanceSlice";
import { storebalances } from "../../store/feature/balancesSlice";
import { storetransaction } from "../../store/feature/transactionSlice";
import ClipLoader from "react-spinners/ClipLoader";
// This page will create more tabs whare I can show balance, transaxtion, owners

const override: CSSProperties = {
	display: "block",
	margin: "0 auto",
};
function WalletPage() {
	const dispatch = useDispatch();
	const [balance, setBalance] = useState(undefined);
	const [transcation, setTransaction] = useState(undefined);
	const [balances, setBalances] = useState(undefined);
	const [loading, setLoading] = useState(false);
	const searchParams = useSearchParams();
	const safe: any = searchParams.get("safe");
	const network: any = searchParams.get("network");

	const redux = useSelector((state: any) => state);
	useEffect(() => {
		if (balance === null || balance === undefined) {
			if ((redux.balance = {})) {
				balanceApi(safe, network, setBalance, setLoading);
			}
		}
		if (transcation === null || transcation === undefined) {
			if ((redux.transaction = {})) {
				transactionApi(safe, setTransaction);
			}
		}
		if (balances === null || balances === undefined) {
			if ((redux.balances = {})) {
				balancesApi(safe, network, setBalances);
			}
		}
	}, []);

	dispatch(storebalance(balance));
	dispatch(storetransaction(transcation));
	dispatch(storebalances(balances));

	return (
		<div>
			<Box component="section">
				<Box marginBottom={6} marginTop={3}>
					<Searchbar status />
				</Box>
			</Box>
			<Box component="section" marginBottom={8}>
				<Container>
					<Stack spacing={3}>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Image src="/images/wallet.svg" width={24} height={24} alt="" />
							<Typography variant="h3" component="h1" fontWeight="medium">
								Wallet
							</Typography>
						</Stack>
						{/* <ClipLoader
							color="#fff"
							loading={loading}
							cssOverride={override}
							size={60}
							aria-label="Loading Spinner"
							data-testid="loader"
						/> */}
						<HashTab tabs={["Overview", "Balance", "Transactions", "Owners"]}>
							<Overview balance={balance} balances={balances} />
							<Balance balances={balances} loading={loading} />
							<Transactions />
							<Owners balance={balance} />
						</HashTab>
					</Stack>
				</Container>
			</Box>
		</div>
	);
}

export default WalletPage;
