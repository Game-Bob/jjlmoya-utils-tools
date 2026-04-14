import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Comment calculer la largeur en pixels d\'un texte en ligne ?',
    answer: 'Collez votre texte dans le champ de saisie, configurez la police et la taille, et l\'outil utilisera automatiquement l\'API Canvas du navigateur pour vous renvoyer la largeur exacte en pixels.',
  },
  {
    question: 'Pourquoi la largeur en pixels varie-t-elle selon les polices ?',
    answer: "La plupart des polices sont proportionnelles, ce qui signifie que chaque caractère a une largeur différente. Par exemple, un 'M' majuscule est toujours plus large qu'un 'i' minuscule dans une police sans-serif standard.",
  },
  {
    question: 'Mesurer les caractères est-il identique à mesurer les pixels ?',
    answer: 'Non. Mesurer les caractères donne la longueur de la chaîne, tandis que mesurer les pixels donne l\'espace visuel occupé. C\'est essentiel pour éviter que le texte ne déborde de son conteneur.',
  },
  {
    question: 'Puis-je utiliser n\'importe quelle police Google Fonts ?',
    answer: 'Oui, à condition que la police soit installée sur votre système ou chargée sur la page actuelle, l\'outil mesurera ses dimensions avec précision.',
  },
  {
    question: 'Est-il sûr de traiter des textes privés ou des extraits de code ?',
    answer: 'Oui. La calculatrice fonctionne entièrement en local. Aucune donnée n\'est envoyée à des serveurs externes, garantissant une confidentialité totale.',
  },
];

const howToData = [
  { name: 'Saisir le texte', text: 'Tapez ou collez le texte que vous souhaitez mesurer dans la zone de saisie.' },
  { name: 'Configurer la police', text: 'Indiquez la famille de polices, la taille en pixels, la graisse et si elle est en italique.' },
  { name: 'Lire le résultat', text: 'La largeur en pixels et le nombre de caractères se mettent à jour en temps réel.' },
  { name: 'Copier la valeur', text: 'Cliquez sur "Copier la largeur" pour enregistrer le nombre de pixels dans le presse-papiers.' },
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
  name: 'Comment mesurer la largeur d\'un texte en pixels',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculateur de Largeur de Texte en Pixels',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calculez avec précision la largeur en pixels de n\'importe quel texte selon sa police, sa taille et son style.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Texte à mesurer',
  textPlaceholder: 'Saisissez ou collez ici le texte que vous souhaitez mesurer...',
  defaultText: 'Bonjour Monde',
  fontLabel: 'Police',
  sizeLabel: 'Taille (px)',
  weightLabel: 'Graisse',
  italicLabel: 'Italique',
  widthLabel: 'Largeur (pixels)',
  charsLabel: 'Caractères',
  previewLabel: 'Aperçu visuel',
  copyBtn: 'Copier la largeur',
  resetBtn: 'Réinitialiser',
  copyDone: 'Largeur copiée',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'calculateur-largeur-pixel-texte',
  title: 'Calculateur de Largeur de Texte en Pixels',
  description: 'Calculez avec précision l\'espace horizontal occupé par votre texte en pixels. Outil gratuit pour designers et développeurs.',
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'W3C : Module CSS Text niveau 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts : Comprendre les polices variables', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Mesurez la largeur exacte en pixels de n\'importe quel texte' },
    {
      type: 'paragraph',
      html: 'Votre texte déborde-t-il de son conteneur ? Besoin de connaître l\'espace occupé par un titre avant de le rendre ? L\'<strong>API Canvas du navigateur</strong> permet de mesurer la largeur exacte de n\'importe quelle chaîne de texte avec une précision au pixel près, sans avoir à la rendre dans le DOM.',
    },
    { type: 'title', level: 3, text: 'Pourquoi compter les caractères ne suffit pas' },
    {
      type: 'paragraph',
      html: 'Les polices modernes sont <strong>proportionnelles</strong> : chaque glyphe a une largeur différente. Un "W" peut occuper trois fois plus de place qu\'un "i". Le nombre de caractères ne vous dit rien sur l\'espace visuel réel occupé par le texte.',
    },
    {
      type: 'list',
      items: [
        '<strong>Design web :</strong> Évitez les débordements dans les boutons, étiquettes et cellules de tableau.',
        '<strong>SEO :</strong> Les moteurs de recherche tronquent les titres en pixels, pas en caractères.',
        '<strong>Canvas et PDF :</strong> Calculez la position exacte avant de dessiner du texte par programmation.',
        '<strong>Infobulles et bulles :</strong> Dimensionnez dynamiquement les conteneurs selon le texte intérieur.',
      ],
    },
    { type: 'title', level: 3, text: 'Comment fonctionne la mesure avec Canvas' },
    {
      type: 'paragraph',
      html: 'La méthode <code>ctx.measureText()</code> de l\'API Canvas retourne un objet <code>TextMetrics</code> avec une propriété <code>width</code> reflétant la largeur en pixels CSS avec la police active. Cet outil configure le contexte avec votre police, taille, graisse et style avant de mesurer.',
    },
    {
      type: 'code',
      ariaLabel: 'Exemple Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Bonjour Monde').width; // ex. 74.5",
    },
    { type: 'title', level: 3, text: 'Confidentialité et traitement local' },
    {
      type: 'paragraph',
      html: 'Tout le calcul s\'effectue dans votre navigateur. Aucun texte, extrait de code ni donnée privée ne quitte votre appareil.',
    },
    {
      type: 'tip',
      title: 'Polices Google Fonts',
      html: 'Pour mesurer une police Google Fonts avec précision, assurez-vous qu\'elle est chargée sur la page ou installée sur votre système. Sinon le navigateur utilisera une police de substitution et le résultat variera.',
    },
  ],
};
