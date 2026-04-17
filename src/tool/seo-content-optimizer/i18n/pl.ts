import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Jak to narzędzie pomaga w pozycjonowaniu SEO?',
    answer: 'Analizując gęstość słów kluczowych i czytelność zdań, upewniasz się, że Twoja treść jest łatwa do zrozumienia dla użytkowników i istotna dla wyszukiwarek, unikając kar za nadmierną optymalizację.',
  },
  {
    question: 'Jakie elementy HTML sprawdza analiza techniczna?',
    answer: 'Weryfikuje istnienie i unikalność tagu H1, obecność nagłówków H2/H3 oraz atrybuty alt w obrazach.',
  },
  {
    question: 'Czy moja treść jest przechowywana na jakimkolwiek serwerze?',
    answer: 'Nie. Analiza odbywa się w 100% lokalnie w Twojej przeglądarce. Twoja treść nigdy nie opuszcza Twojego komputera.',
  },
  {
    question: 'Czy jest zgodne z kryteriami Yoast SEO?',
    answer: 'Tak, wdrażamy kryteria podobne do Yoast: długość zdań, rozkład akapitów i hierarchia nagłówków.',
  },
];

const howToData = [
  { name: 'Napisz lub wklej tekst', text: 'Wprowadź treść, którą chcesz przeanalizować, w głównym obszarze tekstowym.' },
  { name: 'Przejrzyj listę kontrolną optymalizacji', text: 'Sprawdź alerty dotyczące długości, czytelności i gęstości słów kluczowych w panelu bocznym.' },
  { name: 'Analizuj techniczny kod HTML', text: 'Przełącz się na kartę analizy technicznej, aby zweryfikować tagi H1, opisy alt obrazów i strukturę metadanych.' },
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
  name: 'Jak optymalizować treści pod kątem SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optymalizator Treści SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analizuj gęstość słów kluczowych, czytelność i techniczną strukturę HTML swoich tekstów w czasie rzeczywistym, bez wysyłania danych na serwer.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Analiza tekstu',
  tabHtml: 'Techniczna analiza HTML',
  textareaPlaceholder: 'Wpisz swój tekst lub wklej tutaj kod HTML...',
  statsChars: 'Znaki',
  statsWords: 'Słowa',
  statsReading: 'Czytanie',
  statsSentences: 'Zdania',
  checklistTitle: 'Lista kontrolna optymalizacji',
  keywordsTitle: 'Gęstość słów kluczowych',
  technicalTitle: 'Techniczna analiza HTML',
  h1Label: 'Wykryto H1',
  linksLabel: 'Linki (a)',
  imgsLabel: 'Obrazy (img)',
  altsLabel: 'Brakujące opisy alt',
  emptyState: 'Brak danych',
  analyzing: 'Analizowanie...',
  checkInsufficient: 'Niewystarczająca długość (< 300 słów)',
  checkPillar: 'Doskonała treść typu pillar (> 900 słów)',
  checkGoodLength: 'Dobra długość pod kątem SEO',
  checkLongSentences: 'Zbyt wiele długich zdań (> 25% tekstu)',
  checkGoodReadability: 'Optymalna czytelność zdań',
  checkLongParagraphs: 'Podziel bardzo długie akapity (> 150 słów)',
  checkMissingH1: 'Brak tagu H1',
  checkMultipleH1: 'Wykryto wiele tagów H1',
  checkMissingH2: 'Brak nagłówków (H2)',
  checkMissingTitle: 'Brak tagu meta title',
  stopWords: JSON.stringify(['w', 'z', 'na', 'do', 'o', 'u', 'po', 'za', 'oraz', 'lub', 'i', 'ale', 'też', 'że', 'się', 'by', 'aby', 'dla', 'jest', 'był', 'było', 'były', 'są', 'będą', 'mamy', 'ma', 'miał', 'to', 'ten', 'ta', 'te', 'tych', 'nie', 'tak', 'jak', 'niż', 'mój', 'twój', 'jego', 'jej', 'nasz', 'wasz', 'ich']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'optymalizator-tresci-seo',
  title: 'Optymalizator Treści SEO',
  description: 'Analizuj gęstość słów kluczowych, czytelność i techniczną strukturę HTML swoich tekstów w czasie rzeczywistym. Darmowe i prywatne narzędzie SEO.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: "Wprowadzenie Google do SEO", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pl' },
    { name: 'Kryteria czytelności Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Optymalizator treści SEO: słowa kluczowe, czytelność i struktura' },
    {
      type: 'paragraph',
      html: 'Jakość treści nie jest już mierzona wyłącznie na podstawie zawartych w niej słów kluczowych, ale przez to, jak ustrukturyzujesz informacje, aby były przystępne zarówno dla ludzi, jak i dla robotów Google. Nasze <strong>narzędzie do analizy SEO w czasie rzeczywistym</strong> daje Ci pełną kontrolę nad gęstością słów kluczowych, czytelnością akapitów i podstawowymi technicznymi elementami HTML.',
    },
    { type: 'title', level: 3, text: 'Gęstość słów kluczowych i trafność semantyczna' },
    {
      type: 'paragraph',
      html: '<strong>Gęstość słów kluczowych</strong> wskazuje, jak często dany termin pojawia się w stosunku do reszty tekstu. Nadmierne powtarzanie uruchamia filtry <em>keyword stuffing</em>, podczas gdy bardzo niska gęstość może utrudnić wyszukiwarkom zidentyfikowanie głównego tematu artykułu.',
    },
    {
      type: 'list',
      items: [
        '<strong>Analiza istotności:</strong> Sprawdź, czy najczęściej powtarzane słowa pasują do intencji wyszukiwania.',
        '<strong>Zapobieganie karom:</strong> Unikaj nadmiernego powtarzania terminów, które mogą wyglądać jak spam.',
        '<strong>Optymalizacja semantyczna:</strong> Znajdź równowagę między terminami technicznymi a naturalnym językiem.',
      ],
    },
    { type: 'title', level: 3, text: 'Czytelność w stylu Yoast' },
    {
      type: 'paragraph',
      html: 'Czytelność jest pośrednim, ale kluczowym czynnikiem rankingowym. Jeśli użytkownicy opuszczają stronę, ponieważ akapity to niekończące się bloki tekstu, Twój <em>Dwell Time</em> spada. Analizator wykrywa długie zdania (powyżej 20 słów), akapity powyżej 150 słów i sprawdza obecność nagłówków.',
    },
    {
      type: 'tip',
      title: 'Czas czytania',
      html: 'Większość użytkowników decyduje, czy przeczytać artykuł, w czasie krótszym niż 10 sekund. Znajomość szacowanego czasu czytania (obliczanego przy średniej 200 słów na minutę) pomaga zmniejszyć współczynnik odrzuceń poprzez ustalenie oczekiwań czytelnika.',
    },
    { type: 'title', level: 3, text: 'Techniczna analiza HTML' },
    {
      type: 'paragraph',
      html: 'Wklej swój kod źródłowy, aby zweryfikować kluczowe elementy: unikalność <strong>H1</strong>, obecność nagłówków H2/H3, obrazy bez atrybutów <code>alt</code> oraz istnienie tagu <code>title</code>. Całe przetwarzanie odbywa się w Twojej przeglądarce, bez wysyłania danych na żaden serwer.',
    },
  ],
};
