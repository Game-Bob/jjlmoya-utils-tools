import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'O que acontece se eu conduzir um veículo sem selo numa Zona de Baixas Emissões (ZBE) em Espanha?',
    answer: 'Se entrar numa ZBE numa das principais cidades espanholas com um veículo que não tenha o distintivo ambiental e sem uma isenção especial, receberá uma multa por infração grave, que normalmente ascende a 200 euros.',
  },
  {
    question: 'Tenho de exibir o selo físico da DGT no meu para-brisas?',
    answer: 'A DGT recomenda a sua exibição, mas as multas por não o fazer são definidas por cada autoridade local. Em Madrid é obrigatório, enquanto noutras cidades a fiscalização depende inteiramente de câmaras de reconhecimento automático de matrículas.',
  },
  {
    question: 'O meu diesel foi matriculado antes de 2006, mas a ficha técnica diz Euro 4. Posso obter um selo?',
    answer: 'Sim. Se os dados do veículo detidos pelas autoridades de trânsito apenas refletirem a data de matrícula, pode solicitar um certificado ao fabricante através de um concessionário oficial e apresentá-lo na Direção Geral de Tráfego para corrigir a sua classificação.',
  },
  {
    question: 'O que significa o selo C (Verde) para carros em Espanha em 2025?',
    answer: 'Na maioria das ZBEs ainda pode circular livremente, mas o selo C restringe o estacionamento na rua. Será obrigado a utilizar parques de estacionamento subterrâneos ou autorizados perto dos perímetros das ZBEs.',
  },
];

