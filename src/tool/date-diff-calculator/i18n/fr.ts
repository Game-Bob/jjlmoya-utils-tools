import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Cette calculatrice de différence de dates est-elle gratuite ?',
    answer: 'Oui, c\'est un outil 100% gratuit accessible depuis n\'importe quel navigateur sans inscription ni téléchargement.',
  },
  {
    question: 'Comment les années bissextiles sont-elles gérées ?',
    answer: 'L\'outil utilise la chronologie standard JavaScript (UTC), qui gère automatiquement les années bissextiles et le nombre variable de jours dans chaque mois pour un résultat exact.',
  },
  {
    question: 'Puis-je calculer la différence en heures et en minutes aussi ?',
    answer: 'Oui. Les champs de saisie permettent de sélectionner l\'heure exacte. Le résultat donne une décomposition en jours, heures, minutes et secondes, ainsi que les totaux cumulés.',
  },
  {
    question: 'Mes données de dates sont-elles envoyées à un serveur ?',
    answer: 'Non. Tout le traitement est effectué localement dans votre navigateur. Nous ne stockons ni ne recevons aucune information sur les dates que vous calculez.',
  },
];

const howToData = [
  { name: 'Sélectionner la date de début', text: "Saisissez la date et l'heure de départ ou cliquez sur 'Aujourd'hui' pour la fixer instantanément." },
  { name: 'Sélectionner la date de fin', text: "Définissez le moment cible. Utilisez 'Maintenant' pour mesurer le temps écoulé jusqu'à cet instant précis." },
  { name: 'Lire les résultats', text: 'Consultez la décomposition en jours, heures, minutes et secondes, ainsi que les totaux cumulés de semaines et d\'heures.' },
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
  name: 'Comment calculer la différence entre deux dates',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculateur de Différence de Dates',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calculez exactement combien de temps s\'est écoulé entre deux dates ou combien de temps il reste avant un événement.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Date de Début',
  endLabel: 'Date de Fin',
  nowBtn: 'Maintenant',
  todayBtn: "Aujourd'hui",
  tomorrowBtn: 'Demain',
  daysLabel: 'Jours',
  hoursLabel: 'Heures',
  minsLabel: 'Min',
  secsLabel: 'Sec',
  weeksLabel: 'Semaines Totales',
  totalHoursLabel: 'Heures Totales',
  totalMinsLabel: 'Minutes Totales',
  elapsed: 'Temps Écoulé',
  past: 'Temps dans le Passé',
  invalidDates: 'Dates invalides',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'calculateur-difference-dates',
  title: 'Calculateur de Différence de Dates',
  description: 'Calculez exactement combien de temps s\'est écoulé entre deux dates ou combien il reste avant un événement. Outil gratuit avec résultats en jours, heures et minutes.',
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Time and Date : Horloge Mondiale et Convertisseur de Fuseaux Horaires', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia : Histoire du Calendrier Grégorien', url: 'https://fr.wikipedia.org/wiki/Calendrier_gr%C3%A9gorien' },
    { name: 'Wikipedia : Matrice d\'Eisenhower et Gestion du Temps', url: 'https://fr.wikipedia.org/wiki/Matrice_d%27Eisenhower' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculateur de différence de dates en jours, heures et minutes' },
    {
      type: 'paragraph',
      html: 'Calculer la <strong>différence entre deux dates</strong> est l\'une des tâches les plus courantes et sous-estimées, tant dans la vie quotidienne qu\'en milieu professionnel. Que vous planifiiez un lancement de produit, calculiez l\'âge exact d\'une personne ou mesuriez le temps restant avant un événement, disposer d\'un outil précis est essentiel pour une gestion du temps efficace.',
    },
    { type: 'title', level: 3, text: 'À quoi sert la calculatrice de différence de dates ?' },
    {
      type: 'paragraph',
      html: 'L\'utilité de cet outil s\'étend à de nombreux domaines. Dans le monde professionnel, les chefs de projet l\'utilisent pour définir les délais de livraison et suivre l\'avancement des jalons. Dans les contextes juridiques et administratifs, il est indispensable pour calculer les délais de prescription ou la durée des contrats.',
    },
    {
      type: 'list',
      items: [
        '<strong>Planification d\'événements :</strong> Savoir combien de semaines et de jours restent avant un mariage, une conférence ou un voyage.',
        '<strong>Gestion de projet :</strong> Calculer le temps écoulé depuis le début d\'une phase jusqu\'à son achèvement.',
        '<strong>Finance :</strong> Déterminer le nombre de jours pour le calcul des intérêts ou les échéances de factures.',
        '<strong>Ressources Humaines :</strong> Mesurer l\'ancienneté d\'un employé ou les jours de congé accumulés.',
        '<strong>Santé :</strong> Suivre l\'évolution d\'un traitement médical ou le temps de récupération.',
      ],
    },
    { type: 'title', level: 3, text: 'Perception du temps et précision numérique' },
    {
      type: 'paragraph',
      html: 'Nous avons souvent tendance à arrondir le temps. Nous disons "dans un mois" alors qu\'il reste en réalité 27 jours et 14 heures. En utilisant une calculatrice numérique, on élimine la subjectivité et on obtient des données précises pour une prise de décision éclairée.',
    },
    { type: 'title', level: 3, text: 'Jours calendaires et jours ouvrables' },
    {
      type: 'paragraph',
      html: 'Cet outil calcule des <strong>jours calendaires</strong>, incluant les week-ends et jours fériés. Pour le calcul astronomique et civil général, le temps est mesuré en continu. Si vous estimez la durée d\'un projet, rappelez-vous que les jours affichés représentent le calendrier réel complet.',
    },
    { type: 'title', level: 3, text: 'L\'impact du temps sur la productivité' },
    {
      type: 'paragraph',
      html: 'La loi de Parkinson stipule que le travail s\'étend pour remplir le temps disponible. En visualisant exactement combien d\'heures et de minutes restent avant une échéance, les équipes ont tendance à optimiser leurs efforts.',
    },
    {
      type: 'tip',
      title: 'Dates futures et passées',
      html: 'Vous pouvez utiliser la calculatrice pour des dates futures comme passées. Si la date de fin est antérieure à la date de début, le système détecte automatiquement qu\'il s\'agit de temps écoulé dans le passé, en conservant la précision des valeurs absolues.',
    },
  ],
};
