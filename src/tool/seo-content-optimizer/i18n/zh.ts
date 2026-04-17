import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: '这个工具有助于提高我的 SEO 排名吗？',
    answer: '通过分析关键词密度和句子的可读性，您可以确保您的内容易于用户理解且与搜索引擎相关，从而避免过度优化的惩罚。',
  },
  {
    question: '技术分析检查哪些 HTML 元素？',
    answer: '它会验证 H1 标签的存在和唯一性、H2/H3 小标题的出现以及图像的 alt 属性。',
  },
  {
    question: '我的内容会存储在服务器上吗？',
    answer: '不会。分析 100% 在您的浏览器中本地运行。您的内容永远不会离开您的计算机。',
  },
  {
    question: '它兼容 Yoast SEO 标准吗？',
    answer: '是的，我们实施了与 Yoast 类似的衡量标准：句子长度、段落分布和标题层级。',
  },
];

const howToData = [
  { name: '编写或粘贴您的文本', text: '在主文本区域中输入您想要分析的内容。' },
  { name: '查看优化核查表', text: '检查侧边栏关于长度、可读性和关键词密度的提示。' },
  { name: '分析技术 HTML', text: '切换到技术分析选项卡以验证 H1 标签、图像 alt 和元数据结构。' },
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
  name: '如何针对 SEO 优化内容',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO 内容优化工具',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: '实时分析文本的关键词密度、可读性和技术 HTML 结构，无需向任何服务器发送数据。',
};

const ui: SeoContentOptimizerUI = {
  tabText: '文本分析',
  tabHtml: '技术 HTML 分析',
  textareaPlaceholder: '在这里编写您的文本或粘贴您的 HTML 代码...',
  statsChars: '字符数',
  statsWords: '单词数',
  statsReading: '阅读时间',
  statsSentences: '句子数',
  checklistTitle: '优化核查表',
  keywordsTitle: '关键词密度',
  technicalTitle: '技术 HTML 分析',
  h1Label: '检测到 H1',
  linksLabel: '链接 (a)',
  imgsLabel: '图像 (img)',
  altsLabel: '缺少 alt',
  emptyState: '无数据',
  analyzing: '分析中...',
  checkInsufficient: '内容过短（不足 300 词）',
  checkPillar: '优秀的基石内容（超过 900 词）',
  checkGoodLength: '符合 SEO 的建议长度',
  checkLongSentences: '长句过多（超过文本的 25%）',
  checkGoodReadability: '句子可读性极佳',
  checkLongParagraphs: '请拆分过长的段落（超过 150 词）',
  checkMissingH1: '缺少 H1 标签',
  checkMultipleH1: '检测到多个 H1 标签',
  checkMissingH2: '缺少小标题 (H2)',
  checkMissingTitle: '缺少元 title 标签',
  stopWords: JSON.stringify(['的', '了', '和', '是', '就', '都', '而', '及', '与', '为', '之', '于', '也', '而', '在', '对', '中', '以', '等', '这', '那', '被', '由', '到', '从', '自', '其', '后', '前', '上', '下', '里', '外', '个', '种', '类', '样', '但', '然而', '所以', '如果', '或者', '可能', '可以', '需要', '如果', '我的', '你的', '他的', '她的', '我们的', '你们的', '他们的']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-content-optimizer',
  title: 'SEO 内容优化工具',
  description: '实时分析文本的关键词密度、可读性和技术 HTML 结构。免费且私密的 SEO 工具。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Google SEO 入门指南', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn' },
    { name: 'Yoast SEO 可读性标准', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO 内容优化：关键词、可读性和结构' },
    {
      type: 'paragraph',
      html: '内容质量不再仅仅取决于您包含的关键词，还取决于您如何组织信息，使其对人类和 Google 爬虫都易于理解。我们的<strong>实时 SEO 分析工具</strong>让您全面控制关键词密度、段落可读性和基本的 HTML 技术元素。',
    },
    { type: 'title', level: 3, text: '关键词密度和语义相关性' },
    {
      type: 'paragraph',
      html: '<strong>关键词密度</strong>表示某个术语相对于文本其余部分出现的频率。过度重复会触发<em>关键词堆砌 (keyword stuffing)</em> 过滤器，而密度极低可能会使搜索引擎难以识别文章的核心主题。',
    },
    {
      type: 'list',
      items: [
        '<strong>相关性分析：</strong> 识别出现频率最高词汇是否符合您的搜索意图。',
        '<strong>惩罚预防：</strong> 避免过度重复可能被视为垃圾信息的术语。',
        '<strong>语义优化：</strong> 在专业术语和自然语言之间寻找平衡。',
      ],
    },
    { type: 'title', level: 3, text: 'Yoast 风格的可读性' },
    {
      type: 'paragraph',
      html: '可读性是一个间接但关键的排名因素。如果用户因为段落是无休止的文本块而离开，您的<em>停留时间 (Dwell Time)</em> 就会下降。分析器会检测长句（中文语境下按平均字数折算）、超过 150 词的段落，并检查小标题的存在。',
    },
    {
      type: 'tip',
      title: '阅读时间',
      html: '大多数用户在不到 10 秒的时间内决定是否阅读一篇文章。了解预估阅读时间（按平均每分钟 200 个单词计算）有助于设定读者期望，从而降低跳出率。',
    },
    { type: 'title', level: 3, text: '技术 HTML 分析' },
    {
      type: 'paragraph',
      html: '粘贴您的源代码以验证关键元素：<strong>H1</strong> 的唯一性、H2/H3 小标题的存在、没有 <code>alt</code> 属性的图像以及 <code>title</code> 标签的存在。所有处理都在您的浏览器中进行，无需向任何服务器发送数据。',
    },
  ],
};
