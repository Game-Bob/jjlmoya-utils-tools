import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Jak korzystać z konwertera pobierania Google Drive?',
    answer: 'Skopiuj pełny link „Udostępnij” dowolnego pliku zapisanego na Dysku Google (musi on mieć uprawnienia publiczne). Wklej go do pola tekstowego narzędzia i kliknij „Generuj link bezpośredni”. Pojawi się nowy adres URL, który rozpocznie pobieranie bez otwierania przeglądarki Google.',
  },
  {
    question: 'Czy mogę wygenerować bezpośredni link do pobrania prywatnego pliku?',
    answer: 'Jeśli plik jest prywatny lub dostęp do niego jest ograniczony, Google poprosi Cię o zalogowanie się na autoryzowane konto. Aby pobieranie przebiegało bez zakłóceń i bez rejestracji, uprawnienia do pliku muszą być ustawione na „Każda osoba mająca link może przeglądać”.',
  },
  {
    question: 'Czy konwertowanie moich linków do Drive tutaj jest bezpieczne?',
    answer: 'Tak. Konwersja odbywa się w 100% w Twojej przeglądarce i jest całkowicie anonimowa. Narzędzie nie przechowuje Twojego linku ani nie wykonuje żadnych połączeń z serwerem; jedynie analizuje strukturę adresu URL po stronie klienta, aby wygenerować wersję do pobrania.',
  },
  {
    question: 'Co się stanie, jeśli mój plik na Drive jest bardzo duży?',
    answer: 'W przypadku plików większych niż około 100 MB Dysk Google nie pozwala na natychmiastowe bezpośrednie pobieranie. Zamiast tego wyświetla stronę z ostrzeżeniem o rozmiarze pliku i pominięciu skanowania antywirusowego. Jest to stała polityka serwerów Google, której żadne zewnętrzne narzędzie nie może obejść.',
  },
];

const howToData = [
  { name: 'Skopiuj link do udostępniania', text: 'Na Dysku Google kliknij plik prawym przyciskiem myszy i wybierz „Pobierz link”. Upewnij się, że uprawnienia pozwalają na dostęp każdej osobie mającej link.' },
  { name: 'Wklej link do generatora', text: 'Wprowadź pełny adres URL Dysku w polu tekstowym narzędzia i kliknij przycisk „Generuj link bezpośredni”.' },
  { name: 'Skopiuj i użyj wygenerowanego linku', text: 'Skopiuj nowy bezpośredni link do pobrania i używaj go w wiadomościach e-mail, na stronach internetowych, w newsletterach lub wszędzie tam, gdzie potrzebujesz, aby plik został pobrany natychmiast po kliknięciu.' },
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
  name: 'Jak wygenerować bezpośredni link do pobrania z Dysku Google',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator Bezpośrednich Linków do Pobierania z Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Konwertuj dowolny link do udostępniania na Dysku Google na bezpośredni link do pobrania jednym kliknięciem, pomijając stronę podglądu pliku. Darmowe narzędzie.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Wklej tutaj swój link do Google Drive:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Generuj Link Bezpośredni',
  resultLabel: 'Bezpośredni Link do Pobrania:',
  copyTitle: 'Kopiuj do schowka',
  copyDone: 'Skopiowano',
  testBtn: 'Testuj Pobieranie',
  errorMsg: 'Wprowadzony link nie wydaje się być prawidłowym linkiem do Dysku Google.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'bezposredni-link-do-pobierania-google-drive',
  title: 'Generator Bezpośrednich Linków do Pobierania z Google Drive',
  description: 'Łatwo konwertuj dowolny link do udostępniania na Dysku Google na bezpośredni link do pobrania jednym kliknięciem, pomijając podgląd pliku. Darmowe narzędzie.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Pobieranie plików z Dysku Google (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Pobieranie plików', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konwertuj linki udostępniania Google Drive na bezpośrednie linki do pobrania' },
    {
      type: 'paragraph',
      html: 'Jeśli często udostępniasz pliki za pośrednictwem Dysku Google, wiesz, jak irytująca może być strona podglądu. Gdy Twoi użytkownicy klikną Twój link, trafiają na ekran pośredni, który zmusza ich do znalezienia przycisku pobierania. Nasz <strong>generator bezpośrednich linków do pobierania z Google Drive</strong> rozwiązuje ten problem, konwertując dowolny link do udostępniania na taki, który automatycznie rozpoczyna pobieranie.',
    },
    { type: 'title', level: 3, text: 'Dlaczego warto używać bezpośredniego linku do pobrania?' },
    {
      type: 'paragraph',
      html: 'Główną korzyścią jest znacznie lepsze doświadczenie użytkownika. Udostępniając PDF, obraz lub instalator oprogramowania, użytkownicy oczekują, że kliknięcie linku natychmiast rozpocznie pobieranie:',
    },
    {
      type: 'list',
      items: [
        '<strong>Oszczędność czasu:</strong> Pobieranie jednym kliknięciem bez dodatkowych kroków.',
        '<strong>Profesjonalny wygląd:</strong> Idealny do przycisków pobierania na stronach internetowych, w newsletterach lub e-mailach do klientów.',
        '<strong>Mniejsza liczba rezygnacji:</strong> Użytkownicy mniej zaawansowani technicznie mogą być zdezorientowani podglądem na Dysku i nie wiedzieć, jak pobrać plik.',
        '<strong>Gotowy do HTML:</strong> Idealny dla atrybutów <code>href</code> lub <code>src</code> na Twoich stronach internetowych.',
      ],
    },
    { type: 'title', level: 3, text: 'Jak działa generator bezpośrednich linków?' },
    {
      type: 'paragraph',
      html: 'Wszystko odbywa się w 100% w Twojej przeglądarce. Linki do udostępniania na Dysku Google zawierają unikalny identyfikator pliku. Narzędzie wyodrębnia ten identyfikator i buduje nowy adres URL, używając natywnego parametru eksportu Google: <code>https://drive.google.com/uc?export=download&amp;id=TWOJ_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Ostrzeżenie dla dużych plików',
      html: 'W przypadku plików o rozmiarze powyżej około 100 MB Dysk Google wyświetla stronę z ostrzeżeniem o skanowaniu antywirusowym przed rozpoczęciem pobierania. Jest to stała polityka serwerów Google, której żadne zewnętrzne narzędzie nie może pominąć.',
    },
    { type: 'title', level: 3, text: 'Gwarancja prywatności i bezpieczeństwa' },
    {
      type: 'paragraph',
      html: 'To narzędzie w pełni szanuje Twoją prywatność. Cała transformacja linku jest wykonywana za pomocą JavaScriptu po stronie klienta na Twoim własnym urządzeniu. Żaden link, identyfikator pliku ani dane osobowe nie są wysyłane do żadnego zewnętrznego serwera.',
    },
  ],
};
