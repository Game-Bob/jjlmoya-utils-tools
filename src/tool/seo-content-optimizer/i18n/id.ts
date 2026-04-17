import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: 'Bagaimana alat ini membantu peringkat SEO saya?',
    answer: 'Dengan menganalisis kepadatan kata kunci dan keterbacaan kalimat, Anda memastikan konten Anda mudah dipahami oleh pengguna dan relevan bagi mesin pencari, serta menghindari penalti pengoptimalan berlebih.',
  },
  {
    question: 'Elemen HTML apa yang diperiksa oleh analisis teknis?',
    answer: 'Alat ini memverifikasi keberadaan dan keunikan tag H1, keberadaan subjudul H2/H3, dan atribut alt pada gambar.',
  },
  {
    question: 'Apakah konten saya disimpan di server mana pun?',
    answer: 'Tidak. Analisis berjalan 100% secara lokal di browser Anda. Konten Anda tidak pernah meninggalkan komputer Anda.',
  },
  {
    question: 'Apakah ini kompatibel dengan kriteria Yoast SEO?',
    answer: 'Ya, kami menerapkan kriteria yang mirip dengan Yoast: panjang kalimat, distribusi paragraf, dan hierarki judul.',
  },
];

const howToData = [
  { name: 'Tulis atau tempel teks Anda', text: 'Masukkan konten yang ingin Anda analisis di area teks utama.' },
  { name: 'Tinjau daftar periksa pengoptimalan', text: 'Periksa peringatan panjang teks, keterbacaan, dan kepadatan kata kunci di panel samping.' },
  { name: 'Analisis HTML teknis', text: 'Beralih ke tab analisis teknis untuk memverifikasi tag H1, alt gambar, dan struktur metadata.' },
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
  name: 'Cara mengoptimalkan konten untuk SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pengoptimal Konten SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Analisis kepadatan kata kunci, keterbacaan, dan struktur HTML teknis teks Anda secara real-time, tanpa mengirimkan data ke server mana pun.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Analisis Teks',
  tabHtml: 'Analisis HTML Teknis',
  textareaPlaceholder: 'Tulis teks Anda atau tempel kode HTML Anda di sini...',
  statsChars: 'Karakter',
  statsWords: 'Kata',
  statsReading: 'Bacaan',
  statsSentences: 'Kalimat',
  checklistTitle: 'Daftar Periksa Pengoptimalan',
  keywordsTitle: 'Kepadatan Kata Kunci',
  technicalTitle: 'Analisis HTML Teknis',
  h1Label: 'H1 Terdeteksi',
  linksLabel: 'Tautan (a)',
  imgsLabel: 'Gambar (img)',
  altsLabel: 'Alt hilang',
  emptyState: 'Tidak ada data',
  analyzing: 'Menganalisis...',
  checkInsufficient: 'Panjang tidak mencukupi (< 300 kata)',
  checkPillar: 'Konten pilar sangat bagus (> 900 kata)',
  checkGoodLength: 'Panjang yang baik untuk SEO',
  checkLongSentences: 'Terlalu banyak kalimat panjang (> 25% teks)',
  checkGoodReadability: 'Keterbacaan kalimat optimal',
  checkLongParagraphs: 'Pisahkan paragraf yang sangat panjang (> 150 kata)',
  checkMissingH1: 'Tag H1 hilang',
  checkMultipleH1: 'Beberapa tag H1 terdeteksi',
  checkMissingH2: 'Subjudul (H2) hilang',
  checkMissingTitle: 'Tag meta title hilang',
  stopWords: JSON.stringify(['di', 'ke', 'dari', 'pada', 'dalam', 'untuk', 'dengan', 'dan', 'atau', 'tapi', 'namun', 'oleh', 'karena', 'bahwa', 'yang', 'adalah', 'sebagai', 'itu', 'ini', 'kami', 'saya', 'anda', 'mereka', 'dia', 'nya', 'kita', 'sudah', 'telah', 'akan', 'bisa', 'dapat', 'oleh', 'juga', 'hanya', 'saja', 'jika', 'bila', 'seperti', 'terhadap', 'tentang']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'pengoptimasi-konten-seo',
  title: 'Pengoptimal Konten SEO',
  description: 'Analisis kepadatan kata kunci, keterbacaan, dan struktur HTML teknis teks Anda secara real-time. Alat SEO gratis dan pribadi.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: "Panduan Memulai SEO dari Google", url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=id' },
    { name: 'Kriteria keterbacaan Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Pengoptimal Konten SEO: Kata Kunci, Keterbacaan, dan Struktur' },
    {
      type: 'paragraph',
      html: 'Kualitas konten tidak lagi diukur hanya berdasarkan kata kunci yang Anda masukkan, melainkan bagaimana Anda menyusun informasi agar mudah dicerna baik oleh manusia maupun perayap Google. <strong>Alat analisis SEO real-time</strong> kami memberi Anda kontrol penuh atas kepadatan kata kunci, keterbacaan paragraf, dan elemen teknis HTML yang mendasar.',
    },
    { type: 'title', level: 3, text: 'Kepadatan Kata Kunci dan Relevansi Semantik' },
    {
      type: 'paragraph',
      html: '<strong>Kepadatan kata kunci</strong> menunjukkan seberapa sering sebuah istilah muncul dibandingkan dengan bagian teks lainnya. Pengulangan yang berlebihan akan memicu filter <em>keyword stuffing</em>, sementara kepadatan yang sangat rendah mungkin menyulitkan mesin pencari untuk mengidentifikasi topik utama artikel Anda.',
    },
    {
      type: 'list',
      items: [
        '<strong>Analisis relevansi:</strong> Identifikasi apakah kata-kata yang paling sering diulang sesuai dengan intensi pencarian Anda.',
        '<strong>Pencegahan penalti:</strong> Hindari pengulangan istilah yang berlebihan yang mungkin terlihat seperti spam.',
        '<strong>Optimalisasi semantik:</strong> Temukan keseimbangan antara istilah teknis dan bahasa alami.',
      ],
    },
    { type: 'title', level: 3, text: 'Keterbacaan dalam Gaya Yoast' },
    {
      type: 'paragraph',
      html: 'Keterbacaan adalah faktor peringkat tidak langsung namun krusial. Jika pengguna pergi karena paragraf yang berupa blok teks tanpa henti, <em>Dwell Time</em> Anda akan turun. Alat analisis ini mendeteksi kalimat panjang (lebih dari 20 kata), paragraf di atas 150 kata, dan memeriksa keberadaan subjudul.',
    },
    {
      type: 'tip',
      title: 'Waktu baca',
      html: 'Kebanyakan pengguna memutuskan apakah akan membaca sebuah artikel dalam waktu kurang dari 10 detik. Mengetahui estimasi waktu baca (dihitung dengan rata-rata 200 kata per menit) membantu mengurangi rasio pantulan dengan mengatur ekspektasi pembaca.',
    },
    { type: 'title', level: 3, text: 'Analisis HTML Teknis' },
    {
      type: 'paragraph',
      html: 'Tempelkan kode sumber Anda untuk memverifikasi elemen-elemen kunci: keunikan <strong>H1</strong>, keberadaan subjudul H2/H3, gambar tanpa atribut <code>alt</code>, dan keberadaan tag <code>title</code>. Semua pemrosesan terjadi di browser Anda tanpa mengirimkan data ke server mana pun.',
    },
  ],
};
