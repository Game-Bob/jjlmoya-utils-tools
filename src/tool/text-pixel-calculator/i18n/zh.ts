import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: '如何在线计算文本的像素宽度？',
    answer: '将您的文本粘贴到输入框中，配置字体和大小，工具将自动使用浏览器 Canvas API 返回精确的像素宽度。',
  },
  {
    question: '为什么不同字体的像素宽度不同？',
    answer: '大多数字体都是比例字体，这意味着每个字符都有不同的宽度。例如，在标准的无衬线字体中，大写字母“M”总是比小写字母“i”宽。',
  },
  {
    question: '测量字符数和测量像素是一回事吗？',
    answer: '不是。测量字符数得到的是字符串长度，而测量像素得到的是它占用的视觉空间。这对于确保网页设计中文本不会超出其容器至关重要。',
  },
  {
    question: '我可以使用任何 Google Fonts 字体吗？',
    answer: '是的，只要字体安装在您的操作系统上或加载在当前页面上，工具就能准确测量其尺寸。',
  },
  {
    question: '处理私有文本或代码片段安全吗？',
    answer: '安全。计算器完全在本地运行。没有任何数据被发送到外部服务器，保证了您项目的完全隐私。',
  },
];

const howToData = [
  { name: '输入文本', text: '在输入区域键入或粘贴您想要测量的文本。' },
  { name: '配置字体', text: '设置字体系列、像素大小、字重以及是否斜体。' },
  { name: '读取结果', text: '像素宽度和字符计数会进行实时更新。' },
  { name: '复制数值', text: '点击“复制宽度”将像素值保存到剪贴板。' },
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
  name: '如何测量文本的像素宽度',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '文本像素宽度计算器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  description: '根据字体、大小和样式精确计算任何文本的像素宽度。',
};

const ui: TextPixelCalculatorUI = {
  textLabel: '待测量文本',
  textPlaceholder: '在此处键入或粘贴您想要测量的文本...',
  defaultText: '你好，世界',
  fontLabel: '字体系列',
  sizeLabel: '大小 (px)',
  weightLabel: '字重',
  italicLabel: '斜体',
  widthLabel: '宽度 (像素)',
  charsLabel: '字符数',
  previewLabel: '视觉预览',
  copyBtn: '复制宽度',
  resetBtn: '重置',
  copyDone: '宽度已复制',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-width-calculator',
  title: '文本像素宽度计算器',
  description: '根据字体、大小和样式精确计算任何文本在像素上的宽度。专为设计师和开发者提供的免费工具。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'W3C: CSS 文本模块第 3 级', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: 了解可变字体', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '测量任何文本的精确像素宽度' },
    {
      type: 'paragraph',
      html: '您的文本是否超出了容器？在渲染标题之前需要知道它占用了多少空间？<strong>浏览器 Canvas API</strong> 允许您以像素级精度测量任何文本字符串的精确宽度，而无需将其渲染到 DOM 中。',
    },
    { type: 'title', level: 3, text: '为什么只计算字符数是不够的' },
    {
      type: 'paragraph',
      html: '现代字体是<strong>比例字体</strong>：每个字形都有不同的宽度。一个“W”占用的空间可能是“i”的三倍。字符数无法告诉您文本实际占用的视觉空间。',
    },
    {
      type: 'list',
      items: [
        '<strong>网页设计：</strong>防止按钮、标签和表格单元格中的文本溢出。',
        '<strong>SEO：</strong>搜索引擎是按像素而不是字符截断标题。',
        '<strong>Canvas 和 PDF：</strong>在以编程方式绘制文本之前计算精确位置。',
        '<strong>工具提示和气泡：</strong>根据内部文本动态调整容器大小。',
      ],
    },
    { type: 'title', level: 3, text: 'Canvas 测量如何工作' },
    {
      type: 'paragraph',
      html: 'Canvas API 的 <code>ctx.measureText()</code> 方法会返回一个 <code>TextMetrics</code> 对象，其中的 <code>width</code> 属性反映了使用当前有效字体时的 CSS 像素宽度。该工具在测量之前会根据您选择的字体、大小、字重和样式配置上下文。',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText 示例',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('你好，世界').width; // 例如 74.5",
    },
    { type: 'title', level: 3, text: '隐私和本地处理' },
    {
      type: 'paragraph',
      html: '所有计算都在您的浏览器中进行。任何文本、代码片段或私人数据都不会离开您的设备。',
    },
    {
      type: 'tip',
      title: 'Google Fonts 字体',
      html: '为了准确测量 Google Fonts 字体，请首先确保它已在页面加载或安装在您的系统中。否则，浏览器将回退到备用字体，结果会有所不同。',
    },
  ],
};
