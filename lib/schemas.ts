import { z } from "zod";
import { Role } from "./definitions";

export const SignUpForm = z
	.object({
		email: z.string().email({ message: "이메일을 형식에 맞게 작성해주세요." }),
		password: z.string().min(6, "비밀번호는 최소 6글자 이상이어야 합니다."),
		confirmPassword: z
			.string()
			.min(6, "비밀번호 확인은 최소 6글자 이상이어야 합니다."),
		nickname: z.string().min(2, "닉네임은 최소 2글자 이상이어야합니다."),
		role: z.nativeEnum(Role),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "비밀번호가 일치하지 않습니다.",
	});
