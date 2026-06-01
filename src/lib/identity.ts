/**
 * 자호쿠 스튜디오 정체성 상수.
 * IDENTITY.md의 표기 규약과 1:1 정합.
 */
export const STUDIO = {
  nameKo: '자호쿠 스튜디오',
  nameEn: 'Zahoku Studio',
  nameHanja: '自好久',
  domain: 'zahoku.com',
  url: 'https://zahoku.com',
  founder: 'Anthony Bang',
  motto: {
    ko: '스스로 좋아하는 것을 오래도록',
    en: 'Make what you love, for as long as you can.',
  },
  shortDescription: {
    ko: 'AI를 팀원으로 한 1인 소프트웨어 스튜디오. 인간을 이롭게 하는 가치를 오래 만든다.',
    en: 'A solo + AI software studio. Software that helps people, built to last.',
  },
} as const;

export const HANJA_BREAKDOWN = [
  {
    char: '自',
    ko: '자',
    jp: 'ji',
    meaning: '스스로, 자기 자신',
    nuance: '외부 강요가 아닌 자발성',
  },
  {
    char: '好',
    ko: '호',
    jp: 'kō',
    meaning: '좋아하다, 사랑하다',
    nuance: '단순한 호감을 넘어 능동적 애호',
  },
  {
    char: '久',
    ko: '구',
    jp: 'kyū',
    meaning: '오래다, 길다, 지속하다',
    nuance: '일시적이 아닌 항구성·지속성',
  },
] as const;
