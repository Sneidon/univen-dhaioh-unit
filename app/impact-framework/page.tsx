import Link from "next/link";
import Image from "next/image";

const pathway = [
  {
    step: "01",
    phase: "Scientific Research",
    title: "Generating High-Impact Evidence",
    desc: "Producing world-class, peer-reviewed research on occupational health risks in mining — establishing the evidentiary base that drives every downstream innovation and policy change.",
    outputs: ["Peer-reviewed publications", "Technical reports", "Epidemiological datasets", "Systematic reviews"],
  },
  {
    step: "02",
    phase: "Digital Innovation",
    title: "Transforming Evidence into Technology",
    desc: "Translating research findings into AI models, predictive systems, surveillance platforms, and wearable solutions that enable real-time, intelligent occupational health management.",
    outputs: ["AI algorithms & predictive models", "Wearable sensor systems", "Digital surveillance platforms", "Decision-support tools"],
  },
  {
    step: "03",
    phase: "Implementation",
    title: "Deploying Solutions at Scale",
    desc: "Partnering with mining companies, health authorities, and government to pilot, validate, and scale digital occupational health solutions across Southern Africa and beyond.",
    outputs: ["Workplace deployments", "Capacity building programmes", "Pilot studies & trials", "Technology transfer"],
  },
  {
    step: "04",
    phase: "Policy & Practice",
    title: "Influencing Systemic Change",
    desc: "Translating evidence and implementation learnings into occupational health policy, regulatory frameworks, industry standards, and national guidelines.",
    outputs: ["Policy submissions", "Regulatory guidelines", "Industry codes of practice", "Government advisory roles"],
  },
  {
    step: "05",
    phase: "Impact",
    title: "Measurable Health & Social Outcomes",
    desc: "Achieving the DHAIOH Unit's ultimate objective — healthier workers, safer mining workplaces, stronger occupational health systems, and a tangible contribution to Zero Harm.",
    outputs: ["Reduced occupational disease burden", "Early detection & prevention", "Improved worker wellbeing", "Zero Harm advancement"],
    gold: true,
  },
];

const policyAreas = [
  "Occupational Health and Safety Policy Development",
  "Occupational Health Guidelines and Technical Guidance Documents",
  "Codes of Practice and Industry Standards",
  "Digital Health and Artificial Intelligence Governance Frameworks",
  "Women in Mining Policies and Gender-Responsive Workplace Strategies",
  "Occupational Disease Prevention and Surveillance Frameworks",
  "Mental Health and Psychosocial Risk Management Policies",
  "Government Advisory and Technical Expert Contributions",
  "Industry Best Practice Frameworks",
  "Workforce Health and Wellbeing Strategies",
  "Regulatory Reform and Evidence-Based Decision-Making",
];

const metrics = [
  { value: "20+", label: "Years of Research Experience", sub: "Occupational health expertise" },
  { value: "45+", label: "Graduates Supervised", sub: "Master's & Doctoral" },
  { value: "08", label: "Core Research Themes", sub: "Multidisciplinary" },
  { value: "3", label: "Core Alliance Partners", sub: "SAMRC · UNIVEN · Mintek" },
];

export default function ImpactFrameworkPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/pexels-tomfisk-2101137.jpg" alt="Aerial view of open-pit mining operations" fill className="object-cover object-top" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            From Research to
            <br />
            <span className="text-[#b8962e]">Real-World Impact</span>
          </h1>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">
              Evidence → Policy → Practice → Impact
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our methodology follows a rigorous scientific cycle, ensuring that every discovery translates into meaningful improvements in worker health and workplace safety.
            </p>
          </div>

          <div className="space-y-4">
            {pathway.map((item, i) => (
              <div
                key={item.step}
                className={`grid md:grid-cols-12 gap-0 ${item.gold ? "bg-[#b8962e] text-white" : i % 2 === 0 ? "bg-gray-50 border border-gray-200" : "bg-[#0d1b35] text-white"}`}
              >
                {/* Step number */}
                <div className={`md:col-span-2 p-8 flex items-center justify-center border-r ${item.gold ? "border-white/20" : i % 2 === 0 ? "border-gray-200" : "border-white/10"}`}>
                  <div className="text-center">
                    <p className={`text-4xl font-bold ${item.gold || i % 2 !== 0 ? "text-white/30" : "text-gray-200"}`}>{item.step}</p>
                    <p className={`text-xs font-bold tracking-widest uppercase mt-2 ${item.gold ? "text-white/70" : i % 2 !== 0 ? "text-[#b8962e]" : "text-[#b8962e]"}`}>
                      {item.phase}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-6 p-8">
                  <h3 className={`font-bold text-xl mb-3 ${item.gold || i % 2 !== 0 ? "text-white" : "text-[#0d1b35]"}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${item.gold ? "text-white/80" : i % 2 !== 0 ? "text-gray-300" : "text-gray-600"}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Outputs */}
                <div className={`md:col-span-4 p-8 border-l ${item.gold ? "border-white/20" : i % 2 === 0 ? "border-gray-200" : "border-white/10"}`}>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${item.gold ? "text-white/60" : i % 2 !== 0 ? "text-gray-400" : "text-gray-400"}`}>
                    Key Outputs
                  </p>
                  <ul className="space-y-2">
                    {item.outputs.map((o) => (
                      <li key={o} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.gold ? "bg-white" : i % 2 !== 0 ? "bg-[#b8962e]" : "bg-[#b8962e]"}`} />
                        <span className={`text-sm ${item.gold ? "text-white/80" : i % 2 !== 0 ? "text-gray-300" : "text-gray-600"}`}>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-4xl md:text-5xl font-bold text-[#0d1b35]">{m.value}</p>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mt-2">{m.label}</p>
              <p className="text-gray-500 text-xs mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Policy Influence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">
                Areas of Policy & Practice Influence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The DHAIOH Unit is committed to ensuring that research extends beyond scientific publications to deliver tangible improvements in policy, workplace practice, occupational health systems, and worker wellbeing.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#0d1b35] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#162548] transition-colors"
              >
                Engage With Us
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {policyAreas.map((area, i) => (
                <div
                  key={area}
                  className={`flex items-center gap-4 p-4 border ${i === 0 ? "bg-[#0d1b35] text-white border-[#0d1b35]" : "border-gray-200 bg-white"}`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${i === 0 ? "bg-[#b8962e]" : "bg-gray-100"}`}>
                    <svg className={`w-3 h-3 ${i === 0 ? "text-white" : "text-[#b8962e]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`text-sm ${i === 0 ? "text-white font-medium" : "text-gray-700"}`}>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zero Harm CTA */}
      <section className="py-20 bg-[#0d1b35] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-white text-[#0d1b35] px-12 py-8 mb-10">
            <p className="text-5xl font-bold">ZERO</p>
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mt-1">Harm Goal</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Ultimate Objective</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-10">
            Every research project, every innovation, every partnership is oriented toward one goal — making every mine safe, every day, for every worker.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/research-themes"
              className="bg-[#b8962e] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors"
            >
              Explore Research
            </Link>
            <Link
              href="/strategic-partners"
              className="border border-white/40 text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors"
            >
              Our Partners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
