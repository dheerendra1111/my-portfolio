import { stats } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

export default function Stats() {
  const [ref, revealed] = useReveal(0.2);

  return (
    <section className="relative py-16 sm:py-20" aria-label="Quick statistics">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <div className="glass rounded-2xl p-6 sm:p-8">
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <span className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl gradient-text">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm font-medium text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
