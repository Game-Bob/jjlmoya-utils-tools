import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: '¿Qué es la regla de tres simple directa?',
    answer: "Es un método matemático para resolver problemas de proporcionalidad entre tres valores conocidos y uno desconocido. Se llama 'directa' porque cuando una magnitud aumenta, la otra también lo hace en la misma proporción.",
  },
  {
    question: '¿Cuándo debo usar la regla de tres inversa?',
    answer: 'Se utiliza cuando las magnitudes son inversamente proporcionales (si una aumenta, la otra disminuye). Por ejemplo: si 2 pintores tardan 5 horas, 4 pintores tardarán menos tiempo. Nuestra calculadora actual se centra en la proporcionalidad directa.',
  },
  {
    question: '¿Es precisa para cálculos profesionales?',
    answer: 'Sí. Nuestra calculadora utiliza precisión de punto flotante de alta fidelidad, ideal para ajustes de dosificación, escalas de diseño gráfico, presupuestos comerciales y conversiones de recetas de cocina.',
  },
  {
    question: '¿Cómo se calcula manualmente?',
    answer: 'La fórmula es: (Valor B * Valor C) / Valor A = X. Es decir, multiplicas los valores en diagonal y divides el resultado por el valor que queda solo.',
  },
];

const howToData = [
  {
    name: 'Identificar la relación base',
    text: 'Introduce los dos valores conocidos que forman la proporción inicial (ej. 100km equivalen a 8 litros).',
  },
  {
    name: 'Introducir el tercer dato',
    text: 'Escribe el nuevo valor del que quieres conocer su equivalente (ej. si voy a recorrer 250km...).',
  },
  {
    name: 'Obtener el resultado',
    text: 'El sistema calculará automáticamente el valor desconocido (X) en tiempo real sin necesidad de pulsar botones.',
  },
  {
    name: 'Copiar o resetear',
    text: 'Puedes copiar el resultado directamente al portapapeles o limpiar los campos para realizar un nuevo cálculo.',
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
  name: 'Cómo usar la calculadora de regla de tres',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Regla de Tres Simple',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Resuelve proporciones matemáticas al instante. La herramienta definitiva para calcular cantidades, recetas, descuentos y conversiones.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Si tengo...',
  labelB: 'Equivale a...',
  labelC: 'Y ahora tengo...',
  labelX: 'Resultado (X)',
  hintA: 'Cantidad inicial',
  hintB: 'Valor conocido',
  hintC: 'Nueva cantidad',
  hintX: 'Valor calculado',
  separatorIsTo: 'Es a',
  separatorWillBe: 'Será a',
  copyTitle: 'Copiar resultado',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regla-de-tres',
  title: 'Calculadora de Regla de Tres Simple',
  description: 'Resuelve proporciones matemáticas al instante. La herramienta definitiva para calcular cantidades, recetas, descuentos y conversiones.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Proporción (matemáticas) — Wikipedia', url: 'https://es.wikipedia.org/wiki/Proporci%C3%B3n_(matem%C3%A1ticas)' },
    { name: 'Regla de tres — Khan Academy', url: 'https://es.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates/pre-algebra-ratios-intro/a/ratio-review' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Para qué sirve la regla de tres?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La regla de tres simple directa es el "navaja suiza" de las matemáticas. Sirve para resolver problemas donde tres datos son conocidos y buscamos el cuarto. Si conoces la relación entre <strong>A y B</strong>, y tienes un nuevo valor <strong>C</strong>, la calculadora obtiene <strong>X</strong> al instante.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Cocina y Recetas',
          description: 'Si la receta pide 500g de harina para 4 personas, ¿cuánta necesito para 7?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Compras y Precios',
          description: 'Si el pack de 3 latas cuesta 2.50€, ¿cuánto me costarían 10 latas?',
          points: ['(2.50 × 10) ÷ 3 = 8.33€'],
        },
        {
          icon: 'mdi:car',
          title: 'Viajes y Distancia',
          description: 'Si tardo 45 min en hacer 60km, ¿cuánto tardaré en hacer 140km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Diseño y Pantallas',
          description: 'Si la imagen mide 1920px de ancho y quiero reducirla a 800px manteniendo la proporción...',
          points: ['(AltoOriginal × 800) ÷ 1920 = AltoNuevo'],
        },
      ],
    },
    {
      type: 'title',
      text: '¿Cómo funciona la fórmula?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fórmula es siempre la misma: <strong>multiplica los cruzados y divide por el que sobra</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Fórmula de la regla de tres simple directa',
    },
    {
      type: 'paragraph',
      html: 'En la calculadora: multiplicamos el valor <strong>B</strong> por el valor <strong>C</strong> y dividimos entre <strong>A</strong>. El resultado es <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Usos profesionales y cotidianos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Más allá de las matemáticas escolares, la regla de tres está en todas partes: en farmacia para calcular dosificaciones por peso corporal, en fotografía para calcular tiempos de exposición, en finanzas para calcular variaciones porcentuales, o en imprenta para escalar medidas de formato.',
    },
    {
      type: 'tip',
      title: 'Truco de precisión',
      html: 'El resultado se muestra con hasta 4 decimales significativos. Si trabajas con dinero o medidas exactas, recuerda redondear según el contexto: los euros a 2 decimales, los píxeles a enteros.',
    },
  ],
};
