---
id: develop 브랜치 + 머지 시 배포로 전환
status: pending
assignee: Anthony Bang
created_date: 2026-06-01
tags: [infra, fg-only]
depends_on: []
---

> **Priority**: medium — 사이트가 어느 정도 정리되면 진행

## 목표

main 직접 커밋·푸시·배포 → develop 작업 + main 머지 시에만 배포되는 흐름으로 전환.

## 완료 기준

- [ ] develop 브랜치 생성 + 일상 작업 브랜치로 사용
- [ ] Cloudflare Pages 프로덕션 브랜치는 main 유지
- [ ] main 푸시 시에만 자동 배포되는지 확인
- [ ] PR 흐름 (develop → main) — `gh pr create` 워크플로우
- [ ] 필요 시 GitHub Actions로 PR 빌드 미리보기 설정 (옵션)
- [ ] README에 브랜치 전략 한 줄 명시

## 비고

- 현재(2026-06-01) wrangler CLI로 main에서 직접 deploy 중
- CF Pages가 GitHub 연동되면 main push → 자동 빌드+배포로 전환
- 사이트 디자인·콘텐츠 안정화 후 전환 권장 (지금은 빠른 이터레이션 중)
