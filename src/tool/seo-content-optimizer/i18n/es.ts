import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SeoContentOptimizerUI } from '../ui';

const faqData = [
  {
    question: '¿Cómo ayuda esta herramienta a mi posicionamiento SEO?',
    answer: 'Al analizar la densidad de keywords y la legibilidad de las frases, aseguras que tu contenido sea fácil de entender para los usuarios y relevante para los buscadores, evitando penalizaciones por sobreoptimización.',
  },
  {
    question: '¿Qué aspectos técnicos del HTML analiza?',
    answer: 'Verifica la existencia y unicidad de la etiqueta H1, la presencia de subencabezados H2/H3 y los atributos alt en las imágenes.',
  },
  {
    question: '¿Mis textos se guardan en el servidor?',
    answer: 'No. El análisis se realiza 100% de forma local en tu navegador. Tu contenido nunca sale de tu ordenador.',
  },
  {
    question: '¿Es compatible con los criterios de Yoast SEO?',
    answer: 'Sí, implementamos criterios similares: longitud de frases, distribución de párrafos y jerarquía de encabezados.',
  },
];

const howToData = [
  { name: 'Escribe o pega tu texto', text: 'Introduce el contenido que deseas analizar en el área de texto principal.' },
  { name: 'Revisa el checklist de optimización', text: 'Comprueba las alertas de longitud, legibilidad y densidad de keywords en el panel lateral.' },
  { name: 'Analiza el HTML técnico', text: 'Cambia a la pestaña de análisis técnico para verificar etiquetas H1, alts de imagen y estructura de metadatos.' },
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
  name: 'Cómo optimizar contenido para SEO',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Optimizador de Contenido SEO',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Analiza la densidad de palabras clave, legibilidad y estructura técnica HTML de tus textos en tiempo real, sin enviar datos a ningún servidor.',
};

const ui: SeoContentOptimizerUI = {
  tabText: 'Análisis de Texto',
  tabHtml: 'Análisis HTML Técnico',
  textareaPlaceholder: 'Escribe tu texto o pega tu código HTML aquí...',
  statsChars: 'Caracteres',
  statsWords: 'Palabras',
  statsReading: 'Lectura',
  statsSentences: 'Frases',
  checklistTitle: 'Checklist de Optimización',
  keywordsTitle: 'Densidad de Keywords',
  technicalTitle: 'Análisis Técnico HTML',
  h1Label: 'H1 Detectados',
  linksLabel: 'Enlaces (a)',
  imgsLabel: 'Imágenes (img)',
  altsLabel: 'Alts faltantes',
  emptyState: 'Sin datos',
  analyzing: 'Analizando...',
  checkInsufficient: 'Longitud insuficiente (< 300 pal.)',
  checkPillar: 'Contenido pilar excelente (> 900 pal.)',
  checkGoodLength: 'Longitud buena para SEO',
  checkLongSentences: 'Demasiadas frases largas (> 25% del texto)',
  checkGoodReadability: 'Legibilidad de frases óptima',
  checkLongParagraphs: 'Divide párrafos muy largos (> 150 pal.)',
  checkMissingH1: 'Falta etiqueta H1',
  checkMultipleH1: 'Múltiples H1 detectados',
  checkMissingH2: 'Faltan subencabezados (H2)',
  checkMissingTitle: 'Falta etiqueta de título meta',
  stopWords: JSON.stringify(['el', 'la', 'los', 'las', 'un', 'una', 'unos', 'unas', 'y', 'o', 'u', 'en', 'de', 'del', 'por', 'para', 'con', 'sin', 'sobre', 'que', 'si', 'no', 'es', 'son', 'fue', 'era', 'esta', 'esto', 'estos', 'estas', 'a', 'ante', 'bajo', 'contra', 'desde', 'durante', 'entre', 'hacia', 'hasta', 'mediante', 'tras']),
};

export const content: ToolLocaleContent<SeoContentOptimizerUI> = {
  slug: 'optimizador-contenido-seo',
  title: 'Optimizador de Contenido SEO',
  description: 'Analiza la densidad de palabras clave, legibilidad y estructura técnica HTML de tus textos en tiempo real. Herramienta SEO privada y gratuita.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Guía de inicio de SEO de Google', url: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide' },
    { name: 'Criterios de legibilidad Yoast SEO', url: 'https://yoast.com/what-is-readability/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Optimizador de Contenido SEO: Keywords, Legibilidad y Estructura' },
    {
      type: 'paragraph',
      html: 'La calidad del contenido ya no se mide solo por las palabras clave que incluyes, sino por cómo estructuras tu información para que sea digerible tanto para humanos como para los rastreadores de Google. Nuestra herramienta de <strong>análisis SEO en tiempo real</strong> te ofrece control total sobre la densidad de keywords, la legibilidad de tus párrafos y los elementos técnicos fundamentales del HTML.',
    },
    { type: 'title', level: 3, text: 'Densidad de Keywords y Relevancia Semántica' },
    {
      type: 'paragraph',
      html: 'La <strong>densidad de palabras clave</strong> indica con qué frecuencia aparece un término en comparación con el resto del texto. Un exceso activa los filtros de <em>keyword stuffing</em>, mientras que una densidad muy baja dificulta que los buscadores identifiquen el tema central de tu artículo.',
    },
    {
      type: 'list',
      items: [
        '<strong>Análisis de relevancia:</strong> Identifica si las palabras más repetidas coinciden con tu intención de búsqueda.',
        '<strong>Prevención de penalizaciones:</strong> Evita repetir excesivamente términos que puedan dar imagen de spam.',
        '<strong>Optimización semántica:</strong> Ayuda a encontrar equilibrio entre términos técnicos y lenguaje natural.',
      ],
    },
    { type: 'title', level: 3, text: 'Legibilidad al Estilo Yoast' },
    {
      type: 'paragraph',
      html: 'La legibilidad es un factor de ranking indirecto pero crucial. Si un usuario abandona la página porque los párrafos son bloques interminables, tu <em>Dwell Time</em> bajará. El analizador detecta frases largas (más de 20 palabras), párrafos de más de 150 palabras y la presencia de subencabezados.',
    },
    {
      type: 'tip',
      title: 'Tiempo de lectura',
      html: 'La mayoría de los usuarios decide si leer un artículo en menos de 10 segundos. Conocer el tiempo estimado de lectura (calculado sobre una media de 200 palabras por minuto) ayuda a reducir la tasa de rebote ajustando las expectativas del lector.',
    },
    { type: 'title', level: 3, text: 'Análisis Técnico HTML' },
    {
      type: 'paragraph',
      html: 'Pega tu código fuente para verificar elementos clave: unicidad del <strong>H1</strong>, presencia de subencabezados H2/H3, imágenes sin atributo <code>alt</code> y existencia de la etiqueta <code>title</code>. Todo el procesamiento ocurre en tu navegador sin enviar datos a ningún servidor.',
    },
  ],
};
