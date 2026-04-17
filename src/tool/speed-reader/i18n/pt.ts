import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'O que é a tecnologia RSVP?',
    answer: 'RSVP significa Rapid Serial Visual Presentation (Apresentação Visual Serial Rápida). As palavras aparecem uma de cada vez no mesmo ponto focal, eliminando a necessidade de mover os olhos da esquerda para a direita. Isto permite ler a velocidades muito mais elevadas sem sacrificar a compreensão, com prática.',
  },
  {
    question: 'Ler mais rápido reduz a compreensão?',
    answer: 'Depende do treino. A velocidades moderadas (350-500 WPM), muitos utilizadores relatam uma maior concentração ao eliminar a subvocalização (a voz interior). A velocidades extremas (800+ WPM), a retenção pode diminuir sem prática prévia.',
  },
  {
    question: 'Qual é a velocidade de leitura média?',
    answer: 'Um adulto médio lê entre 200 e 250 palavras por minuto. Com o leitor RSVP e alguma prática, é comum duplicar essa velocidade (400-500 WPM) mantendo uma excelente compreensão.',
  },
  {
    question: 'O RSVP causa cansaço visual?',
    answer: 'Ao eliminar o esforço muscular de mover os olhos, muitos utilizadores descobrem que podem ler com menos fadiga do que com os métodos tradicionais. Pode parecer intenso no início, mas o cérebro adapta-se rapidamente.',
  },
];

const howToData = [
  { name: 'Introduza o seu texto', text: 'Cole o artigo, livro ou documento que deseja ler na área de texto.' },
  { name: 'Configure as WPM', text: 'Ajuste as Palavras Por Minuto (WPM). Se for um principiante, comece em 300 WPM e aumente gradualmente.' },
  { name: 'Fixe o olhar', text: 'Mantenha os olhos na letra vermelha (ponto focal ORP). Não tente seguir as palavras com o movimento dos olhos.' },
  { name: 'Comece o treino', text: 'Pressione o botão play e deixe a informação fluir. Pode pausar a qualquer momento.' },
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
  name: 'Como utilizar o leitor de velocidade RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Treine a sua velocidade de leitura até 1000 palavras por minuto com tecnologia RSVP e alinhamento do ponto de reconhecimento ideal.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Progresso da leitura',
  speedLabel: 'Velocidade',
  slowLabel: 'LENTO',
  fastLabel: 'DEUS',
  speedHint: 'Comece em 300 WPM e aumente gradualmente para desafiar os seus limites.',
  textLabel: 'Texto a processar',
  textPlaceholder: 'Cole aqui o seu artigo, livro ou texto...',
  clearLabel: 'LIMPAR',
  words: 'palavras',
  defaultText: 'Bem-vindo ao RSVP Speed Reader. Cole o seu texto abaixo para começar. Esta tecnologia ajudá-lo-á a ler até três vezes mais rápido ao eliminar movimentos oculares desnecessários.',
  play: 'Reproduzir',
  pause: 'Pausar',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'leitor-rapido',
  title: 'RSVP Speed Reader',
  description: 'Treine a sua velocidade de leitura até 1000 palavras por minuto. Tecnologia RSVP com alinhamento de ponto focal ideal. Duplique a sua produtividade intelectual.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'A Fórmula 1 da Leitura: Desbloqueie a sua Largura de Banda Mental' },
    {
      type: 'paragraph',
      html: 'E se a leitura fosse, biomecanicamente, uma perda de tempo? O seu cérebro é um supercomputador travado por uma ligação analógica: os seus olhos. O <strong>Leitor RSVP</strong> quebra esse estrangulamento apresentando as palavras no ponto focal exato onde a sua mente as processa mais rapidamente.',
    },
    {
      type: 'paragraph',
      html: 'A leitura tradicional é um processo ineficiente. Os seus olhos não funcionam como um scanner; funcionam como uma câmara em modo burst: parar, focar, saltar. Este salto, chamado <strong>sacada</strong>, significa que passa uma grande parte do tempo de leitura simplesmente a mover os olhos em vez de absorver informação.',
    },
    {
      type: 'tip',
      html: '"A leitura RSVP não é apenas ler mais rápido. É eliminar a fricção mecânica entre o texto e o seu cérebro."',
    },
    { type: 'title', level: 3, text: 'A Ciência por Trás da Injeção de Dados' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Ponto de Reconhecimento Ideal (ORP)',
          description: 'Cada palavra tem um ponto onde o seu cérebro a reconhece mais rapidamente. O algoritmo calcula essa letra exata (a vermelha) e centra-a perfeitamente. Os seus olhos não se movem um único milímetro.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Silêncio Cognitivo',
          highlight: true,
          description: 'Acima das 400-500 WPM, a sua voz interior cala-se — não consegue acompanhar. Deixa de "ouvir" o que lê e começa a "ver" puros significados e conceitos. Este é o estado de flow definitivo.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplasticidade Visual',
          description: 'Como ir ao ginásio: 300 WPM parecerão rápidas no início. Após uma semana, 500 WPM parecerão um passeio. Está a re-treinar os caminhos neurais que ligam o seu córtex visual ao processamento da linguagem.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protocolo de Treino: De Principiante a Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nível 1: O Despertar (200 a 300 WPM)',
          description: 'A sua velocidade de leitura normal. Habitue-se à interface. Relaxe o rosto e deixe as palavras virem até si. Não tente "agarrá-las".',
          points: ['Ideal para principiantes', 'Familiarização com o ORP', 'Sem cansaço visual'],
        },
        {
          title: 'Nível 2: Barreira do Som (400 a 500 WPM)',
          highlight: true,
          description: 'É aqui que a magia acontece. Sentirá desconforto. Não abrande quando perder uma palavra — o seu cérebro aprenderá a preencher as lacunas pelo contexto.',
          points: ['A subvocalização desaparece', 'Estado de flow mental', 'Duplique a sua velocidade base'],
        },
        {
          title: 'Nível 3: Velocidade de Escape (600+ WPM)',
          description: 'Território avançado. Ideal para rever material de estudo, ler notícias ou consumir documentação técnica onde procura conceitos-chave.',
          points: ['Romance médio em 2 horas', 'Máxima eficiência de leitura', 'Requer prática prévia'],
        },
      ],
    },
  ],
};
