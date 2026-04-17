import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Apa yang terjadi jika saya mengendarai kendaraan tanpa lencana ke Zona Emisi Rendah (ZBE) di Spanyol?',
    answer: 'Jika Anda memasuki ZBE di kota besar Spanyol dengan kendaraan yang tidak memiliki lencana lingkungan dan tidak ada pengecualian khusus, Anda akan menerima denda atas pelanggaran serius, yang biasanya berjumlah 200 euro.',
  },
  {
    question: 'Apakah saya harus menempelkan stiker fisik DGT di kaca depan saya?',
    answer: 'DGT merekomendasikan untuk menampilkannya, tetapi denda jika tidak melakukannya ditetapkan oleh masing-masing otoritas lokal. Di Madrid hal itu wajib, sementara di kota-kota lain penegakannya sepenuhnya bergantung pada kamera pengenal pelat nomor otomatis.',
  },
  {
    question: 'Kendaraan diesel saya terdaftar sebelum tahun 2006 tetapi lembar teknisnya menyatakan Euro 4. Bisakah saya mendapatkan lencana?',
    answer: 'Ya. Jika data kendaraan yang dimiliki oleh otoritas lalu lintas hanya mencerminkan tanggal registrasi, Anda dapat meminta sertifikat dari produsen melalui dealer resmi dan menyerahkannya ke kantor lalu lintas untuk memperbaiki klasifikasi Anda.',
  },
  {
    question: 'Apa arti lencana C (Hijau) bagi mobil di Spanyol pada tahun 2025?',
    answer: 'Di sebagian besar ZBE Anda masih dapat mengemudi dengan bebas, tetapi lencana C membatasi parkir di pinggir jalan. Anda akan diminta untuk menggunakan tempat parkir bawah tanah atau tempat parkir resmi di dekat batas ZBE.',
  },
];

