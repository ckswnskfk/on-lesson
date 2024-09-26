import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import MainFooter from "@/components/layout/footer/main-footer";
import MainHeader from "@/components/layout/header/main-header";
import ReactQueryClientProvider from "@/components/react-query-client-provider";

const defaultUrl = process.env.VERCEL_URL
	? `https://${process.env.VERCEL_URL}`
	: "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(defaultUrl),
	title: "On-Lesson",
	description: "거리 제한 없는 세상의 모든 레슨",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ReactQueryClientProvider>
			<html lang="en" className={GeistSans.className} suppressHydrationWarning>
				<body className="flex min-h-screen flex-col bg-background text-foreground">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<MainHeader />
						<div className="mx-auto max-w-6xl grow">{children}</div>
						<MainFooter />
					</ThemeProvider>
				</body>
			</html>
		</ReactQueryClientProvider>
	);
}
