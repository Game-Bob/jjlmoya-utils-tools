import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Metnin piksel genişliğini çevrimiçi olarak nasıl hesaplarım?',
    answer: 'Metninizi giriş kutusuna yapıştırın, yazı tipini ve boyutunu yapılandırın; araç, tam piksel genişliğini döndürmek için otomatik olarak tarayıcı Canvas API\'sini kullanacaktır.',
  },
  {
    question: 'Piksel genişliği neden yazı tipleri arasında değişir?',
    answer: "Çoğu yazı tipi orantılıdır, yani her karakterin farklı bir genişliği vardır. Örneğin, standart bir sans-serif yazı tipinde büyük 'M' harfi her zaman küçük 'i' harfinden daha geniştir.",
  },
  {
    question: 'Karakter ölçmekle piksel ölçmek aynı şey midir?',
    answer: 'Hayır. Karakter ölçmek size dizge uzunluğunu verirken, piksel ölçmek kapladığı görsel alanı verir. Bu, bir web tasarımında metnin kapsayıcısından taşmamasını sağlamak için çok önemlidir.',
  },
  {
    question: 'Herhangi bir Google Fonts yazı tipini kullanabilir miyim?',
    answer: 'Evet, yazı tipi işletim sisteminizde yüklü olduğu veya mevcut sayfada yüklendiği sürece araç boyutlarını doğru bir şekilde ölçecektir.',
  },
  {
    question: 'Özel metinleri veya kod parçacıklarını işlemek güvenli midir?',
    answer: 'Evet. Hesaplayıcı tamamen yerel olarak çalışır. Harici sunuculara hiçbir veri gönderilmez, projeleriniz için tam gizlilik garanti edilir.',
  },
];

const howToData = [
  { name: 'Metni girin', text: 'Ölçmek istediğiniz metni giriş alanına yazın veya yapıştırın.' },
  { name: 'Yazı tipini yapılandırın', text: 'Yazı tipi ailesini, piksel cinsinden boyutunu, ağırlığını ve italik olup olmadığını ayarlayın.' },
  { name: 'Sonucu okuyun', text: 'Piksel genişliği ve karakter sayısı gerçek zamanlı olarak güncellenir.' },
  { name: 'Değeri kopyalayın', text: 'Piksel sayısını panoya kaydetmek için "Genişliği Kopyala"ya tıklayın.' },
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
  name: 'Metin genişliği piksel cinsinden nasıl ölçülür?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Metin Piksel Genişliği Hesaplayıcı',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Herhangi bir metnin yazı tipine, boyutuna ve stiline göre piksel genişliğini doğru bir şekilde hesaplayın.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Ölçülecek metin',
  textPlaceholder: 'Ölçmek istediğiniz metni buraya yazın veya yapıştırın...',
  defaultText: 'Merhaba Dünya',
  fontLabel: 'Yazı tipi ailesi',
  sizeLabel: 'Boyut (px)',
  weightLabel: 'Ağırlık',
  italicLabel: 'İtalik',
  widthLabel: 'Genişlik (piksel)',
  charsLabel: 'Karakter',
  previewLabel: 'Görsel önizleme',
  copyBtn: 'Genişliği Kopyala',
  resetBtn: 'Sıfırla',
  copyDone: 'Genişlik kopyalandı',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'metin-piksel-genisligi-hesaplayici',
  title: 'Metin Piksel Genişliği Hesaplayıcı',
  description: 'Yazı tipi, boyut ve stile göre herhangi bir metnin kaç piksel genişliğinde olduğunu doğru bir şekilde hesaplayın. Tasarımcılar ve geliştiriciler için ücretsiz araç.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Herhangi bir metnin tam piksel genişliğini ölçün' },
    {
      type: 'paragraph',
      html: 'Metniniz kapsayıcısından taşıyor mu? Bir başlığı oluşturmadan önce ne kadar yer kapladığını bilmeniz mi gerekiyor? <strong>Tarayıcı Canvas API\'si</strong>, herhangi bir metin dizisinin tam genişliğini DOM\'da oluşturmadan piksel hassasiyetiyle ölçmenize olanak tanır.',
    },
    { type: 'title', level: 3, text: 'Neden karakter sayımı yeterli değildir?' },
    {
      type: 'paragraph',
      html: 'Modern yazı tipleri <strong>orantılıdır</strong>: her glifin farklı bir genişliği vardır. Bir "W", bir "i"den üç kat daha fazla yer kaplayabilir. Karakter sayısı size metnin kapladığı gerçek görsel alan hakkında hiçbir şey söylemez.',
    },
    {
      type: 'list',
      items: [
        '<strong>Web tasarımı:</strong> Düğmelerde, etiketlerde ve tablo hücrelerinde taşmayı önleyin.',
        '<strong>SEO:</strong> Arama motorları başlıkları karakter sayısına göre değil, piksellere göre kısaltır.',
        '<strong>Canvas ve PDF:</strong> Programlı olarak metin çizmeden önce tam konumu hesaplayın.',
        '<strong>Tooltip\'ler ve balonlar:</strong> Kapsayıcıları iç metne göre dinamik olarak boyutlandırın.',
      ],
    },
    { type: 'title', level: 3, text: 'Canvas ile ölçüm nasıl çalışır?' },
    {
      type: 'paragraph',
      html: 'Canvas API\'sinin <code>ctx.measureText()</code> yöntemi, o anda aktif olan yazı tipini kullanarak CSS piksel genişliğini yansıtan bir <code>width</code> özelliğine sahip bir <code>TextMetrics</code> nesnesi döndürür. Bu araç, ölçümden önce bağlamı yazı tipiniz, boyutunuz, ağırlığınız ve stilinizle yapılandırır.',
    },
    {
      type: 'code',
      ariaLabel: 'Canvas measureText örneği',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Merhaba Dünya').width; // örn. 74.5",
    },
    { type: 'title', level: 3, text: 'Gizlilik ve yerel işleme' },
    {
      type: 'paragraph',
      html: 'Tüm hesaplamalar tarayıcınızda gerçekleşir. Cihazınızdan hiçbir metin, kod parçacığı veya özel veri çıkmaz.',
    },
    {
      type: 'tip',
      title: 'Google Fonts yazı tipleri',
      html: 'Bir Google Fonts yazı tipini doğru bir şekilde ölçmek için önce sayfada yüklendiğinden veya sisteminizde yüklü olduğundan emin olun. Aksi takdirde tarayıcı yedek bir yazı tipine dönecektir ve sonuç farklı olacaktır.',
    },
  ],
};
