import { projects, personalInfo } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

function ProjectCard({ project, index }) {
  const [ref, revealed] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="project-card gradient-border glass rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Project visual header */}
        <div
          className={`relative h-48 sm:h-52 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
        >
          {/* Decorative code lines */}
          <div className="absolute inset-0 flex flex-col justify-center gap-2 p-6 opacity-40">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-full"
                style={{
                  width: `${40 + Math.random() * 40}%`,
                  background: project.accentColor,
                  opacity: 0.2 + Math.random() * 0.3,
                }}
              />
            ))}
          </div>
          {/* Project title overlay */}
          <div className="relative z-10 text-center px-4">
            <div
              className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl"
              style={{ background: `${project.accentColor}22` }}
            >
              <span
                className="text-2xl font-bold"
                style={{ color: project.accentColor }}
              >
                {project.title.charAt(0)}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white">{project.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <p className="flex-1 text-sm leading-relaxed text-gray-400">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-dark-500 bg-dark-700/50 px-2.5 py-1 text-xs font-medium text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-300"
              aria-label={`View ${project.title} on GitHub`}
            >
              <GitHubIcon className="w-4 h-4" />
              GitHub
            </a>
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-lg px-4 py-2.5 text-sm font-medium text-white"
                aria-label={`View ${project.title} live demo`}
              >
                <span className="flex items-center gap-2">
                  <ExternalLinkIcon className="w-4 h-4" />
                  Live Demo
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [ref, revealed] = useReveal(0.1);

  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Real-world applications I've built to solve problems and learn new technologies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline rounded-xl px-8 py-3.5 text-sm font-semibold text-gray-300"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </section>
  );
}
