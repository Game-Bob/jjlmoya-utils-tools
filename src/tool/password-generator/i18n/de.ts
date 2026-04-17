import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PasswordGeneratorUI } from '../ui';

const faqData = [
  {
    question: 'Ist es sicher, einen Online-Passwortgenerator zu verwenden?',
    answer: 'Ja, solange der Generator clientseitig arbeitet. Unser Tool generiert Passwörter lokal in Ihrem Browser unter Verwendung kryptografisch sicherer Algorithmen. Ihr Passwort wird niemals über das Internet gesendet oder auf einem Server gespeichert.',
  },
  {
    question: 'Was macht ein Passwort „hacksicher“?',
    answer: 'Der Schlüssel ist Entropie (Zufälligkeit). Eine Mischung aus Groß- und Kleinschreibung, Zahlen und Sonderzeichen in Kombination mit einer Mindestlänge von 12–16 Zeichen macht einen Brute-Force-Angriff mit aktueller Technologie praktisch unmöglich.',
  },
  {
    question: 'Warum sollte man gängige Wörter oder Daten vermeiden?',
    answer: 'Hacker verwenden Wörterbuchangriffe, die Millionen von Wörtern, Namen und Datumskombinationen pro Sekunde testen. Rein zufällige Passwörter folgen keinen linguistischen Mustern, was sie weitaus sicherer macht.',
  },
  {
    question: 'Sollte ich mir alle meine Passwörter merken?',
    answer: 'Nicht empfehlenswert. Der ideale Ansatz ist die Verwendung eines Passwortmanagers (wie Bitwarden, 1Password oder der in Ihrem Browser integrierte), um diese langen, zufälligen Passwörter zu speichern, sodass Sie sich nur ein einziges starkes Master-Passwort merken müssen.',
  },
];

const howToData = [
  {
    name: 'Länge festlegen',
    text: 'Verwenden Sie den Schieberegler, um zu wählen, wie viele Zeichen Ihr Passwort haben soll. Aktuelle Sicherheitsstandards empfehlen mindestens 12.',
  },
  {
    name: 'Komplexität wählen',
    text: 'Aktivieren Sie die Optionen für Großbuchstaben, Zahlen und Symbole entsprechend den Anforderungen der Website, auf der Sie das Passwort verwenden möchten.',
  },
  {
    name: 'Passwort generieren',
    text: 'Klicken Sie auf die Schaltfläche „Generieren“. Jeder Klick erzeugt eine einzigartige Kombination mit hoher Entropie basierend auf kryptografischen Algorithmen.',
  },
  {
    name: 'Mit einem Klick kopieren',
    text: 'Verwenden Sie die Kopier-Schaltfläche, um das Passwort auf sichere Weise direkt in Ihre Zwischenablage zu senden.',
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
  name: 'So verwenden Sie den sicheren Passwortgenerator',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sicherer Zufallspasswort-Generator',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Erstellen Sie sofort starke, hacksichere Passwörter. Kostenloses Cybersecurity-Tool zum Generieren zufälliger, sicherer Schlüssel.',
};

const ui: PasswordGeneratorUI = {
  generating: 'Generiert...',
  labelSecurity: 'Stärke',
  labelLength: 'Länge',
  strengthWeak: 'Schwach',
  strengthFair: 'Mittel',
  strengthGood: 'Gut',
  strengthStrong: 'Stark',
  strengthUnbreakable: 'Unknackbar',
  optionUppercase: 'Großbuchstaben',
  optionLowercase: 'Kleinbuchstaben',
  optionNumbers: 'Zahlen',
  optionSymbols: 'Symbole',
  copyTitle: 'Kopieren',
  regenerateTitle: 'Neu generieren',
};

export const content: ToolLocaleContent<PasswordGeneratorUI> = {
  slug: 'passwort-generator',
  title: 'Sicherer Zufallspasswort Generator',
  description: 'Erstellen Sie sofort starke, hacksichere Passwörter. Kostenloses Cybersecurity-Tool zum Generieren zufälliger, sicherer Schlüssel.',
  ui,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referenzen',
  bibliography: [
    { name: 'Web Cryptography API — MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API' },
    { name: 'NIST SP 800-63B: Digital Identity Guidelines', url: 'https://pages.nist.gov/800-63-3/sp800-63b.html' },
    { name: 'Passwort — Wikipedia', url: 'https://de.wikipedia.org/wiki/Passwort' },
    { name: 'Have I Been Pwned — Prüfen Sie, ob Ihr Passwort geleakt wurde', url: 'https://haveibeenpwned.com/Passwords' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Die Anatomie eines unknackbaren Passworts',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ihr Passwort ist die einzige Barriere zwischen Ihren persönlichen Daten (Bankwesen, Medizin, Fotos) und einem Cyberkriminellen. Dennoch verlassen sich Durchschnittsnutzer immer noch auf vorhersehbare Muster wie „123456“ oder Haustiernamen, die in <strong>weniger als einer Sekunde</strong> geknackt werden können.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:alert-circle',
          title: 'Die Gefahr von Rainbow Tables',
          description: 'Hacker erraten Ihr Passwort nicht Versuch für Versuch. Sie verwenden riesige Datenbanken (Rainbow Tables), die Millionen von vorberechneten Hashes gängiger Passwörter enthalten. Wenn Ihr Passwort im Wörterbuch steht oder eine bekannte Phrase ist, war es bereits kompromittiert, bevor Sie es überhaupt verwendet haben.',
          points: [],
        },
        {
          icon: 'mdi:flask',
          title: 'Die Lösung: Reine Entropie',
          description: 'Entropie misst Unordnung oder Unvorhersehbarkeit. Je höher die Entropie (Bits), desto mehr Zeit benötigt ein Computer, um es zu knacken. Dieses Tool verwendet crypto.getRandomValues(), eine Browser-API, die kryptografisch sichere Zufallszahlen generiert, im Gegensatz zu Math.random(), das vorhersehbar ist.',
          points: [],
        },
      ],
    },
    {
      type: 'title',
      text: 'Grundlegende Cybersecurity-Prinzipien',
      level: 2,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:ruler',
          title: 'Länge vor Komplexität',
          description: 'Ein 20-stelliges Passwort, das nur aus Kleinbuchstaben besteht, ist sicherer als ein 8-stelliges Passwort mit seltenen Symbolen. Mathematisch gesehen vervielfacht jedes zusätzliche Zeichen die Schwierigkeit exponentiell.',
          points: [],
        },
        {
          icon: 'mdi:eye-off',
          title: 'Der Mythos der Ersetzung',
          description: 'Das Ersetzen von „a“ durch „@“ oder „e“ durch „3“ (Leetspeak) täuscht niemanden. Moderne Wörterbuchangriffe enthalten diese Variationen bereits automatisch. Vermeiden Sie erkennbare Wörter.',
          points: [],
        },
        {
          icon: 'mdi:key-chain',
          title: 'Andere Seite, anderer Schlüssel',
          description: 'Wenn Sie dasselbe Passwort für Ihre E-Mail und ein Forum verwenden und das Forum gehackt wird, haben die Angreifer nun auch Zugriff auf Ihre E-Mails. Verwenden Sie einen Passwortmanager (wie Bitwarden oder 1Password), um sich komplexe Passwörter zu merken.',
          points: [],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Datenschutz garantiert',
      html: 'Die gesamte Generierung findet <strong>in Ihrem Browser</strong> statt. Kein Passwort wird über das Internet übertragen oder auf einem Server protokolliert. Der Quellcode ist überprüfbar.',
    },
  ],
};
