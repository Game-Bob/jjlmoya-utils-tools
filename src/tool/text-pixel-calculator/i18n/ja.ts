import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'オンラインでテキストのピクセル幅を計算するにはどうすればよいですか？',
    answer: '入力ボックスにテキストを貼り付け、フォントとサイズを設定してください。ツールがブラウザのCanvas APIを自動的に使用して、正確なピクセル幅を返します。',
  },
  {
    question: 'なぜ書体によってピクセル幅が異なるのですか？',
    answer: 'ほとんどのフォントは「プロポーショナルフォント」であり、各文字が異なる幅を持っています。例えば、標準的なサンセリフ体では、大文字の「M」は常に小文字の「i」よりも幅が広くなります。',
  },
  {
    question: '文字数を測るのとピクセルを測るのは同じですか？',
    answer: 'いいえ。文字数を測ると文字列の長さがわかりますが、ピクセルを測るとそれが占める視覚的なスペースがわかります。これは、Webデザインでテキストがコンテナからはみ出さないようにするために非常に重要です。',
  },
  {
    question: 'Google Fontsの書体はどれでも使えますか？',
    answer: 'はい。フォントがOSにインストールされているか、現在のページに読み込まれている限り、ツールはその寸法を正確に測定します。',
  },
  {
    question: 'プライベートなテキストやコードスニペットを処理しても安全ですか？',
    answer: 'はい。この計算機は完全にローカルで動作します。外部サーバーにデータが送信されることはないため、プロジェクトの完全なプライバシーが保証されます。',
  },
];

const howToData = [
  { name: 'テキストを入力', text: '測定したいテキストを入力エリアに入力または貼り付けます。' },
  { name: 'フォントを設定', text: 'フォントファミリー、ピクセル単位のサイズ、太さ、斜体かどうかを設定します。' },
  { name: '結果を確認', text: 'ピクセル幅と文字数がリアルタイムで更新されます。' },
  { name: '値をコピー', text: '「幅をコピー」をクリックして、ピクセル値をクリップボードに保存します。' },
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
  name: 'テキストのピクセル幅を測定する方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'テキストピクセル幅計算機',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'フォント、サイズ、スタイルに基づいて、あらゆるテキストのピクセル幅を正確に計算します。',
};

const ui: TextPixelCalculatorUI = {
  textLabel: '測定するテキスト',
  textPlaceholder: '測定したいテキストをここに入力または貼り付け...',
  defaultText: 'こんにちは世界',
  fontLabel: 'フォントファミリー',
  sizeLabel: 'サイズ (px)',
  weightLabel: '太さ',
  italicLabel: '斜体',
  widthLabel: '幅 (ピクセル)',
  charsLabel: '文字数',
  previewLabel: '視覚プレビュー',
  copyBtn: '幅をコピー',
  resetBtn: 'リセット',
  copyDone: '幅をコピーしました',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-width-calculator',
  title: 'テキストピクセル幅計算機',
  description: 'フォント、サイズ、スタイルに基づいて、テキストがピクセル単位でどれくらいの幅になるかを正確に計算します。デザイナーや開発者のための無料ツールです。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: 可変フォントについて', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'あらゆるテキストの正確なピクセル幅を測定' },
    {
      type: 'paragraph',
      html: 'テキストがコンテナからはみ出していませんか？レンダリング前に見出しがどれくらいのスペースを占めるか知る必要がありますか？<strong>ブラウザのCanvas API</strong>を使用すると、DOMにレンダリングすることなく、ピクセル精度でテキスト文字列の正確な幅を測定できます。',
    },
    { type: 'title', level: 3, text: 'なぜ文字数カウントだけでは不十分なのか' },
    {
      type: 'paragraph',
      html: '現代の書体は固定幅ではなく<strong>プロポーショナル（比例）</strong>です。各文字は異なる幅を持っています。「W」は「i」の3倍以上のスペースを占めることがあります。文字数だけでは、テキストが実際に占める視覚的なスペースについては何もわかりません。',
    },
    {
      type: 'list',
      items: [
        '<strong>Webデザイン：</strong>ボタン、ラベル、表のセルでのオーバーフローを防ぎます。',
        '<strong>SEO：</strong>検索エンジンはタイトルを文字数ではなくピクセル単位で切り捨てます。',
        '<strong>CanvasとPDF：</strong>プログラムでテキストを描画する前に正確な位置を計算します。',
        '<strong>ツールチップと吹き出し：</strong>内部テキストに基づいてコンテナのサイズを動的に変更します。',
      ],
    },
    { type: 'title', level: 3, text: 'Canvasによる測定の仕組み' },
    {
      type: 'paragraph',
      html: 'Canvas APIの<code>ctx.measureText()</code>メソッドは、現在アクティブなフォントを使用したCSSピクセル幅を反映する<code>width</code>プロパティを持つ<code>TextMetrics</code>オブジェクトを返します。このツールは、測定前にフォント、サイズ、太さ、スタイルを使用してコンテキストを設定します。',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText の例',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('こんにちは世界').width; // 例: 74.5",
    },
    { type: 'title', level: 3, text: 'プライバシーとローカル処理' },
    {
      type: 'paragraph',
      html: 'すべての計算はブラウザ内で行われます。テキスト、コードスニペット、個人データがデバイスから送信されることはありません。',
    },
    {
      type: 'tip',
      title: 'Google Fontsの書体',
      html: 'Google Fontsの書体を正確に測定するには、まずそのフォントがページに読み込まれているか、システムにインストールされていることを確認してください。そうでない場合、ブラウザは代替フォントを使用するため、結果が異なります。',
    },
  ],
};
