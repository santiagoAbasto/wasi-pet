# Sistema de diseño Wasi Pet

Paleta extraída de los logos oficiales (círculo magenta, anillo púrpura,
trazo blanco). Estrategia de color: Committed, el magenta carga la identidad.

## Color (variables en src/styles/globals.css)

| Token | Valor | Uso |
|---|---|---|
| primary | #dd3a8c | Magenta del logo. CTAs, acentos, script |
| primary-deep | #b01f6e | Hover/estados del magenta |
| secondary | #7a2fbf | Púrpura del anillo del logo. Iconos, detalles |
| secondary-deep | #58219a | Hover del púrpura |
| accent | #f2a93b | Dorado cálido. Estrellas, acentos puntuales |
| cream | #fff8fb | Fondo base (crema rosada, nunca blanco puro) |
| cream-soft | #fcecf5 | Bandas de sección |
| ink | #3a1130 | Texto principal (plum tintado, nunca negro) |
| muted | #7d5470 | Texto secundario |
| line | #f3d6e6 | Bordes |
| wa / wa-deep | #25d366 / #0f8a4d | WhatsApp (deep para botones con texto) |
| plum / plum-soft | #2c0b27 / #471a40 | Secciones oscuras (CTA final, footer) |

Gradientes: `--gradient-brand` (magenta→púrpura 120°) y `--gradient-plum`.

## Tipografía

- Display: **Baloo 2** (700/800) — títulos, botones. Redonda y mullida.
- Script: **Pacifico** — wordmark y palabra-acento por sección (es el sistema
  de "kicker" de la marca, eco del lettering del logo).
- Cuerpo: **Nunito** (400–800) — cálida, redondeada, legible.

## Componentes

- Radios: cards 28px, contenedores hero/CTA 3rem, pills full.
- Sombras: `shadow-soft` (rosada) y `shadow-lift` (plum, hover).
- Glass (`.glass`): solo header sticky, chips flotantes del hero,
  testimonios y menú móvil. No usarlo como default.
- Patrón de patitas (`.paw-pattern`) a opacidad 0.03 máximo.
- Burbujas decorativas con la utilidad `.bubble`.

## Motion

- Reveal: fade + y(26px) + blur(8px), ease [0.16,1,0.3,1], 0.7s, stagger
  0.06–0.1 entre tarjetas.
- Reveal3D (`MotionWrapper.tsx`): entrada en perspectiva 1000px con rotateX/
  rotateY según `direction` (up/left/right) y `tilt` 12–22°. Es el estándar
  para cards y bloques grandes.
- TiltCard (`TiltCard.tsx`): tilt 3D que sigue al mouse (springs 160/18,
  máx 5–8°). Solo en cards destacadas y testimonios.
- Hero: parallax con mouse (springs) + parallax 3D ligado al scroll (la foto
  se hunde, rota en X/Z y escala; el texto sube y se desvanece).
- Header: scroll-spy con IntersectionObserver y píldora activa con layoutId;
  barra de progreso de lectura (spring sobre scrollYProgress).
- Marquee: banda inclinada -1° con loop CSS (30s linear) y palabras en script.
- WhatsApp flotante: aparece tras 320px de scroll, bob infinito sutil,
  burbuja de saludo única auto-descartable, glifo real de WhatsApp.
- Experiencia: línea de progreso con scaleY ligada al scroll + números que
  hacen pop con spring.
- Todo respeta `prefers-reduced-motion` (CSS global + useReducedMotion).
