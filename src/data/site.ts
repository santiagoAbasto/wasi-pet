export const SITE = {
  name: "Wasi Pet",
  category: "Peluquería Canina · Petshop",
  city: "Cochabamba",
  phoneDisplay: "+591 626 06287",
  phone: "59162606287",
  instagram: "https://www.instagram.com/wasipet_cocha/",
  facebook: "https://www.facebook.com/wasipetcocha/",
  maps: "https://www.google.com/maps/search/?api=1&query=Wasi%20Pet%20Cochabamba",
} as const;

export const waLink = (message: string) =>
  `https://wa.me/${SITE.phone}?text=${encodeURIComponent(message)}`;

export const WA_LINK = waLink(
  "Hola Wasi Pet, quiero agendar una cita para mi peludito",
);

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Galería", href: "#galeria" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Contacto", href: "#contacto" },
] as const;
