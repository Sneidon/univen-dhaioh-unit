import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { flagshipProgrammes } from "@/lib/flagship-programmes";
import { themeCards } from "@/lib/card-images";

const researchThemes = [
  {
    num: "01",
    title: "Digital Health & Occupational Health Intelligence",
    desc: "Developing integrated digital platforms that support real-time occupational health surveillance, worker monitoring, and evidence-based decision-making.",
    image: themeCards[0].src,
    imageAlt: themeCards[0].alt,
    featured: true,
    showLink: true,
  },
  {
    num: "02",
    title: "AI & Predictive Analytics",
    desc: "Leveraging machine learning to predict occupational health risks and support proactive interventions.",
    image: themeCards[1].src,
    imageAlt: themeCards[1].alt,
    dark: true,
  },
  {
    num: "03",
    title: "Occupational Disease Prevention & Early Detection",
    desc: "Digital tools and predictive models for respiratory diseases, cancers, hearing loss and more.",
    image: themeCards[2].src,
    imageAlt: themeCards[2].alt,
    gold: true,
  },
  {
    num: "04",
    title: "Medical Surveillance & Early Warning",
    desc: "Intelligent systems for rapid identification of health trends and emerging occupational risks.",
    image: themeCards[3].src,
    imageAlt: themeCards[3].alt,
  },
  {
    num: "05",
    title: "Women in Mining & Gender-Responsive Health",
    desc: "Innovative solutions addressing the unique occupational health needs of women in mining.",
    image: themeCards[4].src,
    imageAlt: themeCards[4].alt,
  },
  {
    num: "06–08",
    title: "Mental Health · Climate Change · Innovation",
    desc: "Psychosocial risk management, environmental health, sustainable mining, and commercialisation.",
    image: themeCards[7].src,
    imageAlt: themeCards[7].alt,
    dark: true,
  },
];

const frameworkPillars = [
  "Artificial Intelligence and Machine Learning",
  "Digital Health Technologies",
  "Big Data Analytics and Health Intelligence",
  "Predictive Modelling and Risk Forecasting",
  "Smart Medical Surveillance Systems",
  "Wearable and Sensor-Based Health Technologies",
  "Early Warning and Decision-Support Systems",
  "Occupational Disease Prevention Technologies",
  "Digital Occupational Health Platforms",
  "Innovation, Technology Development and Commercialisation",
];

const impactMetrics = [
  { value: "20+", label: "Years of Research Experience", sub: "Occupational health expertise" },
  { value: "45+", label: "Graduates Supervised", sub: "Master's & Doctoral" },
  { value: "08", label: "Core Research Themes", sub: "Multidisciplinary agenda" },
  { value: "11", label: "Policy Influence Areas", sub: "National & regulatory" },
];

const hcdItems = [
  { label: "Postdoctoral Fellows", icon: "D" },
  { label: "Doctoral Candidates", icon: "P" },
  { label: "Master's Students", icon: "M" },
  { label: "Emerging & Early-Career Researchers", icon: "E" },
  { label: "Research Interns & Assistants", icon: "R" },
  { label: "Occupational Health Practitioners & Professionals", icon: "O" },
];

const investmentPartners = [
  "Research Funders & Government Institutions",
  "Mining Companies & Industry Partners",
  "Technology Companies",
  "International Organisations & Development Agencies",
  "Philanthropic Foundations",
  "Innovation & Venture Capital Partners",
  "Universities & Research Institutions",
];

