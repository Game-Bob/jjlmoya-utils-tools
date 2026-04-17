import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'WhatsApp bağlantısı nasıl oluşturulur?',
    answer: 'Bağlantınızı oluşturmak için ülke kodunu da içeren cep telefonu numaranızı girin. Örneğin, İspanya için önce 34, Meksika için 52 girin, ardından yerel numaranızı yazın. İsteğe bağlı bir mesaj ekleyebilirsiniz; araç, kopyalamaya hazır nihai wa.me bağlantısını oluşturacaktır.',
  },
  {
    question: 'Uzun, önceden doldurulmuş bir mesaj ekleyebilir miyim?',
    answer: 'Evet. Birisi bağlantınıza tıkladığında sohbet kutusunda otomatik olarak görünecek bir mesaj ekleyebilirsiniz. Araç, URL\'yi bozmadan boşlukları, aksanları ve emojileri desteklemek için URL kodlamasını kullanır.',
  },
  {
    question: 'Oluşturulan QR kodunu nasıl kullanırım?',
    answer: 'Geçerli bir bağlantı oluşturulduğunda "QR Göster" düğmesi görünür. QR kodu, bağlantı URL\'nizi içerir. Kartvizitler, afişler veya sosyal medya için temiz, yüksek çözünürlüklü bir dosya indirmek için üzerine sağ tıklayın ve "Resmi farklı kaydet"i seçin.',
  },
  {
    question: 'Verilerim nereye gidiyor?',
    answer: 'Oluşturucu her şeyi doğrudan tarayıcınızda, istemci tarafında işler. Telefon numaranız ve önceden doldurulmuş mesajınız asla herhangi bir sunucuya gönderilmez veya herhangi bir veritabanında saklanmaz.',
  },
];

const howToData = [
  { name: 'Öneki seçin', text: 'Açılır menüden ülke kodunuzu seçin ve telefon numaranızı önek olmadan girin.' },
  { name: 'İsteğe bağlı bir mesaj ekleyin', text: 'Birisi bağlantıyı açıp Gönder\'e dokunduğunda görünecek olan önceden doldurulmuş bir metin yazın.' },
  { name: 'Bağlantıyı oluşturun', text: 'Paylaşmaya hazır doğrudan wa.me URL\'nizi almak için yeşil düğmeye basın.' },
  { name: 'QR\'ı paylaşın veya yazdırın', text: 'Bağlantıyı kopyalayın, sohbeti test edin veya kartlar ve baskı için QR kodunu indirin.' },
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
  name: 'Doğrudan WhatsApp bağlantısı nasıl oluşturulur?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'WhatsApp Bağlantı Oluşturucu',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Önceden doldurulmuş mesaj ve QR kodu ile doğrudan WhatsApp sohbet bağlantıları oluşturun. Ücretsiz araç, kayıt yok, %100 özel.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'WhatsApp Telefon Numarası',
  phonePlaceholder: '5XX XXX XX XX',
  messageLabel: 'Açılış mesajı (isteğe bağlı)',
  messagePlaceholder: 'Merhaba! Hizmetiniz hakkında daha fazla bilgi almak istiyorum...',
  generateBtn: 'Bağlantı Oluştur',
  resultLabel: 'Doğrudan Bağlantı Oluşturuldu',
  copyTitle: 'Panoya kopyala',
  copyDone: 'Kopyalandı!',
  testBtn: 'Sohbeti Test Et',
  qrShow: 'QR Göster',
  qrHide: 'QR Gizle',
  errorPhone: 'Lütfen geçerli bir telefon numarası girin.',
  defaultPrefix: '90',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'whatsapp-link-olusturucu',
  title: 'QR Kodlu WhatsApp Bağlantı Oluşturucu',
  description: 'Önceden doldurulmuş mesaj ve QR kodu ile doğrudan WhatsApp sohbet bağlantıları oluşturun. Ücretsiz araç, kayıt yok, %100 özel.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Tıkla Sohbet Et özelliği nasıl kullanılır — WhatsApp Yardım Merkezi', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Tıkla Sohbet Et: parametreler ve formatlar — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'WhatsApp için kısa doğrudan bağlantılar oluşturun' },
    {
      type: 'paragraph',
      html: 'Müşterilerinizin veya takipçilerinizin numaranızı kaydetmeden size WhatsApp üzerinden ulaşmasını mı istiyorsunuz? <strong>wa.me bağlantı oluşturucumuz</strong>, ön hazırlık gerektirmeden anında doğrudan bir sohbet açan bir bağlantı oluşturarak bu sorunu çözer.',
    },
    { type: 'title', level: 3, text: 'wa.me WhatsApp kısaltması ne işe yarar?' },
    {
      type: 'paragraph',
      html: 'WhatsApp, "Tıkla Sohbet Et" adlı bir API sunar. Özel bir URL kullanarak, herhangi bir kullanıcı sizi rehberine eklemesine gerek kalmadan hem mobilden hem de WhatsApp Web\'den sizinle yeni bir sohbet başlatabilir.',
    },
    {
      type: 'list',
      items: [
        '<strong>Daha fazla dönüşüm:</strong> Mağazanızdaki "WhatsApp ile İletişime Geç" düğmesi süreci kolaylaştırır ve satışları artırır.',
        '<strong>Önceden doldurulmuş mesaj:</strong> Kullanıcı sadece "Gönder"e basar. Örn: "Merhaba! Instagram\'dan geldim ve tekliften yararlanmak istiyorum."',
        '<strong>Otomatik QR kodu:</strong> Kartvizitler, afişler veya sosyal medya paylaşımları için QR\'ı indirin.',
      ],
    },
    { type: 'title', level: 3, text: 'Bağlantı oluşturma nasıl çalışır?' },
    {
      type: 'paragraph',
      html: 'Araç, uluslararası ülke kodunu ve temiz telefon numarasını birleştirir, ardından <em>url-encoding</em> yoluyla dönüştürülen mesaj parametresiyle birlikte resmi WhatsApp API\'sine ekler.',
    },
    {
      type: 'code',
      ariaLabel: 'WhatsApp URL formatı',
      code: 'https://wa.me/90XXXXXXXXX\nhttps://wa.me/90XXXXXXXXX?text=%C2%A1Merhaba!%20İstiyorum...',
    },
    { type: 'title', level: 3, text: 'Garantili gizlilik ve yerel işleme' },
    {
      type: 'paragraph',
      html: 'Tüm bağlantı oluşturma süreci JavaScript aracılığıyla tarayıcınızda gerçekleşir. Hiçbir sunucu girdiğiniz telefon numaralarını veya mesajları kaydetmez, saklamaz veya okumaz. Gizliliğiniz tam olarak korunmaktadır.',
    },
    {
      type: 'tip',
      title: 'Uluslararası önekin önemi',
      html: 'WhatsApp\'ın mesajı doğru şekilde yönlendirmesi için ülke kodu zorunludur. Türkiye için <strong>90</strong>\'dır, ardından boşluk veya + sembolü olmadan 10 haneli numaranız gelir. Nihai sonuç, örneğin <code>905XXXXXXXXX</code> olacaktır.',
    },
  ],
};
