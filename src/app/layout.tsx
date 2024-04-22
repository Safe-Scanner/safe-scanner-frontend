import React from "react";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { Providers } from "@/store/provider";
import { WalletProviders } from "./providers";
import "@rainbow-me/rainbowkit/styles.css";
import { CSPostHogProvider } from "./posthog";

type Metadata = {
  title: string;
  description: string;
};

export const metadata: Metadata = {
  title: "Safe Scanner",
  description: "User friendly transaction explorer for the Safe ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProviders>
          <CSPostHogProvider>
            <Layout>
              <Providers>{children}</Providers>
            </Layout>
          </CSPostHogProvider>
        </WalletProviders>
      </body>
    </html>
  );
}
