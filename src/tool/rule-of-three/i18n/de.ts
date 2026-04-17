import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Was ist der einfache direkte Dreisatz?',
    answer: 'Es ist eine mathematische Methode zur Lösung von Proportionalitätsproblemen zwischen drei bekannten Werten und einer Unbekannten. Er wird als „direkt“ bezeichnet, da bei Erhöhung einer Größe die andere im gleichen Verhältnis steigt.',
  },
  {
    question: 'Wann sollte ich den umgekehrten Dreisatz verwenden?',
    answer: 'Er wird verwendet, wenn die Größen antiproportional sind (wenn eine steigt, sinkt die andere). Beispiel: Wenn 2 Maler 5 Stunden brauchen, brauchen 4 Maler weniger Zeit. Unser aktueller Rechner konzentriert sich auf die direkte Proportionalität.',
  },
  {
    question: 'Ist er für professionelle Berechnungen genau genug?',
    answer: 'Ja. Unser Rechner verwendet eine hohe Gleitkommapräzision, ideal für Dosierungsanpassungen, Grafikdesign-Skalierungen, kommerzielle Budgets und Rezeptumrechnungen.',
  },
  {
    question: 'Wie wird er manuell berechnet?',
    answer: 'Die Formel lautet: (Wert B * Wert C) / Wert A = X. Das heißt, Sie multiplizieren die Diagonalwerte und dividieren das Ergebnis durch den verbleibenden Wert.',
  },
];

const howToData = [
  {
    name: 'Basisverhältnis identifizieren',
    text: 'Geben Sie die zwei bekannten Werte ein, die das ursprüngliche Verhältnis bilden (z. B. 100 km entsprechen 8 Litern).',
  },
  {
    name: 'Dritten Wert eingeben',
    text: 'Schreiben Sie den neuen Wert, dessen Äquivalent Sie finden möchten (z. B. wenn ich 250 km reisen werde...).',
  },
  {
    name: 'Ergebnis erhalten',
    text: 'Das System berechnet den unbekannten Wert (X) automatisch in Echtzeit, ohne dass Sie eine Taste drücken müssen.',
  },
  {
    name: 'Kopieren oder Zurücksetzen',
    text: 'Sie können das Ergebnis direkt in die Zwischenablage kopieren oder die Felder leeren, um eine neue Berechnung durchzuführen.',
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
  name: 'So verwenden Sie den Dreisatz-Rechner',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Einfacher Dreisatz-Rechner',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Lösen Sie mathematische Proportionen sofort. Das ultimative Tool zur Berechnung von Mengen, Rezepten, Rabatten und Umrechnungen.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Wenn ich habe...',
  labelB: 'Entspricht das...',
  labelC: 'Und jetzt habe ich...',
  labelX: 'Ergebnis (X)',
  hintA: 'Ursprüngliche Menge',
  hintB: 'Bekannter Wert',
  hintC: 'Neue Menge',
  hintX: 'Berechneter Wert',
  separatorIsTo: 'entspricht',
  separatorWillBe: 'ergibt',
  copyTitle: 'Ergebnis kopieren',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'dreisatz-rechner',
  title: 'Einfacher Dreisatz Rechner',
  description: 'Lösen Sie mathematische Proportionen sofort. Das ultimative Tool zur Berechnung von Mengen, Rezepten, Rabatten und Umrechnungen.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Proportionalität (Mathematik) — Wikipedia', url: 'https://de.wikipedia.org/wiki/Proportionalit%C3%A4t' },
    { name: 'Verhältnisse und Proportionen — Khan Academy', url: 'https://de.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Wofür wird der Dreisatz verwendet?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der einfache direkte Dreisatz ist das „Schweizer Taschenmesser“ der Mathematik. Er löst Probleme, bei denen drei Datenpunkte bekannt sind und wir den vierten suchen. Wenn Sie die Beziehung zwischen <strong>A und B</strong> kennen und einen neuen Wert <strong>C</strong> haben, findet der Rechner sofort <strong>X</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Kochen und Rezepte',
          description: 'Wenn das Rezept 500 g Mehl für 4 Personen vorsieht, wie viel brauche ich dann für 7?',
          points: ['(500 × 7) ÷ 4 = 875 g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Einkaufen und Preise',
          description: 'Wenn eine Packung mit 3 Dosen 2,50 € kostet, wie viel würden mich dann 10 Dosen kosten?',
          points: ['(2,50 × 10) ÷ 3 = 8,33 €'],
        },
        {
          icon: 'mdi:car',
          title: 'Reisen und Entfernung',
          description: 'Wenn ich 45 Min. für 60 km brauche, wie lange brauche ich dann für 140 km?',
          points: ['(45 × 140) ÷ 60 = 105 Min.'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design und Bildschirme',
          description: 'Wenn das Bild 1920 px breit ist und ich es auf 800 px verkleinern möchte, wobei die Proportionen erhalten bleiben sollen...',
          points: ['(Originalhöhe × 800) ÷ 1920 = neue Höhe'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Wie funktioniert die Formel?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Formel ist immer dieselbe: <strong>Multiplizieren Sie die Diagonalwerte und dividieren Sie durch den verbleibenden Wert</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Einfache direkte Dreisatzformel',
    },
    {
      type: 'paragraph',
      html: 'Im Rechner: Wir multiplizieren Wert <strong>B</strong> mit Wert <strong>C</strong> und dividieren durch <strong>A</strong>. Das Ergebnis ist <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Professionelle und alltägliche Anwendungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jenseits der Schulmathematik ist der Dreisatz überall: in der Apotheke zur Berechnung von Dosierungen nach Körpergewicht, in der Fotografie zur Berechnung von Belichtungszeiten, im Finanzwesen zur Berechnung von prozentualen Abweichungen oder im Druckwesen zur Skalierung von Formatmaßen.',
    },
    {
      type: 'tip',
      title: 'Tipp zur Präzision',
      html: 'Das Ergebnis wird mit bis zu 4 signifikanten Nachkommastellen angezeigt. Wenn Sie mit Geld oder exakten Maßen arbeiten, denken Sie daran, je nach Kontext zu runden: Euro auf 2 Stellen, Pixel auf ganze Zahlen.',
    },
  ],
};
