import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: '¿Cómo uso el conversor de descargas de Google Drive?',
    answer: 'Copia el enlace completo de "Compartir" de cualquier archivo subido a Google Drive (con permisos públicos). Pégalo en el cuadro y pulsa "Generar Enlace Directo". Aparecerá una nueva URL que iniciará la descarga sin abrir el visor de Google.',
  },
  {
    question: '¿Puedo hacer la descarga directa de un archivo privado?',
    answer: 'Si el archivo es privado o con acceso restringido, Google solicitará que inicies sesión con una cuenta autorizada. Para descargas sin registro, los permisos del archivo deben estar en "Cualquier persona con el enlace puede ver".',
  },
  {
    question: '¿Es seguro convertir mis links de Drive?',
    answer: 'Sí. La conversión ocurre 100% en tu navegador de forma anónima. La herramienta no almacena tu enlace ni hace llamadas a servidores; únicamente analiza la estructura de la URL en el lado del cliente para generar la versión de descarga.',
  },
  {
    question: '¿Qué pasa si mi archivo de Drive pesa mucho?',
    answer: 'Para archivos superiores a aproximadamente 100 MB, Google Drive no permite la descarga instantánea directa. En su lugar mostrará una página de advertencia sobre el tamaño y el escaneo de antivirus. Es una política del servidor de Google que ninguna herramienta externa puede eludir.',
  },
];

const howToData = [
  { name: 'Copia el enlace de compartir', text: 'En Google Drive, haz clic derecho sobre el archivo y selecciona "Obtener enlace". Asegúrate de que los permisos permiten el acceso a cualquier persona.' },
  { name: 'Pega el enlace en el generador', text: 'Introduce la URL completa de Drive en el campo de texto de la herramienta y pulsa el botón "Generar Enlace Directo".' },
  { name: 'Copia y usa el enlace generado', text: 'Copia el nuevo enlace de descarga directa y úsalo en tus correos, sitio web, newsletters o donde necesites que el archivo se descargue de inmediato.' },
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
  name: 'Cómo generar un enlace de descarga directa para Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generador de Enlace de Descarga Directa para Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Convierte cualquier enlace de compartir de Google Drive en un enlace de descarga directa en un solo clic, sin pasar por la vista previa del archivo.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Pega tu enlace de Google Drive aquí:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Generar Enlace Directo',
  resultLabel: 'Enlace de Descarga Directa:',
  copyTitle: 'Copiar al portapapeles',
  copyDone: 'Copiado',
  testBtn: 'Testear Descarga',
  errorMsg: 'El enlace introducido no parece ser un enlace válido de Google Drive.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'enlace-descarga-directa-google-drive',
  title: 'Generador de Enlace de Descarga Directa para Google Drive',
  description: 'Convierte fácilmente cualquier enlace de compartir de Google Drive en un enlace de descarga directa en un solo clic, sin pasar por la vista previa del archivo, gratis.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Descargar archivos de Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Download Files', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Conversor de enlaces de Google Drive a descarga directa' },
    {
      type: 'paragraph',
      html: 'Si compartes archivos frecuentemente mediante Google Drive, sabes lo molesto que puede ser el visor de vista previa. Cuando tus usuarios hacen clic en tu enlace, primero van a una pantalla intermedia que les obliga a buscar el botón de descarga. Nuestro <strong>generador de enlaces de descarga directa para Google Drive</strong> soluciona este problema convirtiendo cualquier enlace de compartir en uno que inicia la descarga automáticamente.',
    },
    { type: 'title', level: 3, text: '¿Por qué utilizar un enlace de descarga directa?' },
    {
      type: 'paragraph',
      html: 'El principal beneficio es mejorar enormemente la experiencia del usuario. Al enviar un PDF, una imagen o un instalador de software, el comportamiento esperado es que al hacer clic la descarga empiece de inmediato:',
    },
    {
      type: 'list',
      items: [
        '<strong>Ahorro de tiempo:</strong> Descarga con un solo clic sin pasos adicionales.',
        '<strong>Profesionalidad:</strong> Ideal para botones de descarga en sitios web, newsletters o correos a clientes.',
        '<strong>Reducción de abandonos:</strong> Usuarios menos técnicos pueden confundirse en la vista previa de Drive sin saber dónde descargar.',
        '<strong>Uso en HTML:</strong> Perfecto para atributos <code>href</code> o <code>src</code> en tus páginas.',
      ],
    },
    { type: 'title', level: 3, text: '¿Cómo funciona nuestro creador de links directos?' },
    {
      type: 'paragraph',
      html: 'El proceso ocurre 100% en tu navegador. Google Drive estructura sus enlaces de compartir de dos formas principales, ambas con un identificador único de archivo. La herramienta extrae ese ID y construye una nueva URL con el parámetro de exportación nativo de Google: <code>https://drive.google.com/uc?export=download&amp;id=TU_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Aviso sobre archivos de gran tamaño',
      html: 'Para archivos superiores a aproximadamente 100 MB, Google Drive mostrará una página de advertencia de escaneo de antivirus antes de la descarga. Es una política inamovible de los servidores de Google que ninguna herramienta externa puede eludir.',
    },
    { type: 'title', level: 3, text: 'Privacidad y seguridad garantizadas' },
    {
      type: 'paragraph',
      html: 'Esta herramienta respeta por completo tu privacidad. Todo el proceso de transformación se realiza mediante JavaScript en el lado del cliente, en tu propio dispositivo. Ningún enlace, ID de archivo o información personal se envía a ningún servidor externo.',
    },
  ],
};
