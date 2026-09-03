import { personalInfo } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { DownloadIcon } from "./Icons";

export default function Resume() {
  const [ref, revealed] = useReveal(0.15);

  return (
    <section id="resume" className="relative py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <div className="glass rounded-2xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-violet-600/5 pointer-events-none"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Want to know more about me?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-gray-400 sm:text-lg">
              Take a look at my resume to learn more about my education,
              technical skills, projects and experience.
            </p>
            <a
              href={personalInfo.resumeUrl}
              download="Dheerendra_Singh_Lodhi_Resume.pdf"
              className="btn-primary mt-8 inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-sm font-semibold text-white"
              id="resume-download"
            >
              <span className="flex items-center gap-2.5">
                <DownloadIcon className="w-5 h-5" />
                Download Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
