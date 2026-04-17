import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Ist dieser Datumsdifferenzrechner kostenlos?',
    answer: 'Ja, es ist ein 100 % kostenloses Tool, das von jedem Browser aus ohne Registrierung oder Downloads zugänglich ist.',
  },
  {
    question: 'Wie werden Schaltjahre in der Gesamtzeit berücksichtigt?',
    answer: 'Das Tool verwendet die Standard-JavaScript-Chronologie (UTC), die Schaltjahre und die variable Anzahl von Tagen in jedem Monat automatisch berücksichtigt, um ein exaktes Ergebnis zu liefern.',
  },
  {
    question: 'Kann ich auch die Differenz zwischen Stunden und Minuten berechnen?',
    answer: 'Ja. In den Eingabefeldern können Sie die genaue Zeit auswählen. Das Ergebnis liefert Ihnen eine Aufteilung in Tage, Stunden, Minuten und Sekunden sowie kumulierte Summen.',
  },
  {
    question: 'Werden meine Datumseingaben an einen Server gesendet?',
    answer: 'Nein. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Wir speichern oder empfangen keine Informationen über die von Ihnen berechneten Daten.',
  },
];

const howToData = [
  { name: 'Startdatum auswählen', text: 'Geben Sie das Startdatum und die Uhrzeit ein oder klicken Sie auf „Heute“, um sie sofort festzulegen.' },
  { name: 'Enddatum auswählen', text: 'Definieren Sie den Zielzeitpunkt. Verwenden Sie „Jetzt“, um die bis zu diesem exakten Moment verstrichene Zeit zu messen.' },
  { name: 'Ergebnisse ablesen', text: 'Überprüfen Sie die Aufteilung in Tage, Stunden, Minuten und Sekunden sowie die kumulierten Summen für Wochen und Stunden.' },
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
  name: 'So berechnen Sie die Differenz zwischen zwei Datumsangaben',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Datumsdifferenz-Rechner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Berechnen Sie genau, wie viel Zeit zwischen zwei Daten vergangen ist oder wie lange es noch bis zu einem Ereignis dauert. Ergebnisse in Tagen, Stunden und Minuten.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Startdatum',
  endLabel: 'Enddatum',
  nowBtn: 'Jetzt',
  todayBtn: 'Heute',
  tomorrowBtn: 'Morgen',
  daysLabel: 'Tage',
  hoursLabel: 'Stunden',
  minsLabel: 'Min',
  secsLabel: 'Sek',
  weeksLabel: 'Gesamtwochen',
  totalHoursLabel: 'Gesamtstunden',
  totalMinsLabel: 'Gesamtminuten',
  elapsed: 'Verstrichene Zeit',
  past: 'Zeit in der Vergangenheit',
  invalidDates: 'Ungültige Daten',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'datumsdifferenz-rechner',
  title: 'Datumsdifferenz Rechner',
  description: 'Berechnen Sie genau, wie viel Zeit zwischen zwei Daten vergangen ist oder wie lange es noch bis zu einem Ereignis dauert. Kostenloses Tool mit Ergebnissen in Tagen, Stunden und Minuten.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Time and Date: Weltuhr und Zeitzonen-Konverter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: Geschichte des gregorianischen Kalenders', url: 'https://de.wikipedia.org/wiki/Gregorianischer_Kalender' },
    { name: 'Wikipedia: Eisenhower-Matrix und Zeitmanagement', url: 'https://de.wikipedia.org/wiki/Zeitmanagement#Die_ Eisenhower-Methode' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Datumsdifferenzrechner mit Tagen, Stunden und Minuten' },
    {
      type: 'paragraph',
      html: 'Die Berechnung der <strong>Differenz zwischen zwei Daten</strong> ist eine der am häufigsten unterschätzten Aufgaben sowohl im Alltag als auch im beruflichen Umfeld. Egal, ob Sie eine Produkteinführung planen, das exakte Alter einer Person berechnen oder die verbleibende Zeit bis zu einem besonderen Ereignis messen – ein präzises Werkzeug ist für ein effizientes Zeitmanagement unerlässlich.',
    },
    { type: 'title', level: 3, text: 'Wofür wird der Datumsdifferenzrechner verwendet?' },
    {
      type: 'paragraph',
      html: 'Die Nützlichkeit dieses Tools erstreckt sich auf viele Bereiche. Im Berufsleben nutzen es Projektmanager, um Abgabefristen festzulegen und den Fortschritt von Meilensteinen zu verfolgen. In rechtlichen und administrativen Kontexten ist es für die Berechnung von Verjährungsfristen oder Vertragslaufzeiten von Bedeutung.',
    },
    {
      type: 'list',
      items: [
        '<strong>Veranstaltungsplanung:</strong> Wissen Sie, wie viele Wochen und Tage bis zu einer Hochzeit, Konferenz oder Reise verbleiben.',
        '<strong>Projektmanagement:</strong> Berechnen Sie die verstrichene Zeit vom Beginn einer Phase bis zu ihrem Abschluss.',
        '<strong>Finanzen:</strong> Bestimmen Sie die Anzahl der Tage für Zinsberechnungen oder Rechnungsfälligkeiten.',
        '<strong>Personalwesen:</strong> Messen Sie die Betriebszugehörigkeit von Mitarbeitern oder angesammelte Urlaubstage.',
        '<strong>Gesundheit:</strong> Verfolgen Sie den Fortschritt einer Behandlung oder die Erholungszeit nach einem Eingriff.',
      ],
    },
    { type: 'title', level: 3, text: 'Zeitwahrnehmung und digitale Präzision' },
    {
      type: 'paragraph',
      html: 'Oft neigen wir dazu, die Zeit zu runden. Wir sagen „etwa ein Monat“, wenn es tatsächlich noch 27 Tage und 14 Stunden sind. Durch die Verwendung eines digitalen Rechners eliminieren wir die Subjektivität und erhalten klare Daten für eine fundierte Entscheidungsfindung.',
    },
    { type: 'title', level: 3, text: 'Kalendertage versus Arbeitstage' },
    {
      type: 'paragraph',
      html: 'Dieses Tool berechnet <strong>Kalendertage</strong>, einschließlich Wochenenden und Feiertagen. Für astronomische und allgemeine zivile Berechnungen wird die Zeit kontinuierlich gemessen. Wenn Sie Projektzeiten schätzen müssen, denken Sie daran, dass die angezeigten Tage den vollen realen Kalender darstellen.',
    },
    { type: 'title', level: 3, text: 'Die Auswirkung der Zeit auf die Produktivität' },
    {
      type: 'paragraph',
      html: 'Das Parkinsonsche Gesetz besagt, dass Arbeit sich in genau dem Maße ausdehnt, wie Zeit für ihre Erledigung zur Verfügung steht. Durch die Visualisierung, wie viele Stunden und Minuten bis zu einer Frist verbleiben, neigen Teams dazu, ihre Bemühungen zu optimieren und konzentriert zu bleiben.',
    },
    {
      type: 'tip',
      title: 'Zukünftige und vergangene Daten',
      html: 'Sie können den Rechner sowohl für zukünftige als auch für vergangene Daten verwenden. Wenn das Enddatum vor dem Startdatum liegt, erkennt das System automatisch, dass es sich um in der Vergangenheit verstrichene Zeit handelt, und bewahrt die Präzision der absoluten Differenzwerte.',
    },
  ],
};
