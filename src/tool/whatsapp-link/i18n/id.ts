import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: 'Bagaimana cara membuat tautan WhatsApp?',
    answer: 'Untuk membuat tautan Anda, masukkan nomor ponsel Anda termasuk kode negara. Misalnya, untuk Spanyol masukkan 34 terlebih dahulu, untuk Indonesia 62, diikuti dengan nomor lokal Anda. Anda dapat menambahkan pesan opsional dan alat ini akan menghasilkan tautan wa.me final yang siap disalin.',
  },
  {
    question: 'Dapatkah saya menambahkan pesan panjang yang sudah diisi sebelumnya?',
    answer: 'Ya. Anda dapat melampirkan pesan yang akan muncul secara otomatis di kotak obrolan saat seseorang mengklik tautan Anda. Alat ini menggunakan encoding URL untuk mendukung spasi, aksen, dan emoji tanpa merusak URL.',
  },
  {
    question: 'Bagaimana cara menggunakan kode QR yang dihasilkan?',
    answer: 'Setelah tautan valid dibuat, tombol "Tampilkan QR" muncul. Kode QR berisi URL tautan Anda. Klik kanan padanya dan pilih "Simpan gambar sebagai" untuk mengunduh file bersih beresolusi tinggi untuk kartu nama, poster, atau media sosial.',
  },
  {
    question: 'Ke mana data saya pergi?',
    answer: 'Generator memproses semuanya di sisi klien, langsung di browser Anda. Nomor telepon dan pesan yang Anda isi tidak pernah dikirim ke server mana pun atau disimpan dalam database apa pun.',
  },
];

const howToData = [
  { name: 'Pilih prefiks', text: 'Pilih kode negara Anda dari dropdown dan masukkan nomor telepon Anda tanpa prefiks.' },
  { name: 'Tambahkan pesan opsional', text: 'Tulis teks yang sudah diisi sebelumnya yang akan muncul saat seseorang membuka tautan dan mengetuk Kirim.' },
  { name: 'Buat tautan', text: 'Tekan tombol hijau untuk mendapatkan URL wa.me langsung yang siap dibagikan.' },
  { name: 'Bagikan atau cetak QR', text: 'Salin tautan, uji obrolan, atau unduh kode QR untuk kartu dan pencetakan.' },
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
  name: 'Cara membuat tautan WhatsApp langsung',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pembuat Tautan WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Buat tautan obrolan WhatsApp langsung dengan pesan yang sudah diisi sebelumnya dan kode QR. Alat gratis, tanpa pendaftaran, 100% pribadi.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Nomor Telepon WhatsApp',
  phonePlaceholder: '0812 3456 789',
  messageLabel: 'Pesan pembuka (opsional)',
  messagePlaceholder: 'Halo! Saya ingin informasi lebih lanjut tentang layanan Anda...',
  generateBtn: 'Buat Tautan',
  resultLabel: 'Tautan Langsung Berhasil Dibuat',
  copyTitle: 'Salin ke papan klip',
  copyDone: 'Disalin!',
  testBtn: 'Uji Obrolan',
  qrShow: 'Tampilkan QR',
  qrHide: 'Sembunyikan QR',
  errorPhone: 'Harap masukkan nomor telepon yang valid.',
  defaultPrefix: '62',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'pembuat-tautan-whatsapp',
  title: 'Pembuat Tautan WhatsApp dengan QR',
  description: 'Buat tautan obrolan WhatsApp langsung dengan pesan yang sudah diisi sebelumnya dan kode QR. Alat gratis, tanpa pendaftaran, 100% pribadi.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Cara menggunakan fitur klik untuk chat — Pusat Bantuan WhatsApp', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Klik untuk chat: parameter dan format — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Buat tautan langsung pendek untuk WhatsApp' },
    {
      type: 'paragraph',
      html: 'Butuh pelanggan atau pengikut untuk menghubungi Anda di WhatsApp tanpa harus menyimpan nomor Anda terlebih dahulu? <strong>Pembuat tautan wa.me</strong> kami mengatasi hal ini dengan menghasilkan tautan yang membuka obrolan langsung secara instan, tanpa langkah awal.',
    },
    { type: 'title', level: 3, text: 'Untuk apa penyingkat WhatsApp wa.me?' },
    {
      type: 'paragraph',
      html: 'WhatsApp menawarkan API yang disebut "Klik untuk Chat". Menggunakan URL khusus, setiap pengguna dapat membuka obrolan baru dengan Anda tanpa perlu menambahkan Anda sebagai kontak terlebih dahulu, baik dari ponsel maupun WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Lebih banyak konversi:</strong> Tombol "Hubungi via WhatsApp" di toko Anda mengurangi hambatan dan meningkatkan penjualan.',
        '<strong>Pesan yang sudah diisi:</strong> Pengguna hanya perlu menekan "Kirim". Contoh: "Halo! Saya datang dari Instagram dan ingin mengklaim penawarannya."',
        '<strong>Kode QR otomatis:</strong> Unduh QR untuk kartu nama, poster, atau postingan media sosial.',
      ],
    },
    { type: 'title', level: 3, text: 'Bagaimana cara kerja pembuatan tautan?' },
    {
      type: 'paragraph',
      html: 'Alat ini menggabungkan prefiks internasional dan nomor telepon yang bersih, lalu menambahkannya ke API resmi WhatsApp bersama parameter pesan yang dikonversi melalui <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'Format URL WhatsApp',
      code: 'https://wa.me/62XXXXXXXXX\nhttps://wa.me/62XXXXXXXXX?text=%C2%A1Halo!%20Saya%20ingin...',
    },
    { type: 'title', level: 3, text: 'Privasi terjamin dan pemrosesan lokal' },
    {
      type: 'paragraph',
      html: 'Semua pembuatan tautan terjadi di browser Anda melalui JavaScript. Tidak ada server yang mencatat, menyimpan, atau membaca nomor telepon atau pesan yang Anda masukkan. Privasi Anda sepenuhnya terlindungi.',
    },
    {
      type: 'tip',
      title: 'Pentingnya prefiks internasional',
      html: 'Agar WhatsApp dapat merutekan pesan dengan benar, kode negara wajib diisi. Untuk Indonesia adalah <strong>62</strong>, diikuti oleh nomor ponsel, tanpa spasi atau simbol +. Hasil akhirnya, misalnya, adalah <code>628XXXXXXXXX</code>.',
    },
  ],
};
