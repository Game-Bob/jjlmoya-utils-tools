import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'スペインの低排出ガスゾーン（ZBE）に、ラベルのない車で進入するとどうなりますか？',
    answer: 'スペインの主要都市で、環境ラベルがなく特別な免除もない車両でZBEに進入した場合、重大な違反として罰金が科されます。通常は200ユーロとなります。',
  },
  {
    question: 'DGTの物理的なステッカーをフロントガラスに貼る必要がありますか？',
    answer: 'DGT（交通総局）は掲示を推奨していますが、貼っていない場合の罰金は各自治体によって定められています。マドリードでは義務付けられていますが、他の都市では自動ナンバープレート認識カメラによる監視に完全に依存している場合もあります。',
  },
  {
    question: '所有しているディーゼル車は2006年以前に登録されましたが、技術仕様書にはEuro 4と記載されています。ラベルを取得できますか？',
    answer: 'はい、可能です。交通当局が保持している車両データが登録日のみを反映している場合、正規ディーラーを通じてメーカーから証明書を依頼し、それを交通局に提出して分類を修正することができます。',
  },
  {
    question: '2025年のスペインにおける自動車のCラベル（緑）にはどのような意味がありますか？',
    answer: 'ほとんどのZBEでは引き続き自由に走行できますが、Cラベルは路上駐車を制限します。ZBE周辺の地下駐車場または許可された駐車場を利用する必要があります。',
  },
];

