import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const codirectorshipStrengths = [
  { title: "Transdisciplinary Integration", desc: "Policy-relevant public health research combined with advanced engineering and technological innovation." },
  { title: "Dual Approaches", desc: "Human-centred, gender-responsive approaches paired with AI-driven, data-intensive systems." },
  { title: "Academic–Industry Bridge", desc: "Academic excellence and research leadership united with industry application and technology transfer." },
  { title: "End-to-End Impact", desc: "From knowledge generation to policy influence and technology deployment at scale." },
  { title: "Human Capital Development", desc: "Joint academic–industry mentorship strengthening postgraduate training and capacity development." },
  { title: "Sustainable Partnerships", desc: "Fostering sustainable partnerships across academia, government, and the mining sector." },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero src="/banners/hero-leadership.jpg" alt="Mining health excellence team">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Unit Leadership <span className="text-[#b8962e]">&amp; Team</span>
        </h1>
      </PageHero>

      {/* Co-Directorship model */}
      <section className="py-16 bg-[#b8962e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/70">Positioning Statement</p>
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            Together, the Co-Directors position the DHAIOH Unit as a flagship national research platform with
            global relevance, uniquely equipped to lead the transformation of occupational health in mining
            through digital health innovation, artificial intelligence, and policy-responsive research.
          </p>
        </div>
      </section>

      {/* Director profiles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Profiles</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35]">Co-Directors</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Prof Lindiwe Zungu */}
            <div className="bg-[#0d1b35] text-white p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#b8962e] flex-shrink-0">
                  <Image
                    src="/prof-zungu.jpg"
                    alt="Prof Lindiwe Zungu"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <span className="bg-[#b8962e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 inline-block mb-3">
                    Unit Director
                  </span>
                  <h3 className="font-bold text-2xl mb-1">Prof Lindiwe Zungu</h3>
                  <p className="text-[#b8962e] text-sm font-semibold leading-snug">
                    Director: OHS in Mining Research Institute | UNIVEN
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-gray-300">
                <p>
                  Professor Lindiwe Zungu is a multiple award-winning scholar, occupational health specialist, and
                  research leader, currently serving as Director of the Occupational Health and Safety (OHS)
                  Research Institute and Director of the SAMRC Extramural Research Unit (DHAIOH Unit) at the
                  University of Venda. She holds a PhD in Occupational Health (2003) and completed advanced
                  training in Clinical Scholars Research Training through Harvard Medical School (2018).
                </p>
                <p>
                  With more than twenty years of experience in occupational health, public health, and mining
                  research, Professor Zungu has established herself as one of South Africa&apos;s leading experts in
                  occupational health and safety in high-risk industries. She has led numerous large-scale
                  research projects funded by MHSC, SAMRC, NRF, and other national stakeholders, generating
                  evidence that has informed policy development, regulatory frameworks, Codes of Practice, and
                  workplace interventions across the South African Mining Industry.
                </p>
                <p>
                  Her research focuses on occupational diseases, digital health and artificial intelligence,
                  women&apos;s health and safety in mining, mental health and psychosocial wellbeing, occupational
                  hygiene, environmental health, and health systems strengthening. Her work has directly
                  contributed to national policy initiatives including gender-responsive occupational health
                  interventions, women-specific PPE standards, and guidelines addressing gender-based violence
                  in mining workplaces.
                </p>
                <p>
                  Professor Zungu has supervised and mentored more than 45 Master&apos;s and Doctoral graduates.
                  Her distinguished contributions have been recognised through numerous national awards including
                  the SAMRC Career Development Award, the DST Distinguished Woman Scientist Award, the TW
                  Kambule-NSTF Award, the Feroza Adam Award, and the SAMRC Merit Award for Research Capacity
                  Development and Transformation (2024/25).
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Key Awards</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "SAMRC Career Development Award",
                    "DST Distinguished Woman Scientist Award",
                    "TW Kambule-NSTF Award",
                    "Feroza Adam Award",
                    "SAMRC Merit Award 2024/25",
                  ].map((award) => (
                    <span key={award} className="bg-white/10 text-white/80 text-xs px-3 py-1 border border-white/10">
                      {award}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Dr James Aluha */}
            <div className="bg-gray-50 border border-gray-200 p-8 md:p-10">
              <div className="flex flex-col sm:flex-row gap-6 items-start mb-8">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#d22d20] flex-shrink-0">
                  <Image
                    src="/james-headshot.jpg"
                    alt="Dr James Aluha"
                    width={144}
                    height={144}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <div>
                  <span className="bg-[#0d1b35] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 inline-block mb-3">
                    Co-Unit Director
                  </span>
                  <h3 className="font-bold text-2xl text-[#0d1b35] mb-1">Dr James Aluha</h3>
                  <p className="text-[#b8962e] text-sm font-semibold leading-snug">
                    Chief Research Scientist | Mintek
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                <p>
                  Dr James Aluha is a Chief Research Scientist at Mintek with expertise in chemical engineering,
                  materials science, and mining innovation. He holds a PhD in Chemical Engineering from
                  l&apos;Université de Sherbrooke (Canada) and advanced degrees from the University of the
                  Witwatersrand.
                </p>
                <p>
                  With over 15 years of experience, his work focuses on nanotechnology, sensor development, and
                  AI-enabled systems for occupational health and safety in mining. He leads the development of
                  real-time monitoring and predictive risk detection technologies, addressing critical challenges
                  such as hazardous exposures and environmental safety.
                </p>
                <p>
                  His work bridges research and application, supporting industry innovation and technology
                  transfer. Dr Aluha contributes strong engineering and innovation leadership to the DHAIOH Unit,
                  ensuring solutions are practical, scalable, and responsive to real-world mining environments.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Areas of Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Chemical Engineering",
                    "Nanotechnology",
                    "Sensor Development",
                    "AI-Enabled Systems",
                    "Real-Time Monitoring",
                    "Technology Transfer",
                  ].map((exp) => (
                    <span key={exp} className="bg-[#0d1b35]/5 text-[#0d1b35] text-xs px-3 py-1 border border-[#0d1b35]/10">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Directorship Strengths */}
      <section className="py-20 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Joint Co-Directorship</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Significance, Strength &amp; Uniqueness</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              The co-directorship reflects the evolving demands of occupational health in mining — requiring
              solutions that are scientifically rigorous, technologically advanced, and socially responsive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codirectorshipStrengths.map((s, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6">
                <div className="w-8 h-8 bg-[#b8962e] flex items-center justify-center mb-4 font-bold text-xs text-white">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directors' Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase text-center mb-8">From the Co-Directors</p>
          <blockquote className="text-[#0d1b35] text-lg md:text-xl leading-relaxed font-medium mb-8 border-l-4 border-[#b8962e] pl-8">
            &ldquo;The establishment of the DHAIOH Extramural Unit by the SAMRC represents a defining moment in
            the evolution of occupational health research, innovation, and practice in South Africa and beyond.
            Our ultimate aspiration is simple yet profound: to ensure that every worker returns home healthy,
            safe, and dignified each day through the intelligent application of science, technology, and
            human-centred innovation.&rdquo;
          </blockquote>
          <p className="text-gray-500 text-sm pl-8">
            — <strong className="text-[#0d1b35]">Prof Lindiwe Zungu</strong> &amp;{" "}
            <strong className="text-[#0d1b35]">Dr James Aluha</strong>, Co-Directors, DHAIOH Unit
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0d1b35] text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Explore the Unit&apos;s Work</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" className="bg-[#b8962e] text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors">
              About the Unit
            </Link>
            <Link href="/research-themes" className="border border-white/40 text-white text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-white/10 transition-colors">
              Research Themes
            </Link>
            <Link href="/contact" className="border border-[#b8962e]/60 text-[#b8962e] text-sm font-bold px-6 py-3 tracking-widest uppercase hover:bg-[#b8962e]/10 transition-colors">
              Contact the Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
