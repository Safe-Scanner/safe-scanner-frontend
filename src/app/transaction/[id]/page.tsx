"use client";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Searchbar from "@/components/global/Searchbar";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import Overview from "../Overview";
import Confirmations from "../Confirmations";
import HashTab from "@/components/global/HashTab";

import { useParams, usePathname, useSearchParams } from "next/navigation";
import { getTransactionData } from "@/apis/transctionPage";
import ModuleOverview from "../ModuleOverview";
import { useRouter } from "next/router";
import { Paper, Skeleton } from "@mui/material";
import UserOperation from "../UserOperation";

type OwnerInfo = {
  owner: string;
  signature: string;
  signatureType: string;
  submissionDate: string;
  transactionHash: string | null;
};

function TransactionPage() {
  // const router = useRouter();
  const params: any = useParams();
  const path = usePathname();
  const searchParams = useSearchParams();
  const searchParamsNetwork: any = searchParams.get("network");

  const [transactionData, setTransactionData] = useState<any>(null);
  const [moduleTransactionData, setModuleTransactionData] = useState<any>(null);
  // const safeTransactionhash: string = searchParams.get("transactionHash") || "";
  const [safeTransactionhash, setSafeTransactionHash] = useState(
    searchParams.get("transactionHash") || ""
  );
  const [moduleTxId, setModuleTxId] = useState(
    searchParams.get("moduleTxId") || ""
  );
  const [key, setkey] = useState([] as any);
  const [confirmation, setConfirmation] = useState<OwnerInfo[]>([]);
  const [network, setNetwork] = useState(searchParamsNetwork);

  useEffect(() => {
    if (searchParamsNetwork != "" || searchParamsNetwork != undefined) {
      setNetwork(params.id.split("3D")[1]);
    }

    console.log(network);

    if (params.id.split("%")[0] == 66) {
      setSafeTransactionHash("");
      setModuleTxId(params.id.split("%")[0]);
    } else {
      setModuleTxId("");
      setSafeTransactionHash(params.id.split("%")[0]);
    }
  }, [params, network]);

  useEffect(() => {
    if (safeTransactionhash.length > 0) {
      setModuleTxId("");
      const txData = getTransactionData(
        safeTransactionhash,
        network,
        setTransactionData
      );
    } else if (moduleTxId.length > 0) {
      setSafeTransactionHash("");
      const txData = getTransactionData(
        moduleTxId,
        network,
        setModuleTransactionData
      );
    }
  }, [safeTransactionhash, moduleTxId]);

  useEffect(() => {
    console.log("Transaction data is ", transactionData?.transactionInfo);
    if (transactionData != undefined) {
      setConfirmation(transactionData?.transactionInfo?.confirmations);
    }
  }, [transactionData]);

  useEffect(() => {
    if (moduleTransactionData != null) {
      const keys = Object.keys(moduleTransactionData);
    }
  }, [moduleTransactionData]);

  return (
    <div>
      <Box component="section">
        <Box marginBottom={6} marginTop={3}>
          <Searchbar />
        </Box>
      </Box>
      <Box component="section" marginBottom={8}>
        <>
          {transactionData != undefined && transactionData.type === "multi" ? (
            <Container>
              <Stack spacing={3}>
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Image
                    src="/images/pound.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                  <Typography variant="h3" component="h1" fontWeight="medium">
                    Safe Transaction
                  </Typography>
                </Stack>
                <HashTab tabs={["Overview", "Confirmation"]}>
                  <Overview
                    transactionData={transactionData}
                    network={network}
                  />
                  <Confirmations confirmation={confirmation} />
                </HashTab>
              </Stack>
            </Container>
          ) : (
            <>
              {transactionData != undefined &&
              transactionData.type === "module" ? (
                <Container>
                  <Stack spacing={3}>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Image
                        src="/images/pound.svg"
                        width={24}
                        height={24}
                        alt=""
                      />
                      <Typography
                        variant="h3"
                        component="h1"
                        fontWeight="medium"
                      >
                        Module Transaction
                      </Typography>
                    </Stack>
                    <HashTab tabs={["Overview"]}>
                      <ModuleOverview
                        transactionData={transactionData}
                        network={network}
                      />
                    </HashTab>
                  </Stack>
                </Container>
              ) : (
                <>
                  {transactionData != undefined &&
                  transactionData.type === "user_ops" ? (
                    <Container>
                      <Stack spacing={3}>
                        <Stack direction="row" alignItems="center" spacing={2}>
                          <Image
                            src="/images/pound.svg"
                            width={24}
                            height={24}
                            alt=""
                          />
                          <Typography
                            variant="h3"
                            component="h1"
                            fontWeight="medium"
                          >
                            User Operation
                          </Typography>
                        </Stack>
                        <UserOperation
                          transactionData={transactionData}
                          network={network}
                        />
                      </Stack>
                    </Container>
                  ) : (
                    <Container>
                      <Paper sx={{ p: 3 }}>
                        <Skeleton variant="rounded" height={700} />
                      </Paper>
                    </Container>
                  )}
                </>
              )}
            </>
          )}
        </>
      </Box>
    </div>
  );
}

export default TransactionPage;
