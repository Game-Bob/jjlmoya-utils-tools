import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Vad händer om jag kör ett fordon utan miljödekal in i en lågutsläppszon (ZBE) i Spanien?',
    answer: 'Om du kör in i en ZBE i en större spansk stad med ett fordon som saknar miljödekal och inte har något särskilt undantag, får du böter för en allvarlig överträdelse, vilket vanligtvis uppgår till 200 euro.',
  },
  {
    question: 'Måste jag visa den fysiska DGT-dekalen på min vindruta?',
    answer: 'DGT rekommenderar att den visas, men böter för att inte göra det fastställs av varje lokal myndighet. I Madrid är det obligatoriskt, medan det i andra städer helt bygger på kameror för automatisk registreringsskyltläsning.',
  },
  {
    question: 'Min dieselbil registrerades före 2006 men det tekniska bladet säger Euro 4. Kan jag få en dekal?',
    answer: 'Ja. Om fordonsuppgifterna hos trafikmyndigheterna endast återspeglar registreringsdatumet, kan du begära ett certifikat från tillverkaren via en officiell återförsäljare och visa upp det för trafikkontoret för att korrigera din klassificering.',
  },
  {
    question: 'Vad innebär C-dekalen (Grön) för bilar i Spanien år 2025?',
    answer: 'I de flesta ZBE:er kan du fortfarande köra fritt, men C-dekalen begränsar parkering på gatan. Du kommer att behöva använda underjordiska eller auktoriserade parkeringsplatser nära ZBE-gränserna.',
  },
];

