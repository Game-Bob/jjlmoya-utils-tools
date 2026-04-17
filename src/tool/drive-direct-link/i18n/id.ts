import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Bagaimana cara menggunakan pengonversi unduhan Google Drive?',
    answer: 'Salin tautan "Bagikan" lengkap dari berkas mana pun yang disimpan di Google Drive (harus memiliki izin publik). Tempelkan ke dalam kotak teks alat dan klik "Buat Tautan Langsung". URL baru akan muncul yang memulai unduhan tanpa membuka penampil Google.',
  },
  {
    question: 'Dapatkah saya membuat tautan unduhan langsung untuk berkas pribadi?',
    answer: 'Jika berkas bersifat pribadi atau aksesnya dibatasi, Google akan meminta Anda untuk masuk dengan akun yang diotorisasi. Untuk unduhan bersih tanpa registrasi, izin berkas harus diatur ke "Siapa saja yang memiliki tautan dapat melihat".',
  },
  {
    question: 'Apakah aman mengonversi tautan Drive saya di sini?',
    answer: 'Ya. Konversi terjadi 100% di browser Anda dan sepenuhnya anonim. Alat ini tidak menyimpan tautan Anda atau melakukan panggilan server; alat ini hanya menganalisis struktur URL di sisi klien untuk menghasilkan versi unduhan.',
  },
  {
    question: 'Apa yang terjadi jika berkas Drive saya sangat besar?',
    answer: 'Untuk berkas yang lebih besar dari sekitar 100 MB, Google Drive tidak mengizinkan unduhan langsung instan. Sebaliknya, Google Drive menampilkan halaman peringatan tentang ukuran berkas dan pengabaian pemindaian antivirus. Ini adalah kebijakan server Google tetap yang tidak dapat dihindari oleh alat eksternal apa pun.',
  },
];

const howToData = [
  { name: 'Salin tautan bagikan', text: 'Di Google Drive, klik kanan berkas dan pilih "Dapatkan tautan". Pastikan izin mengizinkan akses ke siapa saja yang memiliki tautan.' },
  { name: 'Tempelkan tautan ke generator', text: 'Masukkan URL Drive lengkap di bidang teks alat dan klik tombol "Buat Tautan Langsung".' },
  { name: 'Salin dan gunakan tautan yang dihasilkan', text: 'Salin tautan unduhan langsung yang baru dan gunakan di email, situs web, nawala, atau di mana pun Anda membutuhkan berkas tersebut untuk diunduh segera saat diklik.' },
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
  name: 'Cara membuat tautan unduhan langsung untuk Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pembuat Tautan Unduhan Langsung Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Konversi tautan bagikan Google Drive apa pun menjadi tautan unduhan langsung dengan satu klik, tanpa melalui halaman pratinjau berkas. Alat gratis.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Tempelkan tautan Google Drive Anda di sini:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Buat Tautan Langsung',
  resultLabel: 'Tautan Unduhan Langsung:',
  copyTitle: 'Salin ke papan klip',
  copyDone: 'Disalin',
  testBtn: 'Uji Unduhan',
  errorMsg: 'Tautan yang Anda masukkan tampaknya bukan tautan Google Drive yang valid.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'tautan-unduhan-langsung-google-drive',
  title: 'Pembuat Tautan Unduhan Langsung Google Drive',
  description: 'Konversi tautan bagikan Google Drive apa pun dengan mudah menjadi tautan unduhan langsung hanya dengan satu klik, tanpa melalui pratinjau berkas. Alat gratis.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Unduh berkas dari Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Unduh Berkas', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konversi tautan bagikan Google Drive ke tautan unduhan langsung' },
    {
      type: 'paragraph',
      html: 'Jika Anda sering membagikan berkas melalui Google Drive, Anda tahu betapa menjengkelkannya halaman pratinjau itu. Ketika pengguna Anda mengklik tautan Anda, mereka mendarat di layar perantara yang memaksa mereka mencari tombol unduh. <strong>Pembuat tautan unduhan langsung Google Drive</strong> kami mengatasi hal ini dengan mengonversi tautan bagikan apa pun menjadi tautan yang memulai unduhan secara otomatis.',
    },
    { type: 'title', level: 3, text: 'Mengapa menggunakan tautan unduhan langsung?' },
    {
      type: 'paragraph',
      html: 'Manfaat utamanya adalah pengalaman pengguna yang jauh lebih baik. Saat membagikan PDF, gambar, atau penginstal perangkat lunak, pengguna mengharapkan mengklik tautan akan segera memulai unduhan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Menghemat waktu:</strong> Unduhan satu klik tanpa langkah tambahan.',
        '<strong>Tampilan profesional:</strong> Ideal untuk tombol unduh di situs web, nawala, atau email klien.',
        '<strong>Lebih sedikit drop-off:</strong> Pengguna yang kurang mahir teknologi mungkin bingung dengan pratinjau Drive dan tidak tahu cara mengunduh.',
        '<strong>Siap HTML:</strong> Sempurna untuk atribut <code>href</code> atau <code>src</code> di halaman web Anda.',
      ],
    },
    { type: 'title', level: 3, text: 'Bagaimana cara kerja generator tautan langsung?' },
    {
      type: 'paragraph',
      html: 'Semuanya terjadi 100% di browser Anda. Tautan bagikan Google Drive berisi ID berkas yang unik. Alat ini mengekstrak ID tersebut dan membangun URL baru menggunakan parameter ekspor asli Google: <code>https://drive.google.com/uc?export=download&amp;id=ID_ANDA</code>.',
    },
    {
      type: 'tip',
      title: 'Peringatan untuk berkas besar',
      html: 'Untuk berkas di atas sekitar 100 MB, Google Drive menampilkan halaman peringatan pemindaian antivirus sebelum unduhan dimulai. Ini adalah kebijakan server Google tetap yang tidak dapat dihindari oleh alat eksternal apa pun.',
    },
    { type: 'title', level: 3, text: 'Privasi dan keamanan terjamin' },
    {
      type: 'paragraph',
      html: 'Alat ini sepenuhnya menghormati privasi Anda. Seluruh transformasi tautan dilakukan melalui JavaScript sisi klien di perangkat Anda sendiri. Tidak ada tautan, ID berkas, atau informasi pribadi yang dikirim ke server eksternal mana pun.',
    },
  ],
};
