/* =========================================================
   NÓLI — CONFIGURAÇÃO E CATÁLOGO
   Para mudar contatos, preços ou adicionar peças, edite só este arquivo.
   ========================================================= */

const NOLI = {
  // Número com DDI + DDD, só dígitos. Ex.: 5511987654321
  whatsapp: '5500000000000',
  instagram: 'https://www.instagram.com/atelie_noli',
  instagramUser: '@atelie_noli',
};

/* ---------------------------------------------------------
   PEÇAS — como adicionar uma nova:
   1. Coloque a foto em assets/pecas/ (de preferência em pé, ~900px de largura)
   2. Copie um bloco { ... } abaixo e troque os dados
   - id: único, sem espaço nem acento (vira o link: site/#id)
   - categoria: uma das CATEGORIAS
   - proporcao: formato do card no mural: '9/16' (alto), '3/4', '4/5', '1/1'
   - foco: qual parte da foto aparece no card ('center', 'top', 'bottom', '50% 70%')
   - preco: número em reais (0 = "sob consulta")
   - cores: opções que a cliente pode escolher (deixe [] se não tiver)
   --------------------------------------------------------- */

const CATEGORIAS = ['Porta-joias', 'Incensários', 'Porta-copos', 'Kits'];

const PECAS = [
  {
    id: 'porta-joias-oval',
    nome: 'Porta-joias Oval Dourado',
    categoria: 'Porta-joias',
    foto: 'assets/pecas/porta-joias-oval.jpg',
    proporcao: '9/16', foco: '50% 60%',
    preco: 0,
    descricao: 'Bandejinha oval em cerâmica fria com textura suave e borda pintada em dourado. Guarda anéis, brincos e colares — e ainda enfeita a penteadeira.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Branco e dourado'],
    tags: ['anel', 'brinco', 'bandeja', 'dourado', 'penteadeira', 'presente'],
  },
  {
    id: 'incensario-lua',
    nome: 'Incensário Lua',
    categoria: 'Incensários',
    foto: 'assets/pecas/incensario-lua.jpg',
    proporcao: '3/4', foco: '50% 65%',
    preco: 0,
    descricao: 'Base redonda com dois tubinhos para os incensos e uma meia-lua dourada. As cinzas caem no prato — prático e lindo no altar ou na estante.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Branco e dourado'],
    tags: ['incenso', 'lua', 'dourado', 'altar'],
  },
  {
    id: 'incensario-costela-de-adao',
    nome: 'Incensário Costela-de-adão',
    categoria: 'Incensários',
    foto: 'assets/pecas/incensario-costela-de-adao.jpg',
    proporcao: '4/5', foco: '50% 70%',
    preco: 0,
    descricao: 'Folha de costela-de-adão modelada à mão, com nervuras e recortes, pintada em verde e finalizada com verniz brilhante. O incenso encaixa no suporte e as cinzas ficam na folha.',
    medidas: 'Consultar',
    prazo: '10 a 15 dias',
    cores: ['Verde folha'],
    tags: ['incenso', 'folha', 'planta', 'verde', 'monstera'],
  },
  {
    id: 'porta-copos-cafe',
    nome: 'Porta-copos Café',
    categoria: 'Porta-copos',
    foto: 'assets/pecas/porta-copos-cafe.jpg',
    proporcao: '4/5', foco: '50% 80%',
    preco: 0,
    descricao: 'Porta-copos redondo em tom creme, com grãos de café em dourado e pontinhos de brilho. Para acompanhar o café da manhã com charme.',
    medidas: 'Consultar',
    prazo: '7 a 10 dias',
    cores: ['Creme e dourado'],
    tags: ['café', 'caneca', 'mesa posta', 'presente'],
  },
  {
    id: 'kit-porta-joias-e-lua',
    nome: 'Kit Porta-joias Redondo + Incensário Lua',
    categoria: 'Kits',
    foto: 'assets/pecas/porta-joias-redondo-e-lua.jpg',
    proporcao: '9/16', foco: 'center',
    preco: 0,
    descricao: 'Dupla em branco perolado com borda dourada: um porta-joias redondo e o incensário lua. Ótima escolha para presente.',
    medidas: 'Consultar',
    prazo: '10 a 15 dias',
    cores: ['Branco e dourado'],
    tags: ['presente', 'kit', 'anel', 'incenso', 'lua', 'dourado'],
  },
];

/* Cartões de texto que aparecem misturados no mural (como pins de citação).
   "depois": aparece depois da peça de número N (começa em 1). */
const NOTAS = [
  { depois: 1, titulo: 'Cada peça é única', texto: 'Modelada, lixada e pintada à mão. As pequenas diferenças são a assinatura do ateliê.', fundo: '#6E0003', cor: '#ECE6DC' },
  { depois: 3, imagem: 'assets/noli-poster.jpg', proporcao: '1/1' },
  { depois: 4, titulo: 'Sob encomenda', texto: 'Gostou de uma peça? Toque em “Encomendar” e a gente combina cor, tamanho e prazo pelo WhatsApp.', fundo: '#F8DA9A', cor: '#6E0003' },
  { depois: 5, titulo: 'Quer algo só seu?', texto: 'Aqui está só uma parte do que sai do ateliê. Fazemos outras peças e personalizamos cores, iniciais e formatos — conta a sua ideia.', fundo: '#EE7FAD', cor: '#4A0002', acao: 'Contar minha ideia' },
];