export default function HomePage() {
  return (
    <>
      <PageHero
        src="/banners/hero-home.jpg"
        alt="Futuristic open-pit mining with AI risk monitoring"
        className="py-24 md:py-36"
      >
          {/* Institutional badges */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="bg-[#b8962e]/20 border border-[#b8962e]/50 text-[#b8962e] text-xs font-bold tracking-widest uppercase px-3 py-1.5">
              SAMRC Extramural Unit
            </span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/60 text-xs tracking-wider">Hosted by University of Venda</span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/60 text-xs tracking-wider">Strategic Partner: Mintek</span>
          </div>

          {/* Full unit name */}
          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3 max-w-3xl font-light">
            Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector
          </p>

          {/* Acronym */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="text-[#b8962e]">DHAIOH</span> Unit
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-semibold text-white/90 leading-snug mb-6 max-w-2xl">
            Transforming Worker <span className="text-[#b8962e]">Health Through</span> Digital Intelligence
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mt-6 max-w-3xl">
            A pioneering research and innovation platform dedicated to transforming occupational health
            through cutting-edge digital technologies, artificial intelligence, advanced analytics, and
            predictive health systems — positioned to become a continental and global leader in
            next-generation occupational health solutions for mining and other high-risk work environments.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/research-themes"
              className="btn-cta-sm"
            >
              Explore Research
            </Link>
            <Link
              href="/impact-framework"
              className="border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Impact Framework
            </Link>
            <Link
              href="/about"
              className="border border-[#b8962e]/60 text-[#b8962e] text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#b8962e]/10 transition-colors"
            >
              About the Unit
            </Link>
          </div>
      </PageHero>

      {/* Strategic Alliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">
                The SAMRC–UNIVEN–MINTEK Strategic Alliance
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-6">
                A Jointly Driven Strategic Initiative
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The DHAIOH Unit was established as a flagship three-way partnership combining strategic
                investment, academic leadership, and mining innovation to transform worker health through
                digital intelligence. This alliance is central to the Unit&apos;s identity, credibility, and
                long-term impact.
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-5 h-5 rounded-full border-2 border-[#b8962e] flex-shrink-0" />
                <span className="text-sm font-semibold text-[#0d1b35] tracking-wide">
                  United for a Safer, Healthier Mining Sector
                </span>
              </div>
              <Link
                href="/strategic-partners"
                className="text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
              >
                View All Partners →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-gray-200 border-t-4 border-t-[#d22d20] bg-white flex flex-col items-start">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">STRATEGIC FUNDER</p>
                <Image src="/logos/samrc.svg" alt="SAMRC" width={120} height={50} className="object-contain mb-3" />
                <p className="font-bold text-[#0d1b35] text-sm">South African Medical Research Council</p>
              </div>

              <div className="p-6 border border-gray-200 border-t-4 border-t-[#d22d20] bg-white flex flex-col items-start">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">HOST INSTITUTION</p>
                <Image src="/logos/univen.png" alt="University of Venda" width={80} height={80} className="object-contain mb-3" />
                <p className="font-bold text-[#0d1b35] text-sm">University of Venda</p>
              </div>

              <div className="col-span-2 p-6 border border-gray-200 border-t-4 border-t-[#d22d20] bg-white flex items-center gap-6">
                <div className="flex-1">
                  <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">STRATEGIC RESEARCH PARTNER</p>
                  <p className="font-bold text-[#0d1b35] text-lg">Mintek</p>
                  <p className="text-gray-500 text-sm mt-1">
                    National leader in mining research, technology development, and innovation
                  </p>
                </div>
                <Image src="/logos/mintek.png" alt="Mintek" width={140} height={56} className="object-contain flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {impactMetrics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#b8962e]">{stat.value}</p>
              <p className="text-white text-sm font-semibold mt-1">{stat.label}</p>
              <p className="text-gray-400 text-xs mt-1 tracking-wider">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Transformation Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Strategic Architecture</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">
              The DHAIOH Digital Transformation Framework
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ten strategic pillars that distinguish DHAIOH from traditional occupational health initiatives
              and drive our pathway from research to impact.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {frameworkPillars.map((pillar, i) => (
              <div
                key={pillar}
                className={`p-5 flex flex-col gap-3 ${
                  i === 9
                    ? "bg-[#b8962e] text-white"
                    : i % 3 === 0
                    ? "bg-[#164076] text-white border-t-4 border-[#d22d20]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <span className="text-xl font-bold text-[#b8962e]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className={`text-xs font-semibold leading-snug ${
                    i === 9 || i % 3 === 0 ? "text-white" : "text-[#0d1b35]"
                  }`}
                >
                  {pillar}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/about"
              className="btn-cta"
            >
              Explore Full Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Strategic Research Themes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">Scientific Identity</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-2">Strategic Research Themes</h2>
              <p className="text-gray-500 text-sm">Eight themes defining the future of digital occupational health.</p>
            </div>
            <Link
              href="/research-themes"
              className="text-sm font-semibold text-[#0d1b35] hover:text-[#b8962e] transition-colors whitespace-nowrap"
            >
              All Themes →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchThemes.map((theme) => (
              <div
                key={theme.num}
                className={`overflow-hidden flex flex-col ${
                  theme.featured
                    ? "lg:row-span-2 border border-gray-200 bg-white"
                    : theme.gold
                    ? "bg-[#b8962e] text-white"
                    : theme.dark
                    ? "bg-[#164076] text-white border-t-4 border-[#d22d20]"
                    : "border border-gray-200 bg-white"
                }`}
              >
                <div className={`relative w-full flex-shrink-0 ${theme.featured ? "h-80 lg:h-96" : "h-72"}`}>
                  <Image
                    src={theme.image}
                    alt={theme.imageAlt}
                    fill
                    loading="lazy"
                    quality={75}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                  />
                  <div
                    className={`absolute inset-0 ${
                      theme.gold
                        ? "bg-[#b8962e]/25"
                        : theme.dark
                        ? "bg-[#164076]/30"
                        : "bg-[#164076]/10"
                    }`}
                  />
                </div>

                <div className={`p-8 flex flex-col flex-1 ${theme.gold ? "justify-between min-h-40" : ""}`}>
                  <div>
                    <p
                      className={`font-bold mb-4 ${
                        theme.gold
                          ? "text-xs tracking-widest uppercase opacity-80"
                          : "text-2xl text-[#b8962e]"
                      }`}
                    >
                      {theme.num}
                    </p>
                    <h3
                      className={`font-bold text-lg mb-3 ${
                        theme.dark || theme.gold ? "text-white" : "text-[#0d1b35]"
                      }`}
                    >
                      {theme.title}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        theme.dark
                          ? "text-gray-300"
                          : theme.gold
                          ? "text-white/80"
                          : "text-gray-600"
                      } ${theme.featured ? "mb-8" : ""}`}
                    >
                      {theme.desc}
                    </p>
                  </div>

                  {theme.showLink && (
                    <Link
                      href="/research-themes"
                      className="text-xs font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#0d1b35] pb-0.5 w-fit"
                    >
                      Explore Theme
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Pathway */}
      <section className="py-20 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">How We Generate Value</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">The DHAIOH Impact Pathway</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Every initiative within the Unit follows a clear, evidence-driven pathway from scientific discovery
              to measurable impact for workers, workplaces, and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border border-white/10">
            {[
              { label: "Research", sub: "World-class evidence generation" },
              { label: "Innovation", sub: "AI tools & digital technologies" },
              { label: "Policy", sub: "Guidelines & regulatory reform" },
              { label: "Practice", sub: "Implementation at scale" },
              { label: "Impact", sub: "Healthier workers. Zero Harm.", gold: true },
            ].map((step, i) => (
              <div
                key={step.label}
                className={`relative flex flex-col items-center text-center p-8 border-r border-white/10 last:border-r-0 ${
                  step.gold ? "bg-[#b8962e]" : "bg-white/5"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-sm ${
                    step.gold ? "bg-white text-[#b8962e]" : "border-2 border-[#b8962e] text-[#b8962e]"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="font-bold text-base mb-2 text-white">{step.label}</p>
                <p className={`text-xs leading-relaxed ${step.gold ? "text-white/80" : "text-gray-400"}`}>{step.sub}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/impact-framework"
              className="inline-block btn-cta"
            >
              View Full Impact Framework
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Programmes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">Active Research Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35]">Flagship Research Programmes</h2>
            </div>
            <Link href="/research-themes" className="text-sm font-semibold text-[#0d1b35] hover:text-[#b8962e] transition-colors whitespace-nowrap">
              All Programmes →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {flagshipProgrammes.map((prog, i) => {
              const gold = i === 3;
              const dark = i === 1 || i === 5 || i === 8;

              return (
              <div
                key={prog.n}
                className={`overflow-hidden flex flex-col ${
                  gold
                    ? "bg-[#b8962e] text-white"
                    : dark
                    ? "bg-[#164076] text-white border-t-4 border-[#d22d20]"
                    : "bg-white border border-gray-200"
                }`}
              >
                <div className="relative h-28 w-full flex-shrink-0">
                  <Image
                    src={prog.image}
                    alt={prog.imageAlt}
                    fill
                    loading="lazy"
                    quality={70}
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 320px"
                  />
                  <div
                    className={`absolute inset-0 ${
                      gold ? "bg-[#b8962e]/35" : dark ? "bg-[#164076]/40" : "bg-[#164076]/15"
                    }`}
                  />
                </div>
                <div className="p-4 flex flex-col gap-2 flex-1">
                  <span className="text-lg font-bold text-[#b8962e]">{prog.n}</span>
                  <p
                    className={`text-sm font-semibold leading-snug ${
                      gold || dark ? "text-white" : "text-[#0d1b35]"
                    }`}
                  >
                    {prog.title}
                  </p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      {/* Human Capital Development */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">SAMRC Mandate & Unit Vision</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-6">Human Capital Development</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Building the next generation of African digital health scientists is a core pillar of the DHAIOH Unit.
                We actively develop research leaders through postgraduate training, postdoctoral programmes, mentorship
                initiatives, and structured capacity development opportunities.
              </p>
              <Link
                href="/contact"
                className="btn-cta"
              >
                Apply or Enquire
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {hcdItems.map((item) => (
                <div key={item.label} className="bg-gray-50 border border-gray-200 p-5 flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#164076] text-[#b8962e] flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium text-[#0d1b35] leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Collaboration */}
      <section className="py-20 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Sustainability & Growth</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Investment & Collaboration Opportunities
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                The DHAIOH Unit actively positions itself as a platform for strategic collaboration and
                investment. We welcome engagement from visionary partners who share our commitment to
                healthier workers, safer workplaces, and a sustainable mining future.
              </p>
              <Link
                href="/contact"
                className="inline-block btn-cta"
              >
                Partner With Us
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {investmentPartners.map((partner, i) => (
                <div
                  key={partner}
                  className={`flex items-center gap-4 p-4 border ${
                    i === 0 ? "bg-[#b8962e] border-[#b8962e]" : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-[#b8962e] flex-shrink-0" />
                  <span className="text-sm text-white/80">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Directors' Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase text-center mb-10">From the Co-Directors</p>
          <div className="bg-white border border-gray-200 p-10 md:p-14 relative">
            <svg className="w-12 h-12 text-[#b8962e]/20 absolute top-8 left-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-[#0d1b35] text-lg md:text-xl leading-relaxed font-medium mb-8 relative z-10">
              &ldquo;We are building the future of occupational health — where artificial intelligence, digital
              innovation, and human-centred science converge to predict risks, prevent harm, and transform worker
              health. The DHAIOH Unit serves as a strategic platform for translating research into policy, practice,
              innovation, and commercialisation, driving sustainable improvements in worker health and positioning
              South Africa as a continental and global leader in digital occupational health innovation.&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-gray-100 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#b8962e]">
                  <Image src="/prof-zungu.jpg" alt="Prof Lindiwe Zungu" width={40} height={40} className="object-cover w-full h-full" />
                </div>
                <div>
                  <p className="font-bold text-[#0d1b35] text-sm">Prof Lindiwe Zungu</p>
                  <p className="text-[#b8962e] text-xs">Unit Director, SAMRC DHAIOH Extramural Unit</p>
                </div>
              </div>
              <span className="text-gray-300 hidden sm:block">|</span>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#d22d20]">
                  <Image src="/james-headshot.jpg" alt="Dr James Aluha" width={40} height={40} className="object-cover object-top w-full h-full" />
                </div>
                <div>
                  <p className="font-bold text-[#0d1b35] text-sm">Dr James Aluha</p>
                  <p className="text-[#b8962e] text-xs">Co-Unit Director, Mintek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
