import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Como gerar um link do WhatsApp?',
    answer: 'Para criar o seu link, insira o seu número de telemóvel incluindo o código do país. Por exemplo, para Portugal coloque 351 antes do seu número local. Pode adicionar uma mensagem opcional e a ferramenta gerará o link wa.me final pronto a copiar.',
  },
  {
    question: 'Posso adicionar uma mensagem pré-preenchida longa?',
    answer: 'Sim. Pode anexar uma mensagem que aparecerá automaticamente na caixa de conversa quando alguém clicar no seu link. A ferramenta utiliza codificação de URL para suportar espaços, acentos e emojis sem quebrar o URL.',
  },
  {
    question: 'Como utilizo o código QR gerado?',
    answer: 'Assim que um link válido for gerado, o botão "Mostrar QR" aparece. O código QR contém o URL do seu link. Clique com o botão direito sobre ele e selecione "Guardar imagem como" para descarregar um ficheiro limpo e de alta resolução para cartões de visita, cartazes ou redes sociais.',
  },
  {
    question: 'Para onde vão os meus dados?',
    answer: 'O gerador processa tudo no lado do cliente, diretamente no seu navegador. O seu número de telefone e a mensagem pré-preenchida nunca são enviados para qualquer servidor nem armazenados em qualquer base de dados.',
  },
];

const howToData = [
  { name: 'Selecione o prefixo', text: 'Escolha o código do seu país no menu suspenso e introduza o seu número de telefone sem o prefixo.' },
  { name: 'Adicione uma mensagem opcional', text: 'Escreva um texto pré-preenchido que aparecerá quando alguém abrir o link e tocar em Enviar.' },
  { name: 'Gere o link', text: 'Pressione o botão verde para obter o seu URL wa.me direto pronto a partilhar.' },
  { name: 'Partilhe ou imprima o QR', text: 'Copie o link, teste a conversa ou descarregue o código QR para cartões e impressão.' },
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
  name: 'Como criar um link direto do WhatsApp',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de Links do WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crie links diretos de conversa do WhatsApp com mensagem pré-preenchida e código QR. Ferramenta gratuita, sem registo, 100% privada.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Número de Telefone do WhatsApp',
  phonePlaceholder: '910 000 000',
  messageLabel: 'Mensagem de abertura (opcional)',
  messagePlaceholder: 'Olá! Gostaria de mais informações sobre o seu serviço...',
  generateBtn: 'Gerar Link',
  resultLabel: 'Link Direto Gerado',
  copyTitle: 'Copiar para a área de transferência',
  copyDone: 'Copiado!',
  testBtn: 'Testar Conversa',
  qrShow: 'Mostrar QR',
  qrHide: 'Ocultar QR',
  errorPhone: 'Por favor, introduza um número de telefone válido.',
  defaultPrefix: '351',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'gerador-link-whatsapp',
  title: 'Gerador de Links do WhatsApp com QR',
  description: 'Crie links diretos de conversa do WhatsApp com mensagem pré-preenchida e código QR. Ferramenta gratuita, sem registo, 100% privada.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Como utilizar o recurso "conversa em um clique" — Centro de Ajuda do WhatsApp', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API de conversa em um clique: parâmetros e formatos — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Gere links diretos curtos para o WhatsApp' },
    {
      type: 'paragraph',
      html: 'Precisa que clientes ou seguidores o contactem no WhatsApp sem terem de guardar o seu número primeiro? O nosso <strong>criador de links wa.me</strong> resolve isto ao gerar um link que abre uma conversa direta instantaneamente, sem passos prévios.',
    },
    { type: 'title', level: 3, text: 'Para que serve o encurtador wa.me do WhatsApp?' },
    {
      type: 'paragraph',
      html: 'O WhatsApp oferece uma API chamada "Conversa em um clique". Através de um URL especial, qualquer utilizador pode abrir uma nova conversa consigo sem precisar de o adicionar como contacto primeiro, tanto através de dispositivos móveis como do WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Mais conversões:</strong> Um botão "Contactar via WhatsApp" na sua loja reduz o atrito e aumenta as vendas.',
        '<strong>Mensagem pré-preenchida:</strong> O utilizador apenas pressiona "Enviar". Exemplo: "Olá! Vi no Instagram e quero aproveitar a oferta."',
        '<strong>Código QR automático:</strong> Descarregue o QR para cartões de visita, cartazes ou publicações nas redes sociais.',
      ],
    },
    { type: 'title', level: 3, text: 'Como funciona a geração do link?' },
    {
      type: 'paragraph',
      html: 'A ferramenta concatena o prefixo internacional e o número de telefone limpo, e depois anexa-o à API oficial do WhatsApp juntamente com o parâmetro da mensagem convertido via <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'Formato de URL do WhatsApp',
      code: 'https://wa.me/351XXXXXXXXX\nhttps://wa.me/351XXXXXXXXX?text=%C2%A1Ol%C3%A1!%20Gostaria...',
    },
    { type: 'title', level: 3, text: 'Privacidade garantida e processamento local' },
    {
      type: 'paragraph',
      html: 'Toda a construção do link acontece no seu navegador através de JavaScript. Nenhum servidor regista, guarda ou lê os números de telefone ou mensagens que introduz. A sua privacidade está totalmente protegida.',
    },
    {
      type: 'tip',
      title: 'Importância do prefixo internacional',
      html: 'Para que o WhatsApp encaminhe a mensagem corretamente, o código do país é obrigatório. Para Portugal é o <strong>351</strong>, seguido do número de telemóvel, sem espaços ou o símbolo +. O resultado final seria, por exemplo, <code>3519XXXXXXXX</code>.',
    },
  ],
};
