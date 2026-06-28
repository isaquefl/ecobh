// Conexão pública do EcoBH com o Supabase.
// A chave publishable é segura para o front-end: por RLS, o público só pode
// INSERIR sugestões (não consegue ler dados de ninguém). A moderação é feita
// no backoffice com a service_role (que nunca aparece aqui).
export const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://dukjiqobwifymjqnwjtq.supabase.co';

export const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_KEY || 'sb_publishable_NGrp2ncESspWwlHL5BlkDw_LvGeqBYh';
