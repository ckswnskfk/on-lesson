import KakaoButton from "./kakao-button";

export default function OAuthButtons() {
	return (
		<div className="flex w-full flex-col gap-4">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<div className="w-full border-t border-gray-300"></div>
				</div>
				<div className="relative flex justify-center text-sm">
					<span className="bg-white px-3 text-sm text-foreground">or</span>
				</div>
			</div>
			<div>
				<KakaoButton />
			</div>
		</div>
	);
}
