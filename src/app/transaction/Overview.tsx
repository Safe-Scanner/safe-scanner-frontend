import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SubdirectoryArrowRightRoundedIcon from "@mui/icons-material/SubdirectoryArrowRightRounded";
import Status, { StatusT } from "../../components/global/DataTable/Status";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Box from "@mui/material/Box";
import { CircularProgress, Skeleton } from "@mui/material";
import { NETWORK_SCANNER_MAP } from "@/constants/constants";
import CopyButton from "@/components/global/CopyButton";
import RedirectButton from "@/components/global/RedirectButton";
import { shortenString } from "@/components/utils/utils";

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

function Overview({ transactionData }: any) {
	const [open, setOpen] = useState(false);
	const [network, setNetwork] = React.useState("");
	const [status, setStatus] = React.useState<StatusT>("Signature Pending");
	const [data, setData] = useState([] as any);

	useEffect(() => {
		if (transactionData != undefined) {
			let net = Object.keys(transactionData)[0];
			setNetwork(net);
			let status = "";
			determineAndSetStatus(transactionData[net], setStatus);
			setData(transactionData[net]);
		}
	}, [transactionData]);

	return (
		<>
			{transactionData != undefined ? (
				<Paper sx={{ p: 3 }}>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						marginBottom={1}
					>
						<Typography fontWeight="medium" flexGrow={1}>
							Overview
						</Typography>
						<IconButton>
							<MoreHorizIcon color="primary" />
						</IconButton>
					</Stack>
					{transactionData != undefined && (
						<>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/pound.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											safe Tx Hash
										</Typography>
									),
								}}
								action={
									<CopyButton text={data?.safeTxHash} setOpen={setOpen} />
								}
							>
								<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
									{data?.safeTxHash}
								</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/pound.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Safe
										</Typography>
									),
								}}
								action={
									<>
										<CopyButton text={data?.safe} setOpen={setOpen} />
										<RedirectButton
											redirectLink={
												// "https://app.safe.global/apps?safe=matic:" + data?.safe
												`/wallet?safe=${data?.to}&network=${network}`
											}
										/>
									</>
								}
							>
								<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
									{data?.safe}
								</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/circle-half-full.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Status
										</Typography>
									),
									info: "demo",
								}}
							>
								<Status status={status} />
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/account-arrow-right.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Created Transaction
										</Typography>
									),
								}}
								action={
									<>
										<CopyButton
											text={data?.transactionHash}
											setOpen={setOpen}
										/>
										<RedirectButton
											redirectLink={
												NETWORK_SCANNER_MAP + "/tx/" + data?.transactionHash
											}
										/>
									</>
								}
							>
								<Stack direction="row" alignItems="center" spacing={2}>
									<ArrowDownwardIcon sx={{ fontSize: 20 }} />
									<Typography color="primary" fontFamily="'DM Mono'">
										{shortenString(data?.transactionHash)}
									</Typography>
								</Stack>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/account-arrow-down.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											To
										</Typography>
									),
								}}
								action={
									<>
										<CopyButton text={data?.to} setOpen={setOpen} />
										<RedirectButton
											// redirectLink={NETWORK_SCANNER_MAP + "/address/" + data?.to}
											redirectLink={`/wallet?safe=${data?.to}&network=${network}`}
										/>
									</>
								}
							>
								<Stack direction="row" alignItems="center" spacing={2}>
									<SubdirectoryArrowRightRoundedIcon sx={{ fontSize: 20 }} />
									<Typography color="primary" fontFamily="'DM Mono'">
										{shortenString(data?.to)}
									</Typography>
								</Stack>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/currency-eth.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Value
										</Typography>
									),
								}}
								action={<CopyButton text={data?.value} setOpen={setOpen} />}
							>
								<Stack direction="row" alignItems="center" spacing={2}>
									<Image
										src="/images/Group 55.svg"
										alt=""
										width={20}
										height={20}
									/>
									<Typography fontWeight="medium">{data?.value}</Typography>
								</Stack>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/LabelIconquestion.svg"
											alt="nounce"
											width={25}
											height={25}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Nounce
										</Typography>
									),
									info: "null",
								}}
							>
								<Typography fontWeight="medium">{data?.nonce}</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/calendar.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Submission Date
										</Typography>
									),
								}}
							>
								<Typography fontWeight="medium">
									{data?.submissionDate ? data?.submissionDate : "-"}
								</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/calendar (1).svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Execution date
										</Typography>
									),
									info: "null",
								}}
							>
								<Typography fontWeight="medium">
									{data?.executionDate ? data?.executionDate : "-"}
								</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/calendar (1).svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Block Number
										</Typography>
									),
									info: "null",
								}}
							>
								<Typography fontWeight="medium">
									{data?.blockNumber ? data?.blockNumber : "-"}
								</Typography>
							</SmartRow>
							<SmartRow
								label={{
									icon: (
										<Image
											src="images/code-array.svg"
											alt=""
											width={20}
											height={20}
										/>
									),
									text: (
										<Typography
											color="text.secondary"
											textTransform="capitalize"
										>
											Data
										</Typography>
									),
									info: "null",
								}}
								action={
									<CopyButton
										text={data?.data ? data?.data : "-"}
										setOpen={setOpen}
									/>
								}
							>
								<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
									{data?.data ? shortenString(data?.data) : "-"}
								</Typography>
							</SmartRow>
						</>
					)}
				</Paper>
			) : (
				<Paper sx={{ p: 3 }}>
					<Skeleton variant="rounded" height={700} />
				</Paper>
			)}
		</>
	);
}

export default Overview;
