import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: '이 도구가 내 SEO 순위에 어떻게 도움이 되나요?',
    answer: '키워드 밀도와 문장 가독성을 분석함으로써 콘텐츠가 사용자가 이해하기 쉽고 검색 엔진에 관련성이 있는지 확인하여 과도한 최적화에 따른 페널티를 피할 수 있습니다.',
  },
  {
    question: '기술 분석에서는 어떤 HTML 요소를 확인하나요?',
    answer: 'H1 태그의 존재 유무와 고유성, H2/H3 부제목의 존재, 이미지의 alt 속성 유무를 확인합니다.',
  },
  {
    question: '내 콘텐츠가 서버에 저장되나요?',
    answer: '아니요. 분석은 사용자의 브라우저 내에서 100% 로컬로 실행됩니다. 사용자의 콘텐츠는 사용자의 컴퓨터를 떠나지 않습니다.',
  },
  {
    question: 'Yoast SEO 기준과 호환되나요?',
    answer: '네, 문장 길이, 단락 분포 및 제목 계층 구조와 같이 Yoast와 유사한 기준을 구현합니다.',
  },
];

const howToData = [
  { name: '텍스트 작성 또는 붙여넣기', text: '분석하려는 콘텐츠를 메인 텍스트 영역에 입력하세요.' },
  { name: '최적화 체크리스트 검토', text: '사이드 패널에서 길이, 가독성 및 키워드 밀도 알림을 확인하세요.' },
  { name: '기술 HTML 분석', text: '기술 분석 탭으로 전환하여 H1 태그, 이미지 alt 및 메타데이터 구조를 확인하세요.' },
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
  name: 'SEO를 위해 콘텐츠를 최적화하는 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO 콘텐츠 최적화 도구',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: '서버에 데이터를 전송하지 않고 텍스트의 키워드 밀도, 가독성 및 기술 HTML 구조를 실시간으로 분석하세요.',
};

const ui: SeoContentOptimizerUI = {
  tabText: '텍스트 분석',
  tabHtml: '기술 HTML 분석',
  textareaPlaceholder: '텍스트를 작성하거나 HTML 코드를 여기에 붙여넣으세요...',
  statsChars: '글자 수',
  statsWords: '단어 수',
  statsReading: '읽기',
  statsSentences: '문장 수',
  checklistTitle: '최적화 체크리스트',
  keywordsTitle: '키워드 밀도',
  technicalTitle: '기술 HTML 분석',
  h1Label: 'H1 발견',
  linksLabel: '링크 (a)',
  imgsLabel: '이미지 (img)',
  altsLabel: 'alt 누락',
  emptyState: '데이터 없음',
  analyzing: '분석 중...',
  checkInsufficient: '길이 부족 (300단어 미만)',
  checkPillar: '훌륭한 필러 콘텐츠 (900단어 초과)',
  checkGoodLength: 'SEO에 적합한 길이',
  checkLongSentences: '긴 문장이 너무 많음 (텍스트의 25% 초과)',
  checkGoodReadability: '최적의 문장 가독성',
  checkLongParagraphs: '매우 긴 단락 분할 필요 (150단어 초과)',
  checkMissingH1: 'H1 태그 누락',
  checkMultipleH1: '여러 개의 H1 태그 발견',
  checkMissingH2: '부제목 (H2) 누락',
  checkMissingTitle: '메타 title 태그 누락',
  stopWords: JSON.stringify(['그', '이', '저', '것', '수', '등', '들', '및', '위', '대한', '통해', '위해', '관한', '대해', '하는', '이다', '입니다', '한다', '하고', '되어', '에서', '으로', '부터', '까지', '또한', '하지만', '그리고', '따라서', '때문에', '하는', '한', '할', '있습니다', '없습니다', '있는', '없는', '대한', '에서', '으로', '에게', '와', '과', '의', '를', '을', '은', '는', '이', '가']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-content-optimizer',
  title: 'SEO 콘텐츠 최적화 도구',
  description: '텍스트의 키워드 밀도, 가독성 및 기술 HTML 구조를 실시간으로 분석하세요. 무료로 제공되는 개인정보 보호 SEO 도구입니다.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'Google 검색 엔진 최적화(SEO) 기본 가이드', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=ko' },
    { name: 'Yoast SEO 가독성 기준', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO 콘텐츠 최적화: 키워드, 가독성 및 구조' },
    {
      type: 'paragraph',
      html: '콘텐츠 품질은 더 이상 포함된 키워드만으로 측정되지 않으며, 사람과 Google 크롤러 모두가 이해하기 쉽게 정보를 어떻게 구성하느냐에 따라 측정됩니다. 당사의 <strong>실시간 SEO 분석 도구</strong>는 키워드 밀도, 단락 가독성 및 기본적인 HTML 기술 요소에 대한 완전한 제어권을 제공합니다.',
    },
    { type: 'title', level: 3, text: '키워드 밀도 및 의미적 관련성' },
    {
      type: 'paragraph',
      html: '<strong>키워드 밀도</strong>는 텍스트 전체와 비교하여 특정 용어가 얼마나 자주 나타나는지를 나타냅니다. 과도한 반복은 <em>키워드 스터핑(keyword stuffing)</em> 필터를 작동시키는 반면, 너무 낮은 밀도는 검색 엔진이 기사의 핵심 주제를 파악하기 어렵게 만들 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>관련성 분석:</strong> 가장 많이 반복되는 단어가 검색 의도와 일치하는지 확인하십시오.',
        '<strong>페널티 예방:</strong> 스팸처럼 보일 수 있는 용어의 과도한 반복을 피하십시오.',
        '<strong>시맨틱 최적화:</strong> 전문 용어와 자연어 사이의 균형을 찾으십시오.',
      ],
    },
    { type: 'title', level: 3, text: 'Yoast 스타일 가독성' },
    {
      type: 'paragraph',
      html: '가독성은 간접적이지만 중요한 순위 요소입니다. 단락이 끝없는 텍스트 블록이라서 사용자가 떠나버리면 <em>체류 시간(Dwell Time)</em>이 감소합니다. 분석기는 긴 문장(단어 수 기준), 긴 단락을 감지하고 부제목이 있는지 확인합니다.',
    },
    {
      type: 'tip',
      title: '읽기 시간',
      html: '대부분의 사용자는 10초 이내에 기사를 읽을지 여부를 결정합니다. 예상 읽기 시간(분당 평균 200단어로 계산)을 알면 독자의 기대치를 설정하여 이탈률을 줄이는 데 도움이 됩니다.',
    },
    { type: 'title', level: 3, text: '기술 HTML 분석' },
    {
      type: 'paragraph',
      html: '소스 코드를 붙여넣어 주요 요소를 확인하십시오. <strong>H1</strong>의 고유성, H2/H3 부제목의 존재, <code>alt</code> 속성이 없는 이미지, <code>title</code> 태그의 유무를 확인하세요. 모든 처리는 서버로 데이터를 전송하지 않고 브라우저 내에서 이루어집니다.',
    },
  ],
};
