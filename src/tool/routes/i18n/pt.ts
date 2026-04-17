import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Qual é o algoritmo de otimização utilizado?',
    answer: 'Utiliza uma resolução avançada do Problema do Caixeiro Viajante (TSP). O algoritmo analisa todas as paragens e determina a ordem sequencial que minimiza a distância total percorrida, poupando tempo e combustível.',
  },
  {
    question: 'É seguro partilhar a minha localização?',
    answer: 'Sim. A ferramenta processa os dados geográficos localmente no seu navegador. Não armazenamos as suas rotas, paragens ou histórico de localização nos nossos servidores.',
  },
  {
    question: 'Quantas paragens posso otimizar de uma só vez?',
    answer: 'A nossa versão gratuita permite-lhe otimizar até 10 paragens instantaneamente. Para rotas profissionais maiores, o sistema está otimizado para manter um elevado desempenho sem bloquear o navegador.',
  },
  {
    question: 'Posso utilizar a rota diretamente no Google Maps?',
    answer: 'Com certeza! Assim que a rota estiver otimizada, a ferramenta gera uma ligação de navegação compatível com o Google Maps para que possa iniciar a viagem diretamente do seu telemóvel.',
  },
];

const howToData = [
  {
    name: 'Adicione o ponto de partida',
    text: 'Digite o endereço de partida ou clique no mapa para definir onde a sua rota começa.',
  },
  {
    name: 'Introduza as paragens de destino',
    text: 'Adicione todos os locais que necessita de visitar. A ordem não importa, pois o sistema irá reordená-los por si.',
  },
  {
    name: 'Otimize a sequência',
    text: 'Clique no botão otimizar. O algoritmo calculará em segundos a ordem mais eficiente para cobrir todas as paragens.',
  },
  {
    name: 'Abra no navegador',
    text: 'Utilize o botão de navegação para levar a rota otimizada para a sua aplicação de mapas favorita.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como otimizar uma rota com múltiplas paragens',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Rotas Ideais',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Otimize as suas rotas de entrega ou de viagem gratuitamente. Reordene automaticamente as paragens para encontrar o caminho mais curto e eficiente.',
};

const ui: RoutesUI = {
  titleSidebar: 'Pontos da Rota',
  descriptionSidebar: 'Clique no mapa para adicionar paragens. O primeiro ponto é o início.',
  emptyState: 'Nenhum ponto adicionado',
  btnOptimize: 'Calcular Rota Ideal',
  btnCalculating: 'A calcular...',
  btnClear: 'Limpar Tudo',
  labelDistance: 'Distância Total Estimada',
  labelDeleteAria: 'Eliminar',
  labelLoadingAddress: 'A carregar endereço...',
  labelPoint: 'Ponto',
  errorMinPoints: 'São necessários pelo menos dois pontos para calcular uma rota.',
  errorCalculate: 'Erro ao calcular a rota.',
  errorAddress: 'Erro ao obter o endereço',
  errorAddressName: 'Ponto desconhecido',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'rotas-ideais',
  title: 'Calculadora de Rotas Ideais Gratuita',
  description: 'Otimize as suas rotas de entrega ou de viagem gratuitamente. A nossa ferramenta reordena automaticamente as suas paragens para encontrar o caminho mais curto e eficiente.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Tecnologias e Fontes',
  bibliography: [
    { name: 'Leaflet — Biblioteca de mapas interativos de código aberto', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Dados cartográficos abertos', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Mosaicos de mapas Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Serviço de geocodificação reversa (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (otimização de rotas)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Otimizador de Rotas Inteligente: TSP para Entregas e Viagens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O <strong>otimizador de rotas online</strong> é uma ferramenta gratuita que resolve o clássico <em>Problema do Caixeiro Viajante (TSP)</em>. Adicione todas as suas paragens em qualquer ordem e o algoritmo calculará automaticamente a sequência mais eficiente para minimizar a distância total percorrida.',
    },
    {
      type: 'title',
      text: 'Como funciona o algoritmo de otimização de rotas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A ferramenta utiliza a API <strong>OSRM (Open Source Routing Machine)</strong>, um motor de roteamento de alto desempenho baseado em dados do OpenStreetMap. O processo é: primeiro calcula a rota circular ideal entre todos os pontos (algoritmo TSP), depois determina o melhor ponto de corte para a converter numa viagem linear de sentido único e, finalmente, desenha a rota no mapa com a distância total estimada.',
    },
    {
      type: 'title',
      text: 'Casos de utilização: entregas, representantes e viagens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O otimizador de rotas é ideal para <strong>estafetas independentes</strong> que necessitam de organizar múltiplas entregas diárias, <strong>representantes comerciais</strong> que visitam clientes numa área, ou <strong>viajantes</strong> que desejam visitar várias cidades ou locais de interesse na ordem mais eficiente. A ferramenta processa toda a informação no navegador, sem partilhar os seus dados com qualquer servidor proprietário.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritmo', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Motor de roteamento', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privacidade', icon: 'mdi:lock-check' },
        { value: 'Grátis', label: 'Custo', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privacidade e processamento local',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toda a lógica da ferramenta corre diretamente no seu navegador. As coordenadas das suas paragens são apenas enviadas para as APIs públicas OSRM e Nominatim para calcular rotas e obter nomes de endereços, mas <strong>não são armazenadas em qualquer servidor proprietário</strong>. Pode utilizar a ferramenta com segurança para planear rotas de negócio com informação sensível.',
    },
    {
      type: 'tip',
      title: 'Dica de utilização',
      html: '<strong>Para melhores resultados</strong>, adicione paragens clicando diretamente no mapa em vez de pesquisar endereços. Os marcadores são arrastáveis, pelo que pode ajustar a posição exata de cada ponto após o colocar.',
    },
  ],
};
