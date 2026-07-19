import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Youtube,
  Twitter,
  Sparkles,
  Gem,
  Cpu,
  Star,
  Quote,
  Lock,
  ArrowUpRight,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import beautyImg from "@/assets/beauty.jpg";
import jewelryImg from "@/assets/jewelry.jpg";
import techImg from "@/assets/tech.jpg";
import chanelImg from "@/assets/chanel.jpg";
import sulwhasooImg from "@/assets/sulwhasoo.jpg";
import nykaaImg from "@/assets/nykaa.jpg";
import logoImg from "@/assets/blimax-logo.jpg";
import logoChanel from "@/assets/logo-chanel.png";
import logoSamsung from "@/assets/logo-samsung.png";
import logoGoogle from "@/assets/logo-google.png";
import logoNykaa from "@/assets/logo-nykaa.png";
import logoRareBeauty from "@/assets/logo-rarebeauty.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Blimax — Brand Endorsements in Beauty, Jewelry & Tech" },
      {
        name: "description",
        content:
          "The personal endorsement portfolio of Blimax — brands and products I wear, use and recommend across beauty, jewelry and tech.",
      },
    ],
  }),
});

type Category = {
  rank: string;
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  icon: typeof Sparkles;
  brands: { name: string; product: string; note: string; href: string }[];
  reverse?: boolean;
};

const categories: Category[] = [
  {
    rank: "01",
    eyebrow: "01 — Beauty & Fashion",
    title: "Beauty & fashion I recommend.",
    copy: "A short list of couture and clean-beauty pieces I've chosen to feature — brands I actually reach for, styled the way I wear them.",
    image: beautyImg,
    imageAlt: "Beauty ambassador holding luxury skincare bottles",
    icon: Sparkles,
    brands: [
      { name: "Chanel", product: "N°1 de Chanel — Revitalizing Serum", note: "Personally recommended", href: "https://www.chanel.com" },
      { name: "Sulwhasoo", product: "First Care Activating Serum", note: "My pick", href: "https://www.sulwhasoo.com" },
      { name: "Rare Beauty", product: "Soft Pinch Liquid Blush", note: "In my rotation", href: "https://www.rarebeauty.com" },
    ],
  },
  {
    rank: "02",
    eyebrow: "02 — Jewelry",
    title: "Jewelry I've personally chosen to feature.",
    copy: "Fine and high-jewelry pieces I love wearing — the necklaces, cuffs and rings I've curated for myself and recommend to anyone who asks.",
    image: jewelryImg,
    imageAlt: "Model wearing an emerald and gold high-jewelry necklace",
    icon: Gem,
    brands: [
      { name: "Louis Vuitton", product: "LV Diamonds — Star Blossom", note: "Personally recommended", href: "https://www.louisvuitton.com/eng-e1/high-jewelry" },
      { name: "Chanel", product: "Coco Crush — 18K Beige Gold", note: "In my rotation", href: "https://www.chanel.com/us/fine-jewelry/" },
      { name: "Swarovski", product: "Millenia Collection", note: "Personally recommended", href: "https://www.swarovski.com" },
    ],
  },
  {
    rank: "03",
    eyebrow: "03 — Tech & Electronics",
    title: "Tech I actually use every day.",
    copy: "The phones, foldables and wearables I've picked for myself — recommendations from daily use, not paid placements.",
    image: techImg,
    imageAlt: "Ambassadors with Samsung smartphone, laptop and watch under emerald and rose lighting",
    icon: Cpu,
    brands: [
      { name: "Google", product: "Chromebook", note: "Used by Blimax", href: "https://www.google.com/chromebook/" },
      { name: "Samsung", product: "Galaxy S25 Ultra", note: "Personally recommended", href: "https://www.samsung.com/global/galaxy/galaxy-s25-ultra/" },
      { name: "Ant Esports", product: "Ant E-Mouse", note: "Recommended for gamers", href: "https://www.antesports.com" },
      { name: "HyperX", product: "Cloud III — Gaming Headset", note: "In my rotation", href: "https://hyperx.com" },
    ],
    reverse: true,
  },
];

const brandRoster = [
  { name: "Chanel", logo: logoChanel },
  { name: "Rare Beauty", logo: logoRareBeauty },
  { name: "Nykaa", logo: logoNykaa },
  { name: "Google", logo: logoGoogle },
  { name: "Samsung", logo: logoSamsung },
];

const socials = [
  { name: "X / Twitter", handle: "@blimax", followers: "1.1M", icon: Twitter, href: "#" },
  { name: "YouTube", handle: "Blimax", followers: "860K", icon: Youtube, href: "#" },
];

