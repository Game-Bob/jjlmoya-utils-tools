import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: '¿Es gratuita esta calculadora de diferencia de fechas?',
    answer: 'Sí, es una herramienta 100% gratuita y accesible desde cualquier navegador sin necesidad de registro ni descargas.',
  },
  {
    question: '¿Cómo se calculan los años bisiestos en el tiempo total?',
    answer: 'La herramienta utiliza la cronología estándar de JavaScript (UTC), que maneja automáticamente los años bisiestos y la duración variable de cada mes para dar un resultado de días exacto.',
  },
  {
    question: '¿Puedo calcular la diferencia entre horas y minutos también?',
    answer: 'Sí. Los campos de entrada permiten seleccionar la hora exacta. El resultado te devuelve el desglose en días, horas, minutos y segundos, además de los totales acumulados.',
  },
  {
    question: '¿Mis datos de fechas se envían a algún servidor?',
    answer: 'No. Todo el procesamiento se realiza localmente en tu navegador. No almacenamos ni recibimos información sobre las fechas que calculas.',
  },
];

const howToData = [
  { name: 'Seleccionar la fecha de inicio', text: "Introduce la fecha y hora de partida o usa el botón 'Hoy' para fijarla al instante." },
  { name: 'Seleccionar la fecha de fin', text: "Define el momento de destino. Puedes usar 'Ahora' para medir el tiempo hasta este preciso instante." },
  { name: 'Leer los resultados', text: 'Consulta el desglose en días, horas, minutos y segundos, y los totales acumulados de semanas y horas.' },
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
  name: 'Cómo calcular la diferencia entre dos fechas',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Diferencia entre Fechas',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calcula exactamente cuánto tiempo ha pasado entre dos fechas o cuánto falta para un evento. Resultados en días, horas y minutos.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Fecha de Inicio',
  endLabel: 'Fecha de Fin',
  nowBtn: 'Ahora',
  todayBtn: 'Hoy',
  tomorrowBtn: 'Mañana',
  daysLabel: 'Días',
  hoursLabel: 'Horas',
  minsLabel: 'Min',
  secsLabel: 'Seg',
  weeksLabel: 'Semanas Totales',
  totalHoursLabel: 'Horas Totales',
  totalMinsLabel: 'Minutos Totales',
  elapsed: 'Tiempo Transcurrido',
  past: 'Tiempo en el Pasado',
  invalidDates: 'Fechas no válidas',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'calculadora-diferencia-fechas',
  title: 'Calculadora de Diferencia entre Fechas',
  description: 'Calcula exactamente cuánto tiempo ha pasado entre dos fechas o cuánto falta para un evento. Resultados en días, horas y minutos de forma gratuita y segura.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Time and Date: Reloj Mundial y Conversor de Husos Horarios', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: Historia del Calendario Gregoriano', url: 'https://es.wikipedia.org/wiki/Calendario_gregoriano' },
    { name: 'Wikipedia: Matriz de Eisenhower y Gestión del Tiempo', url: 'https://es.wikipedia.org/wiki/Matriz_de_Eisenhower' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Calculadora de diferencia entre fechas con días, horas y minutos' },
    {
      type: 'paragraph',
      html: 'Calcular la <strong>diferencia entre dos fechas</strong> es una de las tareas más comunes y subestimadas tanto en la vida cotidiana como en entornos profesionales. Ya sea para planificar el lanzamiento de un producto, calcular la edad exacta de una persona o medir el tiempo que falta para un evento, contar con una herramienta precisa es fundamental para una gestión del tiempo eficiente.',
    },
    { type: 'title', level: 3, text: '¿Para qué sirve calcular la diferencia de fechas?' },
    {
      type: 'paragraph',
      html: 'La utilidad de esta herramienta se extiende a múltiples campos. En el sector laboral, los gestores de proyectos la utilizan para definir plazos de entrega y controlar el progreso de los hitos. En el ámbito legal, es esencial para calcular plazos de prescripción o la duración de contratos.',
    },
    {
      type: 'list',
      items: [
        '<strong>Planificación de eventos:</strong> Saber cuántas semanas y días faltan para una boda, conferencia o viaje.',
        '<strong>Gestión de proyectos:</strong> Calcular el tiempo transcurrido desde el inicio de una fase hasta su finalización.',
        '<strong>Finanzas:</strong> Determinar el número de días para el cálculo de intereses o vencimientos de facturas.',
        '<strong>Recursos Humanos:</strong> Medir la antigüedad de un empleado o los días de vacaciones acumulados.',
        '<strong>Salud:</strong> Seguir el progreso de un tratamiento o el tiempo de recuperación.',
      ],
    },
    { type: 'title', level: 3, text: 'La percepción del tiempo y la precisión digital' },
    {
      type: 'paragraph',
      html: 'A menudo tendemos a redondear el tiempo. Decimos "falta un mes" cuando en realidad faltan 27 días y 14 horas. Al utilizar una calculadora digital, eliminamos la subjetividad y obtenemos datos puros que permiten una toma de decisiones informada.',
    },
    { type: 'title', level: 3, text: 'Diferencia entre días naturales y días hábiles' },
    {
      type: 'paragraph',
      html: 'Es importante distinguir que esta herramienta calcula <strong>días naturales</strong>, incluyendo fines de semana y festivos. Para el cálculo astronómico y civil general, el tiempo se mide de forma continua. Si necesitas calcular el tiempo total de un proyecto, recuerda que los días obtenidos representan el calendario real completo.',
    },
    { type: 'title', level: 3, text: 'El impacto del tiempo en la productividad' },
    {
      type: 'paragraph',
      html: 'La Ley de Parkinson afirma que el trabajo se expande hasta llenar el tiempo disponible para su realización. Al visualizar exactamente cuántas horas y minutos quedan para una entrega, los equipos tienden a optimizar sus esfuerzos.',
    },
    {
      type: 'tip',
      title: 'Fechas futuras y pasadas',
      html: 'Puedes usar la calculadora tanto para fechas futuras como pasadas. Si la fecha de fin es anterior a la de inicio, el sistema detecta automáticamente que se trata de tiempo transcurrido en el pasado, manteniendo la precisión en los valores absolutos.',
    },
  ],
};
