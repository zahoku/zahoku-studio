# Claude Design (Anthropic Labs 신규 제품) — 리서치 정리

> Anthropic Labs가 2026-04-17 출시한 **AI 디자인 제품** `Claude Design`에 대한 리서치.
> "Claude 브랜드의 디자인 시스템"이 아니라 **Claude로 디자인을 만드는 도구** 자체.
> 자호쿠 스튜디오 사이트 디자인 퀄리티업에 이 제품을 어떻게 쓸 수 있는지가 핵심.
>
> 작성일: 2026-06-05

---

## 0. TL;DR

| 축 | 내용 |
|----|------|
| 제품 | [Claude Design](https://www.anthropic.com/news/claude-design-anthropic-labs) — claude.ai/design |
| 출시 | 2026-04-17, research preview |
| 모델 | Claude Opus 4.7 (vision) |
| 접근 | Pro / Max / Team / Enterprise 구독자 (Free 불가). 추가 비용 X, 사용량은 구독 한도 안에서 |
| 만드는 것 | 프로토타입, 슬라이드, 원페이저, 마케팅 시안, 브랜드 사이트 디자인 |
| 못 만드는 것 | **사진(photorealistic image)**, Figma export, real-time co-editing |
| 출력 | URL, 폴더, Canva, PDF, PPTX, standalone HTML. Claude Code로 handoff 번들 |
| 진짜 강점 | (1) brand kit 등록 후 자동 일관성 (2) Claude Code로 handoff → 코드까지 직결 |
| 자호쿠 사용처 | OG image, slide deck, 페이지 디자인 variation 실험, **Claude Code handoff로 Astro 페이지 시안→코드** |

---

## 1. 제품이 뭔가

> "Lets you collaborate with Claude to create polished visual work like designs, prototypes, slides, one-pagers, and more."
> — [Anthropic 공식](https://www.anthropic.com/news/claude-design-anthropic-labs)

**자연어 프롬프트 → polished visual artifact** 도구.
Claude.ai 채팅 안에서 디자인 결과물이 나오고, 슬라이더·인라인 코멘트·직접 편집으로 다듬는다.

**누구를 위해**:
- 디자이너 — 빠르게 여러 방향 탐색
- PM / 창업자 / 마케터 — 디자이너 없이 시안 제작
- 모든 팀 (product / marketing / executive)

**시장 포지션**: Figma·Canva와 정면 충돌. 출시 당일 Figma 주가 급락 ([Gizmodo](https://gizmodo.com/anthropic-launches-claude-design-figma-stock-immediately-nosedives-2000748071)).

---

## 2. 핵심 기능

### 2.1 입력 (여러 시작점)

| 입력 | 용도 |
|------|------|
| 텍스트 프롬프트 | 백지에서 시작 |
| 이미지·문서 업로드 | DOCX / PPTX / XLSX 변환 |
| codebase reference | 기존 코드 읽고 brand 추출 |
| 웹 캡처 도구 | 라이브 사이트 요소 그대로 가져옴 |

### 2.2 정제 (4가지 방법)

| 방법 | 토큰 소모 | 용도 |
|------|----------|------|
| 채팅 대화 | ✓ 토큰 씀 | 구조 변경, 큰 방향 변경 |
| 인라인 코멘트 | ✓ | 특정 요소만 수정 |
| 직접 텍스트 편집 | — | 본문 카피 수정 |
| **Tweaks 패널 슬라이더** | ✗ **무료** | 타이포·컬러·spacing·섹션 순서 조정 |

> **Tweaks 패널이 게임체인저**. Claude가 동적으로 변수를 노출해서 사용자가 슬라이더로 조정 — 채팅 토큰 안 씀.
> — [Muz.li — Claude Design One Week In](https://muz.li/blog/claude-design-one-week-in-hacks-best-practices-tips-from-real-world-use/)

### 2.3 출력 (export)

| 형식 | 메모 |
|------|------|
| 조직 내부 URL | 공유용 |
| 폴더 저장 | claude.ai 안 |
| Canva | 협업 계속 |
| PDF | 정적 산출물 |
| PPTX | 프레젠테이션 |
| standalone HTML | **이게 자호쿠 활용에 핵심** |
| Claude Code handoff bundle | **이게 진짜 강점** — 디자인 의도+구조 보존 |
| Figma | ❌ 직접 불가 ([Anima 우회 파이프라인](https://www.animaapp.com/blog/genai/how-to-go-from-claude-design-to-figma/) 있음) |

### 2.4 Brand 일관성 (자호쿠에 가장 중요)

> "When given access, Claude can also apply your team's design system to every project automatically, so the output is consistent."
> — Anthropic 공식

**작동 방식**:
1. 첫 세션에 brand kit 만든다 — codebase + design files 링크
2. Claude가 colors / typography / components 자동 추출
3. **이후 모든 프로젝트가 그 brand 시스템 자동 상속**

→ "highest-leverage investment" — 첫 세션을 brand kit 만드는 데 쓰는 게 가장 큰 이득 (Muz.li).

---

## 3. 가격·접근

| 플랜 | Claude Design 사용 |
|------|---------------------|
| Free | ❌ |
| Pro | ✅ 포함, 추가 비용 X |
| Max | ✅ 포함, 더 큰 한도 |
| Team | ✅ + 공유·콜라보 |
| Enterprise | ✅ + admin 설정 필요 (기본 off, Organization settings에서 enable) |

**weekly allowance 함정**: 한 사용자 후기 — **2개 풀 세션이 Pro 한도의 58% 소모**. 가볍지 않다.

접근: [claude.ai/design](https://claude.ai/design), **web-only** (모바일·iPad 앱 X).

---

## 4. 실전 베스트 프랙티스 (한계 + 함정 포함)

출처: [Muz.li 1주 후기](https://muz.li/blog/claude-design-one-week-in-hacks-best-practices-tips-from-real-world-use/),
[VentureBeat](https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma),
[The New Stack](https://thenewstack.io/anthropic-claude-design-launch/)

### 잘 작동하는 것

- **Dense first prompt** — audience + content + visual feel + constraints 다 한 번에. 모호한 프롬프트는 일관되게 실패
- **brand kit 먼저** — 첫 세션을 brand 추출에 투자
- **"show me three variations"** — 비교가 선형 정제보다 빠른 학습
- **이전 메시지 편집** — 새 메시지보다 토큰 절약
- **Tweaks 슬라이더 활용** — 채팅 토큰 0, 자유로운 실험
- **monorepo는 `/packages/ui` 지정** — root 가리키면 불필요한 코드로 토큰 낭비
- **Claude Code handoff** — 디자인 → 코드 동일 오후에 ship

### 작동하지 않는 것 (자호쿠 사용 전 알아야 함)

- ❌ **photorealistic 이미지 생성 안 됨** — SVG·HTML 렌더만. **한지 사진 텍스처, 인주 도장 사진 같은 사진성 자료는 직접 만들 수 없음**
- ❌ **Figma 직접 export 불가** — Anima 우회 필요
- ❌ **real-time co-editing 없음** — Figma 같은 동시 편집 X
- ❌ **public API 없음** — 자동화·variant 스크립팅 X (예고됨)
- ❌ **인라인 코멘트 가끔 안 먹음** — copy-paste로 채팅에 넣는 우회 필요

### "AI slop" 회피 (자호쿠 톤 유지에 직결)

- **Inter, Roboto, purple gradient 명시적으로 금지하라**
- 경쟁 사이트 참조하지 말고 **cultural aesthetic 언어** 사용 — "Swiss editorial", "solarpunk", "wabi-sabi", "Korean hanji" 같은 식
- "stock photo 안 됨" 명시
- **fonts 직접 지정** — serif display, mono 등 구체적

→ 자호쿠는 이미 [docs/design-brief.md](./design-brief.md) 에 dense brief 준비되어 있음. 그대로 첫 프롬프트로 활용 가능.

---

## 5. Figma / Canva / v0 / Lovable과의 위치

출처: [The Claude Codex 비교](https://claude-codex.fr/en/content/claude-design-vs-figma/), [ALM Corp](https://almcorp.com/blog/claude-design-anthropic-labs/)

| 도구 | 강점 | 한계 | 자호쿠 사용처 |
|------|------|------|---------------|
| **Claude Design** | 빠른 시안, Claude Code handoff, brand kit 자동 | 사진 X, Figma X, real-time X | **시안 → Astro 코드 직결** |
| **Figma** | 정밀 제어, 협업, 디자인 시스템 진리 | 빠른 생성 X | 자호쿠는 1인이라 X |
| **Canva** | 템플릿, 출판물, SNS 이미지 | 코드 X, 디자인 시스템 약함 | OG image 보조 가능 |
| **v0 (Vercel)** | React 시안 → 코드 | shadcn에 묶임 | Astro와 결합 약함 |
| **Lovable** | 풀 앱 prototype | 시각 정밀도 약함 | 자호쿠 톤에 맞지 않음 |

→ 자호쿠 사이트에선 **Claude Design + Claude Code 조합이 가장 자연스러움**. 이미 Astro 코드 있고, brand 톤 명확 ([IDENTITY.md](../IDENTITY.md), [docs/design-brief.md](./design-brief.md)).

---

## 6. 자호쿠 스튜디오에서 실제로 쓸 만한 시나리오

> 모든 시나리오는 **현재 자호쿠 톤 / IDENTITY 유지가 전제**.
> Claude Design은 빠른 변주·시안 도구이지 brand 결정을 위임하는 도구 X.

### 🔴 HIGH — 즉시 효용

#### S1. OG image 1장 제작

**문제**: 현재 `/og-image.png` 디자인 미확정. 외부 공유 시 brand impression 약함.

**Claude Design 활용**:
1. 첫 프롬프트로 [docs/design-brief.md §B-1](./design-brief.md) 그대로 입력 (`Hero section (데스크탑)` 프롬프트)
2. 추가 제약: "1200×630, no gradients, no photos, letterpress impression, Korean hanji texture"
3. "show me three variations" 명령
4. Tweaks 슬라이더로 한자 크기·배치·블렌딩 미세 조정
5. **export: standalone HTML** → 로컬에서 캡처 (Playwright `page.screenshot()`) → 1200×630 PNG

**한계**: 한지 사진 텍스처는 Claude Design이 못 만든다. 현재 [src/components/PaperTexture.astro](../src/components/PaperTexture.astro) SVG turbulence 그대로 활용하거나, 별도 hanji 이미지 [docs/design-brief.md §B-3](./design-brief.md) 프롬프트로 외부 이미지 생성 도구(Midjourney/Imagen) 사용.

#### S2. 페이지 시안 variation 실험 → Astro 코드로 handoff

**문제**: 홈 hero·자호구 카드 배치를 3~5가지 변주로 비교하고 싶을 때.

**Claude Design 활용**:
1. codebase 링크 (zahoku-studio 디렉토리 통째로 또는 `/src/pages` 지정)
2. brand kit 자동 추출 — 컬러·타이포·한자 그래픽 인지
3. "현재 홈 hero를 3가지 다른 배치로 보여줘. 한자 배경 분포 다양화. 톤은 유지."
4. 마음에 드는 variation 선택 → **Claude Code handoff bundle 생성**
5. 그 bundle을 Claude Code에 던지면 Astro 코드로 변환

**효과**: "디자인 → 코드" 사이클이 동일 오후에 끝남.

### 🟡 MEDIUM — 필요 시점에

#### S3. 자호쿠 스튜디오 소개 slide deck

외부에 자호쿠 소개해야 할 때 (외주 의뢰 응답, 협업 제안 등).

- 첫 프롬프트: IDENTITY.md 전체 + design-brief.md + "10장 slide deck, brand 톤 유지"
- export: **PPTX** 또는 Canva로 보내서 후속 작업

#### S4. /play 미니게임 페이지 시안

현재 [src/pages/play/index.astro](../src/pages/play/index.astro) 는 단순 redirect 안내. 향후 미니게임 갤러리 페이지 시안 만들 때:

- "미니게임 6개 grid + 한자 배경 유지 + brand 톤 유지" 프롬프트
- Tweaks로 grid 간격·카드 호버 톤 조정
- Astro Islands로 게임 임베드는 별도 작업 (Claude Design은 게임 자체는 못 만듦)

### 🟢 LOW — 보조적

#### S5. 페이지별 한자 1글자 변주 실험 ([design-quality-up.md §C 보류 항목](./design-quality-up.md))

자/好/久 페이지별 분리 옵션 결정 못 한 상태. Claude Design으로 3 variation 빠르게 보고 결정하면 의사결정 비용 ↓.

#### S6. Favicon 自 단일 글자 디자인 검토

현재 SVG favicon. 자호구 첫 글자 `自`를 brand seal로 변환 시안.

---

## 7. 자호쿠 brand kit Claude Design에 등록하기 (가이드)

추후 실제 사용 시 절차 메모.

### Step 1. brand 자료 정리 (이미 있는 것)

- [IDENTITY.md](../IDENTITY.md) — 정체성·톤 SSOT
- [docs/design-brief.md](./design-brief.md) — 외부 도구용 brief
- [docs/design-quality-up.md](./design-quality-up.md) — 디자인 방향성
- [src/lib/identity.ts](../src/lib/identity.ts) — 카피 SSOT
- [src/styles/global.css](../src/styles/global.css) — 컬러·폰트 토큰

### Step 2. claude.ai/design 첫 세션

1. codebase 링크 — zahoku-studio Github repo URL 또는 zip 업로드
2. 위 5개 파일 explicit하게 점프 가능하게 첨부
3. 첫 메시지: "이 codebase는 자호쿠 스튜디오 brand. IDENTITY.md와 design-brief.md를 읽고, brand kit으로 추출해줘. 컬러·타이포·한자 그래픽·톤 명시."
4. Claude가 brand kit 만든 후 검토 → 보정 → 저장

### Step 3. 이후 프로젝트는 자동 적용

OG image, slide, 페이지 시안 다 brand kit 자동 상속.

---

## 8. 자호쿠 입장에서 결론

| 항목 | 판단 |
|------|------|
| **자호쿠 brand 결정을 Claude Design에 위임?** | ❌ X. brand는 사용자 결정 영역 ([CLAUDE.md 자율진행 룰](~/.claude/CLAUDE.md)) |
| **시안 variation 실험?** | ✅ 강력 추천. Tweaks 슬라이더는 자호쿠 톤 다듬기에 적합 |
| **OG image / slide / 페이지 시안 제작?** | ✅ 효율 큼. 한계(사진 X)는 외부 도구 보완 |
| **Astro 코드 작성?** | ⚠️ Claude Code handoff bundle 받아서 검토 후 적용. 직접 적용 X |
| **현재 1차 디자인 퀄리티업 (코드)와 무관?** | ✅ 무관. 1차는 코드 직접 수정으로 끝. Claude Design은 **OG image 등 시각 자산 단계에서 활용** |

**필요 액션**:
1. 사용자가 Claude Pro/Max 구독 상태 확인 — 없으면 가입 의사 결정 필요
2. 첫 세션은 brand kit 등록에 투자 (Step 1~2)
3. OG image 1장 만드는 걸 첫 실전 use case로 (S1)

---

## 9. 출처

### 공식
- [Anthropic — Introducing Claude Design by Anthropic Labs](https://www.anthropic.com/news/claude-design-anthropic-labs) (2026-04-17, 1차 출처)
- [claude.ai/design](https://claude.ai/design) — 제품 페이지

### 언론·분석
- [VentureBeat — Claude Design challenges Figma](https://venturebeat.com/technology/anthropic-just-launched-claude-design-an-ai-tool-that-turns-prompts-into-prototypes-and-challenges-figma)
- [TechCrunch — Anthropic launches Claude Design](https://techcrunch.com/2026/04/17/anthropic-launches-claude-design-a-new-product-for-creating-quick-visuals/)
- [The New Stack — Anthropic launches Claude Design](https://thenewstack.io/anthropic-claude-design-launch/)
- [Gizmodo — Figma stock immediately nosedives](https://gizmodo.com/anthropic-launches-claude-design-figma-stock-immediately-nosedives-2000748071)

### 실전·후기
- [Muz.li — Claude Design One Week In](https://muz.li/blog/claude-design-one-week-in-hacks-best-practices-tips-from-real-world-use/) ★ 가장 실용적
- [Till Freitag — Claude Design Is Here](https://till-freitag.com/en/blog/claude-design-anthropic-labs-en)
- [Digital Applied — AI-Native Design Tool](https://www.digitalapplied.com/blog/claude-design-anthropic-labs-ai-native-design-tool)
- [Eigent — What It Is, How It Works](https://www.eigent.ai/blog/claude-design)
- [DataCamp — What Is Claude Design?](https://www.datacamp.com/blog/claude-design)
- [Medium — Full Breakdown](https://medium.com/design-bootcamp/claude-design-is-here-full-breakdown-a32767258fb9)
- [Buildfastwithai — Guide 2026](https://www.buildfastwithai.com/blogs/claude-design-anthropic-guide-2026)

### Figma·workflow 연동
- [Anima — Claude Design to Figma](https://www.animaapp.com/blog/genai/how-to-go-from-claude-design-to-figma/)
- [FindSkill — Import Figma Library](https://findskill.ai/blog/claude-design-figma-import-tokens/)
- [html.to.design — Claude AI to Figma](https://html.to.design/docs/from-claude-ai-to-figma/)

### 비교·포지셔닝
- [Claude Codex — Claude Design vs Figma](https://claude-codex.fr/en/content/claude-design-vs-figma/)
- [ALM Corp — Features, Pricing, Use Cases](https://almcorp.com/blog/claude-design-anthropic-labs/)
