import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: '스페인의 저배출 구역(ZBE)에 라벨 없는 차량을 운전하고 들어가면 어떻게 되나요?',
    answer: '환경 라벨이 없고 특별 면제 대상이 아닌 차량으로 스페인 주요 도시의 ZBE에 진입할 경우, 중대한 위반으로 간주되어 보통 200유로의 과태료가 부과됩니다.',
  },
  {
    question: 'DGT 실물 스티커를 앞 유리에 부착해야 하나요?',
    answer: 'DGT(교통국)에서는 부착을 권장하지만, 미부착에 대한 과태료는 각 지방 자치 단체에서 정합니다. 마드리드에서는 의무 사항이며, 다른 도시에서는 자동 번호판 인식 카메라를 통해 단속이 이루어집니다.',
  },
  {
    question: '디젤 차량이 2006년 이전에 등록되었지만 기술 사양서에는 Euro 4라고 되어 있습니다. 라벨을 받을 수 있나요?',
    answer: '네, 가능합니다. 교통 당국이 보유한 차량 데이터가 등록 날짜만 반영하고 있는 경우, 공식 딜러를 통해 제조업체로부터 인증서를 요청하여 교통국에 제출함으로써 분류를 수정할 수 있습니다.',
  },
  {
    question: '2025년 스페인 자동차의 C 라벨(녹색)은 무엇을 의미하나요?',
    answer: '대부분의 ZBE에서 여전히 자유롭게 주행할 수 있지만, C 라벨은 노상 주차를 제한합니다. ZBE 구역 근처의 지하 주차장이나 공인 주차장을 이용해야 합니다.',
  },
];

