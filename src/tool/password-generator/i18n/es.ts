import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: '¿Es seguro usar un generador de contraseñas online?',
    answer: "Sí, siempre que el generador sea 'Client-Side'. Nuestra herramienta genera las claves localmente en tu navegador mediante criptografía segura. Tu contraseña nunca se envía a través de internet ni se guarda en ningún servidor.",
  },
  {
    question: "¿Qué hace que una contraseña sea 'hacker-proof'?",
    answer: 'La clave es la entropía (aleatoriedad). Una mezcla de mayúsculas, minúsculas, números y símbolos especiales, combinada con una longitud mínima de 12-16 caracteres, hace que un ataque de fuerza bruta sea prácticamente imposible con la tecnología actual.',
  },
  {
    question: '¿Por qué evitar palabras comunes o fechas?',
    answer: 'Los hackers utilizan ataques de diccionario que prueban millones de palabras, nombres y combinaciones de fechas en segundos. Las claves puramente aleatorias no siguen patrones lingüísticos, lo que las hace mucho más seguras.',
  },
  {
    question: '¿Debo memorizar todas mis contraseñas?',
    answer: 'No es recomendable. Lo ideal es usar un gestor de contraseñas (como Bitwarden, 1Password o el propio del navegador) para guardar estas claves largas y aleatorias, y así solo tener que recordar una clave maestra robusta.',
  },
];

const howToData = [
  {
    name: 'Definir la longitud',
    text: 'Ajusta el selector para elegir cuántos caracteres tendrá tu clave. El estándar de seguridad actual recomienda al menos 12.',
  },
  {
    name: 'Elegir la complejidad',
    text: 'Marca las opciones de mayúsculas, números y símbolos según los requisitos del sitio donde vayas a usar la contraseña.',
  },
  {
    name: 'Generar la clave',
    text: 'Pulsa el botón de generar. Cada clic crea una combinación única de alta entropía basada en algoritmos criptográficos.',
  },
  {
    name: 'Copiar con un clic',
    text: 'Utiliza el botón de copiar para llevar la contraseña directamente a tu portapapeles de forma segura.',
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
  name: 'Cómo usar el generador de contraseñas seguras',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generador de Contraseñas Seguras y Aleatorias',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Crea contraseñas robustas e imposibles de hackear al instante. Herramienta gratuita de ciberseguridad para generar claves aleatorias y seguras.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Generando...',
  labelSecurity: 'Seguridad',
  labelLength: 'Longitud',
  strengthWeak: 'Débil',
  strengthFair: 'Media',
  strengthGood: 'Buena',
  strengthStrong: 'Excelente',
  strengthUnbreakable: 'Impenetrable',
  optionUppercase: 'Mayúsculas',
  optionLowercase: 'Minúsculas',
  optionNumbers: 'Números',
  optionSymbols: 'Símbolos',
  copyTitle: 'Copiar',
  regenerateTitle: 'Generar Nueva',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'generador-contrasenas',
  title: 'Generador de Contraseñas Seguras y Aleatorias',
  description: 'Crea contraseñas robustas e imposibles de hackear al instante. Herramienta gratuita de ciberseguridad para generar claves aleatorias y seguras.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/es/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Contraseña — Wikipedia', url: 'https://es.wikipedia.org/wiki/Contrase%C3%B1a' },
    { name: 'Have I Been Pwned — Comprueba si tu contraseña fue expuesta', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Anatomía de una Contraseña Indescifrable',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tu contraseña es la única barrera entre tus datos personales (bancarios, médicos, fotos) y un ciberdelincuente. Sin embargo, el usuario promedio sigue utilizando patrones predecibles como "123456" o nombres de mascotas, que pueden ser crackeados en <strong>menos de un segundo</strong>.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'El Peligro de las Tablas Rainbow',
          description: 'Los hackers no "adivinan" tu contraseña probando una por una manualmente. Usan bases de datos gigantescas (Rainbow Tables) con millones de hashes precalculados de contraseñas comunes. Si tu contraseña está en el diccionario o es una frase famosa, ya ha sido hackeada antes de que empieces a usarla.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'La Solución: Entropía Pura',
          description: 'La entropía mide el desorden o la imprevisibilidad. Cuanto mayor es la entropía (bits), más tiempo necesita un ordenador para crackearla. Esta herramienta utiliza crypto.getRandomValues(), una API del navegador que genera números aleatorios criptográficamente seguros, a diferencia de Math.random() que es predecible.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Decálogo de Ciberseguridad Básica',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Longitud antes que Complejidad',
          description: 'Una contraseña de 20 caracteres solo minúsculas es más segura que una de 8 con símbolos raros. Matemáticamente, cada carácter extra multiplica exponencialmente la dificultad.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'El mito de las sustituciones',
          description: 'Cambiar "a" por "@" o "e" por "3" (Leetspeak) no engaña a nadie. Los diccionarios de ataque modernos ya incluyen estas variaciones automáticamente. Evita usar palabras reconocibles.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Diferente sitio, diferente llave',
          description: 'Si usas la misma contraseña para tu email y para un foro, y hackean el foro, ya tienen acceso a tu email. Usa un Gestor de Contraseñas (como Bitwarden o 1Password) para recordar estas claves complejas.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Privacidad garantizada',
      html: 'Toda la generación ocurre <strong>en tu navegador</strong>. Ninguna contraseña se transmite por internet ni se registra en ningún servidor. El código fuente es auditable.',
    },
  ],
};
