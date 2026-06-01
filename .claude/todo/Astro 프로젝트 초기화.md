---
id: Astro 프로젝트 초기화
status: completed
assignee: Anthony Bang
created_date: 2026-06-01
completed_date: 2026-06-01
tags: [feature, tooling, bg-safe]
depends_on: []
---

> **Priority**: high — 다음 단계 진입 위해 가장 먼저 필요

## 목표

`pnpm create astro` 로 Astro 프로젝트 초기화. Project Bootstrap Gate (Phase 0) 통과 상태까지.

## 완료 기준 (Phase 0 정합)

- [x] Astro + TypeScript strict 템플릿 선택 (Astro 6.4.2, minimal 템플릿)
- [x] Tailwind CSS 인테그레이션 추가 (Tailwind 4 + `@tailwindcss/vite`)
- [x] `@astrojs/sitemap` 인테그레이션 추가
- [x] 테스트 러너 (Vitest) 설치 + `pnpm test` 동작 확인 (2 tests pass)
- [x] Biome lint + `pnpm lint` 통과
- [x] `pnpm typecheck` (= `astro check`) 통과 (0 errors)
- [x] 스모크 테스트 1개 작성 → 통과 (`src/lib/identity.test.ts`)
- [x] `pnpm build` 정적 빌드 통과 (sitemap-index.xml 자동 생성)
- [ ] `pnpm dev` 로컬 부팅 시각 확인 (fg-only — 호스팅 셋업 단계에서 함께 확인)
- [ ] 첫 커밋 — 진행 중

## 메모

- 사용자가 정적 사이트·SEO 학습 문서 읽고 의사결정 후 시작 권장
- 스택 결정 사항은 [CLAUDE.md](../../CLAUDE.md) 와 [docs/static-site-guide.md](../../docs/static-site-guide.md) §9 참조
- Cloudflare Pages 연결은 별도 투두로 분리 (이 투두는 로컬 부팅까지)
