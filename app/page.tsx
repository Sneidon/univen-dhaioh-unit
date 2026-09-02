import Link from "next/link";
import Image from "next/image";
import { flagshipProgrammes } from "@/lib/flagship-programmes";
import { newsArticles } from "@/lib/news-data";
import { themeCardsHome } from "@/lib/card-images";

const latestNews = newsArticles[0];
const landmarkProgrammes = flagshipProgrammes.slice(0, 4);

/** Homepage theme teasers — original site copy (not rewritten). */
const researchThemes = [
  {
    title: "Digital Health & Occupational Health Intelligence",
    desc: "Developing integrated digital platforms that support real-time occupational health surveillance, worker monitoring, and evidence-based decision-making.",
  },
  {
    title: "AI & Predictive Analytics",
    desc: "Leveraging machine learning to predict occupational health risks and support proactive interventions.",
  },
  {
    title: "Occupational Disease Prevention & Early Detection",
    desc: "Digital tools and predictive models for respiratory diseases, cancers, hearing loss and more.",
  },
  {
    title: "Medical Surveillance & Early Warning",
    desc: "Intelligent systems for rapid identification of health trends and emerging occupational risks.",
  },
  {
    title: "Women in Mining & Gender-Responsive Health",
    desc: "Innovative solutions addressing the unique occupational health needs of women in mining.",
  },
  {
    title: "Mental Health · Climate Change · Innovation",
    desc: "Psychosocial risk management, environmental health, sustainable mining, and commercialisation.",
  },
];

const stats = [
  { value: "20+", label: "Years of Research Experience", sub: "Occupational health expertise" },
  { value: "45+", label: "Graduates Supervised", sub: "Master's & Doctoral" },
  { value: "08", label: "Core Research Themes", sub: "Multidisciplinary agenda" },
  { value: "11", label: "Policy Influence Areas", sub: "National & regulatory" },
];

const partners = [
  {
    src: "/logos/univen.png",
    alt: "University of Venda",
    name: "University of Venda",
    role: "Host Institution",
    w: 88,
    h: 88,
  },
  {
    src: "/logos/samrc.svg",
    alt: "SAMRC",
    name: "South African Medical Research Council",
    role: "Strategic Funder",
    w: 140,
    h: 56,
  },
  {
    src: "/logos/mintek.png",
    alt: "Mintek",
    name: "Mintek",
    role: "Strategic Research Partner",
    w: 150,
    h: 56,
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Strategic Alliance */}
      <section className="relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/banners/hero-home-field-team.jpg"
            alt="DHAIOH researchers and partners in full protective gear during a mine site visit"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_35%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(13,27,53,0.94) 0%, rgba(13,27,53,0.82) 42%, rgba(22,64,118,0.72) 68%, rgba(13,27,53,0.78) 100%)",
            }}
          />
        </div>
        <div className="relative sec !py-16 md:!py-24">
          <div className="sec-in grid items-start gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
                The SAMRC–UNIVEN–MINTEK Strategic Alliance
              </p>
              <h1 className="mb-4 max-w-3xl text-[clamp(1.5rem,3.2vw,2.5rem)] font-bold leading-tight">
                Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector
                (DHAIOH)
              </h1>
              <p className="mb-5 text-xl font-semibold leading-snug text-[#b8962e] md:text-2xl">
                A Jointly Driven Strategic Initiative
              </p>
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                The DHAIOH Unit was established as a flagship three-way partnership combining strategic
                investment, academic leadership, and mining innovation to transform worker health through
                digital intelligence. This alliance is central to the Unit&apos;s identity, credibility, and
                long-term impact.
              </p>
              <div className="mb-8 flex flex-wrap gap-3">
                <Link href="/strategic-partners" className="bt">
                  View All Partners
                </Link>
                <Link href="/about" className="bot !border-white/40 !text-white hover:!bg-white/10">
                  About Unit
                </Link>
                <Link href="/research-themes" className="bot !border-[#b8962e]/60 !text-[#b8962e] hover:!bg-[#b8962e]/10">
                  Explore Research
                </Link>
              </div>
              <p className="text-sm font-semibold tracking-wide text-white/90">
                United for a Safer, Healthier Mining Sector
              </p>
            </div>

            {/* Core partners — director-style cards */}
            <div className="space-y-4">
              {partners.map((p) => (
                <div
                  key={p.alt}
                  className="rounded-[12px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#b8962e] bg-white p-2">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        width={p.w}
                        height={p.h}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                        {p.role}
                      </p>
                      <p className="text-lg font-bold leading-snug text-white">{p.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              <Link
                href="/strategic-partners"
                className="inline-flex text-sm font-semibold text-[#b8962e] hover:underline"
              >
                View All Partners →
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
                <p className="mt-1 text-sm font-semibold text-white">{s.label}</p>
                <p className="mt-0.5 text-xs text-white/60">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest highlight — Women in Mining Indaba */}
      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in">
          <div className="card-soft grid overflow-hidden md:grid-cols-2">
            <div className="relative min-h-[360px] w-full aspect-[4/3] md:min-h-[420px] md:aspect-auto">
              <Image
                src={latestNews.cover}
                alt={latestNews.coverAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8962e]">
                Latest Highlight · {latestNews.dateLabel}
              </p>
              <h2 className="mb-4 text-2xl font-bold leading-snug text-[#0d1b35] md:text-3xl">
                2026 National Women in Mining Indaba
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-[#5a7184] md:text-base">
                {latestNews.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={`/gallery/${latestNews.gallerySlug}`} className="bt">
                  View Gallery
                </Link>
                <Link href={`/news/${latestNews.slug}`} className="bot">
                  Read Story
                </Link>
                <a
                  href={latestNews.pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bot"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research themes — teasers (original home theme copy) */}
      <section className="sec bg-white">
        <div className="sec-in">
          <p className="slbl">Scientific Identity</p>
          <h2 className="stit">Strategic Research Themes</h2>
          <p className="ssub">Eight themes defining the future of digital occupational health.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {researchThemes.map((theme, i) => (
              <Link
                key={theme.title}
                href="/research-themes"
                className="card-soft group overflow-hidden transition-colors hover:border-[#b8962e]"
              >
                <div className="relative aspect-[5/4] min-h-[200px] w-full">
                  <Image
                    src={themeCardsHome[i].src}
                    alt={themeCardsHome[i].alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mb-2 text-[15px] font-bold leading-snug text-[#0d1b35] group-hover:text-[#164076]">
                    {theme.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a7184]">{theme.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/research-themes" className="bt-blue">
              All Themes →
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship — 4 landmarks (avoids duplicating full programme grid) */}
      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="slbl">Active Research Portfolio</p>
              <h2 className="stit !mb-0">Flagship Research Programmes</h2>
            </div>
            <Link href="/research-themes" className="text-sm font-semibold text-[#0d1b35] hover:text-[#b8962e]">
              All Programmes →
            </Link>
          </div>
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

      {/* Collaboration CTA — original investment copy */}
      <section className="bg-[#0d1b35] text-white">
        <div className="sec">
          <div className="sec-in max-w-3xl">
            <p className="slbl !text-[#b8962e]">Sustainability &amp; Growth</p>
            <h2 className="mb-4 text-[clamp(1.5rem,3vw,2.25rem)] font-bold leading-tight text-white">
              Investment &amp; Collaboration Opportunities
            </h2>
            <p className="mb-8 text-base leading-relaxed text-white/75">
              The DHAIOH Unit actively positions itself as a platform for strategic collaboration and
              investment. We welcome engagement from visionary partners who share our commitment to
              healthier workers, safer workplaces, and a sustainable mining future.
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
