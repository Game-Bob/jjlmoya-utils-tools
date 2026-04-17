import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'このメールリスト・クリーナーは具体的に何をしますか？',
    answer: 'このツールはメールリストを分析し、重複の削除、不要な空白の除去、基本的な形式の検証を行い、すべてのメールアドレスを小文字に正規化して、クリーンなデータベースを確保します。',
  },
  {
    question: 'メールアドレスの数に制限はありますか？',
    answer: '厳密な件数制限はありません。一度に何千ものメールアドレスを瞬時に処理できます。唯一の制約は、リストが非常に大きい場合のブラウザのメモリ容量です。',
  },
  {
    question: 'ここにメールアドレスを貼り付けても安全ですか？',
    answer: 'はい、完全に安全です。すべての処理は JavaScript を介してブラウザ内でローカルに行われます。データが当社のサーバーに送信されたり、外部のデータベースに保存されたりすることはありません。',
  },
  {
    question: 'これによってキャンペーンの到達率はどのように向上しますか？',
    answer: '存在しないアドレスや形式の誤ったアドレスを削除することで、バウンス率が低下し、Gmail、Outlook、Yahoo などのプロバイダーにおけるドメインの評価が向上します。',
  },
];

const howToData = [
  { name: 'メールアドレスを貼り付ける', text: 'メールリストをコピーしてテキストボックスに貼り付けます。改行、カンマ、またはスペースで区切ることができます。' },
  { name: 'リストをクリーニングする', text: '「リストをクリーニング」ボタンをクリックして、検証と重複削除のプロセスを開始します。' },
  { name: '結果を確認する', text: '元の件数と最終件数を示す統計を確認し、下のパネルでクリーニング済みのリストを確認します。' },
  { name: 'コピーまたはダウンロード', text: '結果を直接クリップボードにコピーするか、すぐに使用できる .txt ファイルとしてダウンロードします。' },
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
  name: 'メールリストをクリーニングする方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'メールリスト・クリーナー',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'メールリストから重複を削除し、空白を修正し、形式を検証します。件数制限なしの無料ツール。',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'メールリスト',
  inputPlaceholder: 'メールリストをここに貼り付けてください（改行、カンマ、またはスペース区切り）...',
  cleanBtn: 'リストをクリーニング',
  clearBtn: 'すべてクリア',
  statsOriginal: '元データ',
  statsRemoved: '削除済み',
  statsFinal: 'クリーニング後',
  resultLabel: '結果',
  copyBtn: 'リストをコピー',
  copyDone: 'コピーしました！',
  downloadBtn: '.txt をダウンロード',
  registered: '件の登録',
  downloadFilename: 'clean-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-list-cleaner',
  title: 'メールリスト・クリーナー',
  description: 'メールリストを無料でクリーニング。重複の削除、空白の修正、形式の検証を数秒で行います。コストを削減し、到達率を向上させます。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: メール送信者のガイドライン', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: メールスパム', url: 'https://ja.wikipedia.org/wiki/電子メールスパム' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'メールリスト・クリーナーの使用が不可欠な理由は？' },
    {
      type: 'paragraph',
      html: 'デジタルマーケティングの世界では、データベースの質はその規模よりもはるかに重要です。5万件のメールリストを持っていても、その半分が存在しないアドレスだったり、誤字があったり、重複していたりすれば意味がありません。ここで、<strong>メールリスト・クリーナー</strong>が不可欠になります。',
    },
    { type: 'title', level: 3, text: '「汚れた」メールリストのリスク' },
    {
      type: 'paragraph',
      html: 'クリーニングされていないデータベースを維持すると、深刻な結果を招く可能性があります。存在しないアドレスにメールを送信すると「ハードバウンス」が発生します。この割合が 2〜3% を超えると、スパムフィルターがドメインを精査し始め、国際的なブラックリストに載る可能性があります。',
    },
    {
      type: 'tip',
      title: 'エキスパートのアドバイス',
      html: 'メールリストを絶対に購入しないでください。それはドメインの評価を台無しにする最短の道です。独自のリストをオーガニックに構築し、3〜6ヶ月ごとにクリーニングしてください。',
    },
    { type: 'title', level: 3, text: '当ツールがデータベースを最適化する方法' },
    {
      type: 'paragraph',
      html: '当社の無料ユーティリティは、件数制限なしでデータベースの徹底的かつ迅速なクリーンアップを行います。いくつかの重要な検証タスクを瞬時に実行します。',
    },
    {
      type: 'list',
      items: [
        '<strong>重複削除：</strong> 同じユーザーに同じメールが2回届くのを防ぎます。',
        '<strong>空白修正：</strong> 送信を無効にする、最初や最後にある偶発的なスペースを除去します。',
        '<strong>形式検証：</strong> 有効なメール構造を持たないエントリをフィルタリングします。',
        '<strong>正規化：</strong> 冗長なレコードを避けるために、すべてを小文字に変換します。',
      ],
    },
    { type: 'title', level: 3, text: 'リストをクリーニングするタイミングは？' },
    {
      type: 'list',
      items: [
        '連絡先を新しい CRM や配信プラットフォーム（Mailchimp、SendGrid など）にインポートする前。',
        '開封率が通常の平均を下回っていることに気づいたとき。',
        '手動でデータを収集したイベントや展示会の後。',
        'ドメインの健全性を維持するための、毎四半期の予防メンテナンスとして。',
      ],
    },
    { type: 'title', level: 3, text: '投資収益率（ROI）への影響' },
    {
      type: 'paragraph',
      html: 'メールマーケティングは依然として最も ROI の高いチャネルの1つですが、それはメッセージが受信トレイに届く場合に限られます。<strong>メールクリーナー</strong>を使用することで、ソースから販売フェネルを最適化し、メッセージを二度と見ることのない連絡先に対してプラットフォームに料金を支払うのを止めることができます。',
    },
    {
      type: 'tip',
      title: 'ダブルオプトインの導入',
      html: '偽のメールを避ける最善の方法は、受信トレイに送信されたリンクをクリックして購読を確認するようユーザーに求めることです。これにより、メールアドレスが存在し、ユーザーがそれにアクセスできることが保証されます。',
    },
  ],
};
