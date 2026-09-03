import { skillCategories } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

/* Skill icon mapping — uses simple emoji/text icons for reliability */
const skillIcons = {
  "C++": "⚡", Java: "☕", JavaScript: "🟨", HTML: "🌐", CSS: "🎨", SQL: "🗃️",
  React: "⚛️", "Tailwind CSS": "🌊",
  "Node.js": "🟢", "Express.js": "🚂",
  MongoDB: "🍃", MySQL: "🐬",
  "Data Structures & Algorithms": "🧠", DBMS: "📊", "Operating Systems": "💻",
  "Computer Networks": "🌍", OOP: "🧱",
  Git: "🔀", GitHub: "🐙", "VS Code": "📝", Postman: "📮", Docker: "🐳",
};

function SkillCard({ category }) {
  const [ref, revealed] = useReveal(0.1);

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? "revealed" : ""} glass rounded-2xl p-5 sm:p-6`}
    >
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent-400">
        {category.title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="skill-badge flex items-center gap-1.5 rounded-lg border border-dark-500 bg-dark-700/50 px-3 py-2 text-sm font-medium text-gray-300"
          >
            <span className="text-base" aria-hidden="true">
              {skillIcons[skill] || "🔹"}
            </span>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const [ref, revealed] = useReveal(0.1);

  return (
    <section id="skills" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Technologies, languages, and tools I work with to build modern software.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
