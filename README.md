# Wasi Pet — Landing Page

Landing page de **Wasi Pet**, peluquería canina y petshop en Cochabamba.
React + Vite + TypeScript + Tailwind CSS v4 + Framer Motion + Lucide.

## Comandos

```bash
npm install     # instalar dependencias
npm run dev     # desarrollo en http://localhost:5173
npm run build   # type-check + build de producción (dist/)
npm run preview # servir el build de producción
```

## Estructura

```
src/
  components/
    layout/    Header (sticky glass + menú móvil), Footer (contacto)
    sections/  Hero, TrustBar, Services, Experience, Gallery,
               Petshop, Testimonials, FinalCTA
    ui/        Button, SectionTitle, MotionWrapper (Reveal), Logo,
               FloatingWhatsApp, SocialIcons
  data/        site.ts (WhatsApp, redes, nav), services.ts,
               gallery.ts, testimonials.ts
  styles/      globals.css (paleta, fuentes, utilidades, motion)
```

## Personalización rápida

- **Logos reales**: el logo está recreado en SVG en
  `src/components/ui/Logo.tsx`. Para usar el PNG original, colócalo en
  `src/assets/logos/` e impórtalo ahí. El favicon está en
  `public/favicon.svg`.
- **Fotos reales**: la galería usa fotos referenciales de Unsplash.
  Reemplaza las URLs en `src/data/gallery.ts` por las fotos de Instagram
  (idealmente guardadas en `src/assets/images/`).
- **WhatsApp, redes y textos de contacto**: todo en `src/data/site.ts`.
- **Servicios y precios**: `src/data/services.ts`.
- **Paleta y fuentes**: `src/styles/globals.css` (ver `DESIGN.md`).

## SEO

`index.html` incluye title, meta description, Open Graph, Twitter Card y
schema.org LocalBusiness. Si consigues dominio propio, añade `og:url` y
canonical.
