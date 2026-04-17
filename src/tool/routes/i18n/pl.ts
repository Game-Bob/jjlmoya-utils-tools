import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Jakiego algorytmu optymalizacji używa to narzędzie?',
    answer: 'Narzędzie wykorzystuje zaawansowane rozwiązanie problemu komiwojażera (TSP). Algorytm analizuje wszystkie przystanki i określa kolejność, która minimalizuje całkowity przebyty dystans, oszczędzając czas i paliwo.',
  },
  {
    question: 'Czy udostępnianie mojej lokalizacji jest bezpieczne?',
    answer: 'Tak. Narzędzie przetwarza dane geograficzne lokalnie w przeglądarce. Nie przechowujemy Twoich tras, przystanków ani historii lokalizacji na naszych serwerach.',
  },
  {
    question: 'Ile przystanków mogę zoptymalizować jednocześnie?',
    answer: 'Nasza bezpłatna wersja umożliwia natychmiastową optymalizację do 10 przystanków. W przypadku większych profesjonalnych tras system jest zoptymalizowany pod kątem utrzymania wysokiej wydajności bez blokowania przeglądarki.',
  },
  {
    question: 'Czy mogę użyć trasy bezpośrednio w Google Maps?',
    answer: 'Oczywiście! Po zoptymalizowaniu trasy narzędzie generuje link do nawigacji zgodny z Google Maps, dzięki czemu możesz rozpocząć podróż bezpośrednio z telefonu.',
  },
];

const howToData = [
  {
    name: 'Dodaj punkt początkowy',
    text: 'Wpisz adres początkowy lub kliknij na mapę, aby ustawić miejsce rozpoczęcia trasy.',
  },
  {
    name: 'Wprowadź przystanki docelowe',
    text: 'Dodaj wszystkie lokalizacje, które musisz odwiedzić. Kolejność nie ma znaczenia, ponieważ system je uporządkuje.',
  },
  {
    name: 'Zoptymalizuj sekwencję',
    text: 'Kliknij przycisk optymalizacji. Algorytm w kilka sekund obliczy najefektywniejszą kolejność odwiedzin wszystkich przystanków.',
  },
  {
    name: 'Otwórz w nawigacji',
    text: 'Użyj przycisku nawigacji, aby przenieść zoptymalizowaną trasę do swojej ulubionej aplikacji z mapami.',
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
  name: 'Jak zoptymalizować trasę z wieloma przystankami',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Optymalnej Trasy',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optymalizuj swoje trasy dostaw lub podróży za darmo. Automatycznie porządkuj przystanki, aby znaleźć najkrótszą i najskuteczniejszą ścieżkę.',
};

const ui: RoutesUI = {
  titleSidebar: 'Punkty Trasy',
  descriptionSidebar: 'Kliknij na mapę, aby dodać przystanki. Pierwszy punkt to start.',
  emptyState: 'Nie dodano żadnych punktów',
  btnOptimize: 'Oblicz Optymalną Trasę',
  btnCalculating: 'Obliczanie...',
  btnClear: 'Wyczyść Wszystko',
  labelDistance: 'Szacowany Całkowity Dystans',
  labelDeleteAria: 'Usuń',
  labelLoadingAddress: 'Wczytywanie adresu...',
  labelPoint: 'Punkt',
  errorMinPoints: 'Do obliczenia trasy potrzebne są co najmniej dwa punkty.',
  errorCalculate: 'Błąd podczas obliczania trasy.',
  errorAddress: 'Błąd podczas pobierania adresu',
  errorAddressName: 'Nieznany punkt',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optymalne-trasy',
  title: 'Darmowy Kalkulator Optymalnej Trasy',
  description: 'Optymalizuj swoje trasy dostaw lub podróży za darmo. Nasze narzędzie automatycznie porządkuje przystanki, aby znaleźć najkrótszą i najskuteczniejszą ścieżkę.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Technologie i Źródła',
  bibliography: [
    { name: 'Leaflet — otwarta biblioteka map interaktywnych', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — otwarte dane kartograficzne', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — kafelki mapy Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — usługa odwróconego geokodowania (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (optymalizacja tras)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Inteligentny Optymalizator Tras: TSP dla dostaw i podróży',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Optymalizator tras online</strong> to bezpłatne narzędzie rozwiązujące klasyczny <em>problem komiwojażera (TSP)</em>. Dodaj wszystkie przystanki w dowolnej kolejności, a algorytm automatycznie obliczy najefektywniejszą sekwencję, aby zminimalizować całkowity przebyty dystans.',
    },
    {
      type: 'title',
      text: 'Jak działa algorytm optymalizacji tras?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Narzędzie wykorzystuje API <strong>OSRM (Open Source Routing Machine)</strong>, wysokowydajny silnik trasowania oparty na danych OpenStreetMap. Proces wygląda następująco: najpierw obliczana jest optymalna trasa okrężna między wszystkimi punktami (algorytm TSP), następnie wyznaczany jest najlepszy punkt przecięcia, aby przekształcić ją w liniową podróż w jedną stronę, a na koniec trasa jest rysowana na mapie wraz z szacowanym całkowitym dystansem.',
    },
    {
      type: 'title',
      text: 'Zastosowania: dostawy, przedstawiciele handlowi i podróże',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Optymalizator tras jest idealny dla <strong>niezależnych kurierów</strong> organizujących wiele codziennych dostaw, <strong>przedstawicieli handlowych</strong> odwiedzających klientów w danym obszarze lub <strong>podróżników</strong> chcących zwiedzić kilka miast lub atrakcji w najefektywniejszej kolejności. Narzędzie przetwarza wszystkie informacje w przeglądarce, bez udostępniania danych żadnemu serwerowi zewnętrznemu.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algorytm', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Silnik trasowania', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Prywatność', icon: 'mdi:lock-check' },
        { value: 'Za darmo', label: 'Koszt', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Prywatność i przetwarzanie lokalne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cała logika narzędzia działa bezpośrednio w Twojej przeglądarce. Współrzędne przystanków są wysyłane wyłącznie do publicznych interfejsów API OSRM i Nominatim w celu obliczenia tras i pobrania nazw adresów, ale <strong>nie są przechowywane na żadnym serwerze zewnętrznym</strong>. Możesz bezpiecznie planować trasy biznesowe zawierające wrażliwe informacje.',
    },
    {
      type: 'tip',
      title: 'Wskazówka dotycząca użytkowania',
      html: '<strong>Aby uzyskać najlepsze wyniki</strong>, dodawaj przystanki, klikając bezpośrednio na mapie, zamiast wyszukiwać adresy. Znaczniki można przeciągać, więc możesz precyzyjnie dostosować pozycję każdego punktu po jego umieszczeniu.',
    },
  ],
};
