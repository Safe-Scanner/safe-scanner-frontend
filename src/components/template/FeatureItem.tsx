/* eslint-disable @next/next/no-img-element */
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface FeatureItemProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function FeatureItem(props: FeatureItemProps) {
  const {title, description, children} = props;

  return (
    <Paper sx={{p: {xs: 3, sm: 5}}}>
      <Stack spacing={3}>
        <Stack spacing={0.5}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Stack>
        {children}
      </Stack>
    </Paper>
  );
}

export default FeatureItem;
