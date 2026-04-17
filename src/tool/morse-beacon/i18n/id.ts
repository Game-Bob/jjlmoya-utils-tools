import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Apa sinyal darurat SOS dalam kode Morse?',
    answer: "Sinyalnya adalah '... --- ...' (tiga titik, tiga garis, tiga titik). Sinyal ini ditransmisikan terus menerus tanpa spasi di antara huruf-huruf untuk menunjukkan keadaan darurat segera.",
  },
  {
    question: 'Mengapa senter tidak berfungsi di browser saya?',
    answer: 'Mengaktifkan senter mengharuskan browser memiliki izin kamera. Beberapa browser seluler atau versi desktop lama tidak mendukung API ini karena alasan privasi.',
  },
  {
    question: 'Apakah sinyal layar SOS terlihat?',
    answer: 'Ya, dalam kondisi gelap gulita, kecerahan maksimum layar putih yang berkedip dalam Morse dapat terlihat dari jarak beberapa ratus meter, menjadikannya alternatif yang berguna jika senter gagal.',
  },
  {
    question: 'Apa itu kode Morse internasional?',
    answer: 'Ini adalah sistem komunikasi yang menggunakan urutan sinyal pendek (titik) dan panjang (garis) untuk mewakili huruf dan angka, yang distandarisasi oleh ITU untuk komunikasi radio dan sinyal optik.',
  },
];

const howToData = [
  {
    name: 'Tulis pesan',
    text: "Masukkan teks yang ingin Anda kirimkan atau gunakan tombol 'SOS' yang telah dikonfigurasi sebelumnya untuk keadaan darurat.",
  },
  {
    name: 'Konfigurasi kecepatan',
    text: 'Sesuaikan WPM (kata per menit) untuk membuat sinyal lebih cepat atau lebih lambat tergantung pada visibilitas.',
  },
  {
    name: 'Pilih sumber cahaya',
    text: 'Aktifkan kedipan layar penuh atau izinkan akses ke senter kamera untuk sinyal yang lebih kuat.',
  },
  {
    name: 'Mulai transmisi',
    text: 'Tekan Transmisikan agar sistem mengonversi teks menjadi pulsa visual otomatis mengikuti standar Morse.',
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
  name: 'Cara menggunakan suar Morse untuk mentransmisikan pesan',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Suar Morse: Pemancar SOS Taktis',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ubah perangkat Anda menjadi stasiun transmisi Morse. Gunakan lampu kilat dan layar sebagai sinyal lampu darurat dan komunikasi taktis.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Pesan untuk Ditransmisikan',
  placeholder: 'Ketik pesan Anda di sini (SOS, HELLO, HELP)...',
  btnTransmit: 'Transmisikan',
  btnSosLoop: 'Loop SOS',
  btnStop: 'Berhenti',
  labelTorch: 'Lampu Kilat/Senter',
  statusStandby: 'STANDBY',
  statusTransmitting: 'TRANSMISI',
  statusStopping: 'BERHENTI...',
  statusWaiting: 'MENUNGGU',
  statusReady: 'PERANGKAT SIAP',
  statusNoTorch: 'TANPA SENTER',
  statusNoPermission: 'TANPA IZIN',
  statusNotSupported: 'TIDAK DIDUKUNG',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'MENGIRIM:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'mercusuar-morse',
  title: 'Suar Morse: Pemancar SOS Taktis',
  description: 'Ubah perangkat Anda menjadi stasiun transmisi Morse. Gunakan lampu kilat dan layar sebagai sinyal lampu darurat dan komunikasi taktis.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'ITU-R M.1677-1 — International Morse Code', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Kode Morse — Wikipedia', url: 'https://id.wikipedia.org/wiki/Kode_Morse' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Bahasa Cahaya',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini mengubah perangkat Anda menjadi suar pemberi sinyal optik yang mampu mentransmisikan pesan yang terlihat dari jarak berkilometer-kilometer. Menggunakan standar Kode Morse internasional, ini memungkinkan komunikasi diam atau darurat melalui pulsa cahaya (senter dan layar).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Standar Universal',
          description: 'Dikembangkan pada tahun 1830 oleh Samuel Morse, sistem biner titik dan garis ini merevolusi telekomunikasi. Kesederhanaannya membuatnya sangat tangguh: dapat ditransmisikan melalui suara, radio, listrik, atau cahaya, dan tetap terbaca bahkan di bawah gangguan parah.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'Mode Darurat SOS',
          description: "Tombol 'Loop SOS' mentransmisikan urutan ··· --- ··· secara terus menerus. Sinyal ini diakui secara universal sebagai panggilan darurat dan, berkat kontras senter LED yang tinggi, terlihat dari jarak jauh bahkan di siang hari dalam kondisi tertentu.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Standar ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini secara ketat menghormati <strong>pengaturan waktu regulasi</strong> kode Morse internasional seperti yang didefinisikan oleh International Telecommunication Union.',
    },
    {
      type: 'list',
      items: [
        '1 titik = 1 unit waktu',
        '1 garis = 3 unit waktu',
        'Spasi antar elemen = 1 unit',
        'Spasi antar huruf = 3 unit',
        'Spasi antar kata = 7 unit',
      ],
    },
    {
      type: 'tip',
      title: 'Kecepatan standar',
      html: 'Kecepatan default-nya adalah <strong>15 WPM</strong> (kata per menit), yang sesuai dengan kecepatan transmisi profesional. Pada 15 WPM, 1 unit = 80 md.',
    },
  ],
};
