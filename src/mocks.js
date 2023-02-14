const MIN_BUDGET = 10;
const MAX_BUDGET = 1000000;
const BASE_CURRENCY = { id: 1, name: 'USD', symbol: '$' };
const JOB_TITLES = [
  'Создать складываемую кровать по чертежам',
  'Создать чертеж кровати-шкафа',
  'Создать ядерный реактор',
];
const SHORT_DESCRIPTION = 'Необходимо создать ядерный реактор, способный вырабатывать электроэнергию рыбатекст рыбатекст рыбатекст рыбатекст рыбатекст рыбатекст рыбатекст';

export const tags = [
  { id: 1, name: 'деревообработка' },
  { id: 2, name: 'металлообработка' },
];

export const skills = [
  { id: 1, name: 'деревообработка' },
  { id: 2, name: 'шлифовка' },
  { id: 3, name: 'металлообработка' },
];

export const getRandomBudget = () => Math.random() * MAX_BUDGET + MIN_BUDGET;

export const getRandomCurrency = () => BASE_CURRENCY;

export const getRandomJobs = (jobsNumber) => (new Array(jobsNumber)).fill().map((_, index) => ({
  id: index + 1,
  title: JOB_TITLES[0],
  description: SHORT_DESCRIPTION,
  tags,
  skills,
  budget: getRandomBudget(),
  currency: getRandomCurrency(),
  deadline: new Date(),
}));
