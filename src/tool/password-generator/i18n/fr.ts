import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Est-il sûr d\'utiliser un générateur de mots de passe en ligne ?',
    answer: "Oui, à condition que le générateur soit côté client. Notre outil génère les mots de passe localement dans votre navigateur grâce à la cryptographie sécurisée. Votre mot de passe n'est jamais envoyé sur Internet ni stocké sur un serveur.",
  },
  {
    question: 'Qu\'est-ce qui rend un mot de passe "inviolable" ?',
    answer: 'La clé est l\'entropie (le hasard). Un mélange de majuscules, minuscules, chiffres et symboles spéciaux, combiné à une longueur minimale de 12 à 16 caractères, rend une attaque par force brute pratiquement impossible avec la technologie actuelle.',
  },
  {
    question: 'Pourquoi éviter les mots courants ou les dates ?',
    answer: 'Les pirates utilisent des attaques par dictionnaire qui testent des millions de mots, de noms et de combinaisons de dates en quelques secondes. Les mots de passe purement aléatoires ne suivent aucun schéma linguistique, ce qui les rend bien plus sûrs.',
  },
  {
    question: 'Dois-je mémoriser tous mes mots de passe ?',
    answer: 'Ce n\'est pas recommandé. L\'idéal est d\'utiliser un gestionnaire de mots de passe (comme Bitwarden, 1Password ou celui intégré au navigateur) pour stocker ces clés longues et aléatoires, afin de ne devoir mémoriser qu\'un seul mot de passe maître solide.',
  },
];

const howToData = [
  {
    name: 'Définir la longueur',
    text: 'Ajustez le curseur pour choisir le nombre de caractères de votre mot de passe. Les normes de sécurité actuelles recommandent au moins 12 caractères.',
  },
  {
    name: 'Choisir la complexité',
    text: 'Cochez les options majuscules, chiffres et symboles selon les exigences du site où vous utiliserez le mot de passe.',
  },
  {
    name: 'Générer le mot de passe',
    text: 'Cliquez sur le bouton générer. Chaque clic crée une combinaison unique à haute entropie basée sur des algorithmes cryptographiques.',
  },
  {
    name: 'Copier en un clic',
    text: 'Utilisez le bouton copier pour envoyer le mot de passe directement dans votre presse-papiers de manière sécurisée.',
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
  name: 'Comment utiliser le générateur de mots de passe sécurisés',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de mots de passe sécurisés et aléatoires',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Créez des mots de passe robustes et impossibles à pirater instantanément. Outil de cybersécurité gratuit pour générer des clés aléatoires et sécurisées.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Génération...',
  labelSecurity: 'Sécurité',
  labelLength: 'Longueur',
  strengthWeak: 'Faible',
  strengthFair: 'Moyen',
  strengthGood: 'Bon',
  strengthStrong: 'Excellent',
  strengthUnbreakable: 'Inviolable',
  optionUppercase: 'Majuscules',
  optionLowercase: 'Minuscules',
  optionNumbers: 'Chiffres',
  optionSymbols: 'Symboles',
  copyTitle: 'Copier',
  regenerateTitle: 'Générer un nouveau',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'generateur-mot-de-passe',
  title: 'Générateur de mots de passe sécurisés et aléatoires',
  description: 'Créez des mots de passe robustes et impossibles à pirater instantanément. Outil de cybersécurité gratuit pour générer des clés aléatoires et sécurisées.',
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'API Web Cryptography — MDN Web Docs', url: 'https://developer.mozilla.org/fr/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B : Lignes directrices sur l\'identité numérique', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Mot de passe — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Mot_de_passe' },
    { name: 'Have I Been Pwned — Vérifiez si votre mot de passe a été exposé', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'L\'anatomie d\'un mot de passe indéchiffrable',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Votre mot de passe est la seule barrière entre vos données personnelles (bancaires, médicales, photos) et un cybercriminel. Pourtant, l\'utilisateur moyen continue d\'utiliser des schémas prévisibles comme "123456" ou des noms d\'animaux, qui peuvent être déchiffrés en <strong>moins d\'une seconde</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Le danger des Rainbow Tables',
          description: 'Les pirates ne devinent pas votre mot de passe en essayant une par une. Ils utilisent d\'immenses bases de données (Rainbow Tables) contenant des millions de hachages pré-calculés de mots de passe courants. Si votre mot de passe figure dans le dictionnaire, il a déjà été compromis avant que vous commenciez à l\'utiliser.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'La solution : entropie pure',
          description: 'L\'entropie mesure le désordre ou l\'imprévisibilité. Plus l\'entropie (en bits) est élevée, plus un ordinateur a besoin de temps pour la craquer. Cet outil utilise crypto.getRandomValues(), une API du navigateur qui génère des nombres aléatoires cryptographiquement sécurisés, contrairement à Math.random() qui est prévisible.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Principes fondamentaux de cybersécurité',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'La longueur prime sur la complexité',
          description: 'Un mot de passe de 20 caractères en minuscules est plus sûr qu\'un mot de 8 caractères avec des symboles rares. Mathématiquement, chaque caractère supplémentaire multiplie la difficulté de manière exponentielle.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Le mythe des substitutions',
          description: 'Remplacer "a" par "@" ou "e" par "3" (Leetspeak) ne trompe personne. Les dictionnaires d\'attaque modernes incluent déjà ces variations automatiquement. Évitez d\'utiliser des mots reconnaissables.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Site différent, clé différente',
          description: 'Si vous utilisez le même mot de passe pour votre e-mail et un forum, et que le forum est piraté, ils ont accès à votre e-mail. Utilisez un gestionnaire de mots de passe (comme Bitwarden ou 1Password) pour mémoriser ces clés complexes à votre place.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Confidentialité garantie',
      html: 'Toute la génération se déroule <strong>dans votre navigateur</strong>. Aucun mot de passe n\'est transmis sur Internet ni enregistré sur un serveur. Le code source est auditable.',
    },
  ],
};
