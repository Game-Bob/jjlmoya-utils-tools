import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'RSVP 기술이란 무엇인가요?',
    answer: 'RSVP는 Rapid Serial Visual Presentation(급속 순차 시각 제시)의 약자입니다. 단어가 동일한 초점에 하나씩 나타나 눈을 왼쪽에서 오른쪽으로 움직일 필요가 없습니다. 이를 통해 연습하면 이해력을 떨어뜨리지 않으면서 훨씬 높은 속도로 책을 읽을 수 있습니다.',
  },
  {
    question: '빨리 읽으면 이해력이 떨어지나요?',
    answer: '훈련에 달려 있습니다. 중간 속도(350-500 WPM)에서는 속발음(머릿속 음독)을 제거함으로써 많은 사용자가 더 높은 집중력을 보고합니다. 극한의 속도(800+ WPM)에서는 사전 연습 없이는 기억력이 저하될 수 있습니다.',
  },
  {
    question: '평균 독서 속도는 얼마인가요?',
    answer: '일반 성인은 분당 200~250단어 사이를 읽습니다. RSVP 리더와 약간의 연습을 통해 뛰어난 이해력을 유지하면서 그 속도를 두 배(400-500 WPM)로 높이는 것은 흔한 일입니다.',
  },
  {
    question: 'RSVP는 눈의 피로를 유발하나요?',
    answer: '눈을 움직이는 근육의 노력을 제거함으로써 많은 사용자가 전통적인 방법보다 덜 피곤하게 읽을 수 있다는 것을 발견합니다. 처음에는 강렬하게 느껴질 수 있지만 뇌는 빠르게 적응합니다.',
  },
];

const howToData = [
  { name: '텍스트 입력', text: '읽고 싶은 기사, 책 또는 문서를 텍스트 영역에 붙여넣으세요.' },
  { name: 'WPM 설정', text: '분당 단어 수(WPM)를 조정하세요. 초보자라면 300 WPM에서 시작하여 점진적으로 높이세요.' },
  { name: '시선 고정', text: '빨간색 글자(ORP 초점)에 시선을 고정하세요. 눈 움직임으로 단어를 따라가려고 하지 마세요.' },
  { name: '훈련 시작', text: '재생 버튼을 누르고 정보가 흐르게 하세요. 언제든지 일시 중지할 수 있습니다.' },
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
  name: 'RSVP 속독기 사용 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'RSVP 기술과 최적 인식 포인트 조정을 통해 분당 최대 1000단어까지 독서 속도를 훈련하세요.',
};

const ui: SpeedReaderUI = {
  progressLabel: '독서 진도',
  speedLabel: '속도',
  slowLabel: '느림',
  fastLabel: '신급',
  speedHint: '한계에 도전하려면 300 WPM에서 시작하여 점진적으로 높이세요.',
  textLabel: '처리할 텍스트',
  textPlaceholder: '기사, 책 또는 텍스트를 여기에 붙여넣으세요...',
  clearLabel: '지우기',
  words: '단어',
  defaultText: 'RSVP Speed Reader에 오신 것을 환영합니다. 아래에 텍스트를 붙여넣어 시작하세요. 이 기술은 불필요한 눈 움직임을 제거하여 최대 3배 더 빨리 읽을 수 있도록 도와줍니다.',
  play: '재생',
  pause: '일시 중지',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'speed-reader',
  title: 'RSVP Speed Reader',
  description: '독서 속도를 분당 최대 1000단어까지 훈련하세요. 최적의 초점 조정 기능이 포함된 RSVP 기술. 지적 생산성을 두 배로 높이세요.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
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
    { type: 'title', level: 2, text: '독서의 F1: 정신적 대역폭을 해제하세요' },
    {
      type: 'paragraph',
      html: '독서가 생체 역학적으로 시간 낭비라면 어떨까요? 당신의 뇌는 눈이라는 아날로그 연결로 인해 제한을 받는 슈퍼컴퓨터입니다. <strong>RSVP 리더</strong>는 당신의 정신이 단어를 가장 빨리 처리하는 정확한 초점에 단어를 제시함으로써 그 병목 현상을 해소합니다.',
    },
    {
      type: 'paragraph',
      html: '전통적인 독서는 비효율적인 과정입니다. 당신의 눈은 스캐너처럼 작동하지 않고 고속 연사 모드 카메라처럼 작동합니다. 멈추고, 초점 잡고, 점프하고. <strong>새케이드(saccade, 단성 운동)</strong>라고 불리는 이 점프는 정보를 흡수하는 대신 단순히 눈을 움직이는 데 독서 시간의 상당 부분을 소비한다는 것을 의미합니다.',
    },
    {
      type: 'tip',
      html: '"RSVP 독서는 단순히 더 빨리 읽는 것이 아닙니다. 텍스트와 뇌 사이의 기계적 마찰을 없애는 것입니다."',
    },
    { type: 'title', level: 3, text: '데이터 주입 뒤에 숨겨진 과학' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: '최적 인식 포인트 (ORP)',
          description: '모든 단어에는 뇌가 가장 빨리 인식하는 지점이 있습니다. 알고리즘은 그 정확한 글자(빨간색 글자)를 계산하고 완벽하게 중앙에 배치합니다. 당신의 눈은 단 1mm도 움직이지 않습니다.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: '인지적 침묵',
          highlight: true,
          description: '400~500 WPM 이상에서는 내면의 목소리가 조용해집니다. 따라갈 수 없기 때문입니다. 당신은 읽는 것을 "듣는" 것을 멈추고 순수한 의미와 개념을 "보기" 시작합니다. 이것이 궁극의 몰입(flow) 상태입니다.',
        },
        {
          icon: 'mdi:brain',
          title: '시각적 신경가소성',
          description: '체육관에 가는 것과 같습니다. 처음에는 300 WPM도 빠르게 느껴질 것입니다. 일주일 후에는 500 WPM이 산책처럼 느껴질 것입니다. 당신은 시각 피질과 언어 처리를 연결하는 신경 경로를 재훈련하고 있는 것입니다.',
        },
      ],
    },
    { type: 'title', level: 3, text: '훈련 프로토콜: 초보자부터 네오까지' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: '레벨 1: 각성 (200~300 WPM)',
          description: '당신의 일반적인 독서 속도입니다. 인터페이스에 익숙해지세요. 얼굴의 힘을 빼고 단어가 오게 하세요. 단어를 "잡으려고" 하지 마세요.',
          points: ['초보자에게 이상적', 'ORP 친숙화', '눈의 피로 없음'],
        },
        {
          title: '레벨 2: 소리의 장벽 (400~500 WPM)',
          highlight: true,
          description: '여기서 마법이 일어납니다. 불편함이 느껴질 것입니다. 단어를 놓쳤다고 해서 속도를 늦추지 마세요. 뇌는 문맥에 따라 빈틈을 채우는 법을 배울 것입니다.',
          points: ['속발음 사라짐', '정신적 몰입 상태', '기본 속도의 두 배'],
        },
        {
          title: '레벨 3: 탈출 속도 (600+ WPM)',
          description: '상급자 영역입니다. 학습 자료 검토, 뉴스 읽기 또는 핵심 개념을 찾는 기술 문서 읽기에 이상적입니다.',
          points: ['일반 소설을 2시간 만에 독파', '독서 효율의 극대화', '사전 연습 필요'],
        },
      ],
    },
  ],
};
