import { describe, expect, it } from 'vitest';
import { HANJA_BREAKDOWN, STUDIO } from './identity';

describe('스튜디오 정체성 상수', () => {
  it('스튜디오 표기가 IDENTITY.md 규약과 정합한다', () => {
    expect(STUDIO.nameKo).toBe('자호쿠 스튜디오');
    expect(STUDIO.nameEn).toBe('Zahoku Studio');
    expect(STUDIO.nameHanja).toBe('自好久');
    expect(STUDIO.domain).toBe('zahoku.com');
    expect(STUDIO.url).toBe('https://zahoku.com');
  });

  it('자호구 한자 풀이가 세 글자 모두 포함된다', () => {
    expect(HANJA_BREAKDOWN).toHaveLength(3);
    expect(HANJA_BREAKDOWN.map((h) => h.char)).toEqual(['自', '好', '久']);
  });
});
