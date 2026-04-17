import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Vad exakt gör denna e-postlisterensare?',
    answer: 'Verktyget analyserar din e-postlista, tar bort dubbletter, rensar onödiga mellanslag, validerar grundläggande format och normaliserar alla adresser till gemener för att säkerställa en ren databas.',
  },
  {
    question: 'Finns det en gräns för antalet e-postadresser?',
    answer: 'Det finns ingen strikt gräns för antal rader. Du kan bearbeta tusentals e-postadresser omedelbart i en enda körning. Den enda begränsningen är din webbläsares minne om listan är extremt stor.',
  },
  {
    question: 'Är det säkert att klistra in mina e-postadresser här?',
    answer: 'Absolut. All bearbetning sker lokalt i din egen webbläsare via JavaScript. Dina data skickas aldrig till våra servrar eller lagras i någon extern databas.',
  },
  {
    question: 'Hur förbättrar detta min kampanjs leveransbarhet?',
    answer: 'Genom att ta bort icke-existerande eller felaktigt formaterade adresser minskar du din avvisningsfrekvens (bounce rate), vilket förbättrar ditt domänrykte hos leverantörer som Gmail, Outlook och Yahoo.',
  },
];

const howToData = [
  { name: 'Klistra in dina e-postadresser', text: 'Kopiera din e-postlista och klistra in den i textrutan. De kan vara separerade med rader, kommatecken eller mellanslag.' },
  { name: 'Rensa listan', text: "Klicka på knappen 'Rensa lista' för att starta valideringen och borttagningen av dubbletter." },
  { name: 'Granska resultaten', text: 'Kontrollera statistiken som visar ursprungliga kontra slutgiltiga e-postadresser och granska den rensade listan i den nedre panelen.' },
  { name: 'Kopiera eller ladda ner', text: 'Kopiera resultatet direkt till urklipp eller ladda ner det som en färdig .txt-fil.' },
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
  name: 'Hur man rensar en e-postlista',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'E-postlisterensare',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ta bort dubbletter, fixa mellanslag och validera format i din e-postlista. Gratis verktyg utan radbegränsning.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'E-postlista',
  inputPlaceholder: 'Klistra in din e-postlista här (separerad med rader, kommatecken eller mellanslag)...',
  cleanBtn: 'Rensa lista',
  clearBtn: 'Rensa allt',
  statsOriginal: 'Ursprungliga',
  statsRemoved: 'Borttagna',
  statsFinal: 'Rena',
  resultLabel: 'Rent resultat',
  copyBtn: 'Kopiera lista',
  copyDone: 'Kopierat!',
  downloadBtn: 'Ladda ner .txt',
  registered: 'registrerade',
  downloadFilename: 'rena-epostadresser',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'email-listerensare',
  title: 'E postlisterensare',
  description: 'Rensa e-postlistor gratis. Ta bort dubbletter, fixa mellanslag och validera format på några sekunder. Spara kostnader och förbättra din leveransbarhet.',
  ui,
  faqTitle: 'Vanliga frågor',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'RFC 5322: Internet Message Format', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google: Riktlinjer för e-postavsändare', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia: E-postspam', url: 'https://sv.wikipedia.org/wiki/Skräppost' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Varför är det nödvändigt att använda en e-postlisterensare?' },
    {
      type: 'paragraph',
      html: 'Inom digital marknadsföring är kvaliteten på din databas mycket viktigare än dess storlek. Att ha en lista med 50 000 e-postadresser är värdelöst om hälften av dem är adresser som inte existerar, innehåller stavfel eller är dubbletter. Det är här en <strong>e-postlisterensare</strong> blir oumbärlig.',
    },
    { type: 'title', level: 3, text: 'Riskerna med en smutsig e-postlista' },
    {
      type: 'paragraph',
      html: 'Att behålla en orensad databas kan få allvarliga konsekvenser. Att skicka e-post till adresser som inte existerar genererar en "hard bounce". Om denna procentsats överstiger 2–3 % kommer spamfilter att börja granska din domän noggrant och du kan hamna på en internationell svartlista.',
    },
    {
      type: 'tip',
      title: 'Experttips',
      html: 'Köp aldrig e-postlistor. Det är det snabbaste sättet att förstöra ditt domänrykte. Bygg din egen lista organiskt och rensa den var tredje till var sjätte månad.',
    },
    { type: 'title', level: 3, text: 'Hur vårt verktyg optimerar din databas' },
    {
      type: 'paragraph',
      html: 'Vårt kostnadsfria verktyg utför en noggrann och snabb rensning av dina databaser utan radbegränsningar. Det kör flera kritiska valideringsuppgifter omedelbart:',
    },
    {
      type: 'list',
      items: [
        '<strong>Borttagning av dubbletter:</strong> Samma användare kommer inte att få samma e-postmeddelande två gånger.',
        '<strong>Korrigering av mellanslag:</strong> Vi tar bort oavsiktliga mellanslag i början eller slutet som skulle ogiltigförklara sändningen.',
        '<strong>Formatvalidering:</strong> Vi filtrerar bort poster som inte har en giltig e-poststruktur.',
        '<strong>Normalisering:</strong> Allt konverteras till gemener för att undvika redundanta poster.',
      ],
    },
    { type: 'title', level: 3, text: 'När är det rätt tid att rensa din lista?' },
    {
      type: 'list',
      items: [
        'Innan du importerar kontakter till ett nytt CRM eller en sändningsplattform (Mailchimp, SendGrid, etc.).',
        'Om du märker att din öppningsfrekvens har sjunkit under sitt vanliga genomsnitt.',
        'Efter ett evenemang eller en mässa där du samlat in data manuellt.',
        'Som förebyggande underhåll varje kvartal för att bibehålla domänhälsan.',
      ],
    },
    { type: 'title', level: 3, text: 'Effekt på avkastning på investeringen (ROI)' },
    {
      type: 'paragraph',
      html: 'E-postmarknadsföring förblir en av kanalerna med högst ROI, men bara om meddelandena når inkorgen. Genom att använda en <strong>e-postrensare</strong> optimerar du din försäljningstratt från källan och slutar betala plattformar för kontakter som aldrig kommer att se dina meddelanden.',
    },
    {
      type: 'tip',
      title: 'Implementera dubbel opt in',
      html: 'Det bästa sättet att undvika falska e-postadresser är att kräva att användare bekräftar sin prenumeration genom att klicka på en länk som skickas till deras inkorg. Detta garanterar att e-postadressen existerar och att användaren har tillgång till den.',
    },
  ],
};
