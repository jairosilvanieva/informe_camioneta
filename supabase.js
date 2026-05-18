// ============================================================
// CONFIGURACIÓN DE SUPABASE
// Reemplazá los dos valores de abajo con los que te da Supabase
// (los vas a obtener en el PASO 2 de la guía)
// ============================================================

const SUPABASE_URL = "https://cjyqpcmtyyqxmqandser.supabase.co";
const SUPABASE_KEY = "sb_publishable_XJaSKkAV8qr2S9RRdaLfdQ_DMYs6oIL";

// No tocar nada de acá para abajo
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_KEY);
