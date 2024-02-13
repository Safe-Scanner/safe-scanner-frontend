import React, { useEffect } from "react";
import { useSignMessage } from "wagmi";
import { EthersAdapter } from "@safe-global/protocol-kit";
import Safe from "@safe-global/protocol-kit";
import SafeApiKit, {
  OwnerResponse,
  ProposeTransactionProps,
} from "@safe-global/api-kit";
import {
  MetaTransactionData,
  SafeTransactionDataPartial,
} from "@safe-global/safe-core-sdk-types";
import { useEthersProvider, useEthersSigner } from "./ethers";
import { AbstractSigner, Provider, ethers } from "ethers";
import axios from "axios";

type Props = {};

// const SAFE_WALLET = "0x0dda09dCB210969FB772BA27908CdC386102ae80";
// const SAFE_OWNER = "0xDdCB44d30403EE073dfF476a7c707F42609e49c8";

export type SafeHooks = {
  signTransaction: (txnHash: any) => Promise<void>;
  createTransaction: () => Promise<void>;
  sendTransaction: () => Promise<void>;
};

const useSafeHooks = ({safeWallet, safeOwner}: any): SafeHooks => {
  const provider = useEthersProvider();
  const signer = useEthersSigner();

  const { signMessage } = useSignMessage();
  const [protocolKit, setProtocolKit] = React.useState<Safe | null>(null);
  const [safeApiKit, setSafeApiKit] = React.useState<SafeApiKit | null>(null);

  useEffect(() => {
    if (signer === undefined) {
      console.log("No signer found");
      return;
    }
    initializeProtocolKit(signer);
    initialiseSafeApiKit(provider);
  }, [signer]);

  const initializeProtocolKit = async (
    signer: ethers.JsonRpcSigner | undefined
  ) => {
    let unwrapperSigner = await signer;
    let ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: unwrapperSigner as
        | Provider
        | AbstractSigner<Provider | null>,
    });

    const protocolKit: Safe = await Safe.create({
      ethAdapter,
      safeAddress: safeWallet,
    });
    setProtocolKit(protocolKit);
  };

  const initialiseSafeApiKit = async (
    provider: ethers.JsonRpcProvider | ethers.FallbackProvider
  ) => {
    const safeApiKit = new SafeApiKit({
      chainId: (await provider._detectNetwork()).chainId,
    });

    setSafeApiKit(safeApiKit);
  };

  const signTransaction = async (safeTxHash: any) => {
    // signMessage({ message: "hello world" });
    try {
      // Assuming `pendingTransaction` is a transaction object that the Safe SDK can sign
      console.log('====> this is the protocol kit', protocolKit);
      const signature = await protocolKit!.signTransaction(safeTxHash);
  
      // Here, you would typically send the signature back to your backend or directly to the Safe transaction service
      // to append the signature to the transaction. This might look something like:
      const response = await axios.post(`https://safe-transaction-sepolia.safe.global/api//v1/multisig-transactions/${safeTxHash}/confirmations`, {signature});

      console.log(response);
  
      console.log("Transaction signed successfully:", signature);
    } catch (error) {
      console.error("Failed to sign transaction:", error);
    }
  };

  const createTransaction = async () => {
    if (protocolKit === null) {
      console.log("No protocol kit found");
      return;
    }
    const transactions: MetaTransactionData[] = [
      {
        to: safeOwner,
        data: "0x",
        value: (100).toString(16),
        // operation: 0 // optional
      },
      // ...
    ];
    const safeTransaction = await protocolKit.createTransaction({
      transactions,
    });
    console.log(safeTransaction);

    if (safeApiKit === null) {
      console.log("No safe api kit found");
      return;
    }

    const safeTxHash = await protocolKit.getTransactionHash(safeTransaction);

    const signature = await protocolKit.signHash(safeTxHash);

    safeApiKit.proposeTransaction({
      safeAddress: safeWallet,
      safeTransactionData: safeTransaction.data,
      safeTxHash: safeTxHash,
      senderAddress: safeOwner,
      senderSignature: signature.data,
    });
  };

  const sendTransaction = async () => {};

  return { signTransaction, createTransaction, sendTransaction };
};

export default useSafeHooks;
