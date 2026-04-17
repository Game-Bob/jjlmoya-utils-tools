import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'É seguro utilizar um gerador de passwords online?',
    answer: "Sim, desde que o gerador seja do lado do cliente (client-side). A nossa ferramenta gera passwords localmente no seu navegador utilizando algoritmos criptograficamente seguros. A sua password nunca é enviada pela internet nem armazenada em qualquer servidor.",
  },
  {
    question: "O que torna uma password 'à prova de hackers'?",
    answer: 'A chave é a entropia (aleatoriedade). Uma mistura de maiúsculas, minúsculas, números e símbolos especiais combinada com um comprimento mínimo de 12-16 caracteres torna um ataque de força bruta praticamente impossível com a tecnologia atual.',
  },
  {
    question: 'Porque devo evitar palavras comuns ou datas?',
    answer: 'Os hackers utilizam ataques de dicionário que testam milhões de palavras, nomes e combinações de datas por segundo. Passwords puramente aleatórias não seguem padrões linguísticos, o que as torna muito mais seguras.',
  },
  {
    question: 'Devo memorizar todas as minhas passwords?',
    answer: 'Não é recomendado. A abordagem ideal é utilizar um gestor de passwords (como o Bitwarden, 1Password ou o integrado no seu navegador) para armazenar estas passwords longas e aleatórias, para que só precise de se lembrar de uma password mestre forte.',
  },
];

const howToData = [
  {
    name: 'Defina o comprimento',
    text: 'Ajuste a barra deslizante para escolher quantos caracteres terá a sua password. Os padrões de segurança atuais recomendam pelo menos 12.',
  },
  {
    name: 'Escolha a complexidade',
    text: 'Marque as opções de maiúsculas, números e símbolos de acordo com os requisitos do site onde irá utilizar a password.',
  },
  {
    name: 'Gere a password',
    text: 'Clique no botão gerar. Cada clique cria uma combinação única e de alta entropia baseada em algoritmos criptográficos.',
  },
  {
    name: 'Copie com um clique',
    text: 'Utilize o botão de copiar para enviar a password diretamente para a sua área de transferência de forma segura.',
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
  name: 'Como utilizar o gerador de passwords seguras',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Gerador de Passwords Aleatórias Seguras',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crie passwords fortes e à prova de hackers instantaneamente. Ferramenta de cibersegurança gratuita para gerar chaves aleatórias e seguras.',
};

const ui: PasswordGeneratorUI = {
  generating: 'A gerar...',
  labelSecurity: 'Força',
  labelLength: 'Comprimento',
  strengthWeak: 'Fraca',
  strengthFair: 'Razoável',
  strengthGood: 'Boa',
  strengthStrong: 'Forte',
  strengthUnbreakable: 'Inviolável',
  optionUppercase: 'Maiúsculas',
  optionLowercase: 'Minúsculas',
  optionNumbers: 'Números',
  optionSymbols: 'Símbolos',
  copyTitle: 'Copiar',
  regenerateTitle: 'Gerar Nova',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'gerador-senhas',
  title: 'Gerador de Passwords Aleatórias Seguras',
  description: 'Crie passwords fortes e à prova de hackers instantaneamente. Ferramenta de cibersegurança gratuita para gerar chaves aleatórias e seguras.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Password — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Palavra-passe' },
    { name: 'Have I Been Pwned — Verifique se a sua password foi exposta', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'A Anatomia de uma Password Inviolável',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A sua password é a única barreira entre os seus dados pessoais (bancários, médicos, fotos) e um cibercriminoso. No entanto, o utilizador médio ainda confia em padrões previsíveis como "123456" ou nomes de animais de estimação, que podem ser quebrados em <strong>menos de um segundo</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'O Perigo das Rainbow Tables',
          description: 'Os hackers não adivinham a sua password uma tentativa de cada vez. Eles utilizam bases de dados massivas (Rainbow Tables) contendo milhões de hashes pré-calculados de passwords comuns. Se a sua password estiver no dicionário ou for uma frase famosa, ela já estava comprometida antes de começar a usá-la.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'A Solução: Entropia Pura',
          description: 'A entropia mede a desordem ou a imprevisibilidade. Quanto maior a entropia (bits), mais tempo um computador necessita para a quebrar. Esta ferramenta utiliza crypto.getRandomValues(), uma API do navegador que gera números aleatórios criptograficamente seguros, ao contrário de Math.random() que é previsível.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Princípios Básicos de Cibersegurança',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Comprimento acima da Complexidade',
          description: 'Uma password de 20 caracteres apenas com minúsculas é mais segura do que uma de 8 caracteres com símbolos raros. Matematicamente, cada carácter extra multiplica a dificuldade exponencialmente.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'O Mito da Substituição',
          description: 'Substituir "a" por "@" ou "e" por "3" (Leetspeak) não engana ninguém. Os dicionários de ataque modernos já incluem estas variações automaticamente. Evite utilizar palavras reconhecíveis.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Site Diferente, Chave Diferente',
          description: 'Se utilizar a mesma password para o seu e-mail e para um fórum, e o fórum for hackeado, eles têm agora acesso ao seu e-mail. Utilize um Gestor de Passwords (como o Bitwarden ou 1Password) para memorizar passwords complexas por si.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privacidade garantida',
      html: 'Toda a geração acontece <strong>no seu navegador</strong>. Nenhuma password é transmitida pela internet ou registada em qualquer servidor. O código-fonte é auditável.',
    },
  ],
};
