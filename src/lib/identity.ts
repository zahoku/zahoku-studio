/**
 * zahoku-studio 정체성 상수.
 * 사이트 카피의 SSOT.
 */
export const STUDIO = {
  slug: 'zahoku-studio',
  nameHanja: '自好久',
  domain: 'zahoku.com',
  url: 'https://zahoku.com',
  tagline: 'We think, decide, and build — with people at the center.',
  motto: {
    ko: '스스로 좋아하는 것을 오래도록',
  },
  shortDescription: 'Zahoku Studio — software designed and built around the human.',
  contact: 'studio@zahoku.com',
} as const;

export const WORKS = [
  { name: 'haruip', kind: '자동 일기', status: 'soon' as const },
  { name: 'glyfy', kind: '웹 타이핑 게임', status: 'soon' as const },
  { name: 'play', kind: '웹 미니게임', status: 'soon' as const },
] as const;
