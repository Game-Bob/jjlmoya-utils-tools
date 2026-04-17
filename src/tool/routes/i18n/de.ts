import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Welchen Optimierungsalgorithmus verwendet das Tool?',
    answer: 'Es verwendet eine fortschrittliche Lösung des Travelling Salesman Problem (TSP). Der Algorithmus analysiert alle Haltepunkte und bestimmt die sequentielle Reihenfolge, die die Gesamtfahrtstrecke minimiert, was Zeit und Kraftstoff spart.',
  },
  {
    question: 'Ist es sicher, meinen Standort zu teilen?',
    answer: 'Ja. Das Tool verarbeitet geografische Daten lokal in Ihrem Browser. Wir speichern Ihre Routen, Haltepunkte oder Ihren Standortverlauf nicht auf unseren Servern.',
  },
  {
    question: 'Wie viele Haltepunkte kann ich gleichzeitig optimieren?',
    answer: 'Unsere kostenlose Version ermöglicht es Ihnen, bis zu 10 Haltepunkte sofort zu optimieren. Für größere professionelle Routen ist das System so optimiert, dass eine hohe Leistung aufrechterhalten wird, ohne den Browser zu blockieren.',
  },
  {
    question: 'Kann ich die Route direkt in Google Maps verwenden?',
    answer: 'Absolut! Sobald die Route optimiert ist, generiert das Tool einen Navigationslink, der mit Google Maps kompatibel ist, sodass Sie die Fahrt direkt von Ihrem Handy aus starten können.',
  },
];

const howToData = [
  {
    name: 'Startpunkt hinzufügen',
    text: 'Geben Sie die Startadresse ein oder klicken Sie auf die Karte, um festzulegen, wo Ihre Route beginnt.',
  },
  {
    name: 'Zielstopps eingeben',
    text: 'Fügen Sie alle Orte hinzu, die Sie besuchen müssen. Die Reihenfolge spielt keine Rolle, da das System sie für Sie neu ordnet.',
  },
  {
    name: 'Sequenz optimieren',
    text: 'Klicken Sie auf die Schaltfläche „Optimieren“. Der Algorithmus berechnet in Sekunden die effizienteste Reihenfolge, um alle Haltepunkte abzudecken.',
  },
  {
    name: 'Im Navigator öffnen',
    text: 'Verwenden Sie die Navigationsschaltfläche, um die optimierte Route in Ihre bevorzugte Kartenanwendung zu übernehmen.',
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
  name: 'So optimieren Sie eine Route mit mehreren Haltepunkten',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimaler Routenplaner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimieren Sie Ihre Liefer- oder Reiserouten kostenlos. Ordnen Sie Haltepunkte automatisch neu, um den kürzesten und effizientesten Weg zu finden.',
};

const ui: RoutesUI = {
  titleSidebar: 'Routenpunkte',
  descriptionSidebar: 'Klicken Sie auf die Karte, um Haltepunkte hinzuzufügen. Der erste Punkt ist der Start.',
  emptyState: 'Keine Punkte hinzugefügt',
  btnOptimize: 'Optimale Route berechnen',
  btnCalculating: 'Berechnung...',
  btnClear: 'Alle löschen',
  labelDistance: 'Geschätzte Gesamtdistanz',
  labelDeleteAria: 'Löschen',
  labelLoadingAddress: 'Adresse wird geladen...',
  labelPoint: 'Punkt',
  errorMinPoints: 'Es werden mindestens zwei Punkte benötigt, um eine Route zu berechnen.',
  errorCalculate: 'Fehler bei der Routenberechnung.',
  errorAddress: 'Fehler beim Abrufen der Adresse',
  errorAddressName: 'Unbekannter Punkt',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimale-routen',
  title: 'Kostenloser optimaler Routenplaner',
  description: 'Optimieren Sie Ihre Liefer- oder Reiserouten kostenlos. Unser Tool ordnet Ihre Haltepunkte automatisch neu, um den kürzesten und effizientesten Weg zu finden.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Technologien und Quellen',
  bibliography: [
    { name: 'Leaflet — Open-Source interaktive Kartenbibliothek', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Offene kartografische Daten', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager-Kartenkacheln', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Reverse-Geocoding-Dienst (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (Routenoptimierung)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Intelligenter Routenoptimierer: TSP für Lieferungen und Reisen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der <strong>Online-Routenoptimierer</strong> ist ein kostenloses Tool, das das klassische <em>Travelling Salesman Problem (TSP)</em> löst. Fügen Sie alle Ihre Stopps in beliebiger Reihenfolge hinzu, und der Algorithmus berechnet automatisch die effizienteste Sequenz, um die Gesamtfahrtstrecke zu minimieren.',
    },
    {
      type: 'title',
      text: 'Wie funktioniert der Routenoptimierungsalgorithmus?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Das Tool verwendet die <strong>OSRM (Open Source Routing Machine)</strong> API, eine leistungsstarke Routing-Engine, die auf OpenStreetMap-Daten basiert. Der Prozess ist wie folgt: Zuerst wird die optimale Rundroute zwischen allen Punkten berechnet (TSP-Algorithmus), dann wird der beste Schnittpunkt ermittelt, um sie in eine lineare Einwegfahrt umzuwandeln, und schließlich wird die Route mit der geschätzten Gesamtdistanz auf der Karte gezeichnet.',
    },
    {
      type: 'title',
      text: 'Anwendungsfälle: Lieferungen, Außendienst und Reisen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Routenoptimierer ist ideal für <strong>selbstständige Kuriere</strong>, die mehrere tägliche Lieferungen organisieren müssen, <strong>Außendienstmitarbeiter</strong>, die Kunden in einem Gebiet besuchen, oder <strong>Reisende</strong>, die mehrere Städte oder Sehenswürdigkeiten in der effizientesten Reihenfolge besuchen möchten. Das Tool verarbeitet alle Informationen im Browser, ohne Ihre Daten mit einem proprietären Server zu teilen.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algorithmus', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Routing-Engine', icon: 'mdi:map-marker-path' },
        { value: 'Lokal-zuerst', label: 'Datenschutz', icon: 'mdi:lock-check' },
        { value: 'Kostenlos', label: 'Kosten', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Datenschutz und lokale Verarbeitung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die gesamte Logik des Tools läuft direkt in Ihrem Browser. Ihre Haltepunktkoordinaten werden nur an die öffentlichen OSRM- und Nominatim-APIs gesendet, um Routen zu berechnen und Adressnamen abzurufen, werden aber <strong>nicht auf einem proprietären Server gespeichert</strong>. Sie können das Tool sicher verwenden, um Geschäftsrouten mit sensiblen Informationen zu planen.',
    },
    {
      type: 'tip',
      title: 'Tipp zur Verwendung',
      html: '<strong>Für beste Ergebnisse</strong> fügen Sie Haltepunkte hinzu, indem Sie direkt auf die Karte klicken, anstatt nach Adressen zu suchen. Markierungen sind verschiebbar, sodass Sie die genaue Position jedes Punktes nach dem Platzieren anpassen können.',
    },
  ],
};
