import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: 'Algoritma optimisasi apa yang digunakan?',
    answer: 'Alat ini menggunakan resolusi tingkat lanjut dari Travelling Salesman Problem (TSP). Algoritma ini menganalisis semua perhentian dan menentukan urutan sekuensial yang meminimalkan total jarak tempuh, sehingga menghemat waktu dan bahan bakar.',
  },
  {
    question: 'Apakah aman membagikan lokasi saya?',
    answer: 'Ya. Alat ini memproses data geografis secara lokal di browser Anda. Kami tidak menyimpan rute, perhentian, atau riwayat lokasi Anda di server kami.',
  },
  {
    question: 'Berapa banyak perhentian yang bisa saya optimalkan sekaligus?',
    answer: 'Versi gratis kami memungkinkan Anda mengoptimalkan hingga 10 perhentian secara instan. Untuk rute profesional yang lebih besar, sistem dioptimalkan untuk menjaga performa tinggi tanpa memblokir browser.',
  },
  {
    question: 'Dapatkah saya menggunakan rute ini langsung di Google Maps?',
    answer: 'Tentu saja! Setelah rute dioptimalkan, alat ini akan membuat tautan navigasi yang kompatibel dengan Google Maps sehingga Anda dapat memulai perjalanan langsung dari ponsel Anda.',
  },
];

const howToData = [
  {
    name: 'Tambahkan titik awal',
    text: 'Ketik alamat awal atau klik pada peta untuk menetapkan tempat rute Anda dimulai.',
  },
  {
    name: 'Masukkan lokasi tujuan',
    text: 'Tambahkan semua lokasi yang perlu Anda kunjungi. Urutannya tidak masalah, karena sistem akan mengurutkannya kembali untuk Anda.',
  },
  {
    name: 'Optimalkan urutan',
    text: 'Klik tombol optimalkan. Algoritma akan menghitung dalam hitungan detik urutan paling efisien untuk mencakup semua perhentian.',
  },
  {
    name: 'Buka di navigator',
    text: 'Gunakan tombol navigasi untuk memindahkan rute yang sudah dioptimalkan ke aplikasi peta favorit Anda.',
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
  name: 'Cara mengoptimalkan rute dengan banyak perhentian',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Rute Optimal',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimalkan rute pengiriman atau perjalanan Anda secara gratis. Urutkan ulang perhentian secara otomatis untuk menemukan jalur terpendek dan paling efisien.',
};

const ui: RoutesUI = {
  titleSidebar: 'Titik Rute',
  descriptionSidebar: 'Klik pada peta untuk menambah perhentian. Titik pertama adalah awal.',
  emptyState: 'Tidak ada titik yang ditambahkan',
  btnOptimize: 'Hitung Rute Optimal',
  btnCalculating: 'Menghitung...',
  btnClear: 'Hapus Semua',
  labelDistance: 'Estimasi Total Jarak',
  labelDeleteAria: 'Hapus',
  labelLoadingAddress: 'Memuat alamat...',
  labelPoint: 'Titik',
  errorMinPoints: 'Setidaknya dibutuhkan dua titik untuk menghitung rute.',
  errorCalculate: 'Kesalahan saat menghitung rute.',
  errorAddress: 'Kesalahan saat mengambil alamat',
  errorAddressName: 'Titik tidak dikenal',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'rute-optimal',
  title: 'Kalkulator Rute Optimal Gratis',
  description: 'Optimalkan rute pengiriman atau perjalanan Anda secara gratis. Alat kami mengurutkan ulang perhentian Anda secara otomatis untuk menemukan jalur terpendek dan paling efisien.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Teknologi dan Sumber',
  bibliography: [
    { name: 'Leaflet — Library peta interaktif sumber terbuka', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Data kartografi terbuka', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Tile peta Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Layanan geocoding balik (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (optimisasi rute)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pengoptimal Rute Cerdas: TSP untuk Pengiriman dan Perjalanan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pengoptimal rute online</strong> adalah alat gratis yang memecahkan masalah klasik <em>Travelling Salesman Problem (TSP)</em>. Tambahkan semua perhentian Anda dalam urutan apa pun dan algoritma akan secara otomatis menghitung urutan paling efisien untuk meminimalkan total jarak tempuh.',
    },
    {
      type: 'title',
      text: 'Bagaimana cara kerja algoritma optimisasi rute?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menggunakan API <strong>OSRM (Open Source Routing Machine)</strong>, mesin routing berperforma tinggi berdasarkan data OpenStreetMap. Prosesnya adalah: pertama, menghitung rute melingkar yang optimal di antara semua titik (algoritma TSP), kemudian menentukan titik potong terbaik untuk mengubahnya menjadi perjalanan linear satu arah, dan akhirnya menggambar rute di peta dengan estimasi total jarak.',
    },
    {
      type: 'title',
      text: 'Kasus penggunaan: pengiriman, perwakilan penjualan, dan perjalanan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pengoptimal rute ini sangat ideal bagi <strong>kurir independen</strong> yang perlu mengatur banyak pengiriman harian, <strong>perwakilan penjualan lapangan</strong> yang mengunjungi klien di suatu area, atau <strong>wisatawan</strong> yang ingin mengunjungi beberapa kota atau tengara dalam urutan yang paling efisien. Alat ini memproses semua informasi di browser, tanpa membagikan data Anda dengan server milik siapa pun.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritma', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Mesin routing', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privasi', icon: 'mdi:lock-check' },
        { value: 'Gratis', label: 'Biaya', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privasi dan pemrosesan lokal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Semua logika alat ini berjalan langsung di browser Anda. Koordinat perhentian Anda hanya dikirim ke API publik OSRM dan Nominatim untuk menghitung rute dan mendapatkan nama alamat, tetapi <strong>tidak disimpan di server milik siapa pun</strong>. Anda dapat dengan aman menggunakan alat ini untuk merencanakan rute bisnis dengan informasi sensitif.',
    },
    {
      type: 'tip',
      title: 'Tips penggunaan',
      html: '<strong>Untuk hasil terbaik</strong>, tambahkan perhentian dengan mengklik langsung pada peta daripada mencari alamat. Penanda dapat digeser, sehingga Anda dapat menyesuaikan posisi tepat setiap titik setelah menempatkannya.',
    },
  ],
};
