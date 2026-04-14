import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Comment générer un lien WhatsApp ?',
    answer: "Pour créer votre lien, saisissez votre numéro de mobile en incluant l'indicatif de pays. Par exemple, pour l'Espagne mettez d'abord le 34, pour la France le 33, suivi de votre numéro local. Vous pouvez ajouter un message optionnel et l'outil générera le lien wa.me final prêt à copier.",
  },
  {
    question: 'Puis-je ajouter un long message prédéfini ?',
    answer: "Oui. Vous pouvez joindre un texte qui apparaîtra automatiquement dans la zone de message de l'utilisateur lorsqu'il clique sur le lien. L'outil utilise l'encodage URL pour prendre en charge les espaces, les accents et les emojis sans corrompre l'URL.",
  },
  {
    question: 'Comment utiliser le QR code généré ?',
    answer: 'Une fois un lien valide généré, le bouton "Afficher QR" apparaît. Le code QR contient votre URL. Faites un clic droit et sélectionnez "Enregistrer l\'image" pour télécharger un fichier haute résolution pour cartes de visite, affiches ou réseaux sociaux.',
  },
  {
    question: 'Où vont mes données ?',
    answer: "Le générateur traite tout côté client, directement dans votre navigateur. Votre numéro de téléphone et votre message prédéfini ne sont jamais envoyés à un serveur ni stockés dans une base de données.",
  },
];

const howToData = [
  { name: "Sélectionner l'indicatif", text: "Choisissez l'indicatif de votre pays dans le menu déroulant et saisissez votre numéro sans le préfixe." },
  { name: 'Ajouter un message optionnel', text: "Rédigez un texte prédéfini qui apparaîtra quand quelqu'un ouvrira le lien et appuiera sur Envoyer." },
  { name: 'Générer le lien', text: "Appuyez sur le bouton vert pour obtenir votre URL directe wa.me prête à partager." },
  { name: 'Partager ou imprimer le QR', text: "Copiez le lien, testez le chat ou téléchargez le code QR pour les cartes et l'impression." },
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
  name: 'Comment créer un lien WhatsApp direct',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de Liens WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: "Créez des liens directs vers votre chat WhatsApp avec message prédéfini et code QR. Outil gratuit, sans inscription, 100% privé.",
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Numéro WhatsApp',
  phonePlaceholder: '06 00 00 00 00',
  messageLabel: 'Message initial (optionnel)',
  messagePlaceholder: "Bonjour ! Je souhaiterais plus d'informations sur votre service...",
  generateBtn: 'Générer le lien',
  resultLabel: 'Lien direct généré',
  copyTitle: 'Copier dans le presse-papiers',
  copyDone: 'Copié !',
  testBtn: 'Tester le chat',
  qrShow: 'Afficher QR',
  qrHide: 'Masquer QR',
  errorPhone: 'Veuillez saisir un numéro valide.',
  defaultPrefix: '33',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'generateur-lien-whatsapp',
  title: 'Générateur de Lien WhatsApp avec QR',
  description: "Créez des liens directs vers votre chat WhatsApp avec message prédéfini et code QR. Outil gratuit, sans inscription, 100% privé.",
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: "Comment utiliser la fonction clic pour chatter — Aide WhatsApp", url: 'https://faq.whatsapp.com/591339899867293' },
    { name: "API Click to chat : paramètres et formats — WhatsApp", url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Générez des liens courts et directs pour WhatsApp' },
    {
      type: 'paragraph',
      html: 'Vous avez besoin que des clients ou abonnés vous contactent sur WhatsApp sans avoir à enregistrer votre numéro ? Notre <strong>créateur de liens wa.me</strong> résout ce problème en générant un lien qui ouvre un chat direct instantanément, sans étapes préalables.',
    },
    { type: 'title', level: 3, text: "À quoi sert le raccourcisseur wa.me de WhatsApp ?" },
    {
      type: 'paragraph',
      html: 'WhatsApp propose une API appelée "Clic pour chatter". Grâce à une URL spéciale, tout utilisateur peut ouvrir une nouvelle conversation avec vous sans avoir besoin de vous ajouter comme contact au préalable, depuis mobile comme depuis WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        "<strong>Plus de conversions :</strong> Un bouton « Contacter via WhatsApp » sur votre boutique réduit la friction et augmente les ventes.",
        "<strong>Message prédéfini :</strong> L'utilisateur appuie juste sur « Envoyer ». Exemple : « Bonjour ! Je viens d'Instagram et veux profiter de l'offre. »",
        "<strong>Code QR automatique :</strong> Téléchargez le QR pour cartes de visite, affiches ou publications sur les réseaux.",
      ],
    },
    { type: 'title', level: 3, text: 'Comment fonctionne la génération du lien ?' },
    {
      type: 'paragraph',
      html: "L'outil concatène le préfixe international et le numéro nettoyé, puis l'ajoute à l'API officielle de WhatsApp avec le paramètre de message converti via <em>url-encoding</em>.",
    },
    {
      type: 'code',
      ariaLabel: 'Format URL WhatsApp',
      code: 'https://wa.me/33XXXXXXXXX\nhttps://wa.me/33XXXXXXXXX?text=Bonjour%20%21%20Je%20souhaite...',
    },
    { type: 'title', level: 3, text: 'Confidentialité garantie et traitement local' },
    {
      type: 'paragraph',
      html: 'Toute la construction du lien se fait dans votre navigateur via JavaScript. Aucun serveur n\'enregistre, ne sauvegarde ni ne lit les numéros de téléphone ou les messages que vous saisissez. Votre confidentialité est totalement protégée.',
    },
    {
      type: 'tip',
      title: 'Importance du préfixe international',
      html: 'Pour que WhatsApp achemine correctement le message, l\'indicatif de pays est obligatoire. Pour la France c\'est le <strong>33</strong>, suivi du numéro à 9 chiffres (sans le 0 initial), sans espace ni symbole +. Le résultat final serait par exemple <code>336XXXXXXXX</code>.',
    },
  ],
};
