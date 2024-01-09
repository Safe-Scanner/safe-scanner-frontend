/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Image from "next/image";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { IconButton } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Collapse from "@mui/material/Collapse";
import { useRouter } from "next/navigation";
import { NETWORK_SCANNER_MAP, NETWORK_ICON_MAP } from "@/constants/constants";

interface DataGroupProps {
	name: string;
	icon: string;
	values: {
		avatar: string;
		name: string;
		value: string;
	}[];
}

function DataGroup(props: DataGroupProps) {
	const router = useRouter();
	const { icon, name, values } = props;

	const [open, setOpen] = React.useState(true);
	const toggle = () => setOpen((v) => !v);

	const handleRouting = (value: any, name: any) => {
		const split = value.value.split(":");
		if (split[1].length == 66) {
			router.push(`/transaction?transactionHash=${split[1]}&network=${name}`);
		} else {
			router.push(`/wallet?safe=${split[1]}&network=${name}`);
		}
	};

	return (
		<div>
			<ListItem component="div" disablePadding sx={{ pl: 0.25, pr: 1.25 }}>
				<ListItemIcon sx={{ minWidth: 32 }}>
					<Image
						src={NETWORK_ICON_MAP[name]}
						alt="network"
						width={20}
						height={20}
					/>
				</ListItemIcon>
				<ListItemText primary={name} />
				<IconButton onClick={toggle} color="primary">
					<KeyboardArrowUpIcon
						sx={{
							transform: open ? "rotate(-180deg)" : "rotate(0deg)",
							transition: "transform 0.3s ease-in-out",
						}}
					/>
				</IconButton>
			</ListItem>
			<Collapse in={open}>
				{values.map((value, key) => (
					<ListItem
						key={key}
						component="div"
						disablePadding
						sx={{
							bgcolor: "background.paper",
							borderRadius: 1,
							overflow: "hidden",
							mb: 0.5,
						}}
						onClick={() => handleRouting(value, name)}
					>
						<ListItemButton>
							<ListItemAvatar sx={{ minWidth: 40 }}>
								<Image
									style={{ borderRadius: 6 }}
									width={40}
									height={40}
									src={NETWORK_ICON_MAP[value.name]}
									alt=""
								/>
							</ListItemAvatar>
							<ListItemText
								sx={{ marginLeft: 1.5 }}
								primary={value.name}
								secondary={value.value}
							/>
							<Image
								src={NETWORK_ICON_MAP[value.name]}
								alt=""
								width={24}
								height={24}
							/>
						</ListItemButton>
					</ListItem>
				))}
			</Collapse>
		</div>
	);
}

export default DataGroup;
