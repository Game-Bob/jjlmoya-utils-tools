import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Bu tarih farkı hesaplayıcı ücretsiz mi?',
    answer: 'Evet, herhangi bir tarayıcıdan kayıt veya indirme gerektirmeden erişilebilen %100 ücretsiz bir araçtır.',
  },
  {
    question: 'Artık yıllar toplam sürede nasıl işleniyor?',
    answer: 'Araç, tam bir sonuç vermek için artık yılları ve her aydaki değişken gün sayısını otomatik olarak işleyen standart JavaScript kronolojisini (UTC) kullanır.',
  },
  {
    question: 'Saat ve dakika farkını da hesaplayabilir miyim?',
    answer: 'Evet. Giriş alanları tam zamanı seçmenize olanak tanır. Sonuç size gün, saat, dakika ve saniye bazında dökümün yanı sıra birikmiş toplamları da verir.',
  },
  {
    question: 'Girdiğim tarihler herhangi bir sunucuya gönderiliyor mu?',
    answer: 'Hayır. Tüm işlemler tarayıcınızda yerel olarak yapılır. Hesapladığınız tarihler hakkında herhangi bir bilgi saklamıyoruz veya almıyoruz.',
  },
];

const howToData = [
  { name: 'Başlangıç tarihini seçin', text: "Başlangıç tarihini ve saatini girin veya anında ayarlamak için 'Bugün'e tıklayın." },
  { name: 'Bitiş tarihini seçin', text: "Hedef anı tanımlayın. Bu tam ana kadar geçen süreyi ölçmek için 'Şimdi'yi kullanın." },
  { name: 'Sonuçları okuyun', text: 'Gün, saat, dakika ve saniye bazındaki dökümü, ayrıca hafta ve saat birikmiş toplamlarını kontrol edin.' },
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
  name: 'İki tarih arasındaki fark nasıl hesaplanır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tarih Farkı Hesaplayıcı',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'İki tarih arasında tam olarak ne kadar zaman geçtiğini veya bir etkinliğe ne kadar kaldığını hesaplayın. Gün, saat ve dakika cinsinden sonuçlar.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Başlangıç Tarihi',
  endLabel: 'Bitiş Tarihi',
  nowBtn: 'Şimdi',
  todayBtn: 'Bugün',
  tomorrowBtn: 'Yarın',
  daysLabel: 'Gün',
  hoursLabel: 'Saat',
  minsLabel: 'Dak',
  secsLabel: 'Sn',
  weeksLabel: 'Toplam Hafta',
  totalHoursLabel: 'Toplam Saat',
  totalMinsLabel: 'Toplam Dakika',
  elapsed: 'Geçen Süre',
  past: 'Geçmişteki Süre',
  invalidDates: 'Geçersiz tarihler',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'tarih-farki-hesaplayici',
  title: 'Tarih Farkı Hesaplayıcı',
  description: 'İki tarih arasında tam olarak ne kadar zaman geçtiğini veya bir etkinliğe ne kadar kaldığını hesaplayın. Gün, saat ve dakika cinsinden sonuçlar veren ücretsiz araç.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Vikipedi: Miladi Takvim Tarihi', url: 'https://tr.wikipedia.org/wiki/Miladi_takvim' },
    { name: 'Vikipedi: Eisenhower Matrisi ve Zaman Yönetimi', url: 'https://tr.wikipedia.org/wiki/Zaman_yönetimi' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Gün, saat ve dakika ile tarih farkı hesaplayıcı' },
    {
      type: 'paragraph',
      html: '<strong>İki tarih arasındaki farkı</strong> hesaplamak, hem günlük yaşamda hem de profesyonel ortamlarda en yaygın ve hafife alınan görevlerden biridir. Bir ürün lansmanı planlıyor, bir kişinin tam yaşını hesaplıyor veya özel bir etkinliğe ne kadar zaman kaldığını ölçüyor olun, hassas bir araca sahip olmak verimli zaman yönetimi için esastır.',
    },
    { type: 'title', level: 3, text: 'Tarih farkı hesaplayıcı ne için kullanılır?' },
    {
      type: 'paragraph',
      html: 'Bu aracın yararlılığı birden fazla alana yayılmaktadır. İş yerinde, proje yöneticileri teslim tarihlerini belirlemek ve dönüm noktası ilerlemesini takip etmek için kullanırlar. Yasal ve idari bağlamlarda, zaman aşımı sürelerini veya sözleşme sürelerini hesaplamak için esastır.',
    },
    {
      type: 'list',
      items: [
        '<strong>Etkinlik planlama:</strong> Bir düğüne, konferansa veya seyahate kaç hafta ve gün kaldığını öğrenin.',
        '<strong>Proje yönetimi:</strong> Bir aşamanın başlangıcından tamamlanmasına kadar geçen süreyi hesaplayın.',
        '<strong>Finans:</strong> Faiz hesaplamaları veya fatura vade tarihleri için gün sayısını belirleyin.',
        '<strong>İnsan Kaynakları:</strong> Çalışan kıdemini veya birikmiş tatil günlerini ölçün.',
        '<strong>Sağlık:</strong> Bir tedavinin ilerlemesini veya bir işlemden sonraki iyileşme süresini takip edin.',
      ],
    },
    { type: 'title', level: 3, text: 'Zaman algısı ve dijital hassasiyet' },
    {
      type: 'paragraph',
      html: 'Zamanı sık sık yuvarlamaya meyilliyiz. Aslında 27 gün 14 saat varken "yaklaşık bir ay" deriz. Dijital bir hesaplayıcı kullanarak öznelliği ortadan kaldırır ve bilinçli karar verme için temiz veriler elde ederiz.',
    },
    { type: 'title', level: 3, text: 'Takvim günleri ile iş günleri' },
    {
      type: 'paragraph',
      html: 'Bu araç, hafta sonları ve resmi tatiller dahil olmak üzere <strong>takvim günlerini</strong> hesaplar. Astronomik ve genel sivil hesaplamalar için zaman sürekli ölçülür. Proje süresini tahmin etmeniz gerekiyorsa, gösterilen günlerin gerçek takvimin tamamını temsil ettiğini unutmayın.',
    },
    { type: 'title', level: 3, text: 'Zamanın verimlilik üzerindeki etkisi' },
    {
      type: 'paragraph',
      html: 'Parkinson Yasası, çalışmanın tamamlanması için mevcut olan süreyi dolduracak kadar genişlediğini belirtir. Bir son tarihe tam olarak kaç saat ve dakika kaldığını görselleştirerek, ekipler çabalarını optimize etmeye ve odaklanmaya meyillidirler.',
    },
    {
      type: 'tip',
      title: 'Gelecek ve geçmiş tarihler',
      html: 'Hesaplayıcıyı hem gelecek hem de geçmiş tarihler için kullanabilirsiniz. Bitiş tarihi başlangıç tarihinden erkense, sistem otomatik olarak geçmişte geçen süreyi algılar ve mutlak fark değerlerindeki hassasiyeti korur.',
    },
  ],
};
