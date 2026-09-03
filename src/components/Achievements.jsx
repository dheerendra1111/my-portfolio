import { achievements } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import {
  AcademicIcon,
  CodeBracketIcon,
  RocketIcon,
  TrophyIcon,
  CpuIcon,
} from "./Icons";

const iconMap = {
  academic: AcademicIcon,
  code: CodeBracketIcon,
  project: RocketIcon,
  trophy: TrophyIcon,
  tech: CpuIcon,
};

function AchievementCard({ item, index }) {
  const [ref, revealed] = useReveal(0.15);
  const Icon = iconMap[item.icon] || TrophyIcon;

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? "revealed" : ""} glass gradient-border rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="mb-3 inline-flex rounded-xl bg-accent-500/10 p-3 text-accent-400">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-base font-bold text-white">{item.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        {item.description}
      </p>
    </div>
  );
}

export default function Achievements() {
  const [ref, revealed] = useReveal(0.1);

  return (
    <section id="achievements" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            Achievements
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Highlights of my academic and technical journey so far.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
