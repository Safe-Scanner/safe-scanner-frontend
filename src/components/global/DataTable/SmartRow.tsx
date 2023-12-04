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
  body: ReactNode;
  action?: ReactNode;
  disabledBorder?: boolean;
  isLastRow?: boolean;
}

function SmartRow(props: SmartRowProps) {
  const {label, body, action, disabledBorder, isLastRow} = props;

  return (
    <Stack
      direction="row"
      alignItems="center"
      paddingY={1.25}
      sx={{
        borderTop: `2px solid rgba(255, 255, 255, 0.05);`,
        minHeight: 58,
        ...(disabledBorder ? {borderColor: "transparent"} : {}),
        ...(isLastRow ? {borderBottom: `2px solid rgba(255, 255, 255, 0.05);`} : {}),
      }}
      gap={3}
    >
      <Box sx={{flex: `0 0 28%`}}>
        {label && (
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            position="relative"
            display="inline-flex"
          >
            {label.icon}
            {label.text}
            {label.info && (
              <IconButton sx={{position: "absolute", right: -30, top: `-50%`, zIndex: 1}}>
                <InfoOutlinedIcon color="info" sx={{fontSize: 16}} />
              </IconButton>
            )}
          </Stack>
        )}
      </Box>
      <Box sx={{flex: `1`, overflow: "hidden"}}>{body}</Box>
      {action && (
        <Stack sx={{flex: `0 0 180px`}} direction="row" justifyContent="flex-end" spacing={0.5}>
          {action}
        </Stack>
      )}
    </Stack>
  );
}

export default SmartRow;
