import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'What optimization algorithm does it use?',
    answer: 'It uses an advanced resolution of the Travelling Salesman Problem (TSP). The algorithm analyzes all stops and determines the sequential order that minimizes the total distance travelled, saving time and fuel.',
  },
  {
    question: 'Is it safe to share my location?',
    answer: 'Yes. The tool processes geographic data locally in your browser. We do not store your routes, stops, or location history on our servers.',
  },
  {
    question: 'How many stops can I optimize at once?',
    answer: 'Our free version allows you to optimize up to 10 stops instantly. For larger professional routes, the system is optimized to maintain high performance without blocking the browser.',
  },
  {
    question: 'Can I use the route directly in Google Maps?',
    answer: 'Absolutely! Once the route is optimized, the tool generates a navigation link compatible with Google Maps so you can start the journey directly from your phone.',
  },
];

const howToData = [
  {
    name: 'Add starting point',
    text: 'Type the starting address or click on the map to set where your route begins.',
  },
  {
    name: 'Enter destination stops',
    text: 'Add all the locations you need to visit. The order does not matter, as the system will reorder them for you.',
  },
  {
    name: 'Optimize the sequence',
    text: 'Click the optimize button. The algorithm will calculate in seconds the most efficient order to cover all stops.',
  },
  {
    name: 'Open in navigator',
    text: 'Use the navigation button to take the optimized route to your favourite maps application.',
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
  name: 'How to optimize a route with multiple stops',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimal Route Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimize your delivery or travel routes for free. Automatically reorder stops to find the shortest and most efficient path.',
};

const ui: RoutesUI = {
  titleSidebar: 'Route Points',
  descriptionSidebar: 'Click on the map to add stops. The first point is the start.',
  emptyState: 'No points added',
  btnOptimize: 'Calculate Optimal Route',
  btnCalculating: 'Calculating...',
  btnClear: 'Clear All',
  labelDistance: 'Estimated Total Distance',
  labelDeleteAria: 'Delete',
  labelLoadingAddress: 'Loading address...',
  labelPoint: 'Point',
  errorMinPoints: 'At least two points are needed to calculate a route.',
  errorCalculate: 'Error calculating the route.',
  errorAddress: 'Error fetching address',
  errorAddressName: 'Unknown point',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimal-routes',
  title: 'Free Optimal Route Calculator',
  description: 'Optimize your delivery or travel routes for free. Our tool automatically reorders your stops to find the shortest and most efficient path.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Technologies and Sources',
  bibliography: [
    { name: 'Leaflet — Open-source interactive maps library', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Open cartographic data', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager map tiles', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Reverse geocoding service (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (route optimization)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Smart Route Optimiser: TSP for Deliveries and Travel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The <strong>online route optimiser</strong> is a free tool that solves the classic <em>Travelling Salesman Problem (TSP)</em>. Add all your stops in any order and the algorithm will automatically calculate the most efficient sequence to minimise the total distance travelled.',
    },
    {
      type: 'title',
      text: 'How does the route optimisation algorithm work?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The tool uses the <strong>OSRM (Open Source Routing Machine)</strong> API, a high-performance routing engine based on OpenStreetMap data. The process is: first it calculates the optimal circular route between all points (TSP algorithm), then determines the best cut point to convert it into a one-way linear journey, and finally draws the route on the map with the estimated total distance.',
    },
    {
      type: 'title',
      text: 'Use cases: deliveries, sales reps, and travel',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The route optimiser is ideal for <strong>independent delivery drivers</strong> who need to organise multiple daily deliveries, <strong>field sales representatives</strong> visiting clients in an area, or <strong>travellers</strong> wanting to visit several cities or landmarks in the most efficient order. The tool processes all information in the browser, without sharing your data with any proprietary server.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algorithm', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Routing engine', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privacy', icon: 'mdi:lock-check' },
        { value: 'Free', label: 'Cost', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privacy and local processing',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'All the tool logic runs directly in your browser. Your stop coordinates are only sent to the public OSRM and Nominatim APIs to calculate routes and get address names, but <strong>are not stored on any proprietary server</strong>. You can safely use the tool to plan business routes with sensitive information.',
    },
    {
      type: 'tip',
      title: 'Usage tip',
      html: '<strong>For best results</strong>, add stops by clicking directly on the map rather than searching for addresses. Markers are draggable, so you can adjust the exact position of each point after placing it.',
    },
  ],
};
