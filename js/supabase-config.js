/* ==================================================
   SUPABASE-CONFIG.JS - Configuración de conexión
   ================================================== */

const SUPABASE_URL = 'https://yxiddzqydlzofpkultrm.supabase.co';
const SUPABASE_KEY = 'sb_publishable_QEd7MRkgcBgCEqrHbs8SmA_kHL-cSrr';

// El cliente se inicializa globalmente para ser usado por otros scripts
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

window.supabaseClient = _supabase;
