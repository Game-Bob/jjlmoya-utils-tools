import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: '¿Qué es la tecnología RSVP?',
    answer: 'RSVP significa Rapid Serial Visual Presentation. Es un método donde las palabras aparecen una tras otra en el mismo punto focal, eliminando la necesidad de mover los ojos de izquierda a derecha, lo que permite leer a velocidades mucho mayores.',
  },
  {
    question: '¿Se pierde comprensión al leer tan rápido?',
    answer: 'Depende del entrenamiento. A velocidades moderadas (350-500 PPM), muchos usuarios reportan mayor concentración al eliminar la subvocalización. A velocidades extremas (800+ PPM), la retención puede disminuir sin práctica previa.',
  },
  {
    question: '¿Cuál es la velocidad de lectura normal?',
    answer: 'Un adulto promedio lee entre 200 y 250 palabras por minuto. Con el lector RSVP y práctica, es común doblar esa velocidad (400-500 PPM) manteniendo una excelente comprensión.',
  },
  {
    question: '¿Produce fatiga visual el método RSVP?',
    answer: 'Al eliminar el esfuerzo muscular de mover los ojos, muchos usuarios encuentran que pueden leer con menos fatiga que el método tradicional. Al principio puede ser intenso, pero el cerebro se adapta rápidamente.',
  },
];

const howToData = [
  { name: 'Introducir el texto', text: 'Pega el artículo, libro o documento que quieras leer en el área de texto.' },
  { name: 'Configurar las PPM', text: 'Ajusta las Palabras Por Minuto. Si eres principiante, empieza en 300 PPM y sube gradualmente.' },
  { name: 'Fijar la mirada', text: 'Mantén los ojos centrados en la letra roja (punto focal ORP). No intentes seguir las palabras con movimiento ocular.' },
  { name: 'Iniciar el entrenamiento', text: 'Pulsa el botón de reproducir y deja que la información fluya. Puedes pausar en cualquier momento.' },
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
  name: 'Cómo usar el lector rápido RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lector Rápido RSVP',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Entrena tu velocidad de lectura hasta 1000 palabras por minuto con tecnología RSVP y alineación de punto focal óptimo.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Progreso lectura',
  speedLabel: 'Velocidad',
  slowLabel: 'LENTO',
  fastLabel: 'DIOS',
  speedHint: 'Empieza en 300 PPM y sube gradualmente hasta romper tus límites.',
  textLabel: 'Texto a procesar',
  textPlaceholder: 'Pega aquí tu artículo, libro o texto...',
  clearLabel: 'BORRAR',
  words: 'palabras',
  defaultText: 'Bienvenido al Lector Rápido RSVP. Pega tu texto abajo para comenzar. Esta tecnología te ayudará a leer hasta tres veces más rápido eliminando los movimientos oculares innecesarios.',
  play: 'Reproducir',
  pause: 'Pausar',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'lectura-rapida',
  title: 'RSVP Lector Rápido',
  description: 'Entrena tu velocidad de lectura hasta 1000 palabras por minuto. Tecnología RSVP con alineación de punto focal óptimo. Dobla tu productividad intelectual.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
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
    { type: 'title', level: 2, text: 'La Fórmula 1 de la Lectura: Desbloquea tu Ancho de Banda Mental' },
    {
      type: 'paragraph',
      html: '¿Y si leer fuera, biomecánicamente, una pérdida de tiempo? Tu cerebro es un superordenador frenado por una conexión analógica: tus ojos. El <strong>Lector RSVP</strong> rompe ese cuello de botella presentando las palabras en el punto focal exacto donde tu mente las procesa más rápido.',
    },
    {
      type: 'paragraph',
      html: 'La lectura tradicional es un proceso ineficiente. Tus ojos no funcionan como un escáner; funcionan como una cámara en ráfaga: se detienen, enfocan y saltan. Este salto, llamado <strong>sacada</strong>, te hace pasar gran parte del tiempo moviendo los ojos en lugar de absorber información.',
    },
    {
      type: 'tip',
      html: '"La lectura RSVP no es solo leer más rápido. Es eliminar la fricción mecánica entre el texto y tu cerebro."',
    },
    { type: 'title', level: 3, text: 'La Ciencia detrás de la Inyección de Datos' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Punto de Reconocimiento Óptimo (ORP)',
          description: 'Cada palabra tiene un punto donde tu cerebro la reconoce más rápido. El algoritmo calcula esa letra exacta (la roja) y la alinea en el centro. Tus ojos no se mueven ni un milímetro.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Silencio Cognitivo',
          highlight: true,
          description: 'Al superar las 400-500 PPM, tu voz interior se calla. No puede seguir el ritmo. Dejas de "oír" lo que lees y empiezas a "ver" significados e ideas puras. Es el estado de flujo definitivo.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplasticidad Visual',
          description: 'Como ir al gimnasio: al principio, 300 PPM parecerá rápido. En una semana, 500 parecerá un paseo. Estás re-entrenando las vías neuronales que conectan el córtex visual con el lenguaje.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protocolo de Entrenamiento: De Novato a Neo' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nivel 1: El Despertar (200 a 300 PPM)',
          description: 'Tu velocidad normal. Acostúmbrate a la interfaz. Relaja la cara y deja que las palabras vengan a ti. No intentes "agarrarlas".',
          points: ['Ideal para principiantes', 'Familiarización con ORP', 'Sin fatiga visual'],
        },
        {
          title: 'Nivel 2: La Barrera del Sonido (400 a 500 PPM)',
          highlight: true,
          description: 'Aquí ocurre la magia. Sentirás incomodidad. No bajes la velocidad si pierdes una palabra. Tu cerebro aprenderá a rellenar huecos por contexto.',
          points: ['La subvocalización desaparece', 'Estado de flujo mental', 'Dobla tu velocidad base'],
        },
        {
          title: 'Nivel 3: Velocidad de Escape (600+ PPM)',
          description: 'Territorio avanzado. Ideal para repasar temarios, leer noticias o consumir documentación técnica donde buscas conceptos clave.',
          points: ['Novela promedio en 2 horas', 'Máxima eficiencia lectora', 'Requiere práctica previa'],
        },
      ],
    },
  ],
};
