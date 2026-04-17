import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Apakah aman menggunakan generator kata sandi online?',
    answer: "Ya, selama generator tersebut berjalan di sisi klien (client-side). Alat kami menghasilkan kata sandi secara lokal di browser Anda menggunakan algoritma yang aman secara kriptografis. Kata sandi Anda tidak pernah dikirim melalui internet atau disimpan di server mana pun.",
  },
  {
    question: "Apa yang membuat kata sandi 'tahan peretas'?",
    answer: 'Kuncinya adalah entropi (keacakan). Campuran huruf besar, huruf kecil, angka, dan simbol khusus dikombinasikan dengan panjang minimum 12-16 karakter membuat serangan brute-force praktis tidak mungkin dilakukan dengan teknologi saat ini.',
  },
  {
    question: 'Mengapa harus menghindari kata-kata atau tanggal yang umum?',
    answer: 'Peretas menggunakan serangan kamus yang menguji jutaan kata, nama, dan kombinasi tanggal per detik. Kata sandi yang murni acak tidak mengikuti pola linguistik apa pun, sehingga jauh lebih aman.',
  },
  {
    question: 'Haruskah saya menghafal semua kata sandi saya?',
    answer: 'Tidak disarankan. Pendekatan yang ideal adalah menggunakan pengelola kata sandi (seperti Bitwarden, 1Password, atau yang bawaan browser Anda) untuk menyimpan kata sandi yang panjang dan acak ini, sehingga Anda hanya perlu mengingat satu kata sandi utama yang kuat.',
  },
];

const howToData = [
  {
    name: 'Atur panjangnya',
    text: 'Sesuaikan penggeser untuk memilih berapa banyak karakter yang akan dimiliki kata sandi Anda. Standar keamanan saat ini merekomendasikan setidaknya 12 karakter.',
  },
  {
    name: 'Pilih kompleksitas',
    text: 'Centang opsi huruf besar, angka, dan simbol sesuai dengan persyaratan situs tempat Anda akan menggunakan kata sandi tersebut.',
  },
  {
    name: 'Hasilkan kata sandi',
    text: 'Klik tombol hasilkan. Setiap klik membuat kombinasi unik dengan entropi tinggi berdasarkan algoritma kriptografi.',
  },
  {
    name: 'Salin dengan satu klik',
    text: 'Gunakan tombol salin untuk mengirim kata sandi langsung ke papan klip Anda dengan cara yang aman.',
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
  name: 'Cara menggunakan pembuat kata sandi yang aman',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pembuat Kata Sandi Acak Aman',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Buat kata sandi yang kuat dan tahan peretas secara instan. Alat keamanan siber gratis untuk menghasilkan kunci acak dan aman.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Menghasilkan...',
  labelSecurity: 'Kekuatan',
  labelLength: 'Panjang',
  strengthWeak: 'Lemah',
  strengthFair: 'Cukup',
  strengthGood: 'Bagus',
  strengthStrong: 'Kuat',
  strengthUnbreakable: 'Tidak Terpecahkan',
  optionUppercase: 'Huruf Besar',
  optionLowercase: 'Huruf Kecil',
  optionNumbers: 'Angka',
  optionSymbols: 'Simbol',
  copyTitle: 'Salin',
  regenerateTitle: 'Hasilkan Baru',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'pembuat-kata-sandi',
  title: 'Pembuat Kata Sandi Acak Aman',
  description: 'Buat kata sandi yang kuat dan tahan peretas secara instan. Alat keamanan siber gratis untuk menghasilkan kunci acak dan aman.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Password — Wikipedia', url: 'https://id.wikipedia.org/wiki/Kata_sandi' },
    { name: 'Have I Been Pwned — Periksa apakah kata sandi Anda terekspos', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Anatomi Kata Sandi yang Tidak Dapat Dipecahkan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kata sandi Anda adalah satu-satunya penghalang antara data pribadi Anda (perbankan, medis, foto) dan penjahat siber. Namun, rata-rata pengguna masih mengandalkan pola yang dapat ditebak seperti "123456" atau nama hewan peliharaan, yang dapat dipecahkan dalam <strong>kurang dari satu detik</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Bahaya Rainbow Tables',
          description: 'Peretas tidak menebak kata sandi Anda satu per satu. Mereka menggunakan database besar (Rainbow Tables) yang berisi jutaan hash kata sandi umum yang telah dihitung sebelumnya. Jika kata sandi Anda ada di kamus atau merupakan frasa terkenal, kata sandi tersebut sudah bocor sebelum Anda mulai menggunakannya.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'Solusi: Entropi Murni',
          description: 'Entropi mengukur kekacauan atau ketidakpastian. Semakin tinggi entropi (bit), semakin banyak waktu yang dibutuhkan komputer untuk memecahkannya. Alat ini menggunakan crypto.getRandomValues(), API browser yang menghasilkan angka acak yang aman secara kriptografis, tidak seperti Math.random() yang dapat ditebak.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Prinsip Dasar Keamanan Siber',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Panjang lebih utama daripada Kompleksitas',
          description: 'Kata sandi 20 karakter yang hanya terdiri dari huruf kecil lebih aman daripada kata sandi 8 karakter dengan simbol yang langka. Secara matematis, setiap karakter tambahan melipatgandakan kesulitan secara eksponensial.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Mitos Substitusi',
          description: 'Mengganti "a" dengan "@" atau "e" dengan "3" (Leetspeak) tidak menipu siapa pun. Kamus serangan modern sudah menyertakan variasi ini secara otomatis. Hindari menggunakan kata-kata yang mudah dikenali.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Situs Berbeda, Kunci Berbeda',
          description: 'Jika Anda menggunakan kata sandi yang sama untuk email dan forum, dan forum tersebut diretas, mereka sekarang memiliki akses ke email Anda. Gunakan Pengelola Kata Sandi (seperti Bitwarden atau 1Password) untuk mengingat kata sandi yang rumit untuk Anda.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privasi terjamin',
      html: 'Semua proses pembuatan terjadi <strong>di browser Anda</strong>. Tidak ada kata sandi yang dikirimkan melalui internet atau dicatat di server mana pun. Kode sumbernya dapat diaudit.',
    },
  ],
};
