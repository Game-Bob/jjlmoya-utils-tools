import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Wat gebeurt er als ik met een voertuig zonder milieusticker een Lage-Emissiezone (ZBE) in Spanje inrijd?',
    answer: 'Als u een ZBE in een grote Spaanse stad inrijdt met een voertuig dat geen milieusticker heeft en geen speciale ontheffing, krijgt u een boete voor een ernstige overtreding, die meestal 200 euro bedraagt.',
  },
  {
    question: 'Moet ik de fysieke DGT-sticker op mijn voorruit plakken?',
    answer: 'De DGT adviseert om deze te tonen, maar boetes voor het niet doen hiervan worden door elke lokale autoriteit vastgesteld. In Madrid is het verplicht, terwijl in andere steden de handhaving volledig afhankelijk is van camera\'s voor automatische kentekenplaatherkenning.',
  },
  {
    question: 'Mijn diesel is geregistreerd voor 2006, maar de technische fiche zegt Euro 4. Kan ik een sticker krijgen?',
    answer: 'Ja. Als de voertuiggegevens bij de verkeersautoriteiten alleen de registratiedatum weerspiegelen, kunt u bij een officiële dealer een certificaat van de fabrikant aanvragen en dit overleggen aan de verkeersdienst om uw classificatie te corrigeren.',
  },
  {
    question: 'Wat betekent de C-sticker (Groen) voor auto\'s in Spanje in 2025?',
    answer: 'In de meeste ZBE\'s kunt u nog steeds vrij rijden, maar de C-sticker beperkt het parkeren op straat. U moet gebruikmaken van ondergrondse of geautoriseerde parkeerplaatsen in de buurt van de ZBE-grenzen.',
  },
];

