import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'この日付差計算機は無料ですか？',
    answer: 'はい、登録やダウンロードは一切不要で、どのブラウザからでもアクセスできる100%無料のツールです。',
  },
  {
    question: '合計時間において、うるう年はどのように処理されますか？',
    answer: 'このツールは標準的なJavaScriptの年代測定法（UTC）を使用しており、うるう年や各月の不規則な日数を自動的に処理して、正確な結果を提供します。',
  },
  {
    question: '時や分の差も計算できますか？',
    answer: 'はい。入力フィールドで正確な時刻を選択できます。結果は、日・時・分・秒の構成だけでなく、累積された合計時間も表示します。',
  },
  {
    question: '入力した日付データはサーバーに送信されますか？',
    answer: 'いいえ。すべての処理はブラウザ内でローカルに行われます。計算された日付に関する情報を保存したり、受信したりすることはありません。',
  },
];

const howToData = [
  { name: '開始日を選択', text: '開始する日付と時刻を入力してください。「今日」をクリックすると瞬時に設定できます。' },
  { name: '終了日を選択', text: '目標とする時点を定義します。「現在」を使用すると、今この瞬間までに経過した時間を測定できます。' },
  { name: '結果を確認', text: '日・時・分・秒の構成に加えて、週や時間の累積合計を確認してください。' },
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
  name: '2つの日付の差を計算する方法',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '日付差計算機',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: '2つの日付の間にどれだけの時間が経過したか、あるいはイベントまであとどれくらいかを正確に計算します。日、時、分で結果を表示。',
};

const ui: DateDiffCalculatorUI = {
  startLabel: '開始日',
  endLabel: '終了日',
  nowBtn: '現在',
  todayBtn: '今日',
  tomorrowBtn: '明日',
  daysLabel: '日',
  hoursLabel: '時間',
  minsLabel: '分',
  secsLabel: '秒',
  weeksLabel: '合計週数',
  totalHoursLabel: '合計時間',
  totalMinsLabel: '合計分数',
  elapsed: '経過時間',
  past: '過去の時間',
  invalidDates: '無効な日付',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'date-difference-calculator',
  title: '日付差計算機',
  description: '2つの日付の間にどれだけの時間が経過したか、あるいはイベントまであとどれくらいかを正確に計算します。日、時、分で結果を表示する無料ツール。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Time and Date: 世界時計とタイムゾーン変換器', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: グレゴリオ暦の歴史', url: 'https://ja.wikipedia.org/wiki/グレゴリオ暦' },
    { name: 'Wikipedia: アイゼンハワー・マトリクスと時間管理', url: 'https://ja.wikipedia.org/wiki/時間管理' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '日、時、分でわかる日付差計算機' },
    {
      type: 'paragraph',
      html: '<strong>2つの日付の差</strong>を計算することは、日常生活と仕事の両方において、最も一般的でありながら過小評価されているタスクの1つです。製品の発売計画を立てる際でも、誰かの正確な年齢を計算する際でも、あるいは特別なイベントまでの残り時間を測る際でも、効率的な時間管理には正確なツールが不可欠です。',
    },
    { type: 'title', level: 3, text: '日付差計算機は何に使われますか？' },
    {
      type: 'paragraph',
      html: 'このツールの有用性は多くの分野に及びます。職場では、プロジェクトマネージャーが納品期限を定め、マイルストーンの進捗を追跡するために使用します。法的または行政的な文脈では、時効期間や契約期間を計算するために不可欠です。',
    },
    {
      type: 'list',
      items: [
        '<strong>イベント計画：</strong>結婚式、会議、または旅行まであと何週間と何日あるかを知る。',
        '<strong>プロジェクト管理：</strong>あるフェーズの開始から完了までに経過した時間を計算する。',
        '<strong>財務：</strong>利息計算や請求書の支払期限のための日数を決定する。',
        '<strong>人事：</strong>従業員の勤続年数や累積休暇日数を測定する。',
        '<strong>健康：</strong>治療の進捗や、処置後の回復時間を追跡する。',
      ],
    },
    { type: 'title', level: 3, text: '時間の知覚とデジタルの正確性' },
    {
      type: 'paragraph',
      html: '私たちはしばしば時間を切り捨てる傾向があります。実際には27日と14時間あるのに「約1ヶ月」と言ったりします。デジタル計算機を使用することで、主観を排除し、情報に基づいた意思決定のための明確なデータを得ることができます。',
    },
    { type: 'title', level: 3, text: '暦日対営業日' },
    {
      type: 'paragraph',
      html: 'このツールは、週末や祝日を含む<strong>暦日</strong>を計算します。天文学的および一般的な市民生活の計算では、時間は継続的に測定されます。プロジェクト時間を推定する必要がある場合は、表示される日数が実際のカレンダーのフル期間を表していることを忘れないでください。',
    },
    { type: 'title', level: 3, text: '時間が生産性に与える影響' },
    {
      type: 'paragraph',
      html: 'パーキンソンの法則によれば、仕事の量は、完成のために割り当てられた時間を満たすまで膨張します。締め切りまでにあと何時間、何分残っているかを正確に可視化することで、チームは努力を最適化し、集中力を維持する傾向があります。',
    },
    {
      type: 'tip',
      title: '未来と過去の日付',
      html: 'この計算機は、未来と過去の両方の日付に使用できます。終了日が開始日よりも早い場合、システムは自動的にそれが過去に経過した時間であることを検出し、絶対的な差の値の正確性を維持します。',
    },
  ],
};
