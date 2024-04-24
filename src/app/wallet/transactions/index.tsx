import React, { useState, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Transaction from "./Transaction";
import {
  NETWORK_ICON_MAP,
  NETWORK_LIST,
  NETWORK_MAP,
} from "@/constants/constants";
import { useSelector } from "react-redux";
import { getFee, shortenString } from "@/components/utils/utils";
import { useSearchParams } from "next/navigation";
import { Paper, Skeleton } from "@mui/material";
import { parseEther, serializeTransaction } from "viem";
import { signTransaction } from "viem/accounts";
import ModuleTransaction from "./ModuleTransaction";

type Width = {
  width: number;
};

function Transactions() {
  const searchParams = useSearchParams();
  const transaction: any[] = useSelector(
    (state: any) => state.transaction.transaction
  );
  const [transactions, setTransaction] = useState([] as any);
  const [networkIcon, setNetworkIcon] = useState("" as any);
  const [network, setNetwork] = useState("" as any);
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setNetwork(searchParams.get("network"));
    let keys = [] as any[];
    if (transaction != null) {
      let network: any = Object.keys(transaction);
      const temp = transaction[network[0]].results;
      setTransaction([]);
      temp.forEach((el: any) => {
        console.log("here", el);
        let safeHash = "";
        if (width < 900) {
          safeHash = shortenString(el?.safeTxHash);
        } else {
          safeHash = el?.safeTxHash;
        }
        let value = getFee(
          el?.value ? el.value : 0,
          network[0] ? network[0] : "mainnet"
        );
        console.log(value);
        setTransaction((prev: any) => [
          ...prev,
          {
            safeTxHash:
              el?.txType == "MODULE_TRANSACTION"
                ? el?.transactionHash
                : el?.safeTxHash,
            icon: NETWORK_MAP[network[0]]["icon"],
            value: value?.value.toString() + " " + value?.gas.children,
            date: el?.executionDate,
            transactionHash: el?.txHash,
            method: el?.dataDecoded?.method,
            txType: el?.txType,
          },
        ]);
      });
    }
  }, [transaction]);

  const signTransactionData = async (transactionData: any) => {
    console.log("===> signing started", transactionData);
    const txData: any = {
      to: transactionData.to, // Recipient address
      value: parseEther(transactionData.value.split(" ")[0]), // Amount in ether
      //   data: transactionData.data, // Data payload, if any
    };
    // const serializedTransaction = serializeTransaction(txData);

    // // Sign the transaction
    // const signature = await signTransaction(txData);

    // console.log("Signature:", signature);
  };

  useEffect(() => {
    if (width === 0) {
      setWidth(screen.width);
    }
  }, []);

  console.log("Width of the screen is ", width);
  return (
    <Grid container sx={{ marginTop: 2 }} spacing={0.5}>
      {transactions.length > 0 &&
        transactions.map((el: any, index: any) => (
          <Grid key={index} item xs={12} md={12} lg={12}>
            <Transaction
              value={el?.value}
              safeTxHash={el?.safeTxHash}
              txType={el?.txType}
              icon={el?.icon}
              statusSubValue="+$21.03"
              variant="complete"
              date={
                el.date ? new Date(el.date).toLocaleDateString("em-GB") : "-"
              }
              txHash={el?.transactionHash}
              network={network}
              method={el.method}
            />
          </Grid>
        ))}
    </Grid>
  );
}

export default Transactions;
