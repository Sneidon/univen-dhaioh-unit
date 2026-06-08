import Link from "next/link";
import Image from "next/image";

const news = [
  {
    tag: "ANNOUNCEMENT",
    date: "MARCH 12, 2024",
    title: "DHAIOH Unit Launches Phase III of Mining Health Digitalization Framework",
    excerpt:
      "New collaborative initiatives set to scale digital health surveillance across the SADC region.",
  },
  {
    tag: "RESEARCH",
    date: "FEBRUARY 20, 2024",
    title: "Groundbreaking Findings in Silicosis Early-Warning Systems",
    excerpt:
      "Recent clinical trials demonstrate the efficacy of AI-driven vocal biomarker analysis in early detection.",
  },
  {
    tag: "EVENT",
    date: "JANUARY 15, 2024",
    title: "Annual Digital Health Summit: Strategic Roadmap 2030",
    excerpt:
      "Key stakeholders from University of Venda, Mintek, and SAMRC gather to define the next decade.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden">
        {/* Background image placeholder */}
        <div className="absolute inset-0 bg-gray-400 flex flex-col items-center justify-center gap-2">
          <svg className="w-14 h-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
          <p className="text-gray-300 text-xs tracking-widest uppercase">Background Image Placeholder</p>
        </div>
        {/* Dark overlay to keep text legible */}
        <div className="absolute inset-0 bg-[#0d1b35]/75" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">
              Excellence in Research
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Transforming Worker{" "}
              <span className="text-[#b8962e]">Health Through</span>{" "}
              Digital Intelligence
            </h1>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-2">
              An SAMRC Extramural Research Unit Hosted by the University of Venda in Strategic Partnership with Mintek
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                href="/research-themes"
                className="bg-[#b8962e] text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
              >
                Explore Research
              </Link>
              <Link
                href="/about"
                className="border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors"
              >
                The Framework
              </Link>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-sm h-72 bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-3">
              <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
              <p className="text-white/30 text-xs tracking-widest uppercase">Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-6">
                Strategic Alliance for Impact
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                A powerful partnership combining strategic investment, academic leadership, and mining innovation to transform worker health through digital intelligence. Together, we drive measurable impact across the mining sector.
              </p>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#b8962e]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
                <span className="text-sm font-semibold tracking-widest uppercase text-[#0d1b35]">
                  United for a Safer Future
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 border border-gray-200 bg-white flex flex-col items-start">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">HOST INSTITUTION</p>
                <Image src="/logos/univen.png" alt="University of Venda" width={80} height={80} className="object-contain mb-2" />
                <p className="font-bold text-[#0d1b35] text-sm">University of Venda</p>
              </div>
              <div className="p-6 border border-gray-200 bg-white flex flex-col items-start">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">STRATEGIC FUNDER</p>
                <Image src="/logos/samrc.svg" alt="SAMRC" width={120} height={50} className="object-contain mb-2" />
                <p className="font-bold text-[#0d1b35] text-sm">SAMRC</p>
              </div>
              <div className="col-span-2 p-6 bg-[#0d1b35] text-white">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-2">RESEARCH PARTNER</p>
                <p className="font-bold">Mintek</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Themes */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-2">Research Themes</h2>
              <p className="text-gray-500 text-sm">Defining the future of digital occupational health.</p>
            </div>
            <Link
              href="/research-themes"
              className="text-sm font-semibold text-[#0d1b35] hover:text-[#b8962e] transition-colors whitespace-nowrap"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="lg:row-span-2 border border-gray-200 bg-white p-8">
              <p className="text-[#b8962e] text-2xl font-bold mb-4">01</p>
              <h3 className="font-bold text-[#0d1b35] text-lg mb-3">AI & Machine Learning</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                Developing sophisticated neural architectures to predict occupational hazards before they manifest, using diverse industrial data streams.
              </p>
              <span className="text-xs font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#0d1b35] pb-0.5">
                Detailed Framework
              </span>
            </div>

            <div className="bg-[#0d1b35] text-white p-8">
              <p className="text-[#b8962e] text-2xl font-bold mb-4">02</p>
              <h3 className="font-bold text-lg mb-3">Wearable Tech</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Integrated sensor networks for real-time physiological monitoring in high-risk environments.
              </p>
            </div>

            <div className="bg-[#b8962e] text-white p-8 flex flex-col justify-between min-h-40">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase mb-3 opacity-80">
                  Predictive Risk Modeling
                </p>
                <p className="text-sm leading-relaxed">
                  Forecasting workplace accidents using historical environmental and behavioural datasets.
                </p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-4 self-end">
                <span className="text-white font-bold">+</span>
              </div>
            </div>

            <div className="border border-gray-200 bg-white p-8">
              <p className="text-[#b8962e] text-2xl font-bold mb-4">03</p>
              <h3 className="font-bold text-[#0d1b35] text-lg mb-3">Big Data Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming fragmented medical records into structured intelligence for population health mapping.
              </p>
            </div>

            <div className="border border-gray-200 bg-white p-8">
              <p className="text-[#b8962e] text-2xl font-bold mb-4">04</p>
              <h3 className="font-bold text-[#0d1b35] text-lg mb-3">Policy Influence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Translating research findings into legislative frameworks for safe mining governance across Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-400 mb-2">
            Knowledge Hub
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] text-center mb-12">
            Latest News & Strategic Updates
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item) => (
              <article key={item.title} className="group cursor-pointer">
                <div className="w-full h-48 bg-gray-200 mb-4 flex flex-col items-center justify-center gap-2">
                  <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
                  <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
                </div>
                <span className="inline-block bg-[#0d1b35] text-white text-xs px-2 py-1 font-bold tracking-wider mb-2">
                  {item.tag}
                </span>
                <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                <h3 className="font-bold text-[#0d1b35] text-base mb-2 group-hover:text-[#b8962e] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Zero Harm */}
      <section className="py-20 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Pathway to Zero Harm</h2>
            <p className="text-gray-300 mb-10 leading-relaxed">
              Our methodology follows a rigorous scientific cycle, from foundational research to national policy implementation.
            </p>
            <div className="space-y-6">
              {[
                { n: "01", title: "Scientific Research", desc: "Generating high-quality evidence on occupational health risks in mining." },
                { n: "02", title: "Digital Intelligence", desc: "Building predictive models and AI-driven surveillance platforms." },
                { n: "03", title: "Policy Reform", desc: "Influencing regulatory standards to ensure long-term worker safety." },
              ].map((step) => (
                <div key={step.n} className="flex gap-5 items-start">
                  <div className="w-10 h-10 border border-[#b8962e] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#b8962e] text-xs font-bold">{step.n}</span>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{step.title}</h4>
                    <p className="text-gray-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-white text-[#0d1b35] p-16 text-center">
              <p className="text-6xl font-bold mb-2">ZERO</p>
              <p className="text-sm font-bold tracking-widest uppercase text-[#b8962e]">Harm Goal</p>
              <p className="text-gray-500 text-xs mt-3">making every mine safe, every day</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-[#162548] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15+", label: "Research Institutions" },
            { value: "50k+", label: "Monitored Workers" },
            { value: "08", label: "Core Themes" },
            { value: "ZERO", label: "Harm Target" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
              <p className="text-gray-400 text-xs mt-2 tracking-wider uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
