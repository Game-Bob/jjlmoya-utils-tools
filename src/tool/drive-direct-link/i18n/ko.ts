import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Google 드라이브 다운로드 변환기는 어떻게 사용하나요?',
    answer: 'Google 드라이브에 저장된 파일의 "공유" 링크를 복사합니다(공개 권한 설정이 필요함). 해당 링크를 도구의 텍스트 상자에 붙여넣고 "직통 링크 생성"을 클릭합니다. Google 미리보기 화면을 거치지 않고 바로 다운로드를 시작하는 새로운 URL이 생성됩니다.',
  },
  {
    question: '비공개 파일의 직통 다운로드 링크를 생성할 수 있나요?',
    answer: '파일이 비공개이거나 액세스가 제한된 경우 Google에서 권한이 있는 계정으로 로그인을 요청합니다. 가입 없이 즉시 다운로드하려면 파일 권한을 "링크가 있는 모든 사용자에게 공개"로 설정해야 합니다.',
  },
  {
    question: '여기에서 드라이브 링크를 변환하는 것이 안전한가요?',
    answer: '네. 변환 과정은 100% 브라우저 내에서 이루어지며 완전히 익명입니다. 도구는 귀하의 링크를 저장하거나 서버로 전송하지 않습니다. 다운로드용 URL을 만들기 위해 클라이언트 측에서 URL 구조를 분석할 뿐입니다.',
  },
  {
    question: '드라이브 파일 용량이 매우 크면 어떻게 되나요?',
    answer: '약 100MB를 초과하는 파일의 경우 Google 드라이브에서 즉각적인 직통 다운로드를 허용하지 않습니다. 대신 파일 크기 및 바이러스 검사 건너뛰기에 대한 경고 페이지가 표시됩니다. 이는 Google 서버의 고정된 정책이며 외부 도구로 우회할 수 없습니다.',
  },
];

const howToData = [
  { name: '공유 링크 복사', text: 'Google 드라이브에서 파일을 마우스 오른쪽 버튼으로 클릭하고 "링크 복사"를 선택합니다. 권한이 "링크가 있는 모든 사용자"로 설정되어 있는지 확인하세요.' },
  { name: '생성기에 링크 붙여넣기', text: '도구의 텍스트 필드에 전체 드라이브 URL을 입력하고 "직통 링크 생성" 버튼을 클릭합니다.' },
  { name: '생성된 링크 복사 및 사용', text: '새로운 직통 다운로드 링크를 복사하여 이메일, 웹사이트, 뉴스레터 등 클릭 시 즉시 다운로드가 필요한 곳에 사용하세요.' },
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
  name: 'Google 드라이브 직통 다운로드 링크 생성 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google 드라이브 직통 다운로드 링크 생성기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: 'Google 드라이브 공유 링크를 원클릭으로 직통 다운로드 링크로 변환하여 미리보기 페이지를 건너뜁니다. 무료 도구.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Google 드라이브 링크를 여기에 붙여넣으세요:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: '직통 링크 생성',
  resultLabel: '직통 다운로드 링크:',
  copyTitle: '클립보드에 복사',
  copyDone: '복사됨',
  testBtn: '다운로드 테스트',
  errorMsg: '입력하신 링크가 유효한 Google 드라이브 링크가 아닌 것 같습니다.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-direct-download-link',
  title: 'Google 드라이브 직통 다운로드 링크 생성기',
  description: 'Google 드라이브 공유 링크를 원클릭으로 직통 다운로드 링크로 쉽게 변환하여 미리보기를 건너뜁니다. 무료 도구.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'Google 드라이브에서 파일 다운로드(Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: 파일 다운로드', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Google 드라이브 공유 링크를 직통 다운로드 링크로 변환' },
    {
      type: 'paragraph',
      html: 'Google 드라이브를 통해 파일을 자주 공유한다면 미리보기 페이지가 얼마나 번거로운지 잘 아실 것입니다. 사용자가 링크를 클릭하면 다운로드 버튼을 직접 찾아야 하는 중간 화면이 표시됩니다. 저희의 <strong>Google 드라이브 직통 다운로드 링크 생성기</strong>는 공유 링크를 다운로드가 자동으로 시작되는 링크로 변환하여 이 문제를 해결해 드립니다.',
    },
    { type: 'title', level: 3, text: '왜 직통 다운로드 링크를 사용해야 하나요?' },
    {
      type: 'paragraph',
      html: '주요 이점은 훨씬 더 나은 사용자 경험입니다. PDF, 이미지 또는 소프트웨어 설치 프로그램을 공유할 때 사용자는 링크를 클릭하자마자 다운로드가 시작되기를 기대합니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>시간 절약:</strong> 추가 단계 없는 원클릭 다운로드.',
        '<strong>전문적인 느낌:</strong> 웹사이트의 다운로드 버튼, 뉴스레터 또는 고객 이메일에 이상적입니다.',
        '<strong>이탈 피드백 감소:</strong> 기술에 익숙하지 않은 사용자는 드라이브 미리보기 화면에서 당황하거나 다운로드 방법을 모를 수 있습니다.',
        '<strong>HTML 지원:</strong> 웹 페이지의 <code>href</code> 또는 <code>src</code> 속성에 바로 사용할 수 있습니다.',
      ],
    },
    { type: 'title', level: 3, text: '직통 링크 생성기는 어떻게 작동하나요?' },
    {
      type: 'paragraph',
      html: '모든 처리는 100% 브라우저 내에서 이루어집니다. Google 드라이브 공유 링크에는 고유한 파일 ID가 포함되어 있습니다. 도구는 이 ID를 추출하고 Google 고유의 내보내기 파라미터를 사용하여 새 URL을 구축합니다: <code>https://drive.google.com/uc?export=download&amp;id=귀하의_ID</code>',
    },
    {
      type: 'tip',
      title: '대용량 파일 주의 사항',
      html: '약 100MB를 초과하는 파일의 경우 다운로드 시작 전에 Google 드라이브에서 바이러스 검사 경고 페이지를 표시합니다. 이는 Google 서버의 고정된 정책이며 외부 도구로 우회할 수 없습니다.',
    },
    { type: 'title', level: 3, text: '개인 정보 보호 및 보안 보장' },
    {
      type: 'paragraph',
      html: '이 도구는 귀하의 개인 정보를 전적으로 존중합니다. 모든 링크 변환은 귀하의 장치에서 클라이언트 측 자바스크립트를 통해 수행됩니다. 링크, 파일 ID 또는 개인 정보가 외부 서버에 전송되지 않습니다.',
    },
  ],
};
