import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Wie verwende ich den Google Drive Download-Konverter?',
    answer: 'Kopieren Sie den vollständigen „Freigeben“-Link einer beliebigen auf Google Drive gespeicherten Datei (diese muss über öffentliche Berechtigungen verfügen). Fügen Sie ihn in das Textfeld des Tools ein und klicken Sie auf „Direktlink generieren“. Es erscheint eine neue URL, die den Download startet, ohne den Viewer von Google zu öffnen.',
  },
  {
    question: 'Kann ich einen Direkt-Download-Link für eine private Datei erstellen?',
    answer: 'Wenn die Datei privat oder der Zugriff eingeschränkt ist, fordert Google Sie auf, sich mit einem autorisierten Konto anzumelden. Für saubere Downloads ohne Registrierung müssen die Dateiberechtigungen auf „Jeder, der über den Link verfügt, kann ansehen“ eingestellt sein.',
  },
  {
    question: 'Ist es sicher, meine Drive-Links hier zu konvertieren?',
    answer: 'Ja. Die Konvertierung findet zu 100 % in Ihrem Browser statt und ist absolut anonym. Das Tool speichert Ihren Link nicht und tätigt keine Serveraufrufe; es analysiert lediglich die URL-Struktur clientseitig, um die Download-Version zu erstellen.',
  },
  {
    question: 'Was passiert, wenn meine Drive-Datei sehr groß ist?',
    answer: 'Bei Dateien, die größer als etwa 100 MB sind, erlaubt Google Drive keinen sofortigen direkten Download. Stattdessen wird eine Warnseite bezüglich der Dateigröße und der Umgehung des Antivirus-Scans angezeigt. Dies ist eine feste Richtlinie der Google-Server, die kein externes Tool umgehen kann.',
  },
];

const howToData = [
  { name: 'Freigabelink kopieren', text: 'Klicken Sie in Google Drive mit der rechten Maustaste auf die Datei und wählen Sie „Link abrufen“. Stellen Sie sicher, dass die Berechtigungen den Zugriff für jeden erlauben, der über den Link verfügt.' },
  { name: 'Link in den Generator einfügen', text: 'Geben Sie die vollständige Drive-URL in das Textfeld des Tools ein und klicken Sie auf die Schaltfläche „Direktlink generieren“.' },
  { name: 'Generierten Link kopieren und verwenden', text: 'Kopieren Sie den neuen Direkt-Download-Link und verwenden Sie ihn in E-Mails, auf Websites, in Newslettern oder überall dort, wo die Datei beim Klicken sofort heruntergeladen werden soll.' },
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
  name: 'So generieren Sie einen Direkt-Download-Link für Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google Drive Direkt-Download-Link-Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Konvertieren Sie jeden Google Drive-Freigabelink mit einem Klick in einen Direkt-Download-Link und umgehen Sie die Dateivorschauseite. Kostenloses Tool.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Fügen Sie hier Ihren Google Drive-Link ein:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Direktlink generieren',
  resultLabel: 'Direkt-Download-Link:',
  copyTitle: 'In Zwischenablage kopieren',
  copyDone: 'Kopiert',
  testBtn: 'Download testen',
  errorMsg: 'Der eingegebene Link scheint kein gültiger Google Drive-Link zu sein.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'drive-direktlink-generator',
  title: 'Google Drive Direktlink Generator',
  description: 'Konvertieren Sie ganz einfach jeden Google Drive-Freigabelink mit einem Klick in einen Direkt-Download-Link und umgehen Sie die Dateivorschau. Kostenloses Tool.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Dateien von Google Drive herunterladen (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Dateien herunterladen', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konvertieren Sie Google Drive-Freigabelinks in Direkt-Download-Links' },
    {
      type: 'paragraph',
      html: 'Wenn Sie häufig Dateien über Google Drive freigeben, wissen Sie, wie lästig die Vorschauseite sein kann. Wenn Ihre Nutzer auf Ihren Link klicken, landen sie auf einem Zwischenbildschirm, der sie zwingt, die Download-Schaltfläche zu suchen. Unser <strong>Google Drive Direkt-Download-Link-Generator</strong> löst dieses Problem, indem er jeden Freigabelink in einen Link umwandelt, der den Download automatisch startet.',
    },
    { type: 'title', level: 3, text: 'Warum einen Direkt-Download-Link verwenden?' },
    {
      type: 'paragraph',
      html: 'Der Hauptvorteil ist eine viel bessere Benutzererfahrung. Wenn Sie ein PDF, ein Bild oder ein Software-Installationsprogramm freigeben, erwarten Nutzer, dass der Download sofort nach dem Klicken auf den Link beginnt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Spart Zeit:</strong> Ein-Klick-Download ohne zusätzliche Schritte.',
        '<strong>Professionelles Aussehen:</strong> Ideal für Download-Schaltflächen auf Websites, in Newslettern oder Kunden-E-Mails.',
        '<strong>Weniger Absprünge:</strong> Weniger technisch versierte Nutzer könnten durch die Drive-Vorschau verwirrt sein und nicht wissen, wie sie die Datei herunterladen können.',
        '<strong>HTML-ready:</strong> Perfekt für <code>href</code>- oder <code>src</code>-Attribute auf Ihren Webseiten.',
      ],
    },
    { type: 'title', level: 3, text: 'Wie funktioniert der Direktlink-Generator?' },
    {
      type: 'paragraph',
      html: 'Alles findet zu 100 % in Ihrem Browser statt. Google Drive-Freigabelinks enthalten eine eindeutige Dateikennung (ID). Das Tool extrahiert diese ID und erstellt eine neue URL unter Verwendung des nativen Exportparameters von Google: <code>https://drive.google.com/uc?export=download&amp;id=IHRE_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Warnung bei großen Dateien',
      html: 'Bei Dateien über etwa 100 MB zeigt Google Drive eine Warnseite für den Antivirus-Scan an, bevor der Download startet. Dies ist eine feste Richtlinie der Google-Server, die kein externes Tool umgehen kann.',
    },
    { type: 'title', level: 3, text: 'Datenschutz und Sicherheit garantiert' },
    {
      type: 'paragraph',
      html: 'Dieses Tool respektiert Ihre Privatsphäre vollumfänglich. Die gesamte Link-Transformation wird über clientseitiges JavaScript auf Ihrem eigenen Gerät durchgeführt. Es werden niemals Links, Dateikennungen oder persönliche Informationen an externe Server gesendet.',
    },
  ],
};
