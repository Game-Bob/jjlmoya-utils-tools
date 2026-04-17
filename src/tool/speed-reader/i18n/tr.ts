import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'RSVP teknolojisi nedir?',
    answer: "RSVP, Rapid Serial Visual Presentation (Hızlı Seri Görsel Sunum) anlamına gelir. Kelimeler aynı odak noktasında teker teker görünüyor, böylece gözlerinizi soldan sağa hareket ettirme ihtiyacı ortadan kalkıyor. Bu, pratik yapıldığında anlama yeteneğinden ödün vermeden çok daha yüksek hızlarda okumaya olanak tanır.",
  },
  {
    question: 'Daha hızlı okumak anlamayı azaltır mı?',
    answer: 'Bu eğitim durumuna bağlıdır. Orta hızlarda (350-500 WPM), birçok kullanıcı iç seslendirmeyi (subvocalization) ortadan kaldırarak daha yüksek konsantrasyona ulaştığını belirtmektedir. Aşırı hızlarda (800+ WPM), önceden pratik yapılmadığında hatırlama oranı düşebilir.',
  },
  {
    question: 'Ortalama okuma hızı nedir?',
    answer: 'Ortalama bir yetişkin dakikada 200 ile 250 kelime arasında okur. RSVP okuyucusu ve biraz pratikle, mükemmel anlamayı koruyarak bu hızı ikiye katlamak (400-500 WPM) oldukça yaygındır.',
  },
  {
    question: 'RSVP göz yorgunluğuna neden olur mu?',
    answer: 'Gözlerinizi hareket ettirmenin kas eforunu ortadan kaldırarak, birçok kullanıcı geleneksel yöntemlere göre daha az yorgunlukla okuyabildiklerini fark eder. İlk başta yoğun hissettirebilir ancak beyin hızla uyum sağlar.',
  },
];

