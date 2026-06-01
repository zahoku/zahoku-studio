---
id: Cloudflare Pages와 zahoku.com 도메인 연결
status: pending
assignee: Anthony Bang
created_date: 2026-06-01
tags: [infra, fg-only]
depends_on: [SEO 자산 적용]
---

> **Priority**: high — 사이트 공개 진입점

## 목표

GitHub 푸시 → Cloudflare Pages 자동 빌드 → `zahoku.com` 매핑까지.

## 완료 기준

- [ ] GitHub repo 생성 (`zahoku-studio` 또는 `zahoku.com`)
- [ ] 로컬 푸시
- [ ] Cloudflare Pages 프로젝트 생성 (대시보드 또는 wrangler)
- [ ] GitHub 연결 — 푸시 시 자동 빌드 확인
- [ ] `zahoku.com` 커스텀 도메인 매핑 + 도메인 등록사 NS를 Cloudflare로 변경 (이미 CF면 자동)
- [ ] HTTPS 작동 확인
- [ ] 초기 페이지 모두 200 응답 확인

## 사용자 액션 필요

- Cloudflare 계정 로그인 (wrangler CLI 또는 대시보드)
- GitHub repo 권한 (gh CLI로 가능)
- 도메인 등록사 NS 변경 (Cloudflare가 등록사면 스킵)

## 비고

- 이 투두는 fg-only — 외부 서비스 결합 검증 필요
- 빌드 명령: `pnpm build`, 출력 디렉토리: `dist`
