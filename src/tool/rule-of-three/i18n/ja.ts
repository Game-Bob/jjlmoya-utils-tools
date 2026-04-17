import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: '「単比例の三数法」とは何ですか？',
    answer: '3つの既知の値から1つの未知の値を求めるための比例計算の手法です。一方が増えるともう一方も同じ比率で増えるため、「正比例（直接）」と呼ばれます。',
  },
  {
    question: '反比例の三数法はいつ使うべきですか？',
    answer: '一方が増えるともう一方が減るという「反比例」の関係にある場合です。例えば、2人の作業員で5時間かかる仕事は、4人の作業員ならもっと短い時間で終わります。現在の計算機は正比例に特化しています。',
  },
  {
    question: 'プロの計算にも使用できますか？',
    answer: 'はい。当計算機は高精度の浮動小数点計算を使用しており、薬剤の用量調節、グラフィックデザインの縮尺、営業予算、料理レシピの換算などに最適です。',
  },
  {
    question: '手動で計算するにはどうすればよいですか？',
    answer: '公式は (Bの値 × Cの値) ÷ Aの値 = X です。つまり、対角線上の値を掛け合わせ、残りの値で割ります。',
  },
];

const howToData = [
  {
    name: '基準となる関係を特定',
    text: '最初の比率となる2つの既知の値を入力します（例：100kmが8リットルに相当する場合）。',
  },
  {
    name: '3つ目の値を入力',
    text: '求めたい新しい方の値を入力します（例：250km走行する場合...）。',
  },
  {
    name: '結果を表示',
    text: 'ボタンを押す必要はなく、リアルタイムで未知の値（X）が自動的に計算されます。',
  },
  {
    name: 'コピーまたはリセット',
    text: '結果を直接クリップボードにコピーしたり、入力欄をクリアして新しい計算を行ったりできます。',
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
  name: '比例計算機（三数法）の使い方',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '比例計算機（三数法）',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '数学的な比例計算を瞬時に解決します。数量、レシピ、割引、換算を計算するための決定版ツール。',
};

const ui: RuleOfThreeUI = {
  labelA: 'もし...',
  labelB: 'が...なら',
  labelC: 'では...',
  labelX: '結果 (X)',
  hintA: '元の数量',
  hintB: '既知の値',
  hintC: '新しい数量',
  hintX: '計算された値',
  separatorIsTo: '：',
  separatorWillBe: '＝',
  copyTitle: '結果をコピー',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'rule-of-three-calculator',
  title: '比例計算機（三数法）',
  description: '数学的な比例計算を瞬時に解決します。数量、レシピ、割引、換算を計算するための決定版ツール。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '比例 — Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E6%AF%94%E4%BE%8B' },
    { name: '比と比例 — Khan Academy', url: 'https://ja.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '比例計算（三数法）は何に使われますか？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '三数法による比例計算は、数学における「十徳ナイフ」のようなものです。3つのデータがわかっていて、4つ目を求めるあらゆる問題を解決します。<strong>A と B</strong> の関係がわかっていて、新しい値 <strong>C</strong> がある場合、この計算機は即座に <strong>X</strong> を導き出します。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: '料理とレシピ',
          description: '4人分で小麦粉500gが必要なレシピの場合、7人分なら何グラム必要でしょうか？',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: '買い物と価格',
          description: '3缶セットで250円の場合、10缶買うといくらになりますか？',
          points: ['(250 × 10) ÷ 3 = 833.33円'],
        },
        {
          icon: 'mdi:car',
          title: '旅行と距離',
          description: '60km進むのに45分かかる場合、140km進むには何分かかるでしょうか？',
          points: ['(45 × 140) ÷ 60 = 105分'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'デザインと画面',
          description: '幅1920pxの画像を、比率を維持したまま幅800pxに縮小したい場合...',
          points: ['(元の高さ × 800) ÷ 1920 = 新しい高さ'],
        },
      ],
    },
    {
      type: 'title',
      text: '公式の仕組み',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '公式は常に同じです：<strong>対角線上の値を掛け、残りの値で割る</strong>だけです。',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: '三数法の計算公式',
    },
    {
      type: 'paragraph',
      html: '計算機上では：値 <strong>B</strong> と値 <strong>C</strong> を掛け、<strong>A</strong> で割ります。その結果が <strong>X</strong> です。',
    },
    {
      type: 'title',
      text: 'プロの現場や日常での活用',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '学校の数学だけでなく、比例計算はいたるところで使われています。薬局での体重別投与量の計算、写真撮影時の露出時間の計算、金融での騰落率の計算、印刷でのフォーマット寸法のスケーリングなどです。',
    },
    {
      type: 'tip',
      title: '精度のヒント',
      html: '結果は最大で小数点第4位まで表示されます。お金や正確な寸法を扱う場合は、文脈に応じて、円なら整数、ピクセルなら整数といったように、適切に四捨五入してください。',
    },
  ],
};
