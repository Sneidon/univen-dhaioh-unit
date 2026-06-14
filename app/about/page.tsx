import Link from "next/link";
import Image from "next/image";

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

const codirectorshipStrengths = [
  "Policy-relevant public health research with advanced engineering and technological innovation",
  "Human-centred, gender-responsive approaches with AI-driven, data-intensive systems",
  "Academic excellence and research leadership with industry application and technology transfer",
  "Drive transdisciplinary research addressing complex occupational health challenges",
  "Ensure end-to-end impact, from knowledge generation to policy influence and technology deployment",
  "Strengthen postgraduate training and human capital development through joint academic–industry mentorship",
  "Foster sustainable partnerships across academia, government, and the mining sector",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/banners/mine-17.webp" alt="DHAIOH research team at Mintek" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-[#0d1b35]/82" />
        <div className="relative max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            <span className="text-[#b8962e]">DHAIOH</span> Unit
          </h1>
        </div>
      </section>

      {/* Unit Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Unit Overview</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-6">
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
              <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-5">
                Five Interconnected Thematic Areas
              </p>
              <div className="space-y-4">
                {thematicAreas.map((area) => (
                  <div key={area.n} className="flex gap-4 items-start border-l-4 border-[#b8962e] pl-5 py-2">
                    <span className="text-[#b8962e] font-bold text-lg flex-shrink-0">{area.n}</span>
                    <div>
                      <p className="font-bold text-[#0d1b35] text-sm mb-1">{area.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
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
              To become a globally recognised centre of excellence leading the transformation of occupational
              health through digital innovation, artificial intelligence, and predictive health systems.
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
              To generate world-class research, develop innovative technologies, build future research leaders,
              influence policy, and create scalable digital health solutions that improve occupational health
              outcomes in mining and other high-risk sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 bg-[#b8962e] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-4 text-white/70">Positioning Statement</p>
          <p className="text-xl md:text-2xl font-semibold leading-relaxed">
            Together, the Co-Directors position the DHAIOH Unit as a flagship national research platform with global
            relevance, uniquely equipped to lead the transformation of occupational health in mining through digital
            health innovation, artificial intelligence, and policy-responsive research.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Governance & Leadership</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0d1b35] mb-3">Unit Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The DHAIOH Unit is co-directed by two distinguished leaders whose combined expertise reflects the
              Unit&apos;s interdisciplinary mandate — integrating public health leadership, policy influence, and
              scientific excellence with engineering innovation and advanced technological solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Unit Director */}
            <div className="bg-[#0d1b35] text-white p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#b8962e] mb-4">
                  <Image
                    src="/prof-zungu.jpg"
                    alt="Prof Lindiwe Zungu"
                    width={144}
                    height={144}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="bg-[#b8962e] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-3">
                  Unit Director
                </span>
                <h3 className="font-bold text-xl mb-1">Prof Lindiwe Zungu</h3>
                <p className="text-[#b8962e] text-sm font-semibold">Director: OHS in Mining Research Institute | UNIVEN</p>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                Professor Lindiwe Zungu is a multiple award-winning scholar, occupational health specialist, and
                research leader, currently serving as Director of the OHS Research Institute and Director of the
                SAMRC Extramural Research Unit (DHAIOH Unit) at the University of Venda. She holds a PhD in
                Occupational Health (2003) and completed advanced training in Clinical Scholars Research Training
                through Harvard Medical School (2018).
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                With more than twenty years of experience, Professor Zungu has led numerous large-scale research
                projects funded by MHSC, SAMRC, NRF, and other national stakeholders, generating evidence that
                has informed policy, regulatory frameworks, Codes of Practice, and workplace interventions across
                the South African Mining Industry.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                She has supervised and mentored more than 45 Master&apos;s and Doctoral graduates and has received
                numerous national awards including the SAMRC Career Development Award, the DST Distinguished Woman
                Scientist Award, the TW Kambule-NSTF Award, the Feroza Adam Award, and the SAMRC Merit Award for
                Research Capacity Development and Transformation (2024/25).
              </p>
            </div>

            {/* Co-Unit Director */}
            <div className="bg-gray-50 border border-gray-200 p-8">
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#d22d20] mb-4">
                  <Image
                    src="/james-headshot.jpg"
                    alt="Dr James Aluha"
                    width={144}
                    height={144}
                    className="object-cover object-top w-full h-full"
                  />
                </div>
                <span className="bg-[#0d1b35] text-white text-xs font-bold tracking-widest uppercase px-3 py-1 mb-3">
                  Co-Unit Director
                </span>
                <h3 className="font-bold text-xl text-[#0d1b35] mb-1">Dr James Aluha</h3>
                <p className="text-[#b8962e] text-sm font-semibold">Chief Research Scientist | Mintek</p>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                Dr James Aluha is a Chief Research Scientist at Mintek with expertise in chemical engineering,
                materials science, and mining innovation. He holds a PhD in Chemical Engineering from l&apos;Université
                de Sherbrooke (Canada) and advanced degrees from the University of the Witwatersrand.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                With over 15 years of experience, his work focuses on nanotechnology, sensor development, and
                AI-enabled systems for occupational health and safety in mining. He leads the development of
                real-time monitoring and predictive risk detection technologies addressing critical challenges such
                as hazardous exposures and environmental safety.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dr Aluha contributes strong engineering and innovation leadership to the DHAIOH Unit, ensuring
                solutions are practical, scalable, and responsive to real-world mining environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co-Directorship Significance */}
      <section className="py-20 bg-[#0d1b35] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">
              Joint Co-Directorship
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Significance, Strength & Uniqueness
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed">
              The co-directorship of Professor Zungu and Dr Aluha represents a strategic and highly complementary
              partnership, positioning the DHAIOH Unit as a uniquely powerful platform at the interface of health
              science, engineering, and digital innovation.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {codirectorshipStrengths.map((strength, i) => (
              <div key={i} className="border border-white/10 bg-white/5 p-6 flex gap-4 items-start">
                <div className="w-8 h-8 bg-[#b8962e] flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{strength}</p>
              </div>
            ))}
          </div>
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
                <h3 className="font-bold text-base text-white">{p.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="h-80 bg-gray-200 flex flex-col items-center justify-center gap-3">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
              <path strokeWidth="1.5" d="M21 15l-5-5L5 21" />
            </svg>
            <p className="text-gray-400 text-xs tracking-widest uppercase">Image Placeholder</p>
          </div>
          <div>
            <p className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">SAMRC–UNIVEN–MINTEK</p>
            <h2 className="text-3xl font-bold text-[#0d1b35] mb-6">
              A Strategic Alliance for Continental Impact
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The DHAIOH Unit is powered by a triumvirate of South Africa&apos;s leading institutions: the{" "}
              <strong>South African Medical Research Council (SAMRC)</strong> as strategic funder, the{" "}
              <strong>University of Venda (UNIVEN)</strong> as host institution, and{" "}
              <strong>Mintek</strong> as strategic research partner.
            </p>
            <div className="space-y-4">
              {[
                { title: "Strategic Investment", desc: "SAMRC catalytic funding supporting scientific excellence, digital innovation, and high-impact evidence generation." },
                { title: "Academic Leadership", desc: "UNIVEN providing visionary leadership, research infrastructure, and postgraduate development opportunities." },
                { title: "Mining Innovation", desc: "Mintek contributing national leadership in mining research, technology development, and technology transfer." },
                { title: "Capacity Development", desc: "Building the next generation of African digital health scientists through postgraduate training and mentorship." },
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
            <div className="mt-8">
              <Link href="/strategic-partners" className="text-sm font-bold tracking-widest uppercase text-[#0d1b35] border-b-2 border-[#b8962e] pb-0.5 hover:text-[#b8962e] transition-colors">
                View All Partners →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0d1b35] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-10">Transforming Health. Protecting Lives.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/research-themes" className="bg-[#b8962e] text-white text-sm font-bold px-8 py-4 tracking-widest uppercase hover:bg-[#c9a84c] transition-colors">
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
