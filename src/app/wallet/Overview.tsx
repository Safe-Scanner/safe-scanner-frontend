"use client";
import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SmartRow from "../../components/global/DataTable/SmartRow";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HistoryIcon from "@mui/icons-material/History";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { shortenString } from "@/components/utils/utils";
import CopyButton from "@/components/global/CopyButton";
import { Skeleton } from "@mui/material";

function Overview({ balance, loading }: any) {
	let data: any = {};
	// const [owner, setOwner] = useState([] as any[]);
	console.log(loading);
	const [owners, setOwners] = useState([] as any[]);

	if (balance != undefined) {
		const keys = Object.keys(balance);
		data = balance[keys[0]];
		// setOwner(balance[keys[0]].owners);
	}

	useEffect(() => {
		setOwners(data.owners);
	}, [data]);

	const walletSortingOptions = [
		"Show highest value",
		"Show lowest value",
		"Show most recent",
		"Show least recent",
		"Show all",
	];

	const [walletSortedby, setWalletSortedby] = React.useState(0);
	const [walletAnchorEl, setWalletAnchorEl] =
		React.useState<null | HTMLElement>(null);
	const isOpenWallet = Boolean(walletAnchorEl);

	const walletSortingHandle = (event: React.MouseEvent<HTMLButtonElement>) => {
		setWalletAnchorEl(event.currentTarget);
	};

	const walletSortingClose = () => {
		setWalletAnchorEl(null);
	};

	const walletSortingSelect = (index: number) => {
		setWalletAnchorEl(null);
		setWalletSortedby(index);
	};

	return (
		<>
			{balance != undefined && Object.keys(data).length > 0 ? (
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

					<SmartRow
						label={{
							icon: (
								<Image
									src="/images/Group 57.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									safe Address
								</Typography>
							),
						}}
						action={
							// <IconButton>
							// 	<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
							// </IconButton>
							<CopyButton text={data?.address} />
						}
					>
						<Stack spacing={2} alignItems="center" direction="row">
							<Image src="/images/Group 58.svg" alt="" width={20} height={20} />
							<Typography fontWeight="medium" noWrap fontFamily="'DM Mono'">
								{/* eth:0x3a12868E33505424aCbdf53F11C8d447D59A8cfc */}
								{data?.address}
							</Typography>
						</Stack>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="images/pound.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Created Transaction
								</Typography>
							),
						}}
						action={
							<>
								<IconButton>
									<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
								</IconButton>
								<IconButton href="/">
									<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
								</IconButton>
							</>
						}
					>
						<Typography
							fontFamily="'DM Mono'"
							color="primary"
							textTransform="capitalize"
						>
							0x62ab...bc7d
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image src="/images/tools.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Fallback handler
								</Typography>
							),
						}}
						action={
							<>
								{/* <IconButton>
							<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton> */}
								<CopyButton text={data?.fallbackHandler} />
								<IconButton href="/">
									<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
								</IconButton>
							</>
						}
					>
						<Typography
							fontFamily="'DM Mono'"
							color="primary"
							textTransform="capitalize"
						>
							{data?.fallbackHandler}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image
									src="/images/file-code.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									master copy
								</Typography>
							),
						}}
						action={
							<>
								{/* <IconButton>
							<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton> */}
								<CopyButton text={data?.masterCopy} />
								<IconButton href="/">
									<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
								</IconButton>
							</>
						}
					>
						<Typography
							fontFamily="'DM Mono'"
							color="primary"
							textTransform="capitalize"
						>
							{data?.masterCopy}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image
									src="images/shield-check.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Guardian
								</Typography>
							),
						}}
						action={
							<>
								{/* <IconButton>
							<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton> */}
								<CopyButton text={data?.guard} />
								<IconButton href="/">
									<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
								</IconButton>
							</>
						}
					>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Image src="/images/Group 58.svg" alt="" width={20} height={20} />
							<Typography fontFamily="'DM Mono'" color="primary">
								eth:0x62ab...bc7d
							</Typography>
						</Stack>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image
									src="images/LabelIconquestion.svg"
									alt=""
									width={30}
									height={30}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Nounce
								</Typography>
							),
							info: "null",
						}}
						action={
							<Button size="small" endIcon={<KeyboardArrowRightIcon />}>
								View Transactions
							</Button>
						}
					>
						<Typography fontWeight="medium">
							{data?.nonce} transactions done
						</Typography>
					</SmartRow>

					<SmartRow
						label={{
							icon: (
								<Image
									src="images/account-key 1.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Total Owners
								</Typography>
							),
							info: "null",
						}}
					>
						<Typography fontWeight="medium" noWrap>
							{data?.owners?.length} owners ({data?.threshold} signatures
							required for confirming transactions)
						</Typography>
					</SmartRow>

					{owners?.length > 0 &&
						owners.map((el: any, index: any) => {
							return (
								<SmartRow
									action={
										<>
											{/* <IconButton>
										<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
									</IconButton> */}
											<CopyButton text={el} />
											<IconButton href="/">
												<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
											</IconButton>
										</>
									}
									key={index}
								>
									<Grid container>
										<Grid item xs={6}>
											<Stack direction="row" alignItems="center" spacing={2}>
												<Image
													src="/images/account-key 1.svg"
													alt=""
													width={20}
													height={20}
												/>
												<Typography
													textTransform="capitalize"
													color="text.secondary"
												>
													Owner {index + 1}
												</Typography>
											</Stack>
										</Grid>
										<Grid item xs={6}>
											<Stack
												justifyContent="flex-end"
												direction="row"
												alignItems="center"
												spacing={2}
											>
												<Image
													src="/images/Group 56.svg"
													alt=""
													width={20}
													height={20}
												/>
												<Typography color="primary" fontFamily="'DM Mono'">
													eth: {shortenString(el)}
												</Typography>
											</Stack>
										</Grid>
									</Grid>
								</SmartRow>
							);
						})}
					{/* <SmartRow
				action={
					<>
						<IconButton>
							<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton>
						<IconButton href="/">
							<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton>
					</>
				}
			>
				<Grid container>
					<Grid item xs={6}>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Image
								src="/images/account-key 1.svg"
								alt=""
								width={20}
								height={20}
							/>
							<Typography textTransform="capitalize" color="text.secondary">
								Owner 2
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack
							justifyContent="flex-end"
							direction="row"
							alignItems="center"
							spacing={2}
						>
							<Image src="/images/Group 56.svg" alt="" width={20} height={20} />
							<Typography color="primary" fontFamily="'DM Mono'">
								eth:
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</SmartRow>
			<SmartRow
				action={
					<>
						<IconButton>
							<ContentCopyIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton>
						<IconButton href="/">
							<OpenInNewIcon color="primary" sx={{ fontSize: 20 }} />
						</IconButton>
					</>
				}
			>
				<Grid container>
					<Grid item xs={6}>
						<Stack direction="row" alignItems="center" spacing={2}>
							<Image
								src="/images/account-key 1.svg"
								alt=""
								width={20}
								height={20}
							/>
							<Typography textTransform="capitalize" color="text.secondary">
								Owner 3
							</Typography>
						</Stack>
					</Grid>
					<Grid item xs={6}>
						<Stack
							justifyContent="flex-end"
							direction="row"
							alignItems="center"
							spacing={2}
						>
							<Image src="/images/Group 56.svg" alt="" width={20} height={20} />
							<Typography color="primary" fontFamily="'DM Mono'">
								eth:
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			</SmartRow> */}

					<SmartRow
						label={{
							icon: (
								<Image src="images/cube.svg" alt="" width={20} height={20} />
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Installed Modules
								</Typography>
							),
							info: "null",
						}}
					>
						<Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
							1
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
								<Typography color="text.secondary" textTransform="capitalize">
									Version
								</Typography>
							),
							info: "null",
						}}
					>
						<Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
							{data?.version}
						</Typography>
					</SmartRow>
					<SmartRow
						label={{
							icon: (
								<Image
									src="images/hand-coin.svg"
									alt=""
									width={20}
									height={20}
								/>
							),
							text: (
								<Typography color="text.secondary" textTransform="capitalize">
									Wallet Value
								</Typography>
							),
							info: "null",
						}}
						action={
							<Box sx={{ position: "absolute" }}>
								<Button
									endIcon={
										<KeyboardArrowDownIcon
											sx={{
												fontSize: 20,
												transform: `rotate(${
													isOpenWallet ? "180deg" : "0deg"
												})`,
												transition: "transform 200ms ease-in-out",
											}}
											color="primary"
										/>
									}
									variant="text"
									onClick={walletSortingHandle}
								>
									<Typography fontWeight="medium" color="primary">
										<Typography component="span" color="common.white">
											Sort -{" "}
										</Typography>
										{walletSortingOptions[walletSortedby]}
									</Typography>
								</Button>
								<Menu
									id="wallet-value-preview"
									anchorEl={walletAnchorEl}
									open={isOpenWallet}
									onClose={walletSortingClose}
									MenuListProps={{
										"aria-labelledby": "wallet value preview",
									}}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "right",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									sx={{ "& .MuiPaper-root": { bgcolor: "background.default" } }}
								>
									{walletSortingOptions.map((option, index) => (
										<MenuItem
											key={option}
											selected={walletSortedby === index}
											onClick={() => walletSortingSelect(index)}
										>
											{option}
										</MenuItem>
									))}
								</Menu>
							</Box>
						}
					>
						<Typography fontFamily="'DM Mono'" fontWeight="medium" noWrap>
							3 500 000 (75 tokens)
						</Typography>
					</SmartRow>

					<SmartRow
						action={
							<>
								<Tooltip title="Coming Soon" arrow>
									<IconButton>
										<HistoryIcon color="primary" sx={{ fontSize: 20 }} />
									</IconButton>
								</Tooltip>
							</>
						}
					>
						<Grid container>
							<Grid item xs={6}>
								<Stack direction="row" alignItems="center" spacing={2}>
									<Box
										sx={{
											aspectRatio: "1/1",
											height: 20,
											display: "grid",
											placeContent: "center",
											bgcolor: "#D7D9DC1A",
											borderRadius: 999,
											paddingTop: 0.25,
											marginRight: 0.25,
										}}
									>
										<Typography component="span" variant="body2">
											1
										</Typography>
									</Box>
									<Typography textTransform="capitalize" color="text.secondary">
										Ethereum, ETH
									</Typography>
								</Stack>
							</Grid>
							<Grid item xs={6}>
								<Stack
									justifyContent="flex-end"
									direction="row"
									alignItems="center"
									spacing={2}
								>
									<Image
										src="/images/Group 59.svg"
										alt=""
										width={20}
										height={20}
									/>
									<Typography fontFamily="'DM Mono'">
										67.332 / $2,450,000.00
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</SmartRow>
					<SmartRow
						action={
							<>
								<Tooltip title="Coming Soon" arrow>
									<IconButton>
										<HistoryIcon color="primary" sx={{ fontSize: 20 }} />
									</IconButton>
								</Tooltip>
							</>
						}
					>
						<Grid container>
							<Grid item xs={6}>
								<Stack direction="row" alignItems="center" spacing={2}>
									<Box
										sx={{
											aspectRatio: "1/1",
											height: 20,
											display: "grid",
											placeContent: "center",
											bgcolor: "#D7D9DC1A",
											borderRadius: 999,
											paddingTop: 0.25,
											marginRight: 0.25,
										}}
									>
										<Typography component="span" variant="body2">
											2
										</Typography>
									</Box>
									<Typography textTransform="capitalize" color="text.secondary">
										Avalanche, AVAX
									</Typography>
								</Stack>
							</Grid>
							<Grid item xs={6}>
								<Stack
									justifyContent="flex-end"
									direction="row"
									alignItems="center"
									spacing={2}
								>
									<Image
										src="/images/Group 60.svg"
										alt=""
										width={20}
										height={20}
									/>
									<Typography fontFamily="'DM Mono'">
										67.332 / $2,450,000.00
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</SmartRow>

					<SmartRow
						action={
							<>
								<Tooltip title="Coming Soon" arrow>
									<IconButton>
										<HistoryIcon color="primary" sx={{ fontSize: 20 }} />
									</IconButton>
								</Tooltip>
							</>
						}
					>
						<Grid container>
							<Grid item xs={6}>
								<Stack direction="row" alignItems="center" spacing={2}>
									<Box
										sx={{
											aspectRatio: "1/1",
											height: 20,
											display: "grid",
											placeContent: "center",
											bgcolor: "#D7D9DC1A",
											borderRadius: 999,
											paddingTop: 0.25,
											marginRight: 0.25,
										}}
									>
										<Typography component="span" variant="body2">
											3
										</Typography>
									</Box>
									<Typography textTransform="capitalize" color="text.secondary">
										EtheFantom, FTM
									</Typography>
								</Stack>
							</Grid>
							<Grid item xs={6}>
								<Stack
									justifyContent="flex-end"
									direction="row"
									alignItems="center"
									spacing={2}
								>
									<Image
										src="/images/Group 61.svg"
										alt=""
										width={20}
										height={20}
									/>
									<Typography fontFamily="'DM Mono'">
										67.332 / $2,450,000.00
									</Typography>
								</Stack>
							</Grid>
						</Grid>
					</SmartRow>
					<SmartRow isLastRow>
						<Button size="small" endIcon={<KeyboardArrowRightIcon />}>
							View All 75 Tokens
						</Button>
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
							Overview
						</Typography>
						<IconButton>
							<MoreHorizIcon color="primary" />
						</IconButton>
					</Stack>

					<Skeleton variant="rounded" />
				</Paper>
			)}
		</>
	);
}

export default Overview;
