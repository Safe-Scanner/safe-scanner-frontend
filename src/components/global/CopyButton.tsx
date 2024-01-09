import { Alert, IconButton, Snackbar } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React, { useState } from "react";

type Props = {
	text: string;
	setOpen: any;
};

const CopyButton = ({ text, setOpen }: Props) => {
	return (
		<IconButton>
			<ContentCopyIcon
				color="primary"
				sx={{ fontSize: 20 }}
				onClick={() => {
					navigator.clipboard.writeText(text).then(
						() => {
							setOpen((prev: any) => !prev);
							/* Resolved - text copied to clipboard successfully */
						},
						() => {
							setOpen((prev: any) => !prev);
							/* Rejected - text failed to copy to the clipboard */
						}
					);
				}}
			/>
		</IconButton>
	);
};

export default CopyButton;
