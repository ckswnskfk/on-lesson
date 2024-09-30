import Link from "next/link";

import { hasEnvVars } from "@/supabase/check-env-vars";

import { EnvVarWarning } from "./env-var-warning";
import HeaderAuth from "./header-auth";
import HeaderNav from "./nav-bar";

export default function MainHeader() {
	return (
		<header>
			<nav className="flex h-16 justify-center border-b border-b-foreground/10">
				<div className="flex w-full max-w-[115.2rem] items-center justify-between p-4 px-16 text-sm">
					<div className="flex items-center font-semibold">
						<Link href={"/"} className="text-4xl text-blue-500">
							On-Lesson
						</Link>
					</div>
					<HeaderNav />
					{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
				</div>
			</nav>
		</header>
	);
}
