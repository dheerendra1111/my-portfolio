import { timeline } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";

function TimelineItem({ item, index, isLast }) {
  const [ref, revealed] = useReveal(0.15);

  return (
    <div
      ref={ref}
      className={`reveal ${revealed ? "revealed" : ""} relative flex gap-6`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Line + dot */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent-500/30 bg-dark-800">
          <div className="h-3 w-3 rounded-full bg-accent-500"></div>
        </div>
        {!isLast && (
          <div className="timeline-line w-0.5 flex-1 min-h-[60px]"></div>
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <span className="inline-block rounded-full bg-accent-500/10 px-3 py-1 text-xs font-semibold text-accent-400">
          {item.year}
        </span>
        <h3 className="mt-3 text-lg font-bold text-white">{item.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Journey() {
  const [ref, revealed] = useReveal(0.1);

  return (
    <section id="journey" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div ref={ref} className={`reveal ${revealed ? "revealed" : ""}`}>
          <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
            My Journey
          </h2>
          <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
            Key milestones in my education and software engineering path.
          </p>
        </div>

        <div className="mt-12 ml-2 sm:ml-6 max-w-2xl">
          {timeline.map((item, i) => (
            <TimelineItem
              key={i}
              item={item}
              index={i}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
