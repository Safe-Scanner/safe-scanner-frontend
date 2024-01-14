import type { Metadata } from "next";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { Providers } from "@/store/provider";

export const metadata: Metadata = {
    title: "Safe Scanner",
    description: "User friendly transaction explorer for the Safe ecosystem",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Layout>
                    <Providers>{children}</Providers>
                </Layout>
            </body>
        </html>
    );
}
