import Link from "next/link";
import Image from "next/image";
import { flagshipProgrammes } from "@/lib/flagship-programmes";
import { researchThemes } from "@/lib/research-themes";
import { newsArticles } from "@/lib/news-data";

const latestNews = newsArticles[0];
const landmarkProgrammes = flagshipProgrammes.slice(0, 4);
const themeChips = [
  "Digital Health",
  "AI & Analytics",
  "Disease Prevention",
  "Women in Mining",
  "Mental Health",
  "Innovation",
];

const stats = [
  { value: "20+", label: "Years of Research Experience" },
  { value: "08", label: "Core Research Themes" },
  { value: "45+", label: "Graduates Supervised" },
  { value: "11", label: "Policy Influence Areas" },
];

const partners = [
  { src: "/logos/samrc.svg", alt: "SAMRC", w: 120, h: 48 },
  { src: "/logos/univen.png", alt: "University of Venda", w: 72, h: 72 },
  { src: "/logos/mintek.png", alt: "Mintek", w: 130, h: 48 },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden text-white"
        style={{
          background: "linear-gradient(135deg, #0d1b35 0%, #164076 50%, #0d1b35 100%)",
        }}
      >
        <div className="sec !py-16 md:!py-24">
          <div className="sec-in grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                SAMRC Extramural Unit · Hosted by UNIVEN
              </span>
              <h1 className="mb-3 text-[clamp(1.75rem,3.5vw,2.875rem)] font-bold leading-[1.15]">
                Transforming Worker Health Through{" "}
                <span className="text-[#b8962e]">Digital Intelligence</span>
              </h1>
              <p className="mb-5 text-sm italic tracking-wide text-[#b8962e]/90">
                Digital Health · AI · Occupational Health · Mining
              </p>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-white/80">
                The DHAIOH Unit advances digital health and artificial intelligence for occupational
                health in mining — building predictive systems that protect workers across South Africa
                and beyond.
              </p>
              <div className="mb-8 flex flex-wrap gap-3">
                <Link href="/research-themes" className="bt">
                  Our Research →
                </Link>
                <Link href="/about" className="bot !border-white/40 !text-white hover:!bg-white/10">
                  About DHAIOH
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {themeChips.map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/75"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-soft overflow-hidden border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center gap-4">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-2 border-[#b8962e]/50">
                  <Image
                    src="/prof-zungu.jpg"
                    alt="Professor Lindiwe Zungu"
                    fill
                    className="object-cover"
                    sizes="80px"
                  />
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                    Co-Director
                  </p>
                  <p className="text-lg font-bold text-white">Prof Lindiwe Zungu</p>
                  <p className="text-sm text-white/70">OHS in Mining Research Institute</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-white/75">
                Leading research on digital occupational health, women in mining, and evidence-based
                policy for safer workplaces.
              </p>
              <Link
                href="/leadership"
                className="mt-4 inline-flex text-sm font-semibold text-[#b8962e] hover:underline"
              >
                Meet the leadership →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#164076] text-white">
        <div className="sec !py-10">
          <div className="sec-in grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="text-3xl font-bold text-[#b8962e] md:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/75">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research themes — teasers */}
      <section className="sec bg-white">
        <div className="sec-in">
          <p className="slbl">Priority Areas</p>
          <h2 className="stit">Our Research</h2>
          <p className="ssub">
            Eight strategic themes spanning digital health, AI, disease prevention, and gender-responsive
            mining health systems.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {researchThemes.map((theme) => (
              <Link
                key={theme.title}
                href="/research-themes"
                className="card-soft group p-5 transition-colors hover:border-[#b8962e]"
              >
                <h3 className="mb-2 text-[15px] font-bold leading-snug text-[#0d1b35] group-hover:text-[#164076]">
                  {theme.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5a7184]">{theme.short}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/research-themes" className="bt-blue">
              Explore All Research →
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship — 4 landmarks */}
      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in">
          <p className="slbl">Flagship Projects</p>
          <h2 className="stit">Landmark Initiatives</h2>
          <p className="ssub">
            Selected programmes driving early warning, AI surveillance, women in mining health, and
            psychosocial research.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            {landmarkProgrammes.map((prog) => (
              <Link
                key={prog.n}
                href="/research-themes"
                className="card-soft group overflow-hidden transition-colors hover:border-[#b8962e]"
              >
                <div className="relative aspect-[5/4] min-h-[260px] w-full">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 rounded bg-[#164076] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                    {prog.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                    {prog.subTag}
                  </p>
                  <h3 className="font-bold text-[#0d1b35] group-hover:text-[#164076]">{prog.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News — single feature */}
      <section className="sec bg-white">
        <div className="sec-in">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="slbl">Latest</p>
              <h2 className="stit !mb-0">News &amp; Events</h2>
            </div>
            <Link href="/news" className="text-sm font-semibold text-[#164076] hover:text-[#b8962e]">
              All News →
            </Link>
          </div>
          <Link
            href={`/news/${latestNews.slug}`}
            className="card-soft group grid overflow-hidden md:grid-cols-2"
          >
            <div className="relative min-h-[300px] md:min-h-full aspect-[5/4] md:aspect-auto">
              <Image
                src={latestNews.cover}
                alt={latestNews.coverAlt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#5a7184]">
                {latestNews.dateLabel}
              </p>
              <h3 className="mb-3 text-xl font-bold leading-snug text-[#0d1b35] group-hover:text-[#164076]">
                2026 National Women in Mining Indaba
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-[#5a7184] line-clamp-3">
                {latestNews.summary}
              </p>
              <span className="text-sm font-bold text-[#b8962e]">Read Story →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* Partners logos */}
      <section className="sec bg-[#eef3f7]">
        <div className="sec-in">
          <p className="slbl">Strategic Alliance</p>
          <h2 className="stit">Research Partners</h2>
          <p className="ssub">
            SAMRC, University of Venda, and Mintek form the institutional foundation of the DHAIOH Unit.
          </p>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((p) => (
              <Image
                key={p.alt}
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                className="object-contain opacity-90"
              />
            ))}
          </div>
          <Link href="/strategic-partners" className="bot">
            View All Partners →
          </Link>
        </div>
      </section>

      {/* Short callout */}
      <section className="bg-[#0d1b35] text-white">
        <div className="sec">
          <div className="sec-in max-w-3xl">
            <p className="slbl !text-[#b8962e]">Zero Harm</p>
            <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-white">
              Every worker should return home healthy, safe, and treated with dignity.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/75">
              From gender-responsive mining health to predictive surveillance, our work translates
              research into safer workplaces across the South African mining industry.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="bt">
                Partner With Us
              </Link>
              <Link href="/impact-framework" className="bot !border-white/40 !text-white hover:!bg-white/10">
                Impact Framework
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
