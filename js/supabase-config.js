/* ==================================================
   SUPABASE-CONFIG.JS - Configuración de conexión
   ================================================== */

const SUPABASE_URL = 'https://dvqihyekinvntnwcqobd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_cY9aiNvYkIV8nON2dxQ7xg_68z5Oiau';

// El cliente se inicializa globalmente para ser usado por otros scripts
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = _supabase;
