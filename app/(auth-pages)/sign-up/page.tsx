import Link from "next/link";

import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import OAuthButtons from "@/components/oauth-buttons";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Signup({ searchParams }: { searchParams: Message }) {
	if ("message" in searchParams) {
		return (
			<div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
				<FormMessage message={searchParams} />
			</div>
		);
	}

	return (
		<>
			<form className="mx-auto flex min-w-64 max-w-64 flex-col">
				<h1 className="text-2xl font-medium">회원 가입</h1>
				<p className="text-sm text-foreground">
					이미 회원이십니까?{" "}
					<Link className="font-medium text-primary underline" href="/sign-in">
						로그인
					</Link>
				</p>
				<div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
					<Label htmlFor="email">이메일</Label>
					<Input name="email" placeholder="you@example.com" required />
					<Label htmlFor="password">비밀번호</Label>
					<Input
						type="password"
						name="password"
						placeholder="비밀번호"
						minLength={6}
						required
					/>
					<SubmitButton formAction={signUpAction} pendingText="회원가입 중...">
						회원가입
					</SubmitButton>
					<FormMessage message={searchParams} />
				</div>
			</form>
			<OAuthButtons />
		</>
	);
}
