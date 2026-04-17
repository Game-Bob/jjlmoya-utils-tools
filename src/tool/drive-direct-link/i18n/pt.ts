import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Como uso o conversor de download do Google Drive?',
    answer: 'Copie o link de "Partilha" completo de qualquer ficheiro armazenado no Google Drive (deve ter permissões públicas). Cole-o na caixa de texto da ferramenta e clique em "Gerar Link Direto". Irá aparecer um novo URL que inicia a transferência sem abrir o visualizador do Google.',
  },
  {
    question: 'Posso gerar um link de transferência direta para um ficheiro privado?',
    answer: 'Se o ficheiro for privado ou tiver acesso restrito, o Google solicitará que inicie sessão com uma conta autorizada. Para transferências limpas sem registo, as permissões do ficheiro devem ser definidas como "Qualquer pessoa com o link pode ver".',
  },
  {
    question: 'É seguro converter os meus links do Drive aqui?',
    answer: 'Sim. A conversão ocorre 100% no seu navegador e é completamente anónima. A ferramenta não armazena o seu link nem faz chamadas ao servidor; apenas analisa a estrutura do URL no lado do cliente para gerar a versão de transferência.',
  },
  {
    question: 'O que acontece se o meu ficheiro do Drive for muito grande?',
    answer: 'Para ficheiros maiores do que aproximadamente 100 MB, o Google Drive não permite uma transferência direta instantânea. Em vez disso, mostra uma página de aviso sobre o tamanho do ficheiro e a exclusão da verificação de antivírus. Esta é uma política fixa dos servidores do Google que nenhuma ferramenta externa pode contornar.',
  },
];

const howToData = [
  { name: 'Copie o link de partilha', text: 'No Google Drive, clique com o botão direito no ficheiro e selecione "Obter link". Certifique-se de que as permissões permitem o acesso a qualquer pessoa com o link.' },
  { name: 'Cole o link no gerador', text: 'Introduza o URL completo do Drive no campo de texto da ferramenta e clique no botão "Gerar Link Direto".' },
  { name: 'Copie e use o link gerado', text: 'Copie o novo link de transferência direta e use-o em e-mails, websites, newsletters ou em qualquer lugar onde precise que o ficheiro seja descarregado imediatamente ao clicar.' },
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
  name: 'Como gerar um link de transferência direta para o Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de Links de Transferência Direta do Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Converta qualquer link de partilha do Google Drive num link de transferência direta com um clique, ignorando a página de pré-visualização do ficheiro. Ferramenta gratuita.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Cole aqui o seu link do Google Drive:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Gerar Link Direto',
  resultLabel: 'Link de Transferência Direta:',
  copyTitle: 'Copiar para a área de transferência',
  copyDone: 'Copiado',
  testBtn: 'Testar Transferência',
  errorMsg: 'O link que introduziu não parece ser um link válido do Google Drive.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'link-download-direto-google-drive-pt',
  title: 'Gerador de Links de Transferência Direta do Google Drive',
  description: 'Converta facilmente qualquer link de partilha do Google Drive num link de transferência direta com um clique, ignorando a pré-visualização do ficheiro. Ferramenta gratuita.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Transferir ficheiros do Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Transferir Ficheiros', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Converter links de partilha do Google Drive em links de transferência direta' },
    {
      type: 'paragraph',
      html: 'Se partilha ficheiros frequentemente através do Google Drive, sabe como a página de pré-visualização pode ser irritante. Quando os seus utilizadores clicam no seu link, aterram num ecrã intermédio que os obriga a procurar o botão de transferência. O nosso <strong>gerador de links de transferência direta do Google Drive</strong> resolve isto ao converter qualquer link de partilha num que inicia a transferência automaticamente.',
    },
    { type: 'title', level: 3, text: 'Porquê usar um link de transferência direta?' },
    {
      type: 'paragraph',
      html: 'O principal benefício é uma experiência de utilizador muito melhor. Ao partilhar um PDF, imagem ou instalador de software, os utilizadores esperam que clicar no link inicie a transferência imediatamente:',
    },
    {
      type: 'list',
      items: [
        '<strong>Poupa tempo:</strong> Transferência com um clique sem passos extra.',
        '<strong>Aspeto profissional:</strong> Ideal para botões de transferência em websites, newsletters ou e-mails de clientes.',
        '<strong>Menos desistências:</strong> Utilizadores com menos conhecimentos técnicos podem ficar confusos com a pré-visualização do Drive e não saber como descarregar.',
        '<strong>Pronto para HTML:</strong> Perfeito para atributos <code>href</code> ou <code>src</code> nas suas páginas web.',
      ],
    },
    { type: 'title', level: 3, text: 'Como funciona o gerador de links diretos?' },
    {
      type: 'paragraph',
      html: 'Tudo acontece 100% no seu navegador. Os links de partilha do Google Drive contêm um ID de ficheiro exclusivo. A ferramenta extrai esse ID e constrói um novo URL usando o parâmetro de exportação nativo do Google: <code>https://drive.google.com/uc?export=download&amp;id=O_SEU_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Aviso para ficheiros grandes',
      html: 'Para ficheiros com mais de aproximadamente 100 MB, o Google Drive apresenta uma página de aviso de verificação de antivírus antes de a transferência começar. Esta é uma política fixa dos servidores do Google que nenhuma ferramenta externa pode ignorar.',
    },
    { type: 'title', level: 3, text: 'Privacidade e segurança garantidas' },
    {
      type: 'paragraph',
      html: 'Esta ferramenta respeita totalmente a sua privacidade. Toda a transformação do link é realizada através de JavaScript no lado do cliente no seu próprio dispositivo. Nenhum link, ID de ficheiro ou informação pessoal é enviado para qualquer servidor externo.',
    },
  ],
};
