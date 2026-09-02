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
          <div className="sec-in grid items-center gap-10 lg:grid-cols-[1.35fr_0.85fr]">
            <div>
              <p className="mb-3 text-sm font-light leading-relaxed text-white/70 md:text-base">
                Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector
              </p>
              <h1 className="mb-4 text-[clamp(2rem,5vw,3.75rem)] font-bold leading-tight">
                <span className="text-[#b8962e]">DHAIOH</span> Unit
              </h1>
              <p className="mb-6 max-w-2xl text-2xl font-semibold leading-snug text-white/90 md:text-3xl">
                Transforming Worker <span className="text-[#b8962e]">Health Through</span>
                <br />
                <span className="whitespace-nowrap">Digital Intelligence</span>
              </p>
              <p className="mb-8 max-w-3xl text-sm leading-relaxed text-white/75 md:text-base">
                A pioneering research and innovation platform dedicated to transforming occupational health
                through cutting-edge digital technologies, artificial intelligence, advanced analytics, and
                predictive health systems — positioned to become a continental and global leader in
                next-generation occupational health solutions for mining and other high-risk work environments.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/research-themes" className="bt">
                  Explore Research
                </Link>
                <Link href="/impact-framework" className="bot !border-white/40 !text-white hover:!bg-white/10">
                  Impact Framework
                </Link>
                <Link href="/about" className="bot !border-[#b8962e]/60 !text-[#b8962e] hover:!bg-[#b8962e]/10">
                  About Unit
                </Link>
              </div>
            </div>

            {/* Co-Directors — IPGH-style cards */}
            <div className="space-y-4">
              <div className="rounded-[12px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex gap-4 items-start">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#b8962e]">
                    <Image
                      src="/prof-zungu.jpg"
                      alt="Prof Lindiwe Zungu"
                      fill
                      className="object-cover object-top"
                      sizes="72px"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                      Unit Director
                    </p>
                    <p className="mb-1 text-lg font-bold text-white">Prof Lindiwe Zungu</p>
                    <p className="text-xs leading-relaxed text-white/60">
                      Director: OHS in Mining Research Institute | UNIVEN
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[12px] border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex gap-4 items-start">
                  <div className="relative h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full border-2 border-[#d22d20]">
                    <Image
                      src="/james-headshot.jpg"
                      alt="Dr James Aluha"
                      fill
                      className="object-cover object-top"
                      sizes="72px"
                    />
                  </div>
                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                      Co-Unit Director
                    </p>
                    <p className="mb-1 text-lg font-bold text-white">Dr James Aluha</p>
                    <p className="text-xs leading-relaxed text-white/60">
                      Chief Research Scientist | Mintek
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/leadership"
                className="inline-flex text-sm font-semibold text-[#b8962e] hover:underline"
              >
                Meet the Leadership Team →
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

      {/* Latest News — single feature */}
      <section className="sec bg-white">
        <div className="sec-in">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="slbl">Latest Highlight</p>
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
            <div className="relative min-h-[360px] w-full aspect-[4/3] md:min-h-[420px] md:aspect-auto">
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

      {/* Partners — teaser with original alliance copy */}
      <section className="sec bg-[#eef3f7]">
        <div className="sec-in">
          <p className="slbl">The SAMRC–UNIVEN–MINTEK Strategic Alliance</p>
          <h2 className="stit">A Jointly Driven Strategic Initiative</h2>
          <p className="ssub">
            The DHAIOH Unit was established as a flagship three-way partnership combining strategic
            investment, academic leadership, and mining innovation to transform worker health through
            digital intelligence. This alliance is central to the Unit&apos;s identity, credibility, and
            long-term impact.
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
