import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: '这个日期差计算器是免费的吗？',
    answer: '是的，这是一个 100% 免费的工具，可以从任何浏览器访问，无需注册或下载。',
  },
  {
    question: '总时间中如何处理闰年？',
    answer: '该工具使用标准 JavaScript 年代测定法 (UTC)，它会自动处理闰年和每月不同的天数，以给出精确的结果。',
  },
  {
    question: '我也可以计算小时和分钟之间的差值吗？',
    answer: '是的。输入字段允许您选择精确的时间。结果会提供天、小时、分钟和秒的详细分解，以及累积的总计时间。',
  },
  {
    question: '我的日期输入会发送到服务器吗？',
    answer: '不会。所有处理都在您的浏览器本地完成。我们不会存储或接收有关您计算日期的任何信息。',
  },
];

const howToData = [
  { name: '选择开始日期', text: '输入开始日期和时间，或点击“今天”立即设置。' },
  { name: '选择结束日期', text: '定义目标时刻。使用“现在”来测量截至这一精确时刻所经过的时间。' },
  { name: '读取结果', text: '检查天、小时、分钟和秒的详细分解，以及周和小时的累积总计。' },
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
  name: '如何计算两个日期之间的差值',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '日期差计算器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  description: '精确计算两个日期之间经过了多少时间，或者距离某个事件还有多久。结果以天、小时和分钟显示。',
};

const ui: DateDiffCalculatorUI = {
  startLabel: '开始日期',
  endLabel: '结束日期',
  nowBtn: '现在',
  todayBtn: '今天',
  tomorrowBtn: '明天',
  daysLabel: '天',
  hoursLabel: '小时',
  minsLabel: '分',
  secsLabel: '秒',
  weeksLabel: '总周数',
  totalHoursLabel: '总小时数',
  totalMinsLabel: '总分钟数',
  elapsed: '经过的时间',
  past: '过去的时间',
  invalidDates: '无效日期',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'date-difference-calculator',
  title: '日期差计算器',
  description: '精确计算两个日期之间经过了多少时间，或者距离某个事件还有多久。提供天、小时和分钟结果的免费工具。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Time and Date: 世界时钟和时区转换器', url: 'https://www.timeanddate.com/worldclock/' },
    { name: '维基百科：格里历的历史', url: 'https://zh.wikipedia.org/wiki/格里历' },
    { name: '维基百科：艾森豪威尔矩阵与时间管理', url: 'https://zh.wikipedia.org/wiki/时间管理' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '带有天、小时和分钟显示的日期差计算器' },
    {
      type: 'paragraph',
      html: '计算<strong>两个日期之间的差值</strong>是日常生活中和专业领域中最常见且最容易被低估的任务之一。无论您是在计划产品发布、计算一个人的精确年龄，还是测量距离某个特殊事件还剩多少时间，拥有一个精确的工具对于高效的时间管理至关重要。',
    },
    { type: 'title', level: 3, text: '日期差计算器有哪些用途？' },
    {
      type: 'paragraph',
      html: '该工具的用途非常广泛。在职场中，项目经理使用它来定义交付截止日期并跟踪里程碑进度。在法律和行政背景下，它对于计算时效期限或合同期限至关重要。',
    },
    {
      type: 'list',
      items: [
        '<strong>活动策划：</strong>了解距离婚礼、会议或旅行还剩多少周和多少天。',
        '<strong>项目管理：</strong>计算从某个阶段开始到完成所经过的时间。',
        '<strong>财务：</strong>确定用于利息计算或发票到期日的总天数。',
        '<strong>人力资源：</strong>测量员工的工龄或累积的年假天数。',
        '<strong>健康：</strong>跟踪治疗进度或手术后的康复时间。',
      ],
    },
    { type: 'title', level: 3, text: '时间感知与数字精度' },
    {
      type: 'paragraph',
      html: '我们通常倾向于四舍五入时间。当实际距离还有 27 天 14 小时时，我们会说“大约一个月”。通过使用数字计算器，我们消除了主观性，并获得了用于明智决策的清晰数据。',
    },
    { type: 'title', level: 3, text: '自然日与工作日' },
    {
      type: 'paragraph',
      html: '该工具计算的是<strong>日历日</strong>，包括周末和公共假期。在天文和一般的民用计算中，时间是连续测量的。如果您需要估算项目时间，请记住显示的日期代表完整的真实日历。',
    },
    { type: 'title', level: 3, text: '时间对生产力的影响' },
    {
      type: 'paragraph',
      html: '帕金森定律指出，工作会自动膨胀，占满所有可用的完成时间。通过精确可视化距离截止日期还剩多少小时零多少分钟，团队往往会优化他们的工作并保持专注。',
    },
    {
      type: 'tip',
      title: '未来和过去的日期',
      html: '您可以将计算器用于未来和过去的日期。如果结束日期早于开始日期，系统会自动检测到这是过去经过的时间，并保持绝对差值的精确度。',
    },
  ],
};
