import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: '如何使用 Google 云端硬盘下载转换器？',
    answer: '从 Google 云端硬盘中存储的任何文件复制完整的“共享”链接（必须具有公共权限）。将其粘贴到工具的文本框中，然后点击“生成直链”。将出现一个新的 URL，点击该 URL 即可开始下载，而无需打开 Google 的查看器。',
  },
  {
    question: '我可以为私有文件生成直接下载链接吗？',
    answer: '如果文件是私有的或访问受限，Google 会要求您使用授权账号登录。为了实现无需注册的纯净下载，文件权限必须设置为“任何拥有链接的人都可以查看”。',
  },
  {
    question: '在这里转换我的云端硬盘链接安全吗？',
    answer: '安全。转换 100% 在您的浏览器中进行，完全匿名。该工具不会存储您的链接或进行任何服务器调用；它仅在客户端分析 URL 结构以生成下载版本。',
  },
  {
    question: '如果我的云端硬盘文件非常大怎么办？',
    answer: '对于大于约 100 MB 的文件，Google 云端硬盘不允许即时直接下载。相反，它会显示一个关于文件大小和跳过防病毒扫描的警告页面。这是 Google 服务器的固定策略，任何外部工具都无法避开。',
  },
];

const howToData = [
  { name: '复制共享链接', text: '在 Google 云端硬盘中，右键点击文件并选择“获取链接”。确保权限允许任何拥有链接的人访问。' },
  { name: '将链接粘贴到生成器中', text: '在工具的文本框中输入完整的云端硬盘 URL，然后点击“生成直链”按钮。' },
  { name: '复制并使用生成的链接', text: '复制新的直接下载链接，并将其用于电子邮件、网站、新闻通讯或任何需要在点击时立即下载文件的地方。' },
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
  name: '如何生成 Google 云端硬盘直接下载链接',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google 云端硬盘直接下载链接生成器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  description: '只需点击一下，即可将任何 Google 云端硬盘共享链接转换为直接下载链接，跳过文件预览页面。免费工具。',
};

const ui: DriveDirectLinkUI = {
  inputLabel: '在此处粘贴您的 Google 云端硬盘链接：',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: '生成直链',
  resultLabel: '直接下载链接：',
  copyTitle: '复制到剪贴板',
  copyDone: '已复制',
  testBtn: '测试下载',
  errorMsg: '您输入的链接似乎不是有效的 Google 云端硬盘链接。',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-direct-download-link',
  title: 'Google 云端硬盘直接下载链接生成器',
  description: '只需点击一下，即可轻松将任何 Google 云端硬盘共享链接转换为直接下载链接，跳过文件预览。免费工具。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '从 Google 云端硬盘下载文件 (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API：下载文件', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '将 Google 云端硬盘共享链接转换为直接下载链接' },
    {
      type: 'paragraph',
      html: '如果您经常通过 Google 云端硬盘共享文件，就会知道预览页面有多烦人。当您的用户点击链接时，他们会进入一个中间屏幕，被迫寻找下载按钮。我们的 <strong>Google 云端硬盘直接下载链接生成器</strong>通过将任何共享链接转换为自动开始下载的链接来解决这个问题。',
    },
    { type: 'title', level: 3, text: '为什么要使用直接下载链接？' },
    {
      type: 'paragraph',
      html: '主要好处是更好的用户体验。在共享 PDF、图像或软件安装程序时，用户期望点击链接能立即开始下载：',
    },
    {
      type: 'list',
      items: [
        '<strong>节省时间：</strong>一键下载，无需额外步骤。',
        '<strong>专业外观：</strong>非常适合网站上的下载按钮、新闻通讯或客户电子邮件。',
        '<strong>减少流失：</strong>不太懂技术的用户可能会被云端硬盘预览所困扰，不知如何下载。',
        '<strong>HTML 就绪：</strong>完美适用于网页中的 <code>href</code> 或 <code>src</code> 属性。',
      ],
    },
    { type: 'title', level: 3, text: '直链生成器是如何工作的？' },
    {
      type: 'paragraph',
      html: '一切都 100% 在您的浏览器中进行。Google 云端硬盘共享链接包含一个唯一的文件 ID。该工具提取该 ID 并使用 Google 的原生导出参数构建一个新的 URL：<code>https://drive.google.com/uc?export=download&amp;id=您的_ID</code>。',
    },
    {
      type: 'tip',
      title: '大文件警告',
      html: '对于超过约 100 MB 的文件，Google 云端硬盘会在下载开始前显示防病毒扫描警告页面。这是 Google 服务器的固定策略，任何外部工具都无法避开。',
    },
    { type: 'title', level: 3, text: '隐私和安全保证' },
    {
      type: 'paragraph',
      html: '该工具充分尊重您的隐私。整个链接转换都是通过您自己设备上的客户端 JavaScript 完成的。任何链接、文件 ID 或个人信息都不会发送到任何外部服务器。',
    },
  ],
};
