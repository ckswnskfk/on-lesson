import { resetPasswordAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default async function ResetPassword({
	searchParams,
}: {
	searchParams: Message;
}) {
	return (
		<form className="flex w-full min-w-64 flex-col gap-2 [&>input]:mb-4">
			<h1 className="text-2xl font-medium">비밀번호 재설정</h1>
			<p className="mb-4 text-sm text-foreground/60">
				새 비밀번호를 입력하세요.
			</p>
			<Label htmlFor="password">새 비밀번호</Label>
			<Input
				type="password"
				name="password"
				placeholder="새 비밀번호"
				required
			/>
			<Label htmlFor="confirmPassword">비밀번호 확인</Label>
			<Input
				type="password"
				name="confirmPassword"
				placeholder="비밀번호 확인"
				required
			/>
			<SubmitButton formAction={resetPasswordAction}>
				비밀번호 재설정
			</SubmitButton>
			<FormMessage message={searchParams} />
		</form>
	);
}
