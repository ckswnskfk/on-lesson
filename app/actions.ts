"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { encodedRedirect } from "@/lib/utils";
import { createClient } from "@/supabase/server";
import { SignUpForm } from "@/lib/schemas";

export const signUpAction = async (formData: FormData) => {
	const validatedFields = SignUpForm.safeParse({
		email: formData.get("email")?.toString(),
		password: formData.get("password")?.toString(),
		confirmPassword: formData.get("confirmPassword")?.toString(),
		nickname: formData.get("nickname")?.toString(),
		role: formData.get("role")?.toString(),
	});

	if (!validatedFields.success) {
		return encodedRedirect(
			"error",
			"/sign-up",
			validatedFields.error.errors.flatMap((error) => error.message).join("\n"),
		);
	}

	const origin = headers().get("origin");
	const supabase = createClient();

	const { email, password, nickname, role } = validatedFields.data;
	const { data } = await supabase
		.from("profiles")
		.select("id")
		.eq("nickname", nickname);

	if (data?.length && data.length > 0) {
		return encodedRedirect("error", "/sign-up", "이미 존재하는 닉네임입니다.");
	}

	const {
		error,
		data: { user },
	} = await supabase.auth.signUp({
		email,
		password,
		options: {
			emailRedirectTo: `${origin}/auth/callback`,
			data: {
				user_name: nickname,
				role: role,
			},
		},
	});

	if (user?.identities?.length === 0) {
		console.error("이미 가입된 이메일입니다.");
		return encodedRedirect("error", "/sign-up", "이미 가입된 이메일입니다.");
	}

	if (error) {
		console.error(error.code + " " + error.message);
		return encodedRedirect("error", "/sign-up", error.message);
	} else {
		return encodedRedirect(
			"success",
			"/sign-up",
			"입력하신 이메일에서 가입 확인 링크를 클릭하시면 회원가입이 완료됩니다.",
		);
	}
};

export const signInAction = async (formData: FormData) => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const supabase = createClient();

	const { error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		return encodedRedirect("error", "/sign-in", error.message);
	}

	return redirect("/protected");
};

export const forgotPasswordAction = async (formData: FormData) => {
	const email = formData.get("email")?.toString();
	const supabase = createClient();
	const origin = headers().get("origin");
	const callbackUrl = formData.get("callbackUrl")?.toString();

	if (!email) {
		return encodedRedirect("error", "/forgot-password", "Email is required");
	}

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${origin}/auth/callback?redirect_to=/protected/reset-password`,
	});

	if (error) {
		console.error(error.message);
		return encodedRedirect(
			"error",
			"/forgot-password",
			"비밀번호를 리셋 할 수 없습니다.",
		);
	}

	if (callbackUrl) {
		return redirect(callbackUrl);
	}

	return encodedRedirect(
		"success",
		"/forgot-password",
		"이메일에서 비밀번호를 재설정할 수 있는 링크를 확인하세요.",
	);
};

export const resetPasswordAction = async (formData: FormData) => {
	const supabase = createClient();

	const password = formData.get("password") as string;
	const confirmPassword = formData.get("confirmPassword") as string;

	if (!password || !confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/reset-password",
			"비밀번호와 비밀번호 확인은 필수 입력값입니다.",
		);
	}

	if (password !== confirmPassword) {
		encodedRedirect(
			"error",
			"/protected/reset-password",
			"비밀번호를 확인하세요.",
		);
	}

	const { error } = await supabase.auth.updateUser({
		password: password,
	});

	if (error) {
		encodedRedirect(
			"error",
			"/protected/reset-password",
			"비밀번호 재설정에 실패했습니다.",
		);
	}

	encodedRedirect("success", "/protected/reset-password", "Password updated");
};

export const signOutAction = async () => {
	const supabase = createClient();
	await supabase.auth.signOut();
	return redirect("/sign-in");
};
