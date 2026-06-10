import { PawPrint } from "lucide-react";
import { GALLERY, type GalleryItem } from "../../data/gallery";
import { IS_FIGMA_CAPTURE, Reveal, Reveal3D } from "../ui/MotionWrapper";
import { SectionTitle } from "../ui/SectionTitle";

const RATIO: Record<GalleryItem["ratio"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export function Gallery() {
  return (
    <section id="galeria" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <SectionTitle
          script="antes y después"
          title="Peluditos que salen estrenando look"
          lede="Cada baño y cada corte termina igual: una cola moviéndose y una familia feliz."
        />
      </Reveal>

      {/* El serializador de Figma no soporta CSS columns: en captura usamos grid */}
      <div
        className={
          IS_FIGMA_CAPTURE
            ? "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "mt-12 columns-2 gap-4 lg:columns-3 [&>*]:mb-4"
        }
      >
        {GALLERY.map((item, i) => (
          <Reveal3D
            key={item.name}
            delay={(i % 3) * 0.08}
            direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
            tilt={14}
            className="break-inside-avoid"
          >
            <figure className="group relative overflow-hidden rounded-[28px] shadow-[0_14px_34px_-20px_rgb(58_17_48/0.4)]">
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                  IS_FIGMA_CAPTURE ? "aspect-[4/3]" : RATIO[item.ratio]
                }`}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <p className="font-display text-lg font-extrabold text-white">{item.name}</p>
                <p className="text-sm font-semibold text-white/75">{item.service}</p>
              </figcaption>
            </figure>
          </Reveal3D>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mt-8 flex items-center gap-2 text-sm font-semibold text-muted">
          <PawPrint className="size-4 text-primary" aria-hidden="true" />
          Fotos referenciales. Muy pronto verás aquí a los peluditos reales de
          Wasi Pet, directo de nuestro Instagram.
        </p>
      </Reveal>
    </section>
  );
}
