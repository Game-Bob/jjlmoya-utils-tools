import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'What is RSVP technology?',
    answer: 'RSVP stands for Rapid Serial Visual Presentation. Words appear one at a time at the same focal point, eliminating the need to move your eyes left to right. This allows reading at much higher speeds without sacrificing comprehension when practiced.',
  },
  {
    question: 'Does reading faster reduce comprehension?',
    answer: 'It depends on training. At moderate speeds (350-500 WPM), many users report higher concentration by eliminating subvocalization. At extreme speeds (800+ WPM), retention may decrease without prior practice.',
  },
  {
    question: 'What is the average reading speed?',
    answer: 'The average adult reads between 200 and 250 words per minute. With the RSVP reader and some practice, doubling that speed (400-500 WPM) while maintaining excellent comprehension is common.',
  },
  {
    question: 'Does RSVP cause eye strain?',
    answer: 'By eliminating the muscular effort of moving your eyes, many users find they can read with less fatigue than traditional methods. It may feel intense at first, but the brain adapts quickly.',
  },
];

const howToData = [
  { name: 'Enter your text', text: 'Paste the article, book, or document you want to read into the text area.' },
  { name: 'Configure WPM', text: 'Adjust the Words Per Minute. If you are a beginner, start at 300 WPM and increase gradually.' },
  { name: 'Fix your gaze', text: 'Keep your eyes on the red letter (ORP focal point). Do not try to follow the words with eye movement.' },
  { name: 'Start training', text: 'Press the play button and let the information flow. You can pause at any time.' },
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
  name: 'How to use the RSVP speed reader',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Train your reading speed up to 1000 words per minute with RSVP technology and optimal recognition point alignment.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Reading progress',
  speedLabel: 'Speed',
  slowLabel: 'SLOW',
  fastLabel: 'GOD',
  speedHint: 'Start at 300 WPM and increase gradually to push your limits.',
  textLabel: 'Text to process',
  textPlaceholder: 'Paste your article, book or text here...',
  clearLabel: 'CLEAR',
  words: 'words',
  defaultText: 'Welcome to the RSVP Speed Reader. Paste your text below to begin. This technology will help you read up to three times faster by eliminating unnecessary eye movements.',
  play: 'Play',
  pause: 'Pause',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'speed-reader',
  title: 'RSVP Speed Reader',
  description: 'Train your reading speed up to 1000 words per minute. RSVP technology with optimal focal point alignment. Double your intellectual productivity.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
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
    { type: 'title', level: 2, text: 'The Formula 1 of Reading: Unlock Your Mental Bandwidth' },
    {
      type: 'paragraph',
      html: 'What if reading were, biomechanically, a waste of time? Your brain is a supercomputer throttled by an analogue connection: your eyes. The <strong>RSVP Reader</strong> breaks that bottleneck by presenting words at the exact focal point where your mind processes them fastest.',
    },
    {
      type: 'paragraph',
      html: 'Traditional reading is an inefficient process. Your eyes do not work like a scanner; they work like a burst-mode camera: stop, focus, jump. This jump, called a <strong>saccade</strong>, means you spend a large portion of reading time simply moving your eyes rather than absorbing information.',
    },
    {
      type: 'tip',
      html: '"RSVP reading is not just reading faster. It is eliminating the mechanical friction between text and your brain."',
    },
    { type: 'title', level: 3, text: 'The Science Behind Data Injection' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Optimal Recognition Point (ORP)',
          description: 'Every word has a point where your brain recognises it fastest. The algorithm calculates that exact letter (the red one) and centres it perfectly. Your eyes do not move a single millimetre.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Cognitive Silence',
          highlight: true,
          description: 'Above 400-500 WPM, your inner voice goes quiet — it cannot keep up. You stop "hearing" what you read and start "seeing" pure meanings and concepts. This is the ultimate flow state.',
        },
        {
          icon: 'mdi:brain',
          title: 'Visual Neuroplasticity',
          description: 'Like going to the gym: 300 WPM will feel fast at first. After a week, 500 WPM will feel like a walk. You are re-training the neural pathways connecting your visual cortex to language processing.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Training Protocol: From Beginner to Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Level 1: The Awakening (200 to 300 WPM)',
          description: 'Your normal reading speed. Get used to the interface. Relax your face and let the words come to you. Do not try to "grab" them.',
          points: ['Ideal for beginners', 'ORP familiarisation', 'No eye strain'],
        },
        {
          title: 'Level 2: Sound Barrier (400 to 500 WPM)',
          highlight: true,
          description: 'This is where the magic happens. You will feel discomfort. Do not slow down when you miss a word — your brain will learn to fill in gaps from context.',
          points: ['Subvocalisation disappears', 'Mental flow state', 'Double your base speed'],
        },
        {
          title: 'Level 3: Escape Velocity (600+ WPM)',
          description: 'Advanced territory. Ideal for reviewing study material, reading news, or consuming technical documentation where you seek key concepts.',
          points: ['Average novel in 2 hours', 'Maximum reading efficiency', 'Requires prior practice'],
        },
      ],
    },
  ],
};
