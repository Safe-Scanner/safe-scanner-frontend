import { IconButton } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import React from "react";

type Props = {
    text: string;
};

const CopyButton = ({ text }: Props) => {
    return (
        <IconButton>
            <ContentCopyIcon
                color="primary"
                sx={{ fontSize: 20 }}
                onClick={() => {
                    navigator.clipboard.writeText(text);
                }}
            />
        </IconButton>
    );
};

export default CopyButton;
