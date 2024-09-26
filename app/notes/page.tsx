import { createSupabaseServer } from "@/supabase/server";

export default async function Notes() {
	const supabase = createSupabaseServer();
	const { data: notes } = await supabase.from("notes").select();

	return <pre>{JSON.stringify(notes, null, 2)}</pre>;
}
