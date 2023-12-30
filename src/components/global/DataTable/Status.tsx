import React, { ReactNode } from "react";
import Chip from "@mui/material/Chip";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CreateIcon from "@mui/icons-material/Create";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import ErrorIcon from "@mui/icons-material/Error";

export type StatusT = "Signed" | "Available" | "Signature Pending" | "Successful" | "Pending" | "Failed";

interface StatusProps {
    status: StatusT;
}

function Status(props: StatusProps) {
    const { status } = props;

    let sattings: {
        Icon: any;
        text: StatusT;
        color: string;
    } = {
        Icon: CheckCircleIcon,
        text: status,
        color: "#13FF75",
    };

    switch (status) {
        case "Signed" || "Successful":
            sattings = {
                Icon: CheckCircleIcon,
                text: status,
                color: "#13FF75",
            };
            break;
        case "Available":
            sattings = {
                Icon: TaskAltIcon,
                text: status,
                color: "#13FF75",
            };
            break;
        case "Signature Pending":
            sattings = {
                Icon: CreateIcon,
                text: status,
                color: "#F7D383",
            };
            break;
        case "Pending":
            sattings = {
                Icon: AccessTimeFilledIcon,
                text: status,
                color: "#F7D383",
            };
            break;
        case "Failed":
            sattings = {
                Icon: ErrorIcon,
                text: status,
                color: "#FF5462",
            };
            break;
    }

    return (
        <Chip
            icon={<sattings.Icon sx={{ fontSize: 16, fill: sattings.color }} />}
            label={sattings.text}
            sx={{ borderRadius: 1, bgcolor: "background.default", color: sattings.color }}
        />
    );
}

export default Status;
