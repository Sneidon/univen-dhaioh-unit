import Link from "next/link";
import Image from "next/image";

const themePreview = [
  "Digital Health & Occupational Health Intelligence",
  "Artificial Intelligence & Predictive Analytics",
  "Women in Mining & Gender-Responsive Health",
];

const impactMetrics = [
  { value: "20+", label: "Years of Research Experience", sub: "Occupational health expertise" },
  { value: "45+", label: "Graduates Supervised", sub: "Master's & Doctoral" },
  { value: "08", label: "Core Research Themes", sub: "Multidisciplinary agenda" },
  { value: "11", label: "Policy Influence Areas", sub: "National & regulatory" },
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
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/pexels-safi-erneste-165511538-35082155.jpg" alt="Mining workers at mine entrance" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/75" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
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
              className="bg-[#b8962e] text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
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
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">
            The SAMRC–UNIVEN–MINTEK Strategic Alliance
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">
            A Jointly Driven Strategic Initiative
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            A flagship three-way partnership combining strategic investment, academic leadership, and mining
            innovation to transform worker health through digital intelligence.
          </p>
          <Link
            href="/strategic-partners"
            className="inline-block text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
          >
            View Partners →
          </Link>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 bg-[#0d1b35] text-white">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Strategic Architecture</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">
            The DHAIOH Digital Transformation Framework
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Ten strategic pillars — from artificial intelligence and digital health technologies to innovation
            and commercialisation — distinguish DHAIOH from traditional occupational health initiatives.
          </p>
          <Link
            href="/about"
            className="inline-block bg-[#0d1b35] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#162548] transition-colors"
          >
            Explore Framework →
          </Link>
        </div>
      </section>

      {/* Strategic Research Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Scientific Identity</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">Strategic Research Themes</h2>
          <p className="text-gray-500 text-sm mb-6">
            Eight multidisciplinary themes and nine flagship programmes defining the future of digital occupational health.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-2 mb-8">
            {themePreview.map((title) => (
              <li key={title} className="flex items-start gap-3 text-sm text-[#0d1b35]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#b8962e] mt-2 flex-shrink-0" />
                {title}
              </li>
            ))}
            <li className="text-sm text-gray-400 pl-5">+ 5 more themes</li>
          </ul>
          <Link
            href="/research-themes"
            className="inline-block text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
          >
            All Themes & Programmes →
          </Link>
        </div>
      </section>

      {/* Impact Pathway */}
      <section className="py-16 bg-[#0d1b35] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">How We Generate Value</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The DHAIOH Impact Pathway</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            Every initiative follows a clear pathway from scientific discovery through innovation, policy, and
            practice to measurable impact for workers, workplaces, and communities.
          </p>
          <Link
            href="/impact-framework"
            className="inline-block bg-[#b8962e] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
          >
            View Impact Framework →
          </Link>
        </div>
      </section>

      {/* Human Capital Development */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">SAMRC Mandate & Unit Vision</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">Human Capital Development</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Building the next generation of African digital health scientists through postgraduate training,
            postdoctoral programmes, mentorship, and structured capacity development opportunities.
          </p>
          <Link
            href="/human-capital"
            className="inline-block bg-[#0d1b35] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#162548] transition-colors"
          >
            Human Capital →
          </Link>
        </div>
      </section>

      {/* Investment & Collaboration */}
      <section className="py-20 bg-[#0d1b35] text-white">
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
                className="inline-block bg-[#b8962e] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
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
