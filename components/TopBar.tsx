export default function TopBar() {
  return (
    <div className="bg-[#0d1b35] px-6 py-2 md:px-12">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-2 text-[11px] text-white/60">
        <p className="tracking-wide">
          University of Venda · Thohoyandou, Limpopo
        </p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:info@dhaioh-univen.ac.za"
            className="transition-colors hover:text-white"
          >
            info@dhaioh-univen.ac.za
          </a>
          <span className="hidden text-white/30 sm:inline" aria-hidden>
            |
          </span>
          <a
            href="https://www.univen.ac.za"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            UNIVEN ↗
          </a>
        </div>
      </div>
    </div>
  );
}
