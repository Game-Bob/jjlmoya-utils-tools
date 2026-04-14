import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'What is the simple direct rule of three?',
    answer: "It is a mathematical method for solving proportionality problems between three known values and one unknown. It is called 'direct' because when one quantity increases, the other increases in the same proportion.",
  },
  {
    question: 'When should I use the inverse rule of three?',
    answer: 'It is used when the quantities are inversely proportional (if one increases, the other decreases). For example: if 2 painters take 5 hours, 4 painters will take less time. Our current calculator focuses on direct proportionality.',
  },
  {
    question: 'Is it accurate for professional calculations?',
    answer: 'Yes. Our calculator uses high-fidelity floating point precision, ideal for dosage adjustments, graphic design scales, commercial budgets and recipe conversions.',
  },
  {
    question: 'How is it calculated manually?',
    answer: 'The formula is: (Value B * Value C) / Value A = X. That is, you multiply the diagonal values and divide the result by the remaining value.',
  },
];

const howToData = [
  {
    name: 'Identify the base relationship',
    text: 'Enter the two known values that form the initial proportion (e.g. 100km equals 8 litres).',
  },
  {
    name: 'Enter the third value',
    text: 'Write the new value whose equivalent you want to find (e.g. if I am going to travel 250km...).',
  },
  {
    name: 'Get the result',
    text: 'The system will automatically calculate the unknown value (X) in real time without pressing any buttons.',
  },
  {
    name: 'Copy or reset',
    text: 'You can copy the result directly to the clipboard or clear the fields to perform a new calculation.',
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
  name: 'How to use the rule of three calculator',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simple Rule of Three Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Solve mathematical proportions instantly. The definitive tool for calculating quantities, recipes, discounts and conversions.',
};

const ui: RuleOfThreeUI = {
  labelA: 'If I have...',
  labelB: 'It equals...',
  labelC: 'And now I have...',
  labelX: 'Result (X)',
  hintA: 'Initial quantity',
  hintB: 'Known value',
  hintC: 'New quantity',
  hintX: 'Calculated value',
  separatorIsTo: 'Is to',
  separatorWillBe: 'Will be',
  copyTitle: 'Copy result',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'rule-of-three',
  title: 'Simple Rule of Three Calculator',
  description: 'Solve mathematical proportions instantly. The definitive tool for calculating quantities, recipes, discounts and conversions.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Proportionality (mathematics) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Proportionality_(mathematics)' },
    { name: 'Ratios and proportions — Khan Academy', url: 'https://www.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-ratios-intro/a/ratio-review' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'What is the rule of three used for?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The simple direct rule of three is the "Swiss army knife" of mathematics. It solves problems where three data points are known and we seek the fourth. If you know the relationship between <strong>A and B</strong>, and you have a new value <strong>C</strong>, the calculator finds <strong>X</strong> instantly.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Cooking and Recipes',
          description: 'If the recipe calls for 500g of flour for 4 people, how much do I need for 7?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Shopping and Prices',
          description: 'If a pack of 3 cans costs €2.50, how much would 10 cans cost me?',
          points: ['(2.50 × 10) ÷ 3 = €8.33'],
        },
        {
          icon: 'mdi:car',
          title: 'Travel and Distance',
          description: 'If I take 45 min to do 60km, how long will it take me to do 140km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design and Screens',
          description: 'If the image is 1920px wide and I want to reduce it to 800px maintaining the proportion...',
          points: ['(OriginalHeight × 800) ÷ 1920 = NewHeight'],
        },
      ],
    },
    {
      type: 'title',
      text: 'How does the formula work?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The formula is always the same: <strong>multiply the diagonal values and divide by the remaining one</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Simple direct rule of three formula',
    },
    {
      type: 'paragraph',
      html: 'In the calculator: we multiply value <strong>B</strong> by value <strong>C</strong> and divide by <strong>A</strong>. The result is <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Professional and everyday uses',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Beyond school mathematics, the rule of three is everywhere: in pharmacy for calculating dosages by body weight, in photography for calculating exposure times, in finance for calculating percentage variations, or in printing for scaling format dimensions.',
    },
    {
      type: 'tip',
      title: 'Precision tip',
      html: 'The result is displayed with up to 4 significant decimal places. If you work with money or exact measurements, remember to round according to context: euros to 2 decimal places, pixels to integers.',
    },
  ],
};
