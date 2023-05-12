import { createClient } from "@supabase/supabase-js"

export const supabase = createClient(
	"https://ukmsbruoybwlkzlxrumz.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbXNicnVveWJ3bGt6bHhydW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzczMDAsImV4cCI6MTk5ODgxMzMwMH0.3N7AtdM0csEKr_Ln_jy_pb6e9oMaBpvTSCeruYOpfPE"
)
