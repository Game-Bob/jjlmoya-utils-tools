import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Czy ten kalkulator różnicy dat jest darmowy?',
    answer: 'Tak, jest to w 100% darmowe narzędzie dostępne z dowolnej przeglądarki, bez konieczności rejestracji ani pobierania czegokolwiek.',
  },
  {
    question: 'Jak uwzględniane są lata przestępne w całkowitym czasie?',
    answer: 'Narzędzie korzysta ze standardowej chronologii JavaScript (UTC), która automatycznie obsługuje lata przestępne i zmienną liczbę dni w każdym miesiącu, aby podać dokładny wynik.',
  },
  {
    question: 'Czy mogę obliczyć również różnicę między godzinami i minutami?',
    answer: 'Tak. Pola wejściowe pozwalają wybrać dokładną godzinę. Wynik podaje podział na dni, godziny, minuty i sekundy, a także skumulowane sumy.',
  },
  {
    question: 'Czy moje dane dat są wysyłane na jakikolwiek serwer?',
    answer: 'Nie. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce. Nie przechowujemy ani nie otrzymujemy żadnych informacji o obliczanych datach.',
  },
];

const howToData = [
  { name: 'Wybierz datę początkową', text: "Wprowadź datę i godzinę rozpoczęcia lub kliknij 'Dzisiaj', aby ustawić ją natychmiast." },
  { name: 'Wybierz datę końcową', text: "Zdefiniuj moment docelowy. Użyj 'Teraz', aby zmierzyć czas, który upłynął do tej dokładnej chwili." },
  { name: 'Odczytaj wyniki', text: 'Sprawdź podział na dni, godziny, minuty i sekundy, a także skumulowane sumy dla tygodni i godzin.' },
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
  name: 'Jak obliczyć różnicę między dwiema datami',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Różnicy Dat',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Oblicz dokładnie, ile czasu upłynęło między dwiema datami lub ile czasu pozostało do wydarzenia. Wyniki w dniach, godzinach i minutach.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Data Początkowa',
  endLabel: 'Data Końcowa',
  nowBtn: 'Teraz',
  todayBtn: 'Dzisiaj',
  tomorrowBtn: 'Jutro',
  daysLabel: 'Dni',
  hoursLabel: 'Godziny',
  minsLabel: 'Min',
  secsLabel: 'Sek',
  weeksLabel: 'Łącznie Tygodni',
  totalHoursLabel: 'Łącznie Godzin',
  totalMinsLabel: 'Łącznie Minut',
  elapsed: 'Czas, który Upłynął',
  past: 'Czas w Przeszłości',
  invalidDates: 'Nieprawidłowe daty',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'kalkulator-roznicy-dat',
  title: 'Kalkulator Różnicy Dat',
  description: 'Oblicz dokładnie, ile czasu upłynęło między dwiema datami lub ile czasu pozostało do wydarzenia. Darmowe narzędzie z wynikami w dniach, godzinach i minutach.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: Historia kalendarza gregoriańskiego', url: 'https://pl.wikipedia.org/wiki/Kalendarz_gregoriański' },
    { name: 'Wikipedia: Macierz Eisenhowera i zarządzanie czasem', url: 'https://pl.wikipedia.org/wiki/Zarządzanie_czasem' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator różnicy dat z dniami, godzinami i minutami' },
    {
      type: 'paragraph',
      html: 'Obliczanie <strong>różnicy między dwiema datami</strong> to jedno z najczęstszych i najbardziej niedocenianych zadań zarówno w życiu codziennym, jak i w środowisku zawodowym. Niezależnie od tego, czy planujesz wprowadzenie produktu na rynek, obliczasz dokładny wiek osoby, czy mierzysz czas pozostały do specjalnego wydarzenia, posiadanie precyzyjnego narzędzia jest niezbędne do efektywnego zarządzania czasem.',
    },
    { type: 'title', level: 3, text: 'Do czego służy kalkulator różnicy dat?' },
    {
      type: 'paragraph',
      html: 'Użyteczność tego narzędzia rozciąga się na wiele dziedzin. W pracy kierownicy projektów używają go do definiowania terminów dostaw i śledzenia postępów kamieni milowych. W kontekstach prawnych i administracyjnych jest niezbędny do obliczania terminów przedawnienia lub czasu trwania umów.',
    },
    {
      type: 'list',
      items: [
        '<strong>Planowanie wydarzeń:</strong> Dowiedz się, ile tygodni i dni pozostało do ślubu, konferencji lub podróży.',
        '<strong>Zarządzanie projektami:</strong> Oblicz czas, który upłynął od rozpoczęcia fazy do jej zakończenia.',
        '<strong>Finanse:</strong> Określ liczbę dni do obliczenia odsetek lub terminów płatności faktur.',
        '<strong>Zasoby Ludzkie:</strong> Mierz staż pracy pracowników lub skumulowane dni urlopu.',
        '<strong>Zdrowie:</strong> Śledź postępy leczenia lub czas powrotu do zdrowia po zabiegu.',
      ],
    },
    { type: 'title', level: 3, text: 'Percepcja czasu i cyfrowa precyzja' },
    {
      type: 'paragraph',
      html: 'Często mamy tendencję do zaokrąglania czasu. Mówimy „około miesiąca”, gdy w rzeczywistości pozostało 27 dni i 14 godzin. Korzystając z kalkulatora cyfrowego, eliminujemy subiektywizm i uzyskujemy czyste dane do podejmowania świadomych decyzji.',
    },
    { type: 'title', level: 3, text: 'Dni kalendarzowe a dni robocze' },
    {
      type: 'paragraph',
      html: 'To narzędzie oblicza <strong>dni kalendarzowe</strong>, w tym weekendy i święta państwowe. W przypadku obliczeń astronomicznych i ogólnych cywilnych czas mierzony jest w sposób ciągły. Jeśli musisz oszacować czas projektu, pamiętaj, że pokazane dni reprezentują pełny rzeczywisty kalendarz.',
    },
    { type: 'title', level: 3, text: 'Wpływ czasu na produktywność' },
    {
      type: 'paragraph',
      html: 'Prawo Parkinsona mówi, że praca rozszerza się tak, aby wypełnić czas dostępny na jej ukończenie. Wizualizując dokładnie, ile godzin i minut pozostało do terminu, zespoły mają tendencję do optymalizacji wysiłków i zachowania koncentracji.',
    },
    {
      type: 'tip',
      title: 'Daty przyszłe i przeszłe',
      html: 'Możesz używać kalkulatora zarówno dla dat przyszłych, jak i przeszłych. Jeśli data końcowa jest wcześniejsza niż data początkowa, system automatycznie wykryje, że jest to czas, który upłynął w przeszłości, zachowując precyzję w wartościach różnicy bezwzględnej.',
    },
  ],
};
