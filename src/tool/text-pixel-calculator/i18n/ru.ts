import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TextPixelCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Как рассчитать ширину текста в пикселях онлайн?',
    answer: 'Вставьте текст в поле ввода, настройте шрифт и размер, и инструмент автоматически использует Canvas API браузера, чтобы вернуть точную ширину в пикселях.',
  },
  {
    question: 'Почему ширина в пикселях различается у разных шрифтов?',
    answer: 'Большинство шрифтов являются пропорциональными, что означает, что каждый символ имеет разную ширину. Например, заглавная буква «M» всегда шире строчной «i» в стандартном шрифте без засечек.',
  },
  {
    question: 'Равна ли длина в символах ширине в пикселях?',
    answer: 'Нет. Количество символов дает вам длину строки, а измерение в пикселях — визуальное пространство, которое она занимает. Это крайне важно для предотвращения переполнения контейнера текстом в веб-дизайне.',
  },
  {
    question: 'Могу ли я использовать любой шрифт Google Fonts?',
    answer: 'Да, если шрифт установлен в вашей операционной системе или загружен на текущей странице, инструмент точно измерит его размеры.',
  },
  {
    question: 'Безопасно ли обрабатывать личный текст или фрагменты кода?',
    answer: 'Да. Калькулятор работает полностью локально. Данные не отправляются на внешние серверы, что гарантирует полную конфиденциальность ваших проектов.',
  },
];

const howToData = [
  { name: 'Введите текст', text: 'Введите или вставьте текст, который вы хотите измерить, в поле ввода.' },
  { name: 'Настройте шрифт', text: 'Укажите семейство шрифтов, размер в пикселях, насыщенность и начертание (курсив).' },
  { name: 'Получите результат', text: 'Ширина в пикселях и количество символов обновляются в режиме реального времени.' },
  { name: 'Скопируйте значение', text: 'Нажмите «Копировать ширину», чтобы сохранить количество пикселей в буфер обмена.' },
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
  name: 'Как измерить ширину текста в пикселях',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Калькулятор ширины текста в пикселях',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Точно рассчитайте ширину любого текста в пикселях на основе шрифта, размера и стиля.',
};

const ui: TextPixelCalculatorUI = {
  textLabel: 'Текст для измерения',
  textPlaceholder: 'Введите или вставьте здесь текст, который хотите измерить...',
  defaultText: 'Привет, мир',
  fontLabel: 'Семейство шрифтов',
  sizeLabel: 'Размер (px)',
  weightLabel: 'Насыщенность',
  italicLabel: 'Курсив',
  widthLabel: 'Ширина (пиксели)',
  charsLabel: 'Символы',
  previewLabel: 'Визуальный просмотр',
  copyBtn: 'Копировать ширину',
  resetBtn: 'Сброс',
  copyDone: 'Ширина скопирована',
};

export const content: ToolLocaleContent<TextPixelCalculatorUI> = {
  slug: 'kalkulyator-shiriny-pikseley-teksta',
  title: 'Калькулятор ширины текста в пикселях',
  description: 'Точно рассчитайте ширину любого текста в пикселях на основе шрифта, размера и стиля. Бесплатный инструмент для дизайнеров и разработчиков.',
  ui,
  faqTitle: 'Часто задаваемые вопросы',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Источники',
  bibliography: [
    { name: 'W3C: CSS Text Module Level 3', url: 'https://www.w3.org/TR/css-text-3/' },
    { name: 'Google Fonts: Understanding variable fonts', url: 'https://fonts.google.com/knowledge/glossary/variable_fonts' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Измерьте точную ширину любого текста в пикселях' },
    {
      type: 'paragraph',
      html: 'Ваш текст выходит за пределы контейнера? Нужно узнать, сколько места занимает заголовок перед рендерингом? <strong>Canvas API браузера</strong> позволяет измерить точную ширину любой текстовой строки с пиксельной точностью без ее отрисовки в DOM.',
    },
    { type: 'title', level: 3, text: 'Почему подсчета символов недостаточно' },
    {
      type: 'paragraph',
      html: 'Современные шрифты являются <strong>пропорциональными</strong>: каждый глиф имеет разную ширину. Буква «W» может занимать в три раза больше места, чем «i». Количество символов ничего не говорит вам о фактическом визуальном пространстве, которое занимает текст.',
    },
    {
      type: 'list',
      items: [
        '<strong>Веб-дизайн:</strong> предотвращайте переполнение в кнопках, метках и ячейках таблиц.',
        '<strong>SEO:</strong> поисковые системы обрезают заголовки по пикселям, а не по символам.',
        '<strong>Canvas и PDF:</strong> рассчитывайте точное положение перед программной отрисовкой текста.',
        '<strong>Подсказки и баблы:</strong> динамически устанавливайте размер контейнеров на основе текста внутри.',
      ],
    },
    { type: 'title', level: 3, text: 'Как работает измерение с помощью Canvas' },
    {
      type: 'paragraph',
      html: 'Метод <code>ctx.measureText()</code> интерфейса Canvas API возвращает объект <code>TextMetrics</code> со свойством <code>width</code>, отражающим ширину в CSS-пикселях с использованием текущего активного шрифта. Этот инструмент настраивает контекст с вашим шрифтом, размером, насыщенностью и стилем перед измерением.',
    },
    {
      type: 'code',
      ariaLabel: 'Пример использования Canvas measureText',
      code: "const ctx = document.createElement('canvas').getContext('2d');\nctx.font = '700 16px Inter, system-ui, sans-serif';\nconst width = ctx.measureText('Привет, мир').width; // например, 74.5",
    },
    { type: 'title', level: 3, text: 'Конфиденциальность и локальная обработка' },
    {
      type: 'paragraph',
      html: 'Все вычисления происходят в вашем браузере. Никакой текст, фрагмент кода или личные данные не покидают ваше устройство.',
    },
    {
      type: 'tip',
      title: 'Шрифты Google Fonts',
      html: 'Чтобы точно измерить шрифт Google Fonts, сначала убедитесь, что он загружен на страницу или установлен в вашей системе. В противном случае браузер вернется к подменному шрифту, и результат будет отличаться.',
    },
  ],
};
