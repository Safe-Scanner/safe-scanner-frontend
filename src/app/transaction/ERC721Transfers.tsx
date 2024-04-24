import CopyButton from '@/components/global/CopyButton'
import RedirectButton from '@/components/global/RedirectButton'
import { getFee, sixDigitShortrenString } from '@/components/utils/utils'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

interface ERC721Transfer {
    index: number;
    symbol: string;
    from: string;
    to: string;
    tokenId: string;
    name: string | null;
    transactionData: any;
}
function ERC721Transfers({ index, symbol, from, to, tokenId, name, transactionData }: ERC721Transfer) {
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState("");
  const [data, setData] = useState([] as any);
  const [fee, setFee] = useState<any>();
 
  useEffect(() => {
    if (transactionData != undefined) {
      let net = transactionData?.network;
      setNetwork(net);
      // let status = "";
      setData(transactionData?.transactionInfo);
      let calculatedFee = getFee(
        transactionData?.transactionInfo?.actualGasCost,
        transactionData.network
      );
      console.log("Fee is ", calculatedFee);
      setFee(calculatedFee);
    }
  }, [transactionData]);
  return (
    <Typography
    fontWeight="medium"
    noWrap
    fontFamily="'DM Mono'"
    key={index}
    display="flex"
    width="100%"
  >
    <Typography marginTop="5px" marginRight="4px">
      From:
    </Typography>
    <Typography color="primary" marginTop="5px">
      {sixDigitShortrenString(from)}
    </Typography>
    <CopyButton text={from} setOpen={setOpen} />
    <RedirectButton
      redirectLink={`wallet?safe=${from}&network=${network}`}
    />
    <Typography marginTop="5px" marginRight="4px">
      To:
    </Typography>
    <Typography color="primary" marginTop="5px">
      {sixDigitShortrenString(to)}
    </Typography>
    <CopyButton text={to} setOpen={setOpen} />
    <RedirectButton
      redirectLink={`wallet?safe=${to}&network=${network}`}
    />
    <Typography marginTop="5px" marginRight="5px">
      TokenId:
    </Typography>
    <Typography color="primary" marginTop="5px">
      {tokenId}
    </Typography>
    <Typography marginTop="5px">{symbol}(</Typography>
    <Typography color="primary" marginTop="5px">
      {name}
    </Typography>
    )
    <CopyButton text={tokenId} setOpen={setOpen} />
    <RedirectButton
      redirectLink={`wallet?safe=${tokenId}&network=${network}`}
    />
  </Typography>
  )
}

export default ERC721Transfers