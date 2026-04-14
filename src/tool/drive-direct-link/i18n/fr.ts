import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DriveDirectLinkUI } from '../ui';

const faqData = [
  {
    question: 'Comment utiliser le convertisseur de téléchargement Google Drive ?',
    answer: 'Copiez le lien de partage complet de n\'importe quel fichier stocké sur Google Drive (il doit avoir des permissions publiques). Collez-le dans le champ de l\'outil et cliquez sur "Générer le lien direct". Une nouvelle URL apparaîtra qui lancera le téléchargement sans ouvrir le visionneur de Google.',
  },
  {
    question: 'Puis-je générer un lien de téléchargement direct pour un fichier privé ?',
    answer: 'Si le fichier est privé ou à accès restreint, Google vous demandera de vous connecter avec un compte autorisé. Pour des téléchargements sans inscription, les permissions du fichier doivent être réglées sur "Toute personne disposant du lien peut afficher".',
  },
  {
    question: 'Est-il sécurisé de convertir mes liens Drive ici ?',
    answer: 'Oui. La conversion se fait à 100 % dans votre navigateur de manière anonyme. L\'outil ne stocke pas votre lien et n\'effectue aucun appel serveur ; il analyse uniquement la structure de l\'URL côté client pour générer la version de téléchargement.',
  },
  {
    question: 'Que se passe-t-il si mon fichier Drive est très volumineux ?',
    answer: 'Pour les fichiers de plus d\'environ 100 Mo, Google Drive ne permet pas le téléchargement direct instantané. Il affichera à la place une page d\'avertissement concernant le scan antivirus. Il s\'agit d\'une politique fixe des serveurs Google qu\'aucun outil externe ne peut contourner.',
  },
];

const howToData = [
  { name: 'Copiez le lien de partage', text: 'Dans Google Drive, faites un clic droit sur le fichier et sélectionnez "Obtenir le lien". Assurez-vous que les permissions permettent l\'accès à toute personne disposant du lien.' },
  { name: 'Collez le lien dans le générateur', text: 'Saisissez l\'URL complète de Drive dans le champ texte de l\'outil et cliquez sur le bouton "Générer le lien direct".' },
  { name: 'Copiez et utilisez le lien généré', text: 'Copiez le nouveau lien de téléchargement direct et utilisez-le dans vos e-mails, sites web, newsletters ou partout où vous souhaitez que le fichier se télécharge immédiatement au clic.' },
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
  name: 'Comment générer un lien de téléchargement direct pour Google Drive',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Générateur de Lien de Téléchargement Direct Google Drive',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Convertissez n\'importe quel lien de partage Google Drive en un lien de téléchargement direct en un clic, sans passer par la page de prévisualisation du fichier.',
};

const ui: DriveDirectLinkUI = {
  inputLabel: 'Collez votre lien Google Drive ici :',
  inputPlaceholder: 'https://drive.google.com/file/d/...',
  generateBtn: 'Générer le lien direct',
  resultLabel: 'Lien de téléchargement direct :',
  copyTitle: 'Copier dans le presse-papiers',
  copyDone: 'Copié',
  testBtn: 'Tester le téléchargement',
  errorMsg: 'Le lien saisi ne semble pas être un lien Google Drive valide.',
};

export const content: ToolLocaleContent<DriveDirectLinkUI> = {
  slug: 'lien-telechargement-direct-google-drive',
  title: 'Générateur de Lien de Téléchargement Direct Google Drive',
  description: 'Convertissez facilement n\'importe quel lien de partage Google Drive en un lien de téléchargement direct en un seul clic, sans passer par la prévisualisation du fichier.',
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Télécharger des fichiers depuis Google Drive (Google Workspace)', url: 'https://support.google.com/drive/answer/2423534' },
    { name: 'Google Drive API : téléchargement de fichiers', url: 'https://developers.google.com/drive/api/guides/manage-downloads' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Convertir des liens Google Drive en liens de téléchargement direct' },
    {
      type: 'paragraph',
      html: 'Si vous partagez fréquemment des fichiers via Google Drive, vous savez combien la page de prévisualisation peut être gênante. Vos utilisateurs atterrissent sur un écran intermédiaire qui les oblige à chercher le bouton de téléchargement. Notre <strong>générateur de liens de téléchargement direct Google Drive</strong> résout ce problème en convertissant n\'importe quel lien de partage en un lien qui lance le téléchargement automatiquement.',
    },
    { type: 'title', level: 3, text: 'Pourquoi utiliser un lien de téléchargement direct ?' },
    {
      type: 'paragraph',
      html: 'Le principal avantage est une bien meilleure expérience utilisateur. Lorsque vous partagez un PDF, une image ou un logiciel, l\'utilisateur s\'attend à ce que le fichier commence à se télécharger immédiatement :',
    },
    {
      type: 'list',
      items: [
        '<strong>Gain de temps :</strong> Téléchargement en un clic sans étapes supplémentaires.',
        '<strong>Image professionnelle :</strong> Idéal pour les boutons de téléchargement sur les sites web, newsletters ou e-mails clients.',
        '<strong>Moins d\'abandons :</strong> Les utilisateurs moins techniques peuvent être désorientés par la prévisualisation Drive.',
        '<strong>Compatible HTML :</strong> Parfait pour les attributs <code>href</code> ou <code>src</code> de vos pages web.',
      ],
    },
    { type: 'title', level: 3, text: 'Comment fonctionne le générateur de lien direct ?' },
    {
      type: 'paragraph',
      html: 'Tout se passe à 100 % dans votre navigateur. Les liens de partage Google Drive contiennent un identifiant unique de fichier. L\'outil extrait cet identifiant et construit une nouvelle URL avec le paramètre d\'export natif de Google : <code>https://drive.google.com/uc?export=download&amp;id=VOTRE_ID</code>.',
    },
    {
      type: 'tip',
      title: 'Avertissement pour les fichiers volumineux',
      html: 'Pour les fichiers de plus d\'environ 100 Mo, Google Drive affiche une page d\'avertissement de scan antivirus avant le téléchargement. Il s\'agit d\'une politique fixe des serveurs Google qu\'aucun outil externe ne peut contourner.',
    },
    { type: 'title', level: 3, text: 'Confidentialité et sécurité garanties' },
    {
      type: 'paragraph',
      html: 'Cet outil respecte totalement votre vie privée. Toute la transformation du lien est effectuée via JavaScript côté client, sur votre propre appareil. Aucun lien, identifiant de fichier ou information personnelle n\'est jamais envoyé à un serveur externe.',
    },
  ],
};
