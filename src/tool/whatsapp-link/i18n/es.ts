import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { WhatsappLinkUI } from '../ui';

const faqData = [
  {
    question: '¿Cómo genero un link de WhatsApp?',
    answer: 'Para crear tu enlace escribe tu número móvil incluyendo el indicativo de país. Por ejemplo, para España pon primero el 34, para México el 52, seguido de tu número normal. Puedes añadir un mensaje opcional y la herramienta generará el enlace final (wa.me) que podrás copiar.',
  },
  {
    question: '¿Puedo añadir un mensaje predefinido largo?',
    answer: 'Sí. Puedes adjuntar un texto que aparecerá automáticamente en la caja de mensaje del usuario al presionar el enlace. Se usa la codificación de URLs del navegador para soportar espacios, tildes y emoticonos sin corromper la URL.',
  },
  {
    question: '¿Cómo uso el código QR generado?',
    answer: 'Al generar un link válido, aparecerá el botón "Mostrar QR". El código QR generado contiene la URL. Puedes hacer clic derecho y guardar la imagen para usarla en tarjetas de visita, carteles o redes sociales.',
  },
  {
    question: '¿A dónde van mis datos?',
    answer: 'El generador realiza toda la recolección, limpieza y codificación puramente del lado cliente, en tu navegador. Tu número de teléfono y mensaje predefinido no se envían a ningún servidor ni se almacenan en ninguna base de datos.',
  },
];

const howToData = [
  { name: 'Seleccionar el prefijo', text: 'Elige el indicativo de tu país en el selector y escribe tu número de teléfono sin el prefijo.' },
  { name: 'Añadir mensaje opcional', text: 'Escribe un texto predefinido que aparecerá cuando alguien abra el enlace y pulse Enviar.' },
  { name: 'Generar el enlace', text: 'Pulsa el botón verde para obtener tu URL directa de wa.me lista para compartir.' },
  { name: 'Compartir o imprimir QR', text: 'Copia el enlace, prueba el chat o descarga el código QR para tarjetas e impresión.' },
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
  name: 'Cómo crear un enlace directo de WhatsApp',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generador de Enlaces de WhatsApp',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crea enlaces directos a tu chat de WhatsApp con mensaje predefinido y código QR. Herramienta gratuita y 100% privada.',
};

const ui: WhatsappLinkUI = {
  phoneLabel: 'Teléfono de WhatsApp',
  phonePlaceholder: '600 00 00 00',
  messageLabel: 'Mensaje inicial (opcional)',
  messagePlaceholder: '¡Hola! Me gustaría más información sobre el servicio...',
  generateBtn: 'Generar Enlace',
  resultLabel: 'Link Directo Generado',
  copyTitle: 'Copiar al portapapeles',
  copyDone: '¡Copiado!',
  testBtn: 'Probar Chat',
  qrShow: 'Mostrar QR',
  qrHide: 'Ocultar QR',
  errorPhone: 'Por favor, introduce un número válido.',
  defaultPrefix: '34',
};

export const content: ToolLocaleContent<WhatsappLinkUI> = {
  slug: 'generador-enlace-whatsapp',
  title: 'Generador de Enlace WhatsApp con QR',
  description: 'Crea enlaces directos a tu chat de WhatsApp con mensaje predefinido y código QR. Herramienta gratuita, sin registro y 100% privada.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Cómo usar la función clic para chatear — Centro de ayuda de WhatsApp', url: 'https://faq.whatsapp.com/591339899867293' },
    { name: 'API Click to chat: parámetros y formatos — WhatsApp', url: 'https://faq.whatsapp.com/425559092497645' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Genera enlaces cortos y directos para WhatsApp' },
    {
      type: 'paragraph',
      html: '¿Necesitas que clientes o seguidores te contacten por WhatsApp sin tener que guardar tu número? Nuestro <strong>creador de enlaces wa.me</strong> soluciona este problema generando un link que abre un chat directo al instante, sin pasos previos.',
    },
    { type: 'title', level: 3, text: '¿Para qué sirve el acortador wa.me de WhatsApp?' },
    {
      type: 'paragraph',
      html: 'WhatsApp dispone de una API llamada "Clic para chatear". Mediante una URL especial, cualquier usuario puede abrir un chat nuevo contigo sin necesidad de añadirte como contacto previamente, tanto desde móvil como desde WhatsApp Web.',
    },
    {
      type: 'list',
      items: [
        '<strong>Más conversiones:</strong> Un botón de "Contactar por WhatsApp" en tu tienda reduce la fricción y aumenta las ventas.',
        '<strong>Mensaje predefinido:</strong> El usuario solo pulsa "Enviar". Ejemplo: "¡Hola! Vengo desde Instagram y quiero pedir la oferta."',
        '<strong>Código QR automático:</strong> Descarga el QR para tarjetas de visita, carteles o publicaciones en redes.',
      ],
    },
    { type: 'title', level: 3, text: '¿Cómo funciona la generación del enlace?' },
    {
      type: 'paragraph',
      html: 'La herramienta concatena el prefijo internacional y el número limpio, y lo adhiere a la API oficial de WhatsApp junto al parámetro de texto convertido mediante <em>url-encoding</em>.',
    },
    {
      type: 'code',
      ariaLabel: 'Formato de URL de WhatsApp',
      code: 'https://wa.me/34XXXXXXXXX\nhttps://wa.me/34XXXXXXXXX?text=%C2%A1Hola!%20Me%20gustar%C3%ADa...',
    },
    { type: 'title', level: 3, text: 'Privacidad garantizada y procesamiento local' },
    {
      type: 'paragraph',
      html: 'Toda la construcción del enlace ocurre en tu navegador mediante JavaScript. Ningún servidor registra, guarda ni lee los números de teléfono ni los mensajes que introduces. Tu privacidad está completamente protegida.',
    },
    {
      type: 'tip',
      title: 'Importancia del prefijo internacional',
      html: 'Para que WhatsApp dirija el mensaje correctamente, es obligatorio incluir el código de país. Para España es el <strong>34</strong>, seguido del número de 9 cifras, sin espacios ni el símbolo +. El resultado final sería, por ejemplo, <code>346XXXXXXXX</code>.',
    },
  ],
};
