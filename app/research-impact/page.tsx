import Link from "next/link";
import PageHero from "@/components/PageHero";
import CardImageHeader from "@/components/CardImageHeader";
import { impactCards } from "@/lib/card-images";

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
    image: impactCards[0],
  },
  {
    title: "Codes of Practice",
    desc: "Contributing to the development and revision of industry Codes of Practice for occupational health, safety, and disease prevention in South African mining.",
    icon: "C",
    image: impactCards[1],
  },
  {
    title: "Women in Mining Policy",
    desc: "Advancing gender-responsive workplace policies, women-specific PPE standards, and guidelines addressing gender-based violence and security in mining.",
    icon: "W",
    gold: true,
    image: impactCards[2],
  },
  {
    title: "Government Advisory Roles",
    desc: "Providing expert technical advisory support to government departments, regulatory bodies, and national health authorities on occupational health matters.",
    icon: "G",
    dark: true,
    image: impactCards[3],
  },
  {
    title: "Regulatory Reform",
    desc: "Driving evidence-based regulatory reform through engagement with the Department of Mineral and Petroleum Resources, Department of Health, and the Compensation Fund.",
    icon: "R",
    image: impactCards[4],
  },
  {
    title: "Evidence-to-Policy Pathways",
    desc: "Developing structured mechanisms for translating peer-reviewed research findings into actionable policy submissions, technical reports, and implementation guidelines.",
    icon: "E",
    image: impactCards[5],
  },
];

const metrics = [
  { value: "11", label: "Policy Influence Areas", sub: "National & regulatory" },
  { value: "ZERO", label: "Harm Target", sub: "Our ultimate objective" },
];

export default function ResearchImpactPage() {
  return (
    <>
      <PageHero src="/banners/hero-research-impact.jpg" alt="Occupational health command center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Research Impact <span className="text-[#b8962e]">&amp; Policy Influence</span>
        </h1>
      </PageHero>

      {/* Metrics */}
      <section className="py-12 bg-[#164076] text-white">
        <div className="max-w-lg mx-auto px-6 grid grid-cols-2 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-3xl md:text-4xl font-bold text-[#b8962e]">{m.value}</p>
              <p className="text-white text-sm font-semibold mt-1">{m.label}</p>
              <p className="text-gray-400 text-xs mt-1">{m.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact pathway teaser */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            See the full Research → Innovation → Policy → Practice → Impact pathway on the Impact Framework page.
          </p>
          <Link
            href="/impact-framework"
            className="inline-block text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors"
          >
            View Impact Framework →
          </Link>
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
                className={`overflow-hidden flex flex-col ${area.gold ? "bg-[#b8962e] text-white" : area.dark ? "bg-[#164076] text-white border-t-4 border-[#d22d20]" : "bg-white border border-gray-200"}`}
              >
                <CardImageHeader
                  src={area.image.src}
                  alt={area.image.alt}
                  overlay={area.gold ? "gold" : area.dark ? "blue" : "light"}
                  className="h-32"
                />
                <div className="p-8 flex flex-col flex-1">
                <div className={`w-12 h-12 flex items-center justify-center font-bold text-lg mb-5 ${area.gold ? "bg-white/20 text-white" : area.dark ? "bg-[#b8962e] text-white" : "bg-[#164076] text-[#b8962e]"}`}>
                  {area.icon}
                </div>
                <h3 className={`font-bold text-lg mb-3 ${area.gold || area.dark ? "text-white" : "text-[#0d1b35]"}`}>{area.title}</h3>
                <p className={`text-sm leading-relaxed ${area.gold ? "text-white/80" : area.dark ? "text-gray-300" : "text-gray-600"}`}>{area.desc}</p>
                </div>
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
                className="btn-cta"
              >
                Engage With Us
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {policyAreas.map((area, i) => (
                <div
                  key={area}
                  className={`flex items-center gap-4 p-4 border border-[#164076] ${i === 0 ? "bg-[#164076] text-white border-t-4 border-t-[#d22d20]" : "border-gray-200 bg-white"}`}
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
      <section className="py-20 bg-[#164076] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Making Every Mine Safe. Every Day.</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
            Every research project, every innovation, every partnership is oriented toward one goal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/impact-framework" className="btn-cta">
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
