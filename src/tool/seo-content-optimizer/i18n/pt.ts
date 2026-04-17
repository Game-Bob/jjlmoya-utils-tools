import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Como é que esta ferramenta ajuda o meu ranking de SEO?',
    answer: 'Ao analisar a densidade de palavras-chave e a legibilidade das frases, garante que o seu conteúdo é fácil de entender para os utilizadores e relevante para os motores de busca, evitando penalizações por sobre-otimização.',
  },
  {
    question: 'Que elementos HTML verifica a análise técnica?',
    answer: 'Verifica a existência e unicidade da tag H1, a presença de subtítulos H2/H3 e os atributos alt nas imagens.',
  },
  {
    question: 'O meu conteúdo é guardado em algum servidor?',
    answer: 'Não. A análise corre 100% localmente no seu navegador. O seu conteúdo nunca sai do seu computador.',
  },
  {
    question: 'É compatível com os critérios do Yoast SEO?',
    answer: 'Sim, implementamos critérios semelhantes aos do Yoast: comprimento de frases, distribuição de parágrafos e hierarquia de cabeçalhos.',
  },
];

const howToData = [
  { name: 'Escreva ou cole o seu texto', text: 'Introduza o conteúdo que pretende analisar na área de texto principal.' },
  { name: 'Reveja a lista de verificação de otimização', text: 'Verifique os alertas de comprimento, legibilidade e densidade de palavras-chave no painel lateral.' },
  { name: 'Analise o HTML técnico', text: 'Mude para o separador de análise técnica para verificar as tags H1, os alts das imagens e a estrutura de metadados.' },
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
  name: 'Como otimizar conteúdo para SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Otimizador de Conteúdo SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analise a densidade de palavras-chave, legibilidade e estrutura HTML técnica dos seus textos em tempo real, sem enviar dados para qualquer servidor.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Análise de Texto',
  tabHtml: 'Análise HTML Técnica',
  textareaPlaceholder: 'Escreva o seu texto ou cole aqui o seu código HTML...',
  statsChars: 'Caracteres',
  statsWords: 'Palavras',
  statsReading: 'Leitura',
  statsSentences: 'Frases',
  checklistTitle: 'Lista de Verificação de Otimização',
  keywordsTitle: 'Densidade de Palavras-Chave',
  technicalTitle: 'Análise HTML Técnica',
  h1Label: 'H1 Detetado',
  linksLabel: 'Links (a)',
  imgsLabel: 'Imagens (img)',
  altsLabel: 'Alts em falta',
  emptyState: 'Sem dados',
  analyzing: 'A analisar...',
  checkInsufficient: 'Comprimento insuficiente (< 300 palavras)',
  checkPillar: 'Excelente conteúdo pilar (> 900 palavras)',
  checkGoodLength: 'Bom comprimento para SEO',
  checkLongSentences: 'Demasiadas frases longas (> 25% do texto)',
  checkGoodReadability: 'Legibilidade de frase ideal',
  checkLongParagraphs: 'Divida parágrafos muito longos (> 150 palavras)',
  checkMissingH1: 'Tag H1 em falta',
  checkMultipleH1: 'Múltiplas tags H1 detetadas',
  checkMissingH2: 'Subtítulos (H2) em falta',
  checkMissingTitle: 'Tag meta title em falta',
  stopWords: JSON.stringify(['o', 'a', 'os', 'as', 'um', 'uma', 'uns', 'umas', 'e', 'ou', 'mas', 'em', 'no', 'na', 'nos', 'nas', 'a', 'para', 'por', 'de', 'do', 'da', 'dos', 'das', 'com', 'por', 'como', 'é', 'era', 'são', 'eram', 'ser', 'estado', 'ter', 'tem', 'tinha', 'fazer', 'faz', 'fez', 'ele', 'seu', 'este', 'aquele', 'estes', 'aqueles', 'não', 'assim', 'acima', 'se', 'meu', 'teu', 'nosso', 'vosso', 'deles']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'otimizador-conteudo-seo',
  title: 'Otimizador de Conteúdo SEO',
  description: 'Analise a densidade de palavras-chave, legibilidade e estrutura HTML técnica dos seus textos em tempo real. Ferramenta de SEO gratuita e privada.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: "Guia de SEO para iniciantes do Google", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br' },
    { name: 'Critérios de legibilidade Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Otimizador de Conteúdo SEO: Palavras-Chave, Legibilidade e Estrutura' },
    {
      type: 'paragraph',
      html: 'A qualidade do conteúdo já não é medida apenas pelas palavras-chave que inclui, mas pela forma como estrutura a sua informação para ser digerível tanto para humanos como para os rastreadores do Google. A nossa <strong>ferramenta de análise de SEO em tempo real</strong> dá-lhe o controlo total sobre a densidade de palavras-chave, legibilidade de parágrafos e elementos técnicos fundamentais de HTML.',
    },
    { type: 'title', level: 3, text: 'Densidade de Palavras-Chave e Relevância Semântica' },
    {
      type: 'paragraph',
      html: 'A <strong>densidade de palavras-chave</strong> indica a frequência com que um termo aparece em comparação com o resto do texto. O excesso de repetição ativa filtros de <em>keyword stuffing</em>, enquanto uma densidade muito baixa pode dificultar a identificação do tópico central do seu artigo pelos motores de busca.',
    },
    {
      type: 'list',
      items: [
        '<strong>Análise de relevância:</strong> Identifique se as palavras mais repetidas correspondem à sua intenção de pesquisa.',
        '<strong>Prevenção de penalizações:</strong> Evite a repetição excessiva de termos que possam parecer spam.',
        '<strong>Otimização semântica:</strong> Encontre o equilíbrio entre termos técnicos e linguagem natural.',
      ],
    },
    { type: 'title', level: 3, text: 'Legibilidade ao estilo Yoast' },
    {
      type: 'paragraph',
      html: 'A legibilidade é um fator de ranking indireto, mas crucial. Se os utilizadores saem porque os parágrafos são blocos de texto intermináveis, o seu <em>Dwell Time</em> diminui. O analisador deteta frases longas (com mais de 20 palavras), parágrafos com mais de 150 palavras e verifica a existência de subtítulos.',
    },
    {
      type: 'tip',
      title: 'Tempo de leitura',
      html: 'A maioria dos utilizadores decide se vai ler um artigo em menos de 10 segundos. Conhecer o tempo de leitura estimado (calculado com uma média de 200 palavras por minuto) ajuda a reduzir a taxa de rejeição, ao definir as expectativas do leitor.',
    },
    { type: 'title', level: 3, text: 'Análise HTML Técnica' },
    {
      type: 'paragraph',
      html: 'Cole o seu código-fonte para verificar elementos-chave: unicidade do <strong>H1</strong>, presença de subtítulos H2/H3, imagens sem atributos <code>alt</code> e existência da tag <code>title</code>. Todo o processamento acontece no seu navegador sem enviar dados para qualquer servidor.',
    },
  ],
};
