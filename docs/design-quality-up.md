# zahoku-studio — Design Quality-Up 계획

> Claude Code / Anthropic 공식 사이트와 2026 디자인 트렌드를 기준으로
> 현재 zahoku.com 디자인을 **brand statement급**으로 끌어올리기 위한 리서치 + 진단 + 개선 제안.
>
> 작성일: 2026-06-04 · 다음 갱신: 1차 개선 적용 후

---

## 1. 왜 Anthropic / Claude 톤을 기준으로 보는가

자호쿠 스튜디오의 IDENTITY가 지향하는 톤(미니멀·따뜻함·brand statement·시간 의식)이
**Anthropic이 최근 5년간 시장에서 정착시킨 "warm minimalism"** 과 같은 결을 공유한다.

- Anthropic은 "AI를 차갑고 기술적인 것"으로 보던 시장에 **세리프 + 크림 베이지 + 친근한 일러스트**로
  반대 톤을 박아 brand differentiator로 만들었다 ([type.today](https://type.today/en/journal/anthropic)).
- 이는 자호쿠의 "스스로 좋아하는 것을 오래도록 (自好久)"이 표방하는
  **거만하면서도 따뜻한, 시간을 머금은 brand statement** 와 정확히 같은 방향성.
- → **벤치마킹할 가치 있음.** 단순 따라하기가 아니라 "같은 방향의 우수 사례"로 본다.

---

## 2. Anthropic / Claude 디자인 시스템 — 사실 정리

### 2.1 컬러

| 토큰 | Hex | 용도 |
|------|-----|------|
| Warm cream (light bg) | `#F0ECE0` | claude.ai 라이트 모드 배경 |
| Brand warm beige | `#D4A27F` | 브랜드 액센트 (말린 살구) |
| Terracotta accent | `#C96442` | Sparkle 아이콘 등 강조 |
| Charcoal | `#191919` | 본문 |
| Dark bg | `#2B2A27` | 다크 모드 배경 |

출처: [Loftlyy — Anthropic Brand](https://www.loftlyy.com/en/anthropic), [Mobbin — Claude Brand Colors](https://mobbin.com/colors/brand/claude), [MindStudio — Claude Design](https://www.mindstudio.ai/blog/claude-design-avoid-generic-ai-aesthetics).

**현재 zahoku 컬러와 비교**:

| 토큰 | zahoku | Anthropic | 평가 |
|------|--------|-----------|------|
| 배경 (light) | `#f4ede0` | `#F0ECE0` | 거의 동일 ✓ |
| 본문 (light) | `#1c1917` | `#191919` | 거의 동일 ✓ |
| 액센트 | `#6b3f1d` (먹+갈) | `#C96442` (테라코타) | **zahoku가 더 어둡고 묵직** |
| 배경 (dark) | `#181513` | `#2B2A27` | zahoku가 더 깊음 |

→ **컬러 시스템은 이미 잘 잡혀 있다.** 자호쿠는 더 "동양 묵향"에 가깝고, Anthropic은 더 "이탈리아 카페·라떼 톤"이다.
방향성 다르고 둘 다 valid. 변경 불필요.

### 2.2 타이포

| 영역 | Anthropic 폰트 | 특징 |
|------|---------------|------|
| 헤드라인 | **Styrene B** (Berton Hasebe, Commercial Type) | 좁은 글자폭, 약간 squarish, 캐릭터 강함 |
| 본문 | **Tiempos Text** (Klim Type Foundry) | modern serif, 약간 quirky한 따뜻함 |
| 모노 | (system) | code/UI 액센트 |

출처: [type.today](https://type.today/en/journal/anthropic), [FontOfWeb — Anthropic Pricing](https://www.fontofweb.com/pin/1469).

**핵심 인사이트**:
- Anthropic은 **세리프를 본문에** 쓴다. 헤드라인이 아니라 본문. (역발상)
- 이게 "메신저인데 잡지 같은 느낌"을 만든다 — claude.ai의 시그니처.
- 어시스턴트 메시지는 **버블/아바타 없이 full-width plain serif** 로 cream 배경 위에 떨어진다 ([MindStudio](https://www.mindstudio.ai/blog/claude-design-avoid-generic-ai-aesthetics)).

**현재 zahoku 타이포**:
- 본문: Pretendard Variable (모던 sans, 신뢰감 있음, 한국적 평이함)
- 세리프: Noto Serif KR (한자 영역만)
- 모토 hero: Pretendard `font-semibold tracking-tight` (sans-serif)

→ **여기가 가장 큰 quality-up 여지.** 자세한 제안은 §4-A.

### 2.3 레이아웃·여백·micro-interaction

- **에디토리얼 톤**: 카드·박스를 피하고 텍스트가 종이 위에 떨어진 듯 평평한 배치 ([assistant-ui Claude Clone](https://www.assistant-ui.com/examples/claude)).
- **여백 리듬 차등**: 섹션마다 호흡 다름. 헤드라인 위 80~120px, 본문 사이는 짧게, 다음 섹션은 다시 깊게.
- **모서리 둥글지 X**: 버튼·인풋도 매우 얇은 border, 거의 사각. "letterpress 같은 평면감" 강조.
- **모션은 느리고 적게**: hover transition 300~500ms, 부드러운 ease. 화려한 transform 없음.

---

## 3. 2026 디자인 트렌드 (지지 근거)

### 3.1 Warm Minimalism = 2026 메인스트림

> "2026 marks the end of sterile white space. Warm Minimalism introduces texture, earthy tones, and high-contrast serifs to build trust."
> — [Design & Paper, 2026 Branding Trends](https://www.designandpaper.com/top-3-branding-design-trends-to-watch-in-2026-texture-typography-earthy-colors/)

자호쿠가 이미 가는 방향과 정확히 일치.

### 3.2 Earthy Palette

> Terracotta, deep teals, warm "truffle" browns replacing sterile corporate blues.
> Warm browns, muted greens, soft terracottas, sun-washed neutrals.
> — [Kittl — Design Trends 2026](https://www.kittl.com/blogs/graphic-design-trends-2026/)

자호쿠의 `#6b3f1d` 먹갈색이 이 카테고리에 그대로 들어감.

### 3.3 Expressive Typography

> Typography stepping fully into the spotlight as the voice of brands.
> Custom typefaces and expressive lettering becoming central to brand personalities.
> — [Agentr.ee — Visual Identity Minimalism 2026](https://www.agentr.ee/blog/personal-branding-aesthetics/visual-identity-minimalism-is-back-in-2026)

자호쿠 모토 + 자호구 한자가 type-led brand인데 **현재 타이포가 평이함**.
→ §4-A로.

### 3.4 Texture as Differentiator

Sterile flat design은 끝났다. 종이·결·미세한 noise·letterpress impression이 신뢰의 신호.
자호쿠는 이미 `PaperTexture.astro`로 SVG turbulence 깔고 있음 — 방향 맞음.

---

## 4. 현재 zahoku.com 진단 + 개선 제안 (우선순위)

### 🔴 HIGH — Brand statement급으로 만들기 위해 가장 큰 효과

#### A. 모토 hero에 **세리프 적용**

**현재**:
```astro
<h1 class="text-3xl md:text-5xl font-semibold tracking-tight leading-snug">
  {STUDIO.motto.ko}.
</h1>
```
→ Pretendard semibold sans. 단단하지만 **brand voice가 평이**. AI 스타트업·SaaS 톤과 구분 어려움.

**제안**:
```astro
<h1
  class="text-4xl md:text-6xl font-serif tracking-tight leading-[1.15]"
  style="font-weight: 500;"
>
  {STUDIO.motto.ko}.
</h1>
```

근거:
- Anthropic은 본문/헤드라인 양쪽 세리프 → 잡지·문학·시간 의식
- 모토 `"스스로 좋아하는 것을 오래도록"` 은 **시적 statement**. 세리프가 맞음.
- 현재 본문에는 Noto Serif KR 안 쓰고 한자에만 쓰는데, **모토 한 줄에 한정 적용**하면 sans/serif 대비 강해짐.
- size를 키워서 (text-6xl) breathing room 확보. 페이지에 모토가 "지배자"가 됨.

→ Pretendard sans를 **모든 텍스트의 디폴트**로 두는 건 유지, **hero 모토 + 자호구 한자**만 serif.

#### B. 여백 리듬 — 의도된 호흡으로 재편

**현재**: section마다 `pt-8 md:pt-16 pb-10 md:pb-16` / `mt-14 md:mt-20` — 거의 균일.

**제안 패턴** (Anthropic 톤):
1. 모토 hero **위 여백 깊게**: `pt-20 md:pt-32` — 들어오자마자 침묵
2. 모토 ↔ 자호구 3카드 사이: `pt-16 md:pt-24` — 큰 호흡
3. 자호구 카드 안에서 한자 ↔ short label 간격: `mt-6` → `mt-8` (한 호흡 더)
4. CTA 영역 위: `mt-20 md:mt-28` — 깊게. CTA는 "오래 머문 끝의 행동"이지 즉시 클릭 유도가 아님

→ 결과: 페이지가 **느려진다**. 모토 hero에서 한 박자 멈추고, 자호구 한자 카드에서 또 한 박자.
"시간 위에 쌓는다" 메시지가 layout 자체로 표현됨.

#### C. 한자 배경 — opacity·blend 재조정

**현재**: `rgba(60,40,20,0.09)` 매우 옅음. ghost effect.

**문제**: 의도된 미묘함은 좋지만, **한자 그래픽이 브랜드 시그니처임에도 거의 안 보임**. brand statement 강도 약함.

**제안 (light mode)**:
```css
.bg-hanja-char {
  color: rgba(107, 63, 29, 0.13); /* accent brown 베이스 + 살짝 진하게 */
  mix-blend-mode: multiply;
  /* 인주 도장 느낌 — 미세한 inner texture */
  filter: contrast(1.05);
}
```

또는 더 과감하게 **opacity 0.18 + 한자 1개만 페이지당** (자=홈, 好=about, 久=play):
- 한 페이지에 한자 1개를 **letterpress impression처럼 진하게 박음**
- 콘텐츠가 한자의 여백을 비껴 흐름
- 그래픽이 brand의 "도장"이 됨

→ 현재의 세 글자 동시 배치(모든 페이지에서)는 **brand 메시지 압축**에 좋지만, 페이지마다 한 글자 강조 방식은 **방문자의 페이지 이동마다 brand re-imprint** 효과.

**의사결정 필요**: 두 방향 중 어느 쪽인지 사용자 선택.

### 🟡 MEDIUM — quality-up 효과 큼, 비용 낮음

#### D. 자호구 한자 카드 — letterpress impression 디테일

**현재**: 단순 grid + 세리프 한자 + 라벨 + 설명. 평면적.

**제안**:
- 각 한자에 미세한 **paper-press 효과**: `text-shadow: 0 0.5px 0 rgba(255,255,255,0.4), 0 -0.5px 0 rgba(0,0,0,0.08)` — 종이에 도장 박힌 듯
- 카드 사이 vertical divider 추가 (md+ 화면): `border-l border-[var(--color-line)]/40` 얇게
- 한자 글자 hover 시 0.5도 살짝 회전 + 0.5% scale up (도장 누르는 듯한 미세 모션, 400ms ease)

```astro
<div class="relative md:px-6 md:not-first:border-l md:not-first:border-[var(--color-line)]/40">
  <div
    class="font-serif text-7xl md:text-8xl text-[var(--color-accent)] leading-none transition-transform duration-500 hover:rotate-[0.5deg] hover:scale-[1.01]"
    style="font-weight: 900; text-shadow: 0 0.5px 0 rgba(255,255,255,0.3);"
  >
    {hanja.char}
  </div>
  ...
</div>
```

#### E. CTA 버튼 톤 — letterpress 느낌으로

**현재**: `bg-[var(--color-ink)] text-[var(--color-ink-inverse)]` → 단순 평면 검은 버튼.

**제안**:
- border-radius 줄이기: `rounded-md` → `rounded-sm` (`4px` → `2px`) — 더 사각, 도장 느낌
- 호버 transition을 길게: `transition-colors` → `transition-all duration-500 ease-out`
- 호버 시 ink → accent 색 변화 + 살짝 letterpress 느낌으로 `box-shadow: inset 0 1px 0 rgba(255,255,255,0.05)`
- "play →" 화살표 polish: 호버 시 `translate-x-0.5` → 더 긴 거리 `translate-x-1` + 화살표만 색 변화

#### F. Footer를 brand statement의 마지막 인사로

**현재 추정** (Footer.astro 미확인): 단순 `© year + zahoku-studio + 自好久`.

**제안**:
- 모토 한 줄 다시 등장: `스스로 좋아하는 것을 오래도록.` — serif, 작게, 중앙
- 그 아래 `自好久` 자호구 한자 작게 (`tracking-wider`)
- 가장 아래 `© 2026 zahoku-studio` 모노 small
- 3단 구조로 페이지의 마지막을 brand re-statement로 마감

#### G. OG 이미지 정밀화

**현재**: `/og-image.png` (구체적 디자인 미확인).

**제안**:
- 정사각 / 1200×630 / cream 배경 + 자호구 3한자 letterpress impression + 하단 wordmark `zahoku-studio`
- Anthropic OG처럼 brand-led, 카피 없이 시각만으로 statement
- 디자인 brief의 B-1 프롬프트(`docs/design-brief.md`)로 이미지 1장 생성 → 정적 사용

### 🟢 LOW — 디테일·polish

#### H. 다크 모드 한자 — 더 따뜻하게

**현재**: `color: rgba(240, 220, 190, 0.06)` 매우 옅음.

**제안**:
- 다크에서 한자가 **불에 비친 종이** 느낌으로: opacity 0.10 + `mix-blend-mode: screen` 유지
- 미세한 warm glow: `text-shadow: 0 0 40px rgba(200, 155, 106, 0.05)` (accent 색 살짝 발광)

#### I. 모바일 한자 배경 균형

**현재**: `font-size: 95vw` — 매우 크게 깔림. 콘텐츠 위협.

**제안 (모바일)**:
- 한자 1개만 노출 (自) — top-right corner stamp 식
- 나머지 2글자 (好·久)는 hide on mobile (`@media (max-width: 640px) { display: none; }`)
- 한 글자만이라도 **brand seal**처럼 강하게 보이는 게 세 글자가 흐릿하게 깔리는 것보다 임팩트 큼

#### J. Favicon — 한자 1글자(自)로

현재 SVG favicon 내용 미확인. 자호구 첫 글자 `自`를 단일 글자로 fav 만들면 brand identity 강함.

#### K. `prefers-reduced-motion` 존중

micro-interaction(hover rotate/scale) 추가 시 반드시:
```css
@media (prefers-reduced-motion: reduce) {
  .bg-hanja-char,
  .hanja-card { transition: none !important; transform: none !important; }
}
```

---

## 5. 실행 우선순위 (제안)

| # | 항목 | Why | 복잡도 |
|---|------|-----|--------|
| 1 | A. 모토 hero 세리프 적용 | brand voice 즉시 강해짐 | 단순 |
| 2 | B. 여백 리듬 재편 | 페이지가 느려져 brand statement 톤이 됨 | 단순 |
| 3 | F. Footer 재구성 | 페이지 마무리가 brand 인사가 됨 | 단순 |
| 4 | D. 한자 카드 letterpress 디테일 | 그래픽 품질 큰 향상 | 보통 |
| 5 | C. 한자 배경 강도·방식 결정 | brand statement 강도 핵심 — 사용자 결정 필요 | 보통 |
| 6 | E. CTA letterpress 톤 | polish | 단순 |
| 7 | I. 모바일 한자 균형 | 모바일 UX 개선 | 단순 |
| 8 | H. 다크 모드 한자 정조 | dark 톤 brand 일치 | 단순 |
| 9 | G. OG 이미지 정밀화 | 외부 공유 시 brand impression | 외부 도구 필요 |
| 10 | J. Favicon 自 단일 글자 | brand seal 일관성 | 단순 |
| 11 | K. reduced-motion 가드 | 접근성 필수 | 단순 |

**핵심 결정 포인트** (사용자가 정해야 진행 가능):
- **C-1 vs C-2**: 한 페이지에 한자 3개 동시 (현재 유지하며 opacity만 올림) vs 페이지별 한자 1개 (자/好/久 분리)
- **A에서 세리프 폰트**: Noto Serif KR (현재 활용) vs 다른 한국어 세리프 (예: Source Han Serif, Apple SD 산돌고딕 Neo serif계열)
- **D에서 hover 모션 추가 여부**: 의도된 정적 brand이므로 hover 없이 가는 선택도 valid

---

## 6. 출처

### Anthropic / Claude 디자인
- [Styrene in use: ANTHROP\C — type.today](https://type.today/en/journal/anthropic)
- [Anthropic brand colors hex codes, font, & logo — Loftlyy](https://www.loftlyy.com/en/anthropic)
- [Claude Brand Color Palette — Mobbin](https://mobbin.com/colors/brand/claude)
- [anthropic.com/pricing Design Inspiration — FontOfWeb](https://www.fontofweb.com/pin/1469)
- [Claude Design: How to Build Branded Interfaces Without Generic AI Aesthetics — MindStudio](https://www.mindstudio.ai/blog/claude-design-avoid-generic-ai-aesthetics)
- [Claude Clone — assistant-ui](https://www.assistant-ui.com/examples/claude)
- [My Styrene Soul — Dear Designer](https://deardesigner.substack.com/p/my-styrene-soul-a-short-affair-with)

### 2026 디자인 트렌드
- [Top 3 Branding Design Trends to Watch in 2026 — Design & Paper](https://www.designandpaper.com/top-3-branding-design-trends-to-watch-in-2026-texture-typography-earthy-colors/)
- [10 Graphic Design Trends 2026 — Kittl Blog](https://www.kittl.com/blogs/graphic-design-trends-2026/)
- [Visual Identity: Minimalism is Back in 2026 — Agentree](https://www.agentr.ee/blog/personal-branding-aesthetics/visual-identity-minimalism-is-back-in-2026)
- [Beyond the Surface: Branding & Design Trends Shaping 2026 — TheBrandCraft](https://www.thebrandcraft.com/post/beyond-the-surface-branding-design-trends-shaping-2026)
- [Design Trends 2026: What's Next — DesignMantic](https://www.designmantic.com/blog/design-forecast-2026/)

---

## 7. 다음 액션

1. 사용자가 **§5 결정 포인트** 답
   - C-1 / C-2 한자 배경 방식
   - A 세리프 폰트 선택
   - D hover 모션 도입 여부
2. 결정 후 todo 등록 → 우선순위 1~3 (가장 효과 큰 것) 먼저 한 묶음으로 적용
3. 로컬 dev에서 시각 확인 → 사용자 OK → 배포
   ([feedback_visual_changes_local_review.md](../../../.claude/projects/-Users-anthonybang-workspace-zahoku-studio/memory/feedback_visual_changes_local_review.md) 룰 준수)
