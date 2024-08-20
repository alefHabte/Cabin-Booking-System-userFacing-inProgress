import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase URL:", supabaseUrl);
console.log("Supabase Key:", supabaseKey);
console.log(supabase);
