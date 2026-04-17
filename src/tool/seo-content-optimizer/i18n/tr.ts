import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Bu araç SEO sıralamama nasıl yardımcı olur?',
    answer: 'Anahtar kelime yoğunluğunu ve cümle okunabilirliğini analiz ederek, içeriğinizin kullanıcılar için anlaşılmasını kolaylaştırır, arama motorları için alakalı hale getirir ve aşırı optimizasyon cezalarından kaçınmanızı sağlarsınız.',
  },
  {
    question: 'Teknik analiz hangi HTML öğelerini kontrol eder?',
    answer: 'H1 etiketinin varlığını ve benzersizliğini, H2/H3 alt başlıklarının varlığını ve görsellerdeki alt özniteliklerini doğrular.',
  },
  {
    question: 'İçeriğim herhangi bir sunucuda saklanıyor mu?',
    answer: 'Hayır. Analiz %100 tarayıcınızda yerel olarak çalışır. İçeriğiniz asla bilgisayarınızdan dışarı çıkmaz.',
  },
  {
    question: 'Yoast SEO kriterleri ile uyumlu mu?',
    answer: 'Evet, Yoast\'a benzer kriterler uyguluyoruz: cümle uzunluğu, paragraf dağılımı ve başlık hiyerarşisi.',
  },
];

