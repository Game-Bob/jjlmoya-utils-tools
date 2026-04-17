import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: '어떤 최적화 알고리즘을 사용하나요?',
    answer: '순회 외판원 문제(TSP)의 고급 해결 방식을 사용합니다. 알고리즘이 모든 경유지를 분석하고 이동 거리 총합을 최소화하는 순차적 순서를 결정하여 시간과 연료를 절약합니다.',
  },
  {
    question: '내 위치를 공유해도 안전한가요?',
    answer: '네. 이 도구는 브라우저 내에서 로컬로 지리 데이터를 처리합니다. 사용자의 경로, 정거장 또는 위치 기록을 당사 서버에 저장하지 않습니다.',
  },
  {
    question: '한 번에 몇 개의 정거장을 최적화할 수 있나요?',
    answer: '무료 버전에서는 최대 10개의 정거장을 즉시 최적화할 수 있습니다. 대규모 전문 경로의 경우에도 브라우저가 멈추지 않고 높은 성능을 유지하도록 시스템이 최적화되어 있습니다.',
  },
  {
    question: '최적화된 경로를 Google 지도에서 바로 사용할 수 있나요?',
    answer: '물론입니다! 경로 최적화가 완료되면 Google 지도와 호환되는 탐색 링크가 생성되어 휴대폰에서 바로 길 안내를 시작할 수 있습니다.',
  },
];

const howToData = [
  {
    name: '출발지 추가',
    text: '출발지 주소를 입력하거나 지도 위를 클릭하여 경로의 시작 지점을 설정하세요.',
  },
  {
    name: '목적지 정거장 입력',
    text: '방문해야 할 모든 장소를 추가하세요. 시스템이 자동으로 순서를 재배치하므로 입력 순서는 상관없습니다.',
  },
  {
    name: '순서 최적화',
    text: '최적화 버튼을 클릭하세요. 알고리즘이 모든 정거장을 거치는 가장 효율적인 순서를 수초 내에 계산합니다.',
  },
  {
    name: '내비게이터에서 열기',
    text: '탐색 버튼을 사용하여 최적화된 경로를 즐겨 찾는 지도 애플리케이션으로 가져오세요.',
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
  name: '여러 정거장이 포함된 경로를 최적화하는 방법',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '최적 경로 계산기',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: '배달 또는 여행 경로를 무료로 최적화하세요. 정거장을 자동으로 재배치하여 가장 짧고 효율적인 경로를 찾아줍니다.',
};

const ui: RoutesUI = {
  titleSidebar: '경로 지점',
  descriptionSidebar: '정거장을 추가하려면 지도를 클릭하세요. 첫 번째 지점이 출발지입니다.',
  emptyState: '추가된 지점 없음',
  btnOptimize: '최적 경로 계산',
  btnCalculating: '계산 중...',
  btnClear: '모두 삭제',
  labelDistance: '예상 총 거리',
  labelDeleteAria: '삭제',
  labelLoadingAddress: '주소 불러오는 중...',
  labelPoint: '지점',
  errorMinPoints: '경로를 계산하려면 최소 두 개의 지점이 필요합니다.',
  errorCalculate: '경로 계산 중 오류가 발생했습니다.',
  errorAddress: '주소를 가져오는 중 오류가 발생했습니다',
  errorAddressName: '알 수 없는 지점',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'optimal-routes',
  title: '무료 최적 경로 계산기',
  description: '배달 또는 여행 경로를 무료로 최적화하세요. 당사의 도구는 가장 짧고 효율적인 경로를 찾기 위해 정거장을 자동으로 재배치합니다.',
  ui,
  faqTitle: '자주 묻는 질문',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: '기술 및 출처',
  bibliography: [
    { name: 'Leaflet — 오픈 소스 대화형 지도 라이브러리', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — 공개 지도 데이터', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager 지도 타일', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — 역 지오코딩 서비스 (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — 오픈 소스 라우팅 엔진 (경로 최적화)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '스마트 경로 최적화 도구: 배송 및 여행을 위한 TSP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>온라인 경로 최적화 도구</strong>는 고전적인 <em>순회 외판원 문제(TSP)</em>를 해결하는 무료 도구입니다. 모든 정거장을 원하는 순서대로 추가하면 알고리즘이 총 이동 거리를 최소화하기 위해 가장 효율적인 순서를 자동으로 계산합니다.',
    },
    {
      type: 'title',
      text: '경로 최적화 알고리즘은 어떻게 작동하나요?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 도구는 OpenStreetMap 데이터를 기반으로 하는 고성능 라우팅 엔진인 <strong>OSRM (Open Source Routing Machine)</strong> API를 사용합니다. 과정은 다음과 같습니다. 먼저 모든 지점 간의 최적 순환 경로를 계산한 다음(TSP 알고리즘), 이를 편도 선형 경로로 변환하기 위한 최적의 절단 지점을 결정하고, 마지막으로 예상 총 거리와 함께 지도의 경로를 그립니다.',
    },
    {
      type: 'title',
      text: '활용 사례: 배송, 영업 사원 및 여행',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '이 경로 최적화 도구는 매일 여러 건의 배송을 정리해야 하는 <strong>개인 배송 기사</strong>, 특정 지역의 고객을 방문하는 <strong>현장 영업 사원</strong> 또는 가장 효율적인 순서로 여러 도시나 명소를 방문하려는 <strong>여행객</strong>에게 이상적입니다. 모든 정보는 브라우저 내에서 처리되므로 사용자의 데이터가 특정 서버와 공유되지 않습니다.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: '알고리즘', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: '라우팅 엔진', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: '개인정보 보호', icon: 'mdi:lock-check' },
        { value: '무료', label: '비용', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: '개인정보 보호 및 로컬 처리',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '모든 도구 로직은 브라우저에서 직접 실행됩니다. 사용자의 정거장 좌표는 경로 계산 및 주소 수집을 위해 공개 OSRM 및 Nominatim API로만 전송될 뿐, <strong>특정 서버에 저장되지 않습니다</strong>. 민감한 정보가 포함된 비즈니스 경로 계획에도 안전하게 사용할 수 있습니다.',
    },
    {
      type: 'tip',
      title: '사용 팁',
      html: '<strong>최상의 결과를 얻으려면</strong> 주소를 검색하는 대신 지도를 직접 클릭하여 정거장을 추가하세요. 마커는 드래그 가능하므로 배치 후 각 지점의 정확한 위치를 조정할 수 있습니다.',
    },
  ],
};
