import { Chip } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import SubdirectoryArrowLeftIcon from "@mui/icons-material/SubdirectoryArrowLeft";
import SubdirectoryArrowRightIcon from "@mui/icons-material/SubdirectoryArrowRight";
import AddIcon from "@mui/icons-material/Add";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import VectorBridge from "../../../../public/images/VectorBridge.svg";
export type ActionT =
	| "transfer"
	| "swap"
	| "mint"
	| "bridge"
	| "addLiquidity"
	| "removeLiquidity"
	| "rebalance";

interface ActionProps {
	action: ActionT;
}

const Action = (props: ActionProps) => {
	const { action } = props;

	let sattings: {
		Icon: any;
		text: string;
		color: string;
	} = {
		Icon: CheckCircleIcon,
		text: action?.toUpperCase(),
		color: "#fff",
	};

	switch (action) {
		case "transfer":
			sattings = {
				Icon: ArrowOutwardIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "swap":
			sattings = {
				Icon: SwapHorizIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "mint":
			sattings = {
				Icon: AddIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "bridge":
			sattings = {
				Icon: VectorBridge,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "addLiquidity":
			sattings = {
				Icon: SubdirectoryArrowLeftIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "removeLiquidity":
			sattings = {
				Icon: SubdirectoryArrowRightIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
		case "rebalance":
			sattings = {
				Icon: CallReceivedIcon,
				text: action?.toUpperCase(),
				color: "#fff",
			};
			break;
	}

	return (
		<Chip
			icon={<sattings.Icon sx={{ fontSize: 16, fill: sattings.color }} />}
			label={sattings.text}
			sx={{
				borderRadius: 1,
				bgcolor: "background.default",
				color: sattings.color,
				marginLeft: 3,
			}}
		/>
	);
};

export default Action;
