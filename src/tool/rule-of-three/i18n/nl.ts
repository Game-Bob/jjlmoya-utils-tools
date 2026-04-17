import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Wat is de eenvoudige directe regel van drie?',
    answer: 'Het is een wiskundige methode voor het oplossen van evenredigheidsproblemen tussen drie bekende waarden en één onbekende. Het wordt „direct” genoemd omdat wanneer de ene hoeveelheid toeneemt, de andere in dezelfde verhouding toeneemt.',
  },
  {
    question: 'Wanneer moet ik de omgekeerde regel van drie gebruiken?',
    answer: 'Deze wordt gebruikt wanneer de hoeveelheden omgekeerd evenredig zijn (als de ene toeneemt, neemt de andere af). Bijvoorbeeld: als 2 schilders er 5 uur over doen, doen 4 schilders er minder lang over. Onze huidige calculator richt zich op directe evenredigheid.',
  },
  {
    question: 'Is het nauwkeurig genoeg voor professionele berekeningen?',
    answer: 'Ja. Onze calculator maakt gebruik van een hoge precisie, ideaal voor doseringsaanpassingen, schalen in grafisch ontwerp, commerciële budgetten en receptconversies.',
  },
  {
    question: 'Hoe wordt het handmatig berekend?',
    answer: 'De formule is: (Waarde B * Waarde C) / Waarde A = X. Dat wil zeggen, u vermenigvuldigt de diagonale waarden en deelt het resultaat door de resterende waarde.',
  },
];

const howToData = [
  {
    name: 'Identificeer de basisrelatie',
    text: 'Voer de twee bekende waarden in die de initiële verhouding vormen (bijv. 100 km is gelijk aan 8 liter).',
  },
  {
    name: 'Voer de derde waarde in',
    text: 'Voer de nieuwe waarde in waarvan u het equivalent wilt vinden (bijv. als ik 250 km ga reizen...).',
  },
  {
    name: 'Krijg het resultaat',
    text: 'Het systeem berekent de onbekende waarde (X) automatisch in realtime zonder dat u op knoppen hoeft te drukken.',
  },
  {
    name: 'Kopiëren of resetten',
    text: 'U kunt het resultaat rechtstreeks naar het klembord kopiëren of de velden wissen om een nieuwe berekening uit te voeren.',
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
  name: 'Hoe de regel van drie calculator te gebruiken',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Eenvoudige regel van drie calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Los wiskundige verhoudingen direct op. De definitieve tool voor het berekenen van hoeveelheden, recepten, kortingen en conversies.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Als ik heb...',
  labelB: 'Staat gelijk aan...',
  labelC: 'En nu heb ik...',
  labelX: 'Resultaat (X)',
  hintA: 'Initiële hoeveelheid',
  hintB: 'Bekende waarde',
  hintC: 'Nieuwe hoeveelheid',
  hintX: 'Berekende waarde',
  separatorIsTo: 'staat tot',
  separatorWillBe: 'wordt',
  copyTitle: 'Resultaat kopiëren',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regel-van-drieen',
  title: 'Eenvoudige regel van drie calculator',
  description: 'Los wiskundige verhoudingen direct op. De definitieve tool voor het berekenen van hoeveelheden, recepten, kortingen en conversies.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Evenredigheid (wiskunde) — Wikipedia', url: 'https://nl.wikipedia.org/wiki/Evenredigheid' },
    { name: 'Verhoudingen en proporties — Khan Academy', url: 'https://nl.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Waarvoor wordt de regel van drie gebruikt?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De eenvoudige directe regel van drie is het „Zwitserse zakmes” van de wiskunde. Het lost problemen op waarbij drie gegevenspunten bekend zijn en we de vierde zoeken. Als u de relatie tussen <strong>A en B</strong> kent, en u hebt een nieuwe waarde <strong>C</strong>, dan vindt de calculator direct <strong>X</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Koken en recepten',
          description: 'Als het recept 500 g bloem vraagt voor 4 personen, hoeveel heb ik dan nodig voor 7?',
          points: ['(500 × 7) ÷ 4 = 875 g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Winkelen en prijzen',
          description: 'Als een pak van 3 blikjes € 2,50 kost, hoeveel kosten 10 blikjes mij dan?',
          points: ['(2,50 × 10) ÷ 3 = € 8,33'],
        },
        {
          icon: 'mdi:car',
          title: 'Reizen en afstand',
          description: 'Als ik 45 min doe over 60 km, hoe lang doe ik dan over 140 km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Ontwerp en schermen',
          description: 'Als de afbeelding 1920 px breed is en ik deze wil verkleinen naar 800 px met behoud van de verhouding...',
          points: ['(OorspronkelijkeHoogte × 800) ÷ 1920 = NieuweHoogte'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hoe werkt de formule?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De formule is altijd hetzelfde: <strong>vermenigvuldig de diagonale waarden en deel door de resterende waarde</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Eenvoudige directe regel van drie formule',
    },
    {
      type: 'paragraph',
      html: 'In de calculator: we vermenigvuldigen waarde <strong>B</strong> met waarde <strong>C</strong> en delen door <strong>A</strong>. Het resultaat is <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Professioneel en dagelijks gebruik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Naast schoolwiskunde is de regel van drie overal: in de farmacie voor het berekenen van doseringen op basis van lichaamsgewicht, in de fotografie voor het berekenen van belichtingstijden, in de financiële wereld voor het berekenen van procentuele variaties, of bij het drukken voor het schalen van formaatmaten.',
    },
    {
      type: 'tip',
      title: 'Precisietip',
      html: 'Het resultaat wordt weergegeven met maximaal 4 significante decimalen. Als u met geld of exacte afmetingen werkt, vergeet dan niet af te ronden volgens de context: euro\'s op 2 decimalen, pixels op gehele getallen.',
    },
  ],
};
