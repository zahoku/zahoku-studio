---
id: OG 이미지 디자인
status: in_progress
assignee: Anthony Bang
created_date: 2026-06-05
context: src/pages/og.astro 1차 시안 작성 완료. http://localhost:4321/og 에서 1200×630 viewport로 시각 확인 대기. OK 후 캡처 → public/og-image.png 교체.
tags: [feature, client]
depends_on: []
---

> **Priority**: medium — 외부 공유(SNS, 메신저 링크, 검색 인용)에서 brand impression 결정. 출시 전 1장은 필요.

## 배경

[docs/claude-design-research.md](../../docs/claude-design-research.md) §6 S1에서 검토한 후, **Claude Design 안 쓰고 Astro로 직접 작성**이 자호쿠에 더 효율적이라 결정 (사용자 확인 2026-06-05):
- weekly cap 소모 X
- brand 톤 100% 통제 (한지 텍스처·자호구 한자 기존 컴포넌트 재사용)
- 1인 + 코드베이스 환경에서 직접 코드가 더 빠름

## Scope

- src/pages/og.astro — 1200×630 정확히 viewport에 맞춘 standalone 페이지
- BaseLayout 사용 X (Header/Footer 없이 OG 전용 캔버스)
- 자호구 한자 letterpress impression + lowercase wordmark + 모토 한 줄
- 한지 톤 #f4ede0 + 먹갈 #6b3f1d 이미 정의된 토큰 활용

## 작업 항목

- [ ] og.astro 1차 시안 작성
- [ ] dev에서 사용자 시각 확인 + 피드백
- [ ] (OK 후) 캡처 방법 결정 — Playwright 자동화 vs Chrome devtools 수동 캡처
- [ ] public/og-image.png 교체
- [ ] BaseLayout의 `<meta property="og:image">` 가 자동 참조하므로 추가 코드 X

## 캡처 옵션

| 방법 | 장 | 단 |
|------|----|----|
| Chrome devtools 수동 (cmd+shift+P → Capture screenshot) | dependency 추가 X | 매번 수동 |
| Playwright 추가 + script | 자동화 가능 | dep 추가, 첫 셋업 비용 |
| puppeteer 임시 스크립트 | 단순 | 일회성이면 over engineering |

→ 1장만 만들면 되는 일이라 **Chrome devtools 수동이 가장 효율적**. 디자인 자주 바뀌면 그때 Playwright.

## 검증

- 빌드 통과 (astro check + pnpm build)
- dev에서 정확한 1200×630 fit 확인
- 사용자 시각 확인 후 OK 신호
