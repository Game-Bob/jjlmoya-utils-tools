import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EnvBadgeSpainUI } from '../ui';

const faqData = [
  {
    question: 'Was passiert, wenn ich mit einem Fahrzeug ohne Plakette in eine Umweltzone (ZBE) in Spanien fahre?',
    answer: 'Wenn Sie mit einem Fahrzeug ohne Umweltplakette und ohne Sondergenehmigung in eine ZBE einer spanischen Großstadt einfahren, erhalten Sie ein Bußgeld für einen schwerwiegenden Verstoß, das in der Regel 200 Euro beträgt.',
  },
  {
    question: 'Muss ich den physischen DGT-Aufkleber an meiner Windschutzscheibe anbringen?',
    answer: 'Die DGT empfiehlt das Anbringen, aber die Bußgelder für das Nichtanbringen werden von jeder lokalen Behörde festgelegt. In Madrid ist es obligatorisch, während in anderen Städten die Durchsetzung vollständig auf Kameras zur automatischen Nummernschilderkennung basiert.',
  },
  {
    question: 'Mein Diesel wurde vor 2006 zugelassen, aber im technischen Datenblatt steht Euro 4. Kann ich eine Plakette bekommen?',
    answer: 'Ja. Wenn die bei den Verkehrsbehörden gespeicherten Fahrzeugdaten nur das Zulassungsdatum widerspiegeln, können Sie bei einem offiziellen Händler ein Zertifikat vom Hersteller anfordern und dieses der Verkehrsbehörde vorlegen, um Ihre Einstufung zu korrigieren.',
  },
  {
    question: 'Was bedeutet die C-Plakette (Grün) für Autos in Spanien im Jahr 2025?',
    answer: 'In den meisten ZBEs können Sie immer noch frei fahren, aber die C-Plakette schränkt das Parken auf der Straße ein. Sie müssen Tiefgaragen oder autorisierte Parkhäuser in der Nähe der ZBE-Perimeter nutzen.',
  },
];

const howToData = [
  { name: 'Fahrzeugtyp auswählen', text: 'Wählen Sie aus, ob Ihr Fahrzeug ein Auto oder Transporter, ein Motorrad oder ein schweres Fahrzeug ist. Jede Kategorie hat eine eigene Einstufungslogik nach den spanischen Verkehrsvorschriften.' },
  { name: 'Kraftstoff- oder Energietyp wählen', text: 'Elektro, Plug-in-Hybrid, herkömmlicher Hybrid, Gas, Benzin oder Diesel führen alle zu unterschiedlichen Plakettenergebnissen. Die Reichweitenschwelle für Plug-in-Hybride liegt bei 40 km.' },
  { name: 'Zulassungsjahr oder Euro-Norm eingeben', text: 'Bei Verbrennungsfahrzeugen ist die Euro-Norm der entscheidende Faktor. Das Zulassungsdatum auf dem technischen Datenblatt gibt eine zuverlässige Annäherung an die Norm.' },
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
  name: 'So simulieren Sie die spanische DGT-Umweltplakette für Ihr Fahrzeug',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Simulator für spanische DGT-Umweltplaketten',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Finden Sie heraus, welche spanische DGT-Umweltplakette für Ihr Fahrzeug basierend auf Typ, Kraftstoff und Zulassungsjahr gilt. Kostenloses Tool zur Vorbereitung auf Umweltzonen in Spanien.',
};

const ui: EnvBadgeSpainUI = {
  step1Label: '1. Fahrzeugtyp',
  vehicleCar: 'Auto / Transporter',
  vehicleMoto: 'Motorrad',
  vehicleHeavy: 'LKW / Bus',
  errVehicle: 'Bitte wählen Sie einen Fahrzeugtyp aus',

  step2Label: '2. Kraftstoff oder Energie',
  fuelElectric: '100 % Elektro / Brennstoffzelle',
  fuelPhevHigh: 'Plug-in-Hybrid (>40 km)',
  fuelPhevLow: 'Plug-in-Hybrid (<40 km)',
  fuelHybridGas: 'Hybrid (HEV) oder Gas',
  fuelGasoline: 'Benzin',
  fuelDiesel: 'Diesel',
  errFuel: 'Bitte wählen Sie einen Kraftstoff- oder Energietyp aus',

  step3Label: '3. Euro-Norm oder Zulassungsjahr',
  yearPre2000: 'Vor 2000',
  year20002005: '2000 bis 2005',
  year20062013: '2006 bis 2013',
  yearPost2014: '2014 oder später',
  errYear: 'Bitte wählen Sie den Zulassungszeitraum aus',
  helpText: 'Im Zweifelsfall hat die Euro-Norm auf Ihrem technischen Datenblatt Vorrang vor dem Zulassungsdatum.',

  submitBtn: 'Meine Plakette prüfen',

  resultTitle: 'Zugewiesene Plakette',

  badge0Label: 'Null-Emissions-Plakette',
  badge0Letter: '0',
  badge0Sub: 'EMISSIONEN',
  badge0Desc: 'Fahrzeuge mit maximaler Effizienz. Sie genießen uneingeschränkten Zugang zu Umweltzonen (ZBE) in Spanien und weitreichende Steuerbefreiungen.',

  badgeEcoLabel: 'ECO-Plakette',
  badgeEcoLetter: 'ECO',
  badgeEcoDesc: 'Emissionsarme Fahrzeuge wie Hybride und gasbetriebene Autos. Ermöglicht den Zugang zu den meisten ZBEs und bietet Rabatte in regulierten Parkzonen.',

  badgeCLabel: 'C-Plakette',
  badgeCLetter: 'C',
  badgeCDesc: 'Neuere Verbrennungsfahrzeuge mit hoher Euro-Norm. Freie Fahrt, aber Parkbeschränkungen in bestimmten ZBE-Bereichen.',

  badgeBLabel: 'B-Plakette',
  badgeBLetter: 'B',
  badgeBDesc: 'Ältere Verbrennungsfahrzeuge. Unterliegen größeren Zugangs- und Parkbeschränkungen in spanischen Städten.',

  badgeALabel: 'Keine Plakette',
  badgeALetter: 'KEINE',
  badgeASub: 'PLAKETTE',
  badgeADesc: 'Stark verschmutzende Fahrzeuge ohne Anspruch auf eine Plakette. Sie werden schrittweise aus den Stadtzentren und Umweltzonen in ganz Spanien ausgeschlossen.',

  warningText: 'Überprüfen Sie das Ergebnis immer auf der offiziellen DGT-Website anhand Ihres Kennzeichens, insbesondere bei administrativen Unstimmigkeiten.',
  resetBtn: 'Neue Simulation',
};

