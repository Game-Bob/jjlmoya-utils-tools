import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Çevrimiçi bir şifre oluşturucu kullanmak güvenli midir?',
    answer: "Evet, oluşturucu istemci taraflı (client-side) olduğu sürece güvenlidir. Aracımız, şifreleri kriptografik olarak güvenli algoritmalar kullanarak yerel olarak tarayıcınızda oluşturur. Şifreniz asla internet üzerinden gönderilmez veya herhangi bir sunucuda saklanmaz.",
  },
  {
    question: "Bir şifreyi 'hacker geçirmez' yapan nedir?",
    answer: "Anahtar entropidir (rastgelelik). Büyük harf, küçük harf, rakam ve özel sembollerin birleşimi ve en az 12-16 karakterlik bir uzunluk, kaba kuvvet (brute-force) saldırısını günümüz teknolojisiyle pratik olarak imkansız hale getirir.",
  },
  {
    question: 'Neden yaygın kelimelerden veya tarihlerden kaçınılmalı?',
    answer: 'Hackerlar saniyede milyonlarca kelimeyi, ismi ve tarih kombinasyonunu test eden sözlük saldırıları kullanırlar. Tamamen rastgele şifreler dilsel kalıpları izlemez, bu da onları çok daha güvenli kılar.',
  },
  {
    question: 'Tüm şifrelerimi ezberlemeli miyim?',
    answer: 'Önerilmez. İdeal yaklaşım, bu uzun ve rastgele şifreleri saklamak için bir şifre yöneticisi (Bitwarden, 1Password veya tarayıcınızın yerleşik yöneticisi gibi) kullanmaktır, böylece sadece bir güçlü ana şifreyi hatırlamanız gerekir.',
  },
];

const howToData = [
  {
    name: 'Uzunluğu ayarla',
    text: 'Şifrenizin kaç karakterden oluşacağını seçmek için kaydırıcıyı kullanın. Mevcut güvenlik standartları en az 12 karakter önermektedir.',
  },
  {
    name: 'Karmaşıklığı seç',
    text: 'Şifreyi kullanacağınız sitenin gereksinimlerine göre büyük harf, rakam ve sembol seçeneklerini işaretleyin.',
  },
  {
    name: 'Şifreyi oluştur',
    text: 'Oluştur düğmesine tıklayın. Her tıklama, kriptografik algoritmalara dayalı benzersiz, yüksek entropili bir kombinasyon oluşturur.',
  },
  {
    name: 'Tek tıkla kopyala',
    text: 'Şifreyi güvenli bir şekilde doğrudan pano belleğinize göndermek için kopyala düğmesini kullanın.',
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
  name: 'Güvenli şifre oluşturucu nasıl kullanılır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Güvenli Rastgele Şifre Oluşturucu',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Anında güçlü, hackerlara karşı dayanıklı şifreler oluşturun. Rastgele, güvenli anahtarlar oluşturmak için ücretsiz siber güvenlik aracı.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Oluşturuluyor...',
  labelSecurity: 'Güç',
  labelLength: 'Uzunluk',
  strengthWeak: 'Zayıf',
  strengthFair: 'Orta',
  strengthGood: 'İyi',
  strengthStrong: 'Güçlü',
  strengthUnbreakable: 'Kırılamaz',
  optionUppercase: 'Büyük Harf',
  optionLowercase: 'Küçük Harf',
  optionNumbers: 'Rakamlar',
  optionSymbols: 'Semboller',
  copyTitle: 'Kopyala',
  regenerateTitle: 'Yeni Oluştur',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'sifre-olusturucu',
  title: 'Güvenli Rastgele Şifre Oluşturucu',
  description: 'Anında güçlü, hackerlara karşı dayanıklı şifreler oluşturun. Rastgele, güvenli anahtarlar oluşturmak için ücretsiz siber güvenlik aracı.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Şifre — Vikipedi', url: 'https://tr.wikipedia.org/wiki/Parola' },
    { name: 'Have I Been Pwned — Şifrenizin ifşa olup olmadığını kontrol edin', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kırılamaz Bir Şifrenin Anatomisi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Şifreniz, kişisel verileriniz (bankacılık, tıbbi veriler, fotoğraflar) ile bir siber suçlu arasındaki tek engeldir. Ancak ortalama bir kullanıcı hala "123456" veya evcil hayvan isimleri gibi <strong>bir saniyenin altında</strong> kırılabilecek öngörülebilir kalıplara güvenmektedir.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Rainbow Tables Tehlikesi',
          description: 'Hackerlar şifrenizi her seferinde tek bir deneme yaparak tahmin etmezler. Yaygın şifrelerin milyonlarca önceden hesaplanmış özetini (hash) içeren devasa veritabanları (Rainbow Tables) kullanırlar. Şifreniz sözlükteyse veya ünlü bir ifadeyse, daha siz kullanmaya başlamadan önce bile güvenliği ihlal edilmiş demektir.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'Çözüm: Saf Entropi',
          description: 'Entropi düzensizliği veya öngörülemezliği ölçer. Entropi (bit) ne kadar yüksekse, bir bilgisayarın onu kırması için o kadar çok zamana ihtiyacı olur. Bu araç, öngörülebilir olan Math.random()\'ın aksine, kriptografik olarak güvenli rastgele sayılar üreten bir tarayıcı API\'si olan crypto.getRandomValues()\'u kullanır.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Temel Siber Güvenlik İlkeleri',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Karmaşıklıktan Ziyade Uzunluk',
          description: 'Sadece küçük harflerden oluşan 20 karakterlik bir şifre, nadir semboller içeren 8 karakterlik bir şifreden daha güvenlidir. Matematiksel olarak, her ek karakter zorluğu katlayarak artırır.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Yerine Koyma Efsanesi',
          description: '"a" harfini "@" veya "e" harfini "3" ile değiştirmek (Leetspeak) kimseyi kandırmaz. Modern saldırı sözlükleri bu varyasyonları zaten otomatik olarak içerir. Tanınabilir kelimeler kullanmaktan kaçının.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Farklı Site, Farklı Anahtar',
          description: 'E-postanız ve bir forum için aynı şifreyi kullanırsanız ve forum hacklenirse, artık e-postanıza erişebilirler. Karmaşık şifreleri sizin yerinize hatırlaması için bir Şifre Yöneticisi (Bitwarden veya 1Password gibi) kullanın.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Gizlilik garantili',
      html: 'Tüm oluşturma işlemi <strong>tarayıcınızda</strong> gerçekleşir. Hiçbir şifre internet üzerinden iletilmez veya herhangi bir sunucuya kaydedilmez. Kaynak kodu denetlenebilir.',
    },
  ],
};
