import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: '온라인에서 텍스트의 픽셀 너비를 어떻게 계산하나요?',
    answer: '입력 상자에 텍스트를 붙여넣고 글꼴과 크기를 설정하면 도구가 브라우저 Canvas API를 자동으로 사용하여 정확한 너비를 픽셀 단위로 반환합니다.',
  },
  {
    question: '서체마다 픽셀 너비가 다른 이유는 무엇인가요?',
    answer: "대부분의 글꼴은 가변 너비(proportional)를 가지므로 각 문자마다 너비가 다릅니다. 예를 들어, 표준 산세리프 글꼴에서 대문자 'M'은 항상 소문자 'i'보다 넓습니다.",
  },
  {
    question: '글자 수를 측정하는 것과 픽셀을 측정하는 것이 같나요?',
    answer: '아니요. 글자 수를 측정하면 문자열 길이를 알 수 있지만, 픽셀을 측정하면 텍스트가 차지하는 시각적 공간을 알 수 있습니다. 이는 웹 디자인에서 텍스트가 컨테이너를 벗어나지 않도록 하는 데 결정적입니다.',
  },
  {
    question: '모든 Google Fonts 서체를 사용할 수 있나요?',
    answer: '네, 글꼴이 운영 체제에 설치되어 있거나 현재 페이지에 로드되어 있는 한 도구는 치수를 정확하게 측정합니다.',
  },
  {
    question: '개인 텍스트나 코드 스니펫을 처리해도 안전한가요?',
    answer: '네. 계산기는 완전히 로컬에서 작동합니다. 외부 서버로 데이터가 전송되지 않으므로 프로젝트에 대한 완전한 프라이버시가 보장됩니다.',
  },
];

const howToData = [
  { name: '텍스트 입력', text: '측정하려는 텍스트를 입력 영역에 입력하거나 붙여넣으세요.' },
  { name: '글꼴 설정', text: '글꼴 모음, 픽셀 단위 크기, 두께 및 기울임꼴 여부를 설정합니다.' },
  { name: '결과 확인', text: '픽셀 너비와 글자 수가 실시간으로 업데이트됩니다.' },
  { name: '값 복사', text: '"너비 복사"를 클릭하여 픽셀 숫자를 클립보드에 저장합니다.' },
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
  name: '텍스트 너비를 픽셀 단위로 측정하는 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '텍스트 픽셀 너비 계산기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: '글꼴, 크기 및 스타일에 따라 텍스트의 픽셀 너비를 정확하게 계산합니다.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: '측정할 텍스트',
  textPlaceholder: '측정하려는 텍스트를 여기에 입력하거나 붙여넣으세요...',
  defaultText: '안녕 세상',
  fontLabel: '글꼴 모음',
  sizeLabel: '크기 (px)',
  weightLabel: '두께',
  italicLabel: '기울임꼴',
  widthLabel: '너비 (픽셀)',
  charsLabel: '글자 수',
  previewLabel: '시각적 미리보기',
  copyBtn: '너비 복사',
  resetBtn: '초기화',
  copyDone: '너비가 복사되었습니다',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'text-pixel-width-calculator',
  title: '텍스트 픽셀 너비 계산기',
  description: '글꼴, 크기 및 스타일에 따라 텍스트가 픽셀 단위로 얼마나 넓은지 정확하게 계산합니다. 디자이너와 개발자를 위한 무료 도구입니다.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: 가변 글꼴 이해하기', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '모든 텍스트의 정확한 픽셀 너비 측정' },
    {
      type: 'paragraph',
      html: '텍스트가 컨테이너를 벗어나나요? 렌더링하기 전에 제목이 차지하는 공간을 알아야 하나요? <strong>브라우저 Canvas API</strong>를 사용하면 DOM에 렌더링하지 않고도 픽셀 정밀도로 텍스트 문자열의 정확한 너비를 측정할 수 있습니다.',
    },
    { type: 'title', level: 3, text: '글자 수 계산만으로 부족한 이유' },
    {
      type: 'paragraph',
      html: '현대 서체는 <strong>가변 너비</strong>를 가집니다. 각 글리프마다 너비가 다릅니다. "W"는 "i"보다 3배 더 많은 공간을 차지할 수 있습니다. 글자 수는 텍스트가 실제로 차지하는 시각적 공간에 대해 아무것도 알려주지 않습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>웹 디자인:</strong> 버튼, 레이블 및 테이블 셀의 텍스트 넘침(overflow)을 방지합니다.',
        '<strong>SEO:</strong> 검색 엔진은 글자 수가 아니라 픽셀 단위로 제목을 자릅니다.',
        '<strong>Canvas 및 PDF:</strong> 프로그래밍 방식으로 텍스트를 그리기 전에 정확한 위치를 계산합니다.',
        '<strong>툴팁 및 버블:</strong> 내부 텍스트에 따라 컨테이너 크기를 동적으로 조정합니다.',
      ],
    },
    { type: 'title', level: 3, text: 'Canvas를 이용한 측정 방법' },
    {
      type: 'paragraph',
      html: 'Canvas API의 <code>ctx.measureText()</code> 메서드는 현재 활성화된 글꼴을 사용하여 CSS 픽셀 너비를 반영하는 <code>width</code> 속성을 가진 <code>TextMetrics</code> 객체를 반환합니다. 이 도구는 측정 전에 글꼴, 크기, 두께 및 스타일로 컨텍스트를 구성합니다.',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText 예시',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('안녕 세상').width; // 예: 74.5",
    },
    { type: 'title', level: 3, text: '프라이버시 및 로컬 처리' },
    {
      type: 'paragraph',
      html: '모든 계산은 브라우저에서 이루어집니다. 텍스트, 코드 스니펫 또는 개인 데이터는 장치를 떠나지 않습니다.',
    },
    {
      type: 'tip',
      title: 'Google Fonts 서체',
      html: 'Google Fonts 서체를 정확하게 측정하려면 먼저 해당 글꼴이 페이지에 로드되어 있거나 시스템에 설치되어 있는지 확인하세요. 그렇지 않으면 브라우저가 대체 글꼴을 사용하게 되어 결과가 달라집니다.',
    },
  ],
};
