# SEO — 학습 가이드

> 자호쿠 스튜디오 사이트는 트래픽 의존도가 낮아 SEO 우선순위가 높지 않다. 다만 "기왕이면 검색되면 좋겠다"는 사용자 의향이 있고, **지식적으로 알아두는 가치**가 크기 때문에 별도 문서로 정리한다.
> AI 검색 시대의 SEO는 기존 SEO와 핵심 원리는 같되, 적용 방식이 달라지고 있다. 둘 다 다룬다.

---

## 1. 어원과 정의

| 단어 | 풀이 | 본래 뜻 |
|------|------|--------|
| **S**earch | 라틴어 *circare* (원을 그리며 찾다) | 검색 |
| **E**ngine | 라틴어 *ingenium* (재능, 기지) → "기계, 장치" | 엔진 |
| **O**ptimization | 라틴어 *optimus* (최선의) → "최적화" | 최적화 |

**SEO = Search Engine Optimization = 검색엔진 최적화**.

> "검색엔진이 내 페이지를 잘 찾고·이해하고·신뢰해서 결과 상위에 노출하도록 만드는 작업 일체."

같은 영역의 비슷한 용어:

| 용어 | 의미 | 차이점 |
|------|------|--------|
| **SEM** (Search Engine Marketing) | 검색 광고 포함한 마케팅 | 유료 광고도 포함 (SEO는 무료/자연 검색) |
| **GEO** (Generative Engine Optimization) | 생성형 AI 검색 최적화 | 2024~ 등장한 신조어. ChatGPT/Perplexity/Google AI Overview 대응 |
| **AEO** (Answer Engine Optimization) | 답변 엔진 최적화 | GEO와 거의 동의어 |

---

## 2. 검색엔진은 어떻게 동작하는가

3단계 파이프라인을 이해하면 SEO의 모든 권장사항이 자연스럽게 따라온다.

```
[1. Crawl 크롤링]      [2. Index 인덱싱]      [3. Rank 랭킹]
봇이 웹을 돌며     →   페이지 내용을 분석해   →   사용자가 검색하면
HTML 수집              데이터베이스에 저장        관련도순으로 정렬해 보여줌
```

### 2-1. Crawl — 봇이 페이지를 찾는다

- Googlebot, Bingbot 등이 링크를 타고 웹을 돌아다님
- 한 페이지에서 발견한 링크로 다음 페이지를 찾음
- **링크 없으면 발견 못 함** → 그래서 `sitemap.xml`로 페이지 목록을 직접 제출함
- 차단하고 싶으면 `robots.txt`로 알림

### 2-2. Index — 내용을 이해해서 저장한다

- HTML을 파싱해서 **이게 무엇에 관한 페이지인지** 파악
- 텍스트, 제목, 이미지 alt, 구조화 데이터(schema.org), 메타태그 다 읽음
- JS로만 렌더링되는 페이지는 인덱싱 약함 → **정적 사이트가 SEO에 강한 이유**
- 충분히 좋은 페이지여야 인덱스에 등재됨 (등재 자체도 경쟁)

### 2-3. Rank — 누가 1등인가 정렬한다

- 같은 키워드를 인덱싱한 페이지가 수백만 개. 그 중 어떤 순서로 보여줄지 결정
- **랭킹 시그널** 수백 가지 (구체 알고리즘은 비공개)
- 핵심 시그널들 (2026 시점):
  - **콘텐츠 품질·관련성** (가장 중요)
  - **E-E-A-T**: Experience(경험), Expertise(전문성), Authoritativeness(권위), Trustworthiness(신뢰)
  - **백링크**: 다른 신뢰할 만한 사이트가 이 페이지로 링크 거는가
  - **Core Web Vitals**: 페이지 성능 (아래 4번)
  - **모바일 친화도**
  - **사용자 행동**: 클릭률, 체류시간, 직행률

---

## 3. 2026 SEO의 큰 변화 — AI 검색

> 기존 SEO와 별개 게임이 아니라 **같은 게임에 카메라가 하나 더 붙은 상태**다. 잘하면 둘 다 잡힌다.

### 변화의 핵심

전통 검색: "10개의 파란 링크" → 사용자가 클릭해서 사이트 방문
AI 검색 (Google AI Overview, ChatGPT, Perplexity 등): **AI가 여러 페이지를 합쳐 한 답변으로 종합** → 사용자는 클릭 없이 답을 얻음 ("zero-click")

