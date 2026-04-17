import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Is deze datumverschil-calculator gratis?',
    answer: 'Ja, het is een 100% gratis tool die toegankelijk is vanuit elke browser. Registratie of downloads zijn niet vereist.',
  },
  {
    question: 'Hoe worden schrikkeljaren verwerkt in de totale tijd?',
    answer: 'De tool gebruikt de standaard JavaScript-chronologie (UTC), die automatisch schrikkeljaren en het variabele aantal dagen in elke maand verwerkt om een exact resultaat te geven.',
  },
  {
    question: 'Kan ik ook het verschil tussen uren en minuten berekenen?',
    answer: 'Ja. In de invoervelden kunt u de exacte tijd selecteren. Het resultaat geeft u een uitsplitsing in dagen, uren, minuten en seconden, evenals gecumuleerde totalen.',
  },
  {
    question: 'Worden mijn datuminvoeren naar een server verzonden?',
    answer: 'Nee. Alle verwerking vindt lokaal plaats in uw browser. We bewaren of ontvangen geen informatie over de datums die u berekent.',
  },
];

const howToData = [
  { name: 'Selecteer de startdatum', text: "Voer de begindatum en -tijd in, of klik op 'Vandaag' om deze direct in te stellen." },
  { name: 'Selecteer de einddatum', text: "Definieer het doelmoment. Gebruik 'Nu' om de verstreken tijd tot op dit exacte moment te meten." },
  { name: 'Lees de resultaten', text: 'Bekijk de uitsplitsing in dagen, uren, minuten en seconden, plus de gecumuleerde totalen voor weken und uren.' },
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
  name: 'Hoe het verschil tussen twee datums te berekenen',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Datumverschil Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Bereken precies hoeveel tijd er is verstreken tussen twee datums of hoelang het nog duurt tot een evenement. Resultaten in dagen, uren en minuten.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Startdatum',
  endLabel: 'Einddatum',
  nowBtn: 'Nu',
  todayBtn: 'Vandaag',
  tomorrowBtn: 'Morgen',
  daysLabel: 'Dagen',
  hoursLabel: 'Uren',
  minsLabel: 'Min',
  secsLabel: 'Sec',
  weeksLabel: 'Totaal Aantal Weken',
  totalHoursLabel: 'Totaal Aantal Uren',
  totalMinsLabel: 'Totaal Aantal Minuten',
  elapsed: 'Verstreken Tijd',
  past: 'Tijd in het Verleden',
  invalidDates: 'Ongeldige datums',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'datumverschil-rekenmachine',
  title: 'Datumverschil Calculator',
  description: 'Bereken precies hoeveel tijd er is verstreken tussen twee datums of hoelang het nog duurt tot een evenement. Gratis tool met resultaten in dagen, uren en minuten.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: History of the Gregorian Calendar', url: 'https://nl.wikipedia.org/wiki/Gregoriaanse_kalender' },
    { name: 'Wikipedia: Eisenhower Matrix and Time Management', url: 'https://nl.wikipedia.org/wiki/Eisenhower-methode' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Datumverschil-calculator met dagen, uren en minuten' },
    {
      type: 'paragraph',
      html: 'Het berekenen van het <strong>verschil tussen twee datums</strong> is een van de meest voorkomende en onderschatte taken in zowel het dagelijks leven als in professionele omgevingen. Of u nu een productlancering plant, de exacte leeftijd van een persoon berekent of meet hoeveel tijd er nog over is tot een speciaal evenement, een nauwkeurige tool is essentieel voor efficiënt timemanagement.',
    },
    { type: 'title', level: 3, text: 'Waar wordt de datumverschil-calculator voor gebruikt?' },
    {
      type: 'paragraph',
      html: 'Het nut van deze tool strekt zich uit tot meerdere gebieden. Op de werkvloer gebruiken projectmanagers het om deadlines te definiëren en de voortgang van mijlpalen bij te houden. In juridische en administratieve contexten is het essentieel voor het berekenen van verjaringstermijnen of contractduur.',
    },
    {
      type: 'list',
      items: [
        '<strong>Evenementenplanning:</strong> Weet hoeveel weken en dagen er nog over zijn tot een bruiloft, conferentie of reis.',
        '<strong>Projectmanagement:</strong> Bereken de verstreken tijd vanaf het begin van een fase tot de voltooiing ervan.',
        '<strong>Financiën:</strong> Bepaal het aantal dagen voor renteberekeningen of vervaldatums van facturen.',
        '<strong>Human Resources:</strong> Meet de anciënniteit van werknemers of opgebouwde vakantiedagen.',
        '<strong>Gezondheid:</strong> Volg de voortgang van een behandeling of de hersteltijd na een ingreep.',
      ],
    },
    { type: 'title', level: 3, text: 'Tijdsbeleving en digitale precisie' },
    {
      type: 'paragraph',
      html: 'We hebben vaak de neiging om tijd af te ronden. We zeggen "ongeveer een maand" wanneer het in werkelijkheid nog 27 dagen en 14 uur is. Door een digitale calculator te gebruiken, elimineren we subjectiviteit en verkrijgen we zuivere gegevens voor geïnformeerde besluitvorming.',
    },
    { type: 'title', level: 3, text: 'Kalenderdagen versus werkdagen' },
    {
      type: 'paragraph',
      html: 'Deze tool berekent <strong>kalenderdagen</strong>, inclusief weekenden en feestdagen. Voor astronomische en algemene civiele berekeningen wordt de tijd continu gemeten. Als u projecttijd moet inschatten, onthoud dan dat de getoonde dagen de volledige reële kalender vertegenwoordigen.',
    },
    { type: 'title', level: 3, text: 'De impact van tijd op productiviteit' },
    {
      type: 'paragraph',
      html: 'De wet van Parkinson stelt dat werk uitdijt om de beschikbare tijd voor de voltooiing ervan te vullen. Door precies te visualiseren hoeveel uren en minuten er nog resteren tot een deadline, hebben teams de neiging hun inspanningen te optimaliseren en gefocust te blijven.',
    },
    {
      type: 'tip',
      title: 'Toekomstige und verleden datums',
      html: 'U kunt de calculator gebruiken voor zowel toekomstige als verleden datums. Als de einddatum eerder is dan de startdatum, detecteert het systeem automatisch dat dit tijd is die in het verleden is verstreken, waarbij de precisie in de absolute verschilwaarden behouden blijft.',
    },
  ],
};
