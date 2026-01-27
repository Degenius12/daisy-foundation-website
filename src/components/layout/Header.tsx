"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Story", href: "#story" },
  { name: "Programs", href: "#programs" },
  { name: "Board", href: "#board" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b-2 border-vintage-beige-200 bg-vintage-cream-100/95 backdrop-blur supports-[backdrop-filter]:bg-vintage-cream-100/80 shadow-vintage-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-2 lg:px-4 py-0" aria-label="Global">
        <div className="flex lg:flex-1">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-80 transition-opacity flex items-center gap-2"
            aria-label="Daisy's Foundation - Return to top"
          >
            <Image
              src="/images/logo/daisys-logo-horizontal.svg"
              alt="Daisy's Foundation - In Her Name"
              width={600}
              height={1000}
              className="h-[360px] w-auto md:h-[400px] lg:h-[480px]"
              quality={100}
              unoptimized
              priority
            />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-vintage-brown-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">
              {mobileMenuOpen ? "Close menu" : "Open menu"}
            </span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigationLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="relative text-sm font-semibold font-heading leading-6 text-vintage-brown-500 hover:text-vintage-gold-400 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-vintage-gold-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#donate"
            onClick={(e) => handleNavClick(e, "#donate")}
            className="vintage-button text-sm px-5 py-2"
          >
            Donate Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-vintage-beige-200 bg-vintage-cream-50">
          <div className="space-y-1 px-4 pb-4 pt-2">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block rounded-md px-3 py-2 text-base font-semibold font-heading text-vintage-brown-600 hover:bg-vintage-beige-100"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#donate"
                onClick={(e) => handleNavClick(e, "#donate")}
                className="vintage-button w-full block text-center"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
