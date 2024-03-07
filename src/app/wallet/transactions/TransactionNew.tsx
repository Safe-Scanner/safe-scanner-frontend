import CopyButton from "@/components/global/CopyButton";
import RedirectButton from "@/components/global/RedirectButton";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Status from "@/components/global/DataTable/Status";
import Action from "@/components/global/DataTable/Action";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NETWORK_ICON_MAP } from "@/constants/constants";
import { sixDigitShortrenString } from "@/components/utils/utils";
import Link from "next/link";

type TransactionProps = {
	icon: any;
	confirm: any;
	action: any;
	fromHash: string;
	toHash: string;
	execution: any;
	executionDate: any;
	safeTxHash: any;
};

const determineAndSetStatus = (transactionData: any, func: any): void => {
	let status = "Signature Pending";
	if (transactionData.isExecuted) {
		status = "Successful";
	} else {
		status = "Signature Pending";
	}
	if (transactionData.isSuccessful) {
		status = "Successful";
	} else {
		status = "Failed";
	}
	func(status);
};

const TransactionNew = ({
	icon,
	confirm,
	execution,
	action,
	fromHash,
	toHash,
	executionDate,
	safeTxHash,
}: TransactionProps) => {
	const [data, setData] = useState({} as any);
	const [open, setOpen] = useState(false);
	const [network, setNetwork] = useState("matic");
	const [status, setStatus] = useState<any>();
	const [date, setDate] = useState(new Date(executionDate));

	// Get the hours and minutes components
	var hours = date.getHours();
	var minutes = date.getMinutes();

	// Convert hours to 12-hour format and determine AM or PM
	var ampm = hours >= 12 ? "PM" : "AM";
	hours = hours % 12;
	hours = hours ? hours : 12; // Handle midnight (0 hours)

	// Format the time as "9:02 PM"
	var formattedTime =
		hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;

	let month = date.toLocaleString("default", { month: "short" });
	let day = date.getDate();
	let year = date.getFullYear();

	useEffect(() => {
		determineAndSetStatus(
			{ isExecuted: execution, isSuccessful: confirm },
			setStatus
		);
	}, [confirm]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				paddingX: 2,
				py: 1,
				alignContent: "center",
				justifyContent: "space-between",
				width: "100%",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Stack direction={"row"} gap={2} alignItems={"left"}>
					<Box
						sx={{
							height: 30,
							width: 30,
							bgcolor: "#000",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Image
							src={NETWORK_ICON_MAP[icon]}
							alt="icon"
							height={18}
							width={18}
						/>
					</Box>
					<Status status={status} />
					<Action action={action} />
					<Stack>
						<Typography
							sx={{ py: 1 }}
							fontFamily="'DM Mono'"
							color="white"
							textTransform="capitalize"
							variant="body2"
						>
							<Link
								href={`/wallet?safe=${fromHash}&network=${network}`}
								target="_black"
							>
								{sixDigitShortrenString(fromHash)}
							</Link>
						</Typography>
					</Stack>
					<Typography
						fontFamily="'DM Mono'"
						color="white"
						textTransform="capitalize"
						variant="body2"
						sx={{ py: 1 }}
					>
						{action}
					</Typography>

					<Box
						sx={{
							height: 30,
							width: 30,
							bgcolor: "#000",
							borderRadius: "50%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<ArrowForwardIcon
							sx={{ fontSize: 16, color: "#18ff75", fontWeight: "700" }}
						/>
					</Box>
					<Typography
						fontFamily="'DM Mono'"
						color="primary"
						textTransform="capitalize"
						sx={{ py: 1 }}
						variant="body2"
					>
						<Link
							href={`/wallet?safe=${toHash}&network=${network}`}
							target="_blank"
						>
							{sixDigitShortrenString(toHash)}
						</Link>
					</Typography>
				</Stack>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					gap: 2,
				}}
			>
				<Box sx={{ padding: 0 }}>
					<Typography
						fontFamily="'DM Sans'"
						color="white"
						textTransform="capitalize"
						sx={{ p: 0 }}
						variant="body2"
					>
						{month + " " + day + ", " + year}
					</Typography>
					<Typography
						fontFamily="'DM Sans'"
						color="white"
						textTransform="capitalize"
						sx={{ py: 0, textAlign: "end" }}
						variant="body2"
					>
						{formattedTime}
					</Typography>
				</Box>
				<IconButton sx={{ height: 30, width: 30, borderRadius: "50%" }}>
					<CopyButton text={safeTxHash} setOpen={setOpen} />
				</IconButton>
				<IconButton sx={{ height: 30, width: 30, borderRadius: "50%" }}>
					<RedirectButton
						redirectLink={`/transaction/${safeTxHash}&network=${network}`}
					/>
				</IconButton>
			</Box>
		</Box>
	);
};

export default TransactionNew;
