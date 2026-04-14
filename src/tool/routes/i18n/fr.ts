import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RoutesUI } from '../ui';

const faqData = [
  {
    question: "Quel algorithme d'optimisation utilise-t-il ?",
    answer: "Il utilise une résolution avancée du Problème du Voyageur de Commerce (TSP). L'algorithme analyse tous les arrêts et détermine l'ordre séquentiel qui minimise la distance totale parcourue, économisant ainsi du temps et du carburant.",
  },
  {
    question: 'Est-il sûr de partager ma localisation ?',
    answer: "Oui. L'outil traite les données géographiques localement dans votre navigateur. Nous ne stockons pas vos itinéraires, arrêts ou historique de localisation sur nos serveurs.",
  },
  {
    question: "Combien d'arrêts puis-je optimiser à la fois ?",
    answer: "Notre version gratuite permet d'optimiser jusqu'à 10 arrêts instantanément. Pour des itinéraires professionnels plus étendus, le système est optimisé pour maintenir de hautes performances sans bloquer le navigateur.",
  },
  {
    question: "Puis-je utiliser l'itinéraire directement dans Google Maps ?",
    answer: "Bien sûr ! Une fois l'itinéraire optimisé, l'outil génère un lien de navigation compatible avec Google Maps pour que vous puissiez démarrer le voyage directement depuis votre téléphone.",
  },
];

const howToData = [
  {
    name: 'Ajouter le point de départ',
    text: "Saisissez l'adresse de départ ou cliquez sur la carte pour fixer le point de départ de votre itinéraire.",
  },
  {
    name: 'Saisir les arrêts de destination',
    text: "Ajoutez tous les lieux que vous devez visiter. L'ordre n'a pas d'importance, car le système les réordonnera pour vous.",
  },
  {
    name: "Optimiser la séquence",
    text: "Cliquez sur le bouton d'optimisation. L'algorithme calculera en quelques secondes l'ordre le plus efficace pour parcourir tous les arrêts.",
  },
  {
    name: 'Ouvrir dans le navigateur',
    text: "Utilisez le bouton de navigation pour transférer l'itinéraire optimisé vers votre application de cartographie préférée.",
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
  name: 'Comment optimiser un itinéraire avec plusieurs arrêts',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Calculateur d'itinéraires optimaux",
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: "Optimisez vos itinéraires de livraison ou de voyage gratuitement. Réorganisez automatiquement vos arrêts pour trouver le chemin le plus court et le plus efficace.",
};

const ui: RoutesUI = {
  titleSidebar: "Points d'itinéraire",
  descriptionSidebar: "Cliquez sur la carte pour ajouter des arrêts. Le premier point est le départ.",
  emptyState: 'Aucun point ajouté',
  btnOptimize: "Calculer l'itinéraire optimal",
  btnCalculating: 'Calcul en cours...',
  btnClear: 'Tout effacer',
  labelDistance: 'Distance totale estimée',
  labelDeleteAria: 'Supprimer',
  labelLoadingAddress: 'Chargement de l\'adresse...',
  labelPoint: 'Point',
  errorMinPoints: 'Au moins deux points sont nécessaires pour calculer un itinéraire.',
  errorCalculate: "Erreur lors du calcul de l'itinéraire.",
  errorAddress: "Erreur lors de la récupération de l'adresse",
  errorAddressName: 'Point inconnu',
};

export const content: ToolLocaleContent<RoutesUI> = {
  slug: 'itineraires-optimaux',
  title: "Calculateur d'itinéraires optimaux gratuit",
  description: "Optimisez vos itinéraires de livraison ou de voyage gratuitement. Notre outil réorganise automatiquement vos arrêts pour trouver le chemin le plus court et le plus efficace.",
  ui,
  faqTitle: 'Questions fréquentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Technologies et sources',
  bibliography: [
    { name: 'Leaflet — Bibliothèque de cartes interactives open source', url: 'https://leafletjs.com/' },
    { name: 'OpenStreetMap — Données cartographiques ouvertes', url: 'https://www.openstreetmap.org/' },
    { name: 'CARTO — Tuiles de carte Voyager', url: 'https://carto.com/basemaps/' },
    { name: 'Nominatim — Service de géocodage inverse (OpenStreetMap)', url: 'https://nominatim.org/' },
    { name: "OSRM — Open Source Routing Machine (optimisation d'itinéraires)", url: 'http://project-osrm.org/' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Optimiseur d'itinéraires intelligent : TSP pour livraisons et voyages",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'<strong>optimiseur d'itinéraires en ligne</strong> est un outil gratuit qui résout le classique <em>Problème du Voyageur de Commerce (TSP)</em>. Ajoutez tous vos arrêts dans n'importe quel ordre et l'algorithme calculera automatiquement la séquence la plus efficace pour minimiser la distance totale parcourue.",
    },
    {
      type: 'title',
      text: "Comment fonctionne l'algorithme d'optimisation d'itinéraires ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'outil utilise l'API <strong>OSRM (Open Source Routing Machine)</strong>, un moteur de routage haute performance basé sur les données OpenStreetMap. Le processus : d'abord il calcule l'itinéraire circulaire optimal entre tous les points (algorithme TSP), puis détermine le meilleur point de coupe pour le convertir en trajet linéaire aller simple, et enfin trace l'itinéraire sur la carte avec la distance totale estimée.",
    },
    {
      type: 'title',
      text: "Cas d'usage : livraisons, commerciaux et voyages",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "L'optimiseur d'itinéraires est idéal pour les <strong>livreurs indépendants</strong> qui doivent organiser plusieurs livraisons quotidiennes, les <strong>commerciaux terrain</strong> visitant des clients dans une zone, ou les <strong>voyageurs</strong> souhaitant visiter plusieurs villes ou monuments dans l'ordre le plus efficace. L'outil traite toutes les informations dans le navigateur, sans partager vos données avec aucun serveur propriétaire.",
    },
    {
      type: 'stats',
      columns: 2,
      items: [
        { value: 'TSP', label: 'Algorithme', icon: 'mdi:chart-line' },
        { value: 'OSRM', label: 'Moteur de routage', icon: 'mdi:map-marker-path' },
        { value: 'Local-First', label: 'Confidentialité', icon: 'mdi:lock-check' },
        { value: 'Gratuit', label: 'Coût', icon: 'mdi:currency-eur-off' },
      ],
    },
    {
      type: 'title',
      text: 'Confidentialité et traitement local',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Toute la logique de l'outil s'exécute directement dans votre navigateur. Les coordonnées de vos arrêts sont uniquement envoyées aux APIs publiques OSRM et Nominatim pour calculer les itinéraires et obtenir les noms d'adresse, mais <strong>ne sont stockées sur aucun serveur propriétaire</strong>. Vous pouvez utiliser l'outil en toute sécurité pour planifier des itinéraires professionnels avec des informations sensibles.",
    },
    {
      type: 'tip',
      title: "Conseil d'utilisation",
      html: "<strong>Pour de meilleurs résultats</strong>, ajoutez les arrêts en cliquant directement sur la carte plutôt qu'en cherchant des adresses. Les marqueurs sont déplaçables, vous pouvez donc ajuster la position exacte de chaque point après l'avoir placé.",
    },
  ],
};
