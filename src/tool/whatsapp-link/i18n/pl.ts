import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Jak wygenerować link do WhatsApp?',
    answer: 'Aby utworzyć link, wprowadź swój numer telefonu komórkowego wraz z kodem kraju. Na przykład dla Polski wpisz najpierw 48, a następnie swój numer lokalny. Możesz dodać opcjonalną wiadomość, a narzędzie wygeneruje gotowy do skopiowania link wa.me.',
  },
  {
    question: 'Czy mogę dodać długą, wstępnie wypełnioną wiadomość?',
    answer: 'Tak. Możesz dołączyć wiadomość, która automatycznie pojawi się w polu czatu, gdy ktoś kliknie Twój link. Narzędzie wykorzystuje kodowanie URL, aby obsługiwać spacje, akcenty i emotikony bez uszkadzania adresu URL.',
  },
  {
    question: 'Jak korzystać z wygenerowanego kodu QR?',
    answer: 'Po wygenerowaniu prawidłowego linku pojawi się przycisk „Pokaż QR”. Kod QR zawiera adres URL Twojego linku. Kliknij go prawym przyciskiem myszy i wybierz „Zapisz obraz jako”, aby pobrać czysty plik o wysokiej rozdzielczości do wizytówek, plakatów lub mediów społecznościowych.',
  },
  {
    question: 'Gdzie trafiają moje dane?',
    answer: 'Generator przetwarza wszystko po stronie klienta, bezpośrednio w Twojej przeglądarce. Twój numer telefonu i wstępnie wypełniona wiadomość nigdy nie są wysyłane do żadnego serwera ani przechowywane w żadnej bazie danych.',
  },
];

const howToData = [
  { name: 'Wybierz prefiks', text: 'Wybierz kod swojego kraju z rozwijanej listy i wprowadź numer telefonu bez prefiksu.' },
  { name: 'Dodaj opcjonalną wiadomość', text: 'Napisz tekst, który pojawi się automatycznie, gdy ktoś otworzy link i dotknie Wyślij.' },
  { name: 'Wygeneruj link', text: 'Naciśnij zielony przycisk, aby otrzymać bezpośredni adres URL wa.me gotowy do udostępnienia.' },
  { name: 'Udostępnij lub wydrukuj QR', text: 'Skopiuj link, przetestuj czat lub pobierz kod QR do wizytówek i druku.' },
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
  name: 'Jak utworzyć bezpośredni link do WhatsApp',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator Linków WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Twórz bezpośrednie linki do czatu WhatsApp ze wstępnie wypełnioną wiadomością i kodem QR. Darmowe narzędzie, bez rejestracji, w 100% prywatne.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Numer telefonu WhatsApp',
  phonePlaceholder: '600 000 000',
  messageLabel: 'Wiadomość powitalna (opcjonalnie)',
  messagePlaceholder: 'Cześć! Chcę uzyskać więcej informacji o Twojej usłudze...',
  generateBtn: 'Generuj link',
  resultLabel: 'Wygenerowano link bezpośredni',
  copyTitle: 'Kopiuj do schowka',
  copyDone: 'Skopiowano!',
  testBtn: 'Testuj czat',
  qrShow: 'Pokaż QR',
  qrHide: 'Ukryj QR',
  errorPhone: 'Wprowadź prawidłowy numer telefonu.',
  defaultPrefix: '48',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'generator-linkow-whatsapp',
  title: 'Generator Linków WhatsApp z QR',
  description: 'Twórz bezpośrednie linki do czatu WhatsApp ze wstępnie wypełnioną wiadomością i kodem QR. Darmowe narzędzie, bez rejestracji, w 100% prywatne.',
  ui,
  faqTitle: 'Często zadawane pytania',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Źródła',
  bibliography: [
    { name: 'Jak korzystać z funkcji kliknij i rozmawiaj — Centrum pomocy WhatsApp', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Click to chat: parametry i formaty — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Generuj krótkie linki bezpośrednie do WhatsApp' },
    {
      type: 'paragraph',
      html: 'Czy potrzebujesz, aby klienci lub obserwujący kontaktowali się z Tobą na WhatsApp bez uprzedniego zapisywania Twojego numeru? Nasz <strong>kreator linków wa.me</strong> rozwiązuje ten problem, generując link, który natychmiast otwiera bezpośredni czat, bez zbędnych kroków.',
    },
    { type: 'title', level: 3, text: 'Do czego służy skracacz WhatsApp wa.me?' },
    {
      type: 'paragraph',
      html: 'WhatsApp oferuje interfejs API o nazwie „Kliknij i rozmawiaj”. Za pomocą specjalnego adresu URL każdy użytkownik może otworzyć z Tobą nowy czat bez konieczności dodawania Cię najpierw do kontaktów, zarówno z telefonu komórkowego, jak i przez WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Większa konwersja:</strong> Przycisk „Kontakt przez WhatsApp” w Twoim sklepie zmniejsza opory i zwiększa sprzedaż.',
        '<strong>Wstępnie wypełniona wiadomość:</strong> Użytkownik po prostu naciska „Wyślij”. Przykład: „Cześć! Piszę z Instagrama i chcę skorzystać z oferty”.',
        '<strong>Automatyczny kod QR:</strong> Pobierz kod QR do wizytówek, plakatów lub postów w mediach społecznościowych.',
      ],
    },
    { type: 'title', level: 3, text: 'Jak działa generowanie linków?' },
    {
      type: 'paragraph',
      html: 'Narzędzie łączy prefiks międzynarodowy i czysty numer telefonu, a następnie dołącza go do oficjalnego API WhatsApp wraz z parametrem wiadomości przekonwertowanym za pomocą <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'Format adresu URL WhatsApp',
      code: 'https://wa.me/48XXXXXXXXX\nhttps://wa.me/48XXXXXXXXX?text=%C2%A1Cz%C3%A9%C5%9B%C4%87!%20Chc%C4%99...',
    },
    { type: 'title', level: 3, text: 'Gwarantowana prywatność i przetwarzanie lokalne' },
    {
      type: 'paragraph',
      html: 'Cały proces budowania linku odbywa się w Twojej przeglądarce za pomocą JavaScript. Żaden serwer nie rejestruje, nie zapisuje ani nie odczytuje wprowadzonych numerów telefonów ani wiadomości. Twoja prywatność jest w pełni chroniona.',
    },
    {
      type: 'tip',
      title: 'Znaczenie prefiksu międzynarodowego',
      html: 'Aby WhatsApp poprawnie skierował wiadomość, kod kraju jest obowiązkowy. Dla Polski jest to <strong>48</strong>, a następnie 9-cyfrowy numer, bez spacji i symbolu +. Wynik końcowy to na przykład <code>486XXXXXXXX</code>.',
    },
  ],
};
