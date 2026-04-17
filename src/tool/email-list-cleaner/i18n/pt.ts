import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'O que faz exatamente este limpador de listas de e-mail?',
    answer: 'A ferramenta analisa a sua lista de e-mails, remove duplicados, elimina espaços em branco desnecessários, valida o formato básico e normaliza todos os endereços para minúsculas para garantir uma base de dados limpa.',
  },
  {
    question: 'Existe um limite no número de e-mails?',
    answer: 'Não existe um limite rigoroso de registos. Pode processar milhares de e-mails instantaneamente numa única passagem. A única restrição é a memória do seu navegador se a lista for extremamente grande.',
  },
  {
    question: 'É seguro colar os meus e-mails aqui?',
    answer: 'Absolutamente. Todo o processamento é feito localmente no seu próprio navegador através de JavaScript. Os seus dados nunca são enviados para os nossos servidores nem armazenados em qualquer base de dados externa.',
  },
  {
    question: 'Como é que isto melhora a entregabilidade da minha campanha?',
    answer: 'Ao remover endereços inexistentes ou malformados, reduz a sua taxa de rejeição (bounce rate), o que melhora a reputação do seu domínio perante fornecedores como Gmail, Outlook e Yahoo.',
  },
];

const howToData = [
  { name: 'Cole os seus e-mails', text: 'Copie a sua lista de e-mails e cole-a na caixa de texto. Podem estar separados por linhas, vírgulas ou espaços.' },
  { name: 'Limpe a lista', text: 'Clique no botão "Limpar Lista" para iniciar o processo de validação e remoção de duplicados.' },
  { name: 'Reveja os resultados', text: 'Verifique as estatísticas que mostram os e-mails originais vs. finais e reveja a lista limpa no painel inferior.' },
  { name: 'Copie ou descarregue', text: 'Copie o resultado diretamente para a área de transferência ou descarregue-o como um ficheiro .txt pronto a usar.' },
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
  name: 'Como limpar uma lista de e-mails',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Limpador de Listas de E-mail',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Remova duplicados, corrija espaços em branco e valide formatos na sua lista de e-mails. Ferramenta gratuita sem limite de registos.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Lista de e-mails',
  inputPlaceholder: 'Cole aqui a sua lista de e-mails (separada por linhas, vírgulas ou espaços)...',
  cleanBtn: 'Limpar Lista',
  clearBtn: 'Limpar Tudo',
  statsOriginal: 'Original',
  statsRemoved: 'Removidos',
  statsFinal: 'Limpos',
  resultLabel: 'Resultado Limpo',
  copyBtn: 'Copiar Lista',
  copyDone: 'Copiado!',
  downloadBtn: 'Descarregar .txt',
  registered: 'registados',
  downloadFilename: 'e-mails-limpos',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'limpador-listas-email-pt',
  title: 'Limpador de Listas de E mail',
  description: 'Limpe listas de e-mail gratuitamente. Remova duplicados, corrija espaços em branco e valide formatos em segundos. Poupe custos e melhore a sua entregabilidade.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Diretrizes para remetentes de e-mail', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Spam de e-mail', url: 'https://pt.wikipedia.org/wiki/Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Por que é essencial usar um limpador de listas de e-mail?' },
    {
      type: 'paragraph',
      html: 'No mundo do marketing digital, a qualidade da sua base de dados importa muito mais do que o seu tamanho. Ter uma lista de 50.000 e-mails não vale nada se metade deles forem endereços inexistentes, contiverem erros tipográficos ou forem duplicados. É aqui que um <strong>limpador de listas de e-mail</strong> se torna indispensável.',
    },
    { type: 'title', level: 3, text: 'Os riscos de uma lista de e-mails suja' },
    {
      type: 'paragraph',
      html: 'Manter uma base de dados não limpa pode ter consequências graves. Enviar e-mails para endereços que não existem gera um "hard bounce". Se esta percentagem exceder 2-3%, os filtros de spam começarão a escrutinar o seu domínio e poderá acabar numa lista negra internacional.',
    },
    {
      type: 'tip',
      title: 'Conselho de especialista',
      html: 'Nunca compre listas de e-mails. É a forma mais rápida de arruinar a reputação do seu domínio. Construa a sua própria lista organicamente e limpe-a a cada 3 a 6 meses.',
    },
    { type: 'title', level: 3, text: 'Como a nossa ferramenta otimiza a sua base de dados' },
    {
      type: 'paragraph',
      html: 'A nossa utilidade gratuita realiza uma limpeza minuciosa e rápida das suas bases de dados sem limites de registos. Executa várias tarefas críticas de validação instantaneamente:',
    },
    {
      type: 'list',
      items: [
        '<strong>Remoção de duplicados:</strong> O mesmo utilizador não receberá o mesmo e-mail duas vezes.',
        '<strong>Correção de espaços em branco:</strong> Eliminamos espaços acidentais no início ou no fim que invalidariam o envio.',
        '<strong>Validação de formato:</strong> Filtramos entradas que não têm uma estrutura de e-mail válida.',
        '<strong>Normalização:</strong> Tudo é convertido para minúsculas para evitar registos redundantes.',
      ],
    },
    { type: 'title', level: 3, text: 'Qual é o momento certo para limpar a sua lista?' },
    {
      type: 'list',
      items: [
        'Antes de importar contactos para um novo CRM ou plataforma de envio (Mailchimp, SendGrid, etc.).',
        'Se notar que a sua taxa de abertura caiu abaixo da sua média habitual.',
        'Após um evento ou feira onde recolheu dados manualmente.',
        'Como manutenção preventiva trimestral para manter a saúde do domínio.',
      ],
    },
    { type: 'title', level: 3, text: 'Impacto no retorno sobre o investimento' },
    {
      type: 'paragraph',
      html: 'O e-mail marketing continua a ser um dos canais com maior ROI, mas apenas se as mensagens chegarem à caixa de entrada. Ao usar um <strong>limpador de e-mail</strong>, está a otimizar o seu funil de vendas desde a origem e a deixar de pagar a plataformas por contactos que nunca verão as suas mensagens.',
    },
    {
      type: 'tip',
      title: 'Implemente double opt in',
      html: 'A melhor forma de evitar e-mails falsos é exigir que os utilizadores confirmem a sua subscrição clicando num link enviado para a sua caixa de entrada. Isto garante que o e-mail existe e que o utilizador tem acesso a ele.',
    },
  ],
};