export const content: ToolLocaleContent<EnvBadgeSpainUI> = {
  slug: 'umweltplakette-simulator-spanien',
  title: 'Simulator für spanische Umweltplaketten',
  description: 'Finden Sie kostenlos heraus, welche spanische DGT-Umweltplakette für Ihr Auto, Motorrad oder Ihren Transporter für Umweltzonen (ZBE) in Spanien gilt.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'DGT-Vorschriften zu Klimawandel und Verkehr (Spanisch)', url: 'https://www.dgt.es/export/sites/web-DGT/.galleries/downloads/muevete-con-seguridad/normas-de-trafico/MOV-gestion-trafico/2023/INSTRUCCION-recomendaciones-ZBE_fe.pdf' },
    { name: 'Spanisches Klimaschutzgesetz und Umweltzonen (BOE)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-8447' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Was ist die spanische DGT-Umweltplakette?' },
    {
      type: 'paragraph',
      html: 'Die <strong>spanische DGT-Umweltplakette</strong> (distintivo ambiental) ist ein Fahrzeugeinstufungssystem, das in Spanien eingeführt wurde, um die am wenigsten verschmutzenden Fahrzeuge bevorzugt zu behandeln. Es wird hauptsächlich zur Kontrolle des Zugangs zu Umweltzonen (ZBE) in spanischen Städten mit mehr als 50.000 Einwohnern verwendet.',
    },
    { type: 'title', level: 3, text: 'Plakettentypen und ihre Vorteile in Spanien' },
    {
      type: 'list',
      items: [
        '<strong>Null-Emissions-Plakette:</strong> Für reine Elektrofahrzeuge, Plug-in-Hybride mit über 40 km elektrischer Reichweite und Wasserstoff-Brennstoffzellen. Unbeschränkter Zugang zu ZBEs und Steuerbefreiungen.',
        '<strong>ECO-Plakette:</strong> Herkömmliche Hybride, Flüssiggas, Erdgas und Plug-in-Hybride mit weniger als 40 km Reichweite. Breiter Zugang zu Sperrzonen und Parkrabatte.',
        '<strong>C-Plakette:</strong> Benziner ab Euro 4, Diesel ab Euro 6. Freie Fahrt, aber Parkbeschränkungen auf der Straße in der Nähe von ZBEs.',
        '<strong>B-Plakette:</strong> Benziner Euro 3, Diesel Euro 4 oder 5. Zunehmende Beschränkungen und gelegentliche Einfahrverbote.',
        '<strong>Keine Plakette (Kategorie A):</strong> Ältere oder stärker verschmutzende Fahrzeuge, die seit 2024 schrittweise aus den spanischen Stadtzentren ausgeschlossen werden.',
      ],
    },
    { type: 'title', level: 3, text: 'Umweltzonen in spanischen Städten' },
    {
      type: 'paragraph',
      html: 'Die Einführung der ZBE folgt dem spanischen Klimaschutzgesetz, das Gemeinden ab bestimmten Bevölkerungsschwellen dazu verpflichtet, diese einzurichten. Bekannte Beispiele sind <em>Madrid 360</em> und <em>Barcelonas Superilles</em>, wo das Einfahren ohne mindestens eine B-Plakette zu automatischen Bußgeldern führen kann, die über Kameras zur Nummernschilderkennung verhängt werden.',
    },
    {
      type: 'tip',
      title: 'So erhalten Sie den physischen Aufkleber in Spanien',
      html: 'Wenn der Simulator bestätigt, dass Sie Anspruch auf eine Plakette haben, können Sie den physischen Aufkleber für etwa 5 Euro in jeder Correos-Filiale (Post), in autorisierten Werkstätten oder bei Verkehrsämtern kaufen. Bringen Sie Ihre Fahrzeugpapiere mit.',
    },
  ],
};
