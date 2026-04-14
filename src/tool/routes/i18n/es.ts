import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: '¿Cuál es el algoritmo de optimización que utiliza?',
    answer: 'Utiliza una resolución avanzada del Problema del Viajante (TSP). El algoritmo analiza todas las paradas y determina el orden secuencial que minimiza la distancia total recorrida, ahorrando tiempo y combustible.',
  },
  {
    question: '¿Es seguro compartir mi ubicación?',
    answer: 'Sí. La herramienta procesa los datos geográficos de forma local en tu navegador. Nosotros no almacenamos tus rutas, paradas ni historial de ubicaciones en nuestros servidores.',
  },
  {
    question: '¿Cuántas paradas puedo optimizar a la vez?',
    answer: 'Nuestra versión gratuita permite optimizar hasta 10 paradas de forma instantánea. Para rutas profesionales más amplias, el sistema está optimizado para mantener un rendimiento alto sin bloqueos en el navegador.',
  },
  {
    question: '¿Puedo usar la ruta directamente en Google Maps?',
    answer: '¡Claro! Una vez optimizada la ruta, la herramienta genera un enlace de navegación compatible con Google Maps para que puedas iniciar el viaje directamente desde tu móvil.',
  },
];

const howToData = [
  {
    name: 'Añadir punto de origen',
    text: 'Escribe la dirección de inicio o pulsa en el mapa para fijar desde dónde comienza tu ruta.',
  },
  {
    name: 'Introducir paradas de destino',
    text: 'Añade todas las ubicaciones que necesitas visitar. No importa el orden, ya que el sistema las reordenará por ti.',
  },
  {
    name: 'Optimizar la secuencia',
    text: 'Pulsa el botón de optimizar. El algoritmo calculará en segundos el orden más eficiente para recorrer todas las paradas.',
  },
  {
    name: 'Abrir en navegador',
    text: 'Utiliza el botón de navegación para llevarte la ruta optimizada a tu aplicación de mapas favorita.',
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
  name: 'Cómo optimizar una ruta con múltiples paradas',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Rutas Óptimas',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Optimiza tus rutas de reparto o viaje gratis. Reordena paradas automáticamente para encontrar el camino más corto y eficiente.',
};

const ui: RoutesUI = {
  titleSidebar: 'Puntos de Ruta',
  descriptionSidebar: 'Haz clic en el mapa para añadir paradas. El primer punto es el inicio.',
  emptyState: 'Sin puntos añadidos',
  btnOptimize: 'Calcular Ruta Óptima',
  btnCalculating: 'Calculando...',
  btnClear: 'Borrar Todo',
  labelDistance: 'Distancia Total Estimada',
  labelDeleteAria: 'Eliminar',
  labelLoadingAddress: 'Cargando dirección...',
  labelPoint: 'Punto',
  errorMinPoints: 'Se necesitan al menos dos puntos para calcular una ruta.',
  errorCalculate: 'Error al calcular la ruta.',
  errorAddress: 'Error al obtener dirección',
  errorAddressName: 'Punto desconocido',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'rutas',
  title: 'Calculadora de Rutas Óptimas Gratis',
  description: 'Optimiza tus rutas de reparto o viaje gratis. Nuestra herramienta reordena tus paradas automáticamente para encontrar el camino más corto y eficiente.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Tecnologías y Fuentes',
  bibliography: [
    { name: 'Leaflet — Librería de mapas interactivos de código abierto', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Datos cartográficos abiertos', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Tiles de mapas Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Servicio de geocodificación inversa (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: 'OSRM — Open Source Routing Machine (optimización de rutas)', url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Optimizador de Rutas Inteligente: TSP para Repartos y Viajes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El <strong>optimizador de rutas online</strong> es una herramienta gratuita que resuelve el clásico <em>Problema del Viajante (TSP)</em>. Añade todas tus paradas sin importar el orden y el algoritmo calculará automáticamente la secuencia más eficiente para minimizar la distancia total recorrida.',
    },
    {
      type: 'title',
      text: '¿Cómo funciona el algoritmo de optimización de rutas?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La herramienta utiliza la API de <strong>OSRM (Open Source Routing Machine)</strong>, un motor de enrutamiento de alto rendimiento basado en datos de OpenStreetMap. El proceso es: primero calcula la ruta circular óptima entre todos los puntos (algoritmo TSP), luego determina el mejor punto de corte para convertirla en un recorrido lineal de ida, y finalmente dibuja la ruta sobre el mapa con la distancia total estimada.',
    },
    {
      type: 'title',
      text: 'Casos de uso: repartos, comerciales y viajes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El optimizador de rutas es ideal para <strong>repartidores autónomos</strong> que necesitan organizar múltiples entregas diarias, <strong>comerciales a puerta fría</strong> que visitan clientes en una zona, o <strong>viajeros</strong> que quieren conocer varias ciudades o monumentos en el orden más eficiente. La herramienta procesa toda la información en el navegador, sin compartir tus datos con ningún servidor propio.',
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algoritmo', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Motor de rutas', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Privacidad', icon: 'mdi:lock-check' },
        { value: 'Gratuito', label: 'Coste', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Privacidad y procesamiento local',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toda la lógica de la herramienta se ejecuta directamente en tu navegador. Las coordenadas de tus paradas solo se envían a las APIs públicas de OSRM y Nominatim para calcular rutas y obtener nombres de dirección, pero <strong>no se almacenan en ningún servidor propio</strong>. Puedes usar la herramienta con total seguridad para planificar rutas de negocio con información sensible.',
    },
    {
      type: 'tip',
      title: 'Consejo de uso',
      html: '<strong>Para mejores resultados</strong>, añade las paradas haciendo clic directamente en el mapa en lugar de usar búsqueda de direcciones. Los marcadores son arrastrables, por lo que puedes ajustar la posición exacta de cada punto después de colocarlo.',
    },
  ],
};
