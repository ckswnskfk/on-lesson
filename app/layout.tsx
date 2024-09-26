import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";

import MainHeader from "@/components/layout/header/main-header";
import ReactQueryClientProvider from "@/components/react-query-client-provider";
import { ThemeSwitcher } from "@/components/theme-switcher";

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
				<body className="bg-background text-foreground">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<MainHeader />
						<div className="flex max-w-5xl flex-col gap-20 p-5">{children}</div>
						<footer className="mx-auto flex w-full items-center justify-center gap-8 border-t py-16 text-center text-xs">
							<ThemeSwitcher />
						</footer>
					</ThemeProvider>
				</body>
			</html>
		</ReactQueryClientProvider>
	);
}
