---
id: SEO 자산 적용
status: pending
assignee: Anthony Bang
created_date: 2026-06-01
tags: [feature, docs, bg-safe]
depends_on: [디자인 시스템과 페이지 구조]
---

> **Priority**: medium — 출시 전 필수, 페이지 골격 후 진행

## 목표

`docs/seo-guide.md` §10 출시 전 필수(★★★) 체크리스트 충족.

## 완료 기준

- [ ] 모든 페이지에 unique `<title>` + `meta description`
- [ ] OG (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- [ ] Twitter Card (`twitter:card`, etc)
- [ ] `<html lang="ko">`
- [ ] `canonical` URL (Astro `Astro.url` 활용)
- [ ] `public/robots.txt` (모든 봇 허용, sitemap 명시)
- [ ] `@astrojs/sitemap` 인테그레이션으로 sitemap.xml 자동 생성
- [ ] Organization JSON-LD (전 페이지 공통)
- [ ] WebSite JSON-LD (전 페이지 공통)
- [ ] favicon + apple-touch-icon (단순 자호쿠 모노그램이라도)
- [ ] viewport 메타
- [ ] HTTPS는 Cloudflare Pages 자동

## 비고

- OG image는 임시로 단순 텍스트 이미지(1200x630) 1장. 디자인 결정되면 교체
- favicon은 단순 "Z" 또는 "自" 모노그램 SVG로 시작
