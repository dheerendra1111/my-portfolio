import { aboutText, aboutCard, personalInfo } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { AcademicIcon, BriefcaseIcon, CheckIcon, LocationIcon } from "./Icons";

export default function About() {
  const [ref, revealed] = useReveal(0.15);

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        {/* Heading */}
        <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
          About Me
        </h2>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Text */}
          <div className="flex-1 space-y-5">
            {aboutText.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-gray-400 sm:text-lg">
                {para}
              </p>
            ))}

            {/* Interest chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Full-Stack Development",
                "System Design",
                "Backend Development",
                "DSA & Problem Solving",
                "AI/ML Exploration",
                "Scalable Systems",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-dark-500 bg-dark-700/50 px-3.5 py-1.5 text-xs font-medium text-gray-300"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="glass rounded-2xl p-6 space-y-5">
              {/* Avatar */}
              <div className="flex justify-center">
                <div
                  className="rounded-full p-[2px]"
                  style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)" }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Dheerendra Singh Lodhi"
                    className="w-20 h-20 rounded-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Education */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-accent-500/10 p-2 text-accent-400">
                  <AcademicIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{aboutCard.degree}</p>
                  <p className="text-sm text-gray-400">{aboutCard.institute}</p>
                </div>
              </div>

              {/* Role */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-accent-500/10 p-2 text-accent-400">
                  <BriefcaseIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{aboutCard.aspiration}</p>
                  <p className="text-sm text-gray-400">Building scalable software</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-lg bg-accent-500/10 p-2 text-accent-400">
                  <LocationIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Indore, India</p>
                  <p className="text-sm text-gray-400">Open to relocation</p>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-dark-500"></div>

              {/* Open to */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
                  Open to
                </p>
                <div className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-gray-300">{aboutCard.openTo}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="btn-primary block rounded-xl px-4 py-3 text-center text-sm font-semibold text-white"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