const howToData = [
  { name: 'Selecione o tipo de veículo', text: 'Escolha se o seu veículo é um ligeiro ou comercial, uma mota ou um veículo pesado. Cada categoria tem uma lógica de classificação diferente sob os regulamentos de trânsito espanhóis.' },
  { name: 'Escolha o tipo de combustível ou energia', text: 'Elétrico, híbrido plug-in, híbrido convencional, gás, gasolina ou gasóleo levam a diferentes resultados de selo. O limite de autonomia para híbridos plug-in é de 40 km.' },
  { name: 'Introduza o ano de matrícula ou norma Euro', text: 'Para veículos de combustão, a norma Euro é o fator decisivo. A data de matrícula na ficha técnica dá uma aproximação fiável da norma.' },
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
  name: 'Como simular o distintivo ambiental espanhol da DGT para o seu veículo',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulador de Distintivo Ambiental Espanhol da DGT',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Descubra qual o distintivo ambiental espanhol da DGT que se aplica ao seu veículo com base no tipo, combustível e ano de matrícula. Ferramenta gratuita para se preparar para as Zonas de Baixas Emissões em Espanha.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Tipo de Veículo',
  vehicleCar: 'Carro / Comercial',
  vehicleMoto: 'Moto',
  vehicleHeavy: 'Camião / Autocarro',
  errVehicle: 'Por favor, selecione um tipo de veículo',

  step2Label: '2. Combustível ou Energia',
  fuelElectric: '100% Elétrico / Célula de Combustível',
  fuelPhevHigh: 'Híbrido Plug-in (>40 km)',
  fuelPhevLow: 'Híbrido Plug-in (<40 km)',
  fuelHybridGas: 'Híbrido (HEV) ou Gás',
  fuelGasoline: 'Gasolina',
  fuelDiesel: 'Gasóleo',
  errFuel: 'Por favor, selecione um tipo de combustível ou energia',

  step3Label: '3. Norma Euro ou Ano de Matrícula',
  yearPre2000: 'Antes de 2000',
  year20002005: '2000 a 2005',
  year20062013: '2006 a 2013',
  yearPost2014: '2014 ou posterior',
  errYear: 'Por favor, selecione o período de matrícula',
  helpText: 'Em caso de dúvida, a norma Euro indicada na sua ficha técnica tem precedência sobre a data de matrícula.',

  submitBtn: 'Verificar o meu Selo',

  resultTitle: 'Selo Atribuído',

  badge0Label: 'Selo Zero Emissões',
  badge0Letter: '0',
  badge0Sub: 'EMISSÕES',
  badge0Desc: 'Veículos de máxima eficiência. Gozam de acesso ilimitado às Zonas de Baixas Emissões (ZBE) em Espanha e amplas isenções fiscais.',

  badgeEcoLabel: 'Selo ECO',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Veículos de baixas emissões, como híbridos e carros movidos a gás. Permite o acesso à maioria das ZBEs e oferece descontos em zonas de estacionamento regulado.',

  badgeCLabel: 'Selo C',
  badgeCLetter: 'C',
  badgeCDesc: 'Veículos de combustão recentes com uma norma Euro elevada. Livre circulação, mas sujeitos a restrições de estacionamento em certas áreas das ZBEs.',

  badgeBLabel: 'Selo B',
  badgeBLetter: 'B',
  badgeBDesc: 'Veículos de combustão mais antigos. Sujeitos a maiores restrições de acesso e estacionamento nas cidades espanholas.',

  badgeALabel: 'Sem Selo',
  badgeALetter: 'NÃO',
  badgeASub: 'TEM SELO',
  badgeADesc: 'Veículos altamente poluentes sem direito a selo. Estão a ser progressivamente excluídos dos centros urbanos e Zonas de Baixas Emissões em toda a Espanha.',

  warningText: 'Verifique sempre no site oficial da DGT utilizando a sua matrícula para confirmar o resultado, especialmente em caso de discrepâncias administrativas.',
  resetBtn: 'Nova Simulação',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'simulador-distintivo-ambiental-espanha',
  title: 'Simulador de Distintivo Ambiental Espanha',
  description: 'Descubra gratuitamente qual o distintivo ambiental espanhol da DGT que se aplica ao seu carro, mota ou carrinha para as Zonas de Baixas Emissões (ZBE) em Espanha.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Regulamentos da DGT sobre Alterações Climáticas e Trânsito (Espanhol)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Lei Espanhola das Alterações Climáticas e Zonas de Baixas Emissões (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'O que é o distintivo ambiental espanhol da DGT?' },
    {
      type: 'paragraph',
      html: 'O <strong>distintivo ambiental espanhol da DGT</strong> é um sistema de classificação de veículos introduzido em Espanha para dar um tratamento preferencial aos veículos menos poluentes. É utilizado principalmente para controlar o acesso às Zonas de Baixas Emissões (ZBE) em cidades espanholas com mais de 50.000 habitantes.',
    },
    { type: 'title', level: 3, text: 'Tipos de selos e os seus benefícios em Espanha' },
    {
      type: 'list',
      items: [
        '<strong>Selo Zero Emissões:</strong> Para veículos puramente elétricos, híbridos plug-in com mais de 40 km de autonomia elétrica e pilhas de combustível a hidrogénio. Acesso ilimitado às ZBEs e isenções fiscais.',
        '<strong>Selo ECO:</strong> Híbridos convencionais, GPL, GNC e híbridos plug-in com menos de 40 km de autonomia. Amplo acesso a zonas restritas e descontos no estacionamento.',
        '<strong>Selo C:</strong> Gasolina Euro 4 ou posterior, Gasóleo Euro 6. Livre circulação, mas aplicam-se restrições de estacionamento na rua perto das ZBEs.',
        '<strong>Selo B:</strong> Gasolina Euro 3, Gasóleo Euro 4 ou 5. Restrições crescentes e proibições ocasionais de entrada.',
        '<strong>Sem Selo (Categoria A):</strong> Veículos mais antigos ou poluentes progressivamente excluídos dos centros das cidades espanholas desde 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Zonas de Baixas Emissões nas cidades espanholas' },
    {
      type: 'paragraph',
      html: 'A implementação das ZBE segue a Lei Espanhola das Alterações Climáticas, que exige que os municípios acima de certos limites populacionais as criem. Exemplos notáveis são o <em>Madrid 360</em> e as <em>Superilles</em> de Barcelona, onde entrar sem pelo menos um selo B pode resultar em multas automáticas emitidas através de câmaras de reconhecimento de matrículas.',
    },
    {
      type: 'tip',
      title: 'Como obter o selo físico em Espanha',
      html: 'Se o simulador confirmar que tem direito a um selo, pode comprar o autocolante físico por cerca de 5 euros em qualquer agência dos Correos, oficinas autorizadas ou direções de trânsito. Leve os documentos de matrícula do seu veículo.',
    },
  ],
};
