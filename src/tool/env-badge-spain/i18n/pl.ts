import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Co się stanie, jeśli wjadę pojazdem bez plakietki do Strefy Czystego Transportu (ZBE) w Hiszpanii?',
    answer: 'Wjazd do ZBE w głównym mieście Hiszpanii pojazdem, który nie posiada plakietki środowiskowej i nie ma specjalnego zwolnienia, skutkuje mandatem za poważne wykroczenie, który wynosi zazwyczaj 200 euro.',
  },
  {
    question: 'Czy muszę naklejać fizyczną naklejkę DGT na przednią szybę?',
    answer: 'DGT zaleca jej naklejenie, ale mandaty za jej brak są ustalane przez poszczególne władze lokalne. W Madrycie jest to obowiązkowe, podczas gdy w innych miastach egzekwowanie przepisów opiera się całkowicie na kamerach z automatycznym rozpoznawaniem tablic rejestracyjnych.',
  },
  {
    question: 'Mój diesel został zarejestrowany przed 2006 rokiem, ale w karcie technicznej widnieje Euro 4. Czy mogę otrzymać plakietkę?',
    answer: 'Tak. Jeśli dane pojazdu posiadane przez organy ruchu drogowego odzwierciedlają jedynie datę rejestracji, możesz wystąpić o stosowne zaświadczenie u producenta za pośrednictwem oficjalnego dealera i przedstawić je w urzędzie ruchu drogowego w celu skorygowania klasyfikacji.',
  },
  {
    question: 'Co dla samochodów w Hiszpanii w 2025 roku oznacza plakietka C (zielona)?',
    answer: 'W większości stref ZBE nadal można poruszać się swobodnie, ale plakietka C ogranicza parkowanie na ulicy. Wymagane będzie korzystanie z parkingów podziemnych lub autoryzowanych parkingów w pobliżu granic ZBE.',
  },
];

