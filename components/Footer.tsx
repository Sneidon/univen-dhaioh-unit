import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0d1b35] text-white">
      <div className="sec !pb-10 !pt-14">
        <div className="sec-in grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logos/dhaioh-logo-footer.png"
              alt="DHAIOH Unit – Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector"
              width={2824}
              height={1009}
              className="mb-4 h-14 w-auto max-w-full object-contain md:h-16"
            />
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#b8962e]">
              SAMRC Extramural Unit
            </p>
            <p className="text-sm leading-relaxed text-white/70">
              Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b8962e]">
              Research
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/research-themes" className="hover:text-white">Research Themes</Link></li>
              <li><Link href="/research-impact" className="hover:text-white">Research Impact</Link></li>
              <li><Link href="/human-capital" className="hover:text-white">Human Capital</Link></li>
              <li><Link href="/innovation" className="hover:text-white">Innovation</Link></li>
              <li><Link href="/impact-framework" className="hover:text-white">Impact Framework</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b8962e]">
              Institute
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li><Link href="/about" className="hover:text-white">About Unit</Link></li>
              <li><Link href="/leadership" className="hover:text-white">Leadership</Link></li>
              <li><Link href="/strategic-partners" className="hover:text-white">Partners</Link></li>
              <li><Link href="/news" className="hover:text-white">News</Link></li>
              <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[10px] font-bold uppercase tracking-[0.14em] text-[#b8962e]">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-white/75">
              <li>University of Venda</li>
              <li>Thohoyandou, Limpopo</li>
              <li>
                <a href="mailto:info@dhaioh-univen.ac.za" className="hover:text-white">
                  info@dhaioh-univen.ac.za
                </a>
              </li>
              <li><Link href="/contact" className="hover:text-white">Get in Touch</Link></li>
              <li>
                <a
                  href="https://www.univen.ac.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  univen.ac.za ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="sec-in flex flex-col gap-3 px-6 py-4 text-[11px] text-white/55 md:flex-row md:items-center md:justify-between md:px-12">
          <p>© 2026 DHAIOH Unit · University of Venda</p>
          <div className="flex gap-4">
            <a
              href="https://www.univen.ac.za/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.univen.ac.za/terms-and-conditions/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