const howToData = [
  { name: 'Pilih jenis kendaraan Anda', text: 'Pilih apakah kendaraan Anda berupa mobil atau van, sepeda motor, atau kendaraan berat. Setiap kategori memiliki logika klasifikasi yang berbeda di bawah peraturan lalu lintas Spanyol.' },
  { name: 'Pilih jenis bahan bakar atau energi', text: 'Listrik, hibrida plug-in, hibrida konvensional, gas, bensin, atau diesel semuanya mengarah pada hasil lencana yang berbeda. Ambang batas jarak tempuh untuk hibrida plug-in adalah 40 km.' },
  { name: 'Masukkan tahun registrasi atau standar Euro', text: 'Untuk kendaraan pembakaran, standar Euro adalah faktor penentu. Tanggal registrasi pada lembar teknis memberikan perkiraan standar yang andal.' },
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
  name: 'Cara mensimulasikan lencana lingkungan DGT Spanyol untuk kendaraan Anda',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulator Lencana Lingkungan DGT Spanyol',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Cari tahu lencana lingkungan DGT Spanyol mana yang berlaku untuk kendaraan Anda berdasarkan jenis, bahan bakar, dan tahun registrasinya. Alat gratis untuk bersiap menghadapi Zona Emisi Rendah di Spanyol.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Jenis Kendaraan',
  vehicleCar: 'Mobil / Van',
  vehicleMoto: 'Sepeda Motor',
  vehicleHeavy: 'Truk / Bus',
  errVehicle: 'Silakan pilih jenis kendaraan',

  step2Label: '2. Bahan Bakar atau Energi',
  fuelElectric: '100% Listrik / Sel Bahan Bakar',
  fuelPhevHigh: 'Hibrida Plug-in (>40 km)',
  fuelPhevLow: 'Hibrida Plug-in (<40 km)',
  fuelHybridGas: 'Hibrida (HEV) atau Gas',
  fuelGasoline: 'Bensin',
  fuelDiesel: 'Diesel',
  errFuel: 'Silakan pilih bahan bakar atau jenis energi',

  step3Label: '3. Standar Euro atau Tahun Registrasi',
  yearPre2000: 'Sebelum 2000',
  year20002005: '2000 hingga 2005',
  year20062013: '2006 hingga 2013',
  yearPost2014: '2014 atau lebih baru',
  errYear: 'Silakan pilih periode registrasi',
  helpText: 'Jika ragu, standar Euro yang tertera pada lembar teknis Anda lebih diutamakan daripada tanggal registrasi.',

  submitBtn: 'Periksa Lencana Saya',

  resultTitle: 'Lencana yang Ditetapkan',

  badge0Label: 'Lencana Nol Emisi',
  badge0Letter: '0',
  badge0Sub: 'EMISI',
  badge0Desc: 'Kendaraan dengan efisiensi maksimum. Mereka menikmati akses tak terbatas ke Zona Emisi Rendah (ZBE) di Spanyol dan pembebasan pajak yang luas.',

  badgeEcoLabel: 'Lencana ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Kendaraan rendah emisi seperti hibrida dan mobil bertenaga gas. Memungkinkan akses ke sebagian besar ZBE dan memberikan diskon di zona parkir yang diatur.',

  badgeCLabel: 'Lencana C',
  badgeCLetter: 'C',
  badgeCDesc: 'Kendaraan pembakaran terbaru dengan standar Euro tinggi. Sirkulasi bebas tetapi tunduk pada pembatasan parkir di area ZBE tertentu.',

  badgeBLabel: 'Lencana B',
  badgeBLetter: 'B',
  badgeBDesc: 'Kendaraan pembakaran yang lebih tua. Tunduk pada pembatasan akses dan parkir yang lebih besar di kota-kota Spanyol.',

  badgeALabel: 'Tanpa Lencana',
  badgeALetter: 'TIDAK',
  badgeASub: 'ADA LENCANA',
  badgeADesc: 'Kendaraan yang sangat mencemari lingkungan tanpa hak atas lencana. Mereka secara progresif dikeluarkan dari pusat kota dan Zona Emisi Rendah di seluruh Spanyol.',

  warningText: 'Selalu verifikasi di situs web resmi DGT menggunakan pelat nomor Anda untuk mengonfirmasi hasilnya, terutama jika terjadi perbedaan administratif.',
  resetBtn: 'Simulasi Baru',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'simulator-stiker-lingkungan-spanyol',
  title: 'Simulator Lencana Lingkungan Spanyol',
  description: 'Cari tahu secara gratis lencana lingkungan DGT Spanyol mana yang berlaku untuk mobil, sepeda motor, atau van Anda untuk Zona Emisi Rendah (ZBE) di Spanyol.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Peraturan DGT tentang Perubahan Iklim dan Lalu Lintas (Spanyol)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'UU Perubahan Iklim Spanyol dan Zona Emisi Rendah (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Apa itu lencana lingkungan DGT Spanyol?' },
    {
      type: 'paragraph',
      html: '<strong>Lencana lingkungan DGT Spanyol</strong> (distintivo ambiental) adalah sistem klasifikasi kendaraan yang diperkenalkan di Spanyol untuk memberikan perlakuan istimewa bagi kendaraan yang paling tidak mencemari lingkungan. Ini terutama digunakan untuk mengontrol akses ke Zona Emisi Rendah (ZBE) di kota-kota Spanyol dengan lebih dari 50.000 penduduk.',
    },
    { type: 'title', level: 3, text: 'Jenis lencana dan manfaatnya di Spanyol' },
    {
      type: 'list',
      items: [
        '<strong>Lencana Nol Emisi:</strong> Untuk kendaraan listrik murni, hibrida plug-in dengan jangkauan listrik lebih dari 40 km, dan sel bahan bakar hidrogen. Akses tak terbatas ke ZBE dan pembebasan pajak.',
        '<strong>Lencana ECO:</strong> Hibrida konvensional, LPG, CNG, dan hibrida plug-in dengan jangkauan di bawah 40 km. Akses luas ke zona terbatas dan diskon parkir.',
        '<strong>Lencana C:</strong> Bensin Euro 4 atau lebih baru, Diesel Euro 6. Sirkulasi bebas tetapi pembatasan parkir pinggir jalan berlaku di dekat ZBE.',
        '<strong>Lencana B:</strong> Bensin Euro 3, Diesel Euro 4 atau 5. Pembatasan yang meningkat dan larangan masuk sesekali.',
        '<strong>Tanpa Lencana (Kategori A):</strong> Kendaraan yang lebih tua atau lebih mencemari lingkungan yang dikeluarkan secara bertahap dari pusat kota Spanyol sejak 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Zona Emisi Rendah di kota-kota Spanyol' },
    {
      type: 'paragraph',
      html: 'Peluncuran ZBE mengikuti UU Perubahan Iklim Spanyol, yang mewajibkan kota yang melampaui ambang batas populasi tertentu untuk membuatnya. Contoh penting adalah <em>Madrid 360</em> dan <em>Superilles Barcelona</em>, di mana masuk tanpa setidaknya lencana B dapat mengakibatkan denda otomatis yang dikeluarkan melalui kamera pengenal pelat nomor.',
    },
    {
      type: 'tip',
      title: 'Cara mendapatkan stiker fisik di Spanyol',
      html: 'Jika simulator mengonfirmasi bahwa Anda berhak atas lencana, Anda dapat membeli stiker fisik seharga sekitar 5 euro di cabang Correos (kantor pos), bengkel resmi, atau kantor lalu lintas manapun. Bawa dokumen registrasi kendaraan Anda.',
    },
  ],
};
