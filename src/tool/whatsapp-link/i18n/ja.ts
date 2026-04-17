import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'WhatsAppのリンクを作成するにはどうすればよいですか？',
    answer: 'リンクを作成するには、国番号を含む携帯電話番号を入力してください。例えば日本の場合、最初に81を入力し、その後に国内の番号を入力します。オプションでメッセージを追加することもでき、ツールがコピー可能なwa.meリンクを生成します。',
  },
  {
    question: '長い定型文を追加することはできますか？',
    answer: 'はい。誰かがリンクをクリックしたときにチャットボックスに自動的に表示されるメッセージを添付できます。ツールはURLエンコーディングを使用して、URLを壊すことなくスペース、アクセント、絵文字をサポートします。',
  },
  {
    question: '生成されたQRコードはどのように使いますか？',
    answer: '有効なリンクが生成されると、「QRを表示」ボタンが表示されます。QRコードにはリンクのURLが含まれています。右クリックして「名前を付けて画像を保存」を選択すると、名刺、ポスター、ソーシャルメディア用の高解像度ファイルをダウンロードできます。',
  },
  {
    question: '入力したデータはどこに送信されますか？',
    answer: 'このジェネレーターは、すべての処理をブラウザ上のクライアントサイドで行います。電話番号や定型メッセージがサーバーに送信されたり、データベースに保存されたりすることはありません。',
  },
];

const howToData = [
  { name: 'プレフィックスを選択', text: 'ドロップダウンから国番号を選択し、プレフィックスを除いた電話番号を入力します。' },
  { name: 'メッセージを追加（任意）', text: 'リンクを開いて「送信」をタップしたときに表示される定型文を入力します。' },
  { name: 'リンクを生成', text: '緑色のボタンを押して、共有可能な wa.me 直通URLを取得します。' },
  { name: 'QRを共有または印刷', text: 'リンクをコピー、チャットをテスト、または名刺や印刷用のQRコードをダウンロードします。' },
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
  name: 'WhatsApp直通リンクの作成方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsAppリンクジェネレーター',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: '定型メッセージとQRコード付きのWhatsApp直通チャットリンクを作成します。無料ツール、登録不要、100%プライベート。',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp電話番号',
  phonePlaceholder: '090 0000 0000',
  messageLabel: '開始メッセージ（任意）',
  messagePlaceholder: 'こんにちは！サービスについて詳細を教えてください...',
  generateBtn: 'リンクを作成',
  resultLabel: '直通リンクが生成されました',
  copyTitle: 'クリップボードにコピー',
  copyDone: 'コピーしました！',
  testBtn: 'チャットをテスト',
  qrShow: 'QRを表示',
  qrHide: 'QRを隠す',
  errorPhone: '有効な電話番号を入力してください。',
  defaultPrefix: '81',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-link-generator',
  title: 'QRコード付きWhatsAppリンク作成ツール',
  description: '定型メッセージとQRコード付きのWhatsApp直通チャットリンクを作成します。無料ツール、登録不要、100%プライベート。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: '「クリックしてチャット」機能の使い方 — WhatsAppヘルプセンター', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API クリックしてチャット：パラメータと形式 — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'WhatsApp用の短い直通リンクを生成' },
    {
      type: 'paragraph',
      html: '顧客やフォロワーが、あなたの番号を保存する手間を省いてWhatsAppで連絡できるようにしたいですか？当社の<strong>wa.meリンク作成ツール</strong>は、事前の手順なしで即座に直通チャットを開くリンクを生成することで、この問題を解決します。',
    },
    { type: 'title', level: 3, text: 'wa.me WhatsApp短縮URLの利点は？' },
    {
      type: 'paragraph',
      html: 'WhatsAppは「クリックしてチャット」というAPIを提供しています。特別なURLを使用することで、モバイルとWhatsApp Webの両方から、連絡先として追加することなく誰でもあなたと新しいチャットを開始できます。',
    },
    {
      type: 'list',
      items: [
        '<strong>コンバージョンの向上：</strong>ショップに「WhatsAppで連絡」ボタンを設置することで、ハードルを下げ、売上を向上させます。',
        '<strong>定型メッセージ：</strong>ユーザーは「送信」を押すだけです。例：「こんにちは！Instagramを見て連絡しました。特典を受け取りたいです。」',
        '<strong>自動QRコード：</strong>名刺、ポスター、またはSNS投稿用にQRをダウンロードできます。',
      ],
    },
    { type: 'title', level: 3, text: 'リンク生成の仕組み' },
    {
      type: 'paragraph',
      html: 'このツールは、国際プレフィックスと整形された電話番号を連結し、<em>URLエンコーディング</em>されたメッセージパラメータとともに公式のWhatsApp APIに追加します。',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL形式',
      code: 'https://wa.me/81XXXXXXXXX\nhttps://wa.me/81XXXXXXXXX?text=%C2%A1Kon\'nichiwa!%20...',
    },
    { type: 'title', level: 3, text: 'プライバシー保証とローカル処理' },
    {
      type: 'paragraph',
      html: 'リンクの構築はすべてJavaScriptを介してブラウザ内で行われます。入力された電話番号やメッセージを記録、保存、または読み取るサーバーはありません。プライバシーは完全に保護されています。',
    },
    {
      type: 'tip',
      title: '国際プレフィックスの重要性',
      html: 'WhatsAppがメッセージを正しく配信するには、国番号が不可欠です。日本では<strong>81</strong>であり、その後にスペースや+記号を入れずに携帯電話番号を続けます。最終的な結果は、例として <code>8190XXXXXXXX</code> のようになります。',
    },
  ],
};
