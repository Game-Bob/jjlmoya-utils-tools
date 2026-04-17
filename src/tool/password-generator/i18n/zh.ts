import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: '使用在线密码生成器安全吗？',
    answer: '只要生成器是在客户端运行的，就是安全的。我们的工具利用加密安全的算法在您的浏览器内本地生成密码。您的密码绝不会通过互联网发送，也不会存储在任何服务器上。',
  },
  {
    question: '是什么让密码“防黑客”？',
    answer: '关键在于熵（随机性）。大小写字母、数字和特殊符号的混合，再加上 12-16 个字符的最小长度，使得以当前技术进行的暴力破解攻击几乎不可能成功。',
  },
  {
    question: '为什么要避免使用常用词或日期？',
    answer: '黑客使用字典攻击，每秒测试数百万个单词、名字和日期组合。纯随机密码不遵循任何语言模式，因此安全性要高得多。',
  },
  {
    question: '我应该记住所有的密码吗？',
    answer: '不建议。理想的方法是使用密码管理器（如 Bitwarden、1Password 或浏览器内置管理器）来存储这些长而随机的密码，这样您只需要记住一个强大的主密码。',
  },
];

const howToData = [
  {
    name: '设置长度',
    text: '调整滑块选择密码应包含的字符数。目前的安全标准建议至少 12 个。',
  },
  {
    name: '选择复杂度',
    text: '根据您将使用该密码的网站的要求，勾选大写字母、数字和符号选项。',
  },
  {
    name: '生成密码',
    text: '点击生成按钮。每次点击都会基于加密算法创建一个独特的、高熵的组合。',
  },
  {
    name: '一键复制',
    text: '使用复制按钮将密码以安全的方式直接发送到您的剪贴板。',
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
  name: '如何使用安全密码生成器',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '安全随机密码生成器',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '立即创建强大、防黑客的密码。免费的网络安全工具，用于生成随机、安全的密钥。',
};

const ui: PasswordGeneratorUI = {
  generating: '生成中...',
  labelSecurity: '强度',
  labelLength: '长度',
  strengthWeak: '弱',
  strengthFair: '中',
  strengthGood: '良',
  strengthStrong: '强',
  strengthUnbreakable: '坚不可摧',
  optionUppercase: '大写字母',
  optionLowercase: '小写字母',
  optionNumbers: '数字',
  optionSymbols: '符号',
  copyTitle: '复制',
  regenerateTitle: '重新生成',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'password-generator',
  title: '安全随机密码生成器',
  description: '立即创建强大、防黑客的密码。免费的网络安全工具，用于生成随机、安全的密钥。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: 数字身份指南', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: '密码 — 维基百科', url: 'https://zh.wikipedia.org/wiki/%E5%AF%86%E7%A0%81' },
    { name: 'Have I Been Pwned — 检查您的密码是否已泄露', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '解不破密码的剖析',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '您的密码是您的个人数据（银行、医疗、照片）与网络罪犯之间唯一的屏障。然而，普通用户仍然依赖于可预测的模式，如“123456”或宠物名字，这些模式在<strong>不到一秒钟</strong>的时间内就可以被破解。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: '彩虹表的危险',
          description: '黑客并不会一次尝试一个地去猜您的密码。他们使用包含数百万个常见密码预计算哈希的大型数据库（彩虹表）。如果您的密码在字典中或者是著名的短语，那么在您开始使用它之前，它就已经被破解了。',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: '解决方案：纯熵',
          description: '熵衡量无序或不可预测性。熵（单位：位）越高，计算机破解它所需的时间就越多。本工具使用 crypto.getRandomValues()，这是一个生成加密安全随机数的浏览器 API，不像 Math.random() 那样是可预测的。',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: '基本网络安全原则',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: '长度胜过复杂度',
          description: '一个 20 个字符的仅包含小写字母的密码比一个包含稀有符号的 8 个字符的密码更安全。从数学上讲，每增加一个字符，破解难度就会呈指数级增加。',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: '替换的神话',
          description: '用“@”代替“a”或用“3”代替“e”（Leetspeak）骗不了任何人。现代攻击字典已经自动包含了这些变体。避免使用可识别的单词。',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: '不同站点，不同密钥',
          description: '如果您在电子邮件和论坛中使用相同的密码，而论坛被黑了，黑客现在就可以访问您的电子邮件了。使用密码管理器（如 Bitwarden 或 1Password）来为您记住复杂的密码。',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: '隐私保障',
      html: '所有生成过程均<strong>在您的浏览器中</strong>发生。没有任何密码通过互联网传输或存储在任何服务器上。源代码是可审计的。',
    },
  ],
};
