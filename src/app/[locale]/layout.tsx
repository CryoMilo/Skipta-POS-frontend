import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import TranslationProvider from "@/TranslationProvider";
import serverTranslation from "../i18n/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Skipta",
	description: "Restaurant POS App"
};

export default async function RootLayout({
	children,
	params: { locale }
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { resources } = await serverTranslation(locale);

	return (
		<html lang="en">
			<body className={inter.className}>
				<TranslationProvider resources={resources} locale={locale}>
					{children}
				</TranslationProvider>
			</body>
		</html>
	);
}
