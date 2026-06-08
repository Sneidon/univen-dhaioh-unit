import Link from "next/link";
import Image from "next/image";

const pillars = [
  { n: "01", title: "Artificial Intelligence & Machine Learning", desc: "Developing proprietary algorithms to analyze complex physiological data for risk detection." },
  { n: "02", title: "Digital Health Technologies", desc: "Leveraging cloud-based ecosystems for unified healthcare delivery." },
  { n: "03", title: "Big Data & Health Intelligence", desc: "Synthesising massive datasets into actionable intelligence." },
  { n: "04", title: "Predictive Modelling", desc: "Forecasting risk trends before they impact worker wellness.", dark: false },
  { n: "05", title: "Smart Medical Surveillance", desc: "Autonomous monitoring systems designed for the unique challenges of deep-mine operations.", highlight: true },
  { n: "06", title: "Wearable & Sensor Tech", desc: "Real-time biometrics tracking for immediate intervention." },
  { n: "07", title: "Early Warning Systems", desc: "Critical alerts for high-risk environmental conditions." },
  { n: "08", title: "Prevention Tech", desc: "Engineering out disease through digital safety." },
  { n: "09", title: "Health Platforms", desc: "Centralised data hubs for multi-stakeholder access." },
  { n: "10", title: "Commercialisation", desc: "Scaling lab-proven technologies to industry-wide solutions.", gold: true },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0d1b35] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">About the Unit</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Advancing Occupational Health Through Digital Transformation
          </h1>
          <p className="text-gray-300 mt-6 max-w-3xl leading-relaxed text-lg">
            The DHAIOH Unit (Digital Health & Artificial Intelligence for Occupational Health) is a pioneering centre of excellence dedicated to transforming worker safety in the mining sector through high-fidelity data intelligence and scientific innovation.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="bg-[#0d1b35] text-white p-10">
            <div className="w-12 h-12 bg-[#b8962e] flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become a globally recognised centre of excellence leading the transformation of occupational health through digital innovation, artificial intelligence, and predictive health systems.
            </p>
          </div>

          <div className="bg-[#0d1b35] text-white p-10">
            <div className="w-12 h-12 bg-[#b8962e] flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To generate world-class research, develop innovative technologies, build future research leaders, influence policy, and create scalable digital health solutions that improve occupational health outcomes in mining and other high-risk sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Transformation Framework */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Digital Transformation Framework</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The ten strategic pillars driving our impact pathway from pure research to healthy and safe mining workplaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p) => (
              <div key={p.n} className="bg-[#0d1b35] p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-2xl font-bold text-[#b8962e]">{p.n}</span>
                  <div className="w-8 h-8 border border-[#b8962e]/40 rounded flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#b8962e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-bold text-base mb-2 text-white">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="h-80 bg-gray-200 flex flex-col items-center justify-center gap-3">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5"/><circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5"/><path strokeWidth="1.5" d="M21 15l-5-5L5 21"/></svg>
            <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0d1b35] mb-6">
              A Strategic Alliance for Global Impact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The DHAIOH Unit is powered by a triumvirate of South Africa&apos;s leading institutions: the <strong>South African Medical Research Council (SAMRC)</strong> as our primary funder, the <strong>University of Venda (UNIVEN)</strong> as our host institution, and <strong>Mintek</strong> as our strategic research partner.
            </p>
            <div className="space-y-4">
              {[
                { title: "Strategic Investment", desc: "Focused funding for high-impact occupational health research." },
                { title: "Scientific Excellence", desc: "Peer-reviewed methodologies that set new global standards." },
                { title: "Capacity Development", desc: "Empowering the next generation of African digital health scientists." },
              ].map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full border-2 border-[#b8962e] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#0d1b35]">{item.title}</span>
                    <span className="text-gray-600"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#0d1b35] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Transforming Health. Protecting Lives.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/research-themes"
              className="bg-[#b8962e] text-white text-sm font-bold px-8 py-4 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
            >
              Explore Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
