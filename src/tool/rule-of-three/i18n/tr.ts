import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Basit doğru orantı (içler dışlar çarpımı) nedir?',
    answer: "Üç bilinen değer ile bir bilinmeyen arasındaki orantı problemlerini çözmek için kullanılan matematiksel bir yöntemdir. Bir miktar arttığında diğerinin de aynı oranda artması nedeniyle 'doğru' orantı olarak adlandırılır.",
  },
  {
    question: 'Ters orantı ne zaman kullanılmalıdır?',
    answer: "Miktarlar ters orantılı olduğunda (biri arttığında diğeri azaldığında) kullanılır. Örneğin: 2 boyacı bir işi 5 saatte yapıyorsa, 4 boyacı daha kısa sürede yapacaktır. Mevcut hesaplayıcımız doğru orantıya odaklanmaktadır.",
  },
  {
    question: 'Profesyonel hesaplamalar için doğru sonuç verir mi?',
    answer: 'Evet. Hesaplayıcımız, ilaç dozaj ayarlamaları, grafik tasarım ölçekleri, ticari bütçeler ve tarif dönüşümleri için ideal olan yüksek hassasiyetli kayan nokta hassasiyeti kullanır.',
  },
  {
    question: 'Manuel olarak nasıl hesaplanır?',
    answer: 'Formül şöyledir: (B Değeri * C Değeri) / A Değeri = X. Yani, çapraz değerleri çarpar ve sonucu kalan değere bölersiniz.',
  },
];

const howToData = [
  {
    name: 'Temel ilişkiyi belirleyin',
    text: 'İlk orantıyı oluşturan iki bilinen değeri girin (örneğin 100km, 8 litreye eşittir).',
  },
  {
    name: 'Üçüncü değeri girin',
    text: 'Eşdeğerini bulmak istediğiniz yeni değeri yazın (örneğin 250km yol gideceksem...).',
  },
  {
    name: 'Sonucu alın',
    text: 'Sistem, herhangi bir düğmeye basmanıza gerek kalmadan bilinmeyen değeri (X) gerçek zamanlı olarak otomatik olarak hesaplayacaktır.',
  },
  {
    name: 'Kopyalayın veya sıfırlayın',
    text: 'Sonucu doğrudan pano belleğine kopyalayabilir veya yeni bir hesaplama yapmak için alanları temizleyebilirsiniz.',
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
  name: 'Orantı hesaplayıcı nasıl kullanılır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Basit Orantı (Dreisatz) Hesaplayıcı',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Matematiksel orantıları anında çözün. Miktarları, tarifleri, indirimleri ve dönüşümleri hesaplamak için kesin çözüm.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Şu varsa...',
  labelB: 'Şuna eşittir...',
  labelC: 'Ve şimdi şu varsa...',
  labelX: 'Sonuç (X)',
  hintA: 'Başlangıç miktarı',
  hintB: 'Bilinen değer',
  hintC: 'Yeni miktar',
  hintX: 'Hesaplanan değer',
  separatorIsTo: 'şuna oranı şudur',
  separatorWillBe: 'şöyle olacaktır',
  copyTitle: 'Sonucu kopyala',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'uc-kurali-hesaplayici',
  title: 'Basit Orantı (Dreisatz) Hesaplayıcı',
  description: 'Matematiksel orantıları anında çözün. Miktarları, tarifleri, indirimleri ve dönüşümleri hesaplamak için kesin çözüm.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Orantı (matematik) — Vikipedi', url: 'https://tr.wikipedia.org/wiki/Orant%C4%B1' },
    { name: 'Oran ve orantı — Khan Academy', url: 'https://tr.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Orantı (İçler Dışlar) ne için kullanılır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Basit doğru orantı, matematiğin „İsviçre çakısıdır“. Üç veri noktasının bilindiği ve dördüncüsünü aradığımız problemleri çözer. Eğer <strong>A ve B</strong> arasındaki ilişkiyi biliyorsanız ve yeni bir <strong>C</strong> değeriniz varsa, hesaplayıcı <strong>X</strong> değerini anında bulur.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Yemek Pişirme ve Tarifler',
          description: 'Eğer tarif 4 kişi için 500 gr un gerektiriyorsa, 7 kişi için ne kadar un gerekir?',
          points: ['(500 × 7) ÷ 4 = 875 gr'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Alışveriş ve Fiyatlar',
          description: 'Eğer 3 kutuluk bir paket 2,50 € ise, 10 kutu bana ne kadara mal olur?',
          points: ['(2,50 × 10) ÷ 3 = 8,33 €'],
        },
        {
          icon: 'mdi:car',
          title: 'Seyahat ve Mesafe',
          description: 'Eğer 60 km gitmek 45 dakikamı alıyorsa, 140 km gitmek ne kadar sürer?',
          points: ['(45 × 140) ÷ 60 = 105 dk'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Tasarım ve Ekranlar',
          description: 'Eğer görüntü 1920 piksel genişliğinde ise ve ben orantıyı koruyarak 800 piksele düşürmek istiyorsam...',
          points: ['(OrijinalYükseklik × 800) ÷ 1920 = YeniYükseklik'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Formül nasıl çalışır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Formül her zaman aynıdır: <strong>çapraz değerleri çarpın ve kalan değerle bölün</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Basit doğru orantı formülü',
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcıda: <strong>B</strong> değerini <strong>C</strong> değeriyle çarpıp <strong>A</strong> değerine bölüyoruz. Sonuç <strong>X</strong> olur.',
    },
    {
      type: 'title',
      text: 'Profesyonel ve günlük kullanımlar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Okul matematiğinin ötesinde, orantı her yerdedir: Eczacılıkta vücut ağırlığına göre dozaj hesaplamada, fotoğrafçılıkta pozlama sürelerini hesaplamada, finansta yüzde değişimlerini hesaplamada veya matbaacılıkta format boyutlarını ölçeklendirmede.',
    },
    {
      type: 'tip',
      title: 'Hassasiyet ipucu',
      html: 'Sonuç, 4 anlamlı ondalık basamağa kadar görüntülenir. Para veya tam ölçülerle çalışıyorsanız, bağlama göre yuvarlamayı unutmayın: Euro için 2 ondalık basamak, pikseller için tam sayılar.',
    },
  ],
};
