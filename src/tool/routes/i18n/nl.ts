import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Welk optimalisatiealgoritme wordt er gebruikt?',
    answer: 'Er wordt een geavanceerde oplossing van het Handelsreizigersprobleem (TSP) gebruikt. Het algoritme analyseert alle stops en bepaalt de sequentiële volgorde die de totale afgelegde afstand minimaliseert, wat tijd en brandstof bespaart.',
  },
  {
    question: 'Is het veilig om mijn locatie te delen?',
    answer: 'Ja. De tool verwerkt geografische gegevens lokaal in uw browser. We slaan uw routes, stops of locatiegeschiedenis niet op onze servers op.',
  },
  {
    question: 'Hoeveel stops kan ik tegelijk optimaliseren?',
    answer: 'Met onze gratis versie kunt u direct tot 10 stops optimaliseren. Voor grotere professionele routes is het systeem geoptimaliseerd om hoge prestaties te behouden zonder de browser te blokkeren.',
  },
  {
    question: 'Kan ik de route direct in Google Maps gebruiken?',
    answer: 'Absoluut! Zodra de route is geoptimaliseerd, genereert de tool een navigatielink die compatibel is met Google Maps, zodat u de reis rechtstreeks vanaf uw telefoon kunt starten.',
  },
];

const howToData = [
  {
    name: 'Startpunt toevoegen',
    text: 'Typ het startadres of klik op de kaart om in te stellen waar uw route begint.',
  },
  {
    name: 'Bestemmingsstops invoeren',
    text: 'Voeg alle locaties toe die u moet bezoeken. De volgorde maakt niet uit, want het systeem ordent ze voor u.',
  },
  {
    name: 'Volgorde optimaliseren',
    text: 'Klik op de knop Optimaliseren. Het algoritme berekent in enkele seconden de meest efficiënte volgorde om alle stops te bezoeken.',
  },
  {
    name: 'Openen in navigatie',
    text: 'Gebruik de navigatieknop om de geoptimaliseerde route over te zetten naar uw favoriete kaartenapplicatie.',
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
  name: 'Hoe een route met meerdere stops te optimaliseren',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimale Routeplanner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimaliseer uw bezorg- of reisroutes gratis. Reorganiseer stops automatisch om de kortste en meest efficiënte route te vinden.',
};

const ui: RoutesUI = {
  titleSidebar: 'Routepunten',
  descriptionSidebar: 'Klik op de kaart om stops toe te voegen. Het eerste punt is de start.',
  emptyState: 'Geen punten toegevoegd',
  btnOptimize: 'Optimale route berekenen',
  btnCalculating: 'Berekenen...',
  btnClear: 'Alles wissen',
  labelDistance: 'Geschatte totale afstand',
  labelDeleteAria: 'Verwijderen',
  labelLoadingAddress: 'Adres laden...',
  labelPoint: 'Punt',
  errorMinPoints: 'Er zijn ten minste twee punten nodig om een route te berekenen.',
  errorCalculate: 'Fout bij het berekenen van de route.',
  errorAddress: 'Fout bij het ophalen van het adres',
  errorAddressName: 'Onbekend punt',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimale-routes',
  title: 'Gratis optimale routeplanner',
  description: 'Optimaliseer uw bezorg- of reisroutes gratis. Onze tool reorganiseert uw stops automatisch om de kortste en meest efficiënte route te vinden.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Technologieën en Bronnen',
  bibliography: [
    { name: 'Leaflet — Open-source interactieve kaartenbibliotheek', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Open cartografische gegevens', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager-kaarttegels', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Omgekeerde geocoderingsdienst (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (route-optimalisatie)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Slimme Route-optimalisator: TSP voor Bezorgingen en Reizen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De <strong>online route-optimalisator</strong> is een gratis tool die het klassieke <em>Handelsreizigersprobleem (TSP)</em> oplost. Voeg al uw stops in willekeurige volgorde toe en het algoritme berekent automatisch de meest efficiënte volgorde om de totale afgelegde afstand te minimaliseren.',
    },
    {
      type: 'title',
      text: 'Hoe werkt het route-optimalisatiealgoritme?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De tool maakt gebruik van de <strong>OSRM (Open Source Routing Machine)</strong> API, een krachtige route-engine gebaseerd op OpenStreetMap-gegevens. Het proces is: eerst wordt de optimale circulaire route tussen alle punten berekend (TSP-algoritme), vervolgens wordt het beste kruispunt bepaald om deze om te zetten in een lineaire reis in één richting, en ten slotte wordt de route op de kaart getekend met de geschatte totale afstand.',
    },
    {
      type: 'title',
      text: 'Toepassingen: bezorgingen, vertegenwoordigers en reizen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De route-optimalisator is ideaal voor <strong>onafhankelijke bezorgers</strong> die dagelijks meerdere leveringen moeten organiseren, <strong>vertegenwoordigers</strong> die klanten in een bepaald gebied bezoeken, of <strong>reizigers</strong> die verschillende steden of bezienswaardigheden in de meest efficiënte volgorde willen bezoeken. De tool verwerkt alle informatie in de browser, zonder uw gegevens te delen met een eigen server.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritme', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Route-engine', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privacy', icon: 'mdi:lock-check' },
        { value: 'Gratis', label: 'Kosten', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privacy en lokale verwerking',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alle logica van de tool draait rechtstreeks in uw browser. De coördinaten van uw stops worden alleen naar de openbare OSRM- en Nominatim-API\'s gestuurd om routes te berekenen en adresnamen op te halen, maar <strong>worden niet opgeslagen op een eigen server</strong>. U kunt de tool veilig gebruiken om zakelijke routes met gevoelige informatie te plannen.',
    },
    {
      type: 'tip',
      title: 'Gebruikstip',
      html: '<strong>Voor het beste resultaat</strong> voegt u stops toe door rechtstreeks op de kaart te klikken in plaats van op adres te zoeken. De markeringen zijn versleepbaar, zodat u de exacte positie van elk punt kunt aanpassen nadat u het geplaatst hebt.',
    },
  ],
};
