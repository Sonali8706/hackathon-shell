import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mfllahakpmeslwcckbyi.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mbGxhaGFrcG1lc2x3Y2NrYnlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMDA5NzcsImV4cCI6MjA5Njg3Njk3N30.y-W9VJsButF7sA77oflVAWTxoQKA2AZaypm0XINPfNI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)