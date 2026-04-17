import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Apakah kalkulator selisih tanggal ini gratis?',
    answer: 'Ya, ini adalah alat 100% gratis yang dapat diakses dari browser apa pun tanpa perlu registrasi atau unduhan.',
  },
  {
    question: 'Bagaimana tahun kabisat ditangani dalam total waktu?',
    answer: 'Alat ini menggunakan kronologi standar JavaScript (UTC), yang secara otomatis menangani tahun kabisat dan jumlah hari yang bervariasi di setiap bulan untuk memberikan hasil yang tepat.',
  },
  {
    question: 'Dapatkah saya menghitung selisih jam dan menit juga?',
    answer: 'Ya. Bidang input memungkinkan Anda memilih waktu yang tepat. Hasilnya memberi Anda rincian dalam hari, jam, menit, dan detik, serta total akumulasi.',
  },
  {
    question: 'Apakah input tanggal saya dikirim ke server mana pun?',
    answer: 'Tidak. Semua pemrosesan dilakukan secara lokal di browser Anda. Kami tidak menyimpan atau menerima informasi apa pun tentang tanggal yang Anda hitung.',
  },
];

const howToData = [
  { name: 'Pilih tanggal mulai', text: "Masukkan tanggal dan waktu mulai, atau klik 'Hari Ini' untuk mengaturnya secara instan." },
  { name: 'Pilih tanggal akhir', text: "Tentukan momen target. Gunakan 'Sekarang' untuk mengukur waktu yang telah berlalu hingga saat ini secara tepat." },
  { name: 'Baca hasilnya', text: 'Periksa rincian hari, jam, menit, dan detik, ditambah total akumulasi untuk minggu dan jam.' },
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
  name: 'Cara menghitung selisih antara dua tanggal',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Selisih Tanggal',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Hitung secara tepat berapa lama waktu yang telah berlalu antara dua tanggal atau berapa lama hingga suatu acara terjadi. Hasil dalam hari, jam, dan menit.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Tanggal Mulai',
  endLabel: 'Tanggal Selesai',
  nowBtn: 'Sekarang',
  todayBtn: 'Hari Ini',
  tomorrowBtn: 'Besok',
  daysLabel: 'Hari',
  hoursLabel: 'Jam',
  minsLabel: 'Menit',
  secsLabel: 'Detik',
  weeksLabel: 'Total Minggu',
  totalHoursLabel: 'Total Jam',
  totalMinsLabel: 'Total Menit',
  elapsed: 'Waktu yang Telah Berlalu',
  past: 'Waktu di Masa Lalu',
  invalidDates: 'Tanggal tidak valid',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'kalkulator-selisih-tanggal',
  title: 'Kalkulator Selisih Tanggal',
  description: 'Hitung secara tepat berapa lama waktu yang telah berlalu antara dua tanggal atau berapa lama hingga suatu acara terjadi. Alat gratis dengan hasil dalam hari, jam, dan menit.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: Sejarah Kalender Gregorian', url: 'https://id.wikipedia.org/wiki/Kalender_Gregorius' },
    { name: 'Wikipedia: Manajemen Waktu — Matriks Eisenhower', url: 'https://id.wikipedia.org/wiki/Manajemen_waktu' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Kalkulator selisih tanggal dengan hari, jam, dan menit' },
    {
      type: 'paragraph',
      html: 'Menghitung <strong>selisih antara dua tanggal</strong> adalah salah satu tugas yang paling umum tetapi sering diremehkan, baik dalam kehidupan sehari-hari maupun lingkungan profesional. Baik Anda merencanakan peluncuran produk, menghitung usia tepat seseorang, atau mengukur waktu yang tersisa hingga acara spesial, memiliki alat yang presisi sangat penting untuk manajemen waktu yang efisien.',
    },
    { type: 'title', level: 3, text: 'Untuk apa kalkulator selisih tanggal digunakan?' },
    {
      type: 'paragraph',
      html: 'Kegunaan alat ini mencakup berbagai bidang. Di tempat kerja, manajer proyek menggunakannya untuk menentukan batas waktu pengiriman dan melacak kemajuan pencapaian (milestone). Dalam konteks hukum dan administratif, alat ini penting untuk menghitung masa kedaluwarsa atau durasi kontrak.',
    },
    {
      type: 'list',
      items: [
        '<strong>Perencanaan acara:</strong> Ketahui berapa minggu dan hari yang tersisa hingga pernikahan, konferensi, atau perjalanan.',
        '<strong>Manajemen proyek:</strong> Hitung waktu yang telah berlalu dari dimulainya suatu fase hingga penyelesaiannya.',
        '<strong>Keuangan:</strong> Tentukan jumlah hari untuk perhitungan bunga atau tanggal jatuh tempo faktur.',
        '<strong>Sumber Daya Manusia:</strong> Ukur masa kerja karyawan atau akumulasi hari libur.',
        '<strong>Kesehatan:</strong> Pantau kemajuan pengobatan atau waktu pemulihan setelah prosedur medis.',
      ],
    },
    { type: 'title', level: 3, text: 'Persepsi waktu dan presisi digital' },
    {
      type: 'paragraph',
      html: 'Kita sering cenderung membulatkan waktu. Kita mengatakan "sekitar satu bulan" padahal sebenarnya masih 27 hari dan 14 jam lagi. Dengan menggunakan kalkulator digital, kita menghilangkan subjektivitas dan memperoleh data yang bersih untuk pengambilan keputusan yang tepat.',
    },
    { type: 'title', level: 3, text: 'Hari kalender vs hari kerja' },
    {
      type: 'paragraph',
      html: 'Alat ini menghitung <strong>hari kalender</strong>, termasuk akhir pekan dan hari libur nasional. Untuk perhitungan astronomi dan sipil umum, waktu diukur secara berkelanjutan. Jika Anda perlu memperkirakan waktu proyek, ingatlah bahwa hari yang ditampilkan mewakili kalender nyata secara penuh.',
    },
    { type: 'title', level: 3, text: 'Dampak waktu pada produktivitas' },
    {
      type: 'paragraph',
      html: 'Hukum Parkinson menyatakan bahwa pekerjaan akan berkembang untuk mengisi waktu yang tersedia untuk penyelesaiannya. Dengan memvisualisasikan secara tepat berapa jam dan menit yang tersisa hingga batas waktu, tim cenderung mengoptimalkan upaya mereka dan tetap fokus.',
    },
    {
      type: 'tip',
      title: 'Tanggal masa depan dan masa lalu',
      html: 'Anda dapat menggunakan kalkulator ini untuk tanggal masa depan maupun masa lalu. Jika tanggal akhir lebih awal dari tanggal mulai, sistem secara otomatis mendeteksi bahwa itu adalah waktu yang telah berlalu di masa lalu, dengan tetap menjaga presisi dalam nilai selisih absolut.',
    },
  ],
};
