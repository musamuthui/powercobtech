import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://ppzpwbusrwkufbqgihck.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwenB3YnVzcndrdWZicWdpaGNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI5Nzg0NDIsImV4cCI6MjEwODU1NDQ0Mn0.Ow-3tFw22_KXOKyT7en0vnU9uUJ_6bClnCjU9NHSOXs";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);