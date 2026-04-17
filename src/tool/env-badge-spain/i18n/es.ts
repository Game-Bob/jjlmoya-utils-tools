import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: '¿Qué pasa si meto un coche sin etiqueta a una Zona de Bajas Emisiones (ZBE)?',
    answer: 'Si accedes a una ZBE con un vehículo sin etiqueta ambiental y sin permiso excepcional, recibirás una sanción económica por infracción grave, cuya multa asciende habitualmente a 200 euros.',
  },
  {
    question: '¿Tengo que llevar la pegatina física de la DGT en el parabrisas obligatoriamente?',
    answer: 'La DGT aconseja su colocación, pero la multa por no llevarla es de competencia municipal. En Madrid sí es indispensable, mientras en otras ciudades el control se delega íntegramente a lectura automática de matrículas por cámaras.',
  },
  {
    question: '¿Mi diésel no tiene etiqueta pero la ficha técnica pone Euro 4 y lo compré antes de tiempo?',
    answer: 'Si tienes un vehículo anterior al 2006 con motor Euro 4, la base de datos de Tráfico te puede clasificar solo por fecha. Debes pedir certificado de tu marca al concesionario oficial y presentarlo en Tráfico para corregir la clasificación.',
  },
  {
    question: '¿Para qué sirve el distintivo C (Verde) en 2025?',
    answer: 'En muchas ZBE tu acceso libre se mantiene, pero el distintivo C restringe aparcar en superficie, obligándote a estacionar bajo suelo o en párquines homologados con coste y límite horario.',
  },
];