const howToData = [
  { name: 'Selecteer uw voertuigtype', text: 'Kies of uw voertuig een auto of bestelwagen, een motorfiets of een zwaar voertuig is. Elke categorie heeft een andere classificatielogica onder de Spaanse verkeersregels.' },
  { name: 'Kies het brandstof- of energietype', text: 'Elektrisch, plug-in hybride, conventionele hybride, gas, benzine of diesel leiden allemaal tot verschillende stickerresultaten. De drempelwaarde voor het bereik van plug-in hybrides is 40 km.' },
  { name: 'Voer het registratiejaar of de Euro-norm in', text: 'Voor verbrandingsvoertuigen is de Euro-norm de beslissende factor. De registratiedatum op de technische fiche geeft een betrouwbare benadering van de norm.' },
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
  name: 'Hoe u de Spaanse DGT-milieusticker voor uw voertuig simuleert',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Spaanse DGT Milieusticker Simulator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ontdek welke Spaanse DGT-milieusticker op uw voertuig van toepassing is op basis van type, brandstof en registratiejaar. Gratis tool ter voorbereiding op Lage-Emissiezones in Spanje.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Voertuigtype',
  vehicleCar: 'Auto / Bestelwagen',
  vehicleMoto: 'Motorfiets',
  vehicleHeavy: 'Vrachtwagen / Bus',
  errVehicle: 'Selecteer een voertuigtype',

  step2Label: '2. Brandstof of Energie',
  fuelElectric: '100% Elektrisch / Brandstofcel',
  fuelPhevHigh: 'Plug-in Hybride (>40 km)',
  fuelPhevLow: 'Plug-in Hybride (<40 km)',
  fuelHybridGas: 'Hybride (HEV) of Gas',
  fuelGasoline: 'Benzine',
  fuelDiesel: 'Diesel',
  errFuel: 'Selecteer een brandstof- of energietype',

  step3Label: '3. Euro-norm of Registratiejaar',
  yearPre2000: 'Vóór 2000',
  year20002005: '2000 tot 2005',
  year20062013: '2006 tot 2013',
  yearPost2014: '2014 of later',
  errYear: 'Selecteer de registratieperiode',
  helpText: 'Bij twijfel heeft de Euro-norm op uw technische fiche voorrang op de registratiedatum.',

  submitBtn: 'Controleer mijn sticker',

  resultTitle: 'Toegewezen Sticker',

  badge0Label: 'Zero Emissie Sticker',
  badge0Letter: '0',
  badge0Sub: 'EMISSIES',
  badge0Desc: 'Voertuigen met maximale efficiëntie. Ze genieten van onbeperkte toegang tot Lage-Emissiezones (ZBE) in Spanje en brede belastingvrijstellingen.',

  badgeEcoLabel: 'ECO Sticker',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Voertuigen met een lage uitstoot, zoals hybrides en auto\'s op gas. Geeft toegang tot de meeste ZBE\'s en biedt kortingen in gereguleerde parkeerzones.',

  badgeCLabel: 'C Sticker',
  badgeCLetter: 'C',
  badgeCDesc: 'Recente verbrandingsvoertuigen met een hoge Euro-norm. Vrij rijden, maar onderworpen aan parkeerbeperkingen in bepaalde ZBE-gebieden.',

  badgeBLabel: 'B Sticker',
  badgeBLetter: 'B',
  badgeBDesc: 'Oudere verbrandingsvoertuigen. Onderworpen aan grotere toegangs- en parkeerbeperkingen in Spaanse steden.',

  badgeALabel: 'Geen Sticker',
  badgeALetter: 'GEEN',
  badgeASub: 'STICKER',
  badgeADesc: 'Zeer vervuilende voertuigen zonder recht op een sticker. Ze worden geleidelijk uitgesloten van stadscentra en Lage-Emissiezones in heel Spanje.',

  warningText: 'Controleer het resultaat altijd op de officiële DGT-website aan de hand van uw kentekenplaat, vooral in het geval van administratieve onjuistheden.',
  resetBtn: 'Nieuwe Simulatie',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'milieusticker-simulator-spanje',
  title: 'Milieusticker Simulator Spanje',
  description: 'Ontdek gratis welke Spaanse DGT-milieusticker van toepassing is op uw auto, motor of bestelwagen voor Lage-Emissiezones (ZBE) in Spanje.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'DGT-regelgeving over klimaatverandering en verkeer (Spaans)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Spaanse Klimaatwet en Lage-Emissiezones (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Wat is de Spaanse DGT-milieusticker?' },
    {
      type: 'paragraph',
      html: 'De <strong>Spaanse DGT-milieusticker</strong> (distintivo ambiental) is een voertuigclassificatiesysteem dat in Spanje is ingevoerd om de minst vervuilende voertuigen een voorkeursbehandeling te geven. Het wordt voornamelijk gebruikt om de toegang tot Lage-Emissiezones (ZBE) te controleren in Spaanse steden met meer dan 50.000 inwoners.',
    },
    { type: 'title', level: 3, text: 'Stickertypes en hun voordelen in Spanje' },
    {
      type: 'list',
      items: [
        '<strong>Zero Emissie Sticker:</strong> Voor puur elektrische voertuigen, plug-in hybrides met een elektrisch bereik van meer dan 40 km en waterstofbrandstofcellen. Onbeperkte toegang tot ZBE\'s en belastingvrijstellingen.',
        '<strong>ECO Sticker:</strong> Conventionele hybrides, LPG, CNG en plug-in hybrides met een bereik van minder dan 40 km. Brede toegang tot verboden zones en parkeerkortingen.',
        '<strong>C Sticker:</strong> Benzine Euro 4 of later, Diesel Euro 6. Vrij rijden, maar er gelden parkeerbeperkingen op straat in de buurt van ZBE\'s.',
        '<strong>B Sticker:</strong> Benzine Euro 3, Diesel Euro 4 of 5. Toenemende beperkingen en incidentele inrijverboden.',
        '<strong>Geen Sticker (Categorie A):</strong> Oudere of meer vervuilende voertuigen die sinds 2024 geleidelijk worden geweerd uit Spaanse stadscentra.',
      ],
    },
    { type: 'title', level: 3, text: 'Lage-Emissiezones in Spaanse steden' },
    {
      type: 'paragraph',
      html: 'De uitrol van de ZBE volgt de Spaanse Klimaatwet, die gemeenten boven bepaalde bevolkingsdrempels verplicht deze in te stellen. Bekende voorbeelden zijn <em>Madrid 360</em> en <em>Barcelona\'s Superilles</em>, waar het inrijden zonder ten minste een B-sticker kan leiden tot automatische boetes via camera\'s voor kentekenplaatherkenning.',
    },
    {
      type: 'tip',
      title: 'Hoe u de fysieke sticker in Spanje krijgt',
      html: 'Als de simulator bevestigt dat u recht hebt op een sticker, kunt u de fysieke sticker voor ongeveer 5 euro kopen bij elk kantoor van Correos (postkantoor), geautoriseerde werkplaatsen of verkeersbureaus. Neem uw voertuigbewijs mee.',
    },
  ],
};
