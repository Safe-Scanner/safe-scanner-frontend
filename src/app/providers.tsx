"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
  zora,
} from "wagmi/chains";
import { createWalletClient, custom, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [sepolia] : []),
  ],
  [publicProvider()]
);

const projectId = "79659658e5d42e7f152471a0d1e981b2";

const { wallets } = getDefaultWallets({
  appName: "safe-scanner-test",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "safe-scanner-test",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      metaMaskWallet({ projectId, chains }),
    ],
  },
]);

// export const walletClient = createWalletClient({
//   chain: mainnet,
//   transport: custom(window.ethereum),
// });

// export const account = privateKeyToAccount('0xlj324klj24lknlkn4?As')

// const client = createWalletClient({
//   account,
//   chain: mainnet,
//   transport: http()
// })

// JSON-RPC Account
// export const accounts = async () => await walletClient.getAddresses();

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function WalletProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
