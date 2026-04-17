import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'モールス信号におけるSOS救難信号とは何ですか？',
    answer: "信号は '... --- ...' （短点3つ、長点3つ、短点3つ）です。緊急事態であることを示すため、文字の間にスペースを空けずに連続して送信されます。",
  },
  {
    question: 'ブラウザでフラッシュライトが機能しないのはなぜですか？',
    answer: 'フラッシュライトを有効にするには、ブラウザのカメラ権限が必要です。一部のモバイルブラウザや古いデスクトップ版では、プライバシー上の理由からこのAPIをサポートしていません。',
  },
  {
    question: '画面によるSOS信号は視認可能ですか？',
    answer: 'はい、完全な暗闇の中では、モールス信号で点滅する白い画面の最大輝度は数百メートル先からでも視認でき、フラッシュライトが故障した場合の有効な代替手段となります。',
  },
  {
    question: '国際モールス符号とは何ですか？',
    answer: '短点（ドット）と長点（ダッシュ）の信号の組み合わせを使用して文字や数字を表す通信システムであり、無線通信や光信号のためにITUによって標準化されています。',
  },
];

const howToData = [
  {
    name: 'メッセージを入力',
    text: "送信したいテキストを入力するか、緊急用の設定済み 'SOS' ボタンを使用します。",
  },
  {
    name: '速度を調整',
    text: '視認性に応じて信号を速く、あるいは遅くするためにWPM（語数/分）を調整します。',
  },
  {
    name: '光源を選択',
    text: 'より強力な信号を送信するために、全画面表示の点滅を有効にするか、カメラのフラッシュライトへのアクセスを許可します。',
  },
  {
    name: '送信開始',
    text: '「送信」を押すと、システムがテキストをモールス標準に従った自動的な光パルスに変換します。',
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
  name: 'メッセージを送信するためのモールス信号送信機の使い方',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'モールス・ビーコン：タクティカルSOS送信機',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'デバイスをモールス信号送信ステーションに変えます。フラッシュと画面を緊急光信号やタクティカル通信として使用できます。',
};

const ui: MorseBeaconUI = {
  labelMessage: '送信するメッセージ',
  placeholder: 'メッセージを入力してください (SOS, HELLO, HELP)...',
  btnTransmit: '送信',
  btnSosLoop: 'SOSループ',
  btnStop: '停止',
  labelTorch: 'フラッシュ/ライト',
  statusStandby: '待機中',
  statusTransmitting: '送信中',
  statusStopping: '停止中...',
  statusWaiting: '待機中',
  statusReady: 'ハードウェア準備完了',
  statusNoTorch: 'ライトなし',
  statusNoPermission: '権限なし',
  statusNotSupported: '非対応',
  statusReqHttps: 'HTTPSが必要',
  statusSending: '送信内容:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morse-beacon',
  title: 'モールス・ビーコン：タクティカルSOS送信機',
  description: 'デバイスをモールス信号送信ステーションに変えます。フラッシュと画面を緊急光信号やタクティカル通信として使用できます。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'ITU-R M.1677-1 — 国際モールス符号', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'モールス符号 — Wikipedia', url: 'https://ja.wikipedia.org/wiki/%E3%83%A2%E3%83%BC%E3%83%AB%E3%82%B9%E7%AC%A6%E5%8F%B7' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '光の言語',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールは、数キロメートル先からでも視認可能なメッセージを送信できる光学信号送信機にデバイスを変換します。国際モールス符号標準を使用し、光パルス（フラッシュライトと画面）を介した無音または緊急通信を可能にします。',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: '世界共通の標準',
          description: '1830年にサミュエル・モールスによって開発された、点と線のバイナリシステムは、電気通信に革命をもたらしました。そのシンプルさゆえに極めて堅牢であり、音、無線、電気、光を通じて送信でき、深刻な干渉下でも読み取りが可能です。',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS緊急モード',
          description: "「SOSループ」ボタンは、··· --- ··· のシーケンスを継続的に送信します。この信号は世界共通の救難信号として認識されており、LEDフラッシュライトの高いコントラストにより、特定の条件下では日中でも遠くから視認できます。",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1標準',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールは、国際電気通信連合によって定義された国際モールス符号の<strong>規定タイミング</strong>を厳格に遵守しています。',
    },
    {
      type: 'list',
      items: [
        '短点1つ = 1時間単位',
        '長点1つ = 3時間単位',
        '要素間のスペース = 1単位',
        '文字間のスペース = 3単位',
        '単語間のスペース = 7単位',
      ],
    },
    {
      type: 'tip',
      title: '標準速度',
      html: 'デフォルトの速度は <strong>15 WPM</strong>（語数/分）で、これはプロ仕様の送信ペースに対応します。15 WPMでは、1単位 = 80ミリ秒です。',
    },
  ],
};
