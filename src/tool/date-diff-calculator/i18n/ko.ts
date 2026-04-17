import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: '이 날짜 차이 계산기는 무료인가요?',
    answer: '네, 등록이나 다운로드 없이 모든 브라우저에서 사용할 수 있는 100% 무료 도구입니다.',
  },
  {
    question: '총 시간에서 윤년은 어떻게 처리되나요?',
    answer: '이 도구는 표준 JavaScript 연대기(UTC)를 사용하며, 윤년과 매달 다른 일수를 자동으로 처리하여 정확한 결과를 제공합니다.',
  },
  {
    question: '시와 분의 차이도 계산할 수 있나요?',
    answer: '네. 입력 필드에서 정확한 시간을 선택할 수 있습니다. 결과는 일, 시, 분, 초 단위의 내역뿐만 아니라 누적 합계도 표시합니다.',
  },
  {
    question: '입력한 날짜 데이터가 서버로 전송되나요?',
    answer: '아니요. 모든 처리는 브라우저에서 로컬로 이루어집니다. 귀하가 계산한 날짜 정보를 저장하거나 수신하지 않습니다.',
  },
];

const howToData = [
  { name: '시작 날짜 선택', text: "시작 날짜와 시간을 입력하거나 '오늘'을 클릭하여 즉시 설정하세요." },
  { name: '종료 날짜 선택', text: "목표 시점을 정의합니다. '현재'를 사용하여 지금 이 순간까지 경과된 시간을 측정하세요." },
  { name: '결과 확인', text: '일, 시, 분, 초 단위의 내역과 주 및 시간의 누적 합계를 확인하세요.' },
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
  name: '두 날짜 사이의 차이를 계산하는 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '날짜 차이 계산기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: '두 날짜 사이에 정확히 얼마의 시간이 지났는지 또는 이벤트까지 얼마나 남았는지 계산합니다. 일, 시, 분 단위 결과.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: '시작 날짜',
  endLabel: '종료 날짜',
  nowBtn: '현재',
  todayBtn: '오늘',
  tomorrowBtn: '내일',
  daysLabel: '일',
  hoursLabel: '시간',
  minsLabel: '분',
  secsLabel: '초',
  weeksLabel: '총 주수',
  totalHoursLabel: '총 시간',
  totalMinsLabel: '총 분수',
  elapsed: '경과 시간',
  past: '과거 시간',
  invalidDates: '잘못된 날짜',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'date-difference-calculator',
  title: '날짜 차이 계산기',
  description: '두 날짜 사이에 정확히 얼마의 시간이 지났는지 또는 이벤트까지 얼마나 남았는지 계산합니다. 일, 시, 분 단위 결과를 제공하는 무료 도구.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: 그레고리력의 역사', url: 'https://ko.wikipedia.org/wiki/그레고리력' },
    { name: 'Wikipedia: 아이젠하워 매트릭스와 시간 관리', url: 'https://ko.wikipedia.org/wiki/시간_관리' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '일, 시, 분 단위로 계산하는 날짜 차이 계산기' },
    {
      type: 'paragraph',
      html: '<strong>두 날짜 사이의 차이</strong>를 계산하는 것은 일상생활과 업무 환경 모두에서 가장 흔하면서도 과소평가되는 작업 중 하나입니다. 제품 출시를 계획하든, 누군가의 정확한 나이를 계산하든, 특별한 이벤트까지 남은 시간을 측정하든, 정확한 도구를 갖추는 것은 효율적인 시간 관리에 필수적입니다.',
    },
    { type: 'title', level: 3, text: '날짜 차이 계산기는 어떤 용도로 사용되나요?' },
    {
      type: 'paragraph',
      html: '이 도구의 유용성은 여러 분야에 걸쳐 있습니다. 직장에서는 프로젝트 매니저가 마감일을 정의하고 마일스톤 진행 상황을 추적하는 데 사용합니다. 법률 및 행정적 맥락에서는 소멸시효나 계약 기간을 계산하는 데 필수적입니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>이벤트 계획:</strong> 결혼식, 컨퍼런스 또는 여행까지 남은 주와 일수를 확인하세요.',
        '<strong>프로젝트 관리:</strong> 단계의 시작부터 완료까지 경과된 시간을 계산하세요.',
        '<strong>금융:</strong> 이자 계산이나 송장 마감일을 위한 일수를 확인하세요.',
        '<strong>인사 관리:</strong> 직원의 근속 연수나 누적 휴가 일수를 측정하세요.',
        '<strong>건강:</strong> 치료 진행 상황이나 시술 후 회복 시간을 추적하세요.',
      ],
    },
    { type: 'title', level: 3, text: '시간 인식과 디지털 정밀도' },
    {
      type: 'paragraph',
      html: '우리는 종종 시간을 반올림하는 경향이 있습니다. 실제로는 27일 14시간 남았음에도 "약 한 달"이라고 말하곤 합니다. 디지털 계산기를 사용하면 주관성을 배제하고 정보에 입각한 의사 결정을 위한 명확한 데이터를 얻을 수 있습니다.',
    },
    { type: 'title', level: 3, text: '달력상의 날짜와 영업일' },
    {
      type: 'paragraph',
      html: '이 도구는 주말과 공휴일을 포함한 <strong>달력상의 날짜</strong>를 계산합니다. 천문학적 및 일반적인 민사 계산을 위해 시간은 연속적으로 측정됩니다. 프로젝트 시간을 추정해야 한다면 표시된 날짜가 실제 달력의 전체 기간을 나타낸다는 점을 기억하세요.',
    },
    { type: 'title', level: 3, text: '시간이 생산성에 미치는 영향' },
    {
      type: 'paragraph',
      html: '파킨슨의 법칙에 따르면 업무는 완료에 주어진 시간만큼 늘어납니다. 마감일까지 남은 시간과 분을 정확히 시각화함으로써 팀은 노력을 최적화하고 집중력을 유지하는 경향이 있습니다.',
    },
    {
      type: 'tip',
      title: '미래 및 과거 날짜',
      html: '이 계산기는 미래와 과거 날짜 모두에 사용할 수 있습니다. 종료 날짜가 시작 날짜보다 빠르면 시스템은 자동으로 과거에 경과된 시간임을 감지하고 절대 차이 값의 정밀도를 유지합니다.',
    },
  ],
};
