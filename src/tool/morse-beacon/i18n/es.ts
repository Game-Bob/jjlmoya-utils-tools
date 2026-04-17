import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: '¿Cuál es la señal de socorro SOS en código Morse?',
    answer: "La señal es '... --- ...' (tres puntos, tres rayas, tres puntos). Se transmite de forma continua sin espacios entre las letras para indicar una emergencia inmediata.",
  },
  {
    question: '¿Por qué no funciona el flash en mi navegador?',
    answer: 'La activación del flash (Torch) requiere que el navegador tenga permisos de cámara. Algunos navegadores móviles o versiones antiguas de escritorio no soportan esta API por motivos de privacidad.',
  },
  {
    question: '¿Es visible la señal de SOS de la pantalla?',
    answer: 'Sí, en condiciones de oscuridad absoluta, el brillo máximo de una pantalla blanca parpadeando en Morse puede verse a varios cientos de metros de distancia, siendo una alternativa útil si el flash falla.',
  },
  {
    question: '¿Qué es el código Morse internacional?',
    answer: 'Es un sistema de comunicación que utiliza secuencias de señales cortas (puntos) y largas (rayas) para representar letras y números, estandarizado por la UIT para comunicaciones de radio y señales ópticas.',
  },
];

const howToData = [
  {
    name: 'Escribir el mensaje',
    text: "Introduce el texto que quieres transmitir o utiliza el botón preconfigurado de 'SOS' para emergencias.",
  },
  {
    name: 'Configurar la velocidad',
    text: 'Ajusta los WPM (palabras por minuto) para que la señal sea más rápida o más lenta según la visibilidad.',
  },
  {
    name: 'Elegir fuente de luz',
    text: 'Activa el parpadeo de la pantalla completa o permite el acceso al flash de la cámara para una señal más potente.',
  },
  {
    name: 'Iniciar transmisión',
    text: 'Pulsa Transmitir para que el sistema convierta el texto en impulsos visuales automáticos siguiendo el estándar Morse.',
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
  name: 'Cómo usar la baliza Morse para transmitir mensajes',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Baliza Morse: Transmisor Táctico SOS',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Convierte tu dispositivo en una estación de transmisión Morse. Utiliza flash y pantalla como señales de luz de emergencia y comunicación táctica.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Mensaje a Transmitir',
  placeholder: 'Escribe aquí tu mensaje (SOS, HOLA, AYUDA)...',
  btnTransmit: 'Transmitir',
  btnSosLoop: 'Bucle SOS',
  btnStop: 'Detener',
  labelTorch: 'Flash/Linterna',
  statusStandby: 'STANDBY',
  statusTransmitting: 'TRANSMITIENDO',
  statusStopping: 'DETENIENDO...',
  statusWaiting: 'EN ESPERA',
  statusReady: 'HARDWARE LISTO',
  statusNoTorch: 'SIN LINTERNA',
  statusNoPermission: 'SIN PERMISO',
  statusNotSupported: 'NO SOPORTADO',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'ENVIANDO:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'faro-morse',
  title: 'Baliza Morse: Transmisor Táctico SOS',
  description: 'Convierte tu dispositivo en una estación de transmisión Morse. Utiliza flash y pantalla como señales de luz de emergencia y comunicación táctica.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'ITU-R M.1677-1 — International Morse Code', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Código Morse — Wikipedia', url: 'https://es.wikipedia.org/wiki/C%C3%B3digo_Morse' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'El Lenguaje de la Luz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta herramienta convierte tu dispositivo en una baliza de señalización óptica capaz de transmitir mensajes visibles a kilómetros de distancia. Utilizando el estándar internacional del Código Morse, permite la comunicación silenciosa o de emergencia mediante pulsos de luz (linterna y pantalla).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Un Estándar Universal',
          description: 'Desarrollado en 1830 por Samuel Morse, este sistema binario de puntos y rayas revolucionó las telecomunicaciones. Su simplicidad lo hace extremadamente robusto: puede transmitirse por sonido, radio, electricidad o luz, siendo legible incluso con interferencias severas.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'Modo SOS de Emergencia',
          description: "El botón 'Bucle SOS' transmite continuamente la secuencia ··· --- ···. Esta señal es reconocida mundialmente como petición de auxilio y, gracias al alto contraste del flash LED, es visible a gran distancia incluso a plena luz del día en ciertas condiciones.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Estándar ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Esta utilidad respeta estrictamente los <strong>tiempos reglamentarios</strong> del código Morse internacional definidos por la Unión Internacional de Telecomunicaciones.',
    },
    {
      type: 'list',
      items: [
        '1 punto = 1 unidad de tiempo',
        '1 raya = 3 unidades de tiempo',
        'Espacio entre elementos = 1 unidad',
        'Espacio entre letras = 3 unidades',
        'Espacio entre palabras = 7 unidades',
      ],
    },
    {
      type: 'tip',
      title: 'Velocidad estándar',
      html: 'La velocidad por defecto es de <strong>15 WPM</strong> (palabras por minuto), que corresponde a un ritmo de transmisión profesional. A 15 WPM, 1 unidad = 80 ms.',
    },
  ],
};
