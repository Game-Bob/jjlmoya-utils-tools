import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EmailListCleanerUI } from '../ui';

const faqData = [
  {
    question: 'Que fait exactement ce nettoyeur de liste d\'emails ?',
    answer: 'L\'outil analyse votre liste d\'e-mails, supprime les doublons, enlève les espaces inutiles, valide le format de base et normalise toutes les adresses en minuscules pour garantir une base de données impeccable.',
  },
  {
    question: 'Y a-t-il une limite sur le nombre d\'e-mails ?',
    answer: 'Il n\'y a pas de limite stricte. Vous pouvez traiter des milliers d\'e-mails instantanément en une seule fois. La seule contrainte est la mémoire de votre propre navigateur si la liste est extrêmement grande.',
  },
  {
    question: 'Est-il sécurisé de coller mes e-mails ici ?',
    answer: 'Absolument. Tout le traitement est effectué localement dans votre navigateur via JavaScript. Vos données ne sont jamais envoyées à nos serveurs ni stockées dans une base de données externe.',
  },
  {
    question: 'Comment cela améliore-t-il la délivrabilité de mes campagnes ?',
    answer: 'En supprimant les adresses inexistantes ou mal formées, vous réduisez votre taux de rebond (bounce rate), ce qui améliore la réputation de votre domaine auprès de fournisseurs comme Gmail, Outlook ou Yahoo.',
  },
];

const howToData = [
  { name: 'Collez vos e-mails', text: 'Copiez votre liste d\'e-mails et collez-la dans la zone de texte. Ils peuvent être séparés par des lignes, des virgules ou des espaces.' },
  { name: 'Nettoyez la liste', text: "Cliquez sur le bouton 'Nettoyer la liste' pour lancer le processus de validation et de suppression des doublons." },
  { name: 'Consultez les résultats', text: 'Vérifiez les statistiques montrant les e-mails originaux vs. finaux et consultez la liste nettoyée dans le panneau inférieur.' },
  { name: 'Copiez ou téléchargez', text: 'Copiez le résultat directement dans le presse-papiers ou téléchargez-le sous forme de fichier .txt prêt à l\'emploi.' },
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
  name: 'Comment nettoyer une liste d\'e-mails',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Nettoyeur de Listes d\'E-mails',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Supprimez les doublons, corrigez les espaces et validez les formats de votre liste d\'e-mails. Outil gratuit sans limite de registres.',
};

const ui: EmailListCleanerUI = {
  inputLabel: 'Liste d\'adresses e-mail',
  inputPlaceholder: 'Collez ici votre liste d\'e-mails (séparés par des lignes, des virgules ou des espaces)...',
  cleanBtn: 'Nettoyer la liste',
  clearBtn: 'Tout effacer',
  statsOriginal: 'Originaux',
  statsRemoved: 'Supprimés',
  statsFinal: 'Propres',
  resultLabel: 'Résultat propre',
  copyBtn: 'Copier la liste',
  copyDone: 'Copié !',
  downloadBtn: 'Télécharger .txt',
  registered: 'enregistrés',
  downloadFilename: 'emails-propres',
};

export const content: ToolLocaleContent<EmailListCleanerUI> = {
  slug: 'nettoyeur-listes-email',
  title: 'Nettoyeur de Listes d\'E-mails',
  description: 'Nettoyez vos listes d\'e-mails gratuitement. Supprimez les doublons, corrigez les espaces et validez les formats en quelques secondes. Économisez et améliorez votre délivrabilité.',
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'RFC 5322 : Format des messages Internet', url: 'https://datatracker.ietf.org/doc/html/rfc5322' },
    { name: 'Google : Directives pour les expéditeurs d\'e-mails', url: 'https://support.google.com/a/answer/81126' },
    { name: 'Wikipedia : Spam (courrier électronique)', url: 'https://fr.wikipedia.org/wiki/Spam' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Pourquoi utiliser un nettoyeur de listes d\'e-mails est-il essentiel ?' },
    {
      type: 'paragraph',
      html: 'Dans le monde du marketing digital, la qualité de votre base de données compte bien plus que sa taille. Avoir une liste de 50 000 e-mails ne sert à rien si la moitié sont des adresses inexistantes, contiennent des fautes de frappe ou sont en double. C\'est là qu\'un <strong>nettoyeur de listes d\'e-mails</strong> devient indispensable.',
    },
    { type: 'title', level: 3, text: 'Les risques d\'une liste d\'e-mails non nettoyée' },
    {
      type: 'paragraph',
      html: 'Conserver une base de données non nettoyée peut avoir de graves conséquences. Envoyer des e-mails à des adresses inexistantes génère un "hard bounce". Si ce pourcentage dépasse 2-3 %, les filtres anti-spam commenceront à surveiller votre domaine et vous pourriez finir sur une liste noire internationale.',
    },
    {
      type: 'tip',
      title: 'Conseil d\'expert',
      html: 'N\'achetez jamais de listes d\'e-mails. C\'est le moyen le plus rapide de ruiner la réputation de votre domaine. Construisez votre propre liste de manière organique et nettoyez-la tous les 3 à 6 mois.',
    },
    { type: 'title', level: 3, text: 'Comment notre outil optimise votre base de données' },
    {
      type: 'paragraph',
      html: 'Notre utilitaire gratuit effectue un nettoyage approfondi et rapide de vos bases de données sans limite de registres. Il exécute plusieurs tâches de validation critiques instantanément :',
    },
    {
      type: 'list',
      items: [
        '<strong>Suppression des doublons :</strong> Le même utilisateur ne recevra pas deux fois le même e-mail.',
        '<strong>Correction des espaces :</strong> Nous supprimons les espaces accidentels en début ou fin d\'adresse qui invalideraient l\'envoi.',
        '<strong>Validation du format :</strong> Nous filtrons les entrées qui n\'ont pas une structure d\'e-mail valide.',
        '<strong>Normalisation :</strong> Tout est converti en minuscules pour éviter les enregistrements redondants.',
      ],
    },
    { type: 'title', level: 3, text: 'Quand est-il temps de nettoyer votre liste ?' },
    {
      type: 'list',
      items: [
        'Avant d\'importer des contacts dans un nouveau CRM ou une plateforme d\'envoi (Mailchimp, SendGrid, etc.).',
        'Si vous constatez que votre taux d\'ouverture est tombé en dessous de votre moyenne habituelle.',
        'Après un événement ou un salon où vous avez collecté des données manuellement.',
        'En maintenance préventive chaque trimestre pour maintenir la santé de votre domaine.',
      ],
    },
    { type: 'title', level: 3, text: 'Impact sur le retour sur investissement' },
    {
      type: 'paragraph',
      html: 'L\'e-mail marketing reste l\'un des canaux avec le meilleur ROI, mais seulement si les messages arrivent en boîte de réception. En utilisant un <strong>nettoyeur d\'e-mails</strong>, vous optimisez votre entonnoir de vente dès la source et arrêtez de payer des plateformes pour des contacts qui ne verront jamais vos messages.',
    },
    {
      type: 'tip',
      title: 'Utilisez le double opt in',
      html: 'La meilleure façon d\'éviter les faux e-mails est d\'exiger que l\'utilisateur confirme son abonnement en cliquant sur un lien envoyé dans sa boîte de réception. Cela garantit que l\'e-mail existe et que l\'utilisateur y a accès.',
    },
  ],
};
