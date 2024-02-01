import React from "react";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { Providers } from "@/store/provider";
import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { createConfig, http, WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  zora,
  sepolia,
} from "wagmi/chains";

const { chains }: any = createConfig({
  chains: [mainnet, polygon, optimism, arbitrum, base, zora, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

const { connectors } = getDefaultWallets({
  appName: "safe-scanner-test",
  projectId: "79659658e5d42e7f152471a0d1e981b2",
  chains,
});

const wagmiClient = createConfig({
  autoConnect: true,
  connectors,
  // Define other wagmi client settings if needed
});

export default function RootLayout({ children }: any) {
  return (
    <WagmiProvider config={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Layout>
          <Providers>{children}</Providers>
        </Layout>
      </RainbowKitProvider>
    </WagmiProvider>
  );
}