const howToData = [
  { name: 'Wybierz typ pojazdu', text: 'Wybierz, czy Twój pojazd to samochód osobowy/dostawczy, motocykl czy pojazd ciężki. Każda kategoria ma inną logikę klasyfikacji według hiszpańskich przepisów o ruchu drogowym.' },
  { name: 'Wybierz rodzaj paliwa lub energii', text: 'Napęd elektryczny, hybrydowy typu plug-in, klasyczna hybryda, gaz, benzyna lub diesel prowadzą do różnych wyników. Próg zasięgu dla hybryd plug-in wynosi 40 km.' },
  { name: 'Wprowadź rok rejestracji lub normę Euro', text: 'W przypadku pojazdów spalinowych decydującym czynnikiem jest norma Euro. Data rejestracji w karcie technicznej daje wiarygodne przybliżenie normy.' },
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
  name: 'Jak zasymulować hiszpańską plakietkę środowiskową DGT dla swojego pojazdu',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Symulator Hiszpańskiej Plakietki Środowiskowej DGT',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Dowiedz się, która hiszpańska plakietka środowiskowa DGT ma zastosowanie do Twojego pojazdu na podstawie jego typu, paliwa i roku rejestracji. Darmowe narzędzie przygotowujące do wjazdu do Stref Czystego Transportu w Hiszpanii.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Typ pojazdu',
  vehicleCar: 'Osobowy / Dostawczy',
  vehicleMoto: 'Motocykl',
  vehicleHeavy: 'Ciężarowy / Autobus',
  errVehicle: 'Wybierz typ pojazdu',

  step2Label: '2. Paliwo lub energia',
  fuelElectric: '100% Elektryczny / Ogniwo paliwowe',
  fuelPhevHigh: 'Hybryda Plug-in (>40 km)',
  fuelPhevLow: 'Hybryda Plug-in (<40 km)',
  fuelHybridGas: 'Hybryda (HEV) lub Gaz',
  fuelGasoline: 'Benzyna',
  fuelDiesel: 'Diesel',
  errFuel: 'Wybierz rodzaj paliwa lub energii',

  step3Label: '3. Norma Euro lub rok rejestracji',
  yearPre2000: 'Przed 2000',
  year20002005: '2000 do 2005',
  year20062013: '2006 do 2013',
  yearPost2014: '2014 lub później',
  errYear: 'Wybierz okres rejestracji',
  helpText: 'W razie wątpliwości norma Euro widniejąca w karcie technicznej ma pierwszeństwo przed datą rejestracji.',

  submitBtn: 'Sprawdź moją plakietkę',

  resultTitle: 'Przypisana plakietka',

  badge0Label: 'Plakietka Zero Emisji',
  badge0Letter: '0',
  badge0Sub: 'EMISJI',
  badge0Desc: 'Pojazdy o maksymalnej efektywności. Cieszą się nieograniczonym dostępem do Stref Czystego Transportu (ZBE) w Hiszpanii oraz szerokimi zwolnieniami podatkowymi.',

  badgeEcoLabel: 'Plakietka ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Pojazdy niskoemisyjne, takie jak hybrydy i samochody zasilane gazem. Pozwala na dostęp do większości stref ZBE i zapewnia zniżki w regulowanych strefach parkowania.',

  badgeCLabel: 'Plakietka C',
  badgeCLetter: 'C',
  badgeCDesc: 'Nowoczesne pojazdy spalinowe z wysoką normą Euro. Swobodna cyrkulacja, ale z ograniczeniami parkowania na ulicy w niektórych obszarach ZBE.',

  badgeBLabel: 'Plakietka B',
  badgeBLetter: 'B',
  badgeBDesc: 'Starsze pojazdy spalinowe. Podlegają większym ograniczeniom wjazdu i parkowania w hiszpańskich miastach.',

  badgeALabel: 'Brak plakietki',
  badgeALetter: 'BRAK',
  badgeASub: 'PLAKIETKI',
  badgeADesc: 'Pojazdy o wysokiej emisji spalin, nieuprawnione do otrzymania plakietki. Są stopniowo wykluczane z centrów miast i Stref Czystego Transportu w całej Hiszpanii.',

  warningText: 'Zawsze zweryfikuj wynik na oficjalnej stronie DGT, wpisując numer rejestracyjny, aby potwierdzić wynik, szczególnie w przypadku rozbieżności administracyjnych.',
  resetBtn: 'Nowa symulacja',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'symulator-naklejki-ekologicznej-hiszpania',
  title: 'Symulator Hiszpańskiej Plakietki Środowiskowej',
  description: 'Dowiedz się za darmo, która hiszpańska plakietka środowiskowa DGT dotyczy Twojego samochodu, motocykla lub furgonetki w kontekście Stref Czystego Transportu (ZBE) w Hiszpanii.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Przepisy DGT dotyczące zmian klimatycznych i ruchu drogowego (hiszp.)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Hiszpańska ustawa o zmianie klimatu i Strefy Czystego Transportu (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Czym jest hiszpańska plakietka środowiskowa DGT?' },
    {
      type: 'paragraph',
      html: '<strong>Hiszpańska plakietka środowiskowa DGT</strong> (distintivo ambiental) to system klasyfikacji pojazdów wprowadzony w Hiszpanii, aby preferencyjnie traktować pojazdy najmniej zanieczyszczające środowisko. Służy głównie do kontroli wjazdu do Stref Czystego Transportu (ZBE) w miastach liczących powyżej 50 000 mieszkańców.',
    },
    { type: 'title', level: 3, text: 'Typy plakietek i ich zalety w Hiszpanii' },
    {
      type: 'list',
      items: [
        '<strong>Plakietka Zero Emisji:</strong> Dla pojazdów w pełni elektrycznych, hybryd plug-in o zasięgu elektrycznym powyżej 40 km oraz ogniw paliwowych na wodór. Nieograniczony wjazd do ZBE i zwolnienia podatkowe.',
        '<strong>Plakietka ECO:</strong> Klasyczne hybrydy, LPG, CNG oraz hybrydy plug-in o zasięgu poniżej 40 km. Szeroki dostęp do stref ograniczonego ruchu i zniżki na parkowanie.',
        '<strong>Plakietka C:</strong> Benzyna Euro 4 lub nowsza, Diesel Euro 6. Swobodne poruszanie się, ale z ograniczeniami parkowania na ulicy w pobliżu ZBE.',
        '<strong>Plakietka B:</strong> Benzina Euro 3, Diesel Euro 4 lub 5. Coraz większe ograniczenia i okazjonalne zakazy wjazdu.',
        '<strong>Brak plakietki (Kategoria A):</strong> Starsze lub bardziej zanieczyszczające pojazdy, stopniowo wykluczane z centrów hiszpańskich miast od 2024 roku.',
      ],
    },
    { type: 'title', level: 3, text: 'Strefy Czystego Transportu w hiszpańskich miastach' },
    {
      type: 'paragraph',
      html: 'Wprowadzanie ZBE wynika z hiszpańskiej ustawy o zmianie klimatu, która zobowiązuje gminy powyżej określonych progów liczby ludności do ich tworzenia. Znane przykłady to <em>Madrid 360</em> oraz barcelońskie <em>Superilles</em>, gdzie wjazd bez co najmniej plakietki B może skutkować automatycznymi mandatami wystawianymi przez kamery rozpoznające tablice rejestracyjne.',
    },
    {
      type: 'tip',
      title: 'Jak zdobyć fizyczną naklejkę w Hiszpanii',
      html: 'Jeśli symulator potwierdzi, że jesteś uprawniony do otrzymania plakietki, możesz kupić fizyczną naklejkę za około 5 euro w dowolnym oddziale Correos (poczta), w autoryzowanych warsztatach lub biurach ruchu drogowego. Zabierz ze sobą dowód rejestracyjny pojazdu.',
    },
  ],
};
