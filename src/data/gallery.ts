/**
 * Galería con fotos referenciales (Unsplash, verificadas).
 * Para usar las fotos reales de Wasi Pet: reemplaza `img` por la URL o el
 * import del archivo local (src/assets/images/) y ajusta `alt` y `ratio`.
 */
export interface GalleryItem {
  name: string;
  service: string;
  img: string;
  alt: string;
  ratio: "tall" | "wide" | "square";
}

const unsplash = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;

export const GALLERY: GalleryItem[] = [
  {
    name: "Luna",
    service: "Baño + corte",
    img: unsplash("1507146426996-ef05306b995a"),
    alt: "Luna, cachorra golden, recién bañada y lista para volver a casa",
    ratio: "wide",
  },
  {
    name: "Rocky",
    service: "Corte higiénico",
    img: unsplash("1543466835-00a7907e9de1"),
    alt: "Rocky, beagle, sonriendo feliz después de su corte higiénico",
    ratio: "wide",
  },
  {
    name: "Milo",
    service: "Spa canino",
    img: unsplash("1518717758536-85ae29035b6d"),
    alt: "Milo relamiéndose de gusto después de su spa canino",
    ratio: "square",
  },
  {
    name: "Kira",
    service: "Deslanado + baño",
    img: unsplash("1561037404-61cd46aa615b"),
    alt: "Kira con su pelaje suave y desenredado después del baño",
    ratio: "square",
  },
  {
    name: "Thor",
    service: "Corte de raza",
    img: unsplash("1529429617124-95b109e86bb8"),
    alt: "Thor, samoyedo, con su pelaje blanco esponjoso recién arreglado",
    ratio: "tall",
  },
  {
    name: "Coco",
    service: "Corte + perfume",
    img: unsplash("1581888227599-779811939961"),
    alt: "Coco descansando cómodo y fresquito después de su corte y perfume",
    ratio: "wide",
  },
];
