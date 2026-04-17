import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Hur använder jag Google Drive-nedladdningskonverteraren?',
    answer: 'Kopiera den fullständiga "Dela"-länken från valfri fil som lagras på Google Drive (den måste ha offentliga behörigheter). Klistra in den i verktygets textruta och klicka på "Generera direktlänk". En ny URL visas som startar nedladdningen utan att öppna Googles visningsprogram.',
  },
  {
    question: 'Kan jag generera en direkt nedladdningslänk för en privat fil?',
    answer: 'Om filen är privat eller åtkomstbegränsad kommer Google att be dig logga in med ett auktoriserat konto. För rena nedladdningar utan registrering måste filbehörigheterna vara inställda på "Alla med länken kan visa".',
  },
  {
    question: 'Är det säkert att konvertera mina Drive-länkar här?',
    answer: 'Ja. Konverteringen sker till 100 % i din webbläsare och är helt anonym. Verktyget lagrar inte din länk och gör inga serveranrop; det analyserar endast URL-strukturen på klientsidan för att generera nedladdningsversionen.',
  },
  {
    question: 'Vad händer om min Drive-fil är väldigt stor?',
    answer: 'För filer som är större än cirka 100 MB tillåter Google Drive inte en omedelbar direkt nedladdning. Istället visas en varningssida om filstorlek och kringgående av antivirusscanning. Detta är en fast Google-serverpolicy som inget externt verktyg kan kringgå.',
  },
];

const howToData = [
  { name: 'Kopiera delningslänken', text: 'I Google Drive, högerklicka på filen och välj "Hämta länk". Se till att behörigheterna tillåter åtkomst för alla med länken.' },
  { name: 'Klistra in länken i generatorn', text: 'Ange den fullständiga Drive-URL:en i verktygets textfält och klicka på knappen "Generera direktlänk".' },
  { name: 'Kopiera och använd den genererade länken', text: 'Kopiera den nya direkta nedladdningslänken och använd den i e-post, webbplatser, nyhetsbrev eller var som helst där du behöver att filen ska laddas ner omedelbart vid klick.' },
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
  name: 'Hur man genererar en direkt nedladdningslänk för Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google Drive direktlänkgenerator för nedladdning',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Konvertera vilken Google Drive-delningslänk som helst till en direkt nedladdningslänk med ett klick, och kringgå filförhandsgranskningssidan. Gratis verktyg.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Klistra in din Google Drive-länk här:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Generera direktlänk',
  resultLabel: 'Direkt nedladdningslänk:',
  copyTitle: 'Kopiera till urklipp',
  copyDone: 'Kopierat',
  testBtn: 'Testa nedladdning',
  errorMsg: 'Länken du angav verkar inte vara en giltig Google Drive-länk.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'direktnedladdningslank-google-drive',
  title: 'Google Drive direktlänkgenerator för nedladdning',
  description: 'Konvertera enkelt vilken Google Drive-delningslänk som helst till en direkt nedladdningslänk med ett klick, och kringgå filförhandsgranskningen. Gratis verktyg.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Ladda ner filer från Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Ladda ner filer', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Konvertera Google Drive-delningslänkar till direkta nedladdningslänkar' },
    {
      type: 'paragraph',
      html: 'Om du delar filer ofta via Google Drive vet du hur irriterande förhandsgranskningssidan kan vara. När dina användare klickar på din länk landar de på en mellansida som tvingar dem att hitta nedladdningsknappen. Vår <strong>Google Drive direktlänkgenerator för nedladdning</strong> löser detta genom att konvertera vilken delningslänk som helst till en som startar nedladdningen automatiskt.',
    },
    { type: 'title', level: 3, text: 'Varför använda en direkt nedladdningslänk?' },
    {
      type: 'paragraph',
      html: 'Den främsta fördelen är en mycket bättre användarupplevelse. Vid delning av en PDF, bild eller programvaruinstallatör förväntar sig användarna att ett klick på länken startar nedladdningen omedelbart:',
    },
    {
      type: 'list',
      items: [
        '<strong>Sparar tid:</strong> Nedladdning med ett klick utan extra steg.',
        '<strong>Professionellt utseende:</strong> Idealiskt för nedladdningsknappar på webbplatser, nyhetsbrev eller kund-e-post.',
        '<strong>Färre avhopp:</strong> Mindre tekniskt kunniga användare kan bli förvirrade av Drive-förhandsgranskningen och inte veta hur de ska ladda ner.',
        '<strong>HTML-redo:</strong> Perfekt för <code>href</code>- eller <code>src</code>-attribut på dina webbsidor.',
      ],
    },
    { type: 'title', level: 3, text: 'Hur fungerar direktlänkgeneratorn?' },
    {
      type: 'paragraph',
      html: 'Allt sker till 100 % i din webbläsare. Google Drive-delningslänkar innehåller ett unikt fil-ID. Verktyget extraherar det ID:t och bygger en ny URL med hjälp av Googles inbyggda exportparameter: <code>https://drive.google.com/uc?export=download&amp;id=DITT_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Varning för stora filer',
      html: 'För filer över cirka 100 MB visar Google Drive en varningssida för antivirusscanning innan nedladdningen startar. Detta är en fast Google-serverpolicy som inget externt verktyg kan kringgå.',
    },
    { type: 'title', level: 3, text: 'Integritet och säkerhet garanteras' },
    {
      type: 'paragraph',
      html: 'Detta verktyg respekterar din integritet fullt ut. Hela länktransformationen utförs via JavaScript på klientsidan på din egen enhet. Ingen länk, fil-ID eller personlig information skickas någonsin till någon extern server.',
    },
  ],
};
