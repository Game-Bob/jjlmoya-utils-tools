import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Vilken optimeringsalgoritm används?',
    answer: 'Den använder en avancerad lösning av Handelsresandeproblemet (TSP). Algoritmen analyserar alla stopp och bestämmer den sekventiella ordning som minimerar den totala resvägen, vilket sparar tid och bränsle.',
  },
  {
    question: 'Är det säkert att dela min plats?',
    answer: 'Ja. Verktyget bearbetar geografiska data lokalt i din webbläsare. Vi lagrar inte dina rutter, stopp eller platshistorik på våra servrar.',
  },
  {
    question: 'Hur många stopp kan jag optimera samtidigt?',
    answer: 'Vår gratisversion låter dig optimera upp till 10 stopp omedelbart. För större professionella rutter är systemet optimerat för att bibehålla hög prestanda utan att blockera webbläsaren.',
  },
  {
    question: 'Kan jag använda rutten direkt i Google Maps?',
    answer: 'Absolut! När rutten är optimerad genererar verktyget en navigeringslänk som är kompatibel med Google Maps så att du kan starta resan direkt från din telefon.',
  },
];

const howToData = [
  {
    name: 'Lägg till startpunkt',
    text: 'Skriv in startadressen eller klicka på kartan för att ställa in var din rutt börjar.',
  },
  {
    name: 'Ange destinationer',
    text: 'Lägg till alla platser du behöver besöka. Ordningen spelar ingen roll, eftersom systemet kommer att sortera om dem åt dig.',
  },
  {
    name: 'Optimera sekvensen',
    text: 'Klicka på optimera-knappen. Algoritmen beräknar på några sekunder den mest effektiva ordningen för att täcka alla stopp.',
  },
  {
    name: 'Öppna i navigatör',
    text: 'Använd navigeringsknappen för att ta den optimerade rutten till din favoritkartapplikation.',
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
  name: 'Hur man optimerar en rutt med flera stopp',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimal ruttberäknare',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimera dina leverans- eller resrutter gratis. Sortera om stopp automatiskt för att hitta den kortaste och mest effektiva vägen.',
};

const ui: RoutesUI = {
  titleSidebar: 'Ruttpunkter',
  descriptionSidebar: 'Klicka på kartan för att lägga till stopp. Den första punkten är starten.',
  emptyState: 'Inga punkter tillagda',
  btnOptimize: 'Beräkna optimal rutt',
  btnCalculating: 'Beräknar...',
  btnClear: 'Rensa allt',
  labelDistance: 'Uppskattat totalt avstånd',
  labelDeleteAria: 'Radera',
  labelLoadingAddress: 'Laddar adress...',
  labelPoint: 'Punkt',
  errorMinPoints: 'Minst två punkter behövs för att beräkna en rutt.',
  errorCalculate: 'Fel vid beräkning av rutten.',
  errorAddress: 'Fel vid hämtning av adress',
  errorAddressName: 'Okänd punkt',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimala-rutter',
  title: 'Gratis optimal ruttberäknare',
  description: 'Optimera dina leverans- eller resrutter gratis. Vårt verktyg sorterar om dina stopp automatiskt för att hitta den kortaste och mest effektiva vägen.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Tekniker och källor',
  bibliography: [
    { name: 'Leaflet — Interaktivt kartbibliotek med öppen källkod', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Öppna kartografiska data', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager-kartplattor', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Omvänd geokodningstjänst (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (ruttoptimering)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Smart ruttoptimerare: TSP för leveranser och resor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ruttoptimeraren online</strong> är ett verktyg som löser det klassiska <em>Handelsresandeproblemet (TSP)</em>. Lägg till alla dina stopp i valfri ordning så beräknar algoritmen automatiskt den mest effektiva sekvensen för att minimera den totala resvägen.',
    },
    {
      type: 'title',
      text: 'Hur fungerar ruttoptimeringsalgoritmen?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Verktyget använder <strong>OSRM (Open Source Routing Machine)</strong> API, en högpresterande ruttmotor baserad på data från OpenStreetMap. Processen är: först beräknas den optimala cirkulära rutten mellan alla punkter (TSP-algoritm), sedan bestäms den bästa brytpunkten för att omvandla den till en linjär enkelresa, och slutligen ritas rutten på kartan med det uppskattade totala avståndet.',
    },
    {
      type: 'title',
      text: 'Användningsområden: leveranser, säljare och resor',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ruttoptimeraren är idealisk för <strong>oberoende bud</strong> som behöver organisera flera dagliga leveranser, <strong>fältsäljare</strong> som besöker kunder i ett område, eller <strong>resenärer</strong> som vill besöka flera städer eller sevärdhet i den mest effektiva ordningen. Verktyget bearbetar all information i webbläsaren, utan att dela dina data med någon proprietär server.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritm', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Ruttmotor', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Integritet', icon: 'mdi:lock-check' },
        { value: 'Gratis', label: 'Kostnad', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Integritet och lokal bearbetning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'All logik i verktyget körs direkt i din webbläsare. Dina stoppkoordinater skickas endast till de publika OSRM- och Nominatim-API:erna för att beräkna rutter och hämta adressnamn, men <strong>lagras inte på någon proprietär server</strong>. Du kan säkert använda verktyget för att planera affärsrutter med känslig information.',
    },
    {
      type: 'tip',
      title: 'Användningstips',
      html: '<strong>För bästa resultat</strong>, lägg till stopp genom att klicka direkt på kartan istället för att söka efter adresser. Markörerna är dragbara, så du kan justera den exakta positionen för varje punkt efter att du har placerat den.',
    },
  ],
};