const testimonials = [
  {
    quote:
      "Blimax doesn't just endorse — he styles the story around the product. Our campaign performed 3× above our benchmark.",
    author: "Amélie R.",
    role: "Global Brand Director, Maison de Beauté",
  },
  {
    quote:
      "The most considered ambassador we've worked with. Craft, taste, and a real audience that actually purchases.",
    author: "David K.",
    role: "VP Marketing, Consumer Electronics",
  },
  {
    quote:
      "I bought the necklace the moment he wore it. Then the earrings. Then the perfume. He has ridiculous taste.",
    author: "Priya S.",
    role: "Verified customer",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-gold selection:text-emerald-deep">
      <TopNav />
      <Hero />
      <BrandMarquee />
      <About />
      {categories.map((cat) => (
        <CategorySection key={cat.rank} category={cat} />
      ))}
      <SocialProof />
      <Testimonials />
      <ContactLogin />
      <Footer />
    </div>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoImg}
            alt="Blimax logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Curated Endorsements
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-rose">About</a>
          <a href="#beauty" className="hover:text-rose">Beauty</a>
          <a href="#beauty" className="hover:text-rose">Fashion</a>
          <a href="#jewelry" className="hover:text-rose">Jewelry</a>
          <a href="#tech" className="hover:text-rose">Tech</a>
        </nav>
        <a
          href="#access"
          className="group inline-flex items-center gap-2 rounded-full border border-emerald-deep/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-emerald-deep transition hover:bg-emerald-deep hover:text-cream"
        >
          Private access
          <Lock className="h-3 w-3" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-emerald-deep text-cream">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% 20%, rgba(201,168,76,0.35), transparent 60%), radial-gradient(900px 500px at 15% 85%, rgba(232,138,176,0.45), transparent 60%), radial-gradient(700px 400px at 60% 60%, rgba(13,122,95,0.5), transparent 60%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 md:px-10 md:py-32 lg:grid-cols-12">
        <div className="lg:col-span-6 lg:pt-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Blimax Official
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[92px]">
            Blimax's{" "}
            <span className="italic text-rose-gradient">Endorsements</span> —
            a curated house, worn by him.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            Beauty, jewelry and technology — the brands, the products, and the
            campaigns behind them. Written, styled and stood behind, personally.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#beauty"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-[0.2em] text-emerald-deep transition hover:bg-rose hover:text-cream"
            >
              See the portfolio
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#access"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-6 py-3 text-sm uppercase tracking-[0.2em] text-cream/90 transition hover:border-rose hover:text-rose"
            >
              Work with Blimax
            </a>
          </div>
          <dl className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-cream/15 pt-8">
            {[
              { k: "48+", v: "Global brands" },
              { k: "4.8M", v: "Community" },
              { k: "6", v: "Years on stage" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-serif text-4xl text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/60">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm ring-1 ring-gold/30 lg:max-w-none">
            <img
              src={heroImg}
              alt="Indian male editorial portrait in emerald and gold — Blimax cover"
              width={1600}
              height={1800}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 via-transparent to-rose/10" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                  Cover · SS 26
                </div>
                <div className="flex items-center gap-2">
                  <img
                    src={logoImg}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full ring-1 ring-gold/50"
                  />
                  <span className="font-serif text-2xl text-cream">Blimax</span>
                </div>
              </div>
              <div className="rounded-full border border-rose/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-rose">
                In emerald & rose
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandMarquee() {
  const items = [...brandRoster, ...brandRoster];
  return (
    <section className="border-y border-border bg-cream py-10">
      <div className="mb-6 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Brands I personally recommend
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] items-center whitespace-nowrap">
          {items.map((b, i) => (
            <span key={`${b.name}-${i}`} className="flex items-center">
              <img
                src={b.logo}
                alt={`${b.name} logo`}
                className="h-8 w-auto object-contain md:h-10"
              />
              <span className="mx-8 text-gold">✦</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }`}</style>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="font-serif text-[120px] leading-none text-emerald-deep/10 md:text-[160px]">
              “
            </div>
            <div className="-mt-16 text-xs uppercase tracking-[0.4em] text-emerald md:-mt-20">
              About
            </div>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-deep md:text-5xl">
              Taste is the entire business.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-emerald-deep/10 pt-8 text-sm text-muted-foreground sm:grid-cols-2 md:grid-cols-1">
              <div>
                <div className="font-serif text-2xl text-emerald-deep">India · USA · Singapore · Japan</div>
                <div className="mt-1 uppercase tracking-[0.2em]">Home bases</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-emerald-deep">EN · FR · HI</div>
                <div className="mt-1 uppercase tracking-[0.2em]">Languages</div>
              </div>
              <div>
                <div className="font-serif text-2xl text-emerald-deep">Independent</div>
                <div className="mt-1 uppercase tracking-[0.2em]">Creator & curator</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:border-l md:border-emerald-deep/10 md:pl-14">
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:pt-4">
              <p>
                Blimax is an independent creator and endorsement curator, sharing
                personal recommendations across beauty, jewelry, and technology —
                a considered voice for products worth standing behind.
              </p>
              <p>
                Every brand featured here is chosen personally and styled personally.
                Unless a piece is explicitly noted as a paid partnership, mentions
                reflect my own recommendation. No mass posting. No noise.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-emerald-deep/10 pt-8">
              <div>
                <div className="font-serif text-3xl text-emerald-deep">48+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Brands featured
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-emerald-deep">3</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Categories
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-emerald-deep">100%</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Independent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CategorySection({ category }: { category: Category }) {
  const Icon = category.icon;
  const anchor =
    category.rank === "01" ? "beauty" : category.rank === "02" ? "jewelry" : "tech";
  const dark = category.rank === "02";

  return (
    <section
      id={anchor}
      className={
        dark
          ? "bg-emerald-deep py-24 text-cream md:py-32"
          : "bg-background py-24 md:py-32"
      }
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div
          className={`grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 ${
            category.reverse ? "lg:[&>div:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-6">
            <a
              href={`#${anchor}-brands`}
              className="group relative block aspect-[4/5] overflow-hidden rounded-sm"
              aria-label={`See brands in ${category.eyebrow}`}
            >
              <img
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                width={1400}
                height={1600}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute left-0 top-0 flex items-center gap-3 bg-gold px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-emerald-deep">
                <Icon className="h-3 w-3" />
                {category.eyebrow}
              </div>
              {category.rank === "01" && (
                <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-cream/90 px-3 py-1.5 backdrop-blur">
                  <img src={logoNykaa} alt="Nykaa" className="h-4 w-auto object-contain" />
                  <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-deep">
                    As seen on Nykaa
                  </span>
                </div>
              )}
            </a>
          </div>
          <div className="lg:col-span-6 lg:pt-6">
            <div
              className={`font-serif text-[140px] leading-none ${
                dark ? "text-gold/30" : "text-emerald-deep/10"
              }`}
            >
              {category.rank}
            </div>
            <h2
              className={`mt-4 font-serif text-4xl leading-tight md:text-6xl ${
                dark ? "text-cream" : "text-emerald-deep"
              }`}
            >
              {category.title}
            </h2>
            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed ${
                dark ? "text-cream/75" : "text-foreground/75"
              }`}
            >
              {category.copy}
            </p>

            {category.rank === "01" && (
              <div className="mt-10 grid grid-cols-3 gap-4">
                <img
                  src={chanelImg}
                  alt="Chanel beauty campaign"
                  loading="lazy"
                  width={340}
                  height={425}
                  className="aspect-[4/5] w-full rounded-sm object-cover ring-1 ring-emerald-deep/10"
                />
                <img
                  src={sulwhasooImg}
                  alt="Sulwhasoo First Care Activating Serum"
                  loading="lazy"
                  width={340}
                  height={425}
                  className="aspect-[4/5] w-full rounded-sm object-cover ring-1 ring-emerald-deep/10"
                />
                <img
                  src={nykaaImg}
                  alt="Beauty and skincare product photography"
                  loading="lazy"
                  width={340}
                  height={425}
                  className="aspect-[4/5] w-full rounded-sm object-cover ring-1 ring-emerald-deep/10"
                />
              </div>
            )}

            <ul id={`${anchor}-brands`} className="mt-10 divide-y divide-current/10 scroll-mt-24">
              {category.brands.map((b) => (
                <li
                  key={b.name + b.product}
                  className={dark ? "border-cream/10" : "border-emerald-deep/10"}
                  style={{ borderTop: "1px solid currentColor", opacity: 1 }}
                >
                  <a
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group grid grid-cols-12 items-baseline gap-4 py-5 transition ${
                      dark ? "hover:text-rose" : "hover:text-rose"
                    }`}
                  >
                  <div
                    className={`col-span-4 font-serif text-2xl ${
                      dark ? "text-gold" : "text-emerald-deep"
                    }`}
                  >
                    {b.name}
                  </div>
                  <div
                    className={`col-span-6 text-sm ${
                      dark ? "text-cream/80" : "text-foreground/80"
                    }`}
                  >
                    {b.product}
                  </div>
                  <div
                    className={`col-span-2 flex items-center justify-end gap-1 text-right text-[10px] uppercase tracking-[0.2em] ${
                      dark ? "text-cream/50" : "text-muted-foreground"
                    }`}
                  >
                    {b.note}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </div>
                  </a>
                </li>
              ))}
            </ul>

            {category.rank === "01" && (
              <a
                href="https://www.nykaa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 flex items-center justify-between rounded-sm border border-emerald-deep/15 bg-cream/50 px-6 py-5 transition hover:border-gold hover:bg-cream"
              >
                <div>
                  <div className="font-serif text-xl text-emerald-deep">Nykaa</div>
                  <div className="mt-1 text-sm text-foreground/70">
                    Where I shop and link everything featured on this page
                  </div>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Retail partner
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-emerald">
              The audience
            </div>
            <h2 className="mt-3 font-serif text-4xl text-emerald-deep md:text-5xl">
              2M+ viewers & readers.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            A private community that buys what Blimax wears. Every platform is
            hand-run — no ghosts, no bots.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-sm bg-emerald-deep/10 sm:grid-cols-2">
          {socials.map((s) => {
            const I = s.icon;
            return (
              <a
                key={s.name}
                href={s.href}
                className="group flex flex-col justify-between bg-cream p-8 transition hover:bg-emerald-deep hover:text-cream"
              >
                <div className="flex items-center justify-between">
                  <I className="h-5 w-5 text-emerald-deep group-hover:text-gold" />
                  <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
                </div>
                <div className="mt-16">
                  <div className="font-serif text-4xl text-emerald-deep group-hover:text-gold">
                    {s.followers}
                  </div>
                  <div className="mt-1 text-sm">{s.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-cream/60">
                    {s.handle}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="voices" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="text-xs uppercase tracking-[0.4em] text-emerald">
          Voices
        </div>
        <h2 className="mt-3 font-serif text-4xl text-emerald-deep md:text-5xl">
          Brands & customers who vouch.
        </h2>
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="relative flex flex-col justify-between rounded-sm border border-emerald-deep/15 bg-cream p-8"
            >
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-6 font-serif text-xl leading-snug text-emerald-deep">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-emerald-deep/10 pt-4">
                <div className="font-medium text-emerald-deep">{t.author}</div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t.role}
                </div>
                <div className="mt-3 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-current" />
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactLogin() {
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="access" className="bg-emerald-deep py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-10">
        <div>
          <div className="text-xs uppercase tracking-[0.4em] text-gold">
            Contact
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Say hello.
          </h2>
          <p className="mt-6 max-w-md text-cream/80">
            For endorsement enquiries, press, and personal recommendations —
            use the form and I'll get back to you directly.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-gold">·</span>
              <span>Response within 48 hours, on weekdays</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold">·</span>
              <span>Based across India, USA, Singapore & Japan</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-sm border border-gold/30 bg-emerald-deep/60 p-8 backdrop-blur"
        >
          <div className="flex items-center justify-between">
            <div className="font-serif text-2xl text-gold">Get in touch</div>
            <Lock className="h-4 w-4 text-gold" />
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Send a message to the studio
          </div>

          {sent ? (
            <div className="mt-10 rounded-sm border border-gold/40 bg-emerald/40 p-6 text-sm text-cream">
              Thank you{ name ? `, ${name}` : "" } — your message has been
              received. The studio will follow up within 48 hours.
            </div>
          ) : (
            <div className="mt-8 space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Your name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={fromEmail}
                  onChange={(e) => setFromEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Brand / company (optional)
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Company name"
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me a little about the project…"
                  className="mt-2 w-full resize-none border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-[0.2em] text-emerald-deep transition hover:bg-cream"
              >
                Send message
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-emerald-deep/15 bg-cream py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-xs text-muted-foreground md:px-10">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 font-serif text-lg text-emerald-deep">
            <img
              src={logoImg}
              alt="Blimax"
              width={28}
              height={28}
              className="h-7 w-7 rounded-full ring-1 ring-gold/40"
            />
            Blimax <span className="text-rose">✦</span>
          </div>
          <div>© {new Date().getFullYear()} Blimax. All rights reserved.</div>
          <div className="uppercase tracking-[0.2em]">Crafted in emerald, gold & rose</div>
        </div>
        <p className="mx-auto max-w-3xl text-center text-[11px] leading-relaxed text-muted-foreground/80">
          Blimax is an independent creator. Brand mentions reflect personal
          recommendations unless otherwise noted as a paid partnership.
        </p>
      </div>
    </footer>
  );
}
