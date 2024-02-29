import CopyButton from "@/components/global/CopyButton";
import SmartRow from "@/components/global/DataTable/SmartRow";
import RedirectButton from "@/components/global/RedirectButton";
import {
	Avatar,
	Box,
	Chip,
	Divider,
	IconButton,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Status from "@/components/global/DataTable/Status";
import Action from "@/components/global/DataTable/Action";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { NETWORK_ICON_MAP } from "@/constants/constants";
import { sixDigitShortrenString } from "@/components/utils/utils";

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
	// console.log({
	// 	icon: icon,
	// 	status: confirm,
	// 	action: action,
	// 	fromHash: fromHash,
	// 	toHash: toHash,
	// 	executionDate: executionDate,
	// });
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
				alignContent: "center",
				justifyContent: "space-between",
				width: "100%",
			}}
		>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<Stack direction={"row"} gap={2} alignItems={"left"}>
					{/* <Avatar
						alt="icon"
						src={NETWORK_ICON_MAP[icon]}
						sx={{ height: 25, width: 25, bgcolor: "black" }}
					/> */}
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
							{sixDigitShortrenString(fromHash)}
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
						{sixDigitShortrenString(toHash)}
					</Typography>
				</Stack>
			</Box>
			<Box sx={{ display: "flex" }}>
				<Box>
					<Typography
						fontFamily="'DM Mono'"
						color="white"
						textTransform="capitalize"
						sx={{ py: 1 }}
						variant="body2"
					>
						{month + " " + day + ", " + year}
					</Typography>
					<Typography
						fontFamily="'DM Mono'"
						color="white"
						textTransform="capitalize"
						sx={{ py: 1 }}
						variant="body2"
					>
						{formattedTime}
					</Typography>
				</Box>
				<IconButton>
					<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
				</IconButton>
				<RedirectButton
					redirectLink={`/transaction/${safeTxHash}&network=${network}`}
				/>
			</Box>
		</Box>
	);
};

export default TransactionNew;
