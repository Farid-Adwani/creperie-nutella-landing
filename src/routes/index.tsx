import { createFileRoute } from "@tanstack/react-router";

import logo from "@/assets/logo.png.asset.json";
import heroCrepe from "@/assets/hero-crepe.jpg";
import menuNutella from "@/assets/menu-nutella.jpg";
import menuGaufre from "@/assets/menu-gaufre.jpg";
import menuCaramel from "@/assets/menu-caramel.jpg";
import interior from "@/assets/interior.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crêperie Nutella — Crêpes & gaufres au chocolat" },
      {
        name: "description",
        content:
          "Crêperie Nutella : crêpes fines, gaufres croustillantes et chocolat noisette préparés à la minute. Découvrez la carte, les horaires et l'adresse.",
      },
      { property: "og:title", content: "Crêperie Nutella — Crêpes & gaufres au chocolat" },
      {
        property: "og:description",
        content:
          "Crêpes fines, gaufres croustillantes et chocolat noisette préparés à la minute. هنا تباع السعادة خلسة.",
      },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const menu = [
  {
    name: "Crêpe Nutella Signature",
    price: "7,5 DT",
    desc: "Crêpe fine, généreuse couche de chocolat noisette, noisettes torréfiées et pointe de fleur de sel.",
    img: menuNutella,
    featured: false,
  },
  {
    name: "Gaufre Chocolat",
    price: "8 DT",
    desc: "Gaufre croustillante, ganache maison, éclats de noisette et copeaux de cacao.",
    img: menuGaufre,
    featured: true,
  },
  {
    name: "Crêpe Caramel Noisette",
    price: "8,5 DT",
    desc: "Sauce caramel salé, praliné de noisette, fraises fraîches et boule de glace vanille.",
    img: menuCaramel,
    featured: false,
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Logo Crêperie Nutella"
              width={56}
              height={56}
              className="size-12 rounded-full md:size-14"
            />
            <span className="font-display text-xl font-semibold tracking-tight text-cocoa md:text-2xl">
              Crêperie <span className="italic text-rouge">Nutella</span>
            </span>
          </a>
          <nav className="hidden items-center gap-9 text-sm font-medium text-cocoa/70 md:flex">
            <a href="#menu" className="transition-colors hover:text-rouge">
              La carte
            </a>
            <a href="#maison" className="transition-colors hover:text-rouge">
              La maison
            </a>
            <a href="#visite" className="transition-colors hover:text-rouge">
              Nous trouver
            </a>
          </nav>
          <a
            href="tel:24404005"
            className="rounded-full bg-cocoa px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-rouge"
          >
            24 404 005
          </a>
        </div>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl overflow-hidden px-6 pt-8 pb-20 md:pt-14 md:pb-28">
        <div className="pointer-events-none absolute -top-16 -right-10 size-72 rounded-full bg-hazelnut/40 blur-3xl drift" />
        <div className="pointer-events-none absolute bottom-0 -left-24 size-80 rounded-full bg-rouge/15 blur-3xl floaty" />

        <div className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="fade-up font-body text-xs font-semibold tracking-[0.35em] text-rouge uppercase">
              هنا تباع السعادة خلسة
            </p>
            <h1 className="fade-up font-display mt-6 text-[3.4rem] leading-[0.92] font-medium text-cocoa md:text-[5.5rem]">
              La crêpe
              <br />
              <span className="italic text-chocolate">parfaitement</span>
              <br />
              <span className="italic text-rouge">nutella.</span>
            </h1>
            <p className="fade-up mt-8 max-w-md text-lg leading-relaxed text-cocoa/70">
              Crêpes fines, gaufres croustillantes et chocolat noisette fondant. Préparés à la
              minute, à emporter ou à savourer sur place.
            </p>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-rouge px-7 py-4 font-semibold text-cream transition-transform hover:scale-[1.03] hover:bg-chocolate"
              >
                Voir la carte
              </a>
              <a
                href="#visite"
                className="rounded-full border border-cocoa/20 px-7 py-4 font-semibold text-cocoa transition-colors hover:border-cocoa hover:bg-panel"
              >
                Nous trouver
              </a>
            </div>
            <div className="fade-up mt-12 flex items-center gap-8 text-cocoa">
              <div>
                <p className="font-display text-3xl font-semibold">100%</p>
                <p className="text-xs tracking-wide text-cocoa/50">fait à la minute</p>
              </div>
              <div className="h-10 w-px bg-cocoa/10" />
              <div>
                <p className="font-display text-3xl font-semibold">12</p>
                <p className="text-xs tracking-wide text-cocoa/50">recettes gourmandes</p>
              </div>
              <div className="h-10 w-px bg-cocoa/10" />
              <div>
                <p className="font-display text-3xl font-semibold">5 min</p>
                <p className="text-xs tracking-wide text-cocoa/50">à la commande</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={heroCrepe}
              alt="Crêpe dorée nappée de chocolat noisette et de noisettes torréfiées"
              width={1024}
              height={1280}
              className="floaty aspect-4/5 w-full rounded-[2rem] object-cover shadow-2xl shadow-cocoa/20"
            />
            <div className="absolute bottom-8 -left-4 rotate-[-4deg] rounded-2xl border border-cocoa/5 bg-cream px-6 py-4 shadow-xl shadow-cocoa/10 md:-left-6">
              <p className="font-display text-lg leading-none text-cocoa italic">La signature</p>
              <p className="mt-1 text-xs text-cocoa/50">Nutella &amp; noisettes</p>
            </div>
            <div className="spin-slow absolute top-6 -right-3 grid size-28 place-items-center rounded-full bg-rouge text-center">
              <span className="text-[11px] leading-tight font-semibold text-cream">
                Chocolat
                <br />
                fondant
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-cocoa py-5 text-cream">
        <div className="marq font-display flex w-max text-2xl whitespace-nowrap italic md:text-3xl">
          {[0, 1].map((k) => (
            <div key={k} className="flex">
              {[
                "Crêpe Nutella",
                "Gaufre Chocolat",
                "Noisettes torréfiées",
                "Caramel salé",
                "Milkshake",
              ].map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-6">{item}</span>
                  <span className="px-2 text-rouge">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section id="menu" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] text-rouge uppercase">La carte</p>
            <h2 className="font-display mt-3 text-5xl leading-none font-medium text-cocoa md:text-6xl">
              Le <span className="italic text-chocolate">sucré</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-sm text-cocoa/50 md:block">
            Toutes nos crêpes sont préparées devant vous, garnies à la demande.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {menu.map((item, i) => (
            <Reveal key={item.name} delay={i * 120}>
              <article
                className={`group h-full overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1 ${
                  item.featured
                    ? "border-cocoa/5 bg-cocoa text-cream"
                    : "border-cocoa/5 bg-card hover:border-rouge/40"
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="lazy"
                    width={800}
                    height={640}
                    className="aspect-5/4 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {item.featured && (
                    <span className="absolute top-5 right-5 rounded-full bg-rouge px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-cream uppercase">
                      Best-seller
                    </span>
                  )}
                </div>
                <div className="p-7">
                  <div className="mb-3 flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <span
                      className={`font-display text-2xl ${item.featured ? "text-hazelnut" : "text-rouge"}`}
                    >
                      {item.price}
                    </span>
                  </div>
                  <p
                    className={`text-sm leading-relaxed ${item.featured ? "text-cream/60" : "text-cocoa/60"}`}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="maison" className="bg-panel">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <Reveal>
            <img
              src={interior}
              alt="Intérieur chaleureux de la Crêperie Nutella"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-[2rem] object-cover shadow-xl shadow-cocoa/10"
            />
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs font-semibold tracking-[0.35em] text-rouge uppercase">
              La maison
            </p>
            <h2 className="font-display mt-3 text-5xl leading-[1.02] font-medium text-cocoa md:text-6xl">
              Un coin <span className="italic text-chocolate">gourmand</span> où la joie se
              partage.
            </h2>
            <p className="mt-8 max-w-lg leading-relaxed text-cocoa/70">
              Pâte reposée, plaque brûlante, chocolat fondant : notre recette n'a pas changé. On
              étale, on plie, on sert — et le reste appartient à ceux qui goûtent.
            </p>
            <p className="font-display mt-6 text-2xl text-cocoa italic" dir="rtl" lang="ar">
              هنا تباع السعادة خلسة
            </p>
          </Reveal>
        </div>
      </section>

      <section id="visite" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-5xl leading-none font-medium text-cocoa md:text-6xl">
              Passez nous <span className="italic text-rouge">voir</span>
            </h2>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-rouge" />
                <div>
                  <p className="text-xs tracking-[0.25em] text-cocoa/40 uppercase">Horaires</p>
                  <p className="mt-1 text-lg text-cocoa">Tous les jours · 10h00 — 00h00</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-rouge" />
                <div>
                  <p className="text-xs tracking-[0.25em] text-cocoa/40 uppercase">Téléphone</p>
                  <a href="tel:24404005" className="mt-1 block text-lg text-cocoa hover:text-rouge">
                    24 404 005
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-2 size-2 shrink-0 rounded-full bg-rouge" />
                <div>
                  <p className="text-xs tracking-[0.25em] text-cocoa/40 uppercase">Commandes</p>
                  <p className="mt-1 text-lg text-cocoa">Sur place, à emporter et en livraison</p>
                </div>
              </div>
            </div>
            <a
              href="tel:24404005"
              className="mt-10 inline-flex rounded-full bg-cocoa px-7 py-4 font-semibold text-cream transition-colors hover:bg-rouge"
            >
              Commander par téléphone
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid h-full min-h-72 place-items-center rounded-[2rem] bg-cocoa p-10 text-center">
              <div>
                <img
                  src={logo.url}
                  alt="Logo Crêperie Nutella"
                  loading="lazy"
                  width={160}
                  height={160}
                  className="floaty mx-auto size-40 rounded-full"
                />
                <p className="font-display mt-6 text-3xl text-cream italic">Crêperie Nutella</p>
                <p className="mt-2 text-sm text-cream/50">Suivez-nous sur Facebook</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-cocoa text-cream">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <span className="font-display text-2xl font-semibold">
            Crêperie <span className="italic text-hazelnut">Nutella</span>
          </span>
          <a
            href="https://www.facebook.com/creperienutella.officiel/"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-cream/60 transition-colors hover:text-cream"
          >
            Facebook
          </a>
          <p className="text-xs text-cream/40">© 2026 Crêperie Nutella</p>
        </div>
      </footer>
    </div>
  );
}
