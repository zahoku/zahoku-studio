import { describe, expect, it } from 'vitest';
import { HANJA_BREAKDOWN, STUDIO } from './identity';

describe('스튜디오 정체성 상수', () => {
  it('표기 규약: slug는 zahoku-studio, 한자는 自好久', () => {
    expect(STUDIO.slug).toBe('zahoku-studio');
    expect(STUDIO.nameHanja).toBe('自好久');
    expect(STUDIO.domain).toBe('zahoku.com');
    expect(STUDIO.url).toBe('https://zahoku.com');
  });

  it('자호구 한자 풀이가 세 글자 모두 포함된다', () => {
    expect(HANJA_BREAKDOWN).toHaveLength(3);
    expect(HANJA_BREAKDOWN.map((h) => h.char)).toEqual(['自', '好', '久']);
  });

  it('모토는 한국어/영문 양쪽 모두 정의된다', () => {
    expect(STUDIO.motto.ko).toBeTruthy();
    expect(STUDIO.motto.en).toBeTruthy();
  });
});
