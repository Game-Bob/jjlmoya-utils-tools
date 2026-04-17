import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Apa sebenarnya fungsi pembersih daftar email ini?',
    answer: 'Alat ini menganalisis daftar email Anda, menghapus duplikasi, menghilangkan spasi yang tidak perlu, memvalidasi format dasar, dan menormalkan semua alamat menjadi huruf kecil untuk memastikan database yang bersih.',
  },
  {
    question: 'Apakah ada batasan jumlah email?',
    answer: 'Tidak ada batasan record yang ketat. Anda dapat memproses ribuan email secara instan dalam satu kali jalan. Satu-satunya kendala adalah memori browser Anda jika daftar tersebut sangat besar.',
  },
  {
    question: 'Apakah aman menempelkan email saya di sini?',
    answer: 'Tentu saja. Semua pemrosesan dilakukan secara lokal di browser Anda sendiri melalui JavaScript. Data Anda tidak pernah dikirim ke server kami atau disimpan di database eksternal mana pun.',
  },
  {
    question: 'Bagaimana ini meningkatkan keterkiriman (deliverability) kampanye saya?',
    answer: 'Dengan menghapus alamat yang tidak ada atau formatnya salah, Anda mengurangi rasio pentalan (bounce rate), yang meningkatkan reputasi domain Anda di mata penyedia seperti Gmail, Outlook, dan Yahoo.',
  },
];

const howToData = [
  { name: 'Tempelkan email Anda', text: 'Salin daftar email Anda dan tempelkan ke dalam kotak teks. Email dapat dipisahkan oleh baris, koma, atau spasi.' },
  { name: 'Bersihkan daftar', text: 'Klik tombol "Bersihkan Daftar" untuk memulai proses validasi dan penghapusan duplikat.' },
  { name: 'Tinjau hasilnya', text: 'Periksa statistik yang menunjukkan email asli vs. hasil akhir dan tinjau daftar yang telah dibersihkan di panel bawah.' },
  { name: 'Salin atau unduh', text: 'Salin hasilnya langsung ke papan klip atau unduh sebagai berkas .txt yang siap digunakan.' },
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
  name: 'Cara membersihkan daftar email',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pembersih Daftar Email',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Hapus duplikat, perbaiki spasi, dan validasi format dalam daftar email Anda. Alat gratis tanpa batasan record.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Daftar email',
  inputPlaceholder: 'Tempelkan daftar email Anda di sini (dipisahkan baris, koma, atau spasi)...',
  cleanBtn: 'Bersihkan Daftar',
  clearBtn: 'Hapus Semua',
  statsOriginal: 'Asli',
  statsRemoved: 'Dihapus',
  statsFinal: 'Bersih',
  resultLabel: 'Hasil Bersih',
  copyBtn: 'Salin Daftar',
  copyDone: 'Disalin!',
  downloadBtn: 'Unduh .txt',
  registered: 'terdaftar',
  downloadFilename: 'email-bersih',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'pembersih-daftar-email',
  title: 'Pembersih Daftar Email',
  description: 'Bersihkan daftar email secara gratis. Hapus duplikat, perbaiki spasi, dan validasi format dalam hitungan detik. Hemat biaya dan tingkatkan keterkiriman Anda.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Pedoman pengirim email', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Email spam', url: 'https://id.wikipedia.org/wiki/Spam_elektronik' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Mengapa menggunakan pembersih daftar email sangat penting?' },
    {
      type: 'paragraph',
      html: 'Dalam dunia pemasaran digital, kualitas database Anda jauh lebih penting daripada ukurannya. Memiliki daftar 50.000 email tidak ada gunanya jika setengahnya adalah alamat yang tidak ada, mengandung kesalahan ketik, atau duplikat. Di sinilah <strong>pembersih daftar email</strong> menjadi sangat diperlukan.',
    },
    { type: 'title', level: 3, text: 'Risiko daftar email yang kotor' },
    {
      type: 'paragraph',
      html: 'Menyimpan database yang tidak dibersihkan dapat memiliki konsekuensi serius. Mengirim email ke alamat yang tidak ada akan menghasilkan "hard bounce". Jika persentase ini melebihi 2-3%, filter spam akan mulai meneliti domain Anda dan Anda bisa berakhir di daftar hitam internasional.',
    },
    {
      type: 'tip',
      title: 'Tips ahli',
      html: 'Jangan pernah membeli daftar email. Itu adalah cara tercepat untuk menghancurkan reputasi domain Anda. Bangun daftar Anda sendiri secara organik dan bersihkan setiap 3 hingga 6 bulan.',
    },
    { type: 'title', level: 3, text: 'Bagaimana alat kami mengoptimalkan database Anda' },
    {
      type: 'paragraph',
      html: 'Utilitas gratis kami melakukan pembersihan database Anda secara menyeluruh dan cepat tanpa batasan record. Ini menjalankan beberapa tugas validasi kritis secara instan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Penghapusan duplikat:</strong> Pengguna yang sama tidak akan menerima email yang sama dua kali.',
        '<strong>Koreksi spasi:</strong> Kami menghapus spasi yang tidak sengaja ada di awal atau akhir yang akan membatalkan pengiriman.',
        '<strong>Validasi format:</strong> Kami menyaring entri yang tidak memiliki struktur email yang valid.',
        '<strong>Normalisasi:</strong> Semuanya dikonversi ke huruf kecil untuk menghindari record ganda.',
      ],
    },
    { type: 'title', level: 3, text: 'Kapan waktu yang tepat untuk membersihkan daftar Anda?' },
    {
      type: 'list',
      items: [
        'Sebelum mengimpor kontak ke CRM baru atau platform pengiriman (Mailchimp, SendGrid, dll.).',
        'Jika Anda melihat rasio buka (open rate) Anda turun di bawah rata-rata biasanya.',
        'Setelah acara atau pameran dagang di mana Anda mengumpulkan data secara manual.',
        'Sebagai pemeliharaan preventif setiap kuartal untuk menjaga kesehatan domain.',
      ],
    },
    { type: 'title', level: 3, text: 'Dampak pada pengembalian investasi (ROI)' },
    {
      type: 'paragraph',
      html: 'Pemasaran email tetap menjadi salah satu saluran dengan ROI tertinggi, tetapi hanya jika pesan sampai ke kotak masuk. Dengan menggunakan <strong>pembersih email</strong>, Anda mengoptimalkan corong penjualan Anda dari sumbernya dan berhenti membayar platform untuk kontak yang tidak akan pernah melihat pesan Anda.',
    },
    {
      type: 'tip',
      title: 'Terapkan double opt in',
      html: 'Cara terbaik untuk menghindari email palsu adalah dengan mewajibkan pengguna mengonfirmasi langganan mereka dengan mengklik tautan yang dikirim ke kotak masuk mereka. Ini menjamin email tersebut ada dan pengguna memiliki akses ke sana.',
    },
  ],
};
