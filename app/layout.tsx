import "./globals.css";

import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { ThemeProvider } from "next-themes";

import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/supabase/check-env-vars";

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
		<html lang="en" className={GeistSans.className} suppressHydrationWarning>
			<body className="bg-background text-foreground">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<main className="flex min-h-screen flex-col items-center">
						<div className="flex w-full flex-1 flex-col items-center gap-20">
							<nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
								<div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
									<div className="flex items-center gap-5 font-semibold">
										<Link href={"/"} className="text-lg text-blue-500">
											On-Lesson
										</Link>
									</div>
									{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
								</div>
							</nav>
							<div className="flex max-w-5xl flex-col gap-20 p-5">
								{children}
							</div>

							<footer className="mx-auto flex w-full items-center justify-center gap-8 border-t py-16 text-center text-xs">
								<ThemeSwitcher />
							</footer>
						</div>
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
