import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Comment cet outil améliore-t-il mon référencement SEO ?',
    answer: 'En analysant la densité des mots-clés et la lisibilité des phrases, vous vous assurez que votre contenu est compréhensible pour les utilisateurs et pertinent pour les moteurs de recherche, en évitant les pénalités de sur-optimisation.',
  },
  {
    question: "Quels éléments HTML l'analyse technique vérifie-t-elle ?",
    answer: "Elle vérifie l'existence et l'unicité de la balise H1, la présence de sous-titres H2/H3 et les attributs alt sur les images.",
  },
  {
    question: 'Mon contenu est-il stocké sur un serveur ?',
    answer: "Non. L'analyse s'effectue à 100 % localement dans votre navigateur. Votre contenu ne quitte jamais votre ordinateur.",
  },
  {
    question: 'Est-il compatible avec les critères Yoast SEO ?',
    answer: "Oui, nous appliquons des critères similaires à Yoast : longueur des phrases, distribution des paragraphes et hiérarchie des titres.",
  },
];

const howToData = [
  { name: 'Écrivez ou collez votre texte', text: 'Entrez le contenu que vous souhaitez analyser dans la zone de texte principale.' },
  { name: "Consultez la checklist d'optimisation", text: 'Vérifiez les alertes de longueur, de lisibilité et de densité de mots-clés dans le panneau latéral.' },
  { name: 'Analysez le HTML technique', text: "Passez à l'onglet d'analyse technique pour vérifier les balises H1, les alts d'images et la structure des métadonnées." },
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
  name: 'Comment optimiser le contenu pour le SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimiseur de Contenu SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: "Analysez la densité des mots-clés, la lisibilité et la structure HTML technique de vos textes en temps réel, sans envoyer de données à un serveur.",
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Analyse de Texte',
  tabHtml: 'Analyse HTML Technique',
  textareaPlaceholder: 'Écrivez votre texte ou collez votre code HTML ici...',
  statsChars: 'Caractères',
  statsWords: 'Mots',
  statsReading: 'Lecture',
  statsSentences: 'Phrases',
  checklistTitle: "Checklist d'Optimisation",
  keywordsTitle: 'Densité de Mots-Clés',
  technicalTitle: 'Analyse HTML Technique',
  h1Label: 'H1 Détectés',
  linksLabel: 'Liens (a)',
  imgsLabel: 'Images (img)',
  altsLabel: 'Alts manquants',
  emptyState: 'Aucune donnée',
  analyzing: 'Analyse...',
  checkInsufficient: 'Longueur insuffisante (< 300 mots)',
  checkPillar: 'Excellent contenu pilier (> 900 mots)',
  checkGoodLength: 'Bonne longueur pour le SEO',
  checkLongSentences: 'Trop de phrases longues (> 25 % du texte)',
  checkGoodReadability: 'Lisibilité des phrases optimale',
  checkLongParagraphs: 'Divisez les paragraphes trop longs (> 150 mots)',
  checkMissingH1: 'Balise H1 manquante',
  checkMultipleH1: 'Plusieurs balises H1 détectées',
  checkMissingH2: 'Sous-titres (H2) manquants',
  checkMissingTitle: 'Balise title méta manquante',
  stopWords: JSON.stringify(['le', 'la', 'les', 'un', 'une', 'des', 'et', 'ou', 'mais', 'en', 'de', 'du', 'au', 'aux', 'par', 'pour', 'avec', 'sans', 'sur', 'que', 'qui', 'si', 'non', 'est', 'sont', 'ce', 'cet', 'cette', 'ces', 'il', 'elle', 'ils', 'elles', 'nous', 'vous', 'je', 'me', 'tu', 'se', 'y', 'dont', 'pas', 'plus', 'ne']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'optimiseur-contenu-seo',
  title: 'Optimiseur de Contenu SEO',
  description: "Analysez la densité des mots-clés, la lisibilité et la structure HTML technique de vos textes en temps réel. Outil SEO gratuit et privé.",
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Guide de démarrage SEO de Google', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { name: 'Critères de lisibilité Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Optimiseur de Contenu SEO : Mots-Clés, Lisibilité et Structure' },
    {
      type: 'paragraph',
      html: "La qualité du contenu ne se mesure plus seulement aux mots-clés inclus, mais à la façon dont vous structurez l'information pour qu'elle soit compréhensible à la fois par les humains et les robots de Google. Notre outil d'<strong>analyse SEO en temps réel</strong> vous offre un contrôle total sur la densité des mots-clés, la lisibilité des paragraphes et les éléments techniques HTML fondamentaux.",
    },
    { type: 'title', level: 3, text: 'Densité de Mots-Clés et Pertinence Sémantique' },
    {
      type: 'paragraph',
      html: 'La <strong>densité de mots-clés</strong> indique la fréquence d\'apparition d\'un terme par rapport au reste du texte. Un excès déclenche les filtres de <em>keyword stuffing</em>, tandis qu\'une densité trop faible peut rendre difficile l\'identification du sujet principal de votre article par les moteurs de recherche.',
    },
    {
      type: 'list',
      items: [
        '<strong>Analyse de pertinence :</strong> Identifiez si les mots les plus répétés correspondent à votre intention de recherche.',
        '<strong>Prévention des pénalités :</strong> Évitez de répéter excessivement des termes qui pourraient paraître indésirables.',
        "<strong>Optimisation sémantique :</strong> Trouvez l'équilibre entre termes techniques et langage naturel.",
      ],
    },
    { type: 'title', level: 3, text: 'Lisibilité à la Manière Yoast' },
    {
      type: 'paragraph',
      html: 'La lisibilité est un facteur de classement indirect mais crucial. Si les utilisateurs quittent la page parce que les paragraphes sont de longs blocs de texte, votre <em>Dwell Time</em> diminuera. L\'analyseur détecte les phrases longues (plus de 20 mots), les paragraphes de plus de 150 mots et vérifie la présence de sous-titres.',
    },
    {
      type: 'tip',
      title: 'Temps de lecture',
      html: 'La plupart des utilisateurs décident de lire un article en moins de 10 secondes. Connaître le temps de lecture estimé (calculé sur une moyenne de 200 mots par minute) aide à réduire le taux de rebond en ajustant les attentes du lecteur.',
    },
    { type: 'title', level: 3, text: 'Analyse HTML Technique' },
    {
      type: 'paragraph',
      html: 'Collez votre code source pour vérifier les éléments clés : unicité du <strong>H1</strong>, présence de sous-titres H2/H3, images sans attribut <code>alt</code> et existence de la balise <code>title</code>. Tout le traitement se fait dans votre navigateur sans envoyer de données à un serveur.',
    },
  ],
};
