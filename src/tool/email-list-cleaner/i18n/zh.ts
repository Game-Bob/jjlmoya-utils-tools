import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: '这个邮件列表清洗工具具体是做什么的？',
    answer: '该工具分析您的电子邮件列表，删除重复项，剔除不必要的空格，验证基本格式，并将所有地址统一为小写，以确保数据库的整洁。',
  },
  {
    question: '邮件数量有限制吗？',
    answer: '没有严格的条数限制。您可以一次性处理数千封电子邮件。唯一的限制是，如果列表极其庞大，可能会受限于您浏览器的内存。',
  },
  {
    question: '在这里粘贴我的电子邮件安全吗？',
    answer: '绝对安全。所有处理均通过 JavaScript 在您自己的浏览器中本地完成。您的数据永远不会发送到我们的服务器，也不会存储在任何外部数据库中。',
  },
  {
    question: '这如何提高我的邮件营销送达率？',
    answer: '通过删除不存在或格式错误的地址，您可以降低退信率，从而提高在 Gmail、Outlook 和 Yahoo 等提供商处的域名声誉。',
  },
];

const howToData = [
  { name: '粘贴电子邮件', text: '复制您的电子邮件列表并将其粘贴到文本框中。可以使用换行、逗号或空格进行分隔。' },
  { name: '清洗列表', text: '点击“清洗列表”按钮开始验证和去重过程。' },
  { name: '查看结果', text: '检查显示原始邮件数与最终邮件数的统计信息，并在下方面板查阅清洗后的列表。' },
  { name: '复制或下载', text: '直接将结果复制到剪贴板，或下载为开箱即用的 .txt 文件。' },
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
  name: '如何清洗电子邮件列表',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '邮件列表清洗工具',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  description: '删除电子邮件列表中的重复项、修正空格并验证格式。无条数限制的免费工具。',
};

const ui: EmailListCleanerUI = {
  inputLabel: '电子邮件列表',
  inputPlaceholder: '在此处粘贴您的电子邮件列表（以换行、逗号或空格分隔）...',
  cleanBtn: '清洗列表',
  clearBtn: '全部清空',
  statsOriginal: '原始',
  statsRemoved: '已删除',
  statsFinal: '整洁',
  resultLabel: '清洗结果',
  copyBtn: '复制列表',
  copyDone: '已复制！',
  downloadBtn: '下载 .txt',
  registered: '个已登记',
  downloadFilename: 'clean-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-list-cleaner',
  title: '邮件列表清洗工具',
  description: '免费清洗电子邮件列表。在几秒钟内删除重复项、修正空格并验证格式。节省成本并提高邮件送达率。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google：电子邮件发件人指南', url: 'https://support.google.com/a/answer/81126' },
    { name: '维基百科：垃圾邮件', url: 'https://zh.wikipedia.org/wiki/垃圾郵件' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '为什么使用邮件列表清洗工具至关重要？' },
    {
      type: 'paragraph',
      html: '在数字营销领域，数据库的质量远比其规模重要。如果你拥有一个包含 50,000 个电子邮件的列表，但其中一半是不存在的地址、包含错别字或者是重复的，那么这个列表就毫无价值。这就是<strong>邮件列表清洗工具</strong>变得不可或缺的原因。',
    },
    { type: 'title', level: 3, text: '“脏”邮件列表的风险' },
    {
      type: 'paragraph',
      html: '维护一个未经清洗的数据库可能会导致严重的后果。向不存在的地址发送电子邮件会产生“硬退信”。如果这个比例超过 2-3%，垃圾邮件过滤器就会开始仔细审查您的域名，您最终可能会被列入国际黑名单。',
    },
    {
      type: 'tip',
      title: '专家建议',
      html: '永远不要购买电子邮件列表。这是毁掉域名声誉最快的方法。应有机地建立自己的列表，并每 3 到 6 个月清洗一次。',
    },
    { type: 'title', level: 3, text: '我们的工具如何优化您的数据库' },
    {
      type: 'paragraph',
      html: '我们的免费实用程序可在没有条数限制的情况下对您的数据库进行彻底、快速的清理。它可以立即执行多项关键验证任务：',
    },
    {
      type: 'list',
      items: [
        '<strong>去重：</strong> 同一用户不会收到两次相同的邮件。',
        '<strong>空格修正：</strong> 我们会删除开头或末尾偶然出现的空格，否则这些空格会导致发送无效。',
        '<strong>格式验证：</strong> 我们会过滤掉不符合有效电子邮件结构的条目。',
        '<strong>规范化：</strong> 所有内容都会转换为小写，以避免冗余记录。',
      ],
    },
    { type: 'title', level: 3, text: '什么时候是清洗列表的最佳时机？' },
    {
      type: 'list',
      items: [
        '在将联系人导入新的 CRM 或发送平台（如 Mailchimp、SendGrid 等）之前。',
        '如果您注意到邮件打开率已降至平时平均水平以下。',
        '在您手动收集数据的活动或展会之后。',
        '每季度进行一次预防性维护，以维护域名健康。',
      ],
    },
    { type: 'title', level: 3, text: '对投资回报率的影响' },
    {
      type: 'paragraph',
      html: '电子邮件营销仍然是投资回报率最高的渠道之一，但前提是邮件能进入收件箱。通过使用<strong>邮件清洗工具</strong>，您可以从源头上优化您的销售漏斗，并停止为那些永远不会看到您消息的联系人向平台付费。',
    },
    {
      type: 'tip',
      title: '实施双重确认 (Double Opt In)',
      html: '避免虚假邮件的最佳方法是要求用户通过点击发送到其收件箱的链接来确认订阅。这保证了电子邮件的存在以及用户拥有其访问权限。',
    },
  ],
};
