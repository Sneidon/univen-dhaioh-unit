import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#164076] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-4">
            <Image
              src="/logos/landscape-08.png"
              alt="OHS in Mining Research Institute – University of Venda"
              width={1376}
              height={618}
              className="h-[4.5rem] w-auto object-contain"
            />
          </div>
          <p className="text-[#b8962e] text-xs mb-3">SAMRC Extramural Unit</p>
          <p className="text-white/80 text-sm leading-relaxed mb-3">
            Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector.
          </p>
          <p className="text-white/70 text-xs leading-relaxed italic">
            &ldquo;Transforming Worker Health Through Digital Intelligence&rdquo;
          </p>
          <p className="text-white/70 text-xs mt-3">
            A strategic partnership of SAMRC, University of Venda, and Mintek.
          </p>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About the Unit</Link></li>
            <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership & Team</Link></li>
            <li><Link href="/research-themes" className="hover:text-white transition-colors">Research Themes</Link></li>
            <li><Link href="/research-impact" className="hover:text-white transition-colors">Research Impact & Policy</Link></li>
            <li><Link href="/human-capital" className="hover:text-white transition-colors">Human Capital Development</Link></li>
            <li><Link href="/innovation" className="hover:text-white transition-colors">Innovation</Link></li>
            <li><Link href="/impact-framework" className="hover:text-white transition-colors">Impact Framework</Link></li>
            <li><Link href="/strategic-partners" className="hover:text-white transition-colors">Partners</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery & Media</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/impact-framework" className="hover:text-white transition-colors">Impact Framework</Link></li>
            <li><Link href="/strategic-partners" className="hover:text-white transition-colors">Strategic Partners</Link></li>
            <li><Link href="/research-themes" className="hover:text-white transition-colors">Research Portal</Link></li>
            <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery & Media</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li>
              <a href="https://www.univen.ac.za/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.univen.ac.za/terms-and-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <h4 className="text-[#b8962e] text-xs font-bold tracking-widest uppercase mb-3">Connect</h4>
            <p className="text-white/80 text-sm">info@dhaioh-univen.ac.za</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-white/65 text-xs text-center md:text-left">
            © 2026 DHAIOH Unit. Transforming Worker Health Through Digital Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
