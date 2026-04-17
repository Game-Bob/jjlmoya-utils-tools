import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Was genau macht dieser E-Mail-Listen-Bereiniger?',
    answer: 'Das Tool analysiert Ihre E-Mail-Liste, entfernt Duplikate, streicht unnötige Leerzeichen, validiert das Grundformat und normalisiert alle Adressen in Kleinschreibung, um eine saubere Datenbank zu gewährleisten.',
  },
  {
    question: 'Gibt es ein Limit für die Anzahl der E-Mails?',
    answer: 'Es gibt kein striktes Datensatzlimit. Sie können Tausende von E-Mails sofort in einem Durchgang verarbeiten. Die einzige Einschränkung ist der Speicher Ihres Browsers, falls die Liste extrem groß ist.',
  },
  {
    question: 'Ist es sicher, meine E-Mails hier einzufügen?',
    answer: 'Absolut. Die gesamte Verarbeitung erfolgt lokal in Ihrem eigenen Browser via JavaScript. Ihre Daten werden niemals an unsere Server gesendet oder in einer externen Datenbank gespeichert.',
  },
  {
    question: 'Wie verbessert dies die Zustellbarkeit meiner Kampagne?',
    answer: 'Durch das Entfernen nicht existierender oder falsch formatierter Adressen reduzieren Sie Ihre Bounce-Rate, was Ihren Ruf der Domain bei Anbietern wie Gmail, Outlook und Yahoo verbessert.',
  },
];

