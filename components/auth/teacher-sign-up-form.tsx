import { signUpAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Role } from "@/lib/definitions";

export default function TeacherSignUpForm({
	searchParams,
}: {
	searchParams: Message;
}) {
	return (
		<form className="mx-auto flex min-w-64 flex-col">
			<div className="mt-3 flex flex-col gap-2 [&>input]:mb-3">
				<Input type="hidden" name="role" defaultValue={Role.TEACHER} />
				<Label htmlFor="email" className="text-2xl">
					이메일
				</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="you@example.com"
					required
					className="text-2xl font-light"
				/>
				<Label htmlFor="password" className="text-2xl">
					비밀번호
				</Label>
				<Input
					id="password"
					type="password"
					name="password"
					placeholder="비밀번호"
					minLength={6}
					required
					className="text-2xl font-light"
				/>
				<Label htmlFor="confirmPassword" className="text-2xl">
					비밀번호 확인
				</Label>
				<Input
					id="confirmPassword"
					type="password"
					name="confirmPassword"
					placeholder="비밀번호 확인"
					minLength={6}
					required
					className="text-2xl font-light"
				/>
				<Label htmlFor="nickname" className="text-2xl">
					닉네임
				</Label>
				<Input
					id="nickname"
					name="nickname"
					type="text"
					placeholder="닉네임"
					required
					className="text-2xl font-light"
				/>
				<SubmitButton
					formAction={signUpAction}
					pendingText="회원가입 중..."
					className="text-2xl"
					size={"lg"}
				>
					회원가입
				</SubmitButton>
				<FormMessage message={searchParams} />
			</div>
		</form>
	);
}
