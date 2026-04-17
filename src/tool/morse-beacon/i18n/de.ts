import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Was ist das SOS-Notrufsignal im Morsecode?',
    answer: 'Das Signal lautet „... --- ...“ (drei Punkte, drei Striche, drei Punkte). Es wird kontinuierlich ohne Leerzeichen zwischen den Buchstaben übertragen, um einen unmittelbaren Notfall anzuzeigen.',
  },
  {
    question: 'Warum funktioniert die Taschenlampe in meinem Browser nicht?',
    answer: 'Die Aktivierung der Taschenlampe erfordert Kameraleberechtigungen im Browser. Einige mobile Browser oder ältere Desktop-Versionen unterstützen diese API aus Datenschutzgründen nicht.',
  },
  {
    question: 'Ist das SOS-Bildschirmsignal sichtbar?',
    answer: 'Ja, bei totaler Dunkelheit kann das maximale Leuchten eines weiß blinkenden Bildschirms im Morsecode aus mehreren hundert Metern Entfernung gesehen werden, was es zu einer nützlichen Alternative macht, falls die Taschenlampe ausfällt.',
  },
  {
    question: 'Was ist der internationale Morsecode?',
    answer: 'Es handelt sich um ein Kommunikationssystem, das Sequenzen von kurzen (Punkte) und langen (Striche) Signalen verwendet, um Buchstaben und Zahlen darzustellen, standardisiert von der ITU für Funkkommunikation und optische Signale.',
  },
];

const howToData = [
  {
    name: 'Nachricht schreiben',
    text: 'Geben Sie den Text ein, den Sie übertragen möchten, oder verwenden Sie die vorkonfigurierte „SOS“-Taste für Notfälle.',
  },
  {
    name: 'Geschwindigkeit konfigurieren',
    text: 'Passen Sie die WPM (Wörter pro Minute) an, um das Signal je nach Sichtbarkeit schneller oder langsamer zu machen.',
  },
  {
    name: 'Lichtquelle wählen',
    text: 'Aktivieren Sie das Blinken des Vollbildmodus oder erlauben Sie den Zugriff auf die Kamerataschenlampe für ein stärkeres Signal.',
  },
  {
    name: 'Übertragung starten',
    text: 'Drücken Sie auf „Senden“, damit das System den Text in automatische visuelle Impulse nach dem Morse-Standard umwandelt.',
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
  name: 'So verwenden Sie die Morsebakke zum Übertragen von Nachrichten',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Morsebakke: Taktischer SOS-Sender',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Verwandeln Sie Ihr Gerät in eine Morse-Sendestation. Nutzen Sie Blitzlicht und Bildschirm als Notlichtsignale und zur taktischen Kommunikation.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Zu übertragende Nachricht',
  placeholder: 'Geben Sie hier Ihre Nachricht ein (SOS, HALLO, HILFE)...',
  btnTransmit: 'Senden',
  btnSosLoop: 'SOS Schleife',
  btnStop: 'Stopp',
  labelTorch: 'Blitz/Taschenlampe',
  statusStandby: 'STANDBY',
  statusTransmitting: 'SENDET...',
  statusStopping: 'STOPPT...',
  statusWaiting: 'WARTET',
  statusReady: 'HARDWARE BEREIT',
  statusNoTorch: 'KEIN BLITZ',
  statusNoPermission: 'KEINE RECHTE',
  statusNotSupported: 'NICHT UNTERSTÜTZT',
  statusReqHttps: 'HTTPS ERF.',
  statusSending: 'SENDET:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morse-feuer',
  title: 'Morsebakke: Taktischer SOS Sender',
  description: 'Verwandeln Sie Ihr Gerät in eine Morse-Sendestation. Nutzen Sie Blitzlicht und Bildschirm als Notlichtsignale und zur taktischen Kommunikation.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Internationaler Morsecode', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Morsecode — Wikipedia', url: 'https://de.wikipedia.org/wiki/Morsecode' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Sprache des Lichts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool verwandelt Ihr Gerät in eine optische Signalbakke, die Nachrichten übertragen kann, die aus Kilometern Entfernung sichtbar sind. Unter Verwendung des internationalen Morsecode-Standards ermöglicht es lautlose oder Notfallkommunikation über Lichtimpulse (Taschenlampe und Bildschirm).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Ein universeller Standard',
          description: 'Dieses 1830 von Samuel Morse entwickelte binäre System aus Punkten und Strichen revolutionierte die Telekommunikation. Seine Einfachheit macht es extrem robust: Es kann über Ton, Funk, Elektrizität oder Licht übertragen werden und bleibt selbst unter starken Störungen lesbar.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS Notfallmodus',
          description: 'Die Taste „SOS Schleife“ überträgt kontinuierlich die Sequenz ··· --- ···. Dieses Signal ist weltweit als Notruf anerkannt und dank des hohen Kontrasts der LED-Taschenlampe unter bestimmten Bedingungen selbst bei Tageslicht aus großer Entfernung sichtbar.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 Standard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dieses Tool hält sich strikt an die <strong>regulatorischen Timings</strong> des internationalen Morsecodes, wie sie von der Internationalen Fernmeldeunion definiert wurden.',
    },
    {
      type: 'list',
      items: [
        '1 Punkt = 1 Zeiteinheit',
        '1 Strich = 3 Zeiteinheiten',
        'Abstand zwischen Elementen = 1 Einheit',
        'Abstand zwischen Buchstaben = 3 Einheiten',
        'Abstand zwischen Wörtern = 7 Einheiten',
      ],
    },
    {
      type: 'tip',
      title: 'Standardgeschwindigkeit',
      html: 'Die Standardgeschwindigkeit beträgt <strong>15 WPM</strong> (Wörter pro Minute), was einem professionellen Übertragungstempo entspricht. Bei 15 WPM gilt: 1 Einheit = 80 ms.',
    },
  ],
};
