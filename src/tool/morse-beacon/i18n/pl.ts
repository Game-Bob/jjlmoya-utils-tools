import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Jaki jest sygnał ratunkowy SOS w kodzie Morse\'a?',
    answer: "Sygnał to '... --- ...' (trzy kropki, trzy kreski, trzy kropki). Jest on nadawany w sposób ciągły, bez odstępów między literami, aby wskazać na bezpośrednie zagrożenie.",
  },
  {
    question: 'Dlaczego latarka nie działa w mojej przeglądarce?',
    answer: 'Aktywacja latarki wymaga od przeglądarki zezwolenia na dostęp do aparatu. Niektóre przeglądarki mobilne lub starsze wersje stacjonarne nie obsługują tego interfejsu API ze względów prywatności.',
  },
  {
    question: 'Czy sygnał SOS na ekranie jest widoczny?',
    answer: 'Tak, w warunkach całkowitej ciemności maksymalna jasność białego ekranu migającego w kodzie Morse\'a może być widoczna z odległości kilkuset metrów, co czyni go użyteczną alternatywą w przypadku awarii latarki.',
  },
  {
    question: 'Co to jest międzynarodowy kod Morse\'a?',
    answer: 'Jest to system komunikacji wykorzystujący sekwencje krótkich (kropki) i długich (kreski) sygnałów do reprezentowania liter i cyfr, ustandaryzowany przez ITU dla komunikacji radiowej i sygnałów optycznych.',
  },
];

const howToData = [
  {
    name: 'Napisz wiadomość',
    text: "Wprowadź tekst, który chcesz przesłać, lub użyj wstępnie skonfigurowanego przycisku „SOS” w sytuacjach awaryjnych.",
  },
  {
    name: 'Skonfiguruj prędkość',
    text: 'Dostosuj WPM (słowa na minutę), aby przyspieszyć lub spowolnić sygnał w zależności od widoczności.',
  },
  {
    name: 'Wybierz źródło światła',
    text: 'Włącz miganie na pełnym ekranie lub zezwól na dostęp do latarki aparatu, aby uzyskać silniejszy sygnał.',
  },
  {
    name: 'Rozpocznij transmisję',
    text: 'Naciśnij Nadawaj, aby system automatycznie przekonwertował tekst na wizualne impulsy zgodnie ze standardem Morse\'a.',
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
  name: 'Jak używać nadajnika Morse\'a do przesyłania wiadomości',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nadajnik Morse\'a: Taktyczny nadajnik SOS',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Zmień swoje urządzenie w stację nadawczą Morse\'a. Używaj lampy błyskowej i ekranu jako awaryjnych sygnałów świetlnych i komunikacji taktycznej.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Wiadomość do nadania',
  placeholder: 'Wpisz tutaj swoją wiadomość (SOS, CZEŚĆ, POMOC)...',
  btnTransmit: 'Nadawaj',
  btnSosLoop: 'Pętla SOS',
  btnStop: 'Stop',
  labelTorch: 'Lampa/Latarka',
  statusStandby: 'GOTOWOŚĆ',
  statusTransmitting: 'NADAWANIE',
  statusStopping: 'ZATRZYMYWANIE...',
  statusWaiting: 'OCZEKIWANIE',
  statusReady: 'SPRZĘT GOTOWY',
  statusNoTorch: 'BRAK LATARKI',
  statusNoPermission: 'BRAK ZGODY',
  statusNotSupported: 'NIEBSŁUGIWANE',
  statusReqHttps: 'WYMAGANE HTTPS',
  statusSending: 'WYSYŁANIE:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'znak-morse-a',
  title: 'Nadajnik Morse\'a: Taktyczny nadajnik SOS',
  description: 'Zmień swoje urządzenie w stację nadawczą Morse\'a. Używaj lampy błyskowej i ekranu jako awaryjnych sygnałów świetlnych i komunikacji taktycznej.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Międzynarodowy kod Morse\'a', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Kod Morse\'a — Wikipedia', url: 'https://pl.wikipedia.org/wiki/Kod_Morse%E2%80%99a' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Język światła',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie zamienia Twoje urządzenie w optyczny nadajnik sygnałowy, zdolny do przesyłania wiadomości widocznych z odległości wielu kilometrów. Korzystając z międzynarodowego standardu kodu Morse\'a, umożliwia cichą lub alarmową komunikację za pomocą impulsów świetlnych (latarka i ekran).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Uniwersalny standard',
          description: 'Opracowany w 1830 roku przez Samuela Morse\'a, ten binarny system kropek i kresek zrewolucjonizował telekomunikację. Jego prostota czyni go niezwykle solidnym: może być przesyłany za pomocą dźwięku, radia, elektryczności lub światła i pozostaje czytelny nawet przy silnych zakłóceniach.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'Tryb awaryjny SOS',
          description: "Przycisk „Pętla SOS” w sposób ciągły nadaje sekwencję ··· --- ···. Sygnał ten jest powszechnie rozpoznawany jako wezwanie o pomoc i dzięki wysokiemu kontrastowi latarki LED jest widoczny z dużej odległości nawet w świetle dziennym w określonych warunkach.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Standard ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie ściśle przestrzega <strong>czasów regulacyjnych</strong> międzynarodowego kodu Morse\'a, zgodnie z definicją Międzynarodowego Związku Telekomunikacyjnego.',
    },
    {
      type: 'list',
      items: [
        '1 kropka = 1 jednostka czasu',
        '1 kreska = 3 jednostki czasu',
        'Odstęp między elementami = 1 jednostka',
        'Odstęp między literami = 3 jednostki',
        'Odstęp między słowami = 7 jednostek',
      ],
    },
    {
      type: 'tip',
      title: 'Standardowa prędkość',
      html: 'Domyślna prędkość to <strong>15 WPM</strong> (słów na minutę), co odpowiada profesjonalnemu tempu transmisji. Przy 15 WPM, 1 jednostka = 80 ms.',
    },
  ],
};
