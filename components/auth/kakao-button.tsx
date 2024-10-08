"use client";

import { Button } from "@/components/ui/button";
import { useSupabaseBrowser } from "@/supabase/client";

export default function KakaoButton() {
	const supabase = useSupabaseBrowser();

	const handleSignInWithKakao = async () => {
		await supabase.auth.signInWithOAuth({
			provider: "kakao",
			options: { redirectTo: `${window.location.origin}/auth/callback` },
		});
	};

	return (
		<Button
			variant={"link"}
			className="size-20 rounded-full bg-[#FEE501]"
			onClick={handleSignInWithKakao}
			type="button"
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.6144 3C6.30451 3 2 6.48454 2 10.7831C2 13.5255 3.75623 15.9314 6.4034 17.3177L5.38748 20.7042C5.32567 20.9098 5.55504 21.0797 5.7336 20.9606L9.58943 18.3899C10.2428 18.5035 10.9194 18.5662 11.6144 18.5662C16.9243 18.5662 21.2288 15.0816 21.2288 10.7831C21.2288 6.48454 16.9243 3 11.6144 3Z"
					fill="#191600"
				/>
			</svg>
		</Button>
	);
}
