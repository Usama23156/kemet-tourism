"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars, FaXmark } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { Cinzel } from "next/font/google";

const CinzelFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Destination", label: "Destination" },
  { href: "/Escapes", label: "Escapes" },
  { href: "/About", label: "About Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="section-container flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/LOGO2.PNG"
            alt="Kemet Escapes"
            width={144}
            height={48}
            className="h-10 w-auto md:h-12"
            priority
          />
        </Link>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xl text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>

        <nav
          className={`absolute left-0 right-0 top-full glass-nav md:static md:flex md:bg-transparent md:backdrop-blur-none md:border-none ${
            open ? "block" : "hidden md:flex"
          }`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col gap-1 p-4 md:flex-row md:items-center md:gap-1 md:p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-4 py-2.5 text-base font-semibold transition-colors duration-200 md:px-5 ${CinzelFont.className} ${
                    isActive(link.href)
                      ? "bg-kemet-gold/15 text-kemet-gold"
                      : "text-white/85 hover:bg-white/8 hover:text-kemet-gold"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="relative hidden md:block">
          <button
            type="button"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-kemet-gold/30 text-xl text-kemet-gold transition-colors hover:bg-kemet-gold/10"
            aria-label="Account menu"
            aria-expanded={dropdownOpen}
          >
            <FaRegCircleUser />
          </button>
          {dropdownOpen && (
            <div className="glass-panel absolute right-0 mt-2 w-44 overflow-hidden rounded-xl shadow-gold">
              <Link
                href="/login"
                onClick={() => setDropdownOpen(false)}
                className={`block px-4 py-3 text-sm text-kemet-gold transition-colors hover:bg-white/5 ${CinzelFont.className}`}
              >
                Login
              </Link>
              <Link
                href="/Signup"
                onClick={() => setDropdownOpen(false)}
                className={`block border-t border-white/10 px-4 py-3 text-sm text-kemet-gold transition-colors hover:bg-white/5 ${CinzelFont.className}`}
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
