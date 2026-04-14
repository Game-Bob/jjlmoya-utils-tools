import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'What happens if I drive a vehicle without a badge into a Low Emission Zone (ZBE) in Spain?',
    answer: 'If you enter a ZBE in a major Spanish city with a vehicle that has no environmental badge and no special exemption, you will receive a fine for a serious infraction, usually amounting to 200 euros.',
  },
  {
    question: 'Do I have to display the physical DGT sticker on my windscreen?',
    answer: 'The DGT recommends displaying it, but fines for not doing so are set by each local authority. In Madrid it is mandatory, while in other cities enforcement relies entirely on automatic number plate recognition cameras.',
  },
  {
    question: 'My diesel was registered before 2006 but the technical sheet says Euro 4. Can I get a badge?',
    answer: 'Yes. If the vehicle data held by Traffic authorities only reflects the registration date, you can request a certificate from the manufacturer through an official dealer and present it to the Traffic office to correct your classification.',
  },
  {
    question: 'What does the C badge (Green) mean for cars in Spain in 2025?',
    answer: 'In most ZBEs you can still drive freely, but the C badge restricts on-street parking. You will be required to use underground or authorised car parks near ZBE perimeters.',
  },
];

const howToData = [
  { name: 'Select your vehicle type', text: 'Choose whether your vehicle is a car or van, a motorbike or a heavy vehicle. Each category has a different classification logic under Spanish traffic regulations.' },
  { name: 'Choose the fuel or energy type', text: 'Electric, plug-in hybrid, conventional hybrid, gas, petrol or diesel all lead to different badge outcomes. The range threshold for plug-in hybrids is 40 km.' },
  { name: 'Enter the registration year or Euro standard', text: 'For combustion vehicles, the Euro standard is the decisive factor. The registration date on the technical sheet gives a reliable approximation of the standard.' },
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
  name: 'How to simulate the Spanish DGT environmental badge for your vehicle',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Spanish DGT Environmental Badge Simulator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Find out which Spanish DGT environmental badge applies to your vehicle based on its type, fuel and registration year. Free tool to prepare for Low Emission Zones in Spain.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Vehicle Type',
  vehicleCar: 'Car / Van',
  vehicleMoto: 'Motorbike',
  vehicleHeavy: 'Truck / Bus',
  errVehicle: 'Please select a vehicle type',

  step2Label: '2. Fuel or Energy',
  fuelElectric: '100% Electric / Fuel Cell',
  fuelPhevHigh: 'Plug-in Hybrid (>40 km)',
  fuelPhevLow: 'Plug-in Hybrid (<40 km)',
  fuelHybridGas: 'Hybrid (HEV) or Gas',
  fuelGasoline: 'Petrol',
  fuelDiesel: 'Diesel',
  errFuel: 'Please select a fuel or energy type',

  step3Label: '3. Euro Standard or Registration Year',
  yearPre2000: 'Before 2000',
  year20002005: '2000 to 2005',
  year20062013: '2006 to 2013',
  yearPost2014: '2014 or later',
  errYear: 'Please select the registration period',
  helpText: 'If in doubt, the Euro standard shown on your technical sheet takes precedence over the registration date.',

  submitBtn: 'Check My Badge',

  resultTitle: 'Assigned Badge',

  badge0Label: 'Zero Emissions Badge',
  badge0Letter: '0',
  badge0Sub: 'EMISSIONS',
  badge0Desc: 'Maximum efficiency vehicles. They enjoy unrestricted access to Low Emission Zones (ZBE) in Spain and broad tax exemptions.',

  badgeEcoLabel: 'ECO Badge',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Low-emission vehicles such as hybrids and gas-powered cars. Allows access to most ZBEs and provides discounts in regulated parking zones.',

  badgeCLabel: 'C Badge',
  badgeCLetter: 'C',
  badgeCDesc: 'Recent combustion vehicles with a high Euro standard. Free circulation but subject to parking restrictions in certain ZBE areas.',

  badgeBLabel: 'B Badge',
  badgeBLetter: 'B',
  badgeBDesc: 'Older combustion vehicles. Subject to greater access and parking restrictions in Spanish cities.',

  badgeALabel: 'No Badge',
  badgeALetter: 'NO',
  badgeASub: 'BADGE',
  badgeADesc: 'Highly polluting vehicles with no entitlement to a badge. They are progressively excluded from urban centres and Low Emission Zones across Spain.',

  warningText: 'Always verify on the official DGT website using your number plate to confirm the result, especially in case of administrative discrepancies.',
  resetBtn: 'New Simulation',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'environmental-badge-simulator-spain',
  title: 'Environmental Badge Simulator Spain',
  description: 'Find out for free which Spanish DGT environmental badge applies to your car, motorbike or van for Low Emission Zones (ZBE) in Spain.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'DGT Climate Change and Traffic Regulations (Spanish)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Spanish Climate Change Act and Low Emission Zones (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'What is the Spanish DGT environmental badge?' },
    {
      type: 'paragraph',
      html: 'The <strong>Spanish DGT environmental badge</strong> (distintivo ambiental) is a vehicle classification system introduced in Spain to give preferential treatment to the least polluting vehicles. It is mainly used to control access to Low Emission Zones (ZBE) in Spanish cities with more than 50,000 inhabitants.',
    },
    { type: 'title', level: 3, text: 'Badge types and their benefits in Spain' },
    {
      type: 'list',
      items: [
        '<strong>Zero Emissions Badge:</strong> For pure electric vehicles, plug-in hybrids with over 40 km electric range and hydrogen fuel cells. Unlimited access to ZBEs and tax exemptions.',
        '<strong>ECO Badge:</strong> Conventional hybrids, LPG, CNG and plug-in hybrids with under 40 km range. Wide access to restricted zones and parking discounts.',
        '<strong>C Badge:</strong> Euro 4 petrol or later, Euro 6 diesel. Free circulation but on-street parking restrictions apply near ZBEs.',
        '<strong>B Badge:</strong> Euro 3 petrol, Euro 4 or 5 diesel. Increasing restrictions and occasional entry bans.',
        '<strong>No Badge (Category A):</strong> Older or more polluting vehicles progressively excluded from Spanish city centres since 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Low Emission Zones in Spanish cities' },
    {
      type: 'paragraph',
      html: 'The ZBE rollout follows the Spanish Climate Change Act, which requires municipalities above certain population thresholds to create them. Notable examples are <em>Madrid 360</em> and <em>Barcelona\'s Superilles</em>, where entering without at least a B badge can result in automatic fines issued via number plate recognition cameras.',
    },
    {
      type: 'tip',
      title: 'How to get the physical sticker in Spain',
      html: 'If the simulator confirms you are entitled to a badge, you can buy the physical sticker for around 5 euros at any Correos (post office) branch, authorised workshops or Traffic offices. Bring your vehicle registration documents.',
    },
  ],
};
