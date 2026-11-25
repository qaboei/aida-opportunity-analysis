# AIDA · Opportunity Analysis

A presentation website for the AIDA opportunity analysis (FWS310, Abu Dhabi University). It's built with React, Vite and [Paper Shaders](https://shaders.paper.design).

## Presenting

- Move with **← →**, **space**, a clicker, a click or a swipe.
- Press **F** for full screen and **M** for the slide menu.
- Each chapter belongs to one presenter. The chips at the bottom jump straight to a chapter.
- Link to a slide with its number, for example `#12`.

| Chapter | Presenter |
|---|---|
| Opening | Abbas |
| Vision & Strategy | Momen |
| Customers & Lean Startup | Faisal |
| Business Model & Positioning | Matthew |
| Go-to-Market | Abdulla |
| Capital, Risk & Legal | Fadel |
| Closing | Abbas |

## Developing

```bash
npm install
npm run dev
```

The slide text lives in `src/content.js`. Every push to `main` redeploys the site to GitHub Pages.
