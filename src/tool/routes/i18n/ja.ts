import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'どのような最適化アルゴリズムを使用していますか？',
    answer: '巡回セールスマン問題（TSP）の高度な解法を使用しています。アルゴリズムがすべての経由地を分析し、総移動距離を最小限に抑える巡回順序を決定することで、時間と燃料を節約します。',
  },
  {
    question: '現在地を共有しても安全ですか？',
    answer: 'はい。当ツールは、ブラウザ内でローカルに地理データを処理します。お客様のルート、経由地、または位置情報の履歴を当社のサーバーに保存することはありません。',
  },
  {
    question: '一度にいくつまで経由地を最適化できますか？',
    answer: '無料版では、最大10か所の経由地を即座に最適化できます。より大規模な業務用ルートの場合でも、ブラウザを停止させることなく高いパフォーマンスを維持できるようにシステムが最適化されています。',
  },
  {
    question: '最適化したルートをGoogleマップで直接使えますか？',
    answer: 'もちろんです！ルートが最適化されると、Googleマップと互換性のあるナビゲーションリンクが生成され、スマートフォンから直接ルート案内を開始できます。',
  },
];

const howToData = [
  {
    name: '出発点を追加',
    text: '出発地の住所を入力するか、地図上をクリックしてルートの開始地点を設定します。',
  },
  {
    name: '目的の経由地を入力',
    text: '訪問が必要なすべての場所を追加します。システムが自動的に並べ替えるため、入力順序は気にする必要はありません。',
  },
  {
    name: '順序を最適化',
    text: '「最適化」ボタンをクリックします。アルゴリズムが、すべての経由地を巡る最も効率的な順序を数秒で計算します。',
  },
  {
    name: 'ナビで開く',
    text: 'ナビゲーションボタンを使用して、最適化されたルートをお好みの地図アプリで開きます。',
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
  name: '複数の経由地があるルートを最適化する方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '最適ルート計算機',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '配達や旅行のルートを無料で最適化します。経由地を自動的に並べ替えて、最短かつ最も効率的な経路を見つけます。',
};

const ui: RoutesUI = {
  titleSidebar: 'ルート地点',
  descriptionSidebar: '地図をクリックして経由地を追加してください。最初の地点が出発点になります。',
  emptyState: '地点が追加されていません',
  btnOptimize: '最適ルートを計算',
  btnCalculating: '計算中...',
  btnClear: 'すべて消去',
  labelDistance: '推定総距離',
  labelDeleteAria: '削除',
  labelLoadingAddress: '住所を読み込み中...',
  labelPoint: '地点',
  errorMinPoints: 'ルートを計算するには、少なくとも2つの地点が必要です。',
  errorCalculate: 'ルートの計算中にエラーが発生しました。',
  errorAddress: '住所の取得中にエラーが発生しました',
  errorAddressName: '不明な地点',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimal-routes',
  title: '無料の最適ルート計算機',
  description: '配達や旅行のルートを無料で最適化します。当ツールは経由地を自動的に並べ替えて、最短かつ最も効率的な経路を見つけます。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '技術と情報源',
  bibliography: [
    { name: 'Leaflet — オープンソースのインタラクティブ・マップ・ライブラリ', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — オープンな地図データ', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager マップタイル', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — 逆ジオコーディングサービス（OpenStreetMap）', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine（ルート最適化）', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'スマート・ルート最適化：配達と旅行のためのTSP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>オンライン・ルート最適化ツール</strong>は、古典的な「巡回セールスマン問題（TSP）」を解決する無料ツールです。すべての経由地を任意の順序で追加するだけで、アルゴリズムが総移動距離を最小化するための最も効率的なシーケンスを自動的に計算します。',
    },
    {
      type: 'title',
      text: 'ルート最適化アルゴリズムの仕組みは？',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールは、OpenStreetMapデータに基づいた高性能なルーティングエンジンである<strong>OSRM (Open Source Routing Machine)</strong> APIを使用しています。プロセスは以下の通りです：まず、全地点間の最適な巡回ルートを計算し（TSPアルゴリズム）、次にそれを一方向の直線的な行程に変換するための最適な切断地点を決定し、最後に推定総距離とともにルートを地図上に描画します。',
    },
    {
      type: 'title',
      text: '活用シーン：配達、営業、旅行',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このルート最適化ツールは、毎日の複数の配送を整理する必要がある<strong>個人配送ドライバー</strong>、エリア内の顧客を訪問する<strong>フィールド・セールス担当者</strong>、あるいは複数の都市や観光スポットを最も効率的な順序で回りたい<strong>旅行者</strong>に最適です。すべての情報はブラウザ内で処理され、個人データが特定のサーバーと共有されることはありません。',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'アルゴリズム', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'ルートエンジン', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'プライバシー', icon: 'mdi:lock-check' },
        { value: '無料', label: 'コスト', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'プライバシーとローカル処理',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'ツールのロジックはすべて、お使いのブラウザ上で直接実行されます。経由地の座標は、ルート計算と住所名の取得のために公開されている OSRM および Nominatim API にのみ送信されますが、<strong>特定のサーバーに保存されることはありません</strong>。機密情報を含むビジネスルートの計画にも安心してご利用いただけます。',
    },
    {
      type: 'tip',
      title: '使い方のヒント',
      html: '<strong>最高の結果を得るには</strong>、住所検索ではなく地図を直接クリックして経由地を追加してください。マーカーはドラッグ可能なため、配置した後に各地点の正確な位置を微調整できます。',
    },
  ],
};
