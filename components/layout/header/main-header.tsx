import { hasEnvVars } from "@/supabase/check-env-vars";
import Link from "next/link";
import { EnvVarWarning } from "./env-var-warning";
import HeaderAuth from "./header-auth";

export default function MainHeader() {
	return (
		<header>
			<nav className="flex h-16 w-full justify-center border-b border-b-foreground/10">
				<div className="flex w-full max-w-5xl items-center justify-between p-3 px-5 text-sm">
					<div className="flex items-center gap-5 font-semibold">
						<Link href={"/"} className="text-lg text-blue-500">
							On-Lesson
						</Link>
					</div>
					<div className="flex">
						<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
							<a
								href="#"
								className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								홈
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								선생님 찾기
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								레슨 소개
							</a>
							<a
								href="#"
								className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
							>
								요금 안내
							</a>
						</div>
					</div>
					{!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
				</div>
			</nav>
		</header>
	);
}
