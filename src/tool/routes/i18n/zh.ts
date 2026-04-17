import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: '它使用什么优化算法？',
    answer: '它使用了旅行商问题（TSP）的高级解决方案。该算法分析所有停靠点，并确定最小化总行程距离的顺序，从而节省时间和燃料。',
  },
  {
    question: '共享我的位置安全吗？',
    answer: '是的。该工具在您的浏览器中本地处理地理数据。我们不会在服务器上存储您的路线、停靠点或位置历史记录。',
  },
  {
    question: '我一次可以优化多少个停靠点？',
    answer: '我们的免费版本允许您立即优化多达 10 个停靠点。对于较大规模的专业路线，系统经过优化，可以在不阻塞浏览器的情况下保持高性能。',
  },
  {
    question: '我可以直接在 Google 地图中使用该路线吗？',
    answer: '当然可以！路线优化后，该工具会生成一个与 Google 地图兼容的导航链接，这样您就可以直接从手机开始旅程。',
  },
];

const howToData = [
  {
    name: '添加起点',
    text: '输入起点地址或点击地图以设置路线的开始位置。',
  },
  {
    name: '输入目的地停靠点',
    text: '添加所有您需要访问的位置。顺序并不重要，因为系统会为您重新排序。',
  },
  {
    name: '优化顺序',
    text: '点击优化按钮。算法将在几秒钟内计算出覆盖所有停靠点的最高效顺序。',
  },
  {
    name: '在导航中打开',
    text: '使用导航按钮将优化后的路线带到您最喜欢的地图应用程序中。',
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
  name: '如何优化包含多个停靠点的路线',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '最佳路线计算器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '免费优化您的送货或旅行路线。自动重新排列停靠点，以找到最短、最高效的路径。',
};

const ui: RoutesUI = {
  titleSidebar: '路线地点',
  descriptionSidebar: '点击地图添加停靠点。第一个点是起点。',
  emptyState: '未添加地点',
  btnOptimize: '计算最佳路线',
  btnCalculating: '计算中...',
  btnClear: '全部清除',
  labelDistance: '预估总距离',
  labelDeleteAria: '删除',
  labelLoadingAddress: '正在加载地址...',
  labelPoint: '地点',
  errorMinPoints: '计算路线至少需要两个点。',
  errorCalculate: '计算路线时出错。',
  errorAddress: '获取地址时出错',
  errorAddressName: '未知地点',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimal-routes',
  title: '免费最佳路线计算器',
  description: '免费优化您的送货或旅行路线。我们的工具会自动重新排列您的停靠点，以找到最短、最高效的路径。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '技术与来源',
  bibliography: [
    { name: 'Leaflet — 开源交互式地图库', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — 开源地图数据', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager 地图图块', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — 逆地理编码服务 (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — 开源路由引擎 (路线优化)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '智能路线优化器：用于送货和旅行的 TSP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>在线路线优化器</strong>是一款免费工具，旨在解决经典的“旅行商问题 (TSP)”。您可以以任何顺序添加所有停靠点，算法将自动计算最高效的顺序，以最小化总行程距离。',
    },
    {
      type: 'title',
      text: '路线优化算法是如何工作的？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该工具使用 <strong>OSRM (Open Source Routing Machine)</strong> API，这是一款基于 OpenStreetMap 数据的高性能路由引擎。过程是：首先计算所有点之间的最佳循环路线（TSP 算法），然后确定最佳切入点将其转换为单向线性旅程，最后在地图上绘制出预估总距离的路线。',
    },
    {
      type: 'title',
      text: '应用场景：送货、销售和旅行',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '路线优化器非常适合需要组织日常多次配送的<strong>独立送货司机</strong>、在特定区域拜访客户的<strong>外勤销售代表</strong>，或希望以最高效的顺序访问多个城市或景点的<strong>旅行者</strong>。该工具在浏览器中处理所有信息，不会与任何专有服务器共享您的数据。',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: '算法', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: '路由引擎', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: '隐私', icon: 'mdi:lock-check' },
        { value: '免费', label: '费用', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: '隐私和本地处理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '该工具的所有逻辑都直接在您的浏览器中运行。您的停靠点坐标仅发送到公共 OSRM 和 Nominatim API 以计算路线并获取地址名称，但<strong>不会存储在任何专有服务器上</strong>。您可以放心使用该工具来规划包含敏感信息的业务路线。',
    },
    {
      type: 'tip',
      title: '使用建议',
      html: '<strong>为了获得最佳结果</strong>，请直接在地图上点击添加停靠点，而不是搜索地址。标记是可以拖动的，因此您可以在放置后调整每个点的准确位置。',
    },
  ],
};
