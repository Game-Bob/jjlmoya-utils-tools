import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'İspanya\'daki bir Düşük Emisyon Bölgesine (ZBE) etiketsiz bir araçla girersem ne olur?',
    answer: 'İspanya\'nın büyük bir şehrindeki bir ZBE\'ye çevre etiketi olmayan ve özel bir muafiyeti bulunmayan bir araçla girerseniz, ciddi bir ihlalden dolayı genellikle 200 Euro tutarında bir para cezası alırsınız.',
  },
  {
    question: 'Fiziksel DGT çıkartmasını ön camımda sergilemek zorunda mıyım?',
    answer: 'DGT sergilenmesini tavsiye eder, ancak buna uymamanın cezaları her yerel yönetim tarafından belirlenir. Madrid\'de bu zorunluyken, diğer şehirlerde uygulama tamamen otomatik plaka tanıma kameralarına dayanmaktadır.',
  },
  {
    question: 'Dizel aracım 2006\'dan önce tescil edildi ancak teknik belgesinde Euro 4 yazıyor. Etiket alabilir miyim?',
    answer: 'Evet. Trafik yetkililerindeki araç verileri yalnızca tescil tarihini gösteriyorsa, resmi bir bayi aracılığıyla üreticiden bir sertifika talep edebilir ve sınıflandırmanızı düzeltmek için trafik ofisine sunabilirsiniz.',
  },
  {
    question: '2025 yılında İspanya\'daki otomobiller için C etiketi (Yeşil) ne anlama geliyor?',
    answer: 'Çoğu ZBE\'de hala serbestçe sürüş yapabilirsiniz, ancak C etiketi sokak otoparkını kısıtlar. ZBE sınırlarının yakınındaki yeraltı veya yetkili otoparkları kullanmanız gerekecektir.',
  },
];

