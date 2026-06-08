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
    desc: "Automated systems that track long-term health trends and trigger early warnings for respiratory and auditory shifts.",
    icon: "chart",
  },
  {
    title: "Decision-Support Systems",
    desc: "Empowering health practitioners with AI-validated data to make informed clinical decisions in industrial settings.",
    icon: "cloud",
  },
  {
    title: "Occupational Disease Prevention",
    desc: "A robust framework utilising digital twin technology to simulate and prevent hazardous exposure scenarios.",
    icon: "shield",
  },
];

export default function InnovationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0d1b35] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1b35] via-[#1a2f5a] to-[#0a1628]" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-36">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">
            Future of Occupational Health
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Transforming Research into Solutions
          </h1>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
            Bridging the gap between scientific discovery and industrial application through AI-driven intelligence and proprietary technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#b8962e] text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
            >
              Explore Patents
            </Link>
            <Link
              href="#ai-hub"
              className="border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Our AI Hub
            </Link>
          </div>
        </div>
      </section>

      {/* Creating Value */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">Creating Value Through Innovation</h2>
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
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  We actively translate academic research into protectable intellectual property. Our portfolio includes specialised algorithms for hazard detection and novel occupational health monitoring frameworks.
                </p>
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {[
                    { value: "12+", label: "ACTIVE PATENTS" },
                    { value: "08", label: "IP DISCLOSURES" },
                    { value: "04", label: "TECH SPIN-OFFS" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-[10px] font-bold tracking-wider text-[#b8962e] mt-1">{s.label}</p>
                    </div>
                  ))}
                </div>
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
                    Developing wearable technologies that monitor vital signs and environmental exposures in real-time, specifically designed for deep-level mining conditions.
                  </p>
                </div>
                <div className="bg-[#0d1b35] text-white p-6">
                  <h3 className="font-bold text-white text-sm mb-2">Strategic Impact Pathway</h3>
                  <p className="text-white/60 text-xs leading-relaxed mb-4">
                    We partner with leading institutions like the SAMRC and University of Venda to ensure our innovations reach the workers who need them most.
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
                <div className="text-2xl mb-4">€</div>
                <h3 className="font-bold text-xl mb-4">AI Solutions</h3>
                <p className="text-gray-300 text-sm mb-6">
                  Predictive modelling and risk forecasting engines tailored for high-risk mining environments.
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
                  href="/contact"
                  className="text-sm font-bold tracking-widest uppercase text-white flex items-center gap-2 hover:text-[#b8962e] transition-colors"
                >
                  View Models →
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

      {/* Stats */}
      <section className="py-12 bg-[#162548] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "15", label: "Algorithms Validated" },
            { value: "4k+", label: "Sensors Deployed" },
            { value: "92%", label: "Accuracy Rate" },
            { value: "24/7", label: "Monitoring Support" },
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
