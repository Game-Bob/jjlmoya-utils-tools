import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: '如何生成 WhatsApp 链接？',
    answer: '要创建链接，请输入包含国家代码的手机号码。例如，中国请输入 86，然后输入您的本地号码。您可以添加可选的消息，工具将生成最终的 wa.me 链接，可直接复制。',
  },
  {
    question: '我可以添加较长的预填消息吗？',
    answer: '可以。您可以附带一条消息，当有人点击您的链接时，该消息将自动出现在聊天框中。工具使用 URL 编码来支持空格、重音符号和表情符号，而不会破坏 URL。',
  },
  {
    question: '如何使用生成的二维码？',
    answer: '生成有效链接后，将出现“显示二维码”按钮。二维码包含您的链接 URL。右键点击二维码并选择“图片另存为”，即可下载用于名片、海报或社交媒体的高分辨率图片。',
  },
  {
    question: '我的数据会流向何处？',
    answer: '生成器完全在客户端（即您的浏览器中）处理所有内容。您的电话号码和预填消息永远不会发送到任何服务器，也不会存储在任何数据库中。',
  },
];

const howToData = [
  { name: '选择区号', text: '从下拉菜单中选择您的国家代码，并输入不带前缀的电话号码。' },
  { name: '添加可选消息', text: '编写一段预填文本，当有人打开链接并点击发送时，该文本将自动显示。' },
  { name: '生成链接', text: '按下绿色按钮，获取您的 wa.me 直接跳转 URL，准备分享。' },
  { name: '分享或打印二维码', text: '复制链接、测试聊天或下载用于名片和打印的二维码。' },
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
  name: '如何创建 WhatsApp 直接聊天链接',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp 链接生成器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  description: '创建带有预填消息和二维码的 WhatsApp 直接聊天链接。免费工具，无需注册，100% 隐私保护。',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp 电话号码',
  phonePlaceholder: '138 0000 0000',
  messageLabel: '开场消息（可选）',
  messagePlaceholder: '您好！我想了解更多关于您服务的信息...',
  generateBtn: '生成链接',
  resultLabel: '直接链接已生成',
  copyTitle: '复制到剪贴板',
  copyDone: '已复制！',
  testBtn: '测试聊天',
  qrShow: '显示二维码',
  qrHide: '隐藏二维码',
  errorPhone: '请输入有效的电话号码。',
  defaultPrefix: '86',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-link-generator',
  title: '带二维码的 WhatsApp 链接生成器',
  description: '创建带有预填消息和二维码的 WhatsApp 直接聊天链接。免费工具，无需注册，100% 隐私保护。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '如何使用“点击聊天”功能 — WhatsApp 帮助中心', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API 点击聊天：参数和格式 — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '为 WhatsApp 生成简短的直接链接' },
    {
      type: 'paragraph',
      html: '是否需要客户或关注者在不先保存您号码的情况下通过 WhatsApp 联系您？我们的 <strong>wa.me 链接创建器</strong>通过生成一个能立即打开直接聊天的链接来解决这个问题，无需任何前期步骤。',
    },
    { type: 'title', level: 3, text: 'wa.me WhatsApp 短链接有什么用？' },
    {
      type: 'paragraph',
      html: 'WhatsApp 提供了一个名为“点击聊天”的 API。通过使用特殊的 URL，任何用户都可以与您开启新聊天，而无需先将您添加为联系人，无论是在手机上还是通过 WhatsApp 网页版。',
    },
    {
      type: 'list',
      items: [
        '<strong>提高转化率：</strong>在您的商店中添加“通过 WhatsApp 联系”按钮可减少摩擦并增加销售额。',
        '<strong>预填消息：</strong>用户只需按“发送”。例如：“您好！我从 Instagram 过来，想领取优惠。”',
        '<strong>自动二维码：</strong>下载二维码用于名片、海报或社交媒体贴子。',
      ],
    },
    { type: 'title', level: 3, text: '链接生成是如何工作的？' },
    {
      type: 'paragraph',
      html: '该工具将国际区号和纯数字电话号码拼接在一起，然后将其连同经过 <em>url-encoding</em> 转换的消息参数一起追加到官方 WhatsApp API 地址后。',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL 格式',
      code: 'https://wa.me/86XXXXXXXXXXX\nhttps://wa.me/86XXXXXXXXXXX?text=%C2%A1Nih%20Hao!%20...',
    },
    { type: 'title', level: 3, text: '隐私保证和本地处理' },
    {
      type: 'paragraph',
      html: '所有链接的构建都在您的浏览器中通过 JavaScript 完成。没有任何服务器会记录、保存或读取您输入的电话号码或消息。您的隐私得到充分保护。',
    },
    {
      type: 'tip',
      title: '国际区号的重要性',
      html: '为了让 WhatsApp 正确路由消息，国家代码是强制性的。中国是 <strong>86</strong>，其后紧跟手机号码，不要有空格或 + 符号。最终结果例如 <code>86138XXXXXXXX</code>。',
    },
  ],
};
