import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Bu e-posta listesi temizleyici tam olarak ne yapar?',
    answer: 'Araç e-posta listenizi analiz eder, kopyaları kaldırır, gereksiz boşlukları temizler, temel formatı doğrular ve temiz bir veritabanı sağlamak için tüm adresleri küçük harfe dönüştürür.',
  },
  {
    question: 'E-posta sayısında bir sınır var mı?',
    answer: 'Kesin bir kayıt sınırı yoktur. Tek seferde binlerce e-postayı anında işleyebilirsiniz. Tek kısıtlama, liste aşırı büyükse tarayıcınızın belleğidir.',
  },
  {
    question: 'E-postalarımı buraya yapıştırmak güvenli mi?',
    answer: 'Kesinlikle. Tüm işlemler JavaScript aracılığıyla kendi tarayıcınızda yerel olarak yapılır. Verileriniz asla sunucularımıza gönderilmez veya herhangi bir harici veritabanında saklanmaz.',
  },
  {
    question: 'Bu, kampanya teslim edilebilirliğimi nasıl artırır?',
    answer: 'Var olmayan veya yanlış biçimlendirilmiş adresleri kaldırarak hemen çıkma oranınızı (bounce rate) düşürürsünüz; bu da Gmail, Outlook ve Yahoo gibi sağlayıcılar nezdinde alan adı itibarınızı artırır.',
  },
];

const howToData = [
  { name: 'E-postalarınızı yapıştırın', text: 'E-posta listenizi kopyalayın ve metin kutusuna yapıştırın. Satır, virgül veya boşluk ile ayrılmış olabilirler.' },
  { name: 'Listeyi temizleyin', text: "Doğrulama ve kopya kaldırma işlemini başlatmak için 'Listeyi Temizle' düğmesine tıklayın." },
  { name: 'Sonuçları inceleyin', text: 'Orijinal ve nihai e-postaları gösteren istatistikleri kontrol edin ve alt paneldeki temizlenmiş listeyi inceleyin.' },
  { name: 'Kopyalayın veya indirin', text: "Sonucu doğrudan panoya kopyalayın veya kullanıma hazır bir .txt dosyası olarak indirin." },
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
  name: 'Bir e-posta listesi nasıl temizlenir',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'E-posta Listesi Temizleyici',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'E-posta listenizdeki kopyaları kaldırın, boşlukları düzeltin ve formatları doğrulayın. Kayıt sınırı olmayan ücretsiz araç.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'E-posta listesi',
  inputPlaceholder: 'E-posta listenizi buraya yapıştırın (satır, virgül veya boşluk ile ayrılmış)...',
  cleanBtn: 'Listeyi Temizle',
  clearBtn: 'Tümünü Temizle',
  statsOriginal: 'Orijinal',
  statsRemoved: 'Kaldırılan',
  statsFinal: 'Temiz',
  resultLabel: 'Temiz Sonuç',
  copyBtn: 'Listeyi Kopyala',
  copyDone: 'Kopyalandı!',
  downloadBtn: '.txt İndir',
  registered: 'kayıtlı',
  downloadFilename: 'temiz-epostalar',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'eposta-listesi-temizleyici',
  title: 'E posta Listesi Temizleyici',
  description: 'E-posta listelerini ücretsiz temizleyin. Kopyaları kaldırın, boşlukları düzeltin ve saniyeler içinde formatları doğrulayın. Maliyetlerden tasarruf edin ve teslim edilebilirliğinizi artırır.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: E-posta gönderen yönergeleri', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Vikipedi: E-posta spam', url: 'https://tr.wikipedia.org/wiki/E-posta_spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Neden bir e-posta listesi temizleyici kullanmak esastır?' },
    {
      type: 'paragraph',
      html: 'Dijital pazarlama dünyasında, veritabanınızın kalitesi boyutundan çok daha önemlidir. 50.000 e-postalık bir listeye sahip olmak, bunların yarısı var olmayan adreslerse, yazım hatası içeriyorsa veya kopya ise anlamsızdır. İşte burada bir <strong>e-posta listesi temizleyici</strong> vazgeçilmez hale gelir.',
    },
    { type: 'title', level: 3, text: 'Kirli bir e-posta listesinin riskleri' },
    {
      type: 'paragraph',
      html: 'Temizlenmemiş bir veritabanı tutmak ciddi sonuçlara yol açabilir. Var olmayan adreslere e-posta göndermek bir "hard bounce" oluşturur. Bu yüzde %2-3\'ü aşarsa, spam filtreleri alan adınızı incelemeye başlar ve uluslararası bir kara listeye girebilirsiniz.',
    },
    {
      type: 'tip',
      title: 'Uzman ipucu',
      html: 'Asla e-posta listesi satın almayın. Alan adı itibarınızı mahvetmenin en hızlı yolu budur. Kendi listenizi organik olarak oluşturun ve her 3 ila 6 ayda bir temizleyin.',
    },
    { type: 'title', level: 3, text: 'Aracımız veritabanınızı nasıl optimize eder?' },
    {
      type: 'paragraph',
      html: 'Ücretsiz yardımcı programımız, kayıt sınırı olmaksızın veritabanlarınızın kapsamlı ve hızlı bir temizliğini gerçekleştirir. Anında birkaç kritik doğrulama görevini yürütür:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kopya kaldırma:</strong> Aynı kullanıcı aynı e-postayı iki kez almaz.',
        '<strong>Boşluk düzeltme:</strong> Gönderimi geçersiz kılacak olan başlangıç veya bitişteki kazara boşlukları temizleriz.',
        '<strong>Format doğrulaması:</strong> Geçerli bir e-posta yapısına sahip olmayan girişleri filtreleriz.',
        '<strong>Normalleştirme:</strong> Gereksiz kayıtları önlemek için her şey küçük harfe dönüştürülür.',
      ],
    },
    { type: 'title', level: 3, text: 'Listenizi temizlemek için doğru zaman ne zamandır?' },
    {
      type: 'list',
      items: [
        'Kişileri yeni bir CRM veya gönderim platformuna (Mailchimp, SendGrid, vb.) aktarmadan önce.',
        'Açılma oranınızın her zamanki ortalamanızın altına düştüğünü fark ederseniz.',
        'Verileri manuel olarak topladığınız bir etkinlikten veya ticari fuardan sonra.',
        'Alan adı sağlığını korumak için her çeyrekte önleyici bakım olarak.',
      ],
    },
    { type: 'title', level: 3, text: 'Yatırım getirisi üzerindeki etki' },
    {
      type: 'paragraph',
      html: 'E-posta pazarlaması en yüksek ROI kanallarından biri olmaya devam ediyor, ancak sadece mesajlar gelen kutusuna ulaşırsa. Bir <strong>e-posta temizleyici</strong> kullanarak satış huninizi kaynaktan optimize ediyor ve mesajlarınızı asla görmeyecek kişiler için platformlara ödeme yapmayı bırakıyorsunuz.',
    },
    {
      type: 'tip',
      title: 'Double opt in uygulayın',
      html: "Sahte e-postalardan kaçınmanın en iyi yolu, kullanıcılardan gelen kutularına gönderilen bir bağlantıya tıklayarak aboneliklerini onaylamalarını istemektir. Bu, e-postanın var olduğunu ve kullanıcının buna erişimi olduğunu garanti eder.",
    },
  ],
};
