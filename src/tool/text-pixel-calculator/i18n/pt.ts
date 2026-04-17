import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Como calcular a largura em píxeis de um texto online?',
    answer: 'Cole o seu texto na caixa de entrada, configure a fonte e o tamanho, e a ferramenta utilizará automaticamente a API Canvas do navegador para devolver a largura exata em píxeis.',
  },
  {
    question: 'Por que a largura em píxeis varia entre diferentes fontes?',
    answer: "A maioria das fontes são proporcionais, o que significa que cada caráter tem uma largura diferente. Por exemplo, um 'M' maiúsculo é sempre mais largo do que um 'i' minúsculo numa fonte sans-serif padrão.",
  },
  {
    question: 'Medir carateres é o mesmo que medir píxeis?',
    answer: 'Não. Medir carateres dá-lhe o comprimento da string, enquanto medir píxeis dá-lhe o espaço visual que ela ocupa. Isto é crucial para garantir que o texto não transborde do seu contentor num web design.',
  },
  {
    question: 'Posso usar qualquer fonte do Google Fonts?',
    answer: 'Sim, desde que a fonte esteja instalada no seu sistema operativo ou carregada na página atual, a ferramenta medirá as suas dimensões com precisão.',
  },
  {
    question: 'É seguro processar textos privados ou trechos de código?',
    answer: 'Sim. A calculadora funciona inteiramente de forma local. Nenhuns dados são enviados para servidores externos, garantindo total privacidade para os seus projetos.',
  },
];

const howToData = [
  { name: 'Introduza o texto', text: 'Escreva ou cole o texto que deseja medir na área de entrada.' },
  { name: 'Configure a fonte', text: 'Defina a família da fonte, o tamanho em píxeis, o peso e se é itálico.' },
  { name: 'Leia o resultado', text: 'A largura em píxeis e a contagem de carateres são atualizadas em tempo real.' },
  { name: 'Copie o valor', text: 'Clique em "Copiar largura" para guardar o número de píxeis na área de transferência.' },
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
  name: 'Como medir a largura do texto em píxeis',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Largura de Píxeis de Texto',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcule com precisão a largura em píxeis de qualquer texto com base na fonte, tamanho e estilo.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Texto a medir',
  textPlaceholder: 'Escreva ou cole aqui o texto que deseja medir...',
  defaultText: 'Olá Mundo',
  fontLabel: 'Família da fonte',
  sizeLabel: 'Tamanho (px)',
  weightLabel: 'Peso',
  italicLabel: 'Itálico',
  widthLabel: 'Largura (píxeis)',
  charsLabel: 'Carateres',
  previewLabel: 'Pré-visualização visual',
  copyBtn: 'Copiar largura',
  resetBtn: 'Repor',
  copyDone: 'Largura copiada',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'calculadora-largura-pixel-texto',
  title: 'Calculadora de Largura de Píxeis de Texto',
  description: 'Calcule com precisão a largura de qualquer texto em píxeis com base na fonte, tamanho e estilo. Ferramenta gratuita para designers e programadores.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Meça a largura exata em píxeis de qualquer texto' },
    {
      type: 'paragraph',
      html: 'O seu texto está a transbordar do contentor? Precisa de saber quanto espaço um título ocupa antes de o renderizar? A <strong>API Canvas do navegador</strong> permite-lhe medir a largura exata de qualquer string de texto com precisão de píxeis, sem a renderizar no DOM.',
    },
    { type: 'title', level: 3, text: 'Por que a contagem de carateres não é suficiente' },
    {
      type: 'paragraph',
      html: 'As fontes modernas são <strong>proporcionais</strong>: cada glifo tem uma largura diferente. Um "W" pode ocupar três vezes mais espaço do que um "i". O número de carateres não diz nada sobre o espaço visual real que o texto ocupa.',
    },
    {
      type: 'list',
      items: [
        '<strong>Web design:</strong> Previna o transbordo em botões, etiquetas e células de tabela.',
        '<strong>SEO:</strong> Os motores de busca truncam títulos por píxeis, não por carateres.',
        '<strong>Canvas e PDF:</strong> Calcule a posição exata antes de desenhar o texto programaticamente.',
        '<strong>Tooltips e balões:</strong> Dimensione dinamicamente os contentores com base no texto interior.',
      ],
    },
    { type: 'title', level: 3, text: 'Como funciona a medição com Canvas' },
    {
      type: 'paragraph',
      html: 'O método <code>ctx.measureText()</code> da API Canvas devolve um objeto <code>TextMetrics</code> com uma propriedade <code>width</code> que reflete a largura CSS em píxeis usando a fonte atualmente ativa. Esta ferramenta configura o contexto com a sua fonte, tamanho, peso e estilo antes de medir.',
    },
    {
      type: 'code',
      ariaLabel: 'Exemplo de Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Olá Mundo').width; // ex: 74.5",
    },
    { type: 'title', level: 3, text: 'Privacidade e processamento local' },
    {
      type: 'paragraph',
      html: 'Todo o cálculo acontece no seu navegador. Nenhuns textos, trechos de código ou dados privados saem do seu dispositivo.',
    },
    {
      type: 'tip',
      title: 'Fontes do Google Fonts',
      html: 'Para medir uma fonte do Google Fonts com precisão, certifique-se primeiro de que ela está carregada na página ou instalada no seu sistema. Caso contrário, o navegador recorrerá a uma fonte substituta e o resultado será diferente.',
    },
  ],
};
