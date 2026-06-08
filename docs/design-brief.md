# zahoku-studio — Design Brief

> 외부 디자인 도구(Canva·Midjourney·Imagen·디자이너·AI 챗)에 넘길 때 사용하는 프롬프트 모음.
> 도구에 맞춰 A / B / C 중 골라서 그대로 복사해 사용한다.

---

## A. 디자이너 / 긴 AI 챗 (Claude · Gemini · ChatGPT) 용 — Brand Brief

> 그대로 복붙. 한국어 + 영어 병기.

```
# Brand: zahoku-studio

A solo + AI software studio website. Built on three Chinese characters:
- 自 (jì / from within): will sourced inside, not commanded from outside
- 好 (hǎo / favor): what you discern by your own taste, not given approval
- 久 (jiǔ / endure): value proven by time, not by speed

Motto: "What you love from within, sustained over time."
한국어: 스스로 좋아하는 것을 오래도록.

## Tone & Philosophy
- Minimal, confident, slightly arrogant brand statement
- Distant — not friendly, not salesy
- East-meets-West: hanji + sumi ink + modern Swiss typography
- Wabi-sabi adjacent: time-honored, slow, deliberate
- "No pain no gain" — value comes from time, not shortcuts
- The studio refuses categories. No "we do web/mobile/games" listing.

## What to AVOID
- The Korean reading "자호쿠" as text — the wordmark is always "zahoku-studio" lowercase
- Founder name or photo (no personal identification)
- Service catalogs / discipline lists
- Friendly approachable tone, emojis, exclamation marks
- Stock photos, gradients, neon, glow, skeuomorphism
- Heavy digital noise — texture must read as paper, not as pixel grain

## Visual Direction

Color palette (light):
- Paper:  #f4ede0   (warm hanji)
- Ink:    #1c1917   (deep sumi)
- Accent: #6b3f1d   (sumi-and-walnut brown)
- Line:   #d9cfbb

Color palette (dark):
- Paper:  #181513   (aged dark hanji)
- Ink:    #f0e8d8   (warm beige)
- Accent: #c89b6a

Typography:
- Korean body:    Pretendard Variable
- Hanja heading:  Noto Serif KR or Source Han Serif Korean, weight 900
- Mono accents:   ui-monospace / SF Mono

Hero visual (the heart of the site):
- The three characters 自好久 placed HUGE on the background
- Each character slightly rotated (-8°, +5°, -3°)
- Characters overlap; intersections darken via multiply blend
  (like layered ink stamps on aged paper)
- Background paper has subtle fiber/grain texture and a soft radial vignette
- Foreground content sits on top: lowercase wordmark, motto,
  three hanja explanation cards, CTAs

Page structure:
- Small fixed header: "zahoku-studio" lowercase wordmark on the left,
  nav `home / project (disabled) / play →` on the right, theme toggle
- Main: motto headline → three hanja cards
  (massive hanja in accent brown, short label, longer line)
  → CTAs (project disabled tag, play→ active linking out to play.zahoku.com)
- Footer: © year + zahoku-studio + 自好久

Mobile-first: the hanja background must work on a 390px screen
without overwhelming the content. Cards stack vertically.

## References (mood)
- Book: "Hanzi Kanji Hanja 2" (Viction:ary) — contemporary East Asian typography
- Fonts: Aokami, Tzuyuha, The Last Shuriken (ink-wash East Asian type)
- Sites: anthropic.com, claude.ai (calm minimal warmth)
- Aesthetic: Korean hanji craft, Japanese tea ceremony,
  sumi calligraphy, letterpress impression

## Deliverables I want back
1. Hero section mockup — desktop (1440×900) AND mobile (390×844)
2. Color swatches with hex values
3. Type system: H1 / H2 / Body / Caption / Mono with sizes
4. Hanja background placement study — 3~5 variations of rotation/scale/blend
5. Full home page + /play page mockup
6. Notes on what's intentional (rationale for any non-obvious choice)
```

---

## B. AI 이미지 gen (Midjourney · Imagen · DALL-E) 용 — 키워드 프롬프트

> 토큰 한정. 컷별로 따로 입력.

### B-1. Hero section (데스크탑)

```
minimalist brand website hero section, "zahoku-studio" lowercase wordmark
in modern sans, three large Chinese characters 自好久 overlapping as inked
stamps with slight rotation, aged hanji paper background warm beige cream
#f4ede0, deep walnut brown ink #6b3f1d, subtle paper fiber texture,
letterpress impression, East Asian calligraphy meets Swiss typography,
wabi-sabi, confident gallery brand statement, no photos no gradients,
ample whitespace, 16:10 desktop layout
```

### B-2. Mobile composition

