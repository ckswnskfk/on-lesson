import Link from "next/link";

import { signOutAction } from "@/app/actions";
import { createClient } from "@/supabase/server";

import { Button } from "./ui/button";

export default async function AuthButton() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user ? (
		<div className="flex items-center gap-4">
			안녕하세요, {user.user_metadata?.user_name}!
			<form action={signOutAction}>
				<Button type="submit" variant={"outline"}>
					로그아웃
				</Button>
			</form>
		</div>
	) : (
		<div className="flex gap-2">
			<Button asChild size="sm" variant={"outline"}>
				<Link href="/sign-in">로그인</Link>
			</Button>
			<Button asChild size="sm" variant={"default"}>
				<Link href="/sign-up">회원가입</Link>
			</Button>
		</div>
	);
}
