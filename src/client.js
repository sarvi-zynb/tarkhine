
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dvbxgahrhfbbgeaamuyj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2YnhnYWhyaGZiYmdlYWFtdXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxODMzMzUsImV4cCI6MjAzNzc1OTMzNX0.Xe87kdomculNHc5rSBiZoRAZHgdc6p0pH5FFPDrmzJM'
export const supabase = createClient(supabaseUrl, supabaseKey)