import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Google Drive indirme dönüştürücüsünü nasıl kullanırım?',
    answer: "Google Drive'da saklanan herhangi bir dosyanın tam 'Paylaş' bağlantısını kopyalayın (herkese açık izinleri olmalıdır). Aracın metin kutusuna yapıştırın ve 'Doğrudan Bağlantı Oluştur'a tıklayın. Google'ın görüntüleyicisini açmadan indirmeyi başlatan yeni bir URL görünecektir.",
  },
  {
    question: 'Özel bir dosya için doğrudan indirme bağlantısı oluşturabilir miyim?',
    answer: 'Dosya gizliyse veya erişim kısıtlıysa Google, yetkili bir hesapla oturum açmanızı isteyecektir. Kayıt olmadan temiz indirmeler için dosya izinlerinin "Bağlantıya sahip olan herkes görüntüleyebilir" olarak ayarlanması gerekir.',
  },
  {
    question: 'Drive bağlantılarımı burada dönüştürmek güvenli mi?',
    answer: 'Evet. Dönüştürme işlemi %100 tarayıcınızda gerçekleşir ve tamamen anonimdir. Araç bağlantınızı saklamaz veya herhangi bir sunucu çağrısı yapmaz; indirme sürümünü oluşturmak için yalnızca istemci tarafında URL yapısını analiz eder.',
  },
  {
    question: 'Drive dosyam çok büyükse ne olur?',
    answer: "Yaklaşık 100 MB'tan büyük dosyalar için Google Drive anında doğrudan indirmeye izin vermez. Bunun yerine, dosya boyutu ve antivirüs taraması atlaması hakkında bir uyarı sayfası gösterir. Bu, hiçbir harici aracın aşamayacağı sabit bir Google sunucu politikasıdır.",
  },
];

const howToData = [
  { name: 'Paylaşım bağlantısını kopyalayın', text: "Google Drive'da dosyaya sağ tıklayın ve 'Bağlantıyı al'ı seçin. İzinlerin bağlantıya sahip olan herkesin erişimine izin verdiğinden emin olun." },
  { name: 'Bağlantıyı oluşturucuya yapıştırın', text: "Tam Drive URL'sini aracın metin alanına girin ve 'Doğrudan Bağlantı Oluştur' düğmesine tıklayın." },
  { name: 'Oluşturulan bağlantıyı kopyalayın ve kullanın', text: 'Yeni doğrudan indirme bağlantısını kopyalayın ve e-postalarda, web sitelerinde, bültenlerde veya tıklandığında dosyanın hemen indirilmesine ihtiyaç duyduğunuz her yerde kullanın.' },
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
  name: 'Google Drive için doğrudan indirme bağlantısı nasıl oluşturulur?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google Drive Doğrudan İndirme Bağlantısı Oluşturucu',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Herhangi bir Google Drive paylaşım bağlantısını tek bir tıklamayla dosya önizleme sayfasını atlayarak doğrudan indirme bağlantısına dönüştürün. Ücretsiz araç.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Google Drive bağlantınızı buraya yapıştırın:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Doğrudan Bağlantı Oluştur',
  resultLabel: 'Doğrudan İndirme Bağlantısı:',
  copyTitle: 'Panoya kopyala',
  copyDone: 'Kopyalandı',
  testBtn: 'İndirmeyi Test Et',
  errorMsg: 'Girdiğiniz bağlantı geçerli bir Google Drive bağlantısı gibi görünmüyor.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-dogrudan-indirme-baglantisi',
  title: 'Google Drive Doğrudan İndirme Bağlantısı Oluşturucu',
  description: 'Herhangi bir Google Drive paylaşım bağlantısını dosya önizlemesini atlayarak tek bir tıklamayla doğrudan indirme bağlantısına kolayca dönüştürün. Ücretsiz araç.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: "Google Drive'dan dosya indirme (Google Workspace)", url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Dosyaları İndirme', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Google Drive paylaşım bağlantılarını doğrudan indirme bağlantılarına dönüştürün' },
    {
      type: 'paragraph',
      html: "Google Drive üzerinden sık sık dosya paylaşıyorsanız, önizleme sayfasının ne kadar can sıkıcı olabileceğini bilirsiniz. Kullanıcılarınız bağlantınıza tıkladığında, onları indirme düğmesini bulmaya zorlayan bir ara ekranla karşılaşırlar. <strong>Google Drive doğrudan indirme bağlantısı oluşturucumuz</strong>, herhangi bir paylaşım bağlantısını otomatik olarak indirmeyi başlatan bir bağlantıya dönüştürerek bu sorunu çözer.",
    },
    { type: 'title', level: 3, text: 'Neden doğrudan indirme bağlantısı kullanmalısınız?' },
    {
      type: 'paragraph',
      html: 'Ana fayda, çok daha iyi bir kullanıcı deneyimidir. Bir PDF, resim veya yazılım yükleyici paylaşırken, kullanıcılar bağlantıya tıklandığında indirmenin hemen başlamasını beklerler:',
    },
    {
      type: 'list',
      items: [
        '<strong>Zaman kazandırır:</strong> Ekstra adımlar olmadan tek tıkla indirme.',
        '<strong>Profesyonel görünüm:</strong> Web sitelerindeki indirme düğmeleri, bültenler veya müşteri e-postaları için idealdir.',
        '<strong>Daha az terk etme:</strong> Teknolojiye daha az hakim olan kullanıcılar Drive önizlemesi nedeniyle kafa karışıklığı yaşayabilir ve nasıl indireceklerini bilemeyebilirler.',
        '<strong>HTML uyumlu:</strong> Web sayfalarınızdaki <code>href</code> veya <code>src</code> öznitelikleri için mükemmeldir.',
      ],
    },
    { type: 'title', level: 3, text: 'Doğrudan bağlantı oluşturucu nasıl çalışır?' },
    {
      type: 'paragraph',
      html: "Her şey %100 tarayıcınızda gerçekleşir. Google Drive paylaşım bağlantıları benzersiz bir dosya kimliği (ID) içerir. Araç bu kimliği ayıklar ve Google'ın yerel dışa aktarma parametresini kullanarak yeni bir URL oluşturur: <code>https://drive.google.com/uc?export=download&amp;id=ID_NUMARANIZ</code>.",
    },
    {
      type: 'tip',
      title: 'Büyük dosyalar için uyarı',
      html: "Yaklaşık 100 MB'ın üzerindeki dosyalar için Google Drive, indirme başlamadan önce bir antivirüs tarama uyarısı sayfası görüntüler. Bu, hiçbir harici aracın atlayamayacağı sabit bir Google sunucu politikasıdır.",
    },
    { type: 'title', level: 3, text: 'Gizlilik ve güvenlik garantili' },
    {
      type: 'paragraph',
      html: 'Bu araç gizliliğinize tam saygı duyar. Tüm bağlantı dönüştürme işlemi kendi cihazınızda istemci tarafı JavaScript aracılığıyla gerçekleştirilir. Hiçbir bağlantı, dosya kimliği veya kişisel bilgi harici bir sunucuya gönderilmez.',
    },
  ],
};
