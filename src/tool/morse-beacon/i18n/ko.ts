import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: '모스 부호의 SOS 구조 신호는 무엇인가요?',
    answer: "신호는 '... --- ...' (단점 3개, 장점 3개, 단점 3개)입니다. 즉각적인 비상 상황을 알리기 위해 글자 사이에 공백 없이 연속적으로 전송됩니다.",
  },
  {
    question: '브라우저에서 플래시라이트가 작동하지 않는 이유는 무엇인가요?',
    answer: '플래시라이트를 활성화하려면 브라우저의 카메라 권한이 필요합니다. 일부 모바일 브라우저나 이전 데스크톱 버전은 개인 정보 보호를 이유로 이 API를 지원하지 않습니다.',
  },
  {
    question: '화면 SOS 신호를 볼 수 있나요?',
    answer: '네, 완전한 어둠 속에서는 모스 부호로 깜박이는 흰색 화면의 최대 밝기를 수백 미터 밖에서도 볼 수 있어, 플래시라이트가 작동하지 않을 때 유용한 대안이 됩니다.',
  },
  {
    question: '국제 모스 부호란 무엇인가요?',
    answer: '글자와 숫자를 나타내기 위해 짧은(단점) 신호와 긴(장점) 신호의 시퀀스를 사용하는 통신 시스템으로, 무선 통신 및 광신호를 위해 ITU에서 표준화했습니다.',
  },
];

const howToData = [
  {
    name: '메시지 작성',
    text: "전송하려는 텍스트를 입력하거나 비상시 미리 설정된 'SOS' 버튼을 사용하세요.",
  },
  {
    name: '속도 설정',
    text: '가시성에 따라 신호를 더 빠르게 또는 더 느리게 만들도록 WPM(분당 단어 수)을 조정하세요.',
  },
  {
    name: '광원 선택',
    text: '더 강한 신호를 위해 전체 화면 깜박임을 활성화하거나 카메라 플래시라이트 액세스를 허용하세요.',
  },
  {
    name: '전송 시작',
    text: "전송 버튼을 누르면 시스템이 텍스트를 모스 표준에 따른 자동 시각 펄스로 변환합니다.",
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
  name: '메시지 전송을 위한 모스 비콘 사용법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '모스 비콘: 전술 SOS 전송기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '장치를 모스 부호 전송국으로 변환하세요. 플래시와 화면을 비상 조명 신호 및 전술 통신용으로 사용하세요.',
};

const ui: MorseBeaconUI = {
  labelMessage: '전송할 메시지',
  placeholder: '메시지를 입력하세요 (SOS, HELLO, HELP)...',
  btnTransmit: '전송',
  btnSosLoop: 'SOS 반복',
  btnStop: '중지',
  labelTorch: '플래시/전등',
  statusStandby: '대기 중',
  statusTransmitting: '전송 중',
  statusStopping: '중지 중...',
  statusWaiting: '대기 중',
  statusReady: '하드웨어 준비 완료',
  statusNoTorch: '플래시 없음',
  statusNoPermission: '권한 없음',
  statusNotSupported: '지원되지 않음',
  statusReqHttps: 'HTTPS 필요',
  statusSending: '전송 중:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morse-beacon',
  title: '모스 비콘: 전술 SOS 전송기',
  description: '장치를 모스 부호 전송국으로 변환하세요. 플래시와 화면을 비상 조명 신호 및 전술 통신용으로 사용하세요.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: 'ITU-R M.1677-1 — 국제 모스 부호', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: '모스 부호 — 위키백과', url: 'https://ko.wikipedia.org/wiki/%EB%AA%A8%EC%8A%A4_%EB%B6%80%ED%98%B8' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '빛의 언어',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 여러분의 장치를 수 킬로미터 밖에서도 볼 수 있는 메시지를 전송할 수 있는 광학 신호 비콘으로 변환합니다. 국제 모스 부호 표준을 사용하여 광 펄스(플래시라이트 및 화면)를 통해 조용하거나 비상시 통신을 가능하게 합니다.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: '보편적인 표준',
          description: '1830년 사무엘 모스가 개발한 이 이진화된 점과 선의 시스템은 통신 분야에 혁명을 일으켰습니다. 그 단순함 덕분에 매우 견고하며 소리, 무선, 전기 또는 빛을 통해 전송될 수 있고 심한 간섭 상황에서도 해독이 가능합니다.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS 비상 모드',
          description: "'SOS 반복' 버튼은 ··· --- ··· 시퀀스를 지속적으로 전송합니다. 이 신호는 보편적으로 구조 요청으로 인식되며, LED 플래시라이트의 높은 대비 덕분에 특정 조건에서는 낮에도 먼 거리에서 가시적입니다.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 표준',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 국제 전기 통신 연합(ITU)에서 정의한 국제 모스 부호의 <strong>규정 타이밍</strong>을 엄격히 준수합니다.',
    },
    {
      type: 'list',
      items: [
        '단점 1개 = 1 시간 단위',
        '장점 1개 = 3 시간 단위',
        '요소 간 간격 = 1 단위',
        '글자 간 간격 = 3 단위',
        '단어 간 간격 = 7 단위',
      ],
    },
    {
      type: 'tip',
      title: '표준 속도',
      html: '기본 속도는 <strong>15 WPM</strong>(분당 단어 수)이며, 이는 전문적인 전송 속도에 해당합니다. 15 WPM에서 1 단위 = 80ms입니다.',
    },
  ],
};