```
minimalist brand website mobile screen 9:19, "zahoku-studio" lowercase
wordmark top, three Chinese characters 自好久 stacked vertically as
background ink stamps with rotation, warm hanji paper texture, deep brown
ink #6b3f1d on cream #f4ede0, Korean text overlay, content card layout,
East Asian craft brand
```

### B-3. 한지 텍스처 이미지 (이전에 못 만들었던 그거)

```
seamless tileable hanji Korean traditional mulberry paper texture,
1024x1024 PNG, warm cream ivory base #f4ede0, visible elegant fiber
strands of pulp scattered randomly, subtle tonal unevenness, no
watermarks no text no creases, handmade paper not industrial, slight
aged but clean feel, must tile seamlessly in 2x2 grid
```

---

## C. Canva Magic Design / 짧은 input AI 용 — 압축 프롬프트

```
"zahoku-studio" — 자호구(自好久) 브랜드 사이트. 한지 위에 묵향, 거대한
자호구 한자를 인주 도장처럼 겹쳐 깐 배경. 톤은 미니멀 + 약간 거만한 brand
statement. 색은 한지 베이지(#f4ede0) + 진한 먹+갈(#6b3f1d). 폰트는
Pretendard(한글) + Noto Serif KR Heavy(한자). 와비사비 미학 + East-
meets-West 모던 타이포. 친근한 톤 / 분야 리스트 / 사람 사진 / 그라데이션
/ 자호쿠 한글 표기는 피한다. 데스크탑 + 모바일 hero section mockup.
```

---

## D. 첨부할 자료 (도구가 받아주면)

도구에 같이 넣으면 정확도가 크게 오른다.

| 자료 | 내용 | 비고 |
|------|------|------|
| 자호구 한자 SVG/PNG | `自`, `好`, `久` 큰 사이즈 단일 글자 (Noto Serif KR 900) | 필요 시 생성 가능 |
| 컬러 스와치 이미지 | `#f4ede0 #1c1917 #6b3f1d #d9cfbb` 4색 한 장 | 필요 시 생성 가능 |
| 현재 사이트 스크린샷 | `https://zahoku.com` 캡처 + "이 출발점에서 더 강하게" | 사용자 캡처 |
| 레퍼런스 사이트 스크린샷 | 좋아하는 brand 사이트 1~3장 — 톤 정조준 | 사용자 큐레이션 |

---

## E. 받은 시안 검토 체크리스트

| 항목 | OK 신호 | 거절 신호 |
|------|---------|----------|
| 한자 비주얼 | 그래픽처럼 보임, 종이에 인주 박힌 듯 | 단순 큰 폰트 글자 |
| 한지 톤 | 따뜻한 베이지, 자연스러운 결 | 흰 종이 / 디지털 그라데이션 |
| 거만함 | 거리감 있는 brand statement | 환영·세일즈 톤 |
| 모바일 | 한자 + 콘텐츠 둘 다 균형 | 한자가 콘텐츠 덮음 |
| 톤 일치 | 와비사비 + 시간 미학 | 트렌디·SaaS 느낌 |

---

## F. 본문 카피 톤 — 자/호/구 시리즈 (참고)

도구가 카피도 받아야 하면 함께 첨부. 6세트 중 사용자 결정.

| 세트 | 自 | 好 | 久 | 인상 |
|------|----|----|----|------|
| **A. 운율** | 시작은 안에서 | 안목도 안에서 | 끝은 오래에서 | 부드러움·균형 *(현재 사이트)* |
| **B. 단언** | 첫 자리는 안 | 진심이 첫 기준 | 오래여야 증명된다 | 단단함·각인 |
| **C. 부정/거만** | 바깥에 답이 없다 | 남의 좋음을 거른다 | 쉬운 길은 없다 | 강함·brand statement |
| **D. 동사 능동** | 안에서 솟는다 | 스스로 가려낸다 | 시간을 견딘다 | 행위·생동 |
| **E. 시적** | 자기 안의 자유 | 마음이 알아본다 | 시간 위에 쌓는다 | 우아·서정 |
| **F. 명제** | 안에서 솟는 것만 진짜다 | 마음으로 알아본 것만 들인다 | 오래 견딘 것만 가치다 | 단언+풀이 |

모토는 모든 세트 공통: **스스로 좋아하는 것을 오래도록.**

---

## 참고 사이트 (서치)

- [Hanzi Kanji Hanja 2 — Viction:ary](https://victionary.com/products/hanzi-kanji-hanja-2)
- [Top Branding Design Trends 2026 — Design & Paper](https://www.designandpaper.com/top-3-branding-design-trends-to-watch-in-2026-texture-typography-earthy-colors/)
- [15 Best Japanese-Style Fonts 2026 — Advise Graphics](https://www.advisegraphics.com/japanese-fonts)
- [Rough Paper Texture with SVG Filters — Chokcoco / CodePen](https://codepen.io/Chokcoco/pen/OJWLXPY)
