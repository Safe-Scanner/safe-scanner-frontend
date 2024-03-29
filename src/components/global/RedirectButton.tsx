"use client";
import { IconButton } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import React from "react";

type Props = {
	redirectLink: string;
};

const RedirectButton = ({ redirectLink }: Props) => {
	const handleRedirect = () => {
		window.open(`${redirectLink}`, "_blank");
	};
	return (
		<IconButton>
			<OpenInNewIcon
				onClick={handleRedirect}
				color="primary"
				sx={{ fontSize: 20 }}
				href={redirectLink}
				target="_blank"
			/>
		</IconButton>
	);
};

export default RedirectButton;
