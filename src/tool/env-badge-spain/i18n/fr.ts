import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Que se passe-t-il si je circule sans vignette dans une zone à faibles émissions (ZBE) en Espagne ?',
    answer: 'Si vous pénétrez dans une ZBE d\'une grande ville espagnole avec un véhicule sans vignette environnementale et sans autorisation exceptionnelle, vous recevrez une amende pour infraction grave, généralement de 200 euros.',
  },
  {
    question: 'Dois-je obligatoirement afficher la vignette physique de la DGT sur mon pare-brise ?',
    answer: 'La DGT recommande de l\'afficher, mais l\'amende pour ne pas la porter est de compétence municipale. À Madrid elle est indispensable, tandis que dans d\'autres villes le contrôle repose entièrement sur la lecture automatique des plaques d\'immatriculation.',
  },
  {
    question: 'Mon diesel est d\'avant 2006 mais ma fiche technique indique Euro 4. Puis-je obtenir une vignette ?',
    answer: 'Oui. Si la base de données de la DGT vous classe uniquement par date d\'immatriculation, vous pouvez demander un certificat du fabricant via un concessionnaire officiel et le présenter à la DGT pour corriger votre classification.',
  },
  {
    question: 'À quoi sert la vignette C (Verte) pour les voitures en Espagne en 2025 ?',
    answer: 'Dans la plupart des ZBE, vous pouvez circuler librement, mais la vignette C limite le stationnement en surface, vous obligeant à utiliser des parkings souterrains ou agréés autour des périmètres ZBE.',
  },
];