const howToData = [
  { name: 'Metninizi girin', text: 'Okumak istediğiniz makaleyi, kitabı veya belgeyi metin alanına yapıştırın.' },
  { name: 'WPM Yapılandırması', text: 'Dakikadaki Kelime Sayısını (WPM) ayarlayın. Yeni başlıyorsanız 300 WPM ile başlayın ve kademeli olarak artırın.' },
  { name: 'Bakışınızı sabitleyin', text: 'Gözlerinizi kırmızı harf (ORP odak noktası) üzerinde tutun. Kelimeleri göz hareketiyle takip etmeye çalışmayın.' },
  { name: 'Eğitimi başlatın', text: 'Oynat düğmesine basın ve bilgilerin akmasına izin verin. İstediğiniz zaman duraklatabilirsiniz.' },
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
  name: 'RSVP Hızlı Okuyucu nasıl kullanılır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'RSVP teknolojisi ve optimal tanıma noktası hizalaması ile okuma hızınızı dakikada 1000 kelimeye kadar eğitin.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Okuma ilerlemesi',
  speedLabel: 'Hız',
  slowLabel: 'YAVAŞ',
  fastLabel: 'TANRI',
  speedHint: 'Sınırlarınızı zorlamak için 300 WPM ile başlayın ve kademeli olarak artırın.',
  textLabel: 'İşlenecek metin',
  textPlaceholder: 'Makalenizi, kitabınızı veya metninizi buraya yapıştırın...',
  clearLabel: 'TEMİZLE',
  words: 'kelime',
  defaultText: 'RSVP Speed Reader\'a hoş geldiniz. Başlamak için metninizi aşağıya yapıştırın. Bu teknoloji, gereksiz göz hareketlerini ortadan kaldırarak üç kata kadar daha hızlı okumanıza yardımcı olacaktır.',
  play: 'Oynat',
  pause: 'Duraklat',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'hizli-okuyucu',
  title: 'Hızlı Okuma RSVP Speed Reader',
  description: 'Okuma hızınızı dakikada 1000 kelimeye kadar eğitin. Optimal odak noktası hizalamalı RSVP teknolojisi. Entelektüel üretkenliğinizi ikiye katlayın.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Okumanın Formula 1\'i: Zihinsel Bant Genişliğinizin Kilidini Açın' },
    {
      type: 'paragraph',
      html: 'Ya okuma eylemi, biyomekanik olarak bir zaman kaybı olsaydı? Beyniniz, analog bir bağlantıyla -gözlerinizle- kısıtlanmış bir süper bilgisayardır. <strong>RSVP Okuyucu</strong>, kelimeleri zihninizin onları en hızlı işlediği odak noktasında sunarak bu darboğazı kırar.',
    },
    {
      type: 'paragraph',
      html: 'Geleneksel okuma verimsiz bir süreçtir. Gözleriniz bir tarayıcı gibi çalışmaz; seri çekim modundaki bir kamera gibi çalışır: dur, odaklan, atla. <strong>Sakkad</strong> adı verilen bu atlama hareketi, okuma sürenizin büyük bir kısmını bilgiyi özümsemek yerine sadece gözlerinizi hareket ettirmekle geçirdiğiniz anlamına gelir.',
    },
    {
      type: 'tip',
      html: '"RSVP okuma sadece daha hızlı okumak değildir. Metin ile beyniniz arasındaki mekanik sürtünmeyi ortadan kaldırmaktır."',
    },
    { type: 'title', level: 3, text: 'Veri Enjeksiyonunun Arkasındaki Bilim' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimal Tanıma Noktası (ORP)',
          description: 'Her kelimenin, beyninizin onu en hızlı tanıdığı bir noktası vardır. Algoritma bu tam harfi (kırmızı olan) hesaplar ve mükemmel şekilde merkezler. Gözleriniz tek bir milimetre bile hareket etmez.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Bilişsel Sessizlik',
          highlight: true,
          description: '400-500 WPM\'nin üzerinde, iç sesiniz susar - yetişemez. Okuduğunuzu "duymayı" bırakır ve somut anlamları ve kavramları "görmeye" başlarsınız. Bu, nihai akış (flow) halidir.',
        },
        {
          icon: 'mdi:brain',
          title: 'Görsel Nöroplastisite',
          description: 'Spor salonuna gitmek gibi: 300 WPM başlangıçta hızlı hissettirecektir. Bir hafta sonra, 500 WPM bir yürüyüş gibi gelecektir. Görsel korteksinizi dil işleme merkezine bağlayan nöral yolları yeniden eğitiyorsunuz.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Eğitim Protokolü: Yeni Başlayandan Neo\'ya' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Seviye 1: Uyanış (200 300 WPM)',
          description: 'Normal okuma hızınız. Arayüze alışın. Yüzünüzü gevşetin ve kelimelerin size gelmesine izin verin. Onları "yakalamaya" çalışmayın.',
          points: ['Yeni başlayanlar için ideal', 'ORP aşinalığı', 'Göz yorgunluğu yok'],
        },
        {
          title: 'Seviye 2: Ses Duvarı (400 500 WPM)',
          highlight: true,
          description: 'Sihrin gerçekleştiği yer burasıdır. Rahatsızlık hissedeceksiniz. Bir kelimeyi kaçırdığınızda yavaşlamayın - beyniniz boşlukları bağlamdan doldurmayı öğrenecektir.',
          points: ['İç seslendirme kaybolur', 'Zihinsel akış hali', 'Temel hızınızı ikiye katlayın'],
        },
        {
          title: 'Seviye 3: Kurtulma Hızı (600+ WPM)',
          description: 'İleri düzey bölge. Çalışma materyallerini gözden geçirmek, haber okumak veya temel kavramları aradığınız teknik belgeleri tüketmek için idealdir.',
          points: ['Ortalama bir roman 2 saatte biter', 'Maksimum okuma verimliliği', 'Önceden pratik gerektirir'],
        },
      ],
    },
  ],
};
