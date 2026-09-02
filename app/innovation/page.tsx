import Link from "next/link";
import PageHero from "@/components/PageHero";
import CardImageHeader from "@/components/CardImageHeader";
import { innovationCards } from "@/lib/card-images";

const portfolioCards = {
  ip: {
    title: "IP Development & Patents",
    desc: "The DHAIOH Unit actively translates academic research into protectable intellectual property, digital health products, and scalable technologies. Our innovation agenda is oriented toward real-world occupational health solutions for the mining sector.",
    image: innovationCards.ip,
    overlay: "blue" as const,
  },
  sensor: {
    title: "Sensor Integration",
    desc: "Developing wearable and sensor-based health technologies that support real-time monitoring of occupational exposures and worker health surveillance.",
    image: innovationCards.sensor,
    overlay: "blue" as const,
  },
  pathway: {
    title: "Strategic Impact Pathway",
    desc: "Through strategic partnerships with industry, government, technology developers, and research organisations, the Unit accelerates the translation of research into scalable solutions.",
    image: innovationCards.pathway,
    overlay: "blue" as const,
    link: { href: "/about", label: "Partnership Framework" },
  },
  ai: {
    title: "AI Solutions",
    desc: "Leveraging machine learning and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions.",
    image: innovationCards.ai,
    overlay: "blue" as const,
    items: ["Hazard Prediction", "Trend Analytics"],
  },
};

const innovationAreas = [
  "Patents and Intellectual Property Development",
  "Artificial Intelligence Solutions for Occupational Health",
  "Digital Health and Occupational Health Platforms",
  "Wearable and Sensor-Based Health Technologies",
  "Mobile Health Applications and Worker-Centred Technologies",
  "Predictive Analytics and Health Intelligence Systems",
  "Smart Medical Surveillance and Early Warning Systems",
  "Occupational Disease Prevention Technologies",
  "Digital Decision-Support Tools and Dashboards",
  "Technology Transfer and Industry Adoption",
  "Industry Innovation and Research Partnerships",
  "Commercialisation and Investment Opportunities",
];

