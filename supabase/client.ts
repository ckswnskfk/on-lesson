import { Database } from "@/database.types";
import { TypedSupabaseClient } from "@/lib/definitions";
import { createBrowserClient } from "@supabase/ssr";
import { useMemo } from "react";

let client: TypedSupabaseClient | undefined;

const getSupabaseBrowserClient = () => {
	if (client) {
		return client;
	}

	client = createBrowserClient<Database>(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
	);

	return client;
};

export const useSupabaseBrowser = () => {
	return useMemo(getSupabaseBrowserClient, []);
};
