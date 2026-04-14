import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { MorseBeaconUI } from '../ui';

const faqData = [
  {
    question: 'Quel est le signal de détresse SOS en code Morse ?',
    answer: "Le signal est '... --- ...' (trois points, trois traits, trois points). Il est transmis en continu sans espaces entre les lettres pour indiquer une urgence immédiate.",
  },
  {
    question: 'Pourquoi la torche ne fonctionne-t-elle pas dans mon navigateur ?',
    answer: "L'activation de la torche nécessite que le navigateur dispose des autorisations de la caméra. Certains navigateurs mobiles ou les anciennes versions de bureau ne prennent pas en charge cette API pour des raisons de confidentialité.",
  },
  {
    question: "Le signal SOS de l'écran est-il visible ?",
    answer: "Oui, dans des conditions d'obscurité totale, la luminosité maximale d'un écran blanc clignotant en Morse peut être vue à plusieurs centaines de mètres, ce qui en fait une alternative utile si la torche est défaillante.",
  },
  {
    question: "Qu'est-ce que le code Morse international ?",
    answer: "C'est un système de communication qui utilise des séquences de signaux courts (points) et longs (traits) pour représenter des lettres et des chiffres, normalisé par l'UIT pour les communications radio et les signaux optiques.",
  },
];

const howToData = [
  {
    name: 'Écrire le message',
    text: "Saisissez le texte que vous souhaitez transmettre ou utilisez le bouton préconfiguré 'SOS' pour les urgences.",
  },
  {
    name: 'Configurer la vitesse',
    text: 'Ajustez les MPM (mots par minute) pour rendre le signal plus rapide ou plus lent selon la visibilité.',
  },
  {
    name: 'Choisir la source de lumière',
    text: "Activez le clignotement en plein écran ou autorisez l'accès à la torche de l'appareil photo pour un signal plus puissant.",
  },
  {
    name: 'Démarrer la transmission',
    text: 'Appuyez sur Transmettre pour que le système convertisse le texte en impulsions visuelles automatiques selon la norme Morse.',
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
  name: 'Comment utiliser la balise Morse pour transmettre des messages',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Balise Morse : Émetteur tactique SOS',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Transformez votre appareil en station d\'émission Morse. Utilisez le flash et l\'écran comme signaux lumineux d\'urgence et de communication tactique.',
};

const ui: MorseBeaconUI = {
  labelMessage: 'Message à transmettre',
  placeholder: 'Tapez votre message ici (SOS, BONJOUR, AIDE)...',
  btnTransmit: 'Transmettre',
  btnSosLoop: 'Boucle SOS',
  btnStop: 'Arrêter',
  labelTorch: 'Flash/Lampe',
  statusStandby: 'EN VEILLE',
  statusTransmitting: 'TRANSMISSION',
  statusStopping: 'ARRÊT...',
  statusWaiting: 'EN ATTENTE',
  statusReady: 'MATÉRIEL PRÊT',
  statusNoTorch: 'SANS LAMPE',
  statusNoPermission: 'SANS PERMISSION',
  statusNotSupported: 'NON SUPPORTÉ',
  statusReqHttps: 'REQ. HTTPS',
  statusSending: 'ENVOI :',
};

export const content: ToolLocaleContent<MorseBeaconUI> = {
  slug: 'balise-morse',
  title: 'Balise Morse : Émetteur tactique SOS',
  description: "Transformez votre appareil en station d'émission Morse. Utilisez le flash et l'écran comme signaux lumineux d'urgence et de communication tactique.",
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'ITU-R M.1677-1 — Code Morse international', url: 'https://www.itu.int/dms_pubrec/itu-r/rec/m/R-REC-M.1677-1-200910-I!!PDF-E.pdf' },
    { name: 'W3C MediaCapture Image — Torch', url: 'https://w3c.github.io/mediacapture-image/#torch' },
    { name: 'Code Morse — Wikipédia', url: 'https://fr.wikipedia.org/wiki/Code_Morse_international' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Le langage de la lumière',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Cet outil transforme votre appareil en balise de signalisation optique capable de transmettre des messages visibles à des kilomètres de distance. En utilisant la norme internationale du code Morse, il permet une communication silencieuse ou d'urgence par impulsions lumineuses (lampe de poche et écran).",
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:history',
          title: 'Une norme universelle',
          description: "Développé en 1830 par Samuel Morse, ce système binaire de points et de traits a révolutionné les télécommunications. Sa simplicité le rend extrêmement robuste : il peut être transmis par le son, la radio, l'électricité ou la lumière, et reste lisible même avec de fortes interférences.",
          points: [],
        },
        {
          icon: 'mdi:flash-alert',
          title: "Mode d'urgence SOS",
          description: "Le bouton 'Boucle SOS' transmet en continu la séquence ··· --- ···. Ce signal est universellement reconnu comme appel de détresse et, grâce au contraste élevé du flash LED, est visible à grande distance même en plein jour dans certaines conditions.",
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Norme ITU-R M.1677-1',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Cet outil respecte strictement les <strong>délais réglementaires</strong> du code Morse international tels que définis par l'Union internationale des télécommunications.",
    },
    {
      type: 'list',
      items: [
        '1 point = 1 unité de temps',
        '1 trait = 3 unités de temps',
        'Espace entre éléments = 1 unité',
        'Espace entre lettres = 3 unités',
        'Espace entre mots = 7 unités',
      ],
    },
    {
      type: 'tip',
      title: 'Vitesse standard',
      html: 'La vitesse par défaut est de <strong>15 MPM</strong> (mots par minute), ce qui correspond à un rythme de transmission professionnel. À 15 MPM, 1 unité = 80 ms.',
    },
  ],
};
