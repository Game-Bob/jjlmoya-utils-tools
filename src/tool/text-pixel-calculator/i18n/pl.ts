import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Jak obliczyć szerokość tekstu w pikselach online?',
    answer: 'Wklej tekst do pola wejściowego, skonfiguruj czcionkę i rozmiar, a narzędzie automatycznie użyje interfejsu API Canvas przeglądarki, aby zwrócić dokładną szerokość w pikselach.',
  },
  {
    question: 'Dlaczego szerokość w pikselach różni się między krojami pisma?',
    answer: 'Większość czcionek jest proporcjonalna, co oznacza, że każdy znak ma inną szerokość. Na przykład wielka litera „M” jest zawsze szersza niż mała litera „i” w standardowej czcionce bezszeryfowej.',
  },
  {
    question: 'Czy mierzenie znaków to to samo co mierzenie pikseli?',
    answer: 'Nie. Mierzenie znaków podaje długość ciągu, natomiast mierzenie pikseli podaje przestrzeń wizualną, jaką on zajmuje. Jest to kluczowe dla upewnienia się, że tekst nie wystaje poza swój kontener w projekcie internetowym.',
  },
  {
    question: 'Czy mogę użyć dowolnego kroju pisma z Google Fonts?',
    answer: 'Tak, o ile czcionka jest zainstalowana w systemie operacyjnym lub załadowana na bieżącej stronie, narzędzie dokładnie zmierzy jej wymiary.',
  },
  {
    question: 'Czy przetwarzanie prywatnego tekstu lub fragmentów kodu jest bezpieczne?',
    answer: 'Tak. Kalkulator działa całkowicie lokalnie. Żadne dane nie są wysyłane do zewnętrznych serwerów, co gwarantuje pełną prywatność Twoich projektów.',
  },
];

const howToData = [
  { name: 'Wpisz tekst', text: 'Wpisz lub wklej tekst, który chcesz zmierzyć, w obszarze wejściowym.' },
  { name: 'Skonfiguruj czcionkę', text: 'Ustaw rodzinę czcionek, rozmiar w pikselach, wagę i to, czy ma być pochylona.' },
  { name: 'Odczytaj wynik', text: 'Szerokość w pikselach i liczba znaków są aktualizowane w czasie rzeczywistym.' },
  { name: 'Skopiuj wartość', text: 'Kliknij „Kopiuj szerokość”, aby zapisać liczbę pikseli w schowku.' },
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
  name: 'Jak zmierzyć szerokość tekstu w pikselach',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator szerokości pikseli tekstu',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Dokładnie oblicz szerokość dowolnego tekstu w pikselach na podstawie czcionki, rozmiaru i stylu.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Tekst do zmierzenia',
  textPlaceholder: 'Wpisz lub wklej tutaj tekst, który chcesz zmierzyć...',
  defaultText: 'Witaj świecie',
  fontLabel: 'Rodzina czcionek',
  sizeLabel: 'Rozmiar (px)',
  weightLabel: 'Waga',
  italicLabel: 'Kursywa',
  widthLabel: 'Szerokość (piksele)',
  charsLabel: 'Znaki',
  previewLabel: 'Podgląd wizualny',
  copyBtn: 'Kopiuj szerokość',
  resetBtn: 'Resetuj',
  copyDone: 'Szerokość skopiowana',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'kalkulator-szerokosci-pikseli-tekstu',
  title: 'Kalkulator szerokości pikseli tekstu',
  description: 'Dokładnie oblicz, jak szeroki jest dowolny tekst w pikselach na podstawie czcionki, rozmiaru i stylu. Darmowe narzędzie dla projektantów i programistów.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Zmierz dokładną szerokość dowolnego tekstu w pikselach' },
    {
      type: 'paragraph',
      html: 'Czy Twój tekst wystaje poza swój kontener? Musisz wiedzieć, ile miejsca zajmuje nagłówek przed jego wyrenderowaniem? Interfejs <strong>API Canvas przeglądarki</strong> umożliwia pomiar dokładnej szerokości dowolnego ciągu tekstowego z precyzją piksela, bez renderowania go w DOM.',
    },
    { type: 'title', level: 3, text: 'Dlaczego liczenie znaków nie wystarczy' },
    {
      type: 'paragraph',
      html: 'Nowoczesne kroje pisma są <strong>proporcjonalne</strong>: każdy glif ma inną szerokość. Litera „W” może zajmować trzy razy więcej miejsca niż „i”. Liczba znaków nic nie mówi o rzeczywistej przestrzeni wizualnej, jaką zajmuje tekst.',
    },
    {
      type: 'list',
      items: [
        '<strong>Projektowanie stron www:</strong> Zapobiegaj przepełnieniu przycisków, etykiet i komórek tabel.',
        '<strong>SEO:</strong> Wyszukiwarki ucinają tytuły według pikseli, a nie znaków.',
        '<strong>Canvas i PDF:</strong> Oblicz dokładną pozycję przed programowym narysowaniem tekstu.',
        '<strong>Tooltipy i dymki:</strong> Dynamicznie zmieniaj rozmiar kontenerów na podstawie tekstu wewnętrznego.',
      ],
    },
    { type: 'title', level: 3, text: 'Jak działa pomiar za pomocą Canvas' },
    {
      type: 'paragraph',
      html: 'Metoda <code>ctx.measureText()</code> interfejsu API Canvas zwraca obiekt <code>TextMetrics</code> z właściwością <code>width</code> odzwierciedlającą szerokość w pikselach CSS przy użyciu aktualnie aktywnej czcionki. To narzędzie konfiguruje kontekst z Twoją czcionką, rozmiarem, wagą i stylem przed pomiarem.',
    },
    {
      type: 'code',
      ariaLabel: 'Przykład Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Witaj świecie').width; // np. 74.5",
    },
    { type: 'title', level: 3, text: 'Prywatność i przetwarzanie lokalne' },
    {
      type: 'paragraph',
      html: 'Wszystkie obliczenia odbywają się w Twojej przeglądarce. Żaden tekst, fragment kodu ani prywatne dane nie opuszczają Twojego urządzenia.',
    },
    {
      type: 'tip',
      title: 'Kroje pisma Google Fonts',
      html: 'Aby dokładnie zmierzyć krój pisma Google Fonts, najpierw upewnij się, że jest on załadowany na stronie lub zainstalowany w systemie. W przeciwnym razie przeglądarka użyje czcionki zastępczej i wynik będzie się różnił.',
    },
  ],
};