const howToData = [
  { name: 'Sélectionnez le type de véhicule', text: 'Choisissez si votre véhicule est une voiture ou une camionnette, une moto ou un poids lourd. Chaque catégorie a une logique de classification différente selon la réglementation espagnole.' },
  { name: 'Indiquez le carburant ou le type d\'énergie', text: 'Électrique, hybride rechargeable, hybride classique, gaz, essence ou diesel aboutissent à des vignettes différentes. Le seuil pour les hybrides rechargeables est de 40 km d\'autonomie.' },
  { name: 'Entrez l\'année d\'immatriculation ou la norme Euro', text: 'Pour les véhicules thermiques, la norme Euro est le facteur décisif. La date d\'immatriculation sur la carte grise donne une bonne approximation de la norme applicable.' },
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
  name: 'Comment simuler la vignette environnementale espagnole DGT de votre véhicule',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulateur de Vignette Environnementale Espagnole DGT',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Découvrez quelle vignette environnementale espagnole DGT correspond à votre véhicule selon son type, son carburant et son année d\'immatriculation. Outil gratuit pour les zones à faibles émissions en Espagne.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Type de Véhicule',
  vehicleCar: 'Voiture / Camionnette',
  vehicleMoto: 'Moto',
  vehicleHeavy: 'Camion / Bus',
  errVehicle: 'Veuillez sélectionner un type de véhicule',

  step2Label: '2. Carburant ou Énergie',
  fuelElectric: '100 % Électrique / Pile',
  fuelPhevHigh: 'Hybride Rechargeable (>40 km)',
  fuelPhevLow: 'Hybride Rechargeable (<40 km)',
  fuelHybridGas: 'Hybride (HEV) ou Gaz',
  fuelGasoline: 'Essence',
  fuelDiesel: 'Diesel',
  errFuel: 'Veuillez sélectionner un carburant ou une énergie',

  step3Label: '3. Norme Euro ou Année d\'immatriculation',
  yearPre2000: 'Avant 2000',
  year20002005: '2000 à 2005',
  year20062013: '2006 à 2013',
  yearPost2014: '2014 ou après',
  errYear: 'Veuillez sélectionner la période d\'immatriculation',
  helpText: 'En cas de doute, la norme Euro indiquée sur votre carte grise prévaut sur la date d\'immatriculation.',

  submitBtn: 'Vérifier ma vignette',

  resultTitle: 'Vignette Attribuée',

  badge0Label: 'Vignette 0 Émission',
  badge0Letter: '0',
  badge0Sub: 'ÉMISSIONS',
  badge0Desc: 'Véhicules à efficacité maximale. Ils bénéficient d\'un accès illimité aux zones à faibles émissions (ZBE) en Espagne et d\'exonérations fiscales étendues.',

  badgeEcoLabel: 'Vignette ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Véhicules à faibles émissions comme les hybrides et les voitures au gaz. Accès à la plupart des ZBE espagnoles et réductions sur les parkings réglementés.',

  badgeCLabel: 'Vignette C',
  badgeCLetter: 'C',
  badgeCDesc: 'Véhicules thermiques récents avec une norme Euro élevée. Circulation libre mais restrictions de stationnement en surface dans certaines zones ZBE.',

  badgeBLabel: 'Vignette B',
  badgeBLetter: 'B',
  badgeBDesc: 'Véhicules thermiques plus anciens. Restrictions croissantes d\'accès et de stationnement dans les villes espagnoles.',

  badgeALabel: 'Sans Vignette',
  badgeALetter: 'NO',
  badgeASub: 'BADGE',
  badgeADesc: 'Véhicules très polluants sans droit à une vignette. Progressivement exclus des centres urbains et de toutes les zones à faibles émissions en Espagne.',

  warningText: 'Vérifiez toujours sur le site officiel de la DGT avec votre plaque d\'immatriculation pour confirmer le résultat, en cas de particularités ou d\'erreur administrative.',
  resetBtn: 'Nouvelle Simulation',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'simulateur-vignette-crit-air-espagne',
  title: 'Simulateur de Vignette Environnementale Espagne',
  description: 'Découvrez gratuitement quelle vignette environnementale DGT espagnole correspond à votre voiture, moto ou camionnette pour les zones à faibles émissions (ZBE) en Espagne.',
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Réglementation DGT sur le changement climatique et la circulation (espagnol)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Loi espagnole sur le changement climatique et les zones à faibles émissions (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Qu\'est-ce que la vignette environnementale espagnole DGT ?' },
    {
      type: 'paragraph',
      html: 'La <strong>vignette environnementale espagnole DGT</strong> (distintivo ambiental) est un système de classification des véhicules introduit en Espagne pour favoriser les moins polluants. Elle est principalement utilisée pour réguler l\'accès aux zones à faibles émissions (ZBE) dans les villes espagnoles de plus de 50 000 habitants.',
    },
    { type: 'title', level: 3, text: 'Types de vignettes et leurs avantages en Espagne' },
    {
      type: 'list',
      items: [
        '<strong>Vignette 0 Émission :</strong> Pour les véhicules 100 % électriques, les hybrides rechargeables de plus de 40 km et les piles à combustible. Accès illimité aux ZBE et exonérations fiscales.',
        '<strong>Vignette ECO :</strong> Hybrides classiques, GPL, GNC et hybrides rechargeables de moins de 40 km. Large accès aux zones restreintes et réductions de stationnement.',
        '<strong>Vignette C :</strong> Essence Euro 4 ou plus récent, diesel Euro 6. Circulation libre mais restrictions de stationnement en surface autour des ZBE.',
        '<strong>Vignette B :</strong> Essence Euro 3, diesel Euro 4 ou 5. Restrictions croissantes et interdictions ponctuelles dans les villes espagnoles.',
        '<strong>Sans Vignette (Catégorie A) :</strong> Véhicules anciens ou très polluants progressivement exclus des centres urbains espagnols depuis 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Zones à faibles émissions dans les villes espagnoles' },
    {
      type: 'paragraph',
      html: 'La mise en place des ZBE découle de la loi espagnole sur le changement climatique. Des exemples emblématiques sont <em>Madrid 360</em> et les <em>Superilles de Barcelone</em>, où circuler sans au moins une vignette B peut entraîner des amendes automatiques via des caméras de reconnaissance de plaques.',
    },
    {
      type: 'tip',
      title: 'Comment obtenir la vignette physique en Espagne',
      html: 'Si le simulateur confirme que vous avez droit à une vignette, vous pouvez l\'acheter pour environ 5 euros dans n\'importe quelle agence Correos (la poste espagnole), des ateliers agréés ou des bureaux de la DGT. Munissez-vous des documents de votre véhicule.',
    },
  ],
};
