import { useState, useEffect } from "react";
import { navLinks, personalInfo } from "../data/portfolioData";
import { useActiveSection, useScrolled } from "../hooks/useReveal";
import { MenuIcon, CloseIcon, DownloadIcon } from "./Icons";

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const scrolled = useScrolled(50);
  const active = useActiveSection(sectionIds);
  const [menuOpen, setMenuOpen] = useState(false);

  /* Close menu on resize to desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled py-3" : "py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-white transition-colors hover:text-accent-400"
          aria-label="Go to home"
        >
          Dheerendra<span className="gradient-text">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.href.replace("#", "")
                    ? "text-accent-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Resume Button */}
        <a
          href={personalInfo.resumeUrl}
          download="Dheerendra_Singh_Lodhi_Resume.pdf"
          className="btn-outline hidden items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 md:flex"
          aria-label="Download resume"
        >
          <DownloadIcon className="w-4 h-4" />
          Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-lg p-2 text-gray-400 transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu-enter md:hidden">
          <div className="glass mx-4 mt-3 rounded-2xl p-5">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      active === link.href.replace("#", "")
                        ? "bg-accent-500/10 text-accent-400"
                        : "text-gray-400 hover:bg-dark-600 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-dark-500 pt-4">
              <a
                href={personalInfo.resumeUrl}
                download="Dheerendra_Singh_Lodhi_Resume.pdf"
                onClick={() => setMenuOpen(false)}
                className="btn-primary flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white"
              >
                <span className="flex items-center gap-2">
                  <DownloadIcon className="w-4 h-4" />
                  Download Resume
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