const howToData = [
  { name: '車両タイプを選択', text: '車両が乗用車/バン、バイク、または大型車両のいずれであるかを選択します。スペインの交通規制では、カテゴリーごとに異なる分類ロジックが適用されます。' },
  { name: '燃料またはエネルギータイプを選択', text: '電気、プラグインハイブリッド、従来のハイブリッド、ガス、ガソリン、またはディーゼルのそれぞれで、異なるラベルの結果になります。プラグインハイブリッドの航続距離のしきい値は40kmです。' },
  { name: '登録年またはEuro規格を入力', text: '燃焼機関車の場合、Euro規格が決定的な要因となります。技術仕様書の登録日は、規格の信頼できる近似値となります。' },
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
  name: 'スペインDGT環境ラベルのシミュレーション方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'スペインDGT環境ラベル・シミュレーター',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '車両タイプ、燃料、登録年に基づいて、スペインDGTのどの環境ラベルが適用されるかを確認します。スペインの低排出ガスゾーン対策のための無料ツール。',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. 車両タイプ',
  vehicleCar: '乗用車 / バン',
  vehicleMoto: 'バイク',
  vehicleHeavy: 'トラック / バス',
  errVehicle: '車両タイプを選択してください',

  step2Label: '2. 燃料 or エネルギー',
  fuelElectric: '100% 電気 / 燃料電池',
  fuelPhevHigh: 'プラグインハイブリッド (>40 km)',
  fuelPhevLow: 'プラグインハイブリッド (<40 km)',
  fuelHybridGas: 'ハイブリッド (HEV) or ガス',
  fuelGasoline: 'ガソリン',
  fuelDiesel: 'ディーゼル',
  errFuel: '燃料またはエネルギータイプを選択してください',

  step3Label: '3. Euro規格 or 登録年',
  yearPre2000: '2000年以前',
  year20002005: '2000年〜2005年',
  year20062013: '2006年〜2013年',
  yearPost2014: '2014年以降',
  errYear: '登録時期を選択してください',
  helpText: '不明な場合は、技術仕様書に記載されているEuro規格が登録日よりも優先されます。',

  submitBtn: 'ラベルを確認する',

  resultTitle: '割り当てられたラベル',

  badge0Label: 'ゼロエミッション・ラベル',
  badge0Letter: '0',
  badge0Sub: 'エミッション',
  badge0Desc: '最高効率の車両です。スペインの低排出ガスゾーン（ZBE）への無制限の進入が可能で、大幅な減税措置を受けられます。',

  badgeEcoLabel: 'ECOラベル',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'ハイブリッド車やガス車などの低排出車です。ほとんどのZBEへの進入が可能で、指定駐車ゾーンでの割引が受けられます。',

  badgeCLabel: 'Cラベル',
  badgeCLetter: 'C',
  badgeCDesc: 'Euro規格の高い最新の燃料機関車です。通行は自由ですが、一部のZBEエリアでは路上駐車の制限を尊重する必要があります。',

  badgeBLabel: 'Bラベル',
  badgeBLetter: 'B',
  badgeBDesc: '比較的古い燃料機関車です。スペインの都市部において、進入や駐車に対してより厳しい制限が適用されます。',

  badgeALabel: 'ラベルなし',
  badgeALetter: 'なし',
  badgeASub: 'ラベル',
  badgeADesc: 'ラベル取得の権利がない高汚染車両です。スペイン全土の市街地や低排出ガスゾーンから段階的に除外されています。',

  warningText: '正確な結果を確認するには、必ずDGTの公式サイトでナンバープレートを使用して確認してください。特に行政上の不一致がある場合はご注意ください。',
  resetBtn: '再試行',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'environmental-badge-simulator-spain',
  title: 'スペイン環境ラベル・シミュレーター',
  description: 'スペインの低排出ガスゾーン（ZBE）対策として、乗用車、バイク、バンに適用されるスペインDGT環境ラベルを無料で確認できます。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '気候変動と交通規制に関するDGTの規定（スペイン語）', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'スペイン気候変動法と低排出ガスゾーン (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'スペインDGT環境ラベルとは何ですか？' },
    {
      type: 'paragraph',
      html: '<strong>スペインDGT環境ラベル</strong>（distintivo ambiental）は、汚染の少ない車両を優遇するためにスペインで導入された車両分類システムです。主に、人口5万人以上のスペインの都市における低排出ガスゾーン（ZBE）への進入を管理するために使用されます。',
    },
    { type: 'title', level: 3, text: 'ラベルの種類とスペインでの利点' },
    {
      type: 'list',
      items: [
        '<strong>ゼロエミッション・ラベル：</strong> 純電気自動車、電気航続距離40km以上のプラグインハイブリッド、水素燃料電池車が対象です。ZBEへの無制限進入と免税措置があります。',
        '<strong>ECOラベル：</strong> 従来のハイブリッド、LPG、CNG、および航続距離40km未満のプラグインハイブリッドが対象です。進入制限ゾーンへの幅広いアクセスと駐車料金の割引があります。',
        '<strong>Cラベル：</strong> Euro 4以降のガソリン車、Euro 6のディーゼル車。通行は自由ですが、ZBE近辺での路上駐車制限が適用されます。',
        '<strong>Bラベル：</strong> Euro 3のガソリン車、Euro 4または5のディーゼル車。制限が強化されており、一時的な進入禁止の対象となることがあります。',
        '<strong>ラベルなし（カテゴリーA）：</strong> 古い車両や汚染度の高い車両で、2024年以降、スペインの都市中心部から段階的に除外されています。',
      ],
    },
    { type: 'title', level: 3, text: 'スペイン各都市の低排出ガスゾーン' },
    {
      type: 'paragraph',
      html: 'ZBEの展開はスペイン気候変動法に基づいており、一定の人口しきい値を超える自治体に設置を義務付けています。有名な例として、<em>マドリード 360</em>やバルセロナの<em>Superilles</em>があり、少なくともBラベルなしで進入すると、ナンバープレート認識カメラを通じて自動的に罰金が科される可能性があります。',
    },
    {
      type: 'tip',
      title: 'スペインで物理的なステッカーを取得する方法',
      html: 'シミュレーターでラベルの権利があることが確認されたら、Correos（郵便局）、公認整備工場、または交通局で物理的なステッカーを約5ユーロで購入できます。車両登録書類を持参してください。',
    },
  ],
};
