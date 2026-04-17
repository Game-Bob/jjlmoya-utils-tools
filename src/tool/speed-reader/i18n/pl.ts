import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Czym jest technologia RSVP?',
    answer: 'RSVP to skrót od Rapid Serial Visual Presentation (Szybka seryjna prezentacja wizualna). Słowa pojawiają się pojedynczo w tym samym punkcie skupienia, co eliminuje konieczność poruszania oczami od lewej do prawej. Pozwala to na czytanie ze znacznie większą prędkością bez utraty zrozumienia, przy odpowiedniej praktyce.',
  },
  {
    question: 'Czy szybsze czytanie zmniejsza zrozumienie?',
    answer: 'To zależy od treningu. Przy umiarkowanych prędkościach (350-500 WPM) wielu użytkowników zgłasza wyższą koncentrację dzięki wyeliminowaniu subwokalizacji (czytania w myślach). Przy ekstremalnych prędkościach (powyżej 800 WPM) stopień zapamiętywania może spaść bez wcześniejszej praktyki.',
  },
  {
    question: 'Jaka jest średnia prędkość czytania?',
    answer: 'Przeciętny dorosły czyta od 200 do 250 słów na minutę. Dzięki czytnikowi RSVP i odrobinie praktyki powszechne jest podwojenie tej prędkości (400-500 WPM) przy zachowaniu doskonałego zrozumienia.',
  },
  {
    question: 'Czy RSVP powoduje zmęczenie oczu?',
    answer: 'Dzięki wyeliminowaniu wysiłku mięśniowego związanego z poruszaniem oczami wielu użytkowników stwierdza, że może czytać z mniejszym zmęceniem niż metodami tradycyjnymi. Na początku może to być intensywne odczucie, ale mózg szybko się adaptuje.',
  },
];

const howToData = [
  { name: 'Wpisz tekst', text: 'Wklej artykuł, książkę lub dokument, który chcesz przeczytać, w obszarze tekstowym.' },
  { name: 'Skonfiguruj WPM', text: 'Dostosuj liczbę słów na minutę (WPM). Jeśli jesteś początkujący, zacznij od 300 WPM i stopniowo zwiększaj.' },
  { name: 'Skup wzrok', text: 'Trzymaj oczy na czerwonej literze (punkt skupienia ORP). Nie próbuj śledzić słów ruchem gałek ocznych.' },
  { name: 'Zacznij trening', text: 'Naciśnij przycisk odtwarzania i pozwól informacjom płynąć. Możesz zatrzymać w dowolnym momencie.' },
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
  name: 'Jak korzystać z szybkiego czytnika RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Trenuj prędkość czytania do 1000 słów na minutę dzięki technologii RSVP i optymalnemu wyrównaniu punktu rozpoznawania.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Postęp czytania',
  speedLabel: 'Prędkość',
  slowLabel: 'WOLNO',
  fastLabel: 'BÓG',
  speedHint: 'Zacznij od 300 WPM i stopniowo zwiększaj, aby przesuwać swoje granice.',
  textLabel: 'Tekst do przetworzenia',
  textPlaceholder: 'Wklej tutaj swój artykuł, książkę lub tekst...',
  clearLabel: 'WYCZYŚĆ',
  words: 'słów',
  defaultText: 'Witaj w RSVP Speed Reader. Wklej poniżej swój tekst, aby rozpocząć. Ta technologia pomoże Ci czytać do trzech razy szybciej dzięki wyeliminowaniu zbędnych ruchów oczu.',
  play: 'Graj',
  pause: 'Pauza',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'szybki-czytnik',
  title: 'RSVP Speed Reader',
  description: 'Trenuj prędkość czytania do 1000 słów na minutę. Technologia RSVP z optymalnym wyrównaniem punktu skupienia. Podwój swoją wydajność intelektualną.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Formuła 1 czytania: Odblokuj swoją przepustowość mentalną' },
    {
      type: 'paragraph',
      html: 'A gdyby czytanie było, biomechanicznie rzecz biorąc, stratą czasu? Twój mózg to superkomputer dławiony przez analogowe połączenie: Twoje oczy. <strong>Czytnik RSVP</strong> przełamuje to wąskie gardło, prezentując słowa dokładnie w punkcie skupienia, w którym Twój umysł przetwarza je najszybciej.',
    },
    {
      type: 'paragraph',
      html: 'Tradycyjne czytanie to nieefektywny proces. Twoje oczy nie działają jak skaner; działają jak aparat w trybie seryjnym: stop, ostrość, skok. Ten skok, zwany <strong>sakkadą</strong>, oznacza, że spędzasz dużą część czasu czytania na samym poruszaniu oczami, zamiast na przyswajaniu informacji.',
    },
    {
      type: 'tip',
      html: '"Czytanie RSVP to nie tylko szybsze czytanie. To wyeliminowanie mechanicznego tarcia między tekstem a Twoim mózgiem."',
    },
    { type: 'title', level: 3, text: 'Nauka stojąca za wstrzykiwaniem danych' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optymalny punkt rozpoznawania (ORP)',
          description: 'Każde słowo ma punkt, w którym Twój mózg rozpoznaje je najszybciej. Algorytm oblicza tę dokładną literę (czerwoną) i idealnie ją centruje. Twoje oczy nie poruszają się ani o milimetr.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Cisza poznawcza',
          highlight: true,
          description: 'Powyżej 400-500 WPM Twój wewnętrzny głos cichnie — nie nadąża. Przestajesz „słyszeć” to, co czytasz, a zaczynasz „widzieć” czyste znaczenia i pojęcia. To ostateczny stan flow.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplastyczność wizualna',
          description: 'To jak chodzenie na siłownię: 300 WPM na początku wyda się szybkie. Po tygodniu 500 WPM będzie jak spacer. Trenujesz na nowo ścieżki neuronowe łączące korę wzrokową z przetwarzaniem języka.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protokół treningowy: Od początkującego do Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Poziom 1: Przebudzenie (200 do 300 WPM)',
          description: 'Twoja normalna prędkość czytania. Przyzwyczaj się do interfejsu. Rozluźnij twarz i pozwól słowom do Ciebie przychodzić. Nie próbuj ich „chwytać”.',
          points: ['Idealne dla początkujących', 'Zapoznanie z ORP', 'Brak zmęczenia oczu'],
        },
        {
          title: 'Poziom 2: Bariera dźwięku (400 do 500 WPM)',
          highlight: true,
          description: 'Tu dzieje się magia. Poczujesz dyskomfort. Nie zwalniaj, gdy umknie Ci słowo — Twój mózg nauczy się wypełniać luki z kontekstu.',
          points: ['Subwokalizacja znika', 'Stan mentalnego flow', 'Podwojenie prędkości bazowej'],
        },
        {
          title: 'Poziom 3: Prędkość ucieczki (600+ WPM)',
          description: 'Terytorium dla zaawansowanych. Idealne do przeglądania materiałów do nauki, czytania wiadomości lub konsumowania dokumentacji technicznej, w której szukasz kluczowych pojęć.',
          points: ['Średnia powieść w 2 godziny', 'Maksymalna wydajność czytania', 'Wymaga wcześniejszej praktyki'],
        },
      ],
    },
  ],
};
