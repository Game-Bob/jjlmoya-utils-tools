import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Czy korzystanie z internetowego generatora haseł jest bezpieczne?',
    answer: "Tak, o ile generator działa po stronie klienta. Nasze narzędzie generuje hasła lokalnie w Twojej przeglądarce przy użyciu kryptograficznie bezpiecznych algorytmów. Twoje hasło nigdy nie jest przesyłane przez Internet ani przechowywane na żadnym serwerze.",
  },
  {
    question: "Co sprawia, że hasło jest 'odporne na hakerów'?",
    answer: 'Kluczem jest entropia (losowość). Połączenie wielkich i małych liter, cyfr i symboli specjalnych w połączeniu z minimalną długością 12-16 znaków sprawia, że atak metodą brute-force jest praktycznie niemożliwy przy obecnej technologii.',
  },
  {
    question: 'Dlaczego należy unikać typowych słów lub dat?',
    answer: 'Hakerzy stosują ataki słownikowe, które testują miliony słów, imion i kombinacji dat na sekundę. Całkowicie losowe hasła nie opierają się na żadnych wzorcach językowych, co czyni je znacznie bezpieczniejszymi.',
  },
  {
    question: 'Czy powinienem zapamiętać wszystkie swoje hasła?',
    answer: 'Nie jest to zalecane. Idealnym rozwiązaniem jest użycie menedżera haseł (np. Bitwarden, 1Password lub wbudowanego w przeglądarkę) do przechowywania tych długich, losowych haseł, dzięki czemu musisz zapamiętać tylko jedno silne hasło główne.',
  },
];

const howToData = [
  {
    name: 'Ustaw długość',
    text: 'Użyj suwaka, aby wybrać liczbę znaków w haśle. Obecne standardy bezpieczeństwa zalecają co najmniej 12 znaków.',
  },
  {
    name: 'Wybierz złożoność',
    text: 'Zaznacz opcje wielkich liter, cyfr i symboli zgodnie z wymaganiami witryny, na której będziesz używać hasła.',
  },
  {
    name: 'Wygeneruj hasło',
    text: 'Kliknij przycisk generowania. Każde kliknięcie tworzy unikalną kombinację o wysokiej entropii w oparciu o algorytmy kryptograficzne.',
  },
  {
    name: 'Kopiuj jednym kliknięciem',
    text: 'Użyj przycisku kopiowania, aby w bezpieczny sposób przesłać hasło bezpośrednio do schowka.',
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
  name: 'Jak korzystać z bezpiecznego generatora haseł',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator bezpiecznych losowych haseł',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Błyskawicznie twórz silne, odporne na hakerów hasła. Darmowe narzędzie do cyberbezpieczeństwa do generowania losowych, bezpiecznych kluczy.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Generowanie...',
  labelSecurity: 'Siła',
  labelLength: 'Długość',
  strengthWeak: 'Słabe',
  strengthFair: 'Dostateczne',
  strengthGood: 'Dobre',
  strengthStrong: 'Silne',
  strengthUnbreakable: 'Nie do złamania',
  optionUppercase: 'Wielkie litery',
  optionLowercase: 'Małe litery',
  optionNumbers: 'Cyfry',
  optionSymbols: 'Symbole',
  copyTitle: 'Kopiuj',
  regenerateTitle: 'Wygeneruj nowe',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'generator-hasel',
  title: 'Generator bezpiecznych losowych haseł',
  description: 'Błyskawicznie twórz silne, odporne na hakerów hasła. Darmowe narzędzie do cyberbezpieczeństwa do generowania losowych, bezpiecznych kluczy.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Hasło — Wikipedia', url: 'https://pl.wikipedia.org/wiki/Has%C5%82o' },
    { name: 'Have I Been Pwned — Sprawdź, czy Twoje hasło zostało ujawnione', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Anatomia hasła nie do złamania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Twoje hasło to jedyna barierą między Twoimi danymi osobowymi (bankowość, dokumentacja medyczna, zdjęcia) a cyberprzestępcą. Mimo to przeciętny użytkownik wciąż polega na przewidywalnych wzorcach, takich jak „123456” lub imiona zwierząt, które można złamać w <strong>mniej niż sekundę</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Zagrożenie ze strony Rainbow Tables',
          description: 'Hakerzy nie odgadują hasła po jednej próbie. Korzystają z ogromnych baz danych (Rainbow Tables) zawierających miliony wstępnie obliczonych skrótów (hashy) typowych haseł. Jeśli Twoje hasło znajduje się w słowniku lub jest znanym zwrotem, zostało już skompromitowane, zanim w ogóle zacząłeś go używać.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'Rozwiązanie: Czysta entropia',
          description: 'Entropia mierzy nieporządek lub nieprzewidywalność. Im wyższa entropia (liczba bitów), tym więcej czasu komputer potrzebuje na jej złamanie. To narzędzie wykorzystuje crypto.getRandomValues() — interfejs API przeglądarki, który generuje kryptograficznie bezpieczne liczby losowe, w przeciwieństwie do Math.random(), który jest przewidywalny.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Podstawowe zasady cyberbezpieczeństwa',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Długość ważniejsza niż złożoność',
          description: '20-znakowe hasło składające się wyłącznie z małych liter jest bezpieczniejsze niż 8-znakowe hasło z rzadkimi symbolami. Matematycznie rzecz biorąc, każdy dodatkowy znak potęguje trudność złamania hasła.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Mit podstawiania znaków',
          description: 'Zastępowanie „a” znakiem „@” lub „e” cyfrą „3” (Leetspeak) nikogo nie zwiedzie. Nowoczesne słowniki ataków automatycznie uwzględniają te warianty. Unikaj używania łatwo rozpoznawalnych słów.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Inna strona, inny klucz',
          description: 'Jeśli używasz tego samego hasła do e-maila i na forum, a forum zostanie zhakowane, przestępcy mogą uzyskać dostęp do Twojej skrzynki. Użyj menedżera haseł (np. Bitwarden lub 1Password), aby zapamiętać za Ciebie złożone hasła.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Gwarancja prywatności',
      html: 'Cały proces generowania odbywa się <strong>w Twojej przeglądarce</strong>. Hasło nie jest przesyłane przez Internet ani rejestrowane na żadnym serwerze. Kod źródłowy jest jawny.',
    },
  ],
};
