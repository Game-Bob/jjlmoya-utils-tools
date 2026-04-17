import type { ToolLocaleContent } from '../../../types';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { RuleOfThreeUI } from '../ui';

const faqData = [
  {
    question: 'O que é a regra de três simples direta?',
    answer: 'É um método matemático para resolver problemas de proporcionalidade entre três valores conhecidos e um desconhecido. Chama-se "direta" porque quando uma quantidade aumenta, a outra aumenta na mesma proporção.',
  },
  {
    question: 'Quando devo usar a regra de três inversa?',
    answer: 'É utilizada quando as quantidades são inversamente proporcionais (se uma aumenta, a outra diminui). Por exemplo: se 2 pintores demoram 5 horas, 4 pintores demorarão menos tempo. A nossa calculadora atual foca-se na proporcionalidade direta.',
  },
  {
    question: 'É precisa para cálculos profissionais?',
    answer: 'Sim. A nossa calculadora utiliza precisão de ponto flutuante de alta fidelidade, ideal para ajustes de dosagem, escalas de design gráfico, orçamentos comerciais e conversões de receitas.',
  },
  {
    question: 'Como é calculada manualmente?',
    answer: 'A fórmula é: (Valor B * Valor C) / Valor A = X. Ou seja, multiplicam-se os valores na diagonal e divide-se o resultado pelo valor restante.',
  },
];

const howToData = [
  {
    name: 'Identifique a relação base',
    text: 'Introduza os dois valores conhecidos que formam a proporção inicial (ex: 100km equivalem a 8 litros).',
  },
  {
    name: 'Introduza o terceiro valor',
    text: 'Escreva o novo valor cujo equivalente deseja encontrar (ex: se vou viajar 250km...).',
  },
  {
    name: 'Obtenha o resultado',
    text: 'O sistema calculará automaticamente o valor desconhecido (X) em tempo real sem ter de premir nenhum botão.',
  },
  {
    name: 'Copiar ou redefinir',
    text: 'Pode copiar o resultado diretamente para a área de transferência ou limpar os campos para realizar um novo cálculo.',
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
  name: 'Como utilizar a calculadora de regra de três',
  step: howToData.map((s) => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Regra de Três Simples',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Resolva proporções matemáticas instantaneamente. A ferramenta definitiva para calcular quantidades, receitas, descontos e conversões.',
};

const ui: RuleOfThreeUI = {
  labelA: 'Se tenho...',
  labelB: 'Equivale a...',
  labelC: 'E agora tenho...',
  labelX: 'Resultado (X)',
  hintA: 'Quantidade inicial',
  hintB: 'Valor conhecido',
  hintC: 'Nova quantidade',
  hintX: 'Valor calculado',
  separatorIsTo: 'está para',
  separatorWillBe: 'será',
  copyTitle: 'Copiar resultado',
};

export const content: ToolLocaleContent<RuleOfThreeUI> = {
  slug: 'regra-de-tres-pt',
  title: 'Calculadora de Regra de Três Simples',
  description: 'Resolva proporções matemáticas instantaneamente. A ferramenta definitiva para calcular quantidades, receitas, descontos e conversões.',
  ui,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  howTo: howToData,
  bibliographyTitle: 'Referências',
  bibliography: [
    { name: 'Proporcionalidade (matemática) — Wikipédia', url: 'https://pt.wikipedia.org/wiki/Proporcionalidade_(matem%C3%A1tica)' },
    { name: 'Razões e proporções — Khan Academy', url: 'https://pt.khanacademy.org/math/pre-algebra/pre-algebra-ratios-rates' },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Para que serve a regra de três?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A regra de três simples direta é o "canivete suíço" da matemática. Resolve problemas onde três dados são conhecidos e procuramos o quarto. Se conhece a relação entre <strong>A e B</strong>, e tem um novo valor <strong>C</strong>, a calculadora encontra <strong>X</strong> instantaneamente.',
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          icon: 'mdi:chef-hat',
          title: 'Cozinha e Receitas',
          description: 'Se a receita pede 500g de farinha para 4 pessoas, de quanta preciso para 7?',
          points: ['(500 × 7) ÷ 4 = 875g'],
        },
        {
          icon: 'mdi:shopping',
          title: 'Compras e Preços',
          description: 'Se um pack de 3 latas custa 2,50€, quanto me custariam 10 latas?',
          points: ['(2,50 × 10) ÷ 3 = 8,33€'],
        },
        {
          icon: 'mdi:car',
          title: 'Viagens e Distância',
          description: 'Se demoro 45 min para fazer 60km, quanto tempo demorarei para fazer 140km?',
          points: ['(45 × 140) ÷ 60 = 105 min'],
        },
        {
          icon: 'mdi:monitor-screenshot',
          title: 'Design e Ecrãs',
          description: 'Se a imagem tem 1920px de largura e quero reduzi-la para 800px mantendo a proporção...',
          points: ['(AlturaOriginal × 800) ÷ 1920 = NovaAltura'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Como funciona a fórmula?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A fórmula é sempre a mesma: <strong>multiplicar os valores na diagonal e dividir pelo restante</strong>.',
    },
    {
      type: 'code',
      code: '(B × C) ÷ A = X',
      ariaLabel: 'Fórmula da regra de três simples direta',
    },
    {
      type: 'paragraph',
      html: 'Na calculadora: multiplicamos o valor <strong>B</strong> pelo valor <strong>C</strong> e dividimos por <strong>A</strong>. O resultado é <strong>X</strong>.',
    },
    {
      type: 'title',
      text: 'Usos profissionais e quotidianos',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Além da matemática escolar, a regra de três está em todo o lado: na farmácia para calcular dosagens por peso corporal, na fotografia para calcular tempos de exposição, em finanças para calcular variações percentuais, ou na impressão para escalar dimensões de formato.',
    },
    {
      type: 'tip',
      title: 'Dica de precisão',
      html: 'O resultado é exibido com até 4 casas decimais significativas. Se trabalhar com dinheiro ou medidas exatas, lembre-se de arredondar de acordo com o contexto: euros para 2 casas decimais, píxeis para inteiros.',
    },
  ],
};
