import {
  Bath,
  Ear,
  Gift,
  PawPrint,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type ServiceTint = "pink" | "purple" | "gold";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  tint: ServiceTint;
  /** Las tarjetas destacadas se renderizan grandes y con fotografía */
  featured?: boolean;
  image?: string;
  imageAlt?: string;
}

export const SERVICES: Service[] = [
  {
    icon: Bath,
    title: "Baño completo",
    desc: "Shampoo según su tipo de pelaje, secado con paciencia y perfume suave de despedida.",
    tint: "pink",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1100&q=75",
    imageAlt: "Perro feliz disfrutando del agua y la espuma durante su baño",
  },
  {
    icon: Scissors,
    title: "Corte de pelo",
    desc: "Estilo según raza o a tu gusto, con acabado prolijo y manejo tranquilo.",
    tint: "purple",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1591769225440-811ad7d6eab3?auto=format&fit=crop&w=1100&q=75",
    imageAlt: "Caniche con corte de pelo recién hecho mirando a cámara",
  },
  {
    icon: ShieldCheck,
    title: "Corte higiénico",
    desc: "Zonas delicadas limpias y cómodas, para que se sienta fresco todos los días.",
    tint: "pink",
  },
  {
    icon: Ear,
    title: "Limpieza de oídos",
    desc: "Higiene suave que previene molestias e infecciones, sin estrés.",
    tint: "purple",
  },
  {
    icon: PawPrint,
    title: "Corte de uñas",
    desc: "Patitas cómodas y seguras, con manejo paciente y cariñoso.",
    tint: "gold",
  },
  {
    icon: ShoppingBag,
    title: "Petshop",
    desc: "Shampoos, snacks, juguetes y accesorios seleccionados con cariño.",
    tint: "pink",
  },
  {
    icon: Sparkles,
    title: "Tratamientos especiales",
    desc: "Hidratación, deslanado y cuidados extra para pelajes exigentes.",
    tint: "purple",
  },
  {
    icon: Gift,
    title: "Paquetes para peluditos",
    desc: "Combos de baño, corte y cuidado pensados para engreírlo y ahorrar.",
    tint: "gold",
  },
];
