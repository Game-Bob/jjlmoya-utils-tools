import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: '什么是简单直接的三数法？',
    answer: '这是一种解决三个已知值与一个未知值之间比例问题的数学方法。它被称为“直接”比例，是因为当一个量增加时，另一个量也以相同的比例增加。',
  },
  {
    question: '我应该什么时候使用反比例三数法？',
    answer: '当两个量成反比时（一个量增加，另一个量减少）使用。例如：如果 2 名油漆工需要 5 小时，那么 4 名油漆工所需的时间就会更少。我们目前的计算器专注于正比例计算。',
  },
  {
    question: '它对于专业计算准确吗？',
    answer: '是的。我们的计算器使用高保真浮点精度，非常适合剂量调整、图形设计缩放、商业预算和配方转换。',
  },
  {
    question: '如何手动计算？',
    answer: '公式为：(B 值 * C 值) / A 值 = X。也就是说，将对角线上的值相乘，然后将结果除以剩余的值。',
  },
];

const howToData = [
  {
    name: '确定基本关系',
    text: '输入形成初始比例的两个已知值（例如，100km 等于 8 升）。',
  },
  {
    name: '输入第三个值',
    text: '写下您想要寻找其等价值的新值（例如，如果我要旅行 250km...）。',
  },
  {
    name: '获取结果',
    text: '系统将实时自动计算未知值 (X)，无需按下任何按钮。',
  },
  {
    name: '复制或重置',
    text: '您可以直接将结果复制到剪贴板，或者清空字段以进行新的计算。',
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
  name: '如何使用三数法（比例）计算器',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '简单三数法比例计算器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '即时解决数学比例问题。用于计算数量、配方、折扣和转换的权威工具。',
};

const ui: RuleOfThreeUI = {
  labelA: '如果我有...',
  labelB: '等于...',
  labelC: '而现在我有...',
  labelX: '结果 (X)',
  hintA: '初始数量',
  hintB: '已知值',
  hintC: '新数量',
  hintX: '计算出的值',
  separatorIsTo: '比上',
  separatorWillBe: '等于',
  copyTitle: '复制结果',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'rule-of-three-calculator',
  title: '简单三数法比例计算器',
  description: '即时解决数学比例问题。用于计算数量、配方、折扣和转换的权威工具。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '比例（数学） — 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%AF%94%E4%BE%8B' },
    { name: '比和比例 — 可汗学院', url: 'https://zh.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '三数法比例计算用于什么？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '简单直接的三数法是数学中的“瑞士军刀”。它解决了已知三个数据点并寻求第四个数据点的问题。如果您知道 <strong>A 和 B</strong> 之间的关系，并且有一个新值 <strong>C</strong>，计算器会立即找到 <strong>X</strong>。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: '烹饪和配方',
          description: '如果配方要求 4 个人的面粉量为 500g，那么 7 个人需要多少？',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: '购物和价格',
          description: '如果一包 3 罐的价格为 2.50 欧元，那么 10 罐需要多少钱？',
          points: ['(2.50 × 10) ÷ 3 = 8.33 欧元'],
        },
        {
          icon: 'mdi:car',
          title: '旅行和距离',
          description: '如果我跑 60km 需要 45 分钟，那么跑 140km 需要多长时间？',
          points: ['(45 × 140) ÷ 60 = 105 分钟'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: '设计和屏幕',
          description: '如果图片宽度为 1920px，而我想在保持比例的同时将其减小到 800px...',
          points: ['(原始高度 × 800) ÷ 1920 = 新高度'],
        },
      ],
    },
    {
      type: 'title',
      text: '公式是如何工作的？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '公式始终相同：<strong>将对角线上的值相乘，然后除以剩余的值</strong>。',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: '简单直接三数法公式',
    },
    {
      type: 'paragraph',
      html: '在计算器中：我们将值 <strong>B</strong> 乘以值 <strong>C</strong>，然后除以 <strong>A</strong>。结果就是 <strong>X</strong>。',
    },
    {
      type: 'title',
      text: '专业和日常用途',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '除了学校数学之外，比例计算无处不在：在药房中用于根据体重计算剂量，在摄影中用于计算曝光时间，在金融中用于计算百分比变化，或在印刷中用于缩放格式尺寸。',
    },
    {
      type: 'tip',
      title: '精度提示',
      html: '结果最多显示 4 位有效小数。如果您处理的是货币或精确测量值，请记得根据具体情况进行四舍五入：欧元保留 2 位小数，像素保留为整数。',
    },
  ],
};
