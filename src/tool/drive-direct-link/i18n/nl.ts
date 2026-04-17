import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Hoe gebruik ik de Google Drive download-converter?',
    answer: 'Kopieer de volledige "Delen"-link van een bestand dat op Google Drive is opgeslagen (het moet openbare machtigingen hebben). Plak deze in het tekstvak van de tool en klik op "Directe link genereren". Er verschijnt een nieuwe URL die de download start zonder de viewer van Google te openen.',
  },
  {
    question: 'Kan ik een directe downloadlink genereren voor een privébestand?',
    answer: 'Als het bestand privé is of de toegang beperkt is, zal Google u vragen om in te loggen met een geautoriseerd account. Voor schone downloads zonder registratie moeten de machtigingen van het bestand zijn ingesteld op "Iedereen met de link kan bekijken".',
  },
  {
    question: 'Is het veilig om mijn Drive-links hier te converteren?',
    answer: 'Ja. De conversie vindt voor 100% plaats in uw browser en is volledig anoniem. De tool slaat uw link niet op en voert geen serveroproepen uit; het analyseert alleen de URL-structuur aan de clientzijde om de downloadversie te genereren.',
  },
  {
    question: 'Wat gebeurt er als mijn Drive-bestand erg groot is?',
    answer: 'Voor bestanden groter dan ongeveer 100 MB staat Google Drive geen onmiddellijke directe download toe. In plaats daarvan wordt een waarschuwingspagina getoond over de bestandsgrootte en het omzeilen van de antivirusscan. Dit is een vast beleid van de Google-server dat geen enkele externe tool kan omzeilen.',
  },
];

const howToData = [
  { name: 'Kopieer de deellink', text: 'Klik in Google Drive met de rechtermuisknop op het bestand en selecteer "Link ophalen". Zorg ervoor dat de machtigingen toegang geven aan iedereen met de link.' },
  { name: 'Plak de link in de generator', text: 'Voer de volledige Drive-URL in het tekstveld van de tool in und klik op de knop "Directe link genereren".' },
  { name: 'Kopieer und gebruik de gegenereerde link', text: 'Kopieer de nieuwe directe downloadlink und gebruik deze in e-mails, websites, nieuwsbrieven of overal waar u het bestand onmiddellijk wilt laten downloaden bij een klik.' },
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
  name: 'Hoe een directe downloadlink voor Google Drive te genereren',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Google Drive Directe Downloadlink Generator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Converteer elke Google Drive-deellink met één klik naar een directe downloadlink, waarbij u de voorbeeldpagina van het bestand omzeilt. Gratis tool.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Plak hier uw Google Drive-link:',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Directe link genereren',
  resultLabel: 'Directe downloadlink:',
  copyTitle: 'Kopieer naar klembord',
  copyDone: 'Gekopieerd',
  testBtn: 'Test download',
  errorMsg: 'De ingevoerde link lijkt geen geldige Google Drive-link te zijn.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'google-drive-directe-download-link',
  title: 'Google Drive Directe Downloadlink Generator',
  description: 'Converteer eenvoudig elke Google Drive-deellink met één klik naar een directe downloadlink, waarbij u de bestandsweergave omzeilt. Gratis tool.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'Bestanden downloaden van Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API: Bestanden downloaden', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Converteer Google Drive-deellinks naar directe downloadlinks' },
    {
      type: 'paragraph',
      html: 'Als u vaak bestanden deelt via Google Drive, weet u hoe vervelend de voorbeeldpagina kan zijn. Wanneer uw gebruikers op uw link klikken, komen ze op een tussenscherm terecht dat hen dwingt de downloadknop te zoeken. Onze <strong>Google Drive directe downloadlink generator</strong> lost dit op door elke deellink om te zetten in een link die de download automatisch start.',
    },
    { type: 'title', level: 3, text: 'Waarom een directe downloadlink gebruiken?' },
    {
      type: 'paragraph',
      html: 'Het belangrijkste voordeel is een veel betere gebruikerservaring. Bij het delen van een PDF, afbeelding of software-installatieprogramma verwachten gebruikers dat het klikken op de link de download onmiddellijk start:',
    },
    {
      type: 'list',
      items: [
        '<strong>Bespaart tijd:</strong> Downloaden met één klik zonder extra stappen.',
        '<strong>Professionele uitstraling:</strong> Ideaal voor downloadknoppen op websites, nieuwsbrieven of e-mails naar klanten.',
        '<strong>Minder afhakers:</strong> Minder technisch onderlegde gebruikers kunnen in de war raken door de Drive-weergave und niet weten hoe ze het bestand moeten downloaden.',
        '<strong>HTML-ready:</strong> Perfect voor <code>href</code>- of <code>src</code>-attributen in uw webpagina\'s.',
      ],
    },
    { type: 'title', level: 3, text: 'Hoe werkt de directe link generator?' },
    {
      type: 'paragraph',
      html: 'Alles vindt voor 100% plaats in uw browser. Google Drive-deellinks bevatten een unieke bestands-ID. De tool extraheert die ID und bouwt een nieuwe URL met behulp van de systeemeigen exportparameter van Google: <code>https://drive.google.com/uc?export=download&amp;id=UW_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Waarschuwing voor grote bestanden',
      html: 'Voor bestanden groter dan ongeveer 100 MB toont Google Drive een waarschuwingspagina voor de antivirusscan voordat de download start. Dit is een vast beleid van de Google-server dat geen enkele externe tool kan omzeilen.',
    },
    { type: 'title', level: 3, text: 'Privacy und veiligheid gegarandeerd' },
    {
      type: 'paragraph',
      html: 'Deze tool respecteert uw privacy volledig. De volledige link-transformatie wordt uitgevoerd via client-side JavaScript op uw eigen apparaat. Er wordt nooit een link, bestands-ID of persoonlijke informatie naar een externe server verzonden.',
    },
  ],
};
