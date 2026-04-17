import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Was ist die RSVP-Technologie?',
    answer: 'RSVP steht für Rapid Serial Visual Presentation. Wörter erscheinen nacheinander am selben Fokuspunkt, sodass die Augen nicht mehr von links nach rechts bewegt werden müssen. Dies ermöglicht mit etwas Übung ein deutlich schnelleres Lesen ohne Einbußen beim Verständnis.',
  },
  {
    question: 'Verringert schnelleres Lesen das Verständnis?',
    answer: 'Das hängt vom Training ab. Bei moderaten Geschwindigkeiten (350-500 WPM) berichten viele Nutzer von einer höheren Konzentration, da das subvokale Mitlesen (die innere Stimme) wegfällt. Bei extremen Geschwindigkeiten (800+ WPM) kann die Merkfähigkeit ohne vorherige Übung abnehmen.',
  },
  {
    question: 'Was ist die durchschnittliche Lesegeschwindigkeit?',
    answer: 'Ein durchschnittlicher Erwachsener liest zwischen 200 und 250 Wörtern pro Minute. Mit dem RSVP-Reader und etwas Übung ist eine Verdoppelung dieser Geschwindigkeit (400-500 WPM) bei gleichzeitig exzellentem Verständnis üblich.',
  },
  {
    question: 'Verursacht RSVP eine Überanstrengung der Augen?',
    answer: 'Durch den Wegfall der Muskelanstrengung bei der Augenbewegung stellen viele Nutzer fest, dass sie mit weniger Ermüdung lesen können als bei herkömmlichen Methoden. Es kann sich anfangs intensiv anfühlen, aber das Gehirn passt sich schnell an.',
  },
];

