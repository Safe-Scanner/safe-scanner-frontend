import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import Image from "next/image";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SmartRow from "../../components/global/DataTable/SmartRow";
import { sixDigitShortrenString } from "@/components/utils/utils";
import CopyButton from "@/components/global/CopyButton";
import { Skeleton } from "@mui/material";
import RedirectButton from "@/components/global/RedirectButton";

function UserOp(props: any) {
	const [balanceData, setBalanceData] = useState([] as any);
	const [nft, setNft] = useState([] as any);
	const [open, setOpen] = useState(false);
	const [data, setData] = useState<any>();
	const [network, setNetwork] = useState();
	const { userOp } = props;

	useEffect(() => {
		if (userOp !== undefined) {
			const net: any = Object.keys(userOp)[0];
			setNetwork(net);
			setData(userOp[net].accountDetail);
		}
	}, [userOp]);

	return (
		<>
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
								<Image
									src="/images/currency-eth.svg"
									alt=""
									width={20}
									height={20}
								/>
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
		</>
	);
}

export default UserOp;
