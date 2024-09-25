import { Database } from "@/database.types";
import { SupabaseClient } from "@supabase/supabase-js";

export type TypedSupabaseClient = SupabaseClient<Database>;

export enum Role {
	STUDENT = "STUDENT",
	TEACHER = "TEACHER",
}

export type User = {
	id: string;
	nickname: string;
	email: string;
	role: Role;
};

export type Lesson = Database["public"]["Tables"]["lessons"]["Row"];
