import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: '如果我驾驶没有环保标签的车辆进入西班牙的低排放区 (ZBE) 会怎样？',
    answer: '如果您驾驶没有环保标签且没有特殊豁免的车辆进入西班牙主要城市的低排放区 (ZBE)，您将因严重违章收到罚单，金额通常为 200 欧元。',
  },
  {
    question: '我必须在挡风玻璃上张贴 DGT 实体标签吗？',
    answer: 'DGT（交通总局）建议张贴，但未张贴的罚款由各地方当局制定。在马德里是强制性的，而在其他城市，执法完全依赖于自动车牌识别摄像头。',
  },
  {
    question: '我的柴油车在 2006 年之前注册，但技术规格表上显示为 Euro 4。我可以获得标签吗？',
    answer: '可以。如果交通部门持有的车辆数据仅反映注册日期，您可以向制造商通过官方经销商申请证书，并将其提交给交通部门以更正您的分类。',
  },
  {
    question: '2025 年西班牙汽车的 C 标签（绿色）意味着什么？',
    answer: '在大多数低排放区 (ZBE) 中，您仍然可以自由驾驶，但 C 标签限制了路边停车。您将被要求使用低排放区周边的地下停车场或授权停车场。',
  },
];

const howToData = [
  { name: '选择车辆类型', text: '选择您的车辆是轿车/面包车、摩托车还是重型车辆。根据西班牙交通法规，每个类别有不同的分类逻辑。' },
  { name: '选择燃料或能源类型', text: '电力、插电式混合动力、传统混合动力、天然气、汽油或柴油都会导致不同的标签结果。插电式混合动力的续航里程阈值为 40 公里。' },
  { name: '输入注册年份或 Euro 标准', text: '对于内燃机车辆，Euro 标准是决定性因素。技术规格表上的注册日期可以可靠地近似出相应的标准。' },
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
  name: '如何模拟您车辆的西班牙 DGT 环保标签',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '西班牙 DGT 环保标签模拟器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '根据车辆类型、燃料和注册年份，查询适用于您车辆的西班牙 DGT 环保标签。为西班牙低排放区做准备的免费工具。',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. 车辆类型',
  vehicleCar: '轿车 / 面包车',
  vehicleMoto: '摩托车',
  vehicleHeavy: '卡车 / 巴士',
  errVehicle: '请选择车辆类型',

  step2Label: '2. 燃料或能源',
  fuelElectric: '100% 电动 / 燃料电池',
  fuelPhevHigh: '插电式混合动力 (>40 km)',
  fuelPhevLow: '插电式混合动力 (<40 km)',
  fuelHybridGas: '混合动力 (HEV) 或天然气',
  fuelGasoline: '汽油',
  fuelDiesel: '柴油',
  errFuel: '请选择燃料或能源类型',

  step3Label: '3. Euro 标准或注册年份',
  yearPre2000: '2000 年以前',
  year20002005: '2000 年至 2005 年',
  year20062013: '2006 年至 2013 年',
  yearPost2014: '2014 年或以后',
  errYear: '请选择注册时间',
  helpText: '如有疑问，技术规格表上显示的 Euro 标准优先于注册日期。',

  submitBtn: '检查我的标签',

  resultTitle: '分配的标签',

  badge0Label: '零排放标签',
  badge0Letter: '0',
  badge0Sub: '排放',
  badge0Desc: '最高效率等级的车辆。它们在西班牙低排放区 (ZBE) 享有无限制通行的权利，并拥有广泛的税收减免。',

  badgeEcoLabel: 'ECO 标签',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: '低排放车辆，如混合动力和天然气动力汽车。允许进入大多数低排放区，并在管制停车区享有折扣。',

  badgeCLabel: 'C 标签',
  badgeCLetter: 'C',
  badgeCDesc: '符合高 Euro 标准的近期内燃机车辆。可以自由通行，但在某些低排放区域面临路边停车限制。',

  badgeBLabel: 'B 标签',
  badgeBLetter: 'B',
  badgeBDesc: '较旧的内燃机车辆。在西班牙城市面临更多的进入和停车限制。',

  badgeALabel: '无标签',
  badgeALetter: '无',
  badgeASub: '标签',
  badgeADesc: '由于高污染而不符合标签资格的车辆。它们正逐步从西班牙全境的市中心和低排放区中被排除。',

  warningText: '请务必在 DGT 官方网站上使用您的车牌号进行验证以确认结果，特别是在行政数据不一致的情况下。',
  resetBtn: '重新模拟',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'environmental-badge-simulator-spain',
  title: '西班牙环保标签模拟器',
  description: '免费查询适用于您的轿车、摩托车或面包车的西班牙 DGT 环保标签，以应对西班牙的低排放区 (ZBE)。',
  ui,
  faqTitle: '常见问题',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'DGT 气候变化与交通法规（西班牙语）', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: '西班牙气候变化法与低排放区 (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '什么是西班牙 DGT 环保标签？' },
    {
      type: 'paragraph',
      html: '<strong>西班牙 DGT 环保标签</strong> (distintivo ambiental) 是西班牙引入的一种车辆分类系统，旨在对污染最少的车辆给于优待。它主要用于管制拥有超过 5 万居民的西班牙城市的低排放区 (ZBE) 进入权限。',
    },
    { type: 'title', level: 3, text: '西班牙环保标签类型及其优势' },
    {
      type: 'list',
      items: [
        '<strong>零排放标签：</strong> 适用于纯电动汽车、续航里程超过 40 公里的插电式混合动力汽车以及氢燃料电池汽车。在低排放区无限制通行并免税。',
        '<strong>ECO 标签：</strong> 适用于常规混合动力、液化石油气 (LPG)、天然气 (CNG) 以及续航里程低于 40 公里的插电式混合动力。广泛进入禁区并享有停车折扣。',
        '<strong>C 标签：</strong> 适用于 Euro 4 及以后的汽油车，Euro 6 的柴油车。可以自由通行，但在低排放区附近面临路边停车限制。',
        '<strong>B 标签：</strong> 适用于 Euro 3 汽油车，Euro 4 或 5 柴油车。面临越来越多的限制和偶尔的禁入令。',
        '<strong>无标签（A 类）：</strong> 较旧或污染较重的车辆，自 2024 年起逐步从西班牙市中心排除。',
      ],
    },
    { type: 'title', level: 3, text: '西班牙城市的低排放区' },
    {
      type: 'paragraph',
      html: '低排放区 (ZBE) 的推广遵循西班牙《气候变化法》，该法律要求达到一定人口阈值的市级行政区建立这些区域。著名的例子包括<em>马德里 360 (Madrid 360)</em> 和巴塞罗那的 <em>Superilles</em>，在这些区域，如果没有至少 B 标签，进入可能会导致通过车牌识别摄像头自动开出的罚单。',
    },
    {
      type: 'tip',
      title: '如何在西班牙获取实体贴纸',
      html: '如果模拟器确认您符合标签资格，您可以携带车辆注册文件，在任何 Correos（邮局）网点、授权维修店或交通局以约 5 欧元的价格购买实体贴纸。',
    },
  ],
};
