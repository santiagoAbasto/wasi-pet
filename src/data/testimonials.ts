export interface Testimonial {
  quote: string;
  author: string;
  pet: string;
  initials: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Excelente atención, mi perrita salió hermosa y olía riquísimo. Se nota el cariño con el que trabajan en cada detalle.",
    author: "Mariela Q.",
    pet: "mamá de Luna",
    initials: "MQ",
  },
  {
    quote:
      "Muy cariñosos y profesionales. Rocky siempre vuelve feliz y tranquilo de su baño, sin nada de estrés.",
    author: "Carlos A.",
    pet: "papá de Rocky",
    initials: "CA",
  },
  {
    quote:
      "Me encantó el resultado del corte, súper recomendado. Además responden rapidísimo por WhatsApp para agendar.",
    author: "Daniela R.",
    pet: "mamá de Milo",
    initials: "DR",
  },
];
