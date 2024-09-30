import Link from "next/link";

import { signOutAction } from "@/app/actions";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { createSupabaseServer } from "@/supabase/server";

export default async function AuthButton() {
	const supabase = createSupabaseServer();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user ? (
		<div className="flex items-center gap-4">
			<Avatar className="size-12">
				<AvatarImage
					src=""
					alt={`${user.user_metadata?.user_name}의 아바타 이미지`}
				/>
				<AvatarFallback className="text-[1.1rem]">
					{user.user_metadata?.user_name.slice(0, 2)}
				</AvatarFallback>
			</Avatar>
			<form action={signOutAction}>
				<Button className="text-[1.2rem]" type="submit" variant={"outline"}>
					로그아웃
				</Button>
			</form>
		</div>
	) : (
		<div className="flex gap-2">
			<Button asChild size="sm" variant={"outline"} className="text-[1.2rem]">
				<Link href="/sign-in">로그인</Link>
			</Button>
			<Button asChild size="sm" variant={"default"} className="text-[1.2rem]">
				<Link href="/sign-up">회원가입</Link>
			</Button>
		</div>
	);
}
