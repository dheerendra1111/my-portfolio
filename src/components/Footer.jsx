import { personalInfo, navLinks } from "../data/portfolioData";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-600 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          {/* Logo & tagline */}
          <div className="text-center sm:text-left">
            <a href="#home" className="text-xl font-bold text-white">
              Dheerendra<span className="gradient-text">.</span>
            </a>
            <p className="mt-1 text-sm text-gray-500">
              Building software that matters.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="GitHub"
            >
              <GitHubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-dark-600 hover:text-white"
              aria-label="Email"
            >
              <EmailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-dark-600 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dheerendra Singh Lodhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
