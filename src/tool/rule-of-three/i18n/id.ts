import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'Apa itu aturan tiga sederhana langsung?',
    answer: 'Ini adalah metode matematika untuk menyelesaikan masalah proporsionalitas antara tiga nilai yang diketahui dan satu nilai yang tidak diketahui. Disebut "langsung" karena ketika satu kuantitas meningkat, kuantitas lainnya meningkat dalam proporsi yang sama.',
  },
  {
    question: 'Kapan saya harus menggunakan aturan tiga invers (terbalik)?',
    answer: 'Ini digunakan ketika kuantitas berbanding terbalik (jika satu meningkat, yang lain menurun). Contoh: jika 2 tukang cat butuh 5 jam, 4 tukang cat akan butuh waktu lebih singkat. Kalkulator kami saat ini berfokus pada proporsionalitas langsung.',
  },
  {
    question: 'Apakah akurat untuk perhitungan profesional?',
    answer: 'Ya. Kalkulator kami menggunakan presisi floating point tingkat tinggi, ideal untuk penyesuaian dosis, skala desain grafis, anggaran komersial, dan konversi resep.',
  },
  {
    question: 'Bagaimana cara menghitungnya secara manual?',
    answer: 'Rumusnya adalah: (Nilai B * Nilai C) / Nilai A = X. Artinya, Anda mengalikan nilai-nilai diagonal dan membagi hasilnya dengan nilai yang tersisa.',
  },
];

const howToData = [
  {
    name: 'Identifikasi hubungan dasar',
    text: 'Masukkan dua nilai yang diketahui yang membentuk proporsi awal (misalnya 100km sama dengan 8 liter).',
  },
  {
    name: 'Masukkan nilai ketiga',
    text: 'Tulis nilai baru yang padanannya ingin Anda temukan (misalnya jika saya akan menempuh perjalanan 250km...).',
  },
  {
    name: 'Dapatkan hasilnya',
    text: 'Sistem akan secara otomatis menghitung nilai yang tidak diketahui (X) secara real-time tanpa menekan tombol apa pun.',
  },
  {
    name: 'Salin atau reset',
    text: 'Anda dapat menyalin hasilnya langsung ke papan klip atau menghapus bidang untuk melakukan perhitungan baru.',
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
  name: 'Cara menggunakan kalkulator aturan tiga',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Aturan Tiga Sederhana',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Selesaikan proporsi matematika secara instan. Alat definitif untuk menghitung jumlah, resep, diskon, dan konversi.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Jika saya punya...',
  labelB: 'Sama dengan...',
  labelC: 'Dan sekarang saya punya...',
  labelX: 'Hasil (X)',
  hintA: 'Jumlah awal',
  hintB: 'Nilai diketahui',
  hintC: 'Jumlah baru',
  hintX: 'Nilai terhitung',
  separatorIsTo: 'berbanding',
  separatorWillBe: 'adalah',
  copyTitle: 'Salin hasil',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'aturan-tiga',
  title: 'Kalkulator Aturan Tiga Sederhana',
  description: 'Selesaikan proporsi matematika secara instan. Alat definitif untuk menghitung jumlah, resep, diskon, dan konversi.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Proporsionalitas (matematika) — Wikipedia', url: 'https://id.wikipedia.org/wiki/Proporsionalitas' },
    { name: 'Rasio dan proporsi — Khan Academy', url: 'https://id.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Untuk apa aturan tiga digunakan?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Aturan tiga sederhana langsung adalah "pisau lipat Swiss" dalam matematika. Ini menyelesaikan masalah di mana tiga titik data diketahui dan kita mencari titik keempat. Jika Anda mengetahui hubungan antara <strong>A dan B</strong>, dan Anda memiliki nilai baru <strong>C</strong>, kalkulator ini akan menemukan <strong>X</strong> secara instan.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Memasak dan Resep',
          description: 'Jika resep memerlukan 500g tepung untuk 4 orang, berapa banyak yang saya butuhkan untuk 7 orang?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Belanja dan Harga',
          description: 'Jika satu pak isi 3 kaleng seharga €2,50, berapa harga 10 kaleng?',
          points: ['(2,50 × 10) ÷ 3 = €8,33'],
        },
        {
          icon: 'mdi:car',
          title: 'Perjalanan dan Jarak',
          description: 'Jika saya butuh 45 menit untuk menempuh 60km, berapa lama waktu yang dibutuhkan untuk menempuh 140km?',
          points: ['(45 × 140) ÷ 60 = 105 menit'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Desain dan Layar',
          description: 'Jika gambar lebarnya 1920px dan saya ingin menguranginya menjadi 800px dengan tetap menjaga proporsi...',
          points: ['(TinggiAsli × 800) ÷ 1920 = TinggiBaru'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Bagaimana cara kerja rumusnya?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rumusnya selalu sama: <strong>kalikan nilai diagonal dan bagi dengan nilai yang tersisa</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Rumus aturan tiga sederhana langsung',
    },
    {
      type: 'paragraph',
      html: 'Dalam kalkulator: kita mengalikan nilai <strong>B</strong> dengan nilai <strong>C</strong> dan membaginya dengan <strong>A</strong>. Hasilnya adalah <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Penggunaan profesional dan sehari-hari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Di luar matematika sekolah, aturan tiga ada di mana-mana: di farmasi untuk menghitung dosis berdasarkan berat badan, dalam fotografi untuk menghitung waktu pencahayaan, dalam keuangan untuk menghitung variasi persentase, atau dalam percetakan untuk menskalakan dimensi format.',
    },
    {
      type: 'tip',
      title: 'Tips presisi',
      html: 'Hasil ditampilkan hingga 4 tempat desimal yang signifikan. Jika Anda bekerja dengan uang atau pengukuran yang tepat, ingatlah untuk membulatkannya sesuai konteks: euro menjadi 2 tempat desimal, piksel menjadi bilangan bulat.',
    },
  ],
};
