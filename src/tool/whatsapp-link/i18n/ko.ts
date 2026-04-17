import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'WhatsApp 링크를 어떻게 생성하나요?',
    answer: '링크를 만들려면 국가 코드를 포함한 휴대폰 번호를 입력하세요. 예를 들어 한국의 경우 82를 먼저 입력한 다음 나머지 번호를 입력합니다. 선택 사항으로 메시지를 추가할 수 있으며, 도구가 복사 가능한 wa.me 링크를 생성합니다.',
  },
  {
    question: '긴 미리 채워진 메시지를 추가할 수 있나요?',
    answer: '네. 누군가 링크를 클릭했을 때 채팅창에 자동으로 나타날 메시지를 첨부할 수 있습니다. 도구는 URL 인코딩을 사용하여 URL을 깨뜨리지 않고 공백, 악센트 및 이모티콘을 지원합니다.',
  },
  {
    question: '생성된 QR 코드는 어떻게 사용하나요?',
    answer: '유효한 링크가 생성되면 "QR 보이기" 버튼이 나타납니다. QR 코드에는 링크 URL이 포함되어 있습니다. 마우스 오른쪽 버튼으로 클릭하고 "이미지를 다른 이름으로 저장"을 선택하여 명함, 포스터 또는 소셜 미디어용 고해상도 파일을 다운로드하세요.',
  },
  {
    question: '내 데이터는 어디로 가나요?',
    answer: '생성기는 모든 과정을 브라우저에서 직접 클라이언트 측에서 처리합니다. 귀하의 전화번호와 미리 채워진 메시지는 서버로 전송되거나 데이터베이스에 저장되지 않습니다.',
  },
];

const howToData = [
  { name: '접두사 선택', text: '드롭다운에서 국가 코드를 선택하고 접두사를 제외한 전화번호를 입력하세요.' },
  { name: '메시지 추가(선택 사항)', text: '누군가 링크를 열고 전송을 눌렀을 때 나타날 미리 채워진 텍스트를 작성하세요.' },
  { name: '링크 생성', text: '녹색 버튼을 눌러 공유 준비가 된 wa.me 직통 URL을 받으세요.' },
  { name: 'QR 공유 또는 인쇄', text: '링크를 복사하거나 채팅을 테스트하거나 명함 및 인쇄용 QR 코드를 다운로드하세요.' },
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
  name: 'WhatsApp 직통 링크 만드는 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp 링크 생성기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: '미리 채워진 메시지와 QR 코드가 포함된 WhatsApp 직통 채팅 링크를 만드세요. 무료 도구, 가입 불필요, 100% 개인 정보 보호.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp 전화번호',
  phonePlaceholder: '010-0000-0000',
  messageLabel: '시작 메시지 (선택 사항)',
  messagePlaceholder: '안녕하세요! 서비스에 대한 자세한 정보를 알고 싶습니다...',
  generateBtn: '링크 생성',
  resultLabel: '직통 링크가 생성되었습니다',
  copyTitle: '클립보드에 복사',
  copyDone: '복사 완료!',
  testBtn: '채팅 테스트',
  qrShow: 'QR 보이기',
  qrHide: 'QR 숨기기',
  errorPhone: '유효한 전화번호를 입력해 주세요.',
  defaultPrefix: '82',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-link-generator',
  title: 'QR 포함 WhatsApp 링크 생성기',
  description: '미리 채워진 메시지와 QR 코드가 포함된 WhatsApp 직통 채팅 링크를 만드세요. 무료 도구, 가입 불필요, 100% 개인 정보 보호.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: '클릭해서 채팅하기 기능 사용 방법 — WhatsApp 고객 센터', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API 클릭해서 채팅하기: 파라미터 및 형식 — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'WhatsApp용 짧은 직통 링크 생성' },
    {
      type: 'paragraph',
      html: '고객이나 팔로워가 번호를 미리 저장하지 않고도 WhatsApp으로 문의하기를 원하시나요? 당사의 <strong>wa.me 링크 생성기</strong>는 사전 절차 없이 즉시 대화창을 여는 링크를 생성하여 이 문제를 해결해 드립니다.',
    },
    { type: 'title', level: 3, text: 'wa.me WhatsApp 단축 링크는 어디에 쓰이나요?' },
    {
      type: 'paragraph',
      html: 'WhatsApp은 "클릭해서 채팅하기"라는 API를 제공합니다. 특별한 URL을 사용하면 모바일과 WhatsApp 웹 모두에서 연락처로 추가할 필요 없이 누구나 귀하와 대화를 시작할 수 있습니다.',
    },
    {
      type: 'list',
      items: [
        '<strong>더 많은 전환:</strong> 상점에 "WhatsApp으로 문의" 버튼을 두면 고객의 번거로움이 줄어들어 매출이 증대됩니다.',
        '<strong>미리 채워진 메시지:</strong> 사용자는 "전송"만 누르면 됩니다. 예: "안녕하세요! 인스타그램 보고 연락드렸어요. 혜택을 받고 싶습니다."',
        '<strong>자동 QR 코드:</strong> 명함, 포스터 또는 SNS 게시물용으로 QR을 다운로드하세요.',
      ],
    },
    { type: 'title', level: 3, text: '링크 생성은 어떻게 작동하나요?' },
    {
      type: 'paragraph',
      html: '이 도구는 국제 전화 접두사와 정리된 전화번호를 연결한 다음, <em>URL 인코딩</em>을 통해 변환된 메시지 파라미터와 함께 공식 WhatsApp API에 추가합니다.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL 형식',
      code: 'https://wa.me/82XXXXXXXXX\nhttps://wa.me/82XXXXXXXXX?text=%C2%A1Annyeonghaseyo!%20...',
    },
    { type: 'title', level: 3, text: '보장된 개인 정보 보호 및 로컬 처리' },
    {
      type: 'paragraph',
      html: '모든 링크 생성 과정은 자바스크립트를 통해 귀하의 브라우저에서 수행됩니다. 입력한 전화번호나 메시지를 서버에 기록, 저장 또는 읽지 않습니다. 귀하의 개인 정보는 완벽하게 보호됩니다.',
    },
    {
      type: 'tip',
      title: '국제 전화 접두사의 중요성',
      html: 'WhatsApp이 메시지를 올바르게 전달하려면 국가 코드가 필수입니다. 한국의 경우 <strong>82</strong>이며, 공백이나 + 기호 없이 휴대폰 번호를 입력해야 합니다. 최종 결과는 예를 들어 <code>8210XXXXXXXX</code>가 됩니다.',
    },
  ],
};
