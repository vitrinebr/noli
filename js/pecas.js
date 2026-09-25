/* =========================================================
   NÓLI: CONFIGURAÇÃO E CATÁLOGO
   Para mudar contatos, preços ou adicionar peças, edite só este arquivo.
   ========================================================= */

const NOLI = {
  // Número com DDI + DDD, só dígitos. Ex.: 5511987654321
  whatsapp: '5500000000000',
  instagram: 'https://www.instagram.com/atelie_noli',
  instagramUser: '@atelie_noli',
};

/* ---------------------------------------------------------
   PEÇAS: como adicionar uma nova:
   1. Coloque a foto em assets/pecas/ (de preferência em pé, ~900px de largura)
   2. Copie um bloco { ... } abaixo e troque os dados
   - id: único, sem espaço nem acento (vira o link: site/#id)
   - categoria: uma das CATEGORIAS
   - proporcao: formato do card no mural: '9/16' (alto), '3/4', '4/5', '1/1'
   - foco: qual parte da foto aparece no card ('center', 'top', 'bottom', '50% 70%')
   - preco: número em reais (0 = "sob consulta")
   - cores: opções que a cliente pode escolher (deixe [] se não tiver)
   - rotuloOpcoes: nome das opções na tela da peça (padrão: 'Cor'). Ex.: 'Modelo', 'Frase'
   --------------------------------------------------------- */

const CATEGORIAS = ['Porta-joias', 'Incensários', 'Porta-velas', 'Folhas', 'Quadrinhos', 'Porta-copos', 'Kits'];