const howToData = [
  { name: 'Selecciona el tipo de vehículo', text: 'Escoge en primer lugar el ámbito de motor a consultar: coche, moto o camión tienen lógicas de clasificación distintas en Tráfico.' },
  { name: 'Indica la motorización o energía exacta', text: 'Gasolina, eléctrico o diésel importan, pero la distinción ECO entre HEV e híbrido enchufable se define por su autonomía superior a los 40 km.' },
  { name: 'Inserta la fecha de matriculación o normativa Euro', text: 'El factor definitivo para vehículos de combustión es la norma europea a la que responden. La fecha de compra en la ficha técnica te aproxima la fecha estándar.' },
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
  name: 'Cómo simular la etiqueta ambiental DGT de tu vehículo',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulador de Etiqueta Ambiental DGT',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Descubre qué etiqueta ambiental DGT corresponde a tu vehículo según su tipo, combustible y año de matriculación. Herramienta gratuita para prepararse ante las ZBE.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Tipo de Vehículo',
  vehicleCar: 'Turismo / Furgoneta',
  vehicleMoto: 'Motocicleta',
  vehicleHeavy: 'Camión / Autobús',
  errVehicle: 'Selecciona un tipo de vehículo',

  step2Label: '2. Energía o Combustible',
  fuelElectric: '100% Eléctrico / Pila',
  fuelPhevHigh: 'Híbrido Enchufable (>40 km)',
  fuelPhevLow: 'Híbrido Enchufable (<40 km)',
  fuelHybridGas: 'Híbrido (HEV) o Gas',
  fuelGasoline: 'Gasolina',
  fuelDiesel: 'Diésel',
  errFuel: 'Selecciona un tipo de energía',

  step3Label: '3. Normativa Euro o Época de Matriculación',
  yearPre2000: 'Antes de 2000',
  year20002005: '2000 a 2005',
  year20062013: '2006 a 2013',
  yearPost2014: '2014 o posterior',
  errYear: 'Selecciona la época de matriculación',
  helpText: 'Si tienes dudas, la normativa Euro de tu ficha técnica prevalece frente a la fecha de matriculación.',

  submitBtn: 'Simular Etiqueta',

  resultTitle: 'Distintivo Asignado',

  badge0Label: 'Etiqueta 0 Emisiones',
  badge0Letter: '0',
  badge0Sub: 'EMISIONES',
  badge0Desc: 'Vehículos con máxima eficiencia. Disfrutan de acceso ilimitado a Zonas de Bajas Emisiones (ZBE) y amplias exenciones fiscales.',

  badgeEcoLabel: 'Etiqueta ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Vehículos de bajas emisiones como híbridos y a gas. Permite acceder a la mayoría de ZBE y tiene bonificaciones en aparcamiento SER.',

  badgeCLabel: 'Etiqueta C',
  badgeCLetter: 'C',
  badgeCDesc: 'Vehículos de combustión interna recientes con normativa Euro alta. Acceso a ZBE sujeto a aparcar en párking en ciertas ciudades.',

  badgeBLabel: 'Etiqueta B',
  badgeBLetter: 'B',
  badgeBDesc: 'Vehículos de combustión interna más antiguos. Presentan mayores restricciones de acceso y aparcamiento.',

  badgeALabel: 'Sin Etiqueta',
  badgeALetter: 'NO',
  badgeASub: 'DISPONE',
  badgeADesc: 'Vehículos altamente contaminantes sin derecho a distintivo. Tienen prohibida la circulación en prácticamente todas las Zonas de Bajas Emisiones.',

  warningText: 'Verifica siempre en la página web oficial de la DGT para confirmar tu matrícula, en caso de particularidades o error administrativo.',
  resetBtn: 'Nueva Simulación',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'simulador-distintivo-ambiental-espana',
  title: 'Simulador de Etiqueta Ambiental DGT',
  description: 'Descubre gratis qué etiqueta medioambiental de la DGT le corresponde a tu coche, moto o furgoneta para las Zonas de Bajas Emisiones (ZBE) en España.',
  ui,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referencias',
  bibliography: [
    { name: 'Normativa sobre Cambio Climático y Tráfico (DGT)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Ley de Cambio Climático y Zonas de Bajas Emisiones (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: '¿Qué es el distintivo ambiental de la DGT?' },
    {
      type: 'paragraph',
      html: 'El <strong>distintivo ambiental de la DGT</strong> es un sistema de clasificación de vehículos introducido en España para discriminar positivamente a los más respetuosos con el medio ambiente. Se usa principalmente para delimitar el acceso a las Zonas de Bajas Emisiones (ZBE) en ciudades de más de 50.000 habitantes.',
    },
    { type: 'title', level: 3, text: 'Tipos de etiquetas y sus ventajas' },
    {
      type: 'list',
      items: [
        '<strong>Etiqueta 0 Emisiones:</strong> Para eléctricos puros, híbridos enchufables con más de 40 km de autonomía y pila de combustible. Acceso ilimitado a ZBE y exenciones fiscales.',
        '<strong>Etiqueta ECO:</strong> Híbridos no enchufables, GLP, GNC e híbridos enchufables con menos de 40 km. Amplias franjas de paso y bonificaciones en aparcamiento regulado.',
        '<strong>Etiqueta C:</strong> Gasolina Euro 4 o posterior, diésel Euro 6. Circulación libre pero restricciones de aparcamiento en superficie en ZBE.',
        '<strong>Etiqueta B:</strong> Gasolina Euro 3 y diésel Euro 4 o 5. Mayor riesgo de penalización y restricciones puntuales.',
        '<strong>Sin Etiqueta (Categoría A):</strong> Vehículos más antiguos o más contaminantes. Progresivamente excluidos de los centros urbanos desde 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Zonas de Bajas Emisiones en España' },
    {
      type: 'paragraph',
      html: 'La implantación de las ZBE obedece a la Ley de Cambio Climático, que obliga a los municipios que superan ciertos niveles de población. Casos emblemáticos son <em>Madrid 360</em> y las <em>Superilles de Barcelona</em>, donde circular sin al menos una etiqueta B puede traducirse en sanciones de gran importe por lectura automática de matrículas.',
    },
    {
      type: 'tip',
      title: 'Cómo obtener la pegatina física',
      html: 'Si el simulador confirma que te corresponde un distintivo, puedes adquirirla por unos 5 euros en oficinas de Correos, talleres autorizados o delegaciones de Tráfico. Lleva siempre la documentación de tu vehículo.',
    },
  ],
};
