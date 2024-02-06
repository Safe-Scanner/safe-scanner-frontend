import React, { Fragment, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import HashTab from "@/components/global/HashTab";
import Grid from "@mui/material/Grid";
import { IconButton } from "@mui/material";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HistoryIcon from "@mui/icons-material/History";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
	shortenString,
	sixDigitShortrenString,
} from "@/components/utils/utils";
import CopyButton from "@/components/global/CopyButton";
import { Alert, Skeleton, Snackbar } from "@mui/material";
import { NETWORK_ICON_MAP } from "@/constants/constants";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import RedirectButton from "@/components/global/RedirectButton";

function UserOp(props: any) {
	const [balanceData, setBalanceData] = useState([] as any);
	const [nft, setNft] = useState([] as any);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<any>();
	const [network, setNetwork] = useState();
	const { userOp } = props;

	useEffect(() => {
		console.log("User opS in user Page is ", userOp);
		if (userOp !== undefined) {
			const net: any = Object.keys(userOp)[0];
			setNetwork(net);
			setData(userOp[net].accountDetail);
		}
	}, [userOp]);
	console.log(data);

	return (
		<>
			{/* {userOp !== undefined && Object.keys(data).length > 0 ? ( */}
			{userOp !== undefined ? (
				<Paper sx={{ p: 3 }}>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						marginBottom={1}
					>
						<Typography fontWeight="medium" flexGrow={1}>
							User Operations
						</Typography>
						<IconButton>
							<MoreHorizIcon color="primary" />
						</IconButton>
					</Stack>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/pound.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Transaction Hash
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.transactionHash} setOpen={setOpen} />
								<RedirectButton
									redirectLink={
										// "https://app.safe.global/apps?safe=matic:" + data?.safe
										`/transaction/${data?.transactionHash}&network=${network}`
									}
								/>
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{sixDigitShortrenString(data?.transactionHash)}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/pound.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									UserOp Hash
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.userOpHash} setOpen={setOpen} />
								<RedirectButton
									redirectLink={
										// "https://app.safe.global/apps?safe=matic:" + data?.safe
										`/transaction/${data?.userOpHash}&network=${network}`
									}
								/>
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{sixDigitShortrenString(data?.userOpHash)}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/cube.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Block Number
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.blockNumber} setOpen={setOpen} />
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{data?.blockNumber}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/clock.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Block Time
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.blockTime} setOpen={setOpen} />
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{data?.blockTime}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image
									src="/images/building.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Paymaster
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.paymaster} setOpen={setOpen} />
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{data?.paymaster}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/currency-eth.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Count
								</Typography>
							),
						}}
						action={
							<>
								<CopyButton text={data?.count} setOpen={setOpen} />
							</>
						}
					>
						<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
							{data?.userOpsCount}
							{/* {data?.transactionHash} */}
						</Typography>
					</SmartRow>
				</Paper>
			) : (
				<Paper sx={{ p: 3 }}>
					<Stack
						direction="row"
						spacing={2}
						alignItems="center"
						marginBottom={1}
					>
						<Typography fontWeight="medium" flexGrow={1}>
							User Operations
						</Typography>
						<IconButton>
							<MoreHorizIcon color="primary" />
						</IconButton>
					</Stack>

					<Skeleton variant="rounded" height={700} />
				</Paper>
			)}

			<div style={{ position: "fixed", bottom: 0, left: 0 }}>
				{/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
					<Alert
						onClose={handleClose}
						severity="success"
						sx={{
							width: "30%",
							position: "fixed",
							bottom: "10%",
							left: "0",
						}}
					>
						Content Copied to clipboard
					</Alert>
				</Snackbar> */}
			</div>
		</>
	);
}

export default UserOp;
