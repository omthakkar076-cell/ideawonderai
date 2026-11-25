# IdeaWonder AI — Homepage Phase 1

This is the homepage-first rebuild using the original supplied `index.html` as the visual and motion reference. The original branded `IW` wordmark, blue/white design language, hero film, interactive device composition, Three.js scene, GSAP and ScrollTrigger choreography are retained in `public/ideawonder-home.html`.

## Preview

Open `preview.html` in a modern browser. The reference page loads Three.js, GSAP, ScrollTrigger and Google Fonts from their CDNs, so an internet connection is required for the full motion and typography experience. If those libraries are unavailable, the page retains its non-motion layout where supported by the source implementation.

## Run the Next.js project

1. Install Node.js 20.9 or later.
2. Extract the project ZIP.
3. Open a terminal in the project folder.
4. Run `npm install`.
5. Run `npm run dev`.
6. Open `http://localhost:3000`.

The Next.js homepage route hosts the supplied HTML experience in a full-viewport frame so the original standalone animation scripts execute in their native document context. The outer Next.js layout supplies page metadata and the favicon.

## Phase-one scope

- Homepage only, for visual approval.
- Case studies remain omitted.
- Service, contact, legal and other internal links are temporarily directed to relevant homepage sections where possible. Dedicated routes will be built after homepage approval.
- No contact form backend or analytics integration is configured.
- No production domain is assumed.

## External dependencies

The original HTML uses CDN-hosted Three.js r128, GSAP 3.12.5, ScrollTrigger 3.12.5 and Google Fonts. These are loaded by the original page at runtime.

## Validation note

The HTML structure was parsed and the project files were checked. A Next.js production build was not run in this environment because the npm dependencies are not installed here; the earlier package installation attempt was blocked by registry DNS/network availability.
