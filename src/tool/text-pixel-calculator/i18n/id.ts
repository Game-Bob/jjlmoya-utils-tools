import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Bagaimana cara menghitung lebar piksel teks secara online?',
    answer: 'Tempelkan teks Anda ke dalam kotak input, konfigurasikan font dan ukurannya, dan alat ini akan secara otomatis menggunakan API Canvas browser untuk memberikan lebar tepat dalam piksel.',
  },
  {
    question: 'Mengapa lebar piksel bervariasi di antara jenis huruf?',
    answer: "Sebagian besar font bersifat proporsional, yang berarti setiap karakter memiliki lebar yang berbeda. Misalnya, huruf besar 'M' selalu lebih lebar daripada huruf kecil 'i' dalam font sans-serif standar.",
  },
  {
    question: 'Apakah mengukur karakter sama dengan mengukur piksel?',
    answer: 'Tidak. Mengukur karakter memberi Anda panjang string, sedangkan mengukur piksel memberi Anda ruang visual yang ditempatinya. Ini sangat penting untuk memastikan teks tidak meluap dari wadahnya dalam desain web.',
  },
  {
    question: 'Dapatkah saya menggunakan jenis huruf Google Fonts apa pun?',
    answer: 'Ya, selama font terpasang di sistem operasi Anda atau dimuat di halaman saat ini, alat ini akan mengukur dimensinya secara akurat.',
  },
  {
    question: 'Apakah aman untuk memproses teks pribadi atau cuplikan kode?',
    answer: 'Ya. Kalkulator ini bekerja sepenuhnya secara lokal. Tidak ada data yang dikirim ke server eksternal, menjamin privasi lengkap untuk proyek Anda.',
  },
];

const howToData = [
  { name: 'Masukkan teks', text: 'Ketik atau tempel teks yang ingin Anda ukur ke area input.' },
  { name: 'Konfigurasikan font', text: 'Atur keluarga font, ukuran dalam piksel, ketebalan, dan apakah miring.' },
  { name: 'Baca hasilnya', text: 'Lebar piksel dan jumlah karakter diperbarui secara real-time.' },
  { name: 'Salin nilainya', text: 'Klik "Salin Lebar" untuk menyimpan angka piksel ke papan klip.' },
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
  name: 'Cara mengukur lebar teks dalam piksel',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Lebar Piksel Teks',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Hitung lebar piksel teks apa pun secara akurat berdasarkan font, ukuran, dan gaya.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Teks untuk diukur',
  textPlaceholder: 'Ketik atau tempel di sini teks yang ingin Anda ukur...',
  defaultText: 'Halo Dunia',
  fontLabel: 'Keluarga font',
  sizeLabel: 'Ukuran (px)',
  weightLabel: 'Ketebalan',
  italicLabel: 'Miring',
  widthLabel: 'Lebar (piksel)',
  charsLabel: 'Karakter',
  previewLabel: 'Pratinjau visual',
  copyBtn: 'Salin Lebar',
  resetBtn: 'Atur Ulang',
  copyDone: 'Lebar disalin',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'kalkulator-lebar-piksel-teks',
  title: 'Kalkulator Lebar Piksel Teks',
  description: 'Hitung secara akurat seberapa lebar teks apa pun dalam piksel berdasarkan font, ukuran, dan gaya. Alat gratis untuk desainer dan pengembang.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Ukur lebar piksel yang tepat dari teks apa pun' },
    {
      type: 'paragraph',
      html: 'Apakah teks Anda meluap dari wadahnya? Perlu tahu berapa banyak ruang yang digunakan judul sebelum merendernya? <strong>API Canvas browser</strong> memungkinkan Anda mengukur lebar tepat dari string teks apa pun dengan presisi piksel, tanpa harus merendernya di DOM.',
    },
    { type: 'title', level: 3, text: 'Mengapa menghitung karakter saja tidak cukup' },
    {
      type: 'paragraph',
      html: 'Jenis huruf modern bersifat <strong>proporsional</strong>: setiap glif memiliki lebar yang berbeda. Huruf "W" dapat memakan ruang tiga kali lebih banyak daripada huruf "i". Jumlah karakter tidak memberi tahu Anda apa pun tentang ruang visual sebenarnya yang ditempati teks.',
    },
    {
      type: 'list',
      items: [
        '<strong>Desain web:</strong> Mencegah luapan (overflow) pada tombol, label, dan sel tabel.',
        '<strong>SEO:</strong> Mesin pencari memotong judul berdasarkan piksel, bukan karakter.',
        '<strong>Canvas dan PDF:</strong> Hitung posisi tepat sebelum menggambar teks secara terprogram.',
        '<strong>Tooltip dan gelembung:</strong> Ukur wadah secara dinamis berdasarkan teks di dalamnya.',
      ],
    },
    { type: 'title', level: 3, text: 'Cara kerja pengukuran dengan Canvas' },
    {
      type: 'paragraph',
      html: 'Metode <code>ctx.measureText()</code> dari API Canvas mengembalikan objek <code>TextMetrics</code> dengan properti <code>width</code> yang mencerminkan lebar piksel CSS menggunakan font yang saat ini aktif. Alat ini mengonfigurasi konteks dengan font, ukuran, ketebalan, dan gaya Anda sebelum mengukur.',
    },
    {
      type: 'code',
      ariaLabel: 'Contoh Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Halo Dunia').width; // mis. 74.5",
    },
    { type: 'title', level: 3, text: 'Privasi dan pemrosesan lokal' },
    {
      type: 'paragraph',
      html: 'Semua perhitungan terjadi di browser Anda. Tidak ada teks, cuplikan kode, atau data pribadi yang meninggalkan perangkat Anda.',
    },
    {
      type: 'tip',
      title: 'Jenis huruf Google Fonts',
      html: 'Untuk mengukur jenis huruf Google Fonts secara akurat, pastikan font tersebut sudah dimuat di halaman atau terpasang di sistem Anda. Jika tidak, browser akan menggunakan font pengganti dan hasilnya akan berbeda.',
    },
  ],
};
