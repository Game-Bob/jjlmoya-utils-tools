import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Wie erstelle ich einen WhatsApp-Link?',
    answer: 'Um Ihren Link zu erstellen, geben Sie Ihre Mobilnummer einschließlich der Ländervorwahl ein. Geben Sie beispielsweise für Deutschland zuerst 49 ein, gefolgt von Ihrer lokalen Nummer. Sie können eine optionale Nachricht hinzufügen, und das Tool generiert den fertigen wa.me-Link, der zum Kopieren bereit ist.',
  },
  {
    question: 'Kann ich eine lange vorformulierte Nachricht hinzufügen?',
    answer: 'Ja. Sie können eine Nachricht anhängen, die automatisch im Chat-Feld erscheint, wenn jemand auf Ihren Link klickt. Das Tool verwendet die URL-Kodierung, um Leerzeichen, Akzente und Emojis zu unterstützen, ohne die URL zu beschädigen.',
  },
  {
    question: 'Wie verwende ich den generierten QR-Code?',
    answer: 'Sobald ein gültiger Link generiert wurde, erscheint die Schaltfläche „QR anzeigen“. Der QR-Code enthält Ihre Link-URL. Klicken Sie mit der rechten Maustaste darauf und wählen Sie „Bild speichern unter“, um eine saubere, hochauflösende Datei für Visitenkarten, Poster oder soziale Medien herunterzuladen.',
  },
  {
    question: 'Wo landen meine Daten?',
    answer: 'Der Generator verarbeitet alles auf der Client-Seite, direkt in Ihrem Browser. Ihre Telefonnummer und die vorformulierte Nachricht werden niemals an einen Server gesendet oder in einer Datenbank gespeichert.',
  },
];

const howToData = [
  { name: 'Ländervorwahl auswählen', text: 'Wählen Sie Ihre Ländervorwahl aus dem Dropdown-Menü aus und geben Sie Ihre Telefonnummer ohne die Vorwahl ein.' },
  { name: 'Optionale Nachricht hinzufügen', text: 'Schreiben Sie einen vorformulierten Text, der erscheint, wenn jemand den Link öffnet und auf Senden tippt.' },
  { name: 'Link generieren', text: 'Drücken Sie die grüne Schaltfläche, um Ihre direkte wa.me-URL zum Teilen zu erhalten.' },
  { name: 'QR-Code teilen oder drucken', text: 'Kopieren Sie den Link, testen Sie den Chat oder laden Sie den QR-Code für Karten und Drucke herunter.' },
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
  name: 'So erstellen Sie einen direkten WhatsApp-Link',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp Link Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Erstellen Sie direkte WhatsApp-Chat-Links mit vorformulierten Nachrichten und QR-Codes. Kostenloses Tool, keine Registrierung, 100 % privat.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp-Telefonnummer',
  phonePlaceholder: '170 0000000',
  messageLabel: 'Eröffnungsnachricht (optional)',
  messagePlaceholder: 'Hallo! Ich hätte gerne mehr Informationen über Ihren Service...',
  generateBtn: 'Link generieren',
  resultLabel: 'Direkter Link generiert',
  copyTitle: 'In Zwischenablage kopieren',
  copyDone: 'Kopiert!',
  testBtn: 'Chat testen',
  qrShow: 'QR anzeigen',
  qrHide: 'QR ausblenden',
  errorPhone: 'Bitte geben Sie eine gültige Telefonnummer ein.',
  defaultPrefix: '49',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-nachrichtenlink-generaator',
  title: 'WhatsApp Link Generator mit QR',
  description: 'Erstellen Sie direkte WhatsApp-Chat-Links mit vorformulierter Nachricht und QR-Code. Kostenloses Tool, keine Registrierung, 100 % privat.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'So verwenden Sie die Funktion „Click to Chat“ — WhatsApp Hilfebereich', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Click to chat: Parameter und Formate — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Generieren Sie kurze Direktlinks für WhatsApp' },
    {
      type: 'paragraph',
      html: 'Müssen Kunden oder Follower Sie auf WhatsApp kontaktieren, ohne Ihre Nummer zuerst zu speichern? Unser <strong>wa.me Link-Creator</strong> löst dieses Problem, indem er einen Link generiert, der sofort einen direkten Chat öffnet, ohne dass weitere Schritte erforderlich sind.',
    },
    { type: 'title', level: 3, text: 'Wofür ist der wa.me WhatsApp Shortener gedacht?' },
    {
      type: 'paragraph',
      html: 'WhatsApp bietet eine API namens „Click to Chat“ an. Über eine spezielle URL kann jeder Nutzer einen neuen Chat mit Ihnen eröffnen, ohne Sie vorher als Kontakt hinzufügen zu müssen, sowohl vom Handy als auch von WhatsApp Web aus.',
    },
    {
      type: 'list',
      items: [
        '<strong>Mehr Konversionen:</strong> Ein „Kontakt über WhatsApp“-Button in Ihrem Shop reduziert Hürden und steigert die Verkäufe.',
        '<strong>Vorformulierte Nachricht:</strong> Der Nutzer drückt einfach auf „Senden“. Beispiel: „Hallo! Ich komme von Instagram und möchte das Angebot in Anspruch nehmen.“',
        '<strong>Automatischer QR-Code:</strong> Laden Sie den QR-Code für Visitenkarten, Poster oder Social-Media-Posts herunter.',
      ],
    },
    { type: 'title', level: 3, text: 'Wie funktioniert die Link-Generierung?' },
    {
      type: 'paragraph',
      html: 'Das Tool verknüpft die Ländervorwahl und die bereinigte Telefonnummer und hängt sie dann zusammen mit dem über <em>URL-Kodierung</em> konvertierten Nachrichtensuchparameter an die offizielle WhatsApp-API an.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL-Format',
      code: 'https://wa.me/49XXXXXXXXX\nhttps://wa.me/49XXXXXXXXX?text=%C2%A1Hallo!%20Ich%20m%C3%B6chte...',
    },
    { type: 'title', level: 3, text: 'Garantierte Privatsphäre und lokale Verarbeitung' },
    {
      type: 'paragraph',
      html: 'Die gesamte Link-Erstellung findet in Ihrem Browser über JavaScript statt. Kein Server zeichnet Ihre eingegebenen Telefonnummern oder Nachrichten auf, speichert sie oder liest sie. Ihre Privatsphäre ist vollständig geschützt.',
    },
    {
      type: 'tip',
      title: 'Bedeutung der Ländervorwahl',
      html: 'Damit WhatsApp die Nachricht korrekt weiterleitet, ist die Ländervorwahl zwingend erforderlich. Für Deutschland ist sie <strong>49</strong>, gefolgt von Ihrer Mobilnummer, ohne Leerzeichen oder das +-Symbol. Das Endergebnis wäre zum Beispiel <code>4917XXXXXXXX</code>.',
    },
  ],
};
