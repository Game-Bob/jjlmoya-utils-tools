import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Googleドライブ・ダウンロード・コンバーターの使い方は？',
    answer: 'Googleドライブに保存されているファイルの「共有」リンクをコピーします（一般公開の権限が必要です）。それをツールのテキストボックスに貼り付け、「直通リンクを生成」をクリックします。Googleのプレビュー画面を開かずにダウンロードを開始する新しいURLが表示されます。',
  },
  {
    question: '非公開ファイルの直通ダウンロードリンクを作成できますか？',
    answer: 'ファイルが非公開またはアクセスが制限されている場合、Googleから権限のあるアカウントでのログインを求められます。登録不要でスムーズにダウンロードするには、ファイルの権限を「リンクを知っている全員が閲覧可」に設定する必要があります。',
  },
  {
    question: 'ここでドライブのリンクを変換しても安全ですか？',
    answer: 'はい。変換は100%ブラウザ内で行われ、完全に匿名です。ツールはリンクを保存したりサーバーに送信したりしません。ダウンロード用URLを作成するために、クライアントサイドでURL構造を解析するだけです。',
  },
  {
    question: 'ドライブのファイル容量が大きい場合はどうなりますか？',
    answer: '約100MBを超えるファイルの場合、Googleドライブは即時の直通ダウンロードを許可しません。代わりに、ファイルサイズとウイルススキャン実行の警告ページが表示されます。これはGoogleサーバーの固定ポリシーであり、外部ツールで回避することはできません。',
  },
];

const howToData = [
  { name: '共有リンクをコピー', text: 'Googleドライブでファイルを右クリックし、「リンクをコピー」を選択します。権限が「リンクを知っている全員」に設定されていることを確認してください。' },
  { name: 'ジェネレーターにリンクを貼り付け', text: 'ツールのテキストフィールドにドライブのURLを入力し、「直通リンクを生成」ボタンをクリックします。' },
  { name: '生成されたリンクをコピーして使用', text: '新しい直通ダウンロードリンクをコピーし、メール、Webサイト、ニュースレター、またはクリック時に即座にダウンロードを必要とする場所で使用します。' },
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
  name: 'Googleドライブの直通ダウンロードリンクを生成する方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Googleドライブ直通ダウンロードリンク・ジェネレーター',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: 'Googleドライブの共有リンクをワンクリックで直通ダウンロードリンクに変換し、プレビューページをスキップします。無料ツール。',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Googleドライブのリンクをここに貼り付けてください：',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: '直通リンクを生成',
  resultLabel: '直通ダウンロードリンク：',
  copyTitle: 'クリップボードにコピー',
  copyDone: 'コピーしました',
  testBtn: 'ダウンロードをテスト',
  errorMsg: '入力されたリンクは有効なGoogleドライブのリンクではないようです。',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-direct-download-link',
  title: 'Googleドライブ直通ダウンロードリンク・ジェネレーター',
  description: 'Googleドライブの共有リンクをワンクリックで直通ダウンロードリンクに変換し、プレビューをスキップします。無料ツール。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Googleドライブからファイルをダウンロードする（Google Workspace）', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: ファイルをダウンロードする', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Googleドライブの共有リンクを直通ダウンロードリンクに変換' },
    {
      type: 'paragraph',
      html: 'Googleドライブを介して頻繁にファイルを共有しているなら、プレビュー画面がいかに煩わしいかをご存じでしょう。ユーザーがリンクをクリックすると、ダウンロードボタンを探させるための中間画面が表示されます。当社の<strong>Googleドライブ直通ダウンロードリンク・ジェネレーター</strong>は、共有リンクを自動的にダウンロードが開始されるリンクに変換することで、この問題を解決します。',
    },
    { type: 'title', level: 3, text: 'なぜ直通ダウンロードリンクを使うのですか？' },
    {
      type: 'paragraph',
      html: '主な利点は、ユーザーエクスペリエンスが大幅に向上することです。PDF、画像、またはソフトウェアインストーラーを共有する場合、ユーザーはリンクをクリックした直後にダウンロードが開始されることを期待しています。',
    },
    {
      type: 'list',
      items: [
        '<strong>時間の節約：</strong>余計なステップなしでワンクリックダウンロード。',
        '<strong>プロフェッショナルな外観：</strong>Webサイトのダウンロードボタン、ニュースレター、またはクライアントへのメールに最適です。',
        '<strong>離脱率の低下：</strong>ITに詳しくないユーザーにとって、ドライブのプレビュー画面は混乱を招き、ダウンロード方法がわからない場合があります。',
        '<strong>HTML対応：</strong>Webページの <code>href</code> や <code>src</code> 属性にそのまま使えます。',
      ],
    },
    { type: 'title', level: 3, text: '直通リンク・ジェネレーターの仕組みは？' },
    {
      type: 'paragraph',
      html: 'すべての処理は100%ブラウザ内で行われます。Googleドライブの共有リンクには一意のファイルIDが含まれています。ツールはこのIDを抽出し、Google独自の書き出しパラメータを使用して新しいURLを構築します：<code>https://drive.google.com/uc?export=download&amp;id=あなたのファイルID</code>',
    },
    {
      type: 'tip',
      title: '大容量ファイルに関する注意',
      html: '約100MBを超えるファイルの場合、ダウンロード開始前にGoogleドライブによってウイルススキャンの警告ページが表示されます。これはGoogleサーバーの固定ポリシーであり、外部ツールで回避することはできません。',
    },
    { type: 'title', level: 3, text: 'プライバシーとセキュリティの保証' },
    {
      type: 'paragraph',
      html: 'このツールはユーザーのプライバシーを完全に尊重します。リンクの変換はすべて、ご自身のデバイス上のクライアントサイドJavaScriptを介して実行されます。リンク、ファイルID、または個人情報が外部サーバーに送信されることはありません。',
    },
  ],
};
