import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: '¿Cómo calcular el ancho de un texto en píxeles online?',
    answer: 'Pega tu texto en el cuadro de entrada, configura la fuente y el tamaño, y la herramienta usará automáticamente la API de Canvas del navegador para devolverte el ancho exacto en píxeles.',
  },
  {
    question: '¿Por qué el ancho en píxeles varía entre tipografías?',
    answer: "La mayoría de las fuentes son proporcionales, lo que significa que cada carácter tiene un ancho distinto. Por ejemplo, una 'M' mayúscula siempre será más ancha que una 'i' minúscula en una fuente sans-serif estándar.",
  },
  {
    question: '¿Es lo mismo medir caracteres que medir píxeles?',
    answer: 'No. Medir caracteres te da la longitud de la cadena, mientras que medir píxeles te da el espacio visual que ocupa. Esto es crucial para asegurar que el texto no se salga de su contenedor en un diseño web.',
  },
  {
    question: '¿Puedo usar cualquier fuente de Google Fonts?',
    answer: 'Sí, siempre que la fuente esté instalada en tu sistema operativo o cargada en la página actual, la utilidad podrá medir sus dimensiones con precisión.',
  },
  {
    question: '¿Es seguro procesar textos privados o fragmentos de código?',
    answer: 'Sí. La calculadora funciona íntegramente de forma local. Ningún dato se envía a servidores externos, garantizando una privacidad absoluta.',
  },
];

const howToData = [
  { name: 'Introducir el texto', text: 'Escribe o pega el texto que quieres medir en el área de entrada.' },
  { name: 'Configurar la fuente', text: 'Indica la familia tipográfica, el tamaño en píxeles, el peso y si es itálica.' },
  { name: 'Leer el resultado', text: 'El ancho en píxeles y el número de caracteres se actualizan en tiempo real.' },
  { name: 'Copiar el valor', text: 'Pulsa "Copiar Ancho" para guardar el número de píxeles en el portapapeles.' },
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
  name: 'Cómo medir el ancho de texto en píxeles',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Ancho de Texto en Píxeles',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcula con precisión el ancho en píxeles de cualquier texto según su tipografía, tamaño y estilo.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Texto a medir',
  textPlaceholder: 'Escribe o pega aquí el texto que quieres medir...',
  defaultText: 'Hola Mundo',
  fontLabel: 'Tipografía',
  sizeLabel: 'Tamaño (px)',
  weightLabel: 'Peso',
  italicLabel: 'Itálica',
  widthLabel: 'Ancho (píxeles)',
  charsLabel: 'Caracteres',
  previewLabel: 'Vista previa visual',
  copyBtn: 'Copiar Ancho',
  resetBtn: 'Reiniciar',
  copyDone: 'Ancho copiado',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'calculadora-ancho-pixel-texto',
  title: 'Calculadora de Ancho de Texto en Píxeles',
  description: 'Calcula con precisión cuánto ancho ocupa cualquier texto en píxeles según su tipografía, tamaño y estilo. Herramienta gratuita para diseñadores y desarrolladores.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias Técnicas',
  bibliography: [
    { name: 'W3C: Gestión de la tipografía y el renderizado de texto (CSS Text Level 3)', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Entendiendo las fuentes variables', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Mide el ancho exacto de cualquier texto en píxeles' },
    {
      type: 'paragraph',
      html: '¿Tu texto se sale del contenedor? ¿Necesitas saber cuánto espacio ocupa un titular antes de renderizarlo? La <strong>API Canvas del navegador</strong> permite medir el ancho exacto de cualquier cadena de texto con la precisión de un píxel, sin necesidad de renderizarlo en el DOM.',
    },
    { type: 'title', level: 3, text: 'Por qué contar caracteres no es suficiente' },
    {
      type: 'paragraph',
      html: 'Las fuentes tipográficas modernas son <strong>proporcionales</strong>: cada glifo tiene un ancho diferente. Una "W" puede ocupar tres veces más que una "i". El número de caracteres no te dice nada sobre el espacio visual real que ocupa el texto.',
    },
    {
      type: 'list',
      items: [
        '<strong>Diseño web:</strong> Evita desbordamientos en botones, etiquetas y celdas de tabla.',
        '<strong>SEO:</strong> Los motores de búsqueda truncan los títulos por píxeles, no por caracteres.',
        '<strong>Canvas y PDF:</strong> Calcula la posición exacta antes de dibujar texto programáticamente.',
        '<strong>Tooltips y globos:</strong> Dimensiona dinámicamente los contenedores según el texto interior.',
      ],
    },
    { type: 'title', level: 3, text: 'Cómo funciona la medición con Canvas' },
    {
      type: 'paragraph',
      html: 'El método <code>ctx.measureText()</code> de la API Canvas devuelve un objeto <code>TextMetrics</code> con la propiedad <code>width</code>, que refleja el ancho en píxeles CSS con la fuente activa en ese momento. Esta herramienta configura el contexto con tu fuente, tamaño, peso y estilo antes de medir.',
    },
    {
      type: 'code',
      ariaLabel: 'Ejemplo de Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Hola Mundo').width; // ej. 74.5",
    },
    { type: 'title', level: 3, text: 'Privacidad y procesamiento local' },
    {
      type: 'paragraph',
      html: 'Todo el cálculo ocurre en tu navegador. Ningún texto, fragmento de código ni dato privado sale de tu dispositivo.',
    },
    {
      type: 'tip',
      title: 'Fuentes de Google Fonts',
      html: 'Para medir una fuente de Google Fonts con precisión, primero asegúrate de que esté cargada en la página o instalada en tu sistema. De lo contrario el navegador usará la fuente de respaldo y el resultado variará.',
    },
  ],
};
