import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Wie berechne ich die Pixelbreite von Text online?',
    answer: 'Fügen Sie Ihren Text in das Eingabefeld ein, konfigurieren Sie Schriftart und Größe, und das Tool verwendet automatisch die Browser-Canvas-API, um die exakte Breite in Pixeln zurückzugeben.',
  },
  {
    question: 'Warum variiert die Pixelbreite zwischen den Schriftarten?',
    answer: "Die meisten Schriftarten sind proportional, was bedeutet, dass jedes Zeichen eine andere Breite hat. Zum Beispiel ist ein großes 'M' in einer Standard-Sans-Serif-Schriftart immer breiter als ein kleines 'i'.",
  },
  {
    question: 'Ist das Messen von Zeichen dasselbe wie das Messen von Pixeln?',
    answer: 'Nein. Das Messen von Zeichen ergibt die String-Länge, während das Messen von Pixeln den visuellen Raum ergibt, den der Text einnimmt. Dies ist entscheidend, um sicherzustellen, dass Text in einem Webdesign nicht aus seinem Container herausläuft.',
  },
  {
    question: 'Kann ich jede Google Fonts Schriftart verwenden?',
    answer: 'Ja, solange die Schriftart auf Ihrem Betriebssystem installiert oder auf der aktuellen Seite geladen ist, misst das Tool ihre Abmessungen genau.',
  },
  {
    question: 'Ist es sicher, privaten Text oder Code-Snippets zu verarbeiten?',
    answer: 'Ja. Der Rechner arbeitet vollständig lokal. Es werden keine Daten an externe Server gesendet, was die absolute Privatsphäre für Ihre Projekte garantiert.',
  },
];

const howToData = [
  { name: 'Text eingeben', text: 'Geben Sie den Text, den Sie messen möchten, in den Eingabebereich ein.' },
  { name: 'Schriftart konfigurieren', text: 'Legen Sie die Schriftfamilie, die Größe in Pixeln, das Gewicht und den Stil (kursiv) fest.' },
  { name: 'Ergebnis ablesen', text: 'Die Pixelbreite und die Zeichenanzahl werden in Echtzeit aktualisiert.' },
  { name: 'Wert kopieren', text: 'Klicken Sie auf „Breite kopieren“, um die Pixelanzahl in die Zwischenablage zu speichern.' },
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
  name: 'So messen Sie die Textbreite in Pixeln',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Text-Pixelbreitenrechner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Berechnen Sie die Pixelbreite eines beliebigen Textes basierend auf Schriftart, Größe und Stil genau.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Zu messender Text',
  textPlaceholder: 'Geben Sie hier den Text ein, den Sie messen möchten...',
  defaultText: 'Hallo Welt',
  fontLabel: 'Schriftfamilie',
  sizeLabel: 'Größe (px)',
  weightLabel: 'Gewicht',
  italicLabel: 'Kursiv',
  widthLabel: 'Breite (Pixel)',
  charsLabel: 'Zeichen',
  previewLabel: 'Visuelle Vorschau',
  copyBtn: 'Breite kopieren',
  resetBtn: 'Zurücksetzen',
  copyDone: 'Breite kopiert',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-breitenrechner',
  title: 'Text Pixelbreitenrechner',
  description: 'Berechnen Sie genau, wie breit ein beliebiger Text in Pixeln ist, basierend auf Schriftart, Größe und Stil. Kostenloses Tool für Designer und Entwickler.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Messen Sie die exakte Pixelbreite eines beliebigen Textes' },
    {
      type: 'paragraph',
      html: 'Läuft Ihr Text aus seinem Container heraus? Müssen Sie wissen, wie viel Platz eine Überschrift einnimmt, bevor sie gerendert wird? Die <strong>Canvas-API des Browsers</strong> ermöglicht es Ihnen, die exakte Breite einer beliebigen Zeichenfolge mit Pixelpräzision zu messen, ohne sie im DOM zu rendern.',
    },
    { type: 'title', level: 3, text: 'Warum das Zählen von Zeichen nicht ausreicht' },
    {
      type: 'paragraph',
      html: 'Moderne Schriftarten sind <strong>proportional</strong>: Jedes Zeichen hat eine andere Breite. Ein „W“ kann dreimal mehr Platz einnehmen als ein „i“. Die Anzahl der Zeichen sagt nichts über den tatsächlichen visuellen Raum aus, den der Text einnimmt.',
    },
    {
      type: 'list',
      items: [
        '<strong>Webdesign:</strong> Verhindern Sie Überläufe in Schaltflächen, Beschriftungen und Tabellenzellen.',
        '<strong>SEO:</strong> Suchmaschinen kürzen Titel nach Pixeln, nicht nach Zeichen.',
        '<strong>Canvas und PDF:</strong> Berechnen Sie die exakte Position, bevor Sie Text programmatisch zeichnen.',
        '<strong>Tooltips und Bubbles:</strong> Passen Sie Containergrößen dynamisch basierend auf dem enthaltenen Text an.',
      ],
    },
    { type: 'title', level: 3, text: 'Wie die Messung mit Canvas funktioniert' },
    {
      type: 'paragraph',
      html: 'Die Methode <code>ctx.measureText()</code> der Canvas-API gibt ein <code>TextMetrics</code>-Objekt mit einer <code>width</code>-Eigenschaft zurück, die die CSS-Pixelbreite unter Verwendung der aktuell aktiven Schriftart widerspiegelt. Dieses Tool konfiguriert den Kontext mit Ihrer Schriftart, Größe, Gewicht und Ihrem Stil vor der Messung.',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText Beispiel',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Hallo Welt').width; // z.B. 74.5",
    },
    { type: 'title', level: 3, text: 'Datenschutz und lokale Verarbeitung' },
    {
      type: 'paragraph',
      html: 'Die gesamte Berechnung findet in Ihrem Browser statt. Kein Text, Code-Snippet oder private Daten verlassen Ihr Gerät.',
    },
    {
      type: 'tip',
      title: 'Google Fonts Schriftarten',
      html: 'Um eine Google Fonts Schriftart genau zu messen, stellen Sie zunächst sicher, dass sie auf der Seite geladen oder auf Ihrem System installiert ist. Andernfalls greift der Browser auf eine Ersatzschriftart zurück und das Ergebnis weicht ab.',
    },
  ],
};
