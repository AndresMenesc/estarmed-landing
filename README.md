# EstarMed — sitio de ventas

Landing de marketing para **EstarMed** (producto de Estárter S.A.S.): logística de atención médica domiciliaria.

```bash
npm install
cp .env.example .env.local   # opcional
npm run dev -- --port 43127
# production check
npm run build && npm run start -- --port 43137
```

Dev: http://127.0.0.1:43127/ · Prod preview: http://127.0.0.1:43137/

## Qué incluye

- Demo form (Ley 1581) → `POST /api/demo` (almacén local + `DEMO_WEBHOOK_URL`)
- SEO: metadata, OG image, robots, sitemap, JSON-LD
- Borradores `/privacidad` y `/terminos`
- Cookie banner + analytics env-gated
- Video de recorrido (recreaciones anonymizadas) en el hero

## Video

Recrear frames: `node scripts/record-walkthrough.mjs` (requiere Chrome + ffmpeg y el dev server).

Archivos en `public/video/` y en el store `media/video/`.

- Walkthrough 40s · 1280×720 · ~1.7 MB (CRF 15, short GOP) para texto nítido
- Hero loop ~67 KB (ligero); en móvil solo se muestra el póster hasta interacción

## Lighthouse (mobile, `next start`)

Última medición simulada: Performance **98**, LCP **2.4 s** (póster LCP + preload WebP + video diferido + JS recortado).
