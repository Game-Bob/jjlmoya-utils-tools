import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'このツールはどのようにSEOランキングに役立ちますか？',
    answer: 'キーワード密度と文章の読みやすさを分析することで、コンテンツがユーザーにとって理解しやすく、検索エンジンにとって関連性が高いことを確認でき、過剰な最適化によるペナルティを回避できます。',
  },
  {
    question: 'テクニカル分析ではどのHTML要素をチェックしますか？',
    answer: 'H1タグの存在と一意性、H2/H3見出しの有無、画像のalt属性の有無を確認します。',
  },
  {
    question: 'コンテンツはサーバーに保存されますか？',
    answer: 'いいえ。分析は100%ブラウザ内でローカルに実行されます。コンテンツがコンピュータの外に送信されることはありません。',
  },
  {
    question: 'Yoast SEOの基準と互換性はありますか？',
    answer: 'はい、文章の長さ、段落の配分、見出しの階層など、Yoastと同様の基準を導入しています。',
  },
];

const howToData = [
  { name: 'テキストを入力または貼り付け', text: '分析したいコンテンツをメインのテキストエリアに入力します。' },
  { name: '最適化チェックリストを確認', text: 'サイドパネルで、長さ、読みやすさ、キーワード密度の警告を確認します。' },
  { name: 'テクニカルHTMLを分析', text: 'テクニカル分析タブに切り替えて、H1タグ、画像のalt、メタデータの構造を確認します。' },
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
  name: 'SEOのためにコンテンツを最適化する方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEOコンテンツ最適化ツール',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'テキストのキーワード密度、読みやすさ、テクニカルHTML構造をリアルタイムで分析します。データはサーバーに送信されません。',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'テキスト分析',
  tabHtml: 'テクニカルHTML分析',
  textareaPlaceholder: 'テキストを入力するか、HTMLコードをここに貼り付けてください...',
  statsChars: '文字数',
  statsWords: '単語数',
  statsReading: '読了時間',
  statsSentences: '文章数',
  checklistTitle: '最適化チェックリスト',
  keywordsTitle: 'キーワード密度',
  technicalTitle: 'テクニカルHTML分析',
  h1Label: 'H1検出',
  linksLabel: 'リンク (a)',
  imgsLabel: '画像 (img)',
  altsLabel: 'alt欠損',
  emptyState: 'データなし',
  analyzing: '分析中...',
  checkInsufficient: '長さが不足しています（300単語未満）',
  checkPillar: '優れたピラーコンテンツです（900単語超）',
  checkGoodLength: 'SEOに適した長さです',
  checkLongSentences: '長い文章が多すぎます（全体の25%超）',
  checkGoodReadability: '文章の読みやすさは最適です',
  checkLongParagraphs: '非常に長い段落（150単語超）を分割してください',
  checkMissingH1: 'H1タグがありません',
  checkMultipleH1: '複数のH1タグが検出されました',
  checkMissingH2: '小見出し（H2）がありません',
  checkMissingTitle: 'メタtitleタグがありません',
  stopWords: JSON.stringify(['の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し', 'れ', 'さ', 'ある', 'いる', 'も', 'する', 'から', 'な', 'こと', 'として', 'い', 'や', 'れる', 'など', 'なっ', 'な', 'もの', 'だ', 'よう', 'なり', 'れる', 'ので', 'ため', 'において', 'この', 'その', 'あの', 'どの']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-content-optimizer',
  title: 'SEOコンテンツ最適化ツール',
  description: 'テキストのキーワード密度、読みやすさ、テクニカルHTML構造をリアルタイムで分析します。サーバーにデータを送信しない、無料でプライバシーに配慮したSEOツールです。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Google SEOスターターガイド', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ja' },
    { name: 'Yoast SEOの読みやすさ基準', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEOコンテンツ最適化：キーワード、読みやすさ、階層構造' },
    {
      type: 'paragraph',
      html: 'コンテンツのプロンプト質は、もはやキーワードが含まれているかどうかだけでなく、人間とGoogleのクローラーの両方にとって理解しやすいように情報が構造化されているかによって測定されます。当社の<strong>リアルタイムSEO分析ツール</strong>を使用すると、キーワード密度、段落の読みやすさ、および基本的なHTMLの技術的要素を完全にコントロールできます。',
    },
    { type: 'title', level: 3, text: 'キーワード密度と意味的な関連性' },
    {
      type: 'paragraph',
      html: '<strong>キーワード密度</strong>は、テキスト全体と比較して特定の用語がどれくらいの頻度で表示されるかを示します。過度な繰り返しは<em>キーワードスタッフィング</em>（キーワードの詰め込み）フィルターを作動させますが、密度が極端に低いと、検索エンジンが記事の中心的なトピックを特定するのが難しくなる可能性があります。',
    },
    {
      type: 'list',
      items: [
        '<strong>関連性分析：</strong> 最も繰り返されている単語が検索意図と一致しているかどうかを確認します。',
        '<strong>ペナルティ回避：</strong> スパムのように見える、用語の過剰な繰り返しを避けます。',
        '<strong>セマンティック最適化：</strong> 専門用語と自然な言語のバランスを見つけます。',
      ],
    },
    { type: 'title', level: 3, text: '読みやすさの分析' },
    {
      type: 'paragraph',
      html: '読みやすさは、間接的ですが重要なランキング要因です。段落がいつまでも続くテキストブロックであるためにユーザーが離脱すると、<em>滞在時間</em>が短くなります。アナライザーは、長い文章（英単語換算で20語相当以上）や非常に長い段落を検出し、小見出しの有無をチェックします。',
    },
    {
      type: 'tip',
      title: '読了時間',
      html: 'ほとんどのユーザーは、記事を読むかどうかを10秒以内に判断します。推定読了時間（平均読書速度から算出）を知ることで、読者の期待値を設定し、直帰率を減らすことができます。',
    },
    { type: 'title', level: 3, text: 'テクニカルHTML分析' },
    {
      type: 'paragraph',
      html: 'ソースコードを貼り付けて、主要な要素を確認します： <strong>H1</strong>タグの一意性、H2/H3見出しの有無、<code>alt</code>属性のない画像、および<code>title</code>タグの有無。すべての処理はブラウザ内で行われ、サーバーにデータが送信されることはありません。',
    },
  ],
};