const howToData = [
  { name: '차종 선택', text: '차량이 승용차/승합차, 오토바이 또는 대형 차량인지 선택하세요. 카테고리별로 스페인 교통 법규에 따른 분류 로직이 다릅니다.' },
  { name: '연료 또는 에너지 유형 선택', text: '전기, 플러그인 하이브리드, 일반 하이브리드, 가스, 가솔린 또는 디젤에 따라 라벨 결과가 달라집니다. 플러그인 하이브리드의 주행 거리 기준은 40km입니다.' },
  { name: '등록 연도 또는 Euro 규격 입력', text: '내연기관 차량의 경우 Euro 규격이 결정적인 요소입니다. 기술 사양서의 등록 날짜는 규격을 확인하는 신뢰할 수 있는 지표가 됩니다.' },
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
  name: '내 차량의 스페인 DGT 환경 라벨 확인 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '스페인 DGT 환경 라벨 시뮬레이터',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '차종, 연료 및 등록 연도를 기준으로 내 차량에 적용되는 스페인 DGT 환경 라벨을 확인하세요. 스페인 저배출 구역 대비를 위한 무료 도구입니다.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. 차종 선택',
  vehicleCar: '승용차 / 승합차',
  vehicleMoto: '오토바이',
  vehicleHeavy: '트럭 / 버스',
  errVehicle: '차종을 선택해 주세요',

  step2Label: '2. 연료 또는 에너지',
  fuelElectric: '100% 전기 / 연료 전지',
  fuelPhevHigh: '플러그인 하이브리드 (>40 km)',
  fuelPhevLow: '플러그인 하이브리드 (<40 km)',
  fuelHybridGas: '하이브리드 (HEV) 또는 가스',
  fuelGasoline: '가솔린',
  fuelDiesel: '디젤',
  errFuel: '연료 또는 에너지 유형을 선택해 주세요',

  step3Label: '3. Euro 규격 또는 등록 연도',
  yearPre2000: '2000년 이전',
  year20002005: '2000년 ~ 2005년',
  year20062013: '2006년 ~ 2013년',
  yearPost2014: '2014년 이후',
  errYear: '등록 시기를 선택해 주세요',
  helpText: '확실하지 않은 경우, 기술 사양서에 기재된 Euro 규격이 등록 날짜보다 우선합니다.',

  submitBtn: '라벨 확인하기',

  resultTitle: '할당된 라벨',

  badge0Label: '제로 에미션 라벨',
  badge0Letter: '0',
  badge0Sub: '에미션',
  badge0Desc: '최고 효율 차량입니다. 스페인의 저배출 구역(ZBE)에 제한 없이 진입할 수 있으며 광범위한 세금 감면 혜택을 누립니다.',

  badgeEcoLabel: 'ECO 라벨',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: '하이브리드 및 가스 차량과 같은 저배출 차량입니다. 대부분의 ZBE 구역 진입이 가능하며 규제 주차 구역에서 할인을 받을 수 있습니다.',

  badgeCLabel: 'C 라벨',
  badgeCLetter: 'C',
  badgeCDesc: '높은 Euro 규격을 갖춘 최근 내연기관 차량입니다. 자유롭게 통행할 수 있지만 특정 ZBE 구역 내 노상 주차 제한이 적용됩니다.',

  badgeBLabel: 'B 라벨',
  badgeBLetter: 'B',
  badgeBDesc: '비교적 오래된 내연기관 차량입니다. 스페인 도시 내 진입 및 주차에 대해 더 엄격한 제한을 받습니다.',

  badgeALabel: '라벨 없음',
  badgeALetter: '없음',
  badgeASub: '라벨',
  badgeADesc: '라벨 권한이 없는 고오염 차량입니다. 스페인 전역의 도심 및 저배출 구역에서 단계적으로 제외되고 있습니다.',

  warningText: '오류가 있을 수 있으므로 반드시 DGT 공식 웹사이트에서 차량 번호판을 사용하여 결과를 최종 확인하시기 바랍니다.',
  resetBtn: '다시 확인',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'environmental-badge-simulator-spain',
  title: '스페인 환경 라벨 시뮬레이터',
  description: '스페인 저배출 구역(ZBE) 진입을 위해 승용차, 오토바이 또는 승합차에 적용되는 스페인 DGT 환경 라벨을 무료로 확인하세요.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '참고 문헌',
  bibliography: [
    { name: '기후 변화 및 교통 규제에 관한 DGT 규정 (스페인어)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: '스페인 기후 변화법 및 저배출 구역 (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '스페인 DGT 환경 라벨이란 무엇인가요?' },
    {
      type: 'paragraph',
      html: '<strong>스페인 DGT 환경 라벨</strong>(distintivo ambiental)은 오염이 적은 차량을 우대하기 위해 스페인에서 도입된 차량 분류 시스템입니다. 주로 인구 5만 명 이상의 스페인 도시에서 저배출 구역(ZBE) 진입을 관리하는 데 사용됩니다.',
    },
    { type: 'title', level: 3, text: '라벨 유형 및 스페인에서의 혜택' },
    {
      type: 'list',
      items: [
        '<strong>제로 에미션 라벨:</strong> 순수 전기차, 전기 주행 거리 40km 이상의 플러그인 하이브리드 및 수소 연료 전지 차량이 대상입니다. ZBE 무제한 진입 및 세금 감면 혜택이 있습니다.',
        '<strong>ECO 라벨:</strong> 일반 하이브리드, LPG, CNG 및 주행 거리 40km 미만의 플러그인 하이브리드가 대상입니다. 진입 제한 구역에 대한 폭넓은 접근과 주차 할인을 제공합니다.',
        '<strong>C 라벨:</strong> Euro 4 이상의 가솔린차, Euro 6 이상의 디젤차. 주행은 자유롭지만 ZBE 근처 노상 주차 제한이 적용됩니다.',
        '<strong>B 라벨:</strong> Euro 3 가솔린차, Euro 4 또는 5 디젤차. 제한이 강화되고 있으며 일시적인 진입 금지 대상이 될 수 있습니다.',
        '<strong>라벨 없음 (카테고리 A):</strong> 오래되었거나 오염도가 높은 차량으로, 2024년부터 스페인 도심에서 단계적으로 퇴출되고 있습니다.',
      ],
    },
    { type: 'title', level: 3, text: '스페인 주요 도시의 저배출 구역' },
    {
      type: 'paragraph',
      html: 'ZBE 도입은 특정 인구 기준을 넘는 지자체에 설치를 의무화한 스페인 기후 변화법에 따른 것입니다. 대표적인 예로 <em>Madrid 360</em>과 바르셀로나의 <em>Superilles</em>가 있으며, 최소 B 라벨 없이 진입할 경우 번호판 인식 카메라를 통해 자동으로 과태료가 부과될 수 있습니다.',
    },
    {
      type: 'tip',
      title: '스페인에서 실물 스티커를 받는 방법',
      html: '시뮬레이터를 통해 라벨 권한을 확인했다면, 전국의 Correos(우체국), 지정 정비소 또는 교통국에서 약 5유로에 실물 스티커를 구매할 수 있습니다. 차량 등록 서류를 지참하세요.',
    },
  ],
};