### AI 시대에 무엇이 달라지는가

- **인용되는 게 곧 노출**: AI 답변에 "according to [zahoku.com]" 식으로 인용되는 게 새로운 1순위
- **CitedSource 스키마** 등장 — AI가 인용처를 명시할 수 있게 돕는 구조화 데이터 ([Svitla SEO 2026](https://svitla.com/blog/seo-best-practices/))
- **답변형 콘텐츠 선호**: AI는 "짧은 단락 + 명시적 헤딩 + 두 문장짜리 직접 답" 형태를 좋아함
- **E-E-A-T 비중 폭증**: AI는 "이 정보 출처가 신뢰할 만한가?"를 매우 따짐
- **시맨틱 키워드**: 단순 키워드 매칭이 아닌 의미·맥락 매칭 (예: "1인 개발 스튜디오" 검색 시 "독립 개발자"도 같이 잡음)

### 자호쿠 적용 인사이트

> 자호쿠 사이트는 트래픽 폭증이 목표가 아니므로, AI 검색에서 **"자호쿠 스튜디오는 어떤 곳인가?"** 라는 질문에 정확히 답해주는 사이트면 충분하다.

- 첫 화면에 **"자호쿠 스튜디오는 ~~한 1인 + AI 팀 스튜디오다"** 같은 두 문장 답 배치
- About 페이지에 **자호쿠의 어원(自好久)·운영 원칙** 같은 깊이 있는 콘텐츠
- 각 프로젝트 페이지에 **무엇/누가/왜/언제** 명확한 답

---

## 4. Core Web Vitals — 성능 시그널

Google이 공식 도입한 3대 사용자 경험 지표. 2026년에도 핵심 시그널이며, AI 검색 인용 자격에도 영향 ([DebugBear 2026](https://www.debugbear.com/blog/technical-seo-checklist)).

| 지표 | 풀어 쓰면 | 의미 | 목표값 |
|------|----------|------|------|
| **LCP** | Largest Contentful Paint | 가장 큰 콘텐츠가 보일 때까지 시간 | **2.5초 이내** |
| **INP** | Interaction to Next Paint | 사용자 입력 후 다음 화면 갱신까지 | **200ms 이내** |
| **CLS** | Cumulative Layout Shift | 페이지 로딩 중 요소가 얼마나 튀는가 | **0.1 이하** |

> 정적 사이트 + Cloudflare CDN + Astro 기본 출력은 **거의 자동으로 통과**한다. 자호쿠 사이트는 이 항목에서 거의 노력 필요 없음.

### 자호쿠 사이트에서 특히 주의

- **이미지**: WebP/AVIF로 변환 + `width`/`height` 명시 (CLS 방어)
- **폰트**: 웹폰트는 `font-display: swap` + 프리로드
- **게임 페이지**: Pixi/Phaser JS가 무거우니 **메인 페이지에 임베드하지 말고** `/play/{game}/` 전용 페이지로 분리

---

## 5. 메타태그 — 검색·공유의 기본

### 5-1. `<head>` 안에 반드시 있어야 할 것

```html
<title>자호쿠 스튜디오 — 스스로 좋아하는 것을 오래도록</title>
<meta name="description" content="AI를 팀원으로 한 1인 스튜디오. 인간을 이롭게 하는 웹서비스와 앱을 만듭니다." />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="canonical" href="https://zahoku.com/" />
```

| 태그 | 역할 | 길이 권장 |
|------|------|---------|
| `<title>` | 검색 결과 1번째 줄 / 브라우저 탭 | 50~60자 |
| `meta description` | 검색 결과 본문 미리보기 | 150~160자 |
| `canonical` | 같은 콘텐츠가 여러 URL이면 정본 지정 | (URL 1개) |

### 5-2. Open Graph (SNS 공유 미리보기)

```html
<meta property="og:title" content="자호쿠 스튜디오" />
<meta property="og:description" content="스스로 좋아하는 것을 오래도록." />
<meta property="og:image" content="https://zahoku.com/og-image.png" />
<meta property="og:url" content="https://zahoku.com/" />
<meta property="og:type" content="website" />
```

- 카카오톡·페이스북·디스코드 등에 링크 붙여넣으면 자동으로 미리보기 카드 생성
- **og:image**는 1200x630px 권장 (트위터는 별도 `twitter:card` 사용)

### 5-3. Twitter Card

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="자호쿠 스튜디오" />
<meta name="twitter:description" content="스스로 좋아하는 것을 오래도록." />
<meta name="twitter:image" content="https://zahoku.com/og-image.png" />
```

---

## 6. 구조화 데이터 (Schema.org / JSON-LD)

> **2026년 AI 검색의 핵심**. 단순 키워드가 아닌 **엔티티(entity)** 를 인식하게 도와줌. AI Overview 인용 자격을 좌우 ([ALM Corp 2026](https://almcorp.com/blog/seo-best-practices-complete-guide-2026/)).

### 자호쿠 사이트에 필수인 스키마

#### A. Organization (스튜디오 정체성)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "자호쿠 스튜디오",
  "alternateName": "Zahoku Studio",
  "url": "https://zahoku.com",
  "logo": "https://zahoku.com/logo.png",
  "founder": {
    "@type": "Person",
    "name": "Anthony Bang"
  },
  "description": "AI를 팀원으로 한 1인 소프트웨어 스튜디오. 인간을 이롭게 하는 가치를 오래 만든다.",
  "sameAs": [
    "https://github.com/zahoku",
    "https://twitter.com/zahoku"
  ]
}
</script>
```

#### B. WebSite (사이트 자체)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "자호쿠 스튜디오",
  "url": "https://zahoku.com",
  "inLanguage": "ko"
}
</script>
```

#### C. Person (창업자)

About 페이지에 별도 추가.

#### D. SoftwareApplication (각 프로젝트)

haruip / glyfy 같은 프로젝트 페이지 각각에 적용 — AI가 "자호쿠 스튜디오의 제품이 뭐가 있나?" 질문에 답할 때 인용.

---

## 7. 파일 기반 SEO 자산

### 7-1. `robots.txt` — 크롤러 안내

`public/robots.txt`:

```
User-agent: *
Allow: /
Sitemap: https://zahoku.com/sitemap.xml
```

- `Disallow: /admin/` 같은 식으로 차단 가능 (자호쿠는 차단할 영역 없음)
- AI 크롤러(GPTBot, ClaudeBot 등) 차단 의향이 있다면 별도 명시 — 자호쿠는 인용되는 게 이득이라 **차단하지 않음**

### 7-2. `sitemap.xml` — 페이지 지도

```xml
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://zahoku.com/</loc><lastmod>2026-06-01</lastmod></url>
  <url><loc>https://zahoku.com/about</loc><lastmod>2026-06-01</lastmod></url>
  <url><loc>https://zahoku.com/projects/haruip</loc><lastmod>2026-06-01</lastmod></url>
</urlset>
```

- Astro는 `@astrojs/sitemap` 공식 인테그레이션으로 **자동 생성**
- 빌드 시 모든 페이지를 긁어 자동 등록

### 7-3. `favicon` / `apple-touch-icon`

- `/favicon.ico` (전통)
- `/favicon.svg` (모던 브라우저, 다크모드 대응)
- `/apple-touch-icon.png` (iOS 홈 화면 추가 시)

---

## 8. 한국어 SEO의 특수성

- **Naver 점유율**: 한국 검색 점유율에서 Naver 비중 여전히 크지만 모바일·MZ 세대에서 Google 우세화 가속
- **Daum/Kakao**: 검색 점유율 작지만 보조 채널
- **Naver 등록**: Naver Search Advisor에 사이트 등록 — Google Search Console과 별개. zahoku.com을 한국에서 검색 노출시키려면 등록 필요
- **한국어 키워드의 형태소 분석**: Naver는 자체 형태소 분석기 (mecab-ko 계열). "자호쿠 스튜디오" → "자호쿠"/"스튜디오" 분리해서 인식

자호쿠 적용:
- Google Search Console + Naver Search Advisor **양쪽 등록**
- 본문은 한국어 자연스럽게 (검색 봇은 자연어 잘 이해)
- 영문 페이지 별도 만들 가치는 트래픽 관찰 후 판단

---

## 9. AI 검색 최적화 (GEO/AEO) — 실전 패턴

> 2024~2026 신생 영역. 정답이 굳지 않은 상태지만, 다음 패턴이 일관되게 효과 ([Svitla 2026](https://svitla.com/blog/seo-best-practices/), [ALM Corp 2026](https://almcorp.com/blog/seo-best-practices-complete-guide-2026/)).

### A. 답 먼저, 설명 나중 (TL;DR 패턴)

각 섹션 첫 줄에 **두 문장짜리 직접 답** 배치. AI가 그 부분을 그대로 인용하기 좋음.

> ❌ "자호쿠 스튜디오는 2026년에 설립되어 다양한 영역에서…"
> ✅ "자호쿠 스튜디오는 Anthony Bang이 운영하는 1인 + AI 팀 스튜디오다. 웹서비스와 모바일 앱을 만든다."

### B. 명시적 헤딩 + FAQ 섹션

`<h2>자호쿠는 어떤 곳인가요?</h2>` 같은 **질문형 헤딩** + 바로 아래 답.

```html
<section>
  <h2>자호쿠 스튜디오는 어떤 곳인가요?</h2>
  <p>AI를 팀원으로 한 1인 소프트웨어 스튜디오입니다. 인간을 이롭게 하는 웹서비스·앱을 만듭니다.</p>
</section>
```

### C. FAQPage 스키마

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "자호쿠라는 이름의 뜻은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "自好久 — 스스로 좋아하는 것을 오래도록 한다는 뜻입니다."
      }
    }
  ]
}
</script>
```

### D. 엔티티 명시

- "Anthony Bang", "자호쿠 스튜디오", "haruip", "glyfy" 같은 고유명사를 반복하고 schema.org로 정의
- AI는 엔티티 단위로 지식 그래프를 만듦

### E. 외부 신뢰 신호

- GitHub 프로필 / 트위터 / LinkedIn 등 동일인 식별 링크(`sameAs`)
- 가능하면 1~2개 외부 사이트가 zahoku.com을 언급 (백링크)

---

## 10. 자호쿠 SEO 체크리스트 — 우선순위별

### 출시 전 필수 (★★★)

- [ ] 모든 페이지에 `<title>` + `meta description` 유니크하게
- [ ] OG + Twitter Card 메타 + `og:image` (1200x630)
- [ ] `<html lang="ko">`
- [ ] `canonical` URL
- [ ] `robots.txt` + `sitemap.xml` (Astro 인테그레이션으로 자동)
- [ ] Organization + WebSite JSON-LD
- [ ] favicon / apple-touch-icon
- [ ] 모바일 viewport 메타
- [ ] HTTPS (Cloudflare Pages 기본)

### 출시 직후 권장 (★★)

- [ ] Google Search Console 등록 + sitemap 제출
- [ ] Naver Search Advisor 등록 + sitemap 제출
- [ ] 각 프로젝트 페이지에 SoftwareApplication 스키마
- [ ] FAQ 스키마 (About 페이지)
- [ ] 첫 화면에 두 문장 직접 답 (AI 인용용)

### 나중 (★)

- [ ] 백링크 (GitHub README, 디스코드/X 프로필 등에 링크)
- [ ] Core Web Vitals 모니터링 (PageSpeed Insights)
- [ ] 이미지 alt 텍스트 점검
- [ ] 콘텐츠 추가 시마다 sitemap 자동 갱신 확인

---

## 11. 자호쿠 사이트의 현실적 SEO 목표

- **목표**: "자호쿠 스튜디오"로 검색했을 때 1페이지 1위
- **목표가 아닌 것**: "1인 개발 스튜디오", "타이핑 게임" 같은 일반 키워드 1위 (경쟁 무의미)
- **AI 검색 노출 목표**: 누군가 ChatGPT/Claude에 "자호쿠 스튜디오가 뭐야?" 물었을 때 정확한 답
- **트래픽 폭증 추구 X**: 모토와 정합 ("오래" — 검색 트래픽 의존도 낮음)

---

## Sources

- [SEO & AI Search Best Practices 2026 — Svitla](https://svitla.com/blog/seo-best-practices/)
- [Technical SEO Checklist 2026 — Excell](https://excellofficial.com/technical-seo-checklist-2026/)
- [Core Web Vitals 2026 — ALM Corp](https://almcorp.com/blog/core-web-vitals-2026-technical-seo-guide/)
- [Technical SEO Checklist Complete Guide — DebugBear](https://www.debugbear.com/blog/technical-seo-checklist)
- [47 SEO Best Practices 2026 — ALM Corp](https://almcorp.com/blog/seo-best-practices-complete-guide-2026/)
- [SEO Strategy 2026 — SmartChaine](https://smartchaine.cloud/blog/seo-strategy-2026)
