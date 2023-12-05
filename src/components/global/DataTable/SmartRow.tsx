import React, {type ReactNode} from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

interface SmartRowProps {
  label?: {
    icon: ReactNode;
    text: ReactNode;
    info?: string;
  };
  children?: ReactNode;
  action?: ReactNode;
  disabledBorder?: boolean;
  isLastRow?: boolean;
}

function SmartRow(props: SmartRowProps) {
  const {label, children, action, disabledBorder, isLastRow} = props;

  return (
    <Stack
      direction={{xs: "column", md: "row"}}
      alignItems={{xs: "flex-start", md: "center"}}
      paddingY={1.25}
      sx={{
        borderTop: `2px solid`,
        borderBottom: isLastRow ? "2px solid" : "none",
        borderColor: disabledBorder ? "transparent" : "rgba(255, 255, 255, 0.05)",
        minHeight: 58,
      }}
      gap={3}
    >
      <Box sx={{width: {xs: "100%", md: "28%"}}}>
        {label && (
          <Stack
            direction="row"
            alignItems="center"
            position="relative"
            display="inline-flex"
            gap={2}
          >
            <Box sx={{display: {xs: "none", md: "block"}}}>{label.icon}</Box>
            <Box>{label.text}</Box>
            {label.info && (
              <IconButton sx={{position: "absolute", right: -30, top: `-50%`, zIndex: 1}}>
                <InfoOutlinedIcon color="info" sx={{fontSize: 16}} />
              </IconButton>
            )}
          </Stack>
        )}
      </Box>
      <Box
        sx={{
          flex: `1`,
          overflow: "hidden",
          display: {xs: "none", md: "block"},
        }}
      >
        {children}
      </Box>
      <Stack direction="row" display={{xs: "flex", md: "none"}} width="100%">
        <Box sx={{width: "100%", overflow: "hidden"}}>{children}</Box>
        {action && (
          <Stack
            sx={{width: "180px"}}
            alignItems="center"
            direction="row"
            justifyContent="flex-end"
            spacing={0.5}
            whiteSpace="nowrap"
          >
            {action}
          </Stack>
        )}
      </Stack>
      {action && (
        <Stack
          sx={{width: "180px", display: {xs: "none", md: "flex"}}}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0.5}
        >
          {action}
        </Stack>
      )}
    </Stack>
  );
}

export default SmartRow;
