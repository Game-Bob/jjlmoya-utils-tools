import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SpeedReaderUI } from '../ui';

const faqData = [
  {
    question: 'Что такое технология RSVP?',
    answer: 'RSVP расшифровывается как Rapid Serial Visual Presentation (Быстрое последовательное визуальное предъявление). Слова появляются по одному в одной и той же фокусной точке, что избавляет от необходимости переводить взгляд слева направо. Это позволяет читать с гораздо более высокой скоростью без потери понимания при условии практики.',
  },
  {
    question: 'Снижает ли быстрое чтение понимание текста?',
    answer: 'Это зависит от навыка. На умеренных скоростях (350–500 слов в минуту) многие пользователи отмечают более высокую концентрацию за счет устранения субвокализации (внутреннего проговаривания). На экстремальных скоростях (800+ слов в минуту) усвоение может снизиться без предварительной практики.',
  },
  {
    question: 'Какова средняя скорость чтения?',
    answer: 'Средний взрослый человек читает со скоростью от 200 до 250 слов в минуту. С помощью RSVP-ридера и некоторой практики удвоение этой скорости (400–500 слов в минуту) при сохранении отличного понимания является обычным делом.',
  },
  {
    question: 'Вызывает ли RSVP напряжение глаз?',
    answer: 'Благодаря устранению мышечных усилий по перемещению глаз многие пользователи обнаруживают, что могут читать с меньшей усталостью, чем при традиционных методах. Поначалу это может казаться непривычным, но мозг быстро адаптируется.',
  },
];

const howToData = [
  { name: 'Введите текст', text: 'Вставьте статью, книгу или документ, который вы хотите прочитать, в текстовое поле.' },
  { name: 'Настройте скорость (WPM)', text: 'Отрегулируйте количество слов в минуту. Если вы новичок, начните с 300 WPM и постепенно увеличивайте.' },
  { name: 'Зафиксируйте взгляд', text: 'Смотрите на красную букву (фокусная точка ORP). Не пытайтесь следить за словами движением глаз.' },
  { name: 'Начните тренировку', text: 'Нажмите кнопку воспроизведения и позвольте информации течь. Вы можете поставить на паузу в любой момент.' },
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
  name: 'Как пользоваться скорочтением RSVP',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'RSVP Speed Reader',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Тренируйте скорость чтения до 1000 слов в минуту с помощью технологии RSVP и оптимального выравнивания точки распознавания.',
};

const ui: SpeedReaderUI = {
  progressLabel: 'Прогресс чтения',
  speedLabel: 'Скорость',
  slowLabel: 'МЕДЛЕННО',
  fastLabel: 'БОГ',
  speedHint: 'Начните с 300 WPM и постепенно увеличивайте, чтобы раздвинуть свои границы.',
  textLabel: 'Текст для обработки',
  textPlaceholder: 'Вставьте сюда статью, книгу или текст...',
  clearLabel: 'ОЧИСТИТЬ',
  words: 'слов',
  defaultText: 'Добро пожаловать в RSVP Speed Reader. Вставьте текст ниже, чтобы начать. Эта технология поможет вам читать до трех раз быстрее, устраняя лишние движения глаз.',
  play: 'Играть',
  pause: 'Пауза',
};

export const content: ToolLocaleContent<SpeedReaderUI> = {
  slug: 'skorochteniye-soft',
  title: 'RSVP Speed Reader',
  description: 'Тренируйте скорость чтения до 1000 слов в минуту. Технология RSVP с оптимальным выравниванием фокусной точки. Удвойте свою интеллектуальную продуктивность.',
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Источники',
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
    { type: 'title', level: 2, text: 'Формула-1 в чтении: разблокируйте свою ментальную пропускную способность' },
    {
      type: 'paragraph',
      html: 'Что, если чтение биомеханически является пустой тратой времени? Ваш мозг — это суперкомпьютер, ограниченный аналоговым соединением: вашими глазами. <strong>RSVP-ридер</strong> устраняет это узкое место, представляя слова точно в фокусной точке, где ваш разум обрабатывает их быстрее всего.',
    },
    {
      type: 'paragraph',
      html: 'Традиционное чтение — неэффективный процесс. Ваши глаза работают не как сканер, а как камера в режиме серийной съемки: остановка, фокус, прыжок. Этот прыжок, называемый <strong>саккадой</strong>, означает, что вы тратите большую часть времени чтения просто на движение глаз, а не на поглощение информации.',
    },
    {
      type: 'tip',
      html: '«Чтение по методу RSVP — это не просто быстрое чтение. Это устранение механического трения между текстом и вашим мозгом».',
    },
    { type: 'title', level: 3, text: 'Наука инъекции данных' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          icon: 'mdi:bullseye-arrow',
          title: 'Оптимальная точка распознавания (ORP)',
          description: 'У каждого слова есть точка, в которой ваш мозг распознает его быстрее всего. Алгоритм вычисляет именно эту букву (красную) и идеально центрирует ее. Ваши глаза не двигаются ни на миллиметр.',
        },
        {
          icon: 'mdi:speedometer-slow',
          title: 'Когнитивная тишина',
          highlight: true,
          description: 'На скорости выше 400–500 слов в минуту ваш внутренний голос замолкает — он не поспевает. Вы перестаете «слышать» то, что читаете, и начинаете «видеть» голые смыслы и концепции. Это идеальное состояние потока.',
        },
        {
          icon: 'mdi:brain',
          title: 'Визуальная нейропластичность',
          description: 'Это как поход в спортзал: 300 слов в минуту поначалу покажутся быстрыми. Через неделю 500 слов в минуту покажутся прогулкой. Вы перенастраиваете нейронные пути, соединяющие вашу зрительную кору с обработкой языка.',
        },
      ],
    },
    { type: 'title', level: 3, text: 'Протокол тренировок: от новичка до Нео' },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Уровень 1: Пробуждение (200–300 слов в минуту)',
          description: 'Ваша обычная скорость чтения. Привыкните к интерфейсу. Расслабьте лицо и позвольте словам самим приходить к вам. Не пытайтесь их «захватить».',
          points: ['Идеально для новичков', 'Ознакомление с ORP', 'Нет напряжения глаз'],
        },
        {
          title: 'Уровень 2: Звуковой барьер (400–500 слов в минуту)',
          highlight: true,
          description: 'Здесь происходит магия. Вы почувствуете дискомфорт. Не замедляйтесь, если пропустите слово — ваш мозг научится восполнять пробелы из контекста.',
          points: ['Субвокализация исчезает', 'Состояние ментального потока', 'Удвойте свою базовую скорость'],
        },
        {
          title: 'Уровень 3: Вторая космическая скорость (600+ слов в минуту)',
          description: 'Территория продвинутых пользователей. Идеально для повторения учебных материалов, чтения новостей или изучения технической документации, где вы ищете ключевые концепции.',
          points: ['Обычный роман за 2 часа', 'Максимальная эффективность чтения', 'Требует предварительной практики'],
        },
      ],
    },
  ],
};
