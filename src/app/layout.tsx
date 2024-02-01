import type { Metadata } from "next";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { Providers } from "@/store/provider";
import { WalletProviders } from "./providers";

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
				<Layout>
					<NewProvider>
						<Providers>{children}</Providers>
					</NewProvider>
				</Layout>
			</body>
		</html>
	);
}

const NewProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<WalletProviders>{children}</WalletProviders>
		</>
	);
};
