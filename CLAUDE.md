# CLAUDE.md — zahoku-studio 프로젝트 컨텍스트

> 이 파일은 새 Claude 세션이 이 프로젝트를 빠르게 이해하기 위한 진입점이다.
> 글로벌 룰(`~/.claude/CLAUDE.md`)은 자동 로딩되므로 여기엔 **프로젝트 고유 정보만** 둔다.

---

## 프로젝트 정의

**자호쿠 스튜디오 공식 웹사이트** (`zahoku.com`).

- 도메인: `zahoku.com` (이미 구매 완료)
- 형태: **정적 사이트** (블로그·동적 기능 없음)
- 운영: 1인 + AI 팀
- 모토: **스스로 좋아하는 것을 오래도록** (自好久)

상세는 [IDENTITY.md](./IDENTITY.md) 참조.

---

## 사이트가 담을 것

| 영역 | 내용 |
|------|------|
| **소개** | 자호쿠 스튜디오 정체성, 자호구 어원, 운영 모토 |
| **About** | 운영자(Anthony Bang) 약력 + 스튜디오 운영 원칙 |
| **프로젝트** | haruip(자동일기앱), glyfy(웹 타이핑 게임) — *공개 시점까지는 비공개 또는 "Coming Soon" 처리* |
| **미니게임** | Pixi/Phaser 기반 단순 웹게임. 외주 가능성 + 단순 재미 + 개발실력 시연 |

> 모든 프로젝트는 **공개 시점까지는 노출하지 않거나 placeholder** 처리. 공개 결정 시 그때 콘텐츠 채움.

---

## 권장 스택 (학습 문서 결론)

| 영역 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | **Astro** | 2026 표준 SSG. Islands로 게임 임베드 자연스러움 |
| 언어 | TypeScript (strict) | 글로벌 룰 정합 |
| 스타일 | Tailwind CSS | Astro 1급 통합 |
| 콘텐츠 | 마크다운 (`src/content/`) | About·프로젝트 텍스트 관리 |
| 게임 엔진 | Pixi.js 또는 Phaser | 미니게임 페이지에 island 임베드 |
| 호스팅 | **Cloudflare Pages** | 무료, 무제한 대역폭, zahoku.com 무료 연결 |
| CI | GitHub Push → CF Pages 자동 빌드 | 단순 |

상세 비교는 [docs/static-site-guide.md](./docs/static-site-guide.md) §5, §6 참조.

---

## SEO 방침

- **트래픽 폭증 추구하지 않음** — 모토와 정합 ("오래")
- **목표**: "자호쿠 스튜디오" 검색 시 1위 + AI 검색에서 정확히 인용
- 출시 전 필수 체크리스트: [docs/seo-guide.md](./docs/seo-guide.md) §10

---

## 다음 작업 (대기 중)

> 진행 시 글로벌 룰의 **Project Bootstrap Gate (Phase 0)** 준수: 앱 코드 작성 전에 테스트 러너·tsc·lint·스모크 테스트 통과 상태 만들기.

1. **Astro 프로젝트 초기화** (Phase 0 포함)
   - `pnpm create astro@latest`
   - TS strict + Tailwind + sitemap 인테그레이션 + 테스트 러너 (Vitest)
   - 스모크 테스트 1개 통과 후 첫 커밋

2. **페이지 구조 설계**
   - `/` — 첫 화면 (IDENTITY 핵심 요약 + 모토)
   - `/about` — 스튜디오 소개 (IDENTITY 전체)
   - `/projects/` — 프로젝트 목록 (현재는 placeholder)
   - `/projects/haruip/`, `/projects/glyfy/` — 각 프로젝트 상세 (공개 전엔 placeholder)
   - `/play/` — 미니게임 목록
   - `/play/{game-slug}/` — 각 게임 페이지

3. **디자인 시스템 토큰**
   - 컬러 (라이트/다크), spacing (4px 단위), 폰트
   - 자호구 의미를 시각화한 미니멀·정적·오래 갈 디자인 지향

4. **SEO 자산**
   - Organization + WebSite JSON-LD
   - sitemap.xml (Astro 인테그레이션 자동)
   - robots.txt
   - OG image 1장 (디자인 결정 후)

5. **Cloudflare Pages 연결**
   - GitHub repo 생성 → CF Pages 연결 → `zahoku.com` 커스텀 도메인 매핑

6. **(나중)** Google Search Console + Naver Search Advisor 등록

---

## 진행 패턴 — 글로벌 룰과의 정합

- 새 작업은 **`.claude/todo/{한글 제목}.md`** 로 등록 후 진행
- 완료 시 frontmatter `status: completed` + `.claude/history/{YYYY-MM}/` 에 요약 기록
- 자율진행 모드 발동 시 옵시디언 vault `daily-work/`에도 결과 append
- 한국어 반말·간결 응답

---

## 자호쿠 표기 통일 (코드·문서·UI 공통)

- 한글: **자호쿠 스튜디오**
- 영문: **Zahoku Studio** (Z·S만 대문자)
- 한자(병기용): 自好久
- 식별자: `zahoku.com`, `zahoku-studio`
- 금지: ZAHOKU STUDIOS, Jahoku, Jaho-ku
