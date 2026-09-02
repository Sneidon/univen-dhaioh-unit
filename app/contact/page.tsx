import Image from "next/image";
import PageHero from "@/components/PageHero";

export default function ContactPage() {
  return (
    <>
      <PageHero>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b8962e]">
          Get in Touch
        </p>
        <h1 className="max-w-3xl text-[clamp(1.75rem,4vw,3rem)] font-bold leading-tight">
          Contact <span className="text-[#b8962e]">Us</span>
        </h1>
      </PageHero>

      <section className="sec bg-[#f5f8fa]">
        <div className="sec-in grid items-start gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <div className="card-soft p-6">
              <p className="info-card-tag">Unit Director</p>
              <div className="flex items-start gap-4">
                <div className="h-24 w-20 shrink-0 overflow-hidden rounded-[10px]">
                  <Image
                    src="/prof-zungu.jpg"
                    alt="Prof Lindiwe Zungu"
                    width={80}
                    height={96}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div>
                  <h2 className="info-card-title !mb-1 !text-xl">Prof Lindiwe Zungu</h2>
                  <p className="info-card-desc">
                    Leading transformative research in Digital Health and Artificial Intelligence for occupational health.
                  </p>
                  <a
                    href="mailto:lindiwe.zungu@univen.ac.za"
                    className="info-card-link inline-flex items-center gap-2"
                  >
                    lindiwe.zungu@univen.ac.za
                  </a>
                </div>
              </div>
            </div>

            <div className="card-soft p-6">
              <p className="info-card-tag">General Inquiries</p>
              <div className="flex items-start gap-4">
                <div className="flex h-24 w-20 shrink-0 items-center justify-center rounded-[10px] bg-[#164076]">
                  <svg className="h-10 w-10 text-[#b8962e]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="info-card-title !mb-1 !text-xl">DHAIOH Unit</h2>
                  <p className="info-card-desc">
                    For research collaboration, partnerships, postgraduate opportunities, media requests, and all other general enquiries.
                  </p>
                  <a
                    href="mailto:info@dhaioh-univen.ac.za"
                    className="info-card-link inline-flex items-center gap-2"
                  >
                    info@dhaioh-univen.ac.za
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="card-soft p-6">
            <p className="info-card-tag">Our Strategic Offices</p>
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-xs font-bold tracking-widest uppercase text-[#b8962e]">
                  HOST INSTITUTION
                </p>
                <h4 className="font-bold text-[#0d1b35]">University of Venda (UNIVEN)</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Faculty of Health Sciences
                  <br />
                  University Road, Thohoyandou, 0950
                  <br />
                  Limpopo, South Africa
                </p>
                <a
                  href="https://maps.google.com/?q=University+of+Venda,+University+Road,+Thohoyandou,+0950,+Limpopo,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-[#0d1b35] transition-colors hover:text-[#b8962e]"
                >
                  View Campus Map ↗
                </a>
              </div>

              <div className="border-t border-[#d8e3ec] pt-5">
                <p className="mb-2 text-xs font-bold tracking-widest uppercase text-[#b8962e]">
                  PRETORIA ENGAGEMENT OFFICE
                </p>
                <h4 className="font-bold text-[#0d1b35]">University of Venda — Pretoria Office</h4>
                <p className="mt-1 text-sm text-gray-600">
                  ERF 181, 56 Florence Street
                  <br />
                  Colbyn, Pretoria
                  <br />
                  South Africa
                </p>
                <a
                  href="https://maps.google.com/?q=56+Florence+Street,+Colbyn,+Pretoria,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-[#0d1b35] transition-colors hover:text-[#b8962e]"
                >
                  Get Directions ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-[#eef3f7] py-14">
        <div className="sec-in mx-auto max-w-[1200px] px-6 text-center md:px-12">
          <p className="mb-8 text-xs font-bold tracking-widest uppercase text-gray-400">
            Strategic Alliance for Impact
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-3">
            {[
              {
                src: "/logos/samrc.svg",
                alt: "SAMRC",
                name: "South African Medical Research Council",
                role: "Strategic Funder",
                w: 140,
                h: 56,
              },
              {
                src: "/logos/univen.png",
                alt: "University of Venda",
                name: "University of Venda",
                role: "Host Institution",
                w: 88,
                h: 88,
              },
              {
                src: "/logos/mintek.png",
                alt: "Mintek",
                name: "Mintek",
                role: "Strategic Research Partner",
                w: 150,
                h: 56,
              },
            ].map((p) => (
              <div
                key={p.alt}
                className="card-soft flex flex-col items-center px-6 py-8 text-center"
              >
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8962e]">
                  {p.role}
                </p>
                <div className="mb-5 flex h-20 w-full items-center justify-center">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    width={p.w}
                    height={p.h}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
                <p className="text-sm font-bold leading-snug text-[#0d1b35]">{p.name}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold tracking-wide text-[#0d1b35]">
            United for a Safer, Healthier Mining Sector
          </p>
        </div>
      </section>
    </>
  );
}
