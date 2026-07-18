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
  Mail,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import beautyImg from "@/assets/beauty.jpg";
import jewelryImg from "@/assets/jewelry.jpg";
import techImg from "@/assets/tech.jpg";
import chanelImg from "@/assets/chanel.jpg";
import louisvuittonImg from "@/assets/louisvuitton.jpg";
import nykaaImg from "@/assets/nykaa.jpg";
import logoAsset from "@/assets/blimax-logo.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Blimax — Brand Endorsements in Beauty, Jewelry & Tech" },
      {
        name: "description",
        content:
          "The endorsement portfolio of Blimax. Featured campaigns with Chanel, Louis Vuitton, Nykaa, Google and Samsung.",
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
  brands: { name: string; product: string; note: string }[];
  reverse?: boolean;
};

const categories: Category[] = [
  {
    rank: "01",
    eyebrow: "Rank 01 — Beauty & Fashion",
    title: "The atelier of light and skin.",
    copy: "House campaigns and seasonal edits for the icons of couture and clean beauty. Editorial-first, product-obsessed.",
    image: beautyImg,
    imageAlt: "Beauty ambassador holding luxury skincare bottles",
    icon: Sparkles,
    brands: [
      { name: "Chanel", product: "N°1 de Chanel — Revitalizing Serum", note: "SS 26 face" },
      { name: "Louis Vuitton", product: "Capucines Mini — Emerald Edition", note: "Global campaign" },
      { name: "Nykaa", product: "Nykaa Naturals — Vitamin C Ritual", note: "Digital brand film" },
    ],
  },
  {
    rank: "02",
    eyebrow: "Rank 02 — Jewelry",
    title: "Heirlooms, worn like a signature.",
    copy: "High jewelry and everyday fine — sculpted around the collarbone, the wrist, the ear. Every stone earns its light.",
    image: jewelryImg,
    imageAlt: "Model wearing an emerald and gold high-jewelry necklace",
    icon: Gem,
    brands: [
      { name: "Louis Vuitton", product: "LV Diamonds — Star Blossom", note: "Bridal chapter" },
      { name: "Chanel", product: "Coco Crush — 18K Beige Gold", note: "Muse, capsule" },
      { name: "Blimax Édit", product: "Emerald Rope Necklace", note: "Personal curation" },
    ],
  },
  {
    rank: "03",
    eyebrow: "Rank 03 — Tech & Electronics",
    title: "Instruments for a modern life.",
    copy: "Devices, platforms and everyday tools chosen for craft, not novelty. Long-form reviews, product films, launch keynotes.",
    image: techImg,
    imageAlt: "Ambassador holding a smartphone and laptop under emerald lighting",
    icon: Cpu,
    brands: [
      { name: "Google", product: "Pixel 10 Pro — Creator Program", note: "Launch film" },
      { name: "Samsung", product: "Galaxy S — Ultra Series", note: "Global ambassador" },
      { name: "Samsung", product: "Galaxy Z Fold — Foldable Campaign", note: "Tech residency" },
      { name: "Samsung", product: "Galaxy Watch — Wellness Edit", note: "Seasonal host" },
    ],
    reverse: true,
  },
];

const brandRoster = [
  "Chanel",
  "Louis Vuitton",
  "Nykaa",
  "Google",
  "Samsung",
];

const socials = [
  { name: "X / Twitter", handle: "@blimax", followers: "1.1M", icon: Twitter, href: "#" },
  { name: "YouTube", handle: "Blimax", followers: "860K", icon: Youtube, href: "#" },
];

