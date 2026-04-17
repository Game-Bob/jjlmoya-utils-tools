import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Esta calculadora de diferença de datas é gratuita?',
    answer: 'Sim, é uma ferramenta 100% gratuita acessível a partir de qualquer navegador, sem necessidade de registo ou downloads.',
  },
  {
    question: 'Como são tratados os anos bissextos no tempo total?',
    answer: 'A ferramenta utiliza a cronologia padrão do JavaScript (UTC), que trata automaticamente os anos bissextos e o número variável de dias em cada mês para fornecer um resultado exato.',
  },
  {
    question: 'Posso calcular a diferença entre horas e minutos também?',
    answer: 'Sim. Os campos de entrada permitem-lhe selecionar a hora exata. O resultado fornece-lhe uma repartição em dias, horas, minutos e segundos, bem como totais acumulados.',
  },
  {
    question: 'As minhas datas são enviadas para algum servidor?',
    answer: 'Não. Todo o processamento é feito localmente no seu navegador. Não armazenamos nem recebemos qualquer informação sobre as datas que calcular.',
  },
];

const howToData = [
  { name: 'Selecione a data de início', text: "Introduza a data e hora de início ou clique em 'Hoje' para defini-la instantaneamente." },
  { name: 'Selecione a data final', text: "Defina o momento de destino. Use 'Agora' para medir o tempo decorrido até este exato instante." },
  { name: 'Leia os resultados', text: 'Verifique a repartição em dias, horas, minutos e segundos, bem como os totais acumulados de semanas e horas.' },
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
  name: 'Como calcular a diferença entre duas datas',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Diferença de Datas',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcule exatamente quanto tempo passou entre duas datas ou quanto falta para um evento. Resultados em dias, horas e minutos.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Data de Início',
  endLabel: 'Data de Fim',
  nowBtn: 'Agora',
  todayBtn: 'Hoje',
  tomorrowBtn: 'Amanhã',
  daysLabel: 'Dias',
  hoursLabel: 'Horas',
  minsLabel: 'Min',
  secsLabel: 'Seg',
  weeksLabel: 'Total de Semanas',
  totalHoursLabel: 'Total de Horas',
  totalMinsLabel: 'Total de Minutos',
  elapsed: 'Tempo Decorrido',
  past: 'Tempo no Passado',
  invalidDates: 'Datas inválidas',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'calculadora-diferenca-datas',
  title: 'Calculadora de Diferença de Datas',
  description: 'Calcule exatamente quanto tempo passou entre duas datas ou quanto falta para um evento. Ferramenta gratuita com resultados em dias, horas e minutos.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: History of the Gregorian Calendar', url: 'https://pt.wikipedia.org/wiki/Calendário_gregoriano' },
    { name: 'Wikipedia: Eisenhower Matrix and Time Management', url: 'https://pt.wikipedia.org/wiki/Gestão_do_tempo#Matriz_de_Eisenhower' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de diferença de datas com dias, horas e minutos' },
    {
      type: 'paragraph',
      html: 'Calcular a <strong>diferença entre duas datas</strong> é uma das tarefas mais comuns e subestimadas tanto na vida quotidiana como em ambientes profissionais. Quer esteja a planear o lançamento de um produto, a calcular a idade exata de uma pessoa ou a medir o tempo restante para um evento especial, ter uma ferramenta precisa é essencial para uma gestão eficiente do tempo.',
    },
    { type: 'title', level: 3, text: 'Para que serve a calculadora de diferença de datas?' },
    {
      type: 'paragraph',
      html: 'A utilidade desta ferramenta estende-se a múltiplos campos. No local de trabalho, os gestores de projeto utilizam-na para definir prazos de entrega e acompanhar o progresso dos marcos. Em contextos jurídicos e administrativos, é essencial para o cálculo de prazos de prescrição ou durações de contratos.',
    },
    {
      type: 'list',
      items: [
        '<strong>Planeamento de eventos:</strong> Saiba quantas semanas e dias restam até um casamento, conferência ou viagem.',
        '<strong>Gestão de projetos:</strong> Calcule o tempo decorrido desde o início de uma fase até à sua conclusão.',
        '<strong>Finanças:</strong> Determine o número de dias para cálculos de juros ou datas de vencimento de faturas.',
        '<strong>Recursos Humanos:</strong> Meça a antiguidade dos funcionários ou os dias de férias acumulados.',
        '<strong>Saúde:</strong> Acompanhe o progresso de um tratamento ou o tempo de recuperação após um procedimento.',
      ],
    },
    { type: 'title', level: 3, text: 'Perceção do tempo e precisão digital' },
    {
      type: 'paragraph',
      html: 'Frequentemente, tendemos a arredondar o tempo. Dizemos "cerca de um mês" quando faltam, na verdade, 27 dias e 14 horas. Ao utilizar uma calculadora digital, eliminamos a subjetividade e obtemos dados limpos para uma tomada de decisão informada.',
    },
    { type: 'title', level: 3, text: 'Dias naturais versus dias úteis' },
    {
      type: 'paragraph',
      html: 'Esta ferramenta calcula <strong>dias de calendário</strong>, incluindo fins de semana e feriados. Para o cálculo astronómico e civil geral, o tempo é medido continuamente. Se precisar de estimar o tempo do projeto, lembre-se de que os dias apresentados representam o calendário real completo.',
    },
    { type: 'title', level: 3, text: 'O impacto do tempo na produtividade' },
    {
      type: 'paragraph',
      html: 'A Lei de Parkinson afirma que o trabalho se expande de modo a preencher o tempo disponível para a sua realização. Ao visualizar exatamente quantas horas e minutos restam para um prazo, as equipas tendem a otimizar os seus esforços e a manter o foco.',
    },
    {
      type: 'tip',
      title: 'Datas futuras e passadas',
      html: 'Pode utilizar a calculadora tanto para datas futuras como passadas. Se a data de fim for anterior à data de início, o sistema deteta automaticamente que é tempo decorrido no passado, mantendo a precisão nos valores de diferença absoluta.',
    },
  ],
};
