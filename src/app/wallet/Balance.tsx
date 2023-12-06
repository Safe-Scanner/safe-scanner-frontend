import React, {Fragment} from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HashTab from "@/components/global/HashTab";
import SmartRow from "@/components/global/DataTable/SmartRow";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Balance() {
  return (
    <Stack spacing={3}>
      <div>
        <HashTab size="small" tabs={["Crypto (7)", "NFTs (15)"]}>
          <Paper sx={{p: 3, mt: 2}}>
            <Stack spacing={2.5}>
              {[...Array(9)].map((_, i) => (
                <Stack key={i} direction="row" spacing={1} alignItems="center">
                  <Stack flexGrow={1}>
                    <Typography
                      variant="subtitle2"
                      color="text.disabled"
                      fontWeight="medium"
                    >
                      NFT {i + 1}
                    </Typography>
                    <Typography color="text.secondary" fontWeight="medium">
                      0x242a…6b96
                    </Typography>
                  </Stack>
                  <Stack spacing={0.5} direction="row">
                    <IconButton>
                      <ContentCopyIcon color="primary" sx={{fontSize: 20}} />
                    </IconButton>
                    <IconButton href="/">
                      <OpenInNewIcon color="primary" sx={{fontSize: 20}} />
                    </IconButton>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Paper>
          <div>Comming Soon</div>
        </HashTab>
      </div>
    </Stack>
  );
}

export default Balance;
