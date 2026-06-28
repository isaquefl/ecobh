// Canais oficiais e verificáveis de descarte/limpeza urbana em Belo Horizonte.
// Mantidos separados dos pontos do mapa para que o usuário sempre tenha uma
// referência oficial, mesmo quando a busca por geolocalização falha.
export const officialResources = [
  {
    id: 'slu',
    name: 'SLU — Superintendência de Limpeza Urbana',
    detail: 'Órgão da Prefeitura de BH responsável por coleta, coleta seletiva, URPVs e limpeza urbana.',
    action: 'Portal oficial',
    url: 'https://prefeitura.pbh.gov.br/slu'
  },
  {
    id: 'central-156',
    name: 'Central de Atendimento PBH · 156',
    detail: 'Tire dúvidas, solicite coleta de volumosos (bota-fora) e informe descarte irregular.',
    action: 'Ligar 156',
    url: 'tel:156'
  },
  {
    id: 'coleta-seletiva',
    name: 'Coleta Seletiva de BH',
    detail: 'Consulte dias e rotas da coleta seletiva porta a porta e os Locais de Entrega Voluntária (LEVs).',
    action: 'Ver coleta seletiva',
    url: 'https://prefeitura.pbh.gov.br/slu/coleta-seletiva'
  },
  {
    id: 'asmare',
    name: 'ASMARE',
    detail: 'Associação dos Catadores de BH: recebe recicláveis e fortalece a renda de catadoras e catadores.',
    action: 'Conhecer a ASMARE',
    url: 'https://www.instagram.com/asmare_bh/'
  }
];
