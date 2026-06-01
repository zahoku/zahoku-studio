# 정적 사이트(Static Site) — 학습 가이드

> 자호쿠 스튜디오 웹사이트를 만들기 전에, **정적 사이트가 정확히 무엇이고 왜 우리에게 적합한지** 짚어두는 문서.
> 사용자(Anthony)가 정적 사이트 개념을 처음 접하는 상태에서 출발해 의사결정에 필요한 깊이까지 가져간다.

---

## 1. 어원 — Static / Dynamic

| 단어 | 어원 | 본래 뜻 | 컴퓨팅 맥락 |
|------|------|--------|------------|
| **static** | 라틴어 *stare* (서다, 고정되어 있다) → *staticus* | "움직이지 않는", "고정된" | 미리 만들어둔 결과물을 그대로 내려주는 |
| **dynamic** | 그리스어 *dynamis* (힘, 능력) → *dynamikos* | "힘 있는", "변화하는" | 요청 시점에 그때그때 만들어내는 |

이 둘은 **언제 HTML이 만들어지는가** 의 차이다.

- 정적: **빌드 시(build time)** — 개발자가 만든 결과물이 미리 굳어서 CDN에 올라감
- 동적: **요청 시(request time)** — 사용자가 접속하는 순간 서버가 HTML을 조립해서 보냄

> 정물(*静物*)과 활물(*活物*)의 차이라고 생각하면 정확하다. 정적 사이트는 박물관 전시품, 동적 사이트는 그때그때 요리하는 식당.

---

## 2. 역사 — 왜 다시 정적이 떠올랐나

```
1990s          2000s              2010s              2020s ~ 현재
HTML 파일들 →  PHP/Rails 등 →     React/Vue SPA →    SSG + CDN + Edge
(원조 정적)    (동적 폭발)         (CSR로 무거움)      (정적 르네상스)
```

1. **90년대**: 모든 웹은 그냥 `.html` 파일이었다. 이게 사실 정적 사이트의 원형.
2. **2000년대**: 게시판·쇼핑몰·블로그가 폭발하며 PHP/Rails 같은 동적 서버가 표준이 됨.
3. **2010년대**: React/Vue/Angular가 등장. SPA(Single Page Application)가 유행하지만 첫 로딩이 무겁고 SEO 약함.
4. **2020년대**: CDN이 전 세계 끝까지 깔리고, AI 검색이 늘면서 다시 **빠른 정적 사이트**가 주목받음. SSG + JAMstack + Islands Architecture가 표준화.

> **핵심**: 2026년의 정적 사이트는 90년대의 정적과 같은 단어지만 완전히 다른 도구다. 빌드 단계에서 React/마크다운/이미지 최적화를 다 해서 결과물만 CDN에 뿌리는 구조.

---

## 3. SSG (Static Site Generator)란

**SSG**는 정적 사이트를 **생성**해주는 도구다. 풀어 쓰면 **정적 사이트 생성기**.

### 빌드 흐름

```
[작성한 것]                  [SSG가 처리]                [배포]
src/pages/about.astro    →   astro build           →    dist/about/index.html
content/post.md          →   (마크다운 → HTML)      →    dist/post/index.html
components/Card.tsx      →   (컴포넌트 → 정적 HTML) →   dist/...
public/zahoku.png        →   (그대로 복사)          →    dist/zahoku.png
```

빌드가 끝나면 `dist/` (또는 `_site/`, `build/`) 안에 **순수한 HTML/CSS/JS/이미지 파일들**만 남는다. 이걸 CDN에 올리면 끝.

### 정적 vs SPA vs SSR — 한 표 비교

| 항목 | 정적 (SSG) | SPA (CSR) | SSR |
|------|----------|----------|-----|
| HTML이 만들어지는 시점 | **빌드 시** | 브라우저에서 JS 실행 후 | 사용자 요청 시 서버에서 |
| 서버 필요? | 불필요 (CDN만) | 불필요 (CDN만) | 필요 |
| 초기 로딩 | **매우 빠름** | 느림 (JS 다운로드 후 렌더) | 빠름 |
| SEO | **최강** | 약함 (크롤러가 JS 실행 못하면 빈 페이지) | 강함 |
| 동적 데이터 | 빌드 후엔 고정 | 가능 | 가능 |
| 비용 | **거의 무료** | 거의 무료 | 서버 비용 발생 |
| 자호쿠 사이트 적합도 | **★★★★★** | ★★ | ★ |