const howToData = [
  { name: 'Metninizi yazın veya yapıştırın', text: 'Analiz etmek istediğiniz içeriği ana metin alanına girin.' },
  { name: 'Optimizasyon kontrol listesini inceleyin', text: 'Yan paneldeki uzunluk, okunabilirlik ve anahtar kelime yoğunluğu uyarılarını kontrol edin.' },
  { name: 'Teknik HTML\'i analiz edin', text: 'H1 etiketlerini, görsel alt metinlerini ve meta veri yapısını doğrulamak için teknik analiz sekmesine geçin.' },
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
  name: 'İçerik SEO için nasıl optimize edilir?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SEO İçerik Optimize Edici',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Metinlerinizin anahtar kelime yoğunluğunu, okunabilirliğini ve teknik HTML yapısını gerçek zamanlı olarak, hiçbir sunucuya veri göndermeden analiz edin.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Metin Analizi',
  tabHtml: 'Teknik HTML Analizi',
  textareaPlaceholder: 'Metninizi yazın veya HTML kodunuzu buraya yapıştırın...',
  statsChars: 'Karakter',
  statsWords: 'Kelime',
  statsReading: 'Okuma süresi',
  statsSentences: 'Cümle',
  checklistTitle: 'Optimizasyon Kontrol Listesi',
  keywordsTitle: 'Anahtar Kelime Yoğunluğu',
  technicalTitle: 'Teknik HTML Analizi',
  h1Label: 'H1 Algılandı',
  linksLabel: 'Bağlantılar (a)',
  imgsLabel: 'Görseller (img)',
  altsLabel: 'Eksik alt metinler',
  emptyState: 'Veri yok',
  analyzing: 'Analiz ediliyor...',
  checkInsufficient: 'Yetersiz uzunluk (< 300 kelime)',
  checkPillar: 'Mükemmel kapsamlı içerik (> 900 kelime)',
  checkGoodLength: 'SEO için uygun uzunluk',
  checkLongSentences: 'Çok fazla uzun cümle (> metnin %25\'i)',
  checkGoodReadability: 'Optimal cümle okunabilirliği',
  checkLongParagraphs: 'Çok uzun paragrafları bölün (> 150 kelime)',
  checkMissingH1: 'H1 etiketi eksik',
  checkMultipleH1: 'Birden fazla H1 etiketi algılandı',
  checkMissingH2: 'Alt başlıklar (H2) eksik',
  checkMissingTitle: 'Meta başlık (title) etiketi eksik',
  stopWords: JSON.stringify(['ve', 'veya', 'ama', 'fakat', 'ancak', 'lakin', 'da', 'de', 'ki', 'ile', 'için', 'gibi', 'kadar', 'tarafından', 'rağmen', 'göre', 'den', 'dan', 'ten', 'tan', 'ise', 'dir', 'dır', 'dur', 'dür', 'tir', 'tır', 'tur', 'tür', 'bir', 'bu', 'şu', 'o', 'ne', 'hakkında', 'olarak', 'mi', 'mı', 'mu', 'mü', 'şeyi', 'şeye', 'şey', 'benim', 'senin', 'onun', 'bizim', 'sizin', 'onların']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'seo-icerik-optimize-edici',
  title: 'SEO İçerik Optimize Edici',
  description: 'Metinlerinizin anahtar kelime yoğunluğunu, okunabilirliğini ve teknik HTML yapısını gerçek zamanlı olarak analiz edin. Ücretsiz ve gizlilik odaklı SEO aracı.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: "Google'ın SEO Başlangıç Kılavuzu", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=tr' },
    { name: 'Yoast SEO okunabilirlik kriterleri', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'SEO İçerik Optimize Edici: Anahtar Kelimeler, Okunabilirlik ve Yapı' },
    {
      type: 'paragraph',
      html: 'İçerik kalitesi artık sadece dahil ettiğiniz anahtar kelimelerle değil, bilginizi hem insanlar hem de Google tarayıcıları için sindirilebilir olacak şekilde nasıl yapılandırdığınızla ölçülüyor. <strong>Gerçek zamanlı SEO analiz aracımız</strong>; anahtar kelime yoğunluğu, paragraf okunabilirliği ve temel HTML teknik öğeleri üzerinde tam kontrol sağlar.',
    },
    { type: 'title', level: 3, text: 'Anahtar Kelime Yoğunluğu ve Semantik Alaka' },
    {
      type: 'paragraph',
      html: '<strong>Anahtar kelime yoğunluğu</strong>, bir terimin metnin geri kalanına göre ne sıklıkla göründüğünü gösterir. Aşırı tekrarlama <em>anahtar kelime doldurma (keyword stuffing)</em> filtrelerini tetiklerken, çok düşük yoğunluk arama motorlarının makalenizin ana konusunu belirlemesini zorlaştırabilir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Alaka analizi:</strong> En çok tekrarlanan kelimelerin arama amacınızla eşleşip eşleşmediğini belirleyin.',
        '<strong>Ceza önleme:</strong> Spam gibi görünebilecek terimlerin aşırı tekrarlanmasından kaçının.',
        '<strong>Semantik optimizasyon:</strong> Teknik terimler ile doğal dil arasında denge kurun.',
      ],
    },
    { type: 'title', level: 3, text: 'Yoast Tarzı Okunabilirlik' },
    {
      type: 'paragraph',
      html: 'Okunabilirlik dolaylı ama kritik bir sıralama faktörüdür. Paragraflar sonsuz metin blokları olduğu için kullanıcılar sayfayı terk ederse, <em>Hemen Çıkma Oranınız</em> artar ve kalma süreniz düşer. Analizör uzun cümleleri (20 kelime üzeri), 150 kelime üzerindeki paragrafları algılar ve alt başlıkları kontrol eder.',
    },
    {
      type: 'tip',
      title: 'Okuma süresi',
      html: 'Çoğu kullanıcı bir makaleyi okuyup okumayacağına 10 saniyenin altında karar verir. Tahmini okuma süresini bilmek (dakikada ortalama 200 kelime üzerinden hesaplanır), okuyucunun beklentilerini belirleyerek hemen çıkma oranını düşürmeye yardımcı olur.',
    },
    { type: 'title', level: 3, text: 'Teknik HTML Analizi' },
    {
      type: 'paragraph',
      html: 'Temel öğeleri doğrulamak için kaynak kodunuzu yapıştırın: <strong>H1</strong> etiketinin benzersizliği, H2/H3 alt başlıklarının varlığı, <code>alt</code> özniteliği olmayan görseller ve <code>title</code> etiketinin varlığı. Tüm işlemler veri hiçbir sunucuya gönderilmeden tarayıcınızda gerçekleşir.',
    },
  ],
};
