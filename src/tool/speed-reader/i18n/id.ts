import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Apa itu teknologi RSVP?',
    answer: 'RSVP singkatan dari Rapid Serial Visual Presentation. Kata-kata muncul satu per satu pada titik fokus yang sama, menghilangkan kebutuhan untuk menggerakkan mata dari kiri ke kanan. Ini memungkinkan membaca dengan kecepatan yang jauh lebih tinggi tanpa mengorbankan pemahaman jika dilatih.',
  },
  {
    question: 'Apakah membaca lebih cepat mengurangi pemahaman?',
    answer: 'Tergantung pada latihan. Pada kecepatan sedang (350-500 WPM), banyak pengguna melaporkan konsentrasi yang lebih tinggi dengan menghilangkan subvokalisasi (suara batin). Pada kecepatan ekstrim (800+ WPM), retensi dapat menurun tanpa latihan sebelumnya.',
  },
  {
    question: 'Berapa kecepatan membaca rata-rata?',
    answer: 'Rata-rata orang dewasa membaca antara 200 hingga 250 kata per menit. Dengan pembaca RSVP dan sedikit latihan, menggandakan kecepatan tersebut (400-500 WPM) sambil mempertahankan pemahaman yang sangat baik adalah hal yang umum.',
  },
  {
    question: 'Apakah RSVP menyebabkan ketegangan mata?',
    answer: 'Dengan menghilangkan upaya otot dalam menggerakkan mata, banyak pengguna merasa mereka dapat membaca dengan lebih sedikit kelelahan dibandingkan metode tradisional. Mungkin terasa intens pada awalnya, tetapi otak beradaptasi dengan cepat.',
  },
];

const howToData = [
  { name: 'Masukkan teks Anda', text: 'Tempelkan artikel, buku, atau dokumen yang ingin Anda baca ke area teks.' },
  { name: 'Konfigurasikan WPM', text: 'Sesuaikan Kata Per Menit (WPM). Jika Anda pemula, mulailah dari 300 WPM dan tingkatkan secara bertahap.' },
  { name: 'Fokuskan pandangan', text: 'Jaga mata Anda pada huruf merah (titik fokus ORP). Jangan mencoba mengikuti kata-kata dengan gerakan mata.' },
  { name: 'Mulai latihan', text: 'Tekan tombol putar dan biarkan informasi mengalir. Anda dapat menjeda kapan saja.' },
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
  name: 'Cara menggunakan pembaca cepat RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Latih kecepatan membaca Anda hingga 1000 kata per menit dengan teknologi RSVP dan penyelarasan titik pengenalan yang optimal.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Kemajuan membaca',
  speedLabel: 'Kecepatan',
  slowLabel: 'LAMBAT',
  fastLabel: 'DEWA',
  speedHint: 'Mulailah dari 300 WPM e tingkatkan secara bertahap untuk melampaui batas Anda.',
  textLabel: 'Teks untuk diproses',
  textPlaceholder: 'Tempel artikel, buku, atau teks Anda di sini...',
  clearLabel: 'BERSIHKAN',
  words: 'kata',
  defaultText: 'Selamat datang di RSVP Speed Reader. Tempelkan teks Anda di bawah ini untuk memulai. Teknologi ini akan membantu Anda membaca hingga tiga kali lebih cepat dengan menghilangkan gerakan mata yang tidak perlu.',
  play: 'Putar',
  pause: 'Jeda',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'pembaca-cepat',
  title: 'RSVP Speed Reader',
  description: 'Latih kecepatan membaca Anda hingga 1000 kata per menit. Teknologi RSVP dengan penyelarasan titik fokus yang optimal. Gandakan produktivitas intelektual Anda.',
  ui,
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referensi',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Formula 1 dalam Membaca: Buka Bandwidth Mental Anda' },
    {
      type: 'paragraph',
      html: 'Bagaimana jika membaca, secara biomekanik, adalah pemborosan waktu? Otak Anda adalah superkomputer yang dibatasi oleh koneksi analog: mata Anda. <strong>Pembaca RSVP</strong> mendobrak hambatan tersebut dengan menyajikan kata-kata tepat pada titik fokus di mana pikiran Anda memprosesnya paling cepat.',
    },
    {
      type: 'paragraph',
      html: 'Membaca tradisional adalah proses yang tidak efisien. Mata Anda tidak bekerja seperti pemindai; mereka bekerja seperti kamera mode burst: berhenti, fokus, melompat. Lompatan ini, yang disebut <strong>saccade</strong>, berarti Anda menghabiskan sebagian besar waktu membaca hanya untuk menggerakkan mata daripada menyerap informasi.',
    },
    {
      type: 'tip',
      html: '"Membaca RSVP bukan hanya membaca lebih cepat. Ini adalah menghilangkan gesekan mekanis antara teks dan otak Anda."',
    },
    { type: 'title', level: 3, text: 'Sains di Balik Injeksi Data' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimal Recognition Point (ORP)',
          description: 'Setiap kata memiliki titik di mana otak Anda mengenalinya paling cepat. Algoritme menghitung huruf tersebut (yang berwarna merah) dan memusatkannya dengan sempurna. Mata Anda tidak bergerak satu milimeter pun.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Keheningan Kognitif',
          highlight: true,
          description: 'Di atas 400-500 WPM, suara batin Anda akan diam — ia tidak bisa mengimbanginya. Anda berhenti "mendengar" apa yang Anda baca dan mulai "melihat" makna dan konsep murni. Ini adalah kondisi aliran (flow) yang terbaik.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplastisitas Visual',
          description: 'Seperti pergi ke gym: 300 WPM akan terasa cepat pada awalnya. Setelah seminggu, 500 WPM akan terasa seperti berjalan kaki. Anda melatih kembali jalur saraf yang menghubungkan korteks visual Anda dengan pemrosesan bahasa.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protokol Latihan: Dari Pemula hingga Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Level 1: Kebangkitan (200 hingga 300 WPM)',
          description: 'Kecepatan membaca normal Anda. Biasakan diri dengan antarmuka. Rilekskan wajah Anda dan biarkan kata-kata datang kepada Anda. Jangan mencoba "menangkap" mereka.',
          points: ['Ideal untuk pemula', 'Familiarisasi ORP', 'Tidak ada ketegangan mata'],
        },
        {
          title: 'Level 2: Penghalang Suara (400 hingga 500 WPM)',
          highlight: true,
          description: 'Di sinilah keajaiban terjadi. Anda akan merasa tidak nyaman. Jangan melambat saat Anda melewatkan satu kata — otak Anda akan belajar mengisi celah dari konteks.',
          points: ['Subvokalisasi menghilang', 'Kondisi aliran mental', 'Gandakan kecepatan dasar Anda'],
        },
        {
          title: 'Level 3: Kecepatan Lepas (600+ WPM)',
          description: 'Wilayah tingkat lanjut. Ideal untuk meninjau materi studi, membaca berita, atau mengonsumsi dokumentasi teknis di mana Anda mencari konsep kunci.',
          points: ['Novel rata-rata dalam 2 jam', 'Efisiensi membaca maksimum', 'Memerlukan latihan sebelumnya'],
        },
      ],
    },
  ],
};