const howToData = [
  { name: 'Välj fordonstyp', text: 'Välj om ditt fordon är en bil eller skåpbil, en motorcykel eller ett tungt fordon. Varje kategori har en egen klassificeringslogik enligt de spanska trafikreglerna.' },
  { name: 'Välj bränsle- eller energityp', text: 'El, laddhybrid, konventionell hybrid, gas, bensin eller diesel leder alla till olika dekalresultat. Räckviddsgränsen för laddhybrider är 40 km.' },
  { name: 'Ange registreringsår eller Euro-standard', text: 'För förbränningsfordon är Euro-standarden den avgörande faktorn. Registreringsdatumet på det tekniska bladet ger en tillförlitlig uppskattning av standarden.' },
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
  name: 'Hur man simulerar den spanska DGT-miljödekalen för ditt fordon',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Spansk DGT-miljödekalsimulator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ta reda på vilken spansk DGT-miljödekal som gäller för ditt fordon baserat på dess typ, bränsle och registreringsår. Gratis verktyg för att förbereda sig för lågutsläppszoner i Spanien.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Fordonstyp',
  vehicleCar: 'Bil / Skåpbil',
  vehicleMoto: 'Motorcykel',
  vehicleHeavy: 'Lastbil / Buss',
  errVehicle: 'Välj en fordonstyp',

  step2Label: '2. Bränsle eller energi',
  fuelElectric: '100% El / Bränslecell',
  fuelPhevHigh: 'Laddhybrid (>40 km)',
  fuelPhevLow: 'Laddhybrid (<40 km)',
  fuelHybridGas: 'Hybrid (HEV) eller Gas',
  fuelGasoline: 'Bensin',
  fuelDiesel: 'Diesel',
  errFuel: 'Välj en bränsle- eller energityp',

  step3Label: '3. Euro-standard eller registreringsår',
  yearPre2000: 'Före 2000',
  year20002005: '2000 till 2005',
  year20062013: '2006 till 2013',
  yearPost2014: '2014 eller senare',
  errYear: 'Välj registreringsperiod',
  helpText: 'Vid tveksamhet har Euro-standarden på ditt tekniska blad företräde framför registreringsdatumet.',

  submitBtn: 'Kontrollera min dekal',

  resultTitle: 'Tilldelad dekal',

  badge0Label: 'Nollutsläppsdekal',
  badge0Letter: '0',
  badge0Sub: 'UTSLÄPP',
  badge0Desc: 'Fordon med maximal effektivitet. De har obegränsad tillgång till lågutsläppszoner (ZBE) i Spanien och omfattande skattebefrielser.',

  badgeEcoLabel: 'ECO-dekal',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Lågutsläppsfordon som hybrider och gasdrivna bilar. Tillåter tillgång till de flesta ZBE:er och ger rabatter i reglerade parkeringszoner.',

  badgeCLabel: 'C-dekal',
  badgeCLetter: 'C',
  badgeCDesc: 'Nyare förbränningsfordon med hög Euro-standard. Fri cirkulation men föremål för parkeringsrestriktioner på gatan i vissa ZBE-områden.',

  badgeBLabel: 'B-dekal',
  badgeBLetter: 'B',
  badgeBDesc: 'Äldre förbränningsfordon. Omfattas av större tillträdes- och parkeringsrestriktioner i spanska städer.',

  badgeALabel: 'Ingen dekal',
  badgeALetter: 'INGEN',
  badgeASub: 'DEKAL',
  badgeADesc: 'Kraftigt förorenande fordon utan rätt till dekal. De utesluts successivt från stadskärnor och lågutsläppszoner i hela Spanien.',

  warningText: 'Verifiera alltid på DGT:s officiella webbplats med hjälp av din registreringsskylt för att bekräfta resultatet, särskilt vid administrativa avvikelser.',
  resetBtn: 'Ny simulering',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'miljodekal-simulator-spanien',
  title: 'Miljödekalsimulator Spanien',
  description: 'Ta reda på gratis vilken spansk DGT-miljödekal som gäller för din bil, motorcykel eller skåpbil för lågutsläppszoner (ZBE) i Spanien.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'DGT-föreskrifter om klimatförändringar och trafik (Spanska)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Spansk klimatlag och lågutsläppszoner (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Vad är den spanska DGT-miljödekalen?' },
    {
      type: 'paragraph',
      html: 'Den <strong>spanska DGT-miljödekalen</strong> (distintivo ambiental) är ett klassificeringssystem för fordon som införts i Spanien för att ge förmånlig behandling till de minst förorenande fordonen. Den används främst för att kontrollera tillträde till lågutsläppszoner (ZBE) i spanska städer med mer än 50 000 invånare.',
    },
    { type: 'title', level: 3, text: 'Dekaltyper och deras fördelar i Spanien' },
    {
      type: 'list',
      items: [
        '<strong>Nollutsläppsdekal:</strong> För rena elfordon, laddhybrider med över 40 km räckvidd och vätgasbränsleceller. Obegränsad tillgång till ZBE:er och skattebefrielser.',
        '<strong>ECO-dekal:</strong> Konventionella hybrider, gasol (LPG), naturgas (CNG) och laddhybrider med under 40 km räckvidd. Omfattande tillgång till zoner med tillträdesförbud och parkeringsrabatter.',
        '<strong>C-dekal:</strong> Bensinbil Euro 4 eller senare, dieselbil Euro 6. Fri cirkulation men parkeringsrestriktioner på gatan gäller nära ZBE:er.',
        '<strong>B-dekal:</strong> Bensinbil Euro 3, dieselbil Euro 4 eller 5. Ökande restriktioner och tillfälliga tillträdesförbud.',
        '<strong>Ingen dekal (Kategori A):</strong> Äldre eller mer förorenande fordon som successivt utesluts från spanska stadskärnor sedan 2024.',
      ],
    },
    { type: 'title', level: 3, text: 'Lågutsläppszoner i spanska städer' },
    {
      type: 'paragraph',
      html: 'Införandet av ZBE följer den spanska klimatlagen, som kräver att kommuner över vissa befolkningströsklar skapar dem. Noterbara exempel är <em>Madrid 360</em> och Barcelonas <em>Superilles</em>, där tillträde utan minst en B-dekal kan resultera i automatiska böter som utfärdas via kameror för registreringsskyltläsning.',
    },
    {
      type: 'tip',
      title: 'Hur man får den fysiska dekalen i Spanien',
      html: 'Om simulatorn bekräftar att du har rätt till en dekal kan du köpa den fysiska dekalen för cirka 5 euro på valfritt Correos-kontor (postkontor), auktoriserade verkstäder eller trafikkontor. Ta med dig fordonets registreringsbevis.',
    },
  ],
};
