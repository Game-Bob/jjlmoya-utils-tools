import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Qual é o sinal de socorro SOS em código Morse?',
    answer: "O sinal é '... --- ...' (três pontos, três traços, três pontos). É transmitido continuamente sem espaços entre as letras para indicar uma emergência imediata.",
  },
  {
    question: 'Por que é que a lanterna não está a funcionar no meu navegador?',
    answer: 'A ativação da lanterna requer que o navegador tenha permissões de câmara. Alguns navegadores móveis ou versões de desktop mais antigas não suportam esta API por razões de privacidade.',
  },
  {
    question: 'O sinal SOS pelo ecrã é visível?',
    answer: 'Sim, em condições de escuridão total, o brilho máximo de um ecrã branco a piscar em Morse pode ser visto a várias centenas de metros de distância, tornando-se uma alternativa útil se a lanterna falhar.',
  },
  {
    question: 'O que é o código Morse internacional?',
    answer: 'É um sistema de comunicação que utiliza sequências de sinais curtos (pontos) e longos (traços) para representar letras e números, padronizado pela ITU para comunicações de rádio e sinais óticos.',
  },
];

const howToData = [
  {
    name: 'Escreva a mensagem',
    text: "Introduza o texto que pretende transmitir ou utilize o botão 'SOS' pré-configurado para emergências.",
  },
  {
    name: 'Configure a velocidade',
    text: 'Ajuste as WPM (palavras por minuto) para tornar o sinal mais rápido ou mais lento, dependendo da visibilidade.',
  },
  {
    name: 'Escolha a fonte de luz',
    text: 'Ative o piscar em ecrã total ou permita o acesso à lanterna da câmara para um sinal mais forte.',
  },
  {
    name: 'Inicie a transmissão',
    text: 'Prima Transmitir para que o sistema converta o texto em impulsos visuais automáticos seguindo o padrão Morse.',
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
  name: 'Como utilizar o farol Morse para transmitir mensagens',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Farol Morse: Transmissor Tático SOS',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Transforme o seu dispositivo numa estação de transmissão Morse. Utilize o flash e o ecrã como sinais luminosos de emergência e comunicação tática.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Mensagem a Transmitir',
  placeholder: 'Escreva aqui a sua mensagem (SOS, OLÁ, AJUDA)...',
  btnTransmit: 'Transmitir',
  btnSosLoop: 'Loop SOS',
  btnStop: 'Parar',
  labelTorch: 'Flash/Lanterna',
  statusStandby: 'STANDBY',
  statusTransmitting: 'A TRANSMITIR',
  statusStopping: 'A PARAR...',
  statusWaiting: 'A AGUARDAR',
  statusReady: 'HARDWARE PRONTO',
  statusNoTorch: 'SEM LANTERNA',
  statusNoPermission: 'SEM PERMISSÃO',
  statusNotSupported: 'NÃO SUPORTADO',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'A ENVIAR:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'farol-morse',
  title: 'Farol Morse: Transmissor Tático SOS',
  description: 'Transforme o seu dispositivo numa estação de transmissão Morse. Utilize o flash e o ecrã como sinais luminosos de emergência e comunicação tática.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Código Morse Internacional', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Código Morse — Wikipédia', url: 'https://pt.wikipedia.org/wiki/C%C3%B3digo_Morse' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Linguagem da Luz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta transforma o seu dispositivo num farol de sinalização ótica capaz de transmitir mensagens visíveis a quilómetros de distância. Utilizando o padrão internacional do Código Morse, permite a comunicação silenciosa ou de emergência através de impulsos luminosos (lanterna e ecrã).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Um Padrão Universal',
          description: 'Desenvolvido em 1830 por Samuel Morse, este sistema binário de pontos e traços revolucionou as telecomunicações. A sua simplicidade torna-o extremamente robusto: pode ser transmitido por som, rádio, eletricidade ou luz, e permanece legível mesmo sob interferências graves.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'Modo de Emergência SOS',
          description: "O botão 'Loop SOS' transmite continuamente a sequência ··· --- ···. Este sinal é universalmente reconhecido como um pedido de socorro e, graças ao elevado contraste da lanterna LED, é visível de uma grande distância, mesmo à luz do dia em certas condições.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Padrão ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta ferramenta respeita rigorosamente os <strong>tempos regulamentares</strong> do código Morse internacional, conforme definido pela União Internacional de Telecomunicações.',
    },
    {
      type: 'list',
      items: [
        '1 ponto = 1 unidade de tempo',
        '1 traço = 3 unidades de tempo',
        'Espaço entre elementos = 1 unidade',
        'Espaço entre letras = 3 unidades',
        'Espaço entre palavras = 7 unidades',
      ],
    },
    {
      type: 'tip',
      title: 'Velocidade padrão',
      html: 'A velocidade predefinida é de <strong>15 WPM</strong> (palavras por minuto), o que corresponde a um ritmo de transmissão profissional. A 15 WPM, 1 unidade = 80 ms.',
    },
  ],
};
