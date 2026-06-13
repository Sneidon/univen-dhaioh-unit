import Link from "next/link";
import Image from "next/image";

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

const impactAreas = [
  {
    title: "Policy Influence",
    desc: "Translating research evidence into national occupational health policy, Codes of Practice, and regulatory frameworks that protect workers across the mining sector.",
    icon: "P",
    dark: true,
  },
  {
    title: "Codes of Practice",
    desc: "Contributing to the development and revision of industry Codes of Practice for occupational health, safety, and disease prevention in South African mining.",
    icon: "C",
  },
  {
    title: "Women in Mining Policy",
    desc: "Advancing gender-responsive workplace policies, women-specific PPE standards, and guidelines addressing gender-based violence and security in mining.",
    icon: "W",
    gold: true,
  },
  {
    title: "Government Advisory Roles",
    desc: "Providing expert technical advisory support to government departments, regulatory bodies, and national health authorities on occupational health matters.",
    icon: "G",
    dark: true,
  },
  {
    title: "Regulatory Reform",
    desc: "Driving evidence-based regulatory reform through engagement with the Department of Mineral and Petroleum Resources, Department of Health, and the Compensation Fund.",
    icon: "R",
  },
  {
    title: "Evidence-to-Policy Pathways",
    desc: "Developing structured mechanisms for translating peer-reviewed research findings into actionable policy submissions, technical reports, and implementation guidelines.",
    icon: "E",
  },
];

const pathwaySteps = [
  { step: "01", phase: "Research", title: "Generating High-Impact Evidence", desc: "Producing world-class, peer-reviewed research on occupational health risks in mining.", outputs: ["Peer-reviewed publications", "Technical reports", "Epidemiological datasets", "Systematic reviews"] },
  { step: "02", phase: "Innovation", title: "Transforming Evidence into Technology", desc: "Translating research findings into AI models, predictive systems, and digital health platforms.", outputs: ["AI algorithms & predictive models", "Wearable sensor systems", "Digital surveillance platforms", "Decision-support tools"] },
  { step: "03", phase: "Policy & Practice", title: "Influencing Systemic Change", desc: "Translating evidence and implementation learnings into occupational health policy and regulatory frameworks.", outputs: ["Policy submissions", "Regulatory guidelines", "Codes of practice", "Government advisory roles"] },
  { step: "04", phase: "Impact", title: "Measurable Health & Social Outcomes", desc: "Achieving healthier workers, safer mining workplaces, and stronger occupational health systems.", outputs: ["Reduced disease burden", "Early detection & prevention", "Improved worker wellbeing", "Zero Harm advancement"], gold: true },
];

const metrics = [
  { value: "20+", label: "Years of Research", sub: "Occupational health expertise" },
  { value: "45+", label: "Graduates Supervised", sub: "Master's & Doctoral" },
  { value: "11", label: "Policy Influence Areas", sub: "National & regulatory" },
  { value: "ZERO", label: "Harm Target", sub: "Our ultimate objective" },
];

export default function ResearchImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/pexels-laura-james-6097771.jpg" alt="Health worker documenting occupational health data" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/80" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            Research Impact <span className="text-[#b8962e]">&amp; Policy Influence</span>
          </h1>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-12 bg-[#162548] text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#b8962e]">{m.value}</p>
              <p className="text-white text-sm font-semibold mt-1">{m.label}</p>
              <p className="text-gray-400 text-xs mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Pathway */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">How We Generate Value</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">
              Research → Innovation → Policy → Impact
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm">
              Our methodology follows a rigorous scientific cycle, ensuring that every discovery translates into
              meaningful improvements in worker health and workplace safety.
            </p>
          </div>

          <div className="space-y-4">
            {pathwaySteps.map((item, i) => (
              <div
                key={item.step}
                className={`grid md:grid-cols-12 gap-0 ${item.gold ? "bg-[#b8962e] text-white" : i % 2 === 0 ? "bg-gray-50 border border-gray-200" : "bg-[#0d1b35] text-white"}`}
              >
                <div className={`md:col-span-2 p-8 flex items-center justify-center border-r ${item.gold ? "border-white/20" : i % 2 === 0 ? "border-gray-200" : "border-white/10"}`}>
                  <div className="text-center">
                    <p className={`text-4xl font-bold ${item.gold || i % 2 !== 0 ? "text-white/30" : "text-gray-200"}`}>{item.step}</p>
                    <p className="text-xs font-bold tracking-widest uppercase mt-2 text-[#b8962e]">{item.phase}</p>
                  </div>
                </div>
                <div className="md:col-span-6 p-8">
                  <h3 className={`font-bold text-xl mb-3 ${item.gold || i % 2 !== 0 ? "text-white" : "text-[#0d1b35]"}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${item.gold ? "text-white/80" : i % 2 !== 0 ? "text-gray-300" : "text-gray-600"}`}>{item.desc}</p>
                </div>
                <div className={`md:col-span-4 p-8 border-l ${item.gold ? "border-white/20" : i % 2 === 0 ? "border-gray-200" : "border-white/10"}`}>
                  <p className={`text-xs font-bold tracking-widest uppercase mb-3 ${item.gold ? "text-white/60" : "text-gray-400"}`}>Key Outputs</p>
                  <ul className="space-y-2">
                    {item.outputs.map((o) => (
                      <li key={o} className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.gold ? "bg-white" : "bg-[#b8962e]"}`} />
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

      {/* Impact Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Impact Areas</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35]">How We Drive Change</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {impactAreas.map((area) => (
              <div
                key={area.title}
                className={`p-8 ${area.gold ? "bg-[#b8962e] text-white" : area.dark ? "bg-[#0d1b35] text-white" : "bg-white border border-gray-200"}`}
              >
                <div className={`w-12 h-12 flex items-center justify-center font-bold text-lg mb-5 ${area.gold ? "bg-white/20 text-white" : area.dark ? "bg-[#b8962e] text-white" : "bg-[#0d1b35] text-[#b8962e]"}`}>
                  {area.icon}
                </div>
                <h3 className={`font-bold text-lg mb-3 ${area.gold || area.dark ? "text-white" : "text-[#0d1b35]"}`}>{area.title}</h3>
                <p className={`text-sm leading-relaxed ${area.gold ? "text-white/80" : area.dark ? "text-gray-300" : "text-gray-600"}`}>{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Influence Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Policy Landscape</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-4">
                Areas of Policy &amp; Practice Influence
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                The DHAIOH Unit&apos;s research is designed to drive systemic change — from informing individual
                workplace practices to shaping national regulatory frameworks and international occupational health
                standards.
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

      {/* CTA */}
      <section className="py-20 bg-[#0d1b35] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making Every Mine Safe. Every Day.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Every research project, every innovation, every partnership is oriented toward one goal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impact-framework" className="bg-[#b8962e] text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors">
              Full Impact Framework
            </Link>
            <Link href="/strategic-partners" className="border border-white/40 text-white text-sm font-bold px-8 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors">
              Our Partners
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
