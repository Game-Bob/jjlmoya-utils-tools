import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Czym jest prosta reguła trzech?',
    answer: 'To matematyczna metoda rozwiązywania problemów proporcjonalności pomiędzy trzema znanymi wartościami a jedną niewiadomą. Nazywa się ją „prostą”, ponieważ gdy jedna wielkość rośnie, druga rośnie w tej samej proporcji.',
  },
  {
    question: 'Kiedy należy stosować odwrotną regułę trzech?',
    answer: 'Stosuje się ją, gdy wielkości są odwrotnie proporcjonalne (jeśli jedna rośnie, druga maleje). Na przykład: jeśli 2 malarzy pracuje 5 godzin, 4 malarzy będzie pracować krócej. Nasz obecny kalkulator skupia się na proporcjonalności prostej.',
  },
  {
    question: 'Czy jest wystarczająco dokładny do profesjonalnych obliczeń?',
    answer: 'Tak. Nasz kalkulator wykorzystuje wysoką precyzję zmiennoprzecinkową, idealną do dostosowywania dawek, skalowania projektów graficznych, budżetów komercyjnych i przeliczania przepisów.',
  },
  {
    question: 'Jak obliczyć to ręcznie?',
    answer: 'Wzór to: (Wartość B * Wartość C) / Wartość A = X. Oznacza to, że mnożysz wartości po przekątnej i dzielisz wynik przez pozostałą wartość.',
  },
];

const howToData = [
  {
    name: 'Określ podstawową zależność',
    text: 'Wprowadź dwie znane wartości, które tworzą początkową proporcję (np. 100 km odpowiada 8 litrom).',
  },
  {
    name: 'Wprowadź trzecią wartość',
    text: 'Wpisz nową wartość, której odpowiednik chcesz znaleźć (np. jeśli zamierzam przejechać 250 km...).',
  },
  {
    name: 'Otrzymaj wynik',
    text: 'System automatycznie obliczy niewiadomą wartość (X) w czasie rzeczywistym, bez konieczności naciskania jakichkolwiek przycisków.',
  },
  {
    name: 'Kopiuj lub resetuj',
    text: 'Możesz skopiować wynik bezpośrednio do schowka lub wyczyścić pola, aby wykonać nowe obliczenie.',
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
  name: 'Jak korzystać z kalkulatora reguły trzech',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Prostej Reguły Trzech',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Błyskawicznie rozwiązuj proporcje matematyczne. Ostateczne narzędzie do obliczania ilości, przepisów, rabatów i konwersji.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Jeśli mam...',
  labelB: 'To odpowiada...',
  labelC: 'A teraz mam...',
  labelX: 'Wynik (X)',
  hintA: 'Początkowa ilość',
  hintB: 'Znana wartość',
  hintC: 'Nowa ilość',
  hintX: 'Obliczona wartość',
  separatorIsTo: 'ma się do',
  separatorWillBe: 'wyniesie',
  copyTitle: 'Kopiuj wynik',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regula-trzech',
  title: 'Kalkulator Prostej Reguły Trzech',
  description: 'Błyskawicznie rozwiązuj proporcje matematyczne. Ostateczne narzędzie do obliczania ilości, przepisów, rabatów i konwersji.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Proporcjonalność (matematyka) — Wikipedia', url: 'https://pl.wikipedia.org/wiki/Proporcjonalno%C5%9B%C4%87' },
    { name: 'Proporcje — Khan Academy', url: 'https://pl.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:ratio-proportions/v/introduction-to-proportions' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Do czego służy reguła trzech?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Prosta reguła trzech to „szwajcarski scyzoryk” matematyki. Rozwiązuje problemy, w których znane są trzy dane, a szukamy czwartej. Jeśli znasz zależność między <strong>A i B</strong> i masz nową wartość <strong>C</strong>, kalkulator natychmiast znajdzie <strong>X</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Gotowanie i Przepisy',
          description: 'Jeśli przepis wymaga 500g mąki na 4 osoby, ile potrzebuję na 7?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Zakupy i Ceny',
          description: 'Jeśli opakowanie 3 puszek kosztuje 2,50 €, ile kosztowałoby mnie 10 puszek?',
          points: ['(2,50 × 10) ÷ 3 = 8,33 €'],
        },
        {
          icon: 'mdi:car',
          title: 'Podróże i Odległość',
          description: 'Jeśli przejechanie 60 km zajmuje mi 45 min, ile czasu zajmie mi przejechanie 140 km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design i Ekrany',
          description: 'Jeśli obraz ma 1920px szerokości i chcę go zmniejszyć do 800px zachowując proporcje...',
          points: ['(OryginalnaWysokość × 800) ÷ 1920 = NowaWysokość'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Jak działa wzór?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wzór jest zawsze taki sam: <strong>pomnóż wartości po przekątnej i podziel przez pozostałą</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Wzór prostej reguły trzech',
    },
    {
      type: 'paragraph',
      html: 'W kalkulatorze: mnożymy wartość <strong>B</strong> przez wartość <strong>C</strong> i dzielimy przez <strong>A</strong>. Wynikiem jest <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Zastosowania profesjonalne i codzienne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Poza matematyką szkolną reguła trzech jest wszędzie: w farmacji do obliczania dawek lekarskich na podstawie masy ciała, w fotografii do obliczania czasów naświetlania, w finansach do obliczania zmian procentowych czy w poligrafii do skalowania wymiarów formatów.',
    },
    {
      type: 'tip',
      title: 'Wskazówka dotycząca precyzji',
      html: 'Wynik jest wyświetlany z dokładnością do 4 miejsc po przecinku. Jeśli pracujesz z pieniędzmi lub dokładnymi pomiarami, pamiętaj o zaokrągleniu zgodnie z kontekstem: euro do 2 miejsc po przecinku, piksele do liczb całkowitych.',
    },
  ],
};
