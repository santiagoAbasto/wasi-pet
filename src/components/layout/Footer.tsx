import { Clock, Heart, MapPin, MessageCircle, Phone } from "lucide-react";
import { NAV_LINKS, SITE, WA_LINK } from "../../data/site";
import { Button } from "../ui/Button";
import { Logo } from "../ui/Logo";
import { FacebookIcon, InstagramIcon } from "../ui/SocialIcons";

export function Footer() {
  return (
    <footer id="contacto" className="relative overflow-hidden bg-plum text-white">
      <div
        aria-hidden="true"
        className="absolute -right-32 -top-32 size-96 rounded-full bg-secondary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 size-96 rounded-full bg-primary/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:py-20">
        <div>
          <Logo dark />
          <p className="mt-5 max-w-sm leading-relaxed text-white/65">
            Peluquería canina y petshop en Cochabamba. Cuidado, amor y estética
            en un solo lugar para tu peludito.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Wasi Pet"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Wasi Pet"
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-secondary"
            >
              <FacebookIcon className="size-5" />
            </a>
          </div>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h3 className="font-display text-lg font-bold">Explora</h3>
          <ul className="mt-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-block rounded-lg py-1.5 text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-lg font-bold">Servicios</h3>
          <ul className="mt-4 space-y-1 text-white/65">
            {["Baño completo", "Corte de pelo", "Corte higiénico", "Tratamientos especiales", "Petshop"].map(
              (s) => (
                <li key={s}>
                  <a href="#servicios" className="inline-block rounded-lg py-1.5 transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold">Contacto</h3>
          <ul className="mt-4 space-y-3.5 text-white/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-[#f9aed6]" />
              <span>
                {SITE.city}, Bolivia
                <a
                  href={SITE.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-bold text-white underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-[#f9aed6]"
                >
                  Ver en Google Maps
                </a>
              </span>
            </li>
            <li>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-white">
                <Phone className="size-5 shrink-0 text-[#f9aed6]" />
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="size-5 shrink-0 text-[#f9aed6]" />
              Consultar horarios por WhatsApp
            </li>
          </ul>
          <Button
            href={WA_LINK}
            variant="whatsapp"
            external
            className="mt-6"
            icon={<MessageCircle className="size-4.5" />}
          >
            Agendar ahora
          </Button>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-white/50 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Wasi Pet. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1.5">
            Hecho con <Heart className="size-3.5 fill-primary text-primary" aria-hidden="true" /> para los
            peluditos de Cochabamba
          </p>
        </div>
      </div>
    </footer>
  );
}
