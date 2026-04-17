import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: '단비례의 삼수법이란 무엇인가요?',
    answer: '세 가지 알고 있는 값으로부터 하나의 모르는 값을 구하는 비례 계산법입니다. 한쪽이 증가하면 다른 쪽도 같은 비율로 증가하기 때문에 "정비례(직접)"라고 불립니다.',
  },
  {
    question: '반비례의 삼수법은 언제 사용해야 하나요?',
    answer: '한쪽이 증가하면 다른 쪽이 감소하는 "반비례" 관계일 때 사용합니다. 예를 들어, 2명의 작업자가 5시간 걸리는 일은 4명의 작업자가 하면 더 적은 시간이 걸립니다. 현재 계산기는 정비례에 집중하고 있습니다.',
  },
  {
    question: '전문적인 계산에도 정확한가요?',
    answer: '네. 당사의 계산기는 고정밀 부동 소수점 계산을 사용하여 약물 복용량 조절, 그래픽 디자인 축척, 영업 예산 및 레시피 변환에 이상적입니다.',
  },
  {
    question: '수동으로 어떻게 계산하나요?',
    answer: '공식은 (B 값 × C 값) ÷ A 값 = X입니다. 즉, 대각선 값을 곱하고 그 결과를 남은 값으로 나눕니다.',
  },
];

const howToData = [
  {
    name: '기본 관계 식별',
    text: '초기 비율을 형성하는 두 가지 알고 있는 값을 입력하세요(예: 100km가 8리터인 경우).',
  },
  {
    name: '세 번째 값 입력',
    text: '구하고자 하는 새로운 값을 입력하세요(예: 내가 250km를 주행한다면...).',
  },
  {
    name: '결과 확인',
    text: '버튼을 누를 필요 없이 실시간으로 미지수(X)가 자동으로 계산됩니다.',
  },
  {
    name: '복사 또는 초기화',
    text: '결과를 클립보드에 바로 복사하거나 입력란을 비워 새로운 계산을 수행할 수 있습니다.',
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
  name: '비례 계산기(삼수법) 사용 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '단순 비례 계산기(삼수법)',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '수학적 비례를 즉시 해결하세요. 수량, 레시피, 할인 및 변환을 계산하기 위한 결정적인 도구입니다.',
};

const ui: RuleOfThreeUI = {
  labelA: '만약...',
  labelB: '가 ...라면',
  labelC: '이제...',
  labelX: '결과 (X)',
  hintA: '초기 수량',
  hintB: '알고 있는 값',
  hintC: '새로운 수량',
  hintX: '계산된 값',
  separatorIsTo: ':',
  separatorWillBe: '=',
  copyTitle: '결과 복사',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'rule-of-three-calculator',
  title: '단순 비례 계산기(삼수법)',
  description: '수학적 비례를 즉시 해결하세요. 수량, 레시피, 할인 및 변환을 계산하기 위한 결정적인 도구입니다.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: '비례 — 위키백과', url: 'https://ko.wikipedia.org/wiki/%EB%B9%84%EB%A1%80' },
    { name: '비와 비율 — Khan Academy', url: 'https://ko.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '비례 계산(삼수법)은 어디에 사용되나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '삼수법을 이용한 단순 비례 계산은 수학의 "맥가이버 칼"과 같습니다. 세 가지 데이터를 알고 네 번째 데이터를 찾는 모든 문제를 해결합니다. <strong>A와 B</strong>의 관계를 알고 있고 새로운 값 <strong>C</strong>가 있다면, 계산기는 즉시 <strong>X</strong>를 찾아줍니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: '요리와 레시피',
          description: '레시피에 4인분 기준 밀가루 500g이 필요하다면, 7인분에는 얼마나 필요할까요?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: '쇼핑과 가격',
          description: '3캔 묶음이 2,500원이라면, 10캔은 얼마일까요?',
          points: ['(2,500 × 10) ÷ 3 = 8,333원'],
        },
        {
          icon: 'mdi:car',
          title: '여행과 거리',
          description: '60km를 가는 데 45분이 걸린다면, 140km를 가는 데는 얼마나 걸릴까요?',
          points: ['(45 × 140) ÷ 60 = 105분'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: '디자인과 화면',
          description: '이미지 너비가 1920px인데 비율을 유지하면서 800px로 줄이고 싶다면...',
          points: ['(원본 높이 × 800) ÷ 1920 = 새로운 높이'],
        },
      ],
    },
    {
      type: 'title',
      text: '공식은 어떻게 작동하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '공식은 항상 동일합니다. <strong>대각선 값을 곱하고 남은 값으로 나누면</strong> 됩니다.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: '단순 정비례 삼수법 공식',
    },
    {
      type: 'paragraph',
      html: '계산기에서: <strong>B</strong> 값과 <strong>C</strong> 값을 곱하고 <strong>A</strong>로 나눕니다. 결과는 <strong>X</strong>입니다.',
    },
    {
      type: 'title',
      text: '전문가 및 일상적 활용',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '학교 수학을 넘어 비례 계산은 어디에나 있습니다. 약국에서의 체중별 약물 용량 계산, 사진술에서의 노출 시간 계산, 금융에서의 수익률 계산, 인쇄에서의 포맷 규격 스케일링 등 다양합니다.',
    },
    {
      type: 'tip',
      title: '정밀도 팁',
      html: '결과는 유효 소수점 4자리까지 표시됩니다. 돈이나 정확한 치수를 다룰 때는 맥락에 따라 반올림하세요. 통화는 소수점 2자리, 픽셀은 정수로 반올림하는 것이 좋습니다.',
    },
  ],
};
