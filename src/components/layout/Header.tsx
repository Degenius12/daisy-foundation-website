"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationLinks = [
  { name: "Mission", href: "#mission" },
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
    <header className="absolute top-0 left-0 right-0 z-40 w-full">
      <div className="mx-auto max-w-7xl px-4">
        {/* Logo — centered, overlays hero */}
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:opacity-80 transition-opacity"
            aria-label="Daisy Foundation - Return to top"
          >
            <Image
              src="/images/Logo.svg"
              alt="Daisy Foundation - Honoring Grandmother Daisy's Legacy"
              width={240}
              height={208}
              className="h-[270px] w-auto drop-shadow-lg"
              priority
              unoptimized
            />
          </button>
        </div>

        {/* Nav bar — centered below logo */}
        <nav className="flex items-center justify-center -mt-2" aria-label="Global">
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
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

          {/* Desktop navigation — centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-semibold leading-6 text-white hover:text-daisy-sunshine-300 transition-colors drop-shadow-md"
              >
                {item.name}
              </a>
            ))}
            <Button asChild className="bg-daisy-forest-600 hover:bg-daisy-forest-700 shadow-lg">
              <a href="#donate" onClick={(e) => handleNavClick(e, "#donate")}>
                Donate Now
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/90 backdrop-blur rounded-lg mt-2 shadow-lg">
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navigationLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block rounded-md px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button asChild className="w-full bg-daisy-forest-600 hover:bg-daisy-forest-700">
                  <a href="#donate" onClick={(e) => handleNavClick(e, "#donate")}>
                    Donate Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
