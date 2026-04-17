import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: '이 이메일 리스트 클리너는 정확히 어떤 역할을 하나요?',
    answer: '이 도구는 이메일 리스트를 분석하여 중복을 제거하고, 불필요한 공백을 없애며, 기본 형식을 확인하고, 모든 주소를 소문자로 정규화하여 깨끗한 데이터베이스를 보장합니다.',
  },
  {
    question: '이메일 수에 제한이 있나요?',
    answer: '엄격한 수량 제한은 없습니다. 한 번에 수천 개의 이메일을 즉시 처리할 수 있습니다. 유일한 제약은 리스트가 비정상적으로 클 경우 브라우저의 메모리 용량입니다.',
  },
  {
    question: '여기에 이메일을 붙여넣어도 안전한가요?',
    answer: '네, 완전히 안전합니다. 모든 처리는 JavaScript를 통해 브라우저 내에서 로컬로 수행됩니다. 귀하의 데이터는 당사 서버로 전송되거나 외부 데이터베이스에 저장되지 않습니다.',
  },
  {
    question: '이것이 캠페인 도달률을 어떻게 개선하나요?',
    answer: '존재하지 않거나 형식이 잘못된 주소를 제거함으로써 바운스율을 낮출 수 있으며, 이는 Gmail, Outlook, Yahoo와 같은 제공업체에서 도메인 평판을 높이는 데 도움이 됩니다.',
  },
];

const howToData = [
  { name: '이메일 붙여넣기', text: '이메일 리스트를 복사하여 텍스트 상자에 붙여넣으세요. 줄바꿈, 쉼표 또는 공백으로 구분할 수 있습니다.' },
  { name: '리스트 정리', text: "'리스트 정리' 버튼을 클릭하여 유효성 검사 및 중복 제거 프로세스를 시작하세요." },
  { name: '결과 검토', text: '원본 대비 최종 이메일 수를 보여주는 통계를 확인하고 아래 패널에서 정리된 리스트를 검토하세요.' },
  { name: '복사 또는 다운로드', text: '결과를 클립보드에 직접 복사하거나 즉시 사용할 수 있는 .txt 파일로 다운로드하세요.' },
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
  name: '이메일 리스트 정리 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '이메일 리스트 클리너',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: '이메일 리스트에서 중복을 제거하고, 공백을 수정하며, 형식을 확인합니다. 수량 제한 없는 무료 도구.',
};

const ui: EmailListCleanerUI = {
  inputLabel: '이메일 리스트',
  inputPlaceholder: '이메일 리스트를 여기에 붙여넣으세요 (줄바꿈, 쉼표 또는 공백 구분)...',
  cleanBtn: '리스트 정리',
  clearBtn: '모두 지우기',
  statsOriginal: '원본',
  statsRemoved: '삭제됨',
  statsFinal: '정리됨',
  resultLabel: '정리 결과',
  copyBtn: '리스트 복사',
  copyDone: '복사됨!',
  downloadBtn: '.txt 다운로드',
  registered: '개 등록됨',
  downloadFilename: 'clean-emails',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-list-cleaner',
  title: '이메일 리스트 클리너',
  description: '이메일 리스트를 무료로 정리하세요. 중복 제거, 공백 수정, 형식 확인을 몇 초 만에 완료합니다. 비용을 절감하고 도달률을 높이세요.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: 이메일 발신자 가이드라인', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: 이메일 스팸', url: 'https://ko.wikipedia.org/wiki/이메일_스팸' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '이메일 리스트 클리너 사용이 필수적인 이유는 무엇인가요?' },
    {
      type: 'paragraph',
      html: '디지털 마케팅 세계에서 데이터베이스의 품질은 규모보다 훨씬 중요합니다. 5만 개의 이메일 리스트가 있어도 그중 절반이 존재하지 않는 주소이거나, 오타가 있거나, 중복되었다면 가치가 없습니다. 이때 <strong>이메일 리스트 클리너</strong>가 필수적입니다.',
    },
    { type: 'title', level: 3, text: '정리되지 않은 이메일 리스트의 위험성' },
    {
      type: 'paragraph',
      html: '정리되지 않은 데이터베이스를 유지하면 심각한 결과를 초래할 수 있습니다. 존재하지 않는 주소로 이메일을 보내면 "하드 바운스"가 발생합니다. 이 비율이 2-3%를 넘으면 스팸 필터가 도메인을 면밀히 조사하기 시작하며 국제 블랙리스트에 오를 수도 있습니다.',
    },
    {
      type: 'tip',
      title: '전문가 팁',
      html: '이메일 리스트를 절대로 구매하지 마세요. 도메인 평판을 망치는 가장 빠른 길입니다. 자체 리스트를 유기적으로 구축하고 3~6개월마다 정리하세요.',
    },
    { type: 'title', level: 3, text: '당사 도구가 데이터베이스를 최적화하는 방법' },
    {
      type: 'paragraph',
      html: '당사의 무료 유틸리티는 수량 제한 없이 데이터베이스를 철저하고 신속하게 정리합니다. 다음과 같은 몇 가지 중요한 유효성 검사 작업을 즉시 수행합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>중복 제거:</strong> 동일한 사용자에게 동일한 이메일이 두 번 전송되지 않도록 합니다.',
        '<strong>공백 수정:</strong> 발신을 무효화할 수 있는 시작이나 끝부분의 우발적인 공백을 제거합니다.',
        '<strong>형식 확인:</strong> 유효한 이메일 구조를 갖추지 않은 항목을 필터링합니다.',
        '<strong>정규화:</strong> 중복 레코드를 방지하기 위해 모든 주소를 소문자로 변환합니다.',
      ],
    },
    { type: 'title', level: 3, text: '리스트를 정리하기에 적절한 시기는 언제인가요?' },
    {
      type: 'list',
      items: [
        '연락처를 새로운 CRM이나 발송 플랫폼(Mailchimp, SendGrid 등)으로 가져오기 전.',
        '오픈율이 평소 평균보다 떨어졌음을 감지했을 때.',
        '데이터를 수동으로 수집한 이벤트나 전시회 이후.',
        '도메인 상태를 유지하기 위해 분기별 예방 정비 차원에서.',
      ],
    },
    { type: 'title', level: 3, text: '투자 수익률(ROI)에 미치는 영향' },
    {
      type: 'paragraph',
      html: '이메일 마케팅은 여전히 ROI가 가장 높은 채널 중 하나이지만, 메시지가 받은 편지함에 도달할 때만 유효합니다. <strong>이메일 클리너</strong>를 사용하면 소스부터 판매 깔대기를 최적화하고 메시지를 절대 보지 않을 연락처에 대해 플랫폼 비용을 지불하는 것을 중단할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '더블 옵트인 도입',
      html: '가짜 이메일을 피하는 가장 좋은 방법은 사용자가 받은 편지함으로 전송된 링크를 클릭하여 구독을 확인하도록 요구하는 것입니다. 이는 이메일이 존재하고 사용자가 해당 이메일에 액세스할 수 있음을 보장합니다.',
    },
  ],
};
