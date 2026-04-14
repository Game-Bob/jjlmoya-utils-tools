import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Qu\'est-ce que la technologie RSVP ?',
    answer: 'RSVP signifie Rapid Serial Visual Presentation. Les mots apparaissent l\'un après l\'autre au même point focal, éliminant le besoin de déplacer les yeux de gauche à droite. Cela permet de lire à des vitesses bien supérieures avec de l\'entraînement.',
  },
  {
    question: 'Perd-on en compréhension en lisant plus vite ?',
    answer: 'Cela dépend de l\'entraînement. À des vitesses modérées (350-500 MPM), beaucoup d\'utilisateurs rapportent une meilleure concentration en éliminant la subvocalisation. À des vitesses extrêmes (800+ MPM), la rétention peut diminuer sans pratique préalable.',
  },
  {
    question: 'Quelle est la vitesse de lecture normale ?',
    answer: 'Un adulte moyen lit entre 200 et 250 mots par minute. Avec le lecteur RSVP et un peu de pratique, il est courant de doubler cette vitesse (400-500 MPM) en maintenant une excellente compréhension.',
  },
  {
    question: 'La méthode RSVP fatigue-t-elle les yeux ?',
    answer: 'En éliminant l\'effort musculaire de déplacer les yeux, de nombreux utilisateurs trouvent qu\'ils peuvent lire avec moins de fatigue qu\'avec les méthodes traditionnelles. Cela peut sembler intense au début, mais le cerveau s\'adapte rapidement.',
  },
];