const howToData = [
  { name: 'E-Mails einfügen', text: 'Kopieren Sie Ihre E-Mail-Liste und fügen Sie sie in das Textfeld ein. Sie können durch Zeilen, Kommas oder Leerzeichen getrennt sein.' },
  { name: 'Liste bereinigen', text: 'Klicken Sie auf die Schaltfläche „Liste bereinigen“, um den Validierungs- und Duplikatentfernungsprozess zu starten.' },
  { name: 'Ergebnisse überprüfen', text: 'Prüfen Sie die Statistiken, die originale vs. finale E-Mails zeigen, und überprüfen Sie die bereinigte Liste im unteren Bereich.' },
  { name: 'Kopieren oder Herunterladen', text: 'Kopieren Sie das Ergebnis direkt in die Zwischenablage oder laden Sie es als gebrauchsfertige .txt-Datei herunter.' },
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
  name: 'So bereinigen Sie eine E-Mail-Liste',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'E-Mail-Listen-Bereiniger',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Entfernen Sie Duplikate, korrigieren Sie Leerzeichen und validieren Sie Formate in Ihrer E-Mail-Liste. Kostenloses Tool ohne Datensatzlimit.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'E-Mail-Liste',
  inputPlaceholder: 'Fügen Sie hier Ihre E-Mail-Liste ein (getrennt durch Zeilen, Kommas oder Leerzeichen)...',
  cleanBtn: 'Liste bereinigen',
  clearBtn: 'Alles löschen',
  statsOriginal: 'Original',
  statsRemoved: 'Entfernt',
  statsFinal: 'Sauber',
  resultLabel: 'Bereinigtes Ergebnis',
  copyBtn: 'Liste kopieren',
  copyDone: 'Kopiert!',
  downloadBtn: '.txt herunterladen',
  registered: 'registriert',
  downloadFilename: 'saubere-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-listen-bereiniger',
  title: 'Email Listen Bereiniger',
  description: 'Bereinigen Sie E-Mail-Listen kostenlos. Entfernen Sie Duplikate, korrigieren Sie Leerzeichen und validieren Sie Formate in Sekunden. Sparen Sie Kosten und verbessern Sie Ihre Zustellbarkeit.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Richtlinien für E-Mail-Absender', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: E-Mail-Spam', url: 'https://de.wikipedia.org/wiki/E-Mail-Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Warum ist die Verwendung eines E-Mail-Listen-Bereinigers unerlässlich?' },
    {
      type: 'paragraph',
      html: 'In der Welt des digitalen Marketings zählt die Qualität Ihrer Datenbank weitaus mehr als ihre Größe. Eine Liste mit 50.000 E-Mails ist wertlos, wenn die Hälfte davon nicht existierende Adressen sind, Tippfehler enthalten oder Duplikate sind. Hier wird ein <strong>E-Mail-Listen-Bereiniger</strong> unverzichtbar.',
    },
    { type: 'title', level: 3, text: 'Die Risiken einer unsauberen E-Mail-Liste' },
    {
      type: 'paragraph',
      html: 'Das Führen einer unbereinigten Datenbank kann schwerwiegende Folgen haben. Das Versenden von E-Mails an Adressen, die nicht existieren, erzeugt einen „Hard Bounce“. Wenn dieser Prozentsatz 2-3 % übersteigt, beginnen Spamfilter Ihre Domain genauer zu prüfen und Sie könnten auf einer internationalen Blacklist landen.',
    },
    {
      type: 'tip',
      title: 'Expertentipp',
      html: 'Kaufen Sie niemals E-Mail-Listen. Es ist der schnellste Weg, den Ruf Ihrer Domain zu ruinieren. Bauen Sie Ihre eigene Liste organisch auf und bereinigen Sie sie alle 3 bis 6 Monate.',
    },
    { type: 'title', level: 3, text: 'Wie unser Tool Ihre Datenbank optimiert' },
    {
      type: 'paragraph',
      html: 'Unser kostenloses Dienstprogramm führt eine gründliche und schnelle Bereinigung Ihrer Datenbanken ohne Datensatzlimits durch. Es führt mehrere kritische Validierungsaufgaben sofort aus:',
    },
    {
      type: 'list',
      items: [
        '<strong>Duplikate entfernen:</strong> Derselbe Nutzer erhält dieselbe E-Mail nicht zweimal.',
        '<strong>Leerzeichenkorrektur:</strong> Wir entfernen versehentliche Leerzeichen am Anfang oder Ende, die den Versand ungültig machen würden.',
        '<strong>Formatvalidierung:</strong> Wir filtern Einträge heraus, die keine gültige E-Mail-Struktur haben.',
        '<strong>Normalisierung:</strong> Alles wird in Kleinschreibung umgewandelt, um redundante Datensätze zu vermeiden.',
      ],
    },
    { type: 'title', level: 3, text: 'Wann ist der richtige Zeitpunkt, Ihre Liste zu bereinigen?' },
    {
      type: 'list',
      items: [
        'Vor dem Import von Kontakten in ein neues CRM oder eine Versandplattform (Mailchimp, SendGrid usw.).',
        'Wenn Sie bemerken, dass Ihre Öffnungsrate unter den üblichen Durchschnitt gefallen ist.',
        'Nach einer Veranstaltung oder Messe, bei der Sie Daten manuell gesammelt haben.',
        'Als präventive Wartung jedes Quartal, um die Gesundheit der Domain zu erhalten.',
      ],
    },
    { type: 'title', level: 3, text: 'Auswirkung auf den Return on Investment' },
    {
      type: 'paragraph',
      html: 'E-Mail-Marketing bleibt einer der Kanäle mit dem höchsten ROI, aber nur, wenn die Nachrichten den Posteingang erreichen. Durch die Verwendung eines <strong>E-Mail-Bereinigers</strong> optimieren Sie Ihren Verkaufstrichter von der Quelle an und hören auf, Plattformen für Kontakte zu bezahlen, die Ihre Nachrichten niemals sehen werden.',
    },
    {
      type: 'tip',
      title: 'Doppel Opt In implementieren',
      html: 'Der beste Weg, gefälschte E-Mails zu vermeiden, besteht darin, von den Nutzern zu verlangen, ihr Abonnement durch Klicken auf einen an ihren Posteingang gesendeten Link zu bestätigen. Dies garantiert, dass die E-Mail existiert und dass der Nutzer Zugriff darauf hat.',
    },
  ],
};