const capabilities = [
  {
    title: "Smart Medical Surveillance",
    desc: "Designing intelligent surveillance systems that enable rapid identification of health trends, disease outbreaks, and emerging occupational risks.",
    icon: "chart",
  },
  {
    title: "Decision-Support Systems",
    desc: "Transforming research outputs into digital decision-support tools and dashboards that inform evidence-based occupational health management.",
    icon: "cloud",
  },
  {
    title: "Occupational Disease Prevention",
    desc: "Developing digital tools and predictive models to support the prevention and early detection of occupational diseases through digital health technologies.",
    icon: "shield",
  },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero src="/banners/hero-innovation.jpg" alt="Digital twin mining haul truck with health analytics">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Technology
        </p>
        <h1 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          <span className="text-[#b8962e]">Innovation</span>
        </h1>
      </PageHero>

      {/* Innovation mandate intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Innovation Mandate</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-6">
                Transforming Research into Solutions. Transforming Innovation into Impact.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Innovation and commercialisation lie at the heart of the DHAIOH Unit&apos;s mission. As a
                future-focused research and innovation platform, the Unit is committed to translating scientific
                discoveries, digital innovations, and technological advances into practical solutions that improve
                worker health, strengthen occupational health systems, and create sustainable impact within the
                mining sector and beyond.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The Unit serves as a catalyst for innovation by creating an ecosystem that supports the
                development, testing, validation, adoption, and commercialisation of next-generation occupational
                health technologies — fostering entrepreneurship, supporting intellectual property development,
                enabling technology transfer, and facilitating pathways from concept development to market-ready
                solutions.
              </p>
            </div>
            <div className="card-soft overflow-hidden bg-[#164076] p-8 text-white !border-[#164076]">
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">Creating Value Through Innovation</p>
              <p className="text-white/70 text-sm mb-6">Through its innovation and commercialisation activities, the DHAIOH Unit aims to:</p>
              <ul className="space-y-3">
                {[
                  "Accelerate the development of breakthrough occupational health technologies",
                  "Generate intellectual property and patentable innovations",
                  "Support technology transfer and industry uptake of research outputs",
                  "Develop scalable digital solutions for worker health and wellbeing",
                  "Foster entrepreneurship and innovation-driven economic growth",
                  "Attract strategic investment and innovation partnerships",
                  "Strengthen South Africa's leadership in digital occupational health innovation",
                  "Position the mining sector at the forefront of technology-enabled worker health protection",
                ].map((aim) => (
                  <li key={aim} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#b8962e] rounded-full flex-shrink-0 mt-2" />
                    <span className="text-white/75 text-sm leading-relaxed">{aim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Value */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">Our Innovation Portfolio</h2>
            <div className="w-16 h-1 bg-[#b8962e] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* IP Development & Patents */}
            <div className="card-soft overflow-hidden flex flex-col" id="ip">
              <CardImageHeader src={portfolioCards.ip.image.src} alt={portfolioCards.ip.image.alt} />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-md bg-[#164076] text-[#b8962e]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-[#0d1b35]">{portfolioCards.ip.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7184]">{portfolioCards.ip.desc}</p>
              </div>
            </div>

            {/* Sensor Integration */}
            <div className="card-soft overflow-hidden flex flex-col" id="sensor">
              <CardImageHeader src={portfolioCards.sensor.image.src} alt={portfolioCards.sensor.image.alt} />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-md bg-[#164076] text-[#b8962e]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-[#0d1b35]">{portfolioCards.sensor.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7184]">{portfolioCards.sensor.desc}</p>
              </div>
            </div>

            {/* Strategic Impact Pathway */}
            <div className="card-soft overflow-hidden flex flex-col" id="pathway">
              <CardImageHeader src={portfolioCards.pathway.image.src} alt={portfolioCards.pathway.image.alt} />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-md bg-[#164076] text-[#b8962e]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8L11 17l-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-[#0d1b35]">{portfolioCards.pathway.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7184] mb-5">{portfolioCards.pathway.desc}</p>
                <Link
                  href={portfolioCards.pathway.link!.href}
                  className="text-xs font-bold tracking-widest uppercase text-[#b8962e] border-b border-[#b8962e] pb-0.5 w-fit mt-auto"
                >
                  {portfolioCards.pathway.link!.label}
                </Link>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="card-soft overflow-hidden flex flex-col" id="ai-hub">
              <CardImageHeader src={portfolioCards.ai.image.src} alt={portfolioCards.ai.image.alt} />
              <div className="p-6 flex flex-col flex-1">
                <div className="w-10 h-10 flex items-center justify-center mb-4 rounded-md bg-[#164076] text-[#b8962e]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-3 text-[#0d1b35]">{portfolioCards.ai.title}</h3>
                <p className="text-sm leading-relaxed text-[#5a7184] mb-5">{portfolioCards.ai.desc}</p>
                <div className="space-y-2 mb-5">
                  {portfolioCards.ai.items!.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-[#164076]" />
                      <span className="text-sm font-bold tracking-wider uppercase text-[#5a7184]">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/research-themes"
                  className="text-sm font-bold tracking-widest uppercase text-[#0d1b35] flex items-center gap-2 hover:text-[#b8962e] transition-colors mt-auto"
                >
                  Explore Research Themes →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Intelligence Banner */}
      <section className="py-20 bg-[#164076] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold mb-8 sm:whitespace-nowrap">
            Digital Intelligence for Healthier, Safer Workplaces
          </h2>
          <div className="space-y-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#b8962e] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#b8962e] mb-1">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Innovation Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Strategic Innovation Areas</h2>
          <p className="text-gray-500 mb-10">
            The DHAIOH Unit&apos;s innovation and commercialisation agenda focuses on transforming research into real-world solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {innovationAreas.map((area) => (
              <div key={area} className="card-soft px-5 py-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                <span className="text-sm text-[#0d1b35]">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