const testimonials = [
  {
    quote:
      "Blimax doesn't just endorse — she styles the story around the product. Our campaign performed 3× above our benchmark.",
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
      "I bought the necklace the moment she wore it. Then the earrings. Then the perfume. She has ridiculous taste.",
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
            src={logoAsset.url}
            alt="Blimax logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/40"
          />
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            Est. Endorsements
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-rose">About</a>
          <a href="#beauty" className="hover:text-rose">Beauty</a>
          <a href="#jewelry" className="hover:text-rose">Jewelry</a>
          <a href="#tech" className="hover:text-rose">Tech</a>
          <a href="#voices" className="hover:text-rose">Voices</a>
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
            The Endorsement House
          </div>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[92px]">
            Blimax's{" "}
            <span className="italic text-rose-gradient">Endorsements</span> —
            a curated house, worn by her.
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
              alt="Indian editorial portrait in emerald satin — Blimax cover"
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
                    src={logoAsset.url}
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
    <section className="border-y border-border bg-cream py-8">
      <div className="mb-6 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        Endorsed & featured
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-[marquee_40s_linear_infinite] gap-16 whitespace-nowrap">
          {items.map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="font-serif text-2xl tracking-widest text-emerald-deep/70 md:text-3xl"
            >
              {b.toUpperCase()}
              <span className="ml-16 text-gold">✦</span>
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
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.4em] text-emerald">
            About
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-emerald-deep md:text-5xl">
            Taste is the entire business.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-foreground/80 md:col-span-8">
          <p>
            Blimax is a brand ambassador and endorsement curator, working with
            houses across beauty, jewelry, and technology. The work sits between
            editorial and commerce — a considered voice for products worth
            standing behind.
          </p>
          <p>
            Every partnership is chosen personally, styled personally, and
            shipped with campaigns that hold up next to the brand's own
            direction. No mass posting. No noise. A short list of the finest.
          </p>
          <div className="gold-rule my-8" />
          <div className="grid grid-cols-2 gap-6 text-sm text-muted-foreground md:grid-cols-3">
            <div>
              <div className="font-serif text-2xl text-emerald-deep">India · USA · Singapore · Japan</div>
              <div className="mt-1 uppercase tracking-[0.2em]">Home bases</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-emerald-deep">EN · FR · HI</div>
              <div className="mt-1 uppercase tracking-[0.2em]">Languages</div>
            </div>
            <div>
              <div className="font-serif text-2xl text-emerald-deep">Talent & Legal</div>
              <div className="mt-1 uppercase tracking-[0.2em]">Represented by IMG</div>
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
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={category.image}
                alt={category.imageAlt}
                loading="lazy"
                width={1400}
                height={1600}
                className="h-full w-full object-cover"
              />
              <div className="absolute left-0 top-0 flex items-center gap-3 bg-gold px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-emerald-deep">
                <Icon className="h-3 w-3" />
                {category.eyebrow}
              </div>
            </div>
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

            <ul className="mt-10 divide-y divide-current/10">
              {category.brands.map((b) => (
                <li
                  key={b.name + b.product}
                  className={`grid grid-cols-12 items-baseline gap-4 py-5 ${
                    dark ? "border-cream/10" : "border-emerald-deep/10"
                  }`}
                  style={{ borderTop: "1px solid currentColor", opacity: 1 }}
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
                    className={`col-span-2 text-right text-[10px] uppercase tracking-[0.2em] ${
                      dark ? "text-cream/50" : "text-muted-foreground"
                    }`}
                  >
                    {b.note}
                  </div>
                </li>
              ))}
            </ul>
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
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-emerald-deep/10 md:grid-cols-4">
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            Contact & Private Access
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            My details, and the door to the client suite.
          </h2>
          <p className="mt-6 max-w-md text-cream/80">
            For endorsement enquiries, press, and brand suite login. Members see
            campaign decks, rate cards, and upcoming availability.
          </p>
          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:blimtheindustry@gmail.com" className="hover:text-gold">
                blimtheindustry@gmail.com
              </a>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">Official Contact Email</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              <a href="mailto:emilysharon69@gmail.com" className="hover:text-gold">
                emilysharon69@gmail.com
              </a>
              <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50">Brand Manager</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold">·</span>
              <span>Bookings via IMG Talent · India, USA, Singapore, Japan</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gold">·</span>
              <span>Response within 48 hours, on weekdays</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="relative rounded-sm border border-gold/30 bg-emerald-deep/60 p-8 backdrop-blur"
        >
          <div className="flex items-center justify-between">
            <div className="font-serif text-2xl text-gold">Client Suite</div>
            <Lock className="h-4 w-4 text-gold" />
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cream/60">
            Sign in to your brand portal
          </div>

          {sent ? (
            <div className="mt-10 rounded-sm border border-gold/40 bg-emerald/40 p-6 text-sm text-cream">
              Thank you — a secure link has been sent to{" "}
              <span className="text-gold">{email || "your inbox"}</span>. The
              studio will follow up shortly.
            </div>
          ) : (
            <div className="mt-8 space-y-5">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@brand.com"
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60">
                  Access code
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="mt-2 w-full border-b border-cream/20 bg-transparent py-2 text-cream placeholder:text-cream/30 focus:border-gold focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm uppercase tracking-[0.2em] text-emerald-deep transition hover:bg-cream"
              >
                Enter the suite
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <div className="text-center text-[10px] uppercase tracking-[0.3em] text-cream/50">
                Or request access · blimtheindustry@gmail.com
              </div>
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
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row md:px-10">
        <div className="flex items-center gap-2 font-serif text-lg text-emerald-deep">
          <img
            src={logoAsset.url}
            alt="Blimax"
            width={28}
            height={28}
            className="h-7 w-7 rounded-full ring-1 ring-gold/40"
          />
          Blimax <span className="text-rose">✦</span>
        </div>
        <div>© {new Date().getFullYear()} Blimax Endorsements. All rights reserved.</div>
        <div className="uppercase tracking-[0.2em]">Crafted in emerald, gold & rose</div>
      </div>
    </footer>
  );
}
