import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'オンラインのパスワード生成ツールを使っても安全ですか？',
    answer: 'はい、生成処理がクライアントサイドで行われる限り安全です。当ツールは、暗号学的に安全なアルゴリズムを使用して、お使いのブラウザ内でローカルにパスワードを生成します。パスワードがインターネット経由で送信されたり、サーバーに保存されたりすることはありません。',
  },
  {
    question: '何がパスワードを「ハッカーに強い」ものにするのですか？',
    answer: '鍵となるのはエントロピー（不規則性）です。大文字、小文字、数字、特殊記号を組み合わせ、最低12〜16文字の長さにすることで、現在のテクノロジーでは総当たり攻撃（ブルートフォース攻撃）を実質的に不可能にします。',
  },
  {
    question: 'なぜ一般的な単語や日付を避けるべきなのですか？',
    answer: 'ハッカーは、1秒間に数百万もの単語、名前、日付の組み合わせをテストする辞書攻撃を使用します。完全にランダムなパスワードは言語的なパターンに従わないため、はるかに安全です。',
  },
  {
    question: 'すべてのパスワードを暗記すべきですか？',
    answer: '推奨されません。理想的な方法は、パスワードマネージャー（Bitwarden、1Password、またはブラウザ内蔵のものなど）を使用して、これらの長くランダムなパスワードを保存することです。これにより、強力なマスターパスワードを1つだけ覚えておけばよくなります。',
  },
];

const howToData = [
  {
    name: '長さを設定',
    text: 'スライダーを調整して、パスワードの文字数を選択します。現在のセキュリティ基準では、最低12文字以上が推奨されています。',
  },
  {
    name: '複雑さを選択',
    text: 'パスワードを使用するサイトの要件に応じて、大文字、数字、記号の使用オプションにチェックを入れます。',
  },
  {
    name: 'パスワードを生成',
    text: '生成ボタンをクリックします。クリックするたびに、暗号アルゴリズムに基づいた一意で高エントロピーな組み合わせが作成されます。',
  },
  {
    name: 'ワンクリックでコピー',
    text: 'コピーボタンを使用して、パスワードを安全な方法でクリップボードに直接送信します。',
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
  name: '安全なパスワード生成ツールの使い方',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '安全なランダムパスワード生成ツール',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '強力でハッカーに強いパスワードを即座に作成します。ランダムで安全なキーを生成するための無料のサイバーセキュリティツール。',
};

const ui: PasswordGeneratorUI = {
  generating: '生成中...',
  labelSecurity: '強度',
  labelLength: '長さ',
  strengthWeak: '弱い',
  strengthFair: '普通',
  strengthGood: '良好',
  strengthStrong: '強い',
  strengthUnbreakable: '鉄壁',
  optionUppercase: '大文字',
  optionLowercase: '小文字',
  optionNumbers: '数字',
  optionSymbols: '記号',
  copyTitle: 'コピー',
  regenerateTitle: '新規生成',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'password-generator',
  title: '安全なランダムパスワード生成ツール',
  description: '強力でハッカーに強いパスワードを即座に作成します。ランダムで安全なキーを生成するための無料のサイバーセキュリティツール。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'パスワード — Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E3%83%91%E3%82%B9%E3%83%AF%E3%83%BC%E3%83%89' },
    { name: 'Have I Been Pwned — パスワードの漏洩を確認', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '解読不可能なパスワードの構造',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'あなたのパスワードは、個人データ（銀行、医療、写真）とサイバー犯罪者を隔てる唯一の障壁です。しかし、平均的なユーザーはいまだに「123456」やペットの名前など、<strong>1秒未満</strong>で解読可能な予測可能なパターンに依存しています。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'レインボーテーブルの脅威',
          description: 'ハッカーは1回ずつパスワードを推測しているわけではありません。彼らは、一般的なパスワードの数百万もの計算済みハッシュを含む巨大なデータベース（レインボーテーブル）を使用します。もしあなたのパスワードが辞書に載っていたり、有名なフレーズであったりする場合、使い始める前からすでに侵害されていると言えます。',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: '解決策：純粋なエントロピー',
          description: 'エントロピーは無秩序さや予測不能さを測定します。エントロピー（ビット）が高いほど、コンピューターが解読するのに必要な時間は長くなります。このツールは、予測可能な Math.random() とは異なり、暗号学的に安全な乱数を生成するブラウザAPIである crypto.getRandomValues() を使用しています。',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: '基本的なサイバーセキュリティの原則',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: '複雑さより長さ',
          description: '小文字のみの20文字のパスワードは、珍しい記号を含む8文字のパスワードよりも安全です。数学的には、1文字増えるごとに解読の難易度は指数関数的に増大します。',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: '置き換え文字の神話',
          description: '「a」を「@」に、「e」を「3」に置き換える（リートスピーク）手法は、もはや通用しません。現代の攻撃用辞書には、これらのバリエーションが自動的に含まれています。認識可能な単語の使用は避けましょう。',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: '異なるサイトには異なるキー',
          description: 'メールと掲示板で同じパスワードを使用しており、その掲示板がハッキングされた場合、メールも不正利用されることになります。複雑なパスワードを記憶させるために、パスワードマネージャー（Bitwardenや1Passwordなど）を使用しましょう。',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'プライバシーを保証',
      html: 'すべての生成処理は <strong>ブラウザ内</strong> で行われます。インターネット経由でパスワードが送信されたり、サーバーに記録されたりすることはありません。ソースコードは公開されており、検証可能です。',
    },
  ],
};
