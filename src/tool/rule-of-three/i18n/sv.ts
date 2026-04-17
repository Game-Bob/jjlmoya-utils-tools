import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Vad är den enkla direkta korsmultiplikationen (tre-regeln)?',
    answer: 'Det är en matematisk metod för att lösa proportionalitetsproblem mellan tre kända värden och ett okänt. Den kallas "direkt" eftersom när en mängd ökar, ökar den andra i samma proportion.',
  },
  {
    question: 'När ska jag använda den omvända tre-regeln?',
    answer: 'Den används när mängderna är omvänt proportionella (om den ena ökar, minskar den andra). Exempel: om 2 målare tar 5 timmar, tar 4 målare kortare tid. Vår nuvarande kalkylator fokuserar på direkt proportionalitet.',
  },
  {
    question: 'Är den noggrann för professionella beräkningar?',
    answer: 'Ja. Vår kalkylator använder hög flyttalsprecision, idealisk för doseringsjusteringar, skalning i grafisk design, kommersiella budgetar och receptkonverteringar.',
  },
  {
    question: 'Hur beräknas det manuellt?',
    answer: 'Formeln är: (Värde B * Värde C) / Värde A = X. Det vill säga, du multiplicerar värdena diagonalt och dividerar resultatet med det återstående värdet.',
  },
];

const howToData = [
  {
    name: 'Identifiera grundförhållandet',
    text: 'Ange de två kända värdena som bildar den ursprungliga proportionen (t.ex. 100 km motsvarar 8 liter).',
  },
  {
    name: 'Ange det tredje värdet',
    text: 'Skriv in det nya värdet vars motsvarighet du vill hitta (t.ex. om jag ska resa 250 km...).',
  },
  {
    name: 'Få resultatet',
    text: 'Systemet beräknar automatiskt det okända värdet (X) i realtid utan att du behöver trycka på några knappar.',
  },
  {
    name: 'Kopiera eller återställ',
    text: 'Du kan kopiera resultatet direkt till urklipp eller rensa fälten för att utföra en ny beräkning.',
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
  name: 'Hur man använder tre-regeln-kalkylatorn',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Enkel tre-regeln-kalkylator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Lös matematiska proportioner omedelbart. Det definitiva verktyget för att beräkna mängder, recept, rabatter och konverteringar.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Om jag har...',
  labelB: 'Motsvarar det...',
  labelC: 'Och nu har jag...',
  labelX: 'Resultat (X)',
  hintA: 'Ursprunglig mängd',
  hintB: 'Känt värde',
  hintC: 'Ny mängd',
  hintX: 'Beräknat värde',
  separatorIsTo: 'förhåller sig till',
  separatorWillBe: 'blir',
  copyTitle: 'Kopiera resultat',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'tre-regeln-raknare',
  title: 'Enkel tre regeln kalkylator',
  description: 'Lös matematiska proportioner omedelbart. Det definitiva verktyget för att beräkna mängder, recept, rabatter och konverteringar.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Proportionalitet (matematik) — Wikipedia', url: 'https://sv.wikipedia.org/wiki/Proportionalitet' },
    { name: 'Förhållanden och proportioner — Khan Academy', url: 'https://sv.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Vad används tre-regeln till?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Den enkla direkta tre-regeln är matematikens "schweiziska armékniv". Den löser problem där tre datapunkter är kända och vi söker den fjärde. Om du känner till förhållandet mellan <strong>A och B</strong>, och du har ett nytt värde <strong>C</strong>, hittar kalkylatorn <strong>X</strong> omedelbart.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Matlagning och recept',
          description: 'Om receptet kräver 500 g mjöl till 4 personer, hur mycket behöver jag till 7?',
          points: ['(500 × 7) ÷ 4 = 875 g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Shopping och priser',
          description: 'Om ett paket med 3 burkar kostar 2,50 €, hur mycket skulle 10 burkar kosta mig?',
          points: ['(2,50 × 10) ÷ 3 = 8,33 €'],
        },
        {
          icon: 'mdi:car',
          title: 'Resor och avstånd',
          description: 'Om det tar mig 45 min att köra 60 km, hur lång tid tar det mig att köra 140 km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design och skärmar',
          description: 'Om bilden är 1920 px bred och jag vill minska den till 800 px och bibehålla proportionerna...',
          points: ['(UrsprungligHöjd × 800) ÷ 1920 = NyHöjd'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Hur fungerar formeln?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formeln är alltid densamma: <strong>multiplicera värdena diagonalt och dividera med det återstående värdet</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Formel för enkel direkt tre-regel',
    },
    {
      type: 'paragraph',
      html: 'I kalkylatorn: vi multiplicerar värde <strong>B</strong> med värde <strong>C</strong> och dividerar med <strong>A</strong>. Resultatet är <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Professionella och vardagliga användningsområden',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bortom skolmatematiken finns tre-regeln överallt: inom farmacin för att beräkna doser baserat på kroppsvikt, inom fotografin för att beräkna exponeringstider, inom finans för att beräkna procentuella förändringar, eller vid tryckning för att skala formatdimensioner.',
    },
    {
      type: 'tip',
      title: 'Precisionstips',
      html: 'Resultatet visas med upp till 4 signifikanta decimaler. Om du arbetar med pengar eller exakta mått, kom ihåg att avrunda enligt sammanhanget: euro till 2 decimaler, pixlar till heltal.',
    },
  ],
};