const howToData = [
  { name: 'Araç tipinizi seçin', text: 'Aracınızın otomobil/kamyonet, motosiklet veya ağır vasıta olup olmadığını seçin. Her kategori, İspanyol trafik yönetmeliklerine göre farklı bir sınıflandırma mantığına sahiptir.' },
  { name: 'Yakıt veya enerji tipini seçin', text: 'Elektrikli, şarj edilebilir hibrit, geleneksel hibrit, gaz, benzin veya dizel seçeneklerinin her biri farklı etiket sonuçlarına yol açar. Şarj edilebilir hibritler için menzil eşiği 40 km\'dir.' },
  { name: 'Tescil yılını veya Euro standardını girin', text: 'Yanmalı araçlar için belirleyici faktör Euro standardıdır. Teknik belgedeki tescil tarihi, standart hakkında güvenilir bir yaklaşık değer verir.' },
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
  name: 'Aracınız için İspanyol DGT çevre etiketi simülasyonu nasıl yapılır?',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'İspanyol DGT Çevre Etiketi Simülatörü',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Aracınızın tipine, yakıtına ve tescil yılına göre hangi İspanyol DGT çevre etiketinin geçerli olduğunu öğrenin. İspanya\'daki Düşük Emisyon Bölgelerine hazırlanmak için ücretsiz araç.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Araç Tipi',
  vehicleCar: 'Otomobil / Kamyonet',
  vehicleMoto: 'Motosiklet',
  vehicleHeavy: 'Kamyon / Otobüs',
  errVehicle: 'Lütfen bir araç tipi seçin',

  step2Label: '2. Yakıt veya Enerji',
  fuelElectric: '%100 Elektrikli / Yakıt Hücresi',
  fuelPhevHigh: 'Şarj Edilebilir Hibrit (>40 km)',
  fuelPhevLow: 'Şarj Edilebilir Hibrit (<40 km)',
  fuelHybridGas: 'Hibrit (HEV) veya Gaz',
  fuelGasoline: 'Benzin',
  fuelDiesel: 'Dizel',
  errFuel: 'Lütfen bir yakıt veya enerji tipi seçin',

  step3Label: '3. Euro Standardı veya Tescil Yılı',
  yearPre2000: '2000 öncesi',
  year20002005: '2000 - 2005',
  year20062013: '2006 - 2013',
  yearPost2014: '2014 veya sonrası',
  errYear: 'Lütfen tescil dönemini seçin',
  helpText: 'Şüphe durumunda, teknik belgenizde gösterilen Euro standardı tescil tarihinden önceliklidir.',

  submitBtn: 'Etiketimi Kontrol Et',

  resultTitle: 'Atanan Etiket',

  badge0Label: 'Sıfır Emisyon Etiketi',
  badge0Letter: '0',
  badge0Sub: 'EMİSYON',
  badge0Desc: 'Maksimum verimliliğe sahip araçlar. İspanya\'daki Düşük Emisyon Bölgelerine (ZBE) sınırsız erişim ve geniş vergi muafiyetlerinden yararlanırlar.',

  badgeEcoLabel: 'ECO Etiketi',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Hibritler ve gazla çalışan otomobiller gibi düşük emisyonlu araçlar. Çoğu ZBE\'ye erişime izin verir ve düzenlenmiş park bölgelerinde indirim sağlar.',

  badgeCLabel: 'C Etiketi',
  badgeCLetter: 'C',
  badgeCDesc: 'Yüksek Euro standardına sahip yeni yanmalı araçlar. Serbest dolaşım ancak belirli ZBE alanlarında sokak park kısıtlamalarına tabidir.',

  badgeBLabel: 'B Etiketi',
  badgeBLetter: 'B',
  badgeBDesc: 'Daha eski yanmalı araçlar. İspanyol şehirlerinde daha büyük erişim ve park kısıtlamalarına tabidir.',

  badgeALabel: 'Etiket Yok',
  badgeALetter: 'YOK',
  badgeASub: 'ETİKET',
  badgeADesc: 'Etiket alma hakkı olmayan yüksek oranda kirletici araçlar. İspanya genelindeki şehir merkezlerinden ve Düşük Emisyon Bölgelerinden kademeli olarak hariç tutulmaktadırlar.',

  warningText: 'Sonucu onaylamak için her zaman resmi DGT web sitesinde plakanızı kullanarak doğrulama yapın, özellikle idari tutarsızlık durumunda.',
  resetBtn: 'Yeni Simülasyon',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'ispanya-cevre-etiketi-simulatoru',
  title: 'İspanya Çevre Etiketi Simülatörü',
  description: 'İspanya\'daki Düşük Emisyon Bölgeleri (ZBE) için aracınızın, motosikletinizin veya kamyonetinizin hangi İspanyol DGT çevre etiketine sahip olduğunu ücretsiz öğrenin.',
  ui,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    { name: 'İklim Değişikliği ve Trafik Düzenlemeleri Üzerine DGT (İspanyolca)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'İspanyol İklim Değişikliği Yasası ve Düşük Emisyon Bölgeleri (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'İspanyol DGT çevre etiketi nedir?' },
    {
      type: 'paragraph',
      html: '<strong>İspanyol DGT çevre etiketi</strong> (distintivo ambiental), en az kirletici araçlara öncelikli muamele sağlamak için İspanya\'da tanıtılan bir araç sınıflandırma sistemidir. Esas olarak 50.000\'den fazla nüfuslu İspanyol şehirlerindeki Düşük Emisyon Bölgelerine (ZBE) erişimi kontrol etmek için kullanılır.',
    },
    { type: 'title', level: 3, text: 'İspanya\'daki etiket türleri ve faydaları' },
    {
      type: 'list',
      items: [
        '<strong>Sıfır Emisyon Etiketi:</strong> Saf elektrikli araçlar, 40 km\'den fazla elektrikli menzile sahip şarj edilebilir hibritler ve hidrojen yakıt hücreleri için. ZBE\'lere sınırsız erişim ve vergi muafiyetleri.',
        '<strong>ECO Etiketi:</strong> Geleneksel hibritler, LPG, CNG ve 40 km\'den az menzilli şarj edilebilir hibritler. Kısıtlı bölgelere geniş erişim ve park indirimleri.',
        '<strong>C Etiketi:</strong> Euro 4 benzinli veya sonrası, Euro 6 dizel. Serbest dolaşım ancak ZBE\'lerin yakınında sokak park kısıtlamaları uygulanır.',
        '<strong>B Etiketi:</strong> Euro 3 benzinli, Euro 4 veya 5 dizel. Artan kısıtlamalar ve ara sıra giriş yasakları.',
        '<strong>Etiketsiz (Kategori A):</strong> 2024\'ten beri İspanyol şehir merkezlerinden kademeli olarak hariç tutulan eski veya daha fazla kirletici araçlar.',
      ],
    },
    { type: 'title', level: 3, text: 'İspanyol şehirlerindeki Düşük Emisyon Bölgeleri' },
    {
      type: 'paragraph',
      html: 'ZBE uygulaması, belirli nüfus eşiklerinin üzerindeki belediyelerin bunları oluşturmasını gerektiren İspanyol İklim Değişikliği Yasasını takip eder. Kayda değer örnekler, en azından bir B etiketi olmadan girmenin plaka tanıma kameraları aracılığıyla otomatik para cezalarıyla sonuçlanabileceği <em>Madrid 360</em> ve Barcelona\'nın <em>Superilles</em> projeleridir.',
    },
    {
      type: 'tip',
      title: 'İspanya\'da fiziksel çıkartma nasıl alınır',
      html: 'Simülatör bir etikete hak kazandığınızı onaylarsa, fiziksel çıkartmayı herhangi bir Correos (postane) şubesinden, yetkili servislerden veya trafik ofislerinden yaklaşık 5 Euro karşılığında satın alabilirsiniz. Araç tescil belgelerinizi yanınızda getirin.',
    },
  ],
};
