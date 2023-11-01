import { PostgrestError, createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ltvavdcgdrfqhlfpgkks.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0dmF2ZGNnZHJmcWhsZnBna2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1NzEwMjUsImV4cCI6MjAwNjE0NzAyNX0.nAuA5lILpr3giK0fiurM0DprdD1JAf4xgam0laMGfRU"; // process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export { supabase as sb };

/* export async function readRows(
  tableName: string = "luga_words",
  onSuccess?: (data: unknown) => void,
  onError?: (error: PostgrestError) => void
) {
  let { data, error } = await supabase
    .from(tableName) //"luga_words")
    .select("*");

  if (error) {
    console.log(error);
    if (onError) onError(error);
    return;
  }

  if (onSuccess) onSuccess(data);
} */
