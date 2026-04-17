import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Co dokładnie robi ten czyścik do list e-mailowych?',
    answer: 'Narzędzie analizuje listę e-mailową, usuwa duplikaty, czyści niepotrzebne spacje, sprawdza poprawność formatu i normalizuje wszystkie adresy do małych liter, aby zapewnić czystą bazę danych.',
  },
  {
    question: 'Czy istnieje limit liczby e-maili?',
    answer: 'Nie ma ścisłego limitu rekordów. Możesz przetworzyć tysiące e-maili natychmiast za jednym razem. Jedynym ograniczeniem jest pamięć Twojej przeglądarki, jeśli lista jest wyjątkowo duża.',
  },
  {
    question: 'Czy wklejanie tutaj moich e-maili jest bezpieczne?',
    answer: 'Absolutnie. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce za pomocą JavaScriptu. Twoje dane nigdy nie są wysyłane na nasze serwery ani przechowywane w żadnej zewnętrznej bazie danych.',
  },
  {
    question: 'Jak to poprawia dostarczalność moich kampanii?',
    answer: 'Usuwając nieistniejące lub źle sformatowane adresy, zmniejszasz współczynnik odrzuceń (bounce rate), co poprawia reputację Twojej domeny u dostawców takich jak Gmail, Outlook i Yahoo.',
  },
];

const howToData = [
  { name: 'Wklej swoje e-maile', text: 'Skopiuj swoją listę e-mailową i wklej ją do pola tekstowego. Mogą być oddzielone liniami, przecinkami lub spacjami.' },
  { name: 'Wyczyść listę', text: 'Kliknij przycisk „Wyczyść Listę”, aby rozpocząć proces walidacji i usuwania duplikatów.' },
  { name: 'Przejrzyj wyniki', text: 'Sprawdź statystyki pokazujące e-maile oryginalne vs. finalne i przejrzyj wyczyszczoną listę w dolnym panelu.' },
  { name: 'Skopiuj lub pobierz', text: 'Skopiuj wynik bezpośrednio do schowka lub pobierz go jako gotowy do użycia plik .txt.' },
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
  name: 'Jak wyczyścić listę e-mailową',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Czyścik do List E-mailowych',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Usuwaj duplikaty, naprawiaj spacje i waliduj formaty na swojej liście e-mailowej. Darmowe narzędzie bez limitu rekordów.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Lista e-mailowa',
  inputPlaceholder: 'Wklej tutaj swoją listę e-mailową (oddzieloną liniami, przecinkami lub spacjami)...',
  cleanBtn: 'Wyczyść Listę',
  clearBtn: 'Wyczyść Wszystko',
  statsOriginal: 'Oryginalne',
  statsRemoved: 'Usunięte',
  statsFinal: 'Czyste',
  resultLabel: 'Czysty Wynik',
  copyBtn: 'Kopiuj Listę',
  copyDone: 'Skopiowano!',
  downloadBtn: 'Pobierz .txt',
  registered: 'zarejestrowanych',
  downloadFilename: 'wyczyszczone-emaile',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'czyscik-list-emailowych',
  title: 'Czyścik do List E mailowych',
  description: 'Czyść listy e-mailowe za darmo. Usuwaj duplikaty, naprawiaj spacje i waliduj formaty w kilka sekund. Oszczędzaj koszty i popraw dostarczalność.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Wytyczne dla nadawców e-maili', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Spam (poczta elektroniczna)', url: 'https://pl.wikipedia.org/wiki/Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Dlaczego korzystanie z czyścika do list e-mailowych jest niezbędne?' },
    {
      type: 'paragraph',
      html: 'W świecie marketingu cyfrowego jakość Twojej bazy danych liczy się znacznie bardziej niż jej rozmiar. Posiadanie listy 50 000 e-maili jest bezwartościowe, jeśli połowa z nich to nieistniejące adresy, zawiera literówki lub duplikaty. To tutaj <strong>czyścik do list e-mailowych</strong> staje się niezbędny.',
    },
    { type: 'title', level: 3, text: 'Ryzyko posiadania brudnej listy e-mailowej' },
    {
      type: 'paragraph',
      html: 'Utrzymywanie niewyczyszczonej bazy danych może mieć poważne konsekwencje. Wysyłanie e-maili na adresy, które nie istnieją, generuje „hard bounce”. Jeśli ten procent przekroczy 2-3%, filtry antyspamowe zaczną uważnie przyglądać się Twojej domenie i możesz trafić na międzynarodową czarną listę.',
    },
    {
      type: 'tip',
      title: 'Wskazówka eksperta',
      html: 'Nigdy nie kupuj list e-mailowych. To najszybszy sposób na zrujnowanie reputacji Twojej domeny. Buduj własną listę organicznie i czyść ją co 3 do 6 miesięcy.',
    },
    { type: 'title', level: 3, text: 'Jak nasze narzędzie optymalizuje Twoją bazę danych' },
    {
      type: 'paragraph',
      html: 'Nasze darmowe narzędzie wykonuje dokładne i szybkie czyszczenie baz danych bez limitów rekordów. Natychmiast wykonuje kilka krytycznych zadań walidacyjnych:',
    },
    {
      type: 'list',
      items: [
        '<strong>Usuwanie duplikatów:</strong> Ten sam użytkownik nie otrzyma tego samego e-maila dwa razy.',
        '<strong>Korekta spacji:</strong> Usuwamy przypadkowe spacje na początku lub na końcu, które unieważniłyby wysyłkę.',
        '<strong>Walidacja formatu:</strong> Filtrujemy wpisy, które nie mają poprawnej struktury e-maila.',
        '<strong>Normalizacja:</strong> Wszystko jest konwertowane na małe litery, aby uniknąć nadmiarowych rekordów.',
      ],
    },
    { type: 'title', level: 3, text: 'Kiedy jest odpowiedni czas na wyczyszczenie listy?' },
    {
      type: 'list',
      items: [
        'Przed importem kontaktów do nowego CRM lub platformy wysyłkowej (Mailchimp, SendGrid itp.).',
        'Jeśli zauważysz, że współczynnik otwarć spadł poniżej zwykłej średniej.',
        'Po wydarzeniu lub targach, na których zbierałeś dane ręcznie.',
        'W ramach prewencyjnej konserwacji co kwartał, aby zachować zdrowie domeny.',
      ],
    },
    { type: 'title', level: 3, text: 'Wpływ na zwrot z inwestycji' },
    {
      type: 'paragraph',
      html: 'E-mail marketing pozostaje jednym z kanałów o najwyższym ROI, ale tylko wtedy, gdy wiadomości trafiają do skrzynki odbiorczej. Korzystając z <strong>czyścika e-maili</strong>, optymalizujesz swój lejek sprzedaży u źródła i przestajesz płacić platformom za kontakty, które nigdy nie zobaczą Twoich wiadomości.',
    },
    {
      type: 'tip',
      title: 'Zastosuj double opt in',
      html: 'Najlepszym sposobem na uniknięcie fałszywych e-maili jest wymaganie od użytkowników potwierdzenia subskrypcji poprzez kliknięcie w link wysłany na ich skrzynkę odbiorczą. Gwarantuje to, że e-mail istnieje i że użytkownik ma do niego dostęp.',
    },
  ],
};