const howToData = [
  { name: 'Text eingeben', text: 'Fügen Sie den Artikel, das Buch oder das Dokument, das Sie lesen möchten, in den Textbereich ein.' },
  { name: 'WPM konfigurieren', text: 'Passen Sie die Wörter pro Minute (WPM) an. Wenn Sie Anfänger sind, beginnen Sie bei 300 WPM und steigern Sie sich schrittweise.' },
  { name: 'Blick fixieren', text: 'Halten Sie Ihre Augen auf den roten Buchstaben (ORP-Fokuspunkt) gerichtet. Versuchen Sie nicht, den Wörtern mit Augenbewegungen zu folgen.' },
  { name: 'Training starten', text: 'Drücken Sie die Wiedergabetaste und lassen Sie die Informationen fließen. Sie können jederzeit pausieren.' },
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
  name: 'So verwenden Sie den RSVP-Schnellleser',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Trainieren Sie Ihre Lesegeschwindigkeit auf bis zu 1000 Wörter pro Minute mit RSVP-Technologie und optimaler Ausrichtung des Erkennungspunkts.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Lese-Fortschritt',
  speedLabel: 'Geschwindigkeit',
  slowLabel: 'LANGSAM',
  fastLabel: 'GOTT-MODUS',
  speedHint: 'Beginnen Sie bei 300 WPM und steigern Sie sich schrittweise, um Ihre Grenzen zu erweitern.',
  textLabel: 'Zu verarbeitender Text',
  textPlaceholder: 'Fügen Sie Ihren Artikel, Ihr Buch oder Ihren Text hier ein...',
  clearLabel: 'LÖSCHEN',
  words: 'Wörter',
  defaultText: 'Willkommen beim RSVP Speed Reader. Fügen Sie unten Ihren Text ein, um zu beginnen. Diese Technologie hilft Ihnen, bis zu dreimal schneller zu lesen, indem unnötige Augenbewegungen vermieden werden.',
  play: 'Abspielen',
  pause: 'Pause',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'schnell-leser',
  title: 'RSVP Speed Reader',
  description: 'Trainieren Sie Ihre Lesegeschwindigkeit auf bis zu 1000 Wörter pro Minute. RSVP-Technologie mit optimaler Fokuspunkt-Ausrichtung. Verdoppeln Sie Ihre intellektuelle Produktivität.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
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
    { type: 'title', level: 2, text: 'Die Formel 1 des Lesens: Schalten Sie Ihre mentale Bandbreite frei' },
    {
      type: 'paragraph',
      html: 'Was wäre, wenn Lesen biomechanisch gesehen reine Zeitverschwendung wäre? Ihr Gehirn ist ein Supercomputer, der durch eine analoge Verbindung ausgebremst wird: Ihre Augen. Der <strong>RSVP-Reader</strong> durchbricht diesen Engpass, indem er Wörter genau an dem Fokuspunkt präsentiert, an dem Ihr Geist sie am schnellsten verarbeitet.',
    },
    {
      type: 'paragraph',
      html: 'Herkömmliches Lesen ist ein ineffizienter Prozess. Ihre Augen arbeiten nicht wie ein Scanner, sondern wie eine Kamera im Serienbildmodus: Stopp, Fokus, Sprung. Dieser Sprung, <strong>Sakkade</strong> genannt, bedeutet, dass Sie einen großen Teil der Lesezeit damit verbringen, einfach nur Ihre Augen zu bewegen, anstatt Informationen aufzunehmen.',
    },
    {
      type: 'tip',
      html: '"RSVP-Lesen bedeutet nicht nur, schneller zu lesen. Es bedeutet, die mechanische Reibung zwischen Text und Gehirn zu eliminieren."',
    },
    { type: 'title', level: 3, text: 'Die Wissenschaft hinter der Daten-Injektion' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimaler Erkennungspunkt (ORP)',
          description: 'Jedes Wort hat einen Punkt, an dem Ihr Gehirn es am schnellsten erkennt. Der Algorithmus berechnet genau diesen Buchstaben (den roten) und zentriert ihn perfekt. Ihre Augen bewegen sich keinen Millimeter.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Kognitive Stille',
          highlight: true,
          description: 'Ab 400-500 WPM verstummt Ihre innere Stimme – sie kommt nicht mehr mit. Sie hören nicht mehr auf das, was Sie lesen, sondern sehen reine Bedeutungen und Konzepte. Das ist der ultimative Flow-Zustand.',
        },
        {
          icon: 'mdi:brain',
          title: 'Visuelle Neuroplastizität',
          description: 'Wie beim Training im Fitnessstudio: 300 WPM fühlen sich am Anfang schnell an. Nach einer Woche sind 500 WPM wie ein Spaziergang. Sie trainieren die neuronalen Pfade neu, die Ihren visuellen Kortex mit der Sprachverarbeitung verbinden.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Trainingsprotokoll: Vom Anfänger zum Profi' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Level 1: Das Erwachen (200 bis 300 WPM)',
          description: 'Ihre normale Lesegeschwindigkeit. Gewöhnen Sie sich an die Benutzeroberfläche. Entspannen Sie Ihr Gesicht und lassen Sie die Wörter auf sich zukommen. Versuchen Sie nicht, sie zu „greifen“.',
          points: ['Ideal für Anfänger', 'Gewöhnung an den ORP', 'Keine Überanstrengung der Augen'],
        },
        {
          title: 'Level 2: Schallmauer (400 bis 500 WPM)',
          highlight: true,
          description: 'Hier geschieht die Magie. Sie werden ein gewisses Unbehagen spüren. Werden Sie nicht langsamer, wenn Sie ein Wort verpassen – Ihr Gehirn wird lernen, Lücken aus dem Kontext zu füllen.',
          points: ['Subvokalisierung verschwindet', 'Mentaler Flow-Zustand', 'Verdoppelung der Basisgeschwindigkeit'],
        },
        {
          title: 'Level 3: Fluchtgeschwindigkeit (600+ WPM)',
          description: 'Territorium für Fortgeschrittene. Ideal zur Wiederholung von Lernmaterial, zum Lesen von Nachrichten oder zum Konsumieren technischer Dokumentationen, bei denen Sie nach Schlüsselkonzepten suchen.',
          points: ['Durchschnittlicher Roman in 2 Stunden', 'Maximale Leseeffizienz', 'Erfordert vorherige Übung'],
        },
      ],
    },
  ],
};
