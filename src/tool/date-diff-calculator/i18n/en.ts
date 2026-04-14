import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DateDiffCalculatorUI } from '../ui';

const faqData = [
  {
    question: 'Is this date difference calculator free?',
    answer: 'Yes, it is a 100% free tool accessible from any browser with no registration or downloads required.',
  },
  {
    question: 'How are leap years handled in the total time?',
    answer: 'The tool uses the standard JavaScript chronology (UTC), which automatically handles leap years and the variable number of days in each month to give an exact result.',
  },
  {
    question: 'Can I calculate the difference between hours and minutes too?',
    answer: 'Yes. The input fields allow you to select the exact time. The result gives you a breakdown in days, hours, minutes and seconds, as well as accumulated totals.',
  },
  {
    question: 'Are my date inputs sent to any server?',
    answer: 'No. All processing is done locally in your browser. We do not store or receive any information about the dates you calculate.',
  },
];

const howToData = [
  { name: 'Select the start date', text: "Enter the starting date and time, or click 'Today' to set it instantly." },
  { name: 'Select the end date', text: "Define the target moment. Use 'Now' to measure the time elapsed up to this exact instant." },
  { name: 'Read the results', text: 'Check the breakdown into days, hours, minutes and seconds, plus the accumulated totals for weeks and hours.' },
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
  name: 'How to calculate the difference between two dates',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Date Difference Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Calculate exactly how much time has passed between two dates or how long until an event. Results in days, hours and minutes.',
};

const ui: DateDiffCalculatorUI = {
  startLabel: 'Start Date',
  endLabel: 'End Date',
  nowBtn: 'Now',
  todayBtn: 'Today',
  tomorrowBtn: 'Tomorrow',
  daysLabel: 'Days',
  hoursLabel: 'Hours',
  minsLabel: 'Min',
  secsLabel: 'Sec',
  weeksLabel: 'Total Weeks',
  totalHoursLabel: 'Total Hours',
  totalMinsLabel: 'Total Minutes',
  elapsed: 'Elapsed Time',
  past: 'Time in the Past',
  invalidDates: 'Invalid dates',
};

export const content: ToolLocaleContent<DateDiffCalculatorUI> = {
  slug: 'date-difference-calculator',
  title: 'Date Difference Calculator',
  description: 'Calculate exactly how much time has passed between two dates or how long until an event. Free tool with results in days, hours and minutes.',
  ui,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'References',
  bibliography: [
    { name: 'Time and Date: World Clock and Time Zone Converter', url: 'https://www.timeanddate.com/worldclock/' },
    { name: 'Wikipedia: History of the Gregorian Calendar', url: 'https://en.wikipedia.org/wiki/Gregorian_calendar' },
    { name: 'Wikipedia: Eisenhower Matrix and Time Management', url: 'https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', level: 2, text: 'Date difference calculator with days, hours and minutes' },
    {
      type: 'paragraph',
      html: 'Calculating the <strong>difference between two dates</strong> is one of the most common and underrated tasks in both everyday life and professional environments. Whether you are planning a product launch, calculating a person\'s exact age or measuring the time left until a special event, having a precise tool is essential for efficient time management.',
    },
    { type: 'title', level: 3, text: 'What is the date difference calculator used for?' },
    {
      type: 'paragraph',
      html: 'The usefulness of this tool extends to multiple fields. In the workplace, project managers use it to define delivery deadlines and track milestone progress. In legal and administrative contexts, it is essential for calculating limitation periods or contract durations.',
    },
    {
      type: 'list',
      items: [
        '<strong>Event planning:</strong> Know how many weeks and days remain until a wedding, conference or trip.',
        '<strong>Project management:</strong> Calculate the time elapsed from the start of a phase to its completion.',
        '<strong>Finance:</strong> Determine the number of days for interest calculations or invoice due dates.',
        '<strong>Human Resources:</strong> Measure employee tenure or accumulated vacation days.',
        '<strong>Health:</strong> Track the progress of a treatment or recovery time after a procedure.',
      ],
    },
    { type: 'title', level: 3, text: 'Time perception and digital precision' },
    {
      type: 'paragraph',
      html: 'We often tend to round time. We say "about a month" when it is actually 27 days and 14 hours away. By using a digital calculator, we eliminate subjectivity and obtain clean data for informed decision-making.',
    },
    { type: 'title', level: 3, text: 'Natural days versus working days' },
    {
      type: 'paragraph',
      html: 'This tool calculates <strong>calendar days</strong>, including weekends and public holidays. For astronomical and general civil calculation, time is measured continuously. If you need to estimate project time, remember that the days shown represent the full real calendar.',
    },
    { type: 'title', level: 3, text: 'The impact of time on productivity' },
    {
      type: 'paragraph',
      html: 'Parkinson\'s Law states that work expands to fill the time available for its completion. By visualizing exactly how many hours and minutes remain until a deadline, teams tend to optimize their efforts and stay focused.',
    },
    {
      type: 'tip',
      title: 'Future and past dates',
      html: 'You can use the calculator for both future and past dates. If the end date is earlier than the start date, the system automatically detects it is time elapsed in the past, maintaining precision in the absolute difference values.',
    },
  ],
};