---

## 4. 자호쿠 사이트가 정적이어야 하는 이유

- **콘텐츠가 거의 변하지 않음** — 스튜디오 소개, 프로젝트 목록, About 정도. 사용자별 다른 데이터 없음
- **DB 불필요** — 댓글·로그인·결제 없음
- **빠른 로딩** — 첫 인상이 곧 스튜디오 인상. 무거운 React 풀스택 필요 없음
- **저렴한 운영** — Cloudflare Pages 등 무료 티어로 충분, 트래픽 폭증해도 비용 0에 가까움
- **게임 호스팅에도 OK** — Pixi/Phaser 게임은 자체가 정적 자원 (`.html` + `.js` + 이미지). 정적 사이트에 그대로 올림

---

## 5. 프레임워크 옵션 비교

### 5-1. Astro — 2026년 사실상 표준

- **2026년 대부분의 새 정적 사이트의 기본 추천** ([The Software Scout](https://thesoftwarescout.com/best-static-site-generators-2026-astro-next-js-hugo-more/))
- **Islands Architecture**: 페이지는 순수 HTML로 빌드하되, 인터랙티브가 필요한 부분(`<Counter client:load />` 등)만 "섬"처럼 JS를 로드. **기본 JS 출력 0바이트**.
- React/Vue/Svelte/Solid 어느 컴포넌트도 섬으로 임베드 가능
- 마크다운 콘텐츠 1급 지원 (`.md` / `.mdx` 파일을 페이지로 직접 변환)
- TS strict 기본 지원

```
[Astro 페이지]              [빌드 결과]
.astro 컴포넌트         →   순수 HTML
+ React island          →   필요한 부분만 JS
+ markdown content      →   정적 HTML
```

**적합도**: 자호쿠 사이트에 가장 자연스러움. 스튜디오 소개(정적) + 프로젝트 페이지(정적) + 미니게임 페이지(섬으로 Pixi/Phaser 로딩).

### 5-2. Eleventy (11ty) — 가장 가볍고 자유로움

- 자바스크립트 기반이지만 **기본 출력 JS 0** ([The Software Scout 비교 참조](https://thesoftwarescout.com/best-static-site-generators-2026-astro-next-js-hugo-more/))
- 거의 강요하는 게 없음. 마크다운 + Nunjucks/Liquid 템플릿
- 컴포넌트 생태계가 약해서 인터랙티브 부분 직접 구현해야 함
- 미니게임 임베드는 가능하지만 페이지 추가/스타일 시스템 직접 깔아야 함

**적합도**: 미니멀리스트라면 OK. 자호쿠처럼 추후 프로젝트 페이지가 늘어날 거면 컴포넌트 시스템이 있는 Astro가 더 편함.

### 5-3. Hugo — 빠름의 끝판왕

- Go로 작성된 **컴파일러형 SSG**. 수천 페이지를 밀리초 단위로 빌드
- 자호쿠는 페이지 수가 적어 속도 이점 무의미
- 템플릿 언어가 Go template — TS/JS 익숙한 사용자에게 진입 장벽

**적합도**: 페이지 수가 적으면 굳이.

### 5-4. Next.js (static export 모드)

- React 풀스택 프레임워크. `output: 'export'` 로 정적 빌드 가능
- 정적 전용으로 쓰기엔 무거움. 동적 라우팅·서버 컴포넌트 등 사용 안 하는데 빌드 무게만 짊어짐
- 추후 동적 기능(인증 등) 필요해질 가능성이 있을 때만 유리

**적합도**: 자호쿠 사이트엔 과함.

### 5-5. 바닐라 HTML/CSS/TS

- `index.html` 하나로 끝낼 수도 있음
- 페이지 2~3개 이하면 OK
- 늘어나면 헤더·푸터 복사·붙여넣기 지옥 → 결국 SSG 도입

**적합도**: 처음엔 OK지만 자호쿠는 프로젝트 페이지가 늘어날 거라 처음부터 Astro가 나음.

### 결론 — Astro 추천

| 옵션 | 한 줄 평 |
|------|---------|
| **Astro** | **2026 표준. 자호쿠에 가장 자연스러움** |
| Eleventy | 미니멀리스트용. 컴포넌트 약함 |
| Hugo | 빠른데 굳이 (페이지 적음) |
| Next.js | 과함 |
| 바닐라 | 처음엔 OK, 금방 SSG 필요해짐 |

---

## 6. 호스팅 — 어디에 올릴까

> 2026 시점 정적 사이트 호스팅 4대 천왕: **Cloudflare Pages**, **Vercel**, **Netlify**, **GitHub Pages** ([DanubeData 비교](https://danubedata.ro/blog/cloudflare-pages-vs-netlify-vs-vercel-static-hosting-2026))

| 호스팅 | 무료 티어 | 강점 | 약점 | 자호쿠 적합도 |
|--------|---------|------|------|-------------|
| **Cloudflare Pages** | **대역폭 무제한**, 빌드 500회/월 | 300+ 엣지 노드, 가장 저렴, 가장 빠른 글로벌 latency | 빌드 시간 제한 | **★★★★★** |
| **Vercel** | 100GB/월 | Next.js 풀 지원, DX 최고 | 대역폭 초과 시 빠르게 비싸짐 | ★★★★ |
| **Netlify** | 100GB/월 | Jamstack 원조, 설정 간단 | 가격 빨리 오름 | ★★★★ |
| **GitHub Pages** | 100GB/월, 1GB 저장 | GitHub 통합, 단순 | 빌드 환경 자유도 낮음, 커스텀 도메인 SSL 느림 | ★★★ |

**추천: Cloudflare Pages.**
- `zahoku.com` 도메인 연결 무료
- 트래픽 폭증해도 비용 0
- 자호쿠 모토 "오래"와 정합 — 비용 부담 없이 길게 운영 가능

---

## 7. 게임 임베드(embed) — "겜 캠버트" 라고 들었던 그것

> 사용자가 "겜 캠버트"로 들은 것은 **게임 임베드(game embed)** 일 가능성이 큼.
> *embed*는 라틴어 *im-* (안에) + *bed* (자리 잡다) — "안에 박아 넣다"는 뜻. 다른 콘텐츠 안에 외부 콘텐츠를 끼워 넣는 행위.

### 정적 사이트에 게임을 끼워 넣는 방법 3가지

**A. 같은 페이지에 `<canvas>` 만들고 직접 JS 로딩 (권장)**

```html
<!-- /games/glyfy.html (정적 페이지) -->
<canvas id="game"></canvas>
<script type="module" src="/games/glyfy/main.js"></script>
```

- 자호쿠 사이트 디자인 시스템(폰트, 컬러)을 그대로 공유
- Pixi/Phaser 모두 `parent: 'game'` 또는 `canvas` 엘리먼트 지정으로 임베드 ([Phaser 가이드](https://github.com/phaserjs/phaser-ce))
- **자호쿠 미니게임 페이지의 기본 패턴**

**B. `<iframe>` 으로 다른 페이지 통째로 끼워 넣기**

```html
<iframe src="/games/glyfy/" width="800" height="600"></iframe>
```

- 게임을 완전히 독립된 페이지로 만들고 메인에선 액자처럼 보여줌
- 격리가 강해서 게임이 메인 사이트 스타일·전역 변수 못 건드림
- 단점: 모바일에서 크기 조정 까다로움, 오디오 자동재생 차단 이슈 ([Phaser CE 이슈](https://github.com/phaserjs/phaser-ce/blob/master/CHANGELOG.md))

**C. 외부 게임 호스팅 사이트 임베드 (itch.io 등)**

```html
<iframe src="https://itch.io/embed/12345" width="552" height="167"></iframe>
```

- 게임은 itch.io에 올리고 자호쿠 사이트엔 액자만
- 자호쿠 사이트엔 부적합 (자기 도메인에 직접 서비스하는 게 모토에 맞음)

### 자호쿠 미니게임 페이지 패턴

```
zahoku.com/play/{game-slug}/   ← 게임 페이지 (A 방식)
zahoku.com/play/                ← 게임 목록
```

- Pixi/Phaser 게임은 정적 자산이라 **자호쿠 사이트와 같이 정적 빌드**에 포함됨
- 추가 서버 없이도 게임이 굴러감
- 빌드 시 게임별로 코드 스플리팅(`/games/glyfy/main.js` 별도) 해두면 게임 안 들어가는 방문자에겐 다운로드 안 됨

---

## 8. Islands Architecture — 정적 + 인터랙티브 양립

자호쿠 사이트 구조 결정에 직결되는 개념이라 별도 설명.

### 개념

- **섬(island)**: 페이지 안에서 JS 인터랙티브가 필요한 작은 영역
- **바다(sea)**: 그 외 모든 정적 HTML

```
┌────────────────────────────────────────┐
│  [정적 HTML] 자호쿠 스튜디오 로고      │
│  [정적 HTML] 소개 문구                 │
│  ┌──────────────────────────────────┐ │
│  │ [JS Island] 미니게임 캔버스      │ │  ← 여기만 JS 로드
│  └──────────────────────────────────┘ │
│  [정적 HTML] 프로젝트 카드 (3개)       │
│  ┌──────────────────────────────────┐ │
│  │ [JS Island] 다크모드 토글        │ │  ← 여기만 JS 로드
│  └──────────────────────────────────┘ │
│  [정적 HTML] 푸터                      │
└────────────────────────────────────────┘
```

- 페이지 첫 로딩 시 HTML만 빠르게 도착 → 즉시 보임
- 섬은 화면에 들어오거나 사용자가 상호작용할 때 JS 로딩
- React 풀스택의 "전체 페이지 JS로 만들기"와 정반대 철학

> Astro의 핵심 발명품. Qwik의 *resumability* 도 비슷한 사상 ([Naturaily JAMstack 2026](https://naturaily.com/blog/what-is-jamstack)).

---

## 9. 자호쿠 사이트 — 권장 스택

다음 스택으로 진행 권장.

| 영역 | 선택 | 이유 |
|------|------|------|
| **프레임워크** | Astro | 2026 표준, Islands로 게임 임베드 자연스러움 |
| **언어** | TypeScript (strict) | 전체 글로벌 룰과 정합 |
| **스타일** | Tailwind CSS | Astro 1급 통합, 토큰 시스템 |
| **콘텐츠** | 마크다운 (`src/content/`) | About·프로젝트 소개를 텍스트로 관리 |
| **게임 엔진** | Pixi.js 또는 Phaser (게임별 선택) | 미니게임 페이지에 island로 임베드 |
| **호스팅** | Cloudflare Pages | 무료·빠름·zahoku.com 연결 무료 |
| **CI/배포** | GitHub → Cloudflare Pages 자동 빌드 | 푸시만 하면 배포 |
| **DNS** | Cloudflare (도메인 등록사에서 NS 변경) | 같은 벤더라 통합 편함 |

---

## 10. 다음 단계 (참고)

이 문서는 학습 자료. 실제 셋업은 별도 SPEC/투두로 분리한다.

- [ ] Astro 프로젝트 초기화 (Phase 0: 테스트 러너·tsc·lint·스모크 테스트 통과)
- [ ] 페이지 구조 설계 (`/`, `/about`, `/projects/haruip`, `/projects/glyfy`, `/play/`)
- [ ] 디자인 시스템 토큰 정의 (컬러·spacing·폰트)
- [ ] IDENTITY.md 내용을 About 페이지로 변환
- [ ] Cloudflare Pages 연결
- [ ] SEO 적용 (다음 문서 `docs/seo-guide.md` 참조)

---

## Sources

- [Best Static Site Generators 2026 — The Software Scout](https://thesoftwarescout.com/best-static-site-generators-2026-astro-next-js-hugo-more/)
- [Top 12 SSGs in 2026 — Hygraph](https://hygraph.com/blog/top-12-ssgs)
- [Astro vs Eleventy vs Hugo vs Jekyll vs Gatsby in 2026](https://gautamkhorana.com/blog/static-site-generators-2026-astro-eleventy-hugo-jekyll-gatsby/)
- [What Is Jamstack in 2026 — Naturaily](https://naturaily.com/blog/what-is-jamstack)
- [Cloudflare Pages vs Netlify vs Vercel 2026 — DanubeData](https://danubedata.ro/blog/cloudflare-pages-vs-netlify-vs-vercel-static-hosting-2026)
- [PixiJS — The HTML5 Creation Engine](https://pixijs.com/)
- [Phaser CE — GitHub](https://github.com/phaserjs/phaser-ce)
