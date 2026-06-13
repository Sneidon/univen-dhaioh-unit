import Link from "next/link";
import Image from "next/image";

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
      {/* Hero */}
      <section className="relative bg-[#0d1b35] text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/pexels-tara-winstead-8386440.jpg" alt="AI and digital network visualization" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/80" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Transforming Research into Solutions
          </h1>
        </div>
      </section>

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
            <div className="bg-[#0d1b35] text-white p-8">
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">Creating Value Through Innovation</p>
              <p className="text-gray-300 text-sm mb-6">Through its innovation and commercialisation activities, the DHAIOH Unit aims to:</p>
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
                    <span className="text-gray-300 text-sm leading-relaxed">{aim}</span>
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

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left column */}
            <div>
              <div className="bg-[#0d1b35] text-white p-8 mb-6">
                <div className="flex gap-3 mb-5">
                  <div className="w-10 h-10 border border-white/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-lg self-center">IP Development & Patents</h3>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  The DHAIOH Unit actively translates academic research into protectable intellectual property, digital health products, and scalable technologies. Our innovation agenda is oriented toward real-world occupational health solutions for the mining sector.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0d1b35] text-white p-6">
                  <div className="w-8 h-8 border border-white/30 flex items-center justify-center mb-4">
                    <svg className="w-4 h-4 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">Sensor Integration</h3>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Developing wearable and sensor-based health technologies that support real-time monitoring of occupational exposures and worker health surveillance.
                  </p>
                </div>
                <div className="bg-[#0d1b35] text-white p-6">
                  <h3 className="font-bold text-white text-sm mb-2">Strategic Impact Pathway</h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    Through strategic partnerships with industry, government, technology developers, and research organisations, the Unit accelerates the translation of research into scalable solutions.
                  </p>
                  <Link
                    href="/about"
                    className="text-xs font-bold tracking-widest uppercase text-[#b8962e] border-b border-[#b8962e] pb-0.5"
                  >
                    Partnership Framework
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-4">
              <div className="bg-[#0d1b35] text-white p-8" id="ai-hub">
                <div className="w-10 h-10 border border-white/30 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-4">AI Solutions</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Leveraging machine learning and advanced analytics to predict occupational health risks, identify emerging hazards, and support proactive interventions.
                </p>
                <div className="space-y-2 mb-6">
                  {["Hazard Prediction", "Trend Analytics"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-[#b8962e]" />
                      <span className="text-sm font-bold tracking-wider uppercase text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/research-themes"
                  className="text-sm font-bold tracking-widest uppercase text-white flex items-center gap-2 hover:text-[#b8962e] transition-colors"
                >
                  Explore Research Themes →
                </Link>
              </div>

              <div className="h-56 bg-gray-200 flex flex-col items-center justify-center gap-2">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
                <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Intelligence Banner */}
      <section className="py-20 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
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
          <div className="flex justify-center">
            <div className="text-center">
              <div className="w-64 h-56 bg-white/10 border border-white/10 flex flex-col items-center justify-center gap-2 mb-6">
                <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
                <p className="text-white/20 text-xs tracking-widest uppercase">Image Placeholder</p>
              </div>
              <p className="text-3xl font-bold">ZERO HARM</p>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mt-2">Our Ultimate Objective</p>
            </div>
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
              <div key={area} className="bg-[#0d1b35] text-white px-5 py-4 flex items-center gap-3">
                <div className="w-2 h-2 bg-[#b8962e] rounded-full flex-shrink-0" />
                <span className="text-sm text-white/80">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
