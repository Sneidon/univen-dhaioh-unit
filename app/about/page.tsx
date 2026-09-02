import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CardImageHeader from "@/components/CardImageHeader";
import { frameworkPillarImages } from "@/lib/card-images";

const pillars = [
  { n: "01", title: "Artificial Intelligence & Machine Learning" },
  { n: "02", title: "Digital Health Technologies" },
  { n: "03", title: "Big Data & Health Intelligence" },
  { n: "04", title: "Predictive Modelling & Risk Forecasting" },
  { n: "05", title: "Smart Medical Surveillance Systems" },
  { n: "06", title: "Wearable & Sensor-Based Health Technologies" },
  { n: "07", title: "Early Warning & Decision-Support Systems" },
  { n: "08", title: "Occupational Disease Prevention Technologies" },
  { n: "09", title: "Digital Occupational Health Platforms" },
  { n: "10", title: "Innovation, Technology Development & Commercialisation" },
];

const thematicAreas = [
  { n: "01", title: "Digital Health for Proactive Occupational Risk Management", desc: "Developing integrated digital platforms that support real-time surveillance, worker monitoring, and evidence-based decision-making." },
  { n: "02", title: "Artificial Intelligence and Machine Learning for Predictive Analytics", desc: "Leveraging AI and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions." },
  { n: "03", title: "Gender-Responsive Occupational Health Interventions", desc: "Advancing innovative solutions that address the unique occupational health, safety, reproductive health, security, and wellbeing needs of women in mining." },
  { n: "04", title: "Policy and Regulatory Innovation", desc: "Translating evidence into policy, regulatory frameworks, industry standards, codes of practice, and national occupational health guidelines." },
  { n: "05", title: "Capacity Building and Knowledge Translation", desc: "Empowering the next generation of African digital health scientists through postgraduate training, mentorship, and structured development programmes." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Institute
        </p>
        <h1 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          About the <span className="text-[#b8962e]">Unit</span>
        </h1>
      </PageHero>

      {/* Vision & Mission */}
      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in grid gap-6 md:grid-cols-2">
          <div className="card-soft bg-[#164076] !border-[#164076] p-8 text-white">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8962e]">
              Vision
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white">Our Vision</h2>
            <p className="leading-relaxed text-white/75">
              To become a globally recognised centre of excellence leading the transformation of occupational
              health through digital innovation, artificial intelligence, and predictive health systems.
            </p>
          </div>
          <div className="card-soft bg-[#0d1b35] !border-[#0d1b35] p-8 text-white">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8962e]">
              Mission
            </p>
            <h2 className="mb-4 text-2xl font-bold text-white">Our Mission</h2>
            <p className="leading-relaxed text-white/75">
              To generate world-class research, develop innovative technologies, build future research leaders,
              influence policy, and create scalable digital health solutions that improve occupational health
              outcomes in mining and other high-risk sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Unit Overview */}
      <section className="sec bg-white">
        <div className="sec-in">
          <div className="relative mb-12 w-full min-h-[320px] overflow-hidden rounded-[10px] md:min-h-[420px]" style={{ aspectRatio: "16/9" }}>
            <Image
              src="/gallery/women-in-mining-indaba-2026/dhaioh-plaque-delegation.jpg"
              alt="DHAIOH Unit commemorative plaque with SAMRC, University of Venda and Mintek partners"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div>
              <p className="slbl">Unit Overview</p>
              <h2 className="stit">
                A Flagship Interdisciplinary Research Unit
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                The mining industry remains one of the world&apos;s most strategically important economic sectors,
                yet workers continue to face complex and evolving occupational health challenges arising from
                exposure to physical, chemical, biological, ergonomic, psychosocial, and environmental hazards.
                These challenges are further compounded by rapid technological change, changing workforce
                demographics, climate-related risks, and the increasing demand for healthier, safer, and more
                sustainable workplaces.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The DHAIOH Unit was established to respond to these challenges by reimagining the future of
                occupational health through the strategic integration of digital technologies, artificial
                intelligence, advanced analytics, and scientific innovation — shifting from reactive,
                compliance-driven models towards predictive, intelligent, and worker-centred approaches.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The SAMRC–UNIVEN–MINTEK Digital Health and Artificial Intelligence for Occupational Health in the
                Mining Sector (DHAIOH Unit) is a flagship Extramural Research Unit and interdisciplinary
                collaboration dedicated to transforming worker health and safety in the mining industry through
                cutting-edge, data-driven innovation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Co-led by Professor Lindiwe Zungu and Dr James Aluha, the Unit brings together expertise in public
                health, occupational health sciences, engineering, and data science to develop and deploy digital
                health technologies, artificial intelligence, and advanced surveillance systems.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Positioned at the intersection of digital innovation, health systems strengthening, and policy
                transformation, the Unit aims to enhance the prevention, early detection, and management of
                occupational diseases — while generating high-impact, policy-relevant evidence to inform industry
                practice and regulatory frameworks.
              </p>
            </div>
            <div>
              <p className="slbl">Focus Areas</p>
              <h3 className="mb-5 text-xl font-bold text-[#0d1b35]">
                Five Interconnected Thematic Areas
              </h3>
              <div className="space-y-3">
                {thematicAreas.map((area) => (
                  <div key={area.n} className="card-soft p-4 transition-colors hover:border-[#b8962e]">
                    <div className="flex gap-4 items-start">
                      <span className="text-[#b8962e] font-bold text-lg flex-shrink-0">{area.n}</span>
                      <div>
                        <p className="mb-1 text-sm font-bold leading-snug text-[#0d1b35]">{area.title}</p>
                        <p className="text-sm leading-relaxed text-[#5a7184]">{area.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Governance & Leadership</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b35] mb-4">Co-Directed Leadership</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            The DHAIOH Unit is co-directed by Professor Lindiwe Zungu (Unit Director, University of Venda) and
            Dr James Aluha (Co-Unit Director, Mintek), combining public health leadership and policy influence
            with engineering innovation and advanced technological solutions.
          </p>
          <Link
            href="/leadership"
            className="btn-cta"
          >
            Meet the Leadership Team →
          </Link>
        </div>
      </section>

      {/* Digital Transformation Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">
              Intellectual & Strategic Architecture
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">
              The DHAIOH Digital Transformation Framework
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Ten strategic pillars driving our impact pathway — distinguishing DHAIOH from traditional
              occupational health initiatives and positioning it as a national innovation platform.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <div key={p.n} className="card-soft overflow-hidden flex flex-col">
                <CardImageHeader
                  src={frameworkPillarImages[i].src}
                  alt={frameworkPillarImages[i].alt}
                />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl font-bold text-[#b8962e]">{p.n}</span>
                    <div className="w-8 h-8 border border-[#b8962e]/40 rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="font-bold text-base text-[#0d1b35]">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">SAMRC–UNIVEN–MINTEK</p>
          <h2 className="text-3xl font-bold text-[#0d1b35] mb-6">
            A Strategic Alliance for Continental Impact
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The DHAIOH Unit is powered by a three-way partnership between the South African Medical Research Council
            (SAMRC), the University of Venda (UNIVEN), and Mintek — combining strategic investment, academic
            leadership, and mining innovation to transform worker health through digital intelligence.
          </p>
          <Link
            href="/strategic-partners"
            className="inline-block text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
          >
            View All Partners →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#164076] text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-10 sm:whitespace-nowrap">
            Transforming Health. Protecting Lives.
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research-themes" className="btn-cta py-4">
              Explore Research
            </Link>
            <Link href="/impact-framework" className="border border-white/40 text-white text-sm font-bold px-8 py-4 tracking-widest uppercase hover:bg-white/10 transition-colors">
              Impact Framework
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
