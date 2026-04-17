import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Mors alfabesinde SOS imdat sinyali nedir?',
    answer: "Sinyal '... --- ...' şeklindedir (üç nokta, üç çizgi, üç nokta). Acil bir durumu belirtmek için harfler arasında boşluk bırakılmadan sürekli olarak iletilir.",
  },
  {
    question: 'Fener neden tarayıcımda çalışmıyor?',
    answer: 'Feneri etkinleştirmek tarayıcının kamera izinlerine sahip olmasını gerektirir. Bazı mobil tarayıcılar veya eski masaüstü sürümleri gizlilik nedenleriyle bu API\'yi desteklemez.',
  },
  {
    question: 'Ekran SOS sinyali görünür mü?',
    answer: 'Evet, tam karanlık koşullarda, Mors alfabesinde yanıp sönen beyaz bir ekranın maksimum parlaklığı birkaç yüz metre öteden görülebilir; bu da fenerin arızalanması durumunda yararlı bir alternatiftir.',
  },
  {
    question: 'Uluslararası Mors alfabesi nedir?',
    answer: 'Harfleri ve sayıları temsil etmek için kısa (nokta) ve uzun (çizgi) sinyal dizilerini kullanan, radyo iletişimleri ve optik sinyaller için ITU tarafından standartlaştırılmış bir iletişim sistemidir.',
  },
];

const howToData = [
  {
    name: 'Mesajı yazın',
    text: "İletmek istediğiniz metni girin veya acil durumlar için önceden yapılandırılmış 'SOS' düğmesini kullanın.",
  },
  {
    name: 'Hızı yapılandırın',
    text: 'Görünürlüğe bağlı olarak sinyali daha hızlı veya daha yavaş hale getirmek için WPM\'yi (dakika başına kelime) ayarlayın.',
  },
  {
    name: 'Işık kaynağını seçin',
    text: 'Daha güçlü bir sinyal için tam ekran yanıp sönmeyi etkinleştirin veya kamera fenerine erişime izin verin.',
  },
  {
    name: 'İletimi başlatın',
    text: 'Sistemin metni Mors standardını izleyen otomatik görsel darbelere dönüştürmesi için İlet\'e basın.',
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
  name: 'Mesaj iletmek için Mors feneri nasıl kullanılır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Mors Feneri: Taktik SOS Vericisi',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Cihazınızı bir Mors iletim istasyonuna dönüştürün. Flaşı ve ekranı acil durum ışık sinyalleri ve taktik iletişim olarak kullanın.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'İletilecek Mesaj',
  placeholder: 'Mesajınızı buraya yazın (SOS, MERHABA, YARDIM)...',
  btnTransmit: 'İlet',
  btnSosLoop: 'SOS Döngüsü',
  btnStop: 'Durdur',
  labelTorch: 'Flaş/Fener',
  statusStandby: 'BEKLEMEDE',
  statusTransmitting: 'İLETİLİYOR',
  statusStopping: 'DURDURULUYOR...',
  statusWaiting: 'BEKLİYOR',
  statusReady: 'DONANIM HAZIR',
  statusNoTorch: 'FENER YOK',
  statusNoPermission: 'İZİN YOK',
  statusNotSupported: 'DESTEKLENMİYOR',
  statusReqHttps: 'HTTPS GEREKLİ',
  statusSending: 'GÖNDERİLİYOR:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'mors-feneri',
  title: 'Mors Feneri: Taktik SOS Vericisi',
  description: 'Cihazınızı bir Mors iletim istasyonuna dönüştürün. Flaşı ve ekranı acil durum ışık sinyalleri ve taktik iletişim olarak kullanın.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Uluslararası Mors Alfabesi', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Mors Alfabesi — Vikipedi', url: 'https://tr.wikipedia.org/wiki/Mors_alfabesi' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Işığın Dili',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, cihazınızı kilometrelerce öteden görülebilen mesajlar iletebilen bir optik sinyal fenerine dönüştürür. Uluslararası Mors Alfabesi standardını kullanarak, ışık darbeleri (fener ve ekran) aracılığıyla sessiz veya acil durum iletişimi sağlar.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Evrensel Bir Standart',
          description: '1830 yılında Samuel Morse tarafından geliştirilen bu noktalardan ve çizgilerden oluşan ikili sistem, telekomünikasyonda devrim yaratmıştır. Basitliği onu son derece sağlam kılar: Ses, radyo, elektrik veya ışık yoluyla iletilebilir ve şiddetli parazit altında bile okunabilir kalır.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS Acil Durum Modu',
          description: "'SOS Döngüsü' düğmesi sürekli olarak ··· --- ··· dizisini iletir. Bu sinyal evrensel olarak bir yardım çağrısı olarak kabul edilir ve LED fenerin yüksek kontrastı sayesinde belirli koşullar altında gün ışığında bile çok uzak mesafelerden görülebilir.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 Standartı',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç, Uluslararası Telekomünikasyon Birliği tarafından tanımlanan uluslararası Mors alfabesinin <strong>düzenleyici zamanlamalarına</strong> kesinlikle uyar.',
    },
    {
      type: 'list',
      items: [
        '1 nokta = 1 zaman birimi',
        '1 çizgi = 3 zaman birimi',
        'Öğeler arasındaki boşluk = 1 birim',
        'Harfler arasındaki boşluk = 3 birim',
        'Kelimeler arasındaki boşluk = 7 birim',
      ],
    },
    {
      type: 'tip',
      title: 'Standart hız',
      html: 'Varsayılan hız, profesyonel bir iletim hızına karşılık gelen <strong>15 WPM</strong>\'dir (dakika başına kelime). 15 WPM\'de 1 birim = 80 ms.',
    },
  ],
};
