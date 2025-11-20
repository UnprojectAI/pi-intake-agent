import { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./db.supabase.ts";

export type TypedSupabaseClient = SupabaseClient<Database>;
