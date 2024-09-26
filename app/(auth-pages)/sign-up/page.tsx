import Link from "next/link";

import OAuthButtons from "@/components/auth/oauth-buttons";
import StudentSignUpForm from "@/components/auth/student-sign-up-form";
import TeacherSignUpForm from "@/components/auth/teacher-sign-up-form";
import { FormMessage, Message } from "@/components/form-message";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
			<h1 className="text-2xl font-medium">회원 가입</h1>
			<p className="text-sm text-foreground">
				이미 회원이십니까?{" "}
				<Link className="font-medium text-primary underline" href="/sign-in">
					로그인
				</Link>
			</p>
			<Tabs className="mt-8" defaultValue="student">
				<TabsList className="w-full">
					<TabsTrigger value="student" className="w-full">
						학생
					</TabsTrigger>
					<TabsTrigger value="teacher" className="w-full">
						선생님
					</TabsTrigger>
				</TabsList>
				<TabsContent value="student">
					<StudentSignUpForm searchParams={searchParams} />
				</TabsContent>
				<TabsContent value="teacher">
					<TeacherSignUpForm searchParams={searchParams} />
				</TabsContent>
			</Tabs>
			<OAuthButtons />
		</>
	);
}
