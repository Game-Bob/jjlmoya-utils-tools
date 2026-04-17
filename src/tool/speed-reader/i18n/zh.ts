import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: '什么是 RSVP 技术？',
    answer: 'RSVP 代表 Rapid Serial Visual Presentation（急速逐次视觉呈现）。单词出现在同一个焦点的中心，每次出现一个，从而消除了眼睛从左向右移动的需要。经过练习，这可以在不牺牲理解力的情况下大幅提高阅读速度。',
  },
  {
    question: '阅读速度过快会降低理解力吗？',
    answer: '这取决于训练。在适中速度（350-500 WPM）下，许多用户通过消除默读（内心发声）报告了更高的专注度。在极端速度（800+ WPM）下，如果没有预先练习，记忆力可能会下降。',
  },
  {
    question: '平均阅读速度是多少？',
    answer: '普通成年人每分钟阅读 200 到 250 个单词。配合 RSVP 阅读器并辅以练习，通常可以将速度翻倍（400-500 WPM），且保持极佳的理解力。',
  },
  {
    question: 'RSVP 会导致眼睛疲劳吗？',
    answer: '通过消除移动眼睛的肌肉疲劳，许多用户发现阅读比传统方法更不容易疲劳。起初可能会感觉强度很大，但大脑会迅速适应。',
  },
];

const howToData = [
  { name: '输入文本', text: '将您想要阅读的文章、书籍或文档粘贴到文本区域。' },
  { name: '配置 WPM', text: '调整每分钟单词数 (WPM)。如果您是初学者，请从 300 WPM 开始并逐渐增加。' },
  { name: '固定视线', text: '盯着红色字母（ORP 焦点）。不要尝试用眼球运动来跟随单词。' },
  { name: '开始训练', text: '按播放按钮，让信息流式呈现。您可以随时暂停。' },
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
  name: '如何使用 RSVP 快速阅读器',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '利用 RSVP 技术和最佳识别点对齐，将您的阅读速度训练至每分钟 1000 个单词。',
};

const ui: SpeedReaderUI = {
  progressLabel: '阅读进度',
  speedLabel: '速度',
  slowLabel: '慢速',
  fastLabel: '神速',
  speedHint: '从 300 WPM 开始并逐渐增加，挑战您的极限。',
  textLabel: '待处理文本',
  textPlaceholder: '在这里粘贴您的文章、书籍或文本...',
  clearLabel: '清除',
  words: '单词',
  defaultText: '欢迎使用 RSVP Speed Reader。在下方粘贴您的文本以开始。这项技术通过消除不必要的眼球运动，帮助您提高三倍的阅读速度。',
  play: '播放',
  pause: '暂停',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'speed-reader',
  title: 'RSVP Speed Reader',
  description: '将您的阅读速度训练至每分钟 1000 个单词。具有最佳焦点对齐功能的 RSVP 技术。使您的智力生产力翻倍。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '阅读的方程式：释放您的精神带宽' },
    {
      type: 'paragraph',
      html: '如果从生物力学的角度来看，阅读是在浪费时间呢？您的大脑是一台被模拟连接（双眼）所限制的超级计算机。<strong>RSVP 阅读器</strong>通过在您大脑处理速度最快的精确焦点上呈现单词，打破了这一瓶颈。',
    },
    {
      type: 'paragraph',
      html: '传统阅读是一个低效的过程。您的眼睛不像扫描仪那样工作；它们像连拍模式下的相机：停止、聚焦、跳跃。这种跳跃称为<strong>扫视 (saccade)</strong>，这意味着您在阅读时 spends 了大量时间仅仅是移动眼睛，而不是吸收信息。',
    },
    {
      type: 'tip',
      html: '“RSVP 阅读不仅仅是读得更快。它是消除了文本和大脑之间的机械摩擦。”',
    },
    { type: 'title', level: 3, text: '数据注入背后的科学' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: '最佳识别点 (ORP)',
          description: '每个单词都有一个大脑识别速度最快的点。该算法会计算精准的字母（红色部分）并将其完美居中。您的眼睛一毫米都不必移动。',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: '认知静默',
          highlight: true,
          description: '当速度高于 400-500 WPM 时，您的内心声音会保持安静——它跟不上速度。您不再“听到”您所读的内容，而是开始“看到”纯粹的含义和概念。这是终极的心流状态。',
        },
        {
          icon: 'mdi:brain',
          title: '视觉神经可塑性',
          description: '就像去健身房一样：起初 300 WPM 会感觉很快。一周后，500 WPM 就像散步一样。您正在重新训练连接视觉皮层与语言处理的神经通路。',
        },
      ],
    },
    { type: 'title', level: 3, text: '训练方案：从初学者到 Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '级别 1：觉醒 (200 到 300 WPM)',
          description: '您的正常阅读速度。习惯界面。放松脸部，让单词呈现在您面前。不要试图“捕捉”它们。',
          points: ['适合初学者', '熟悉 ORP', '无眼部疲劳'],
        },
        {
          title: '级别 2：音障 (400 到 500 WPM)',
          highlight: true,
          description: '这就是奇迹发生的地方。您会感到不适。错过单词时不要慢下来——您的大脑会学会根据上下文填补空白。',
          points: ['默读消失', '精神心流状态', '两倍基础速度'],
        },
        {
          title: '级别 3：脱离速度 (600+ WPM)',
          description: '进阶领域。非常适合复习学习材料、阅读新闻或当您在寻找核心概念时阅读技术文档。',
          points: ['2 小时读完普通小说', '极致阅读效率', '需要预先练习'],
        },
      ],
    },
  ],
};
