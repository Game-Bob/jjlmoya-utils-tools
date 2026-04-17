import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: '¿Qué hace exactamente este limpiador de emails?',
    answer: 'La herramienta analiza tu lista de correos, elimina duplicados, quita espacios en blanco innecesarios, valida el formato básico y normaliza todas las direcciones a minúsculas para asegurar una base de datos impecable.',
  },
  {
    question: '¿Hay algún límite de correos electrónicos?',
    answer: 'No hay un límite estricto de registros. Puedes procesar miles de correos de una sola vez de forma instantánea. La única limitación es la memoria de tu propio navegador si la lista es extremadamente masiva.',
  },
  {
    question: '¿Es seguro pegar mis correos aquí?',
    answer: 'Totalmente. Todo el procesamiento se realiza de forma local en tu propio navegador mediante JavaScript. Tus datos nunca se envían a nuestros servidores ni se guardan en ninguna base de datos externa.',
  },
  {
    question: '¿Cómo mejora esto la entregabilidad de mis campañas?',
    answer: 'Al eliminar direcciones inexistentes o mal formateadas, reduces la tasa de rebote (bounce rate), lo que mejora la reputación de tu dominio ante proveedores como Gmail, Outlook o Yahoo.',
  },
];

const howToData = [
  { name: 'Pega tus correos', text: 'Copia tu lista de emails y pégala en el cuadro de texto. Pueden estar separados por líneas, comas o espacios.' },
  { name: 'Limpia la lista', text: "Haz clic en el botón 'Limpiar Lista' para iniciar el proceso de validación y eliminación de duplicados." },
  { name: 'Revisa los resultados', text: 'Observa las estadísticas de correos originales vs. finales y revisa la lista depurada en el panel inferior.' },
  { name: 'Copia o descarga', text: 'Copia el resultado directamente al portapapeles o descárgalo como un archivo .txt listo para usar.' },
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
  name: 'Cómo limpiar una lista de correos electrónicos',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Limpiador de Listas de Emails',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Elimina duplicados, corrige espacios y valida formatos en tu lista de correos electrónicos. Herramienta gratuita sin límite de registros.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Lista de correos electrónicos',
  inputPlaceholder: 'Pega aquí tu lista de emails (separados por líneas, comas o espacios)...',
  cleanBtn: 'Limpiar Lista',
  clearBtn: 'Borrar Todo',
  statsOriginal: 'Originales',
  statsRemoved: 'Eliminados',
  statsFinal: 'Limpios',
  resultLabel: 'Resultado Limpio',
  copyBtn: 'Copiar Lista',
  copyDone: '¡Copiado!',
  downloadBtn: 'Descargar .txt',
  registered: 'registrados',
  downloadFilename: 'emails-limpios',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'limpiador-listas-emails',
  title: 'Limpiador de Listas de Emails',
  description: 'Limpia listas de correos electrónicos gratis. Elimina duplicados, corrige espacios y valida formatos en segundos. Ahorra costes y mejora tu entregabilidad.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Guía de entregabilidad de correo electrónico', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: Correo electrónico no solicitado', url: 'https://es.wikipedia.org/wiki/Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '¿Por qué es fundamental utilizar un limpiador de listas de emails?' },
    {
      type: 'paragraph',
      html: 'En el mundo del marketing digital, la calidad de tu base de datos es mucho más importante que la cantidad. Tener una lista de 50.000 correos no sirve de nada si la mitad son direcciones inexistentes, contienen errores tipográficos o están duplicadas. Aquí es donde entra en juego un <strong>limpiador de listas de emails</strong>.',
    },
    { type: 'title', level: 3, text: 'Los peligros de una lista de correos sucia' },
    {
      type: 'paragraph',
      html: 'Mantener una base de datos sin depurar puede acarrear consecuencias graves. Cuando envías correos a direcciones que no existen, generas un "hard bounce". Si este porcentaje supera el 2-3%, los filtros antispam empezarán a vigilarte de cerca y podrías acabar en una lista negra internacional.',
    },
    {
      type: 'tip',
      title: 'Consejo de experto',
      html: 'Nunca compres listas de correos. Es la forma más rápida de arruinar la reputación de tu dominio. Construye tu propia lista de forma orgánica y límpiala cada 3 o 6 meses.',
    },
    { type: 'title', level: 3, text: 'Cómo nuestra herramienta optimiza tu base de datos' },
    {
      type: 'paragraph',
      html: 'Nuestra utilidad gratuita realiza una limpieza profunda y rápida de tus bases de datos sin límites de registros. Ejecuta varias tareas críticas de validación de forma instantánea:',
    },
    {
      type: 'list',
      items: [
        '<strong>Eliminación de duplicados:</strong> Un mismo usuario no recibirá dos veces el mismo correo.',
        '<strong>Corrección de espacios:</strong> Eliminamos espacios accidentales al inicio o final que invalidarían el envío.',
        '<strong>Validación de formato:</strong> Filtramos entradas que no tengan estructura de email válida.',
        '<strong>Normalización:</strong> Convertimos todo a minúsculas para evitar registros redundantes.',
      ],
    },
    { type: 'title', level: 3, text: 'Cuándo es el momento ideal para limpiar tu lista' },
    {
      type: 'list',
      items: [
        'Antes de importar contactos a un nuevo CRM o plataforma de envío (Mailchimp, SendGrid, etc.).',
        'Si notas que tu tasa de apertura ha caído por debajo del promedio habitual.',
        'Después de un evento o feria donde hayas recogido datos manualmente.',
        'Como mantenimiento preventivo cada trimestre para mantener la salud del dominio.',
      ],
    },
    { type: 'title', level: 3, text: 'Impacto en el retorno de inversión' },
    {
      type: 'paragraph',
      html: 'El marketing por correo electrónico sigue siendo uno de los canales con mayor ROI, pero solo si los mensajes llegan a la bandeja de entrada. Al usar un <strong>limpiador de correos</strong>, estás optimizando tu embudo de ventas desde el origen y dejando de pagar a plataformas por contactos que nunca verán tus mensajes.',
    },
    {
      type: 'tip',
      title: 'Implementa el doble opt in',
      html: 'La mejor manera de evitar correos falsos es requerir que el usuario confirme su suscripción haciendo clic en un enlace enviado a su bandeja de entrada. Esto garantiza que el correo existe y que el usuario tiene acceso a él.',
    },
  ],
};
