import { describe, expect, it } from 'vitest';
import { STUDIO, WORKS } from './identity';

describe('스튜디오 정체성 상수', () => {
  it('표기 규약: slug는 zahoku-studio, 한자는 自好久', () => {
    expect(STUDIO.slug).toBe('zahoku-studio');
    expect(STUDIO.nameHanja).toBe('自好久');
    expect(STUDIO.domain).toBe('zahoku.com');
    expect(STUDIO.url).toBe('https://zahoku.com');
  });

  it('tagline·contact·shortDescription이 정의된다', () => {
    expect(STUDIO.tagline).toBeTruthy();
    expect(STUDIO.contact).toMatch(/@zahoku\.com$/);
    expect(STUDIO.shortDescription).toBeTruthy();
  });

  it('WORKS는 haruip · glyfy · play 3개로 구성된다', () => {
    expect(WORKS).toHaveLength(3);
    expect(WORKS.map((w) => w.name)).toEqual(['haruip', 'glyfy', 'play']);
  });

  it('모토는 한국어로 정의된다 (내부 정체성용)', () => {
    expect(STUDIO.motto.ko).toBe('스스로 좋아하는 것을 오래도록');
  });
});
