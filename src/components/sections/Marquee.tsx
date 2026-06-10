import { PawPrint } from "lucide-react";

const WORDS = [
  "Baño burbuja",
  "Corte de raza",
  "Spa canino",
  "Petshop",
  "Snacks y premios",
  "Atención con amor",
  "Corte de uñas",
  "Peluditos felices",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-6 font-script text-xl text-white sm:text-2xl">{word}</span>
          <PawPrint className="size-5 -rotate-12 text-white/50" />
        </span>
      ))}
    </div>
  );
}

/** Banda decorativa inclinada con los servicios en script, en loop infinito. */
export function Marquee() {
  return (
    <div aria-hidden="true" className="relative -my-3 select-none">
      <div className="-rotate-1 overflow-hidden bg-[image:var(--gradient-brand)] py-4 shadow-soft">
        <div className="flex w-max animate-marquee">
          <Strip />
          <Strip />
        </div>
      </div>
    </div>
  );
}
