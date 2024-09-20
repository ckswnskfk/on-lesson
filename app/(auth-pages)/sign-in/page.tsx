import Link from "next/link";

import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import OAuthButtons from "@/components/oauth-buttons";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login({ searchParams }: { searchParams: Message }) {
	return (
		<>
			<form className="flex min-w-64 flex-1 flex-col">
				<h1 className="text-2xl font-medium">로그인</h1>
				<p className="text-sm text-foreground">
					아직 회원이 아니십니까?{" "}
					<Link
						className="font-medium text-foreground underline"
						href="/sign-up"
					>
						회원 가입
					</Link>
				</p>
				<div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
					<Label htmlFor="email">이메일</Label>
					<Input name="email" placeholder="you@example.com" required />
					<div className="flex items-center justify-between">
						<Label htmlFor="password">비밀번호</Label>
						<Link
							className="text-xs text-foreground underline"
							href="/forgot-password"
						>
							비밀번호를 잊으셨나요?
						</Link>
					</div>
					<Input
						type="password"
						name="password"
						placeholder="비밀번호"
						required
					/>
					<SubmitButton pendingText="로그인 중..." formAction={signInAction}>
						로그인
					</SubmitButton>
					<FormMessage message={searchParams} />
				</div>
			</form>
			<OAuthButtons />
		</>
	);
}
