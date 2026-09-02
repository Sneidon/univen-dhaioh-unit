"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

type NavItem =
  | { href: string; label: string; children?: never }
  | { href?: never; label: string; children: { href: string; label: string }[] };

const navLinks: NavItem[] = [
  { href: "/", label: "Home" },
  {
    label: "About",
    children: [
      { href: "/about", label: "About Unit" },
      { href: "/leadership", label: "Leadership" },
      { href: "/strategic-partners", label: "Partners" },
      { href: "/news", label: "News" },
    ],
  },
  {
    label: "Research",
    children: [
      { href: "/research-themes", label: "Research Themes" },
      { href: "/research-impact", label: "Research Impact" },
      { href: "/human-capital", label: "Human Capital" },
    ],
  },
  { href: "/innovation", label: "Innovation" },
  { href: "/impact-framework", label: "Impact Framework" },
  { href: "/gallery", label: "Gallery & Media" },
  { href: "/contact", label: "Contact" },
];

function DropdownMenu({
  items,
  onNavigate,
}: {
  items: { href: string; label: string }[];
  onNavigate?: () => void;
}) {
  return (
    <div className="absolute top-full left-0 z-50 min-w-52 rounded-b-lg border border-[#d8e3ec] border-t-2 border-t-[#b8962e] bg-white py-1 shadow-[0_4px_20px_rgba(13,27,53,0.1)]">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          className="block px-4 py-2.5 text-sm text-[#2c3e50] transition-colors hover:bg-[rgba(184,150,46,0.08)] hover:text-[#0d1b35]"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMenus = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const linkClass = (active: boolean) =>
    `block whitespace-nowrap border-b-2 px-[14px] py-[18px] text-[15px] font-semibold tracking-wide transition-colors ${
      active
        ? "border-[#b8962e] text-[#164076]"
        : "border-transparent text-[#2c3e50] hover:border-[#b8962e] hover:text-[#164076]"
    }`;

  return (
    <nav
      ref={navRef}
      className="border-b border-[#d8e3ec] bg-white shadow-[0_2px_8px_rgba(13,27,53,0.06)]"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 md:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-3 py-3">
          <Image
            src="/logos/dhaioh-logo-nav.png"
            alt="DHAIOH Unit – Digital Health and Artificial Intelligence for Occupational Health in the Mining Sector"
            width={2824}
            height={814}
            className="h-12 w-auto object-contain md:h-14"
            priority
          />
        </Link>

        <div className="hidden items-center lg:flex">
          <ul className="flex items-center">
            {navLinks.map((link) => {
              if (link.children) {
                const isActive = link.children.some((c) => pathname === c.href || pathname.startsWith(c.href + "/"));
                return (
                  <li key={link.label} className="relative">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(openDropdown === link.label ? null : link.label)
                      }
                      className={`flex items-center gap-1 ${linkClass(isActive)}`}
                    >
                      {link.label}
                      <svg
                        className={`h-3 w-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <DropdownMenu items={link.children} onNavigate={closeMenus} />
                    )}
                  </li>
                );
              }

              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href!));
              return (
                <li key={link.href}>
                  <Link href={link.href!} className={linkClass(active)} onClick={closeMenus}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <svg className="h-6 w-6 text-[#0d1b35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      />
      <div
        className={`fixed top-0 right-0 z-[70] flex h-full w-[min(340px,86vw)] flex-col overflow-y-auto bg-white p-7 pt-20 shadow-[-8px_0_32px_rgba(13,27,53,0.18)] transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          type="button"
          className="absolute top-5 right-5 text-2xl leading-none text-[#2c3e50]"
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        {navLinks.map((link) => {
          if (link.children) {
            return (
              <div key={link.label} className="border-b border-[#d8e3ec] py-2">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#b8962e]">
                  {link.label}
                </p>
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-2.5 pl-3 text-sm font-medium ${
                      pathname === child.href ? "text-[#0d1b35]" : "text-[#2c3e50]"
                    }`}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            );
          }
          return (
            <Link
              key={link.href}
              href={link.href!}
              onClick={closeMenus}
              className={`block border-b border-[#d8e3ec] py-3 text-base font-semibold ${
                pathname === link.href ? "text-[#0d1b35]" : "text-[#0d1b2a]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
