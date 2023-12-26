import type { Metadata } from "next";
import "@/styles/main.css";
import Layout from "@/components/Layout";
import { Providers } from "@/store/provider";

export const metadata: Metadata = {
	title: "Safe Scanner",
	description:
		"Super User-friendly Transaction Explorer for the Safe Eco-system",
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
					<Providers>{children}</Providers>
				</Layout>
			</body>
		</html>
	);
}