const PECAS = [
  {
    id: 'porta-joias-oval',
    nome: 'Porta-joias Oval Dourado',
    categoria: 'Porta-joias',
    foto: 'assets/pecas/porta-joias-oval.jpg',
    proporcao: '9/16', foco: '50% 60%',
    preco: 0,
    descricao: 'Bandejinha oval em cerâmica fria com textura suave e borda pintada em dourado. Guarda anéis, brincos e colares, e ainda enfeita a penteadeira.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Branco e dourado'],
    tags: ['anel', 'brinco', 'bandeja', 'dourado', 'penteadeira', 'presente'],
  },
  {
    id: 'incensario-flor',
    nome: 'Incensário Flor',
    categoria: 'Incensários',
    foto: 'assets/pecas/incensario-flor.jpg',
    proporcao: '3/4', foco: '50% 70%',
    preco: 0,
    descricao: 'Florzinha de cinco pétalas gordinhas, em pink com o miolo degradê laranja e pontinhos dourados. O incenso fica no centro e as cinzas caem dentro da flor.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Pink e laranja'],
    tags: ['incenso', 'flor', 'rosa', 'pink', 'colorido'],
  },
  {
    id: 'folhas-tropicais',
    nome: 'Bandejinhas Folhas Tropicais',
    categoria: 'Folhas',
    foto: 'assets/pecas/folhas-tropicais.jpg',
    proporcao: '3/4', foco: 'center',
    preco: 0,
    descricao: 'Bandejinhas em formato de folha, pintadas à mão imitando a planta de verdade: nervuras, manchas e degradês. Servem de porta-joias, porta-chaves ou decoração para quem ama plantas.',
    medidas: 'Consultar (varia por folha)',
    prazo: '10 a 15 dias',
    rotuloOpcoes: 'Folha',
    cores: ['Espada-de-são-jorge', 'Caládio rosa', 'Alocásia', 'Begônia maculata', 'Filodendro', 'Outra folha'],
    tags: ['folha', 'planta', 'verde', 'bandeja', 'porta-joias', 'caladio', 'begonia', 'alocasia', 'espada de sao jorge', 'filodendro'],
  },
  {
    id: 'incensario-lua',
    nome: 'Incensário Lua',
    categoria: 'Incensários',
    foto: 'assets/pecas/incensario-lua.jpg',
    proporcao: '3/4', foco: '50% 65%',
    preco: 0,
    descricao: 'Base redonda com dois tubinhos para os incensos e uma meia-lua dourada. As cinzas caem no prato: prático e lindo no altar ou na estante.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Branco e dourado'],
    tags: ['incenso', 'lua', 'dourado', 'altar'],
  },
  {
    id: 'quadrinho-onca',
    nome: 'Quadrinho Mansa como uma Onça',
    categoria: 'Quadrinhos',
    foto: 'assets/pecas/quadrinho-onca.jpg',
    proporcao: '551/761', foco: 'center',
    preco: 0,
    descricao: 'Quadrinho redondo de pendurar, com borda de oncinha, frase em relevo e uma carinha de onça modelada à mão. Vem com correntinha.',
    medidas: 'Consultar',
    prazo: '10 a 15 dias',
    rotuloOpcoes: 'Frase',
    cores: ['Mansa como uma onça', 'Frase personalizada'],
    tags: ['onça', 'oncinha', 'frase', 'parede', 'quadro', 'presente'],
  },
  {
    id: 'porta-joias-hibisco',
    nome: 'Porta-joias Hibisco',
    categoria: 'Porta-joias',
    foto: 'assets/pecas/porta-joias-hibisco.jpg',
    proporcao: '3/4', foco: 'center',
    preco: 0,
    descricao: 'Flor de hibisco com pétalas onduladas em magenta, nervuras marcadas, borda dourada e miolo amarelo em relevo. Linda para anéis e brincos.',
    medidas: 'Consultar',
    prazo: '10 a 15 dias',
    cores: ['Magenta e dourado'],
    tags: ['flor', 'hibisco', 'anel', 'brinco', 'dourado', 'rosa'],
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
    id: 'porta-vela-flor',
    nome: 'Porta-vela Flor',
    categoria: 'Porta-velas',
    foto: 'assets/pecas/porta-vela-flor.jpg',
    proporcao: '9/16', foco: '50% 55%',
    preco: 0,
    descricao: 'Flor vermelha de pétalas arredondadas e brilhantes, com encaixe para vela rechaud. Deixa a mesa posta com cara de festa.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Vermelho'],
    tags: ['vela', 'rechaud', 'flor', 'vermelho', 'mesa posta'],
  },
  {
    id: 'porta-joias-andar-com-fe',
    nome: 'Porta-joias Andar com Fé',
    categoria: 'Porta-joias',
    foto: 'assets/pecas/porta-joias-andar-com-fe.jpg',
    proporcao: '1/1', foco: 'center',
    preco: 0,
    descricao: 'Pratinho de borda ondulada e dourada, com folhas de espada-de-são-jorge em relevo e a frase “Andar com fé eu vou” gravada em dourado.',
    medidas: 'Consultar',
    prazo: '10 a 15 dias',
    rotuloOpcoes: 'Frase',
    cores: ['Andar com fé eu vou', 'Frase personalizada'],
    tags: ['frase', 'fé', 'espada de sao jorge', 'folha', 'dourado', 'anel', 'presente'],
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
    id: 'porta-joias-babado-coracao',
    nome: 'Porta-joias Babado Coração',
    categoria: 'Porta-joias',
    foto: 'assets/pecas/porta-joias-babado-coracao.jpg',
    proporcao: '3/4', foco: 'center',
    preco: 0,
    descricao: 'Pratinho branco com borda em babado pintada de vermelho e um coraçãozinho no centro. Delicado e cheio de charme.',
    medidas: 'Consultar',
    prazo: '7 a 15 dias',
    cores: ['Branco e vermelho'],
    tags: ['coração', 'babado', 'vermelho', 'anel', 'presente', 'namorados'],
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
  { depois: 2, titulo: 'Cada peça é única', texto: 'Modelada, lixada e pintada à mão. As pequenas diferenças são a assinatura do ateliê.', fundo: '#6E0003', cor: '#ECE6DC' },
  { depois: 5, imagem: 'assets/noli-poster.jpg', proporcao: '1/1' },
  { depois: 8, titulo: 'Sob encomenda', texto: 'Gostou de uma peça? Toque em “Encomendar” e a gente combina cor, tamanho e prazo pelo WhatsApp.', fundo: '#F8DA9A', cor: '#6E0003' },
  { depois: 11, titulo: 'Quer algo só seu?', texto: 'Aqui está só uma parte do que sai do ateliê. Fazemos outras peças e personalizamos cores, iniciais e formatos. Conta a sua ideia!', fundo: '#EE7FAD', cor: '#4A0002', acao: 'Contar minha ideia' },
];
