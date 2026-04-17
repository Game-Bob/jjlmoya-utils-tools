import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Wie hilft dieses Tool meinem SEO-Ranking?',
    answer: 'Durch die Analyse der Keyword-Dichte und der Lesbarkeit von Sätzen stellen Sie sicher, dass Ihr Inhalt für Benutzer leicht verständlich und für Suchmaschinen relevant ist, während Strafen für Überoptimierung vermieden werden.',
  },
  {
    question: 'Welche HTML-Elemente prüft die technische Analyse?',
    answer: 'Es überprüft die Existenz und Einzigartigkeit des H1-Tags, das Vorhandensein von H2/H3-Unterüberschriften und Alt-Attribute bei Bildern.',
  },
  {
    question: 'Wird mein Inhalt auf einem Server gespeichert?',
    answer: 'Nein. Die Analyse läuft zu 100 % lokal in Ihrem Browser. Ihr Inhalt verlässt niemals Ihren Computer.',
  },
  {
    question: 'Ist es mit den Yoast SEO-Kriterien kompatibel?',
    answer: 'Ja, wir implementieren ähnliche Kriterien wie Yoast: Satzlänge, Absatzverteilung und Überschriftenhierarchie.',
  },
];

const howToData = [
  { name: 'Text schreiben oder einfügen', text: 'Geben Sie den Inhalt, den Sie analysieren möchten, in den Haupttextbereich ein.' },
  { name: 'Optimierungs-Checkliste prüfen', text: 'Überprüfen Sie die Warnungen zu Länge, Lesbarkeit und Keyword-Dichte im Seitenpanel.' },
  { name: 'Technisches HTML analysieren', text: 'Wechseln Sie zum Tab für die technische Analyse, um H1-Tags, Bild-Alts und Metadatenstruktur zu überprüfen.' },
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
  name: 'So optimieren Sie Inhalte für SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO Content Optimizer',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analysieren Sie Keyword-Dichte, Lesbarkeit und technische HTML-Struktur Ihrer Texte in Echtzeit, ohne Daten an einen Server zu senden.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Textanalyse',
  tabHtml: 'Technische HTML-Analyse',
  textareaPlaceholder: 'Schreiben Sie Ihren Text oder fügen Sie hier Ihren HTML-Code ein...',
  statsChars: 'Zeichen',
  statsWords: 'Wörter',
  statsReading: 'Lesezeit',
  statsSentences: 'Sätze',
  checklistTitle: 'Optimierungs-Checkliste',
  keywordsTitle: 'Keyword-Dichte',
  technicalTitle: 'Technische HTML-Analyse',
  h1Label: 'H1 erkannt',
  linksLabel: 'Links (a)',
  imgsLabel: 'Bilder (img)',
  altsLabel: 'Fehlende Alts',
  emptyState: 'Keine Daten',
  analyzing: 'Analyse läuft...',
  checkInsufficient: 'Unzureichende Länge (< 300 Wörter)',
  checkPillar: 'Hervorragender Pillar-Content (> 900 Wörter)',
  checkGoodLength: 'Gute Länge für SEO',
  checkLongSentences: 'Zu viele lange Sätze (> 25 % des Textes)',
  checkGoodReadability: 'Optimale Satzlesbarkeit',
  checkLongParagraphs: 'Sehr lange Absätze aufteilen (> 150 Wörter)',
  checkMissingH1: 'Fehlender H1-Tag',
  checkMultipleH1: 'Mehrere H1-Tags erkannt',
  checkMissingH2: 'Fehlende Unterüberschriften (H2)',
  checkMissingTitle: 'Fehlender Meta-Title-Tag',
  stopWords: JSON.stringify(['der', 'die', 'das', 'und', 'oder', 'aber', 'in', 'auf', 'an', 'zu', 'für', 'von', 'mit', 'bei', 'aus', 'als', 'ist', 'war', 'sind', 'waren', 'sein', 'gewesen', 'haben', 'hat', 'hatte', 'tun', 'macht', 'machte', 'es', 'sein', 'dieser', 'jener', 'diese', 'jene', 'nicht', 'kein', 'so', 'oben', 'wenn', 'mein', 'dein', 'sein', 'ihr', 'unser', 'euer', 'ihr']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-inhalt-optimierer',
  title: 'SEO Content Optimizer',
  description: 'Analysieren Sie Keyword-Dichte, Lesbarkeit und technische HTML-Struktur Ihrer Texte in Echtzeit. Kostenloses und privates SEO-Tool.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: "Googles Startleitfaden zur Suchmaschinenoptimierung (SEO)", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de' },
    { name: 'Yoast SEO Lesbarkeitskriterien', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO Content Optimizer: Keywords, Lesbarkeit und Struktur' },
    {
      type: 'paragraph',
      html: 'Die Qualität der Inhalte wird nicht mehr allein an den enthaltenen Keywords gemessen, sondern daran, wie Sie Ihre Informationen strukturieren, damit sie sowohl für Menschen als auch für Google-Crawler leicht verdaulich sind. Unser <strong>Echtzeit-SEO-Analyse-Tool</strong> gibt Ihnen die volle Kontrolle über Keyword-Dichte, Absatzlesbarkeit und grundlegende technische HTML-Elemente.',
    },
    { type: 'title', level: 3, text: 'Keyword-Dichte und semantische Relevanz' },
    {
      type: 'paragraph',
      html: 'Die <strong>Keyword-Dichte</strong> gibt an, wie oft ein Begriff im Vergleich zum Rest des Textes vorkommt. Eine übermäßige Wiederholung löst <em>Keyword-Stuffing</em>-Filter aus, während eine sehr niedrige Dichte es Suchmaschinen erschweren kann, das zentrale Thema Ihres Artikels zu identifizieren.',
    },
    {
      type: 'list',
      items: [
        '<strong>Relevanzanalyse:</strong> Identifizieren Sie, ob die am häufigsten wiederholten Wörter mit Ihrer Suchabsicht übereinstimmen.',
        '<strong>Strafvermeidung:</strong> Vermeiden Sie die übermäßige Wiederholung von Begriffen, die als Spam wirken könnten.',
        '<strong>Semantische Optimierung:</strong> Finden Sie das Gleichgewicht zwischen Fachbegriffen und natürlicher Sprache.',
      ],
    },
    { type: 'title', level: 3, text: 'Lesbarkeit im Yoast-Stil' },
    {
      type: 'paragraph',
      html: 'Lesbarkeit ist ein indirekter, aber entscheidender Ranking-Faktor. Wenn Benutzer abspringen, weil Absätze endlose Textblöcke sind, sinkt Ihre <em>Verweildauer</em>. Der Analyser erkennt lange Sätze (über 20 Wörter), Absätze über 150 Wörter und prüft auf Unterüberschriften.',
    },
    {
      type: 'tip',
      title: 'Lesezeit',
      html: 'Die meisten Benutzer entscheiden in weniger als 10 Sekunden, ob sie einen Artikel lesen. Die Kenntnis der geschätzten Lesezeit (berechnet mit durchschnittlich 200 Wörtern pro Minute) hilft, die Absprungrate zu senken, indem die Erwartungen der Leser erfüllt werden.',
    },
    { type: 'title', level: 3, text: 'Technische HTML-Analyse' },
    {
      type: 'paragraph',
      html: 'Fügen Sie Ihren Quellcode ein, um wichtige Elemente zu überprüfen: Einzigartigkeit des <strong>H1</strong>, Vorhandensein von H2/H3-Unterüberschriften, Bilder ohne <code>alt</code>-Attribute und Existenz des <code>title</code>-Tags. Die gesamte Verarbeitung erfolgt in Ihrem Browser, ohne Daten an einen Server zu senden.',
    },
  ],
};
