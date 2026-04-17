import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Hangi optimizasyon algoritmasını kullanıyor?',
    answer: 'Gezgin Satıcı Problemi\'nin (TSP) gelişmiş bir çözümünü kullanır. Algoritma tüm durakları analiz eder ve toplam kat edilen mesafeyi en aza indiren, zaman ve yakıt tasarrufu sağlayan sıralı düzeni belirler.',
  },
  {
    question: 'Konumumu paylaşmak güvenli mi?',
    answer: 'Evet. Araç, coğrafi verileri tarayıcınızda yerel olarak işler. Rotalarınızı, duraklarınızı veya konum geçmişinizi sunucularımızda saklamayız.',
  },
  {
    question: 'Aynı anda kaç durağı optimize edebilirim?',
    answer: 'Ücretsiz sürümümüz, 10 durağa kadar anında optimizasyon yapmanıza olanak tanır. Daha büyük profesyonel rotalar için sistem, tarayıcıyı kilitlemeden yüksek performansı koruyacak şekilde optimize edilmiştir.',
  },
  {
    question: 'Rotayı doğrudan Google Haritalar\'da kullanabilir miyim?',
    answer: 'Kesinlikle! Rota optimize edildikten sonra araç, Google Haritalar ile uyumlu bir navigasyon bağlantısı oluşturur, böylece yolculuğa doğrudan telefonunuzdan başlayabilirsiniz.',
  },
];

const howToData = [
  {
    name: 'Başlangıç noktasını ekleyin',
    text: 'Başlangıç adresini yazın veya rotanızın nerede başlayacağını ayarlamak için haritaya tıklayın.',
  },
  {
    name: 'Varış duraklarını girin',
    text: 'Ziyaret etmeniz gereken tüm konumları ekleyin. Sistem bunları sizin için yeniden sıralayacağından sıra önemli değildir.',
  },
  {
    name: 'Sıralamayı optimize edin',
    text: 'Optimize et düğmesine tıklayın. Algoritma, tüm durakları kapsayacak en verimli düzeni saniyeler içinde hesaplayacaktır.',
  },
  {
    name: 'Navigatörde açın',
    text: 'Optimize edilmiş rotayı favori harita uygulamanıza aktarmak için navigasyon düğmesini kullanın.',
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
  name: 'Birden fazla duraklı bir rota nasıl optimize edilir?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'En Uygun Rota Hesaplayıcı',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Teslimat veya seyahat rotalarınızı ücretsiz olarak optimize edin. En kısa ve en verimli yolu bulmak için durakları otomatik olarak yeniden sıralayın.',
};

const ui: RoutesUI = {
  titleSidebar: 'Rota Noktaları',
  descriptionSidebar: 'Durak eklemek için haritaya tıklayın. İlk nokta başlangıçtır.',
  emptyState: 'Nokta eklenmedi',
  btnOptimize: 'En Uygun Rotayı Hesapla',
  btnCalculating: 'Hesaplanıyor...',
  btnClear: 'Tümünü Temizle',
  labelDistance: 'Tahmini Toplam Mesafe',
  labelDeleteAria: 'Sil',
  labelLoadingAddress: 'Adres yükleniyor...',
  labelPoint: 'Nokta',
  errorMinPoints: 'Bir rota hesaplamak için en az iki nokta gereklidir.',
  errorCalculate: 'Rota hesaplanırken hata oluştu.',
  errorAddress: 'Adres alınırken hata oluştu',
  errorAddressName: 'Bilinmeyen nokta',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'en-uygun-rotalar',
  title: 'Ücretsiz En Uygun Rota Hesaplayıcı',
  description: 'Teslimat veya seyahat rotalarınızı ücretsiz olarak optimize edin. Aracımız, en kısa ve en verimli yolu bulmak için duraklarınızı otomatik olarak yeniden sıralar.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Teknolojiler ve Kaynaklar',
  bibliography: [
    { name: 'Leaflet — Açık kaynaklı etkileşimli harita kütüphanesi', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Açık kartografik veriler', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Voyager harita kutucukları', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Ters coğrafi kodlama servisi (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Açık Kaynak Rota Makinesi (rota optimizasyonu)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Akıllı Rota Optimize Edici: Teslimat ve Seyahat için TSP',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Çevrimiçi rota optimize edici</strong>, klasik <em>Gezgin Satıcı Problemi\'ni (TSP)</em> çözen ücretsiz bir araçtır. Tüm duraklarınızı herhangi bir sırayla ekleyin ve algoritma, toplam kat edilen mesafeyi en aza indirmek için en verimli sıralamayı otomatik olarak hesaplayacaktır.',
    },
    {
      type: 'title',
      text: 'Rota optimizasyon algoritması nasıl çalışır?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Araç, OpenStreetMap verilerine dayalı yüksek performanslı bir rota motoru olan <strong>OSRM (Open Source Routing Machine)</strong> API\'sini kullanır. Süreç şöyledir: önce tüm noktalar arasındaki en uygun dairesel rotayı hesaplar (TSP algoritması), ardından bunu tek yönlü lineer bir yolculuğa dönüştürmek için en iyi kesme noktasını belirler ve son olarak tahmini toplam mesafeyle birlikte rotayı harita üzerinde çizer.',
    },
    {
      type: 'title',
      text: 'Kullanım durumları: teslimatlar, satış temsilcileri ve seyahat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rota optimize edici, günlük birden fazla teslimatı organize etmesi gereken <strong>bağımsız kuryeler</strong>, bir bölgedeki müşterileri ziyaret eden <strong>saha satış temsilcileri</strong> veya birkaç şehre veya turistik yere en verimli sırayla gitmek isteyen <strong>gezginler</strong> için idealdir. Araç, tüm bilgileri tarayıcıda işler ve verilerinizi herhangi bir özel sunucuyla paylaşmaz.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritma', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Rota motoru', icon: 'mdi:map-marker-path' },
        { value: 'Yerel Öncelikli', label: 'Gizlilik', icon: 'mdi:lock-check' },
        { value: 'Ücretsiz', label: 'Maliyet', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Gizlilik ve yerel işleme',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aracın tüm mantığı doğrudan tarayıcınızda çalışır. Durak koordinatlarınız sadece rotaları hesaplamak ve adres isimlerini almak için halka açık OSRM ve Nominatim API\'lerine gönderilir, ancak <strong>herhangi bir özel sunucuda saklanmaz</strong>. Hassas bilgiler içeren iş rotalarını planlamak için aracı güvenle kullanabilirsiniz.',
    },
    {
      type: 'tip',
      title: 'Kullanım ipucu',
      html: '<strong>En iyi sonuçlar için</strong>, adres aramak yerine doğrudan haritaya tıklayarak durakları ekleyin. İşaretçiler sürüklenebilir olduğu için, her noktanın tam konumunu yerleştirdikten sonra ayarlayabilirsiniz.',
    },
  ],
};
