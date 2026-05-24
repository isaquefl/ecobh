export const categories = [
  {
    id: 'eletronico',
    name: 'Lixo eletrônico',
    short: 'Celulares, cabos, computadores e periféricos.',
    separates: 'Remova dados pessoais, retire pilhas soltas e mantenha peças pequenas em saco separado.',
    where: 'Ecopontos, campanhas de logística reversa, lojas parceiras e centros de reciclagem.',
    care: 'Nunca quebre baterias ou descarte placas no lixo comum.',
    impact: 'Reduz contaminação por metais pesados e recupera componentes valiosos.'
  },
  {
    id: 'moveis',
    name: 'Móveis velhos',
    short: 'Sofás, colchões, armários, cadeiras e mesas.',
    separates: 'Separe peças aproveitáveis, remova objetos internos e fotografe se for doar.',
    where: 'Serviços de bota-fora, doações, cooperativas, ferro-velho ou ecopontos indicados.',
    care: 'Não abandone em calçadas, córregos ou lotes vagos.',
    impact: 'Evita entulho urbano e amplia o reúso de materiais.'
  },
  {
    id: 'ferro',
    name: 'Ferro velho',
    short: 'Metais, sucata, estruturas e peças reaproveitáveis.',
    separates: 'Agrupe por tipo de metal quando possível e retire resíduos orgânicos.',
    where: 'Ferros-velhos, cooperativas e recicladores autorizados.',
    care: 'Proteja pontas cortantes e informe peso aproximado antes de transportar.',
    impact: 'Economiza energia e reduz extração mineral.'
  },
  {
    id: 'latinha',
    name: 'Latinhas',
    short: 'Latas de alumínio e embalagens metálicas limpas.',
    separates: 'Esvazie, enxágue rapidamente e amasse se quiser otimizar espaço.',
    where: 'Coleta seletiva, cooperativas, bares parceiros e pontos de reciclagem.',
    care: 'Evite misturar com restos de comida ou líquidos.',
    impact: 'O alumínio tem alta reciclabilidade e fortalece a renda de catadores.'
  },
  {
    id: 'papelao',
    name: 'Papelão',
    short: 'Caixas, embalagens e papéis secos.',
    separates: 'Dobre caixas, mantenha seco e remova fitas ou restos de alimento.',
    where: 'Coleta seletiva, cooperativas e pontos de entrega voluntária.',
    care: 'Papel engordurado ou molhado perde valor de reciclagem.',
    impact: 'Reduz volume em aterros e economiza água no ciclo produtivo.'
  },
  {
    id: 'plastico',
    name: 'Plástico',
    short: 'Garrafas, potes, embalagens e sacolas limpas.',
    separates: 'Esvazie embalagens, compacte garrafas e mantenha tampas juntas.',
    where: 'Coleta seletiva, ecopontos e cooperativas.',
    care: 'Não misture com resíduos contaminantes como óleo automotivo.',
    impact: 'Diminui poluição visual, entupimentos e microplásticos no ambiente.'
  },
  {
    id: 'vidro',
    name: 'Vidro',
    short: 'Garrafas, potes e frascos sem resíduos.',
    separates: 'Embale cacos em papel grosso e identifique como vidro quebrado.',
    where: 'Pontos de entrega voluntária, cooperativas e estabelecimentos parceiros.',
    care: 'Espelhos, porcelanas e lâmpadas exigem descarte específico.',
    impact: 'Pode ser reciclado inúmeras vezes sem perda relevante de qualidade.'
  },
  {
    id: 'oleo',
    name: 'Óleo usado',
    short: 'Óleo de cozinha usado em frituras.',
    separates: 'Espere esfriar, coe e armazene em garrafa PET bem fechada.',
    where: 'Supermercados, escolas, ONGs, condomínios e campanhas locais.',
    care: 'Não jogue na pia, vaso sanitário ou bueiro.',
    impact: 'Evita contaminação da água e pode virar sabão ou biodiesel.'
  },
  {
    id: 'pilhas',
    name: 'Pilhas',
    short: 'Pilhas comuns, alcalinas e recarregáveis.',
    separates: 'Mantenha em recipiente seco, longe de calor e umidade.',
    where: 'Farmácias, supermercados, lojas de eletrônicos e pontos de logística reversa.',
    care: 'Se houver vazamento, não toque diretamente no material.',
    impact: 'Evita liberação de substâncias tóxicas no solo.'
  },
  {
    id: 'baterias',
    name: 'Baterias',
    short: 'Baterias de celular, notebook, nobreak, carro e similares.',
    separates: 'Isole terminais com fita quando houver risco de contato.',
    where: 'Lojas, assistências técnicas, ecopontos e programas de logística reversa.',
    care: 'Não perfure, aqueça ou compacte baterias de lítio.',
    impact: 'Reduz risco de incêndio e recupera metais estratégicos.'
  },
  {
    id: 'roupas',
    name: 'Roupas e doações',
    short: 'Peças em bom estado, tecidos, calçados e cobertores.',
    separates: 'Lave, seque e separe por tipo. Peças danificadas podem virar retalho.',
    where: 'Instituições sociais, brechós solidários, igrejas e campanhas de inverno.',
    care: 'Não doe roupas molhadas, mofadas ou sem condição de uso.',
    impact: 'Amplia o ciclo de vida dos produtos e apoia pessoas em vulnerabilidade.'
  },
  {
    id: 'bota-fora',
    name: 'Bota-fora',
    short: 'Descarte programado de itens volumosos.',
    separates: 'Organize itens por volume, risco e possibilidade de reaproveitamento.',
    where: 'Serviços públicos, regionais, ecopontos e programas comunitários.',
    care: 'Confirme regras e datas oficiais antes de colocar itens na rua.',
    impact: 'Evita descarte irregular e melhora a limpeza urbana.'
  },
  {
    id: 'coleta-seletiva',
    name: 'Coleta seletiva',
    short: 'Separação de recicláveis secos para coleta e triagem.',
    separates: 'Use um recipiente para secos e outro para orgânicos ou rejeitos.',
    where: 'Rotas municipais, condomínios, PEVs e cooperativas.',
    care: 'Material reciclável precisa estar limpo e seco.',
    impact: 'Fortalece economia circular e reduz pressão sobre aterros.'
  }
];

export const materialOptions = [
  { value: 'all', label: 'Todos' },
  ...categories.map((category) => ({ value: category.id, label: category.name }))
];

export const materialLabels = categories.reduce((labels, category) => {
  labels[category.id] = category.name;
  return labels;
}, {});
