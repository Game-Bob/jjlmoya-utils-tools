import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: "Qu'est-ce que la règle de trois simple directe ?",
    answer: "C'est une méthode mathématique pour résoudre des problèmes de proportionnalité entre trois valeurs connues et une inconnue. On l'appelle 'directe' parce que lorsqu'une grandeur augmente, l'autre augmente dans la même proportion.",
  },
  {
    question: 'Quand dois-je utiliser la règle de trois inverse ?',
    answer: "On l'utilise quand les grandeurs sont inversement proportionnelles (si l'une augmente, l'autre diminue). Par exemple : si 2 peintres mettent 5 heures, 4 peintres mettront moins de temps. Notre calculatrice actuelle se concentre sur la proportionnalité directe.",
  },
  {
    question: 'Est-elle précise pour les calculs professionnels ?',
    answer: "Oui. Notre calculatrice utilise une précision en virgule flottante haute fidélité, idéale pour les ajustements de dosage, les échelles de conception graphique, les budgets commerciaux et les conversions de recettes de cuisine.",
  },
  {
    question: 'Comment se calcule-t-elle manuellement ?',
    answer: 'La formule est : (Valeur B * Valeur C) / Valeur A = X. Autrement dit, vous multipliez les valeurs en diagonale et divisez le résultat par la valeur restante.',
  },
];

const howToData = [
  {
    name: 'Identifier la relation de base',
    text: "Saisissez les deux valeurs connues qui forment la proportion initiale (ex. 100km équivalent à 8 litres).",
  },
  {
    name: 'Saisir la troisième valeur',
    text: "Écrivez la nouvelle valeur dont vous souhaitez connaître l'équivalent (ex. si je vais parcourir 250km...).",
  },
  {
    name: 'Obtenir le résultat',
    text: "Le système calculera automatiquement la valeur inconnue (X) en temps réel sans avoir besoin d'appuyer sur des boutons.",
  },
  {
    name: 'Copier ou réinitialiser',
    text: "Vous pouvez copier le résultat directement dans le presse-papiers ou vider les champs pour effectuer un nouveau calcul.",
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
  name: 'Comment utiliser la calculatrice de règle de trois',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculatrice de règle de trois simple',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: "Résolvez des proportions mathématiques instantanément. L'outil définitif pour calculer des quantités, des recettes, des remises et des conversions.",
};

const ui: RuleOfThreeUI = {
  labelA: "Si j'ai...",
  labelB: 'Cela équivaut à...',
  labelC: "Et maintenant j'ai...",
  labelX: 'Résultat (X)',
  hintA: 'Quantité initiale',
  hintB: 'Valeur connue',
  hintC: 'Nouvelle quantité',
  hintX: 'Valeur calculée',
  separatorIsTo: 'Est à',
  separatorWillBe: 'Sera à',
  copyTitle: 'Copier le résultat',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regle-de-trois',
  title: 'Calculatrice de règle de trois simple',
  description: "Résolvez des proportions mathématiques instantanément. L'outil définitif pour calculer des quantités, des recettes, des remises et des conversions.",
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Proportionnalité (mathématiques) — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Proportionnalit%C3%A9' },
    { name: 'Ratios et proportions — Khan Academy', url: 'https://fr.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'À quoi sert la règle de trois ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La règle de trois simple directe est le « couteau suisse » des mathématiques. Elle permet de résoudre des problèmes où trois données sont connues et on cherche la quatrième. Si vous connaissez la relation entre <strong>A et B</strong>, et que vous avez une nouvelle valeur <strong>C</strong>, la calculatrice trouve <strong>X</strong> instantanément.",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Cuisine et recettes',
          description: 'Si la recette demande 500g de farine pour 4 personnes, combien en faut-il pour 7 ?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Achats et prix',
          description: 'Si un pack de 3 boîtes coûte 2,50€, combien me coûteraient 10 boîtes ?',
          points: ['(2,50 × 10) ÷ 3 = 8,33€'],
        },
        {
          icon: 'mdi:car',
          title: 'Voyages et distances',
          description: "Si je mets 45 min pour faire 60km, combien de temps me faudra-t-il pour faire 140km ?",
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design et écrans',
          description: "Si l'image mesure 1920px de large et je veux la réduire à 800px en conservant les proportions...",
          points: ['(HauteurOriginale × 800) ÷ 1920 = NouvelleHauteur'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Comment fonctionne la formule ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La formule est toujours la même : <strong>multiplier les valeurs en diagonale et diviser par celle qui reste</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Formule de la règle de trois simple directe',
    },
    {
      type: 'paragraph',
      html: 'Dans la calculatrice : on multiplie la valeur <strong>B</strong> par la valeur <strong>C</strong> et on divise par <strong>A</strong>. Le résultat est <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Utilisations professionnelles et quotidiennes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Au-delà des mathématiques scolaires, la règle de trois est partout : en pharmacie pour calculer les dosages selon le poids corporel, en photographie pour calculer les temps d'exposition, en finance pour calculer les variations en pourcentage, ou en imprimerie pour mettre à l'échelle les dimensions.",
    },
    {
      type: 'tip',
      title: 'Astuce de précision',
      html: "Le résultat est affiché avec jusqu'à 4 décimales significatives. Si vous travaillez avec de l'argent ou des mesures exactes, pensez à arrondir selon le contexte : l'euro à 2 décimales, les pixels en entiers.",
    },
  ],
};
