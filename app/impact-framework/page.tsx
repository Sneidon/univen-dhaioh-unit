import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";

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

export default function ImpactFrameworkPage() {
  return (
    <>
      <PageHero
        src="/banners/hero-impact-framework.jpg"
        alt="Connected mining and processing facility at sunset"
        imageClassName="object-cover object-top"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
          From Research to
          <br />
          <span className="text-[#b8962e]">Real-World Impact</span>
        </h1>
      </PageHero>

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
                className={`grid md:grid-cols-12 gap-0 ${item.gold ? "bg-[#b8962e] text-white" : i % 2 === 0 ? "bg-gray-50 border border-gray-200" : "bg-[#314c7a] text-white border-t-4 border-[#d22d20]"}`}
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

      {/* Policy influence teaser */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Policy & Practice</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0d1b35] mb-4">Areas of Policy Influence</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            The DHAIOH Unit drives systemic change across 11 areas of national policy, regulatory reform, and
            industry practice — from occupational health guidelines to gender-responsive mining policies.
          </p>
          <Link
            href="/research-impact"
            className="btn-cta"
          >
            View Policy & Practice Influence Areas →
          </Link>
        </div>
      </section>

      {/* Zero Harm CTA */}
      <section className="py-20 bg-[#314c7a] text-white text-center">
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
              className="btn-cta"
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
