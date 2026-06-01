/**
 * zahoku-studio 정체성 상수.
 * 사이트 카피의 SSOT.
 */
export const STUDIO = {
  slug: 'zahoku-studio',
  nameHanja: '自好久',
  domain: 'zahoku.com',
  url: 'https://zahoku.com',
  motto: {
    ko: '스스로 좋아하는 것을 오래도록',
    en: 'Self. Love. Endure.',
  },
  tagline: {
    ko: '카테고리 없음. 만드는 것은 오래간다.',
    en: 'No category. Made to last.',
  },
  shortDescription: '自好久 — Software studio. Built without category. Made to last.',
} as const;

export const HANJA_BREAKDOWN = [
  {
    char: '自',
    short: '스스로',
    long: '외부 강요가 아닌 자발성. 자기 의지로 만든다.',
  },
  {
    char: '好',
    short: '좋아하다',
    long: '단순한 호감을 넘어 능동적 애호. 지표 이전에 인간을 이롭게 하는 것.',
  },
  {
    char: '久',
    short: '오래',
    long: '일시적이 아닌 항구성. 유행 추종 없이 오래 지속될 가치.',
  },
] as const;
