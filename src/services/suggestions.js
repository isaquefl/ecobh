import { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } from '../config';

// Envia uma sugestão de ponto de coleta para o Supabase (insert público via RLS).
export async function submitSuggestion(payload) {
  const body = {
    name: payload.name?.trim(),
    email: payload.email?.trim() || null,
    place: payload.place?.trim(),
    material: payload.material || null,
    message: payload.message?.trim() || null,
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent.slice(0, 300) : null
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/ecobh_suggestions`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_PUBLISHABLE_KEY,
      Authorization: `Bearer ${SUPABASE_PUBLISHABLE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    let detail = '';
    try {
      detail = (await response.json())?.message || '';
    } catch {
      /* ignore */
    }
    throw new Error(detail || 'Não foi possível enviar agora. Tente novamente em instantes.');
  }

  return true;
}