const howToData = [
  { name: 'Saisir le texte', text: 'Collez l\'article, le livre ou le document que vous souhaitez lire dans la zone de texte.' },
  { name: 'Configurer les MPM', text: 'Ajustez les Mots Par Minute. Si vous débutez, commencez à 300 MPM et augmentez progressivement.' },
  { name: 'Fixer le regard', text: 'Gardez les yeux sur la lettre rouge (point focal ORP). N\'essayez pas de suivre les mots avec des mouvements oculaires.' },
  { name: 'Commencer l\'entraînement', text: 'Appuyez sur le bouton lecture et laissez l\'information s\'écouler. Vous pouvez faire une pause à tout moment.' },
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
  name: 'Comment utiliser le lecteur rapide RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Lecteur Rapide RSVP',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Entraînez votre vitesse de lecture jusqu\'à 1000 mots par minute grâce à la technologie RSVP et l\'alignement du point de reconnaissance optimal.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Progression lecture',
  speedLabel: 'Vitesse',
  slowLabel: 'LENT',
  fastLabel: 'DIEU',
  speedHint: 'Commencez à 300 MPM et augmentez progressivement pour repousser vos limites.',
  textLabel: 'Texte à traiter',
  textPlaceholder: 'Collez ici votre article, livre ou texte...',
  clearLabel: 'EFFACER',
  words: 'mots',
  defaultText: 'Bienvenue dans le Lecteur Rapide RSVP. Collez votre texte ci-dessous pour commencer. Cette technologie vous aidera à lire jusqu\'à trois fois plus vite en éliminant les mouvements oculaires inutiles.',
  play: 'Lecture',
  pause: 'Pause',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'lecteur-rapide',
  title: 'RSVP Lecteur Rapide',
  description: "Entraînez votre vitesse de lecture jusqu'à 1000 mots par minute. Technologie RSVP avec alignement du point focal optimal. Doublez votre productivité intellectuelle.",
  ui,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Références',
  bibliography: [
    { name: 'Rayner, K., et al. (2016). So much to read, so little time. Psychological Science in the Public Interest.', url: 'https://journals.sagepub.com/doi/full/10.1177/1529100615623267' },
    { name: 'Forster, K. I. (1970). Visual perception of rapidly presented word sequences. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03212522' },
    { name: 'Öquist, G., & Goldstein, M. (2003). Towards an improved readability on mobile devices. Mobile HCI.', url: 'https://www.researchgate.net/publication/221063852_Towards_an_improved_readability_on_mobile_devices' },
    { name: 'Juola, J. F., et al. (1982). Visual search and reading of rapid serial visual presentations. Perception & Psychophysics.', url: 'https://link.springer.com/article/10.3758/BF03202598' },
    { name: 'Masson, M. E. J. (1983). Conceptual processing of text during rapid serial visual presentation. Journal of Educational Psychology.', url: 'https://psycnet.apa.org/record/1984-08638-001' },
    { name: 'Saldana, D., & Greene, R. (2022). Reading effectiveness with RSVP apps. Reading Psychology.', url: 'https://www.tandfonline.com/doi/abs/10.1080/02702711.2022.2030000' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'La Formule 1 de la Lecture : Débloquez Votre Bande Passante Mentale' },
    {
      type: 'paragraph',
      html: 'Et si lire était, biomécaniquement, une perte de temps ? Votre cerveau est un superordinateur bridé par une connexion analogique : vos yeux. Le <strong>Lecteur RSVP</strong> brise ce goulot d\'étranglement en présentant les mots au point focal exact où votre esprit les traite le plus rapidement.',
    },
    {
      type: 'paragraph',
      html: 'La lecture traditionnelle est un processus inefficace. Vos yeux ne fonctionnent pas comme un scanner ; ils fonctionnent comme une caméra en rafale : arrêt, mise au point, saut. Ce saut, appelé <strong>saccade</strong>, vous fait passer une grande partie du temps à déplacer les yeux plutôt qu\'à absorber l\'information.',
    },
    {
      type: 'tip',
      html: '"La lecture RSVP n\'est pas seulement lire plus vite. C\'est éliminer la friction mécanique entre le texte et votre cerveau."',
    },
    { type: 'title', level: 3, text: 'La Science derrière l\'Injection de Données' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Point de Reconnaissance Optimal (ORP)',
          description: 'Chaque mot a un point où votre cerveau le reconnaît le plus vite. L\'algorithme calcule cette lettre exacte (la rouge) et la centre parfaitement. Vos yeux ne bougent pas d\'un millimètre.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Silence Cognitif',
          highlight: true,
          description: 'Au-delà de 400-500 MPM, votre voix intérieure se tait — elle ne peut pas suivre le rythme. Vous cessez d\'"entendre" ce que vous lisez et commencez à "voir" des significations et des idées pures.',
        },
        {
          icon: 'mdi:brain',
          title: 'Neuroplasticité Visuelle',
          description: 'Comme aller à la salle de sport : 300 MPM semblera rapide au début. Après une semaine, 500 MPM semblera une promenade. Vous re-entraînez les voies neuronales reliant le cortex visuel au langage.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Protocole d\'Entraînement : Du Débutant à l\'Expert' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: "Niveau 1 : L'Éveil (200 à 300 MPM)",
          description: "Votre vitesse de lecture normale. Habituez-vous à l'interface. Détendez le visage et laissez les mots venir à vous. N'essayez pas de les attraper.",
          points: ['Idéal pour débutants', 'Familiarisation ORP', 'Sans fatigue oculaire'],
        },
        {
          title: "Niveau 2 : Le Mur du Son (400 à 500 MPM)",
          highlight: true,
          description: "C'est ici que la magie se produit. Vous ressentirez de l'inconfort. Ne ralentissez pas si vous manquez un mot. Votre cerveau apprendra à combler les lacunes par le contexte.",
          points: ['La subvocalisation disparaît', 'État de flux mental', 'Doublez votre vitesse de base'],
        },
        {
          title: "Niveau 3 : Vitesse d'Évasion (600+ MPM)",
          description: "Territoire avancé. Idéal pour réviser des cours, lire des actualités ou consommer de la documentation technique.",
          points: ['Roman moyen en 2 heures', 'Efficacité de lecture maximale', 'Nécessite une pratique préalable'],
        },
      ],
    },
  ],
};
