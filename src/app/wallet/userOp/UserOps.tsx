import React, { useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Image from "next/image";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { Skeleton } from "@mui/material";
import { NETWORK_LIST, NETWORK_MAP } from "@/constants/constants";

interface UserOpProps {
	icon: string;
	userOpHash: string;
	network: string;
	fee: any;
}

const variantIcon = {
	warning: "/images/arrow-top-right-thick.svg",
	success: "/images/arrow-bottom-right-thick.svg",
	complete: "/images/check-bold.svg",
};

function UserOps(props: UserOpProps) {
	const { icon, userOpHash, fee, network } = props;

	const handleRedirect = () => {
		if (userOpHash != undefined) {
			window.open(`/transaction/${userOpHash}&network=${network}`, "_blank");
		} else {
			console.error("Hash not found");
		}
	};
	const [varient, setVarient] = useState<string>("");
	useEffect(() => {
		setVarient(fee.gas.color);
	});

	return (
		<>
			{fee != undefined && userOpHash != undefined ? (
				<Paper sx={{ padding: 2 }}>
					<Stack spacing={2.5} direction="row">
						<Image
							src={icon}
							alt=""
							width={40}
							height={40}
							// style={{ backgroundColor: "black", borderRadius: "50%" }}
						/>
						{/* <Box sx={{ width: 40, height: 40, position: "relative" }}>
							<Avatar
								sx={{
									width: 16,
									height: 16,
									position: "absolute",
									right: -0.5,
									bottom: -0.5,
								}}
								src={variantIcon[varient]}
								alt=""
							/>
						</Box> */}
						<Stack direction="row" alignItems="center" flexGrow={1}>
							<Typography variant="body2" color="text.secondary" flexGrow={1}>
								User Op
							</Typography>
							<Stack direction="row" alignItems="center">
								<Typography color="text.secondary" variant="body2">
									{userOpHash}
								</Typography>
								<IconButton color="primary">
									<OpenInNewIcon
										sx={{ fontSize: 20 }}
										onClick={handleRedirect}
									/>
								</IconButton>
							</Stack>
						</Stack>
					</Stack>
					<Divider variant="inset" sx={{ ml: 7.5, mb: 1.5 }} />
					<Stack direction="row" alignItems="flex-start" sx={{ ml: 7.5 }}>
						<Stack flexGrow={1}>
							<Typography fontWeight="medium">Fee {fee.value}</Typography>
						</Stack>
					</Stack>
				</Paper>
			) : (
				<Paper sx={{ p: 3 }}>
					<Skeleton variant="rounded" height={100} />
				</Paper>
			)}
		</>
	);
}

export default UserOps;
