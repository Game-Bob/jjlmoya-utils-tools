import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'RSVP技術とは何ですか？',
    answer: 'RSVPはRapid Serial Visual Presentation（急速逐次視覚提示）の略です。単語を同じ焦点に1つずつ表示することで、目を左右に動かす必要をなくします。練習すれば、理解度を落とさずに、はるかに高速で読書することが可能になります。',
  },
  {
    question: '速く読むと理解度が下がりますか？',
    answer: 'トレーニング次第です。中程度の速度（350〜500 WPM）では、頭の中での音読（黙読時の内言）を排除することで、多くのユーザーがより高い集中力を実感しています。極端な速度（800 WPM以上）では、事前の練習がないと記憶定着率が下がることがあります。',
  },
  {
    question: '平均的な読書速度はどれくらいですか？',
    answer: '一般的な成人の読書速度は、分速200〜250語程度です。RSVPリーダーと少しの練習で、優れた理解度を維持したまま、その速度を2倍（400〜500 WPM）にすることは一般的です。',
  },
  {
    question: 'RSVPは目が疲れますか？',
    answer: '目を動かす筋肉の動きを排除することで、従来の読書方法よりも疲れを感じずに読めると感じるユーザーが多いです。最初は強烈に感じるかもしれませんが、脳はすぐに適応します。',
  },
];

const howToData = [
  { name: 'テキストを入力', text: '読みたい記事、本、またはドキュメントをテキストエリアに貼り付けます。' },
  { name: 'WPMを設定', text: 'WPM（分速単語数）を調整します。初心者の場合は300 WPMから始めて、徐々に上げていきましょう。' },
  { name: '視線を固定', text: '赤い文字（ORP焦点）に目を向けたままにします。目の動きで単語を追いかけないようにしてください。' },
  { name: 'トレーニング開始', text: '再生ボタンを押して、情報を流し込みます。いつでも一時停止できます。' },
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
  name: 'RSVP速読リーダーの使い方',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'RSVP技術と最適な認識ポイント調整により、分速最大1000語までの読書速度をトレーニングします。',
};

const ui: SpeedReaderUI = {
  progressLabel: '読書進捗',
  speedLabel: '速度',
  slowLabel: '遅い',
  fastLabel: '神速',
  speedHint: '制限に挑戦するために、300 WPMから始めて徐々に上げていきましょう。',
  textLabel: '処理するテキスト',
  textPlaceholder: '記事、本、またはテキストをここに貼り付けてください...',
  clearLabel: 'クリア',
  words: '単語',
  defaultText: 'RSVP Speed Readerへようこそ。下にテキストを貼り付けて始めてください。この技術は、不必要な目の動きをなくすことで、最大3倍速く読むのを助けます。',
  play: '再生',
  pause: '一時停止',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'speed-reader',
  title: 'RSVP Speed Reader',
  description: '読書速度を分速最大1000語までトレーニング。最適な焦点調整を備えたRSVP技術。知的生産性を2倍にしましょう。',
  ui,
  faqTitle: 'よくある質問',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '読書のF1：脳の帯域幅を解放する' },
    {
      type: 'paragraph',
      html: '生体力学的に見て、読書という行為が時間の無駄だとしたらどうでしょうか？ あなたの脳は、目というアナログな接続によって制限されたスーパーコンピュータです。<strong>RSVPリーダー</strong>は、心が最も速く処理できる正確な焦点に単語を提示することで、そのボトルネックを打破します。',
    },
    {
      type: 'paragraph',
      html: '従来の読書は非効率的なプロセスです。目はスキャナーのようには機能しません。バーストモードのカメラのように機能します：停止、焦点合わせ、ジャンプ。この「<strong>サッカード</strong>（躍度運動）」と呼ばれるジャンプにより、読書時間のかなりの部分を、情報を吸収するのではなく、単に目を動かすことに費やしていることになります。',
    },
    {
      type: 'tip',
      html: '「RSVP読書は単に速く読むことではありません。テキストと脳の間の機械的な摩擦をなくすことなのです」',
    },
    { type: 'title', level: 3, text: 'データ注入の背後にある科学' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: '最適認識ポイント（ORP）',
          description: 'すべての単語には、脳が最も速く認識できるポイントがあります。アルゴリズムはその正確な文字（赤い文字）を計算し、完璧に中心に配置します。目は1ミリも動きません。',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: '認知的沈黙',
          highlight: true,
          description: '400〜500 WPMを超えると、内なる声が追いつけなくなり、静かになります。読んでいるものを「聞く」のをやめ、純粋な意味や概念を「見る」ようになります。これが究極のフロー状態です。',
        },
        {
          icon: 'mdi:brain',
          title: '視覚的神経可塑性',
          description: 'ジムに行くようなものです。最初は300 WPMでも速く感じます。1週間後には、500 WPMが散歩のように感じられるでしょう。視覚皮質と言語処理をつなぐ神経経路を再トレーニングしているのです。',
        },
      ],
    },
    { type: 'title', level: 3, text: 'トレーニングプロトコル：初心者からプロへ' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'レベル1：覚醒（200〜300 WPM）',
          description: '通常の読書速度です。インターフェースに慣れましょう。顔の力を抜き、単語が向こうからやってくるのを待ちます。単語を「掴もう」としないでください。',
          points: ['初心者に最適', 'ORPへの習熟', '目が疲れない'],
        },
        {
          title: 'レベル2：音速の壁（400〜500 WPM）',
          highlight: true,
          description: 'ここからが本番です。違和感を感じるでしょう。単語を聞き逃しても速度を落とさないでください。脳は文脈からギャップを埋めることを学習します。',
          points: ['内言（頭の中での音読）が消える', '精神的なフロー状態', '基本速度の2倍'],
        },
        {
          title: 'レベル3：脱出速度（600+ WPM）',
          description: '上級者の領域です。学習教材の復習、ニュースの購読、または重要な概念を探しているテクニカルドキュメントの閲覧に最適です。',
          points: ['一般的な小説を2時間で読破', '読書効率の最大化', '事前の練習が必要'],
        },
      ],
    },
  ],
};
