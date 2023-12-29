/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Chip from "@mui/material/Chip";
import { IconButton } from "@mui/material";
import List from "@mui/material/List";
import CloseIcon from "@mui/icons-material/Close";
import DataGroup from "./DataGroup";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import { searchBar } from "@/apis/homepage";
import { NETWORK_LIST } from "@/constants/constants";

// const searchData = [
// 	{
// 		id: 1,
// 		name: "Ethereum",
// 		icon: "/images/Group 614.svg",
// 		values: [
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 		],
// 	},
// 	{
// 		id: 2,
// 		name: "Polygon",
// 		icon: "/images/Group 63.svg",
// 		values: [
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 		],
// 	},
// 	{
// 		id: 3,
// 		name: "Arbitrum",
// 		icon: "/images/Group.svg",
// 		values: [
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 			{
// 				avatar: "/images/image 89.svg",
// 				name: "WalletName",
// 				value: "matic:0x27ce...857e",
// 			},
// 		],
// 	},
// ];

// interface SearchbarProps {
// 	status?: boolean;
// }

// function Searchbar(props: SearchbarProps) {
function Searchbar(props: any) {
	// function Searchbar(setSearchString: any) {
	const { status } = props;
	const [search, setSearch] = useState("");
	const [searchData, setSearchData] = useState([] as any);
	const [rawSearchData, setRawSearchData] = useState({} as any);

	const [value, setValue] = React.useState("");
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		setValue("");
	};

	const getMenuWidth = () => {
		// Get the width of the anchorEl
		if (anchorEl) {
			return anchorEl.clientWidth;
		}
		return null;
	};

	const open = Boolean(anchorEl) && value !== "";

	useEffect(() => {
		setTimeout(() => {
			searchBar(value, setRawSearchData);
		}, 2000);
	}, [value]);

	useEffect(() => {
		if (
			Object.keys(rawSearchData).length > 0 &&
			Object.keys(rawSearchData)[0] != "statusCode"
		) {
			setSearchData([]);
			const keys = Object.keys(rawSearchData);
			keys.forEach((el: string, index: any) => {
				let arr = [] as any;
				let name = el;
				let id = index;
				let iconObject = NETWORK_LIST.find(
					(icon: any) => icon.name.toLowerCase() === name
				);
				let icon = iconObject?.iconPath;
				rawSearchData[el].forEach((item: any) => {
					arr.push(item);
					arr.forEach((e: any) => {
						setSearchData((prev: any[]) => [
							...prev,
							{
								id: id,
								name: name,
								icon: icon,
								values: [{ avatar: icon, name: name, value: `matic:${e}` }],
							},
						]);
					});
				});
			});
		}
	}, [rawSearchData]);

	return (
		<Box maxWidth={950} marginX="auto" sx={{ position: "relative", zIndex: 1 }}>
			{/* <Box sx={{position: "absolute", top: 0, bottom: 0, right: 0, left: 0}} /> */}
			<Stack spacing={1}>
				<TextField
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						// setSearchString(e.target.value);
						// setSearch(e.target.value);
					}}
					onClick={handleClick}
					sx={{
						"& fieldset": {
							borderWidth: 2,
							borderColor: "primary.light",
						},
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
						endAdornment: open ? (
							<InputAdornment position="end">
								<IconButton onClick={handleClose}>
									<CloseIcon />
								</IconButton>
							</InputAdornment>
						) : null,
						sx: {
							pl: 2,
							"& input::placeholder": {
								color: "text.disabled",
								opacity: 1,
							},
						},
					}}
					fullWidth
					placeholder="Search for addresses & hashes..."
				/>
				{status && (
					<Stack
						direction={{ xs: "column", md: "row" }}
						justifyContent="space-between"
						alignItems="center"
					>
						<Stack direction="row" alignItems="center" spacing={0.5}>
							<Typography color="text.disabled">
								Scanner Network Status
							</Typography>
							<Chip
								sx={{ border: 0 }}
								icon={
									<img
										src="/images/checkbox-marked-circle-outline.svg"
										alt=""
									/>
								}
								variant="outlined"
								label="Available"
								color="primary"
							/>
						</Stack>
						<Stack direction="row" alignItems="center" spacing={0.5}>
							<Typography color="text.disabled">
								Total Safe Transactions
							</Typography>
							<Chip
								sx={{ border: 0 }}
								icon={<img src="/images/safe-transactions.svg" alt="" />}
								variant="outlined"
								label="33 013 011"
								color="primary"
							/>
						</Stack>
					</Stack>
				)}
			</Stack>

			<Popper
				open={open}
				anchorEl={anchorEl}
				transition
				sx={{ width: getMenuWidth(), bgcolor: "background.default" }}
			>
				{({ TransitionProps }) => (
					<Fade {...TransitionProps} timeout={350}>
						<Box sx={{ p: 2 }}>
							<List component="div" disablePadding>
								{searchData.map(({ icon, id, name, values }: any) => (
									<DataGroup icon={icon} name={name} values={values} key={id} />
								))}
							</List>
						</Box>
					</Fade>
				)}
			</Popper>
		</Box>
	);
}

export default Searchbar;
