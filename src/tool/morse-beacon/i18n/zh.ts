import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: '摩尔斯电码中的 SOS 求救信号是什么？',
    answer: "信号是 '... --- ...'（三短、三长、三短）。它是连续发送的，字母之间没有空格，表示紧急情况。",
  },
  {
    question: '为什么我的浏览器中闪光灯不工作？',
    answer: '激活闪光灯需要浏览器拥有摄像头权限。由于隐私原因，一些移动浏览器或旧版本的桌面浏览器不支持此 API。',
  },
  {
    question: '屏幕 SOS 信号可见吗？',
    answer: '是的，在完全黑暗的情况下，摩尔斯电码闪烁的白色屏幕的最大亮度可以在几百米外看到，如果不幸闪光灯失效，这是一个有用的替代方案。',
  },
  {
    question: '什么是国际摩尔斯电码？',
    answer: '它是一种通信系统，使用短（点）和长（划）信号序列来表示字母和数字，由国际电联标准化，用于无线电通信和光学信号。',
  },
];

const howToData = [
  {
    name: '编写消息',
    text: "输入您想要传输的文本，或使用预设的 'SOS' 按钮应对紧急情况。",
  },
  {
    name: '配置速度',
    text: '调整 WPM（每分钟词数），根据能见度加快或放慢信号。',
  },
  {
    name: '选择光源',
    text: '开启全屏闪烁或允许访问摄像头闪光灯以获得更强的信号。',
  },
  {
    name: '开始传输',
    text: '按下“传输”，系统将根据摩尔斯标准将文本转换为自动光脉冲。',
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
  name: '如何使用摩尔斯信标传输信息',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '摩尔斯信标：战术 SOS 发射器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '将您的设备变成摩尔斯电码传输站。使用闪光灯和屏幕作为紧急光信号和战术通信。',
};

const ui: MorseBeaconUI = {
  labelMessage: '待传输消息',
  placeholder: '在此输入您的消息 (SOS, HELLO, HELP)...',
  btnTransmit: '传输',
  btnSosLoop: 'SOS 循环',
  btnStop: '停止',
  labelTorch: '闪光灯/手电筒',
  statusStandby: '待命',
  statusTransmitting: '传输中',
  statusStopping: '停止中...',
  statusWaiting: '等待中',
  statusReady: '硬件就绪',
  statusNoTorch: '无闪光灯',
  statusNoPermission: '无权限',
  statusNotSupported: '不支持',
  statusReqHttps: '需要 HTTPS',
  statusSending: '发送内容:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morse-beacon',
  title: '摩尔斯信标：战术 SOS 发射器',
  description: '将您的设备变成摩尔斯电码传输站。使用闪光灯和屏幕作为紧急光信号和战术通信。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'ITU-R M.1677-1 — 国际摩尔斯电码', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: '摩尔斯电码 — 维基百科', url: 'https://zh.wikipedia.org/wiki/%E6%91%A9%E5%B0%94%E6%96%AF%E7%94%B5%E7%A0%81' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '光的语言',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该工具将您的设备转变为一个光学信号信标，能够传输数公里外可见的信息。它使用国际摩尔斯电码标准，通过光脉冲（闪光灯和屏幕）实现无声或紧急通信。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: '通用标准',
          description: '由塞缪尔·摩尔斯于 1830 年开发，这种由点和划组成的二进制系统彻底改变了电信领域。它的简单性使其极其稳健：它可以通过声音、无线电、电力或光进行传输，即使在严重的干扰下仍可识别。',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS 紧急模式',
          description: "“SOS 循环”按钮持续发送 ··· --- ··· 序列。该信号是全球公认的求救信号，得益于 LED 闪光灯的高对比度，在某些条件下的白天，即使在很远的地方也可以看到。",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 标准',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该工具严格遵守国际电信联盟定义的国际摩尔斯电码的<strong>监管时序</strong>。',
    },
    {
      type: 'list',
      items: [
        '1 点 = 1 时间单位',
        '1 划 = 3 时间单位',
        '元素间空格 = 1 单位',
        '字母间空格 = 3 单位',
        '单词间空格 = 7 单位',
      ],
    },
    {
      type: 'tip',
      title: '标准速度',
      html: '默认速度为 <strong>15 WPM</strong>（每分钟词数），对应于专业传输节奏。在 15 WPM 时，1 单位 = 80 毫秒。',
    },
  ],
};
