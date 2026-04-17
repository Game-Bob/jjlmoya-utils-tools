import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: '온라인 비밀번호 생성기를 사용해도 안전한가요?',
    answer: "네, 생성기가 클라이언트 사이드에서 작동하는 한 안전합니다. 당사의 도구는 암호학적으로 안전한 알고리즘을 사용하여 사용자의 브라우저 내에서 로컬로 비밀번호를 생성합니다. 비밀번호는 인터넷을 통해 전송되거나 서버에 저장되지 않습니다.",
  },
  {
    question: "무엇이 비밀번호를 '해킹 방지' 수준으로 만드나요?",
    answer: '핵심은 엔트로피(무작위성)입니다. 대문자, 소문자, 숫자 및 특수 기호를 혼합하고 최소 12-16자 이상의 길이를 유지하면 현재 기술력으로는 무차별 대입 공격(Brute-force)이 사실상 불가능해집니다.',
  },
  {
    question: '흔한 단어나 날짜를 피해야 하는 이유는 무엇인가요?',
    answer: '해커들은 초당 수백만 개의 단어, 이름 및 날짜 조합을 테스트하는 사전 공격을 사용합니다. 순수하게 무작위인 비밀번호는 언어적 패턴을 따르지 않으므로 훨씬 더 안전합니다.',
  },
  {
    question: '모든 비밀번호를 외워야 하나요?',
    answer: '권장하지 않습니다. 이상적인 방법은 비밀번호 관리자(Bitwarden, 1Password 또는 브라우저 내장 도구 등)를 사용하여 길고 무작위인 비밀번호를 저장하는 것입니다. 이렇게 하면 기억해야 할 강력한 마스터 비밀번호는 단 하나뿐입니다.',
  },
];

const howToData = [
  {
    name: '길이 설정',
    text: '슬라이더를 조정하여 비밀번호의 길이를 선택하세요. 현재 보안 표준은 최소 12자 이상을 권장합니다.',
  },
  {
    name: '복잡성 선택',
    text: '비밀번호를 사용할 사이트의 요구 사항에 따라 대문자, 숫자 및 기호 옵션을 선택하세요.',
  },
  {
    name: '비밀번호 생성',
    text: '생성 버튼을 클릭하세요. 클릭할 때마다 암호화 알고리즘을 기반으로 한 고유하고 높은 엔트로피의 조합이 생성됩니다.',
  },
  {
    name: '클릭 한 번으로 복사',
    text: '복사 버튼을 사용하여 비밀번호를 보안 방식으로 클립보드에 직접 전송하세요.',
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
  name: '안전한 비밀번호 생성기 사용법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '안전한 무작위 비밀번호 생성기',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '강력하고 해킹에 강한 비밀번호를 즉시 생성하세요. 무작위의 안전한 키를 생성하기 위한 무료 사이버 보안 도구입니다.',
};

const ui: PasswordGeneratorUI = {
  generating: '생성 중...',
  labelSecurity: '강도',
  labelLength: '길이',
  strengthWeak: '약함',
  strengthFair: '적당함',
  strengthGood: '좋음',
  strengthStrong: '강함',
  strengthUnbreakable: '강철 보안',
  optionUppercase: '대문자',
  optionLowercase: '소문자',
  optionNumbers: '숫자',
  optionSymbols: '기호',
  copyTitle: '복사',
  regenerateTitle: '새로 생성',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'password-generator',
  title: '안전한 무작위 비밀번호 생성기',
  description: '강력하고 해킹에 강한 비밀번호를 즉시 생성하세요. 무작위의 안전한 키를 생성하기 위한 무료 사이버 보안 도구입니다.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: 디지털 ID 가이드라인', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: '비밀번호 — 위키백과', url: 'https://ko.wikipedia.org/wiki/%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8' },
    { name: 'Have I Been Pwned — 비밀번호 유출 여부 확인', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '해킹 불가능한 비밀번호의 구조',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '비밀번호는 개인 데이터(금융, 의료, 사진 등)와 사이버 범죄자 사이의 유일한 장벽입니다. 하지만 평균적인 사용자는 여전히 "123456"이나 반려동물 이름과 같이 <strong>1초 미만</strong>에 뚫릴 수 있는 예측 가능한 패턴에 의존하고 있습니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: '레인보우 테이블의 위험성',
          description: '해커는 비밀번호를 하나씩 추측하지 않습니다. 그들은 흔히 쓰이는 비밀번호의 수백만 개 계산된 해시를 포함하는 거대한 데이터베이스(레인보우 테이블)를 사용합니다. 당신의 비밀번호가 사전에 있거나 유명한 문구라면, 이미 사용하기 전부터 유출된 것이나 다름없습니다.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: '해결책: 순수 엔트로피',
          description: '엔트로피는 무질서함이나 예측 불가능성을 측정합니다. 엔트로피(비트)가 높을수록 컴퓨터가 이를 해독하는 데 더 많은 시간이 걸립니다. 이 도구는 예측 가능한 Math.random() 대신 암호학적으로 안전한 난수를 생성하는 브라우저 API인 crypto.getRandomValues()를 사용합니다.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: '기본 사이버 보안 원칙',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: '복잡성보다 길이',
          description: '소문자로만 구성된 20자 비밀번호는 희귀한 기호가 포함된 8자 비밀번호보다 안전합니다. 수학적으로 한 글자가 추가될 때마다 해독 난이도는 기하급수적으로 증가합니다.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: '치환의 신화',
          description: '"a"를 "@"로 바꾸거나 "e"를 "3"으로 바꾸는 방식(Leetspeak)은 아무도 속이지 못합니다. 현대의 공격 사전은 이미 이러한 변형을 자동으로 포함하고 있습니다. 인식 가능한 단어 사용을 피하세요.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: '사이트별 고유 비밀번호',
          description: '이메일과 포럼에서 동일한 비밀번호를 사용 중인데 포럼이 해킹당하면, 해커는 이제 당신의 이메일에도 접근할 수 있게 됩니다. 비밀번호 관리자(Bitwarden 또는 1Password 등)를 사용하여 복잡한 비밀번호를 대신 기억하게 하세요.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: '개인 정보 보호 보장',
      html: '모든 생성 과정은 <strong>브라우저 내에서</strong> 이루어집니다. 비밀번호는 인터넷을 통해 전송되지 않으며 서버에 기록되지 않습니다. 소스 코드는 검증 가능합니다.',
    },
  ],
};
