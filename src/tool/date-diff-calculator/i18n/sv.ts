import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Är denna datumskillnadskalkylator gratis?',
    answer: 'Ja, det är ett 100 % gratis verktyg som är tillgängligt från valfri webbläsare utan att registrering eller nedladdning krävs.',
  },
  {
    question: 'Hur hanteras skottår i den totala tiden?',
    answer: 'Verktyget använder standard JavaScript-kronologi (UTC), som automatiskt hanterar skottår och det varierande antalet dagar i varje månad för att ge ett exakt resultat.',
  },
  {
    question: 'Kan jag beräkna skillnaden mellan timmar och minuter också?',
    answer: 'Ja. Inmatningsfälten låter dig välja exakt tid. Resultatet ger dig en uppdelning i dagar, timmar, minuter och sekunder, samt ackumulerade totaler.',
  },
  {
    question: 'Skickas mina datuminmatningar till någon server?',
    answer: 'Nej. All bearbetning sker lokalt i din webbläsare. Vi lagrar eller tar inte emot någon information om datumen du beräknar.',
  },
];

const howToData = [
  { name: 'Välj startdatum', text: "Ange startdatum och tid, eller klicka på 'Idag' för att ställa in det direkt." },
  { name: 'Välj slutdatum', text: "Definiera måltidpunkten. Använd 'Nu' för att mäta tiden som förflutit fram till detta exakta ögonblick." },
  { name: 'Läs av resultaten', text: 'Kontrollera uppdelningen i dagar, timmar, minuter och sekunder, plus de ackumulerade totalerna för veckor och timmar.' },
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
  name: 'Hur man beräknar skillnaden mellan två datum',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Datumskillnadskalkylator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Beräkna exakt hur mycket tid som har förflutit mellan två datum eller hur länge det är kvar till en händelse. Resultat i dagar, timmar och minuter.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Startdatum',
  endLabel: 'Slutdatum',
  nowBtn: 'Nu',
  todayBtn: 'Idag',
  tomorrowBtn: 'Imorgon',
  daysLabel: 'Dagar',
  hoursLabel: 'Timmar',
  minsLabel: 'Min',
  secsLabel: 'Sek',
  weeksLabel: 'Totala veckor',
  totalHoursLabel: 'Totala timmar',
  totalMinsLabel: 'Totala minuter',
  elapsed: 'Förfluten tid',
  past: 'Tid i det förflutna',
  invalidDates: 'Ogiltiga datum',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'datumskillnad-raknare',
  title: 'Datumskillnadskalkylator',
  description: 'Beräkna exakt hur mycket tid som har förflutit mellan två datum eller hur länge det är kvar till en händelse. Gratis verktyg med resultat i dagar, timmar och minuter.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: History of the Gregorian Calendar', url: 'https://sv.wikipedia.org/wiki/Gregorianska_kalendern' },
    { name: 'Wikipedia: Eisenhower Matrix and Time Management', url: 'https://sv.wikipedia.org/wiki/Tidshantering' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Datumskillnadskalkylator med dagar, timmar och minuter' },
    {
      type: 'paragraph',
      html: 'Att beräkna <strong>skillnaden mellan två datum</strong> är en av de vanligaste och mest underskattade uppgifterna i både vardagen och professionella miljöer. Oavsett om du planerar en produktlansering, beräknar en persons exakta ålder eller mäter tiden kvar till en speciell händelse, är det viktigt att ha ett exakt verktyg för effektiv tidshantering.',
    },
    { type: 'title', level: 3, text: 'Vad används datumskillnadskalkylatorn till?' },
    {
      type: 'paragraph',
      html: 'Verktygets användbarhet sträcker sig till flera områden. På arbetsplatsen använder projektledare det för att definiera leveransdeadlines och spåra milstolparnas framsteg. I juridiska och administrativa sammanhang är det nödvändigt för att beräkra preskriptionstider eller avtalslängder.',
    },
    {
      type: 'list',
      items: [
        '<strong>Evenemangsplanering:</strong> Ta reda på hur många veckor och dagar som återstår till ett bröllop, en konferens eller en resa.',
        '<strong>Projektledning:</strong> Beräkna tiden som förflutit från början av en fas till dess slutförande.',
        '<strong>Finans:</strong> Bestäm antalet dagar för ränteberäkningar eller fakturans förfallodatum.',
        '<strong>Personalresurser (HR):</strong> Mät anställdas tjänstetid eller ackumulerade semesterdagar.',
        '<strong>Hälsa:</strong> Spåra framstegen i en behandling eller återhämtningstid efter ett ingrepp.',
      ],
    },
    { type: 'title', level: 3, text: 'Tidsuppfattning och digital precision' },
    {
      type: 'paragraph',
      html: 'Vi tenderar ofta att avrunda tid. Vi säger "ungefär en månad" när det faktiskt är 27 dagar och 14 timmar kvar. Genom att använda en digital kalkylator eliminerar vi subjektivitet och erhåller ren data för välgrundat beslutsfattande.',
    },
    { type: 'title', level: 3, text: 'Kalenderdagar kontra arbetsdagar' },
    {
      type: 'paragraph',
      html: 'Detta verktyg beräknar <strong>kalenderdagar</strong>, inklusive helger och allmänna helgdagar. För astronomiska och allmänna civila beräkningar mäts tiden kontinuerligt. Om du behöver uppskatta projekttid, kom ihåg att de visade dagarna representerar hela den verkliga kalendern.',
    },
    { type: 'title', level: 3, text: 'Tidens inverkan på produktiviteten' },
    {
      type: 'paragraph',
      html: 'Parkinsons lag säger att arbetet expanderar för att fylla den tid som är tillgänglig för dess slutförande. Genom att visualisera exakt hur många timmar och minuter som återstår till en deadline tenderar team att optimera sina ansträngningar och hålla fokus.',
    },
    {
      type: 'tip',
      title: 'Framtida och förflutna datum',
      html: 'Du kan använda kalkylatorn för både framtida och förflutna datum. Om slutdatumet är tidigare än startdatumet detekterar systemet automatiskt att det är tid som förflutit i det förflutna, och bibehåller precisionen i de absoluta skillnadsvärdena.',
    },
  ],
};
