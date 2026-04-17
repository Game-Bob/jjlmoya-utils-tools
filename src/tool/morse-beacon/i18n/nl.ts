import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Wat is het SOS noodsignaal in Morsecode?',
    answer: "Het signaal is '... --- ...' (drie punten, drie strepen, drie punten). Het wordt continu uitgezonden zonder spaties tussen de letters om een onmiddellijke noodsituatie aan te geven.",
  },
  {
    question: 'Waarom werkt de zaklamp niet in mijn browser?',
    answer: 'Voor het activeren van de zaklamp heeft de browser cameratoestemming nodig. Sommige mobiele browsers of oudere desktopversies ondersteunen deze API niet om privacyredenen.',
  },
  {
    question: 'Is het SOS-schermsignaal zichtbaar?',
    answer: 'Ja, in omstandigheden van totale duisternis kan de maximale helderheid van een wit scherm dat in Morse knippert van honderden meters afstand worden gezien, waardoor het een nuttig alternatief is als de zaklamp uitvalt.',
  },
  {
    question: 'Wat is de internationale Morsecode?',
    answer: 'Het is een communicatiesysteem dat reeksen korte (punten) en lange (strepen) signalen gebruikt om letters en cijfers weer te geven, gestandaardiseerd door de ITU voor radiocommunicatie en optische signalen.',
  },
];

const howToData = [
  {
    name: 'Schrijf het bericht',
    text: "Voer de tekst in die u wilt verzenden of gebruik de vooraf geconfigureerde 'SOS'-knop voor noodsituaties.",
  },
  {
    name: 'Snelheid configureren',
    text: 'Pas de WPM (woorden per minuut) aan om het signaal sneller of langzamer te maken, afhankelijk van de zichtbaarheid.',
  },
  {
    name: 'Kies lichtbron',
    text: 'Activeer knipperen op volledig scherm of sta toegang tot de camerazaklamp toe voor een sterker signaal.',
  },
  {
    name: 'Start verzending',
    text: 'Druk op Verzenden om het systeem de tekst te laten omzetten in automatische visuele pulsen volgens de Morse-standaard.',
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
  name: 'Hoe het Morse-baken te gebruiken om berichten te verzenden',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Morse Baken: Tactische SOS-zender',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Verander uw apparaat in een Morse-zendstation. Gebruik flitser und scherm als noodlichtsignalen en tactische communicatie.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Te verzenden bericht',
  placeholder: 'Typ hier uw bericht (SOS, HALLO, HELP)...',
  btnTransmit: 'Verzenden',
  btnSosLoop: 'SOS Loop',
  btnStop: 'Stop',
  labelTorch: 'Flitser/Zaklamp',
  statusStandby: 'STANDBY',
  statusTransmitting: 'ZENDEN...',
  statusStopping: 'STOPPEN...',
  statusWaiting: 'WACHTEN',
  statusReady: 'HARDWARE GEREED',
  statusNoTorch: 'GEEN ZAKLAMP',
  statusNoPermission: 'GEEN TOESTEMMING',
  statusNotSupported: 'NIET ONDERSTEUND',
  statusReqHttps: 'HTTPS VEREIST',
  statusSending: 'VERZENDEN:',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'morsebaken',
  title: 'Morse Baken: Tactische SOS zender',
  description: 'Verander uw apparaat in een Morse-zendstation. Gebruik flitser en scherm als noodlichtsignalen en tactische communicatie.',
  ui,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenties',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Internationale Morsecode', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Morsecode — Wikipedia', url: 'https://nl.wikipedia.org/wiki/Morse' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De taal van het licht',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool verandert uw apparaat in een optisch baken dat berichten kan verzenden die van kilometers afstand zichtbaar zijn. Met behulp van de internationale Morsecode-standaard maakt het stille communicatie of noodcommunicatie mogelijk via lichtpulsen (zaklamp en scherm).',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Een universele standaard',
          description: 'Dit binaire systeem van punten en strepen, in 1830 ontwikkeld door Samuel Morse, betekende een revolutie in de telecommunicatie. De eenvoud maakt het extreem robuust: het kan worden verzonden via geluid, radio, elektriciteit of licht, en blijft leesbaar, zelfs bij ernstige interferentie.',
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: 'SOS Noodmodus',
          description: "De 'SOS Loop'-knop verzendt continu de reeks ··· --- ···. Dit signaal wordt universeel erkend als een noodoproep en is, dankzij het hoge contrast van de LED-zaklamp, onder bepaalde omstandigheden zelfs bij daglicht van grote afstand zichtbaar.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'ITU-R M.1677-1 Standaard',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool respecteert strikt de <strong>voorgeschreven timings</strong> van de internationale Morsecode zoals gedefinieerd door de International Telecommunication Union.',
    },
    {
      type: 'list',
      items: [
        '1 punt = 1 tijdseenheid',
        '1 streep = 3 tijdseenheden',
        'Ruimte tussen elementen = 1 eenheid',
        'Ruimte tussen letters = 3 eenheden',
        'Ruimte tussen woorden = 7 eenheden',
      ],
    },
    {
      type: 'tip',
      title: 'Standaardsnelheid',
      html: 'De standaard snelheid is <strong>15 WPM</strong> (woorden per minuut), wat overeenkomt met een professioneel verzendtempo. Bij 15 WPM is 1 eenheid = 80 ms.',
    },
  ],
};
