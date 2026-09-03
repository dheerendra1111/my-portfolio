import { useMemo } from "react";
import { dsaTopics, personalInfo } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { GitHubIcon } from "./Icons";

/* Generate a contribution-style grid (placeholder — no fake data) */
function ContributionGrid() {
  const cells = useMemo(() => {
    const levels = [0, 1, 2, 3, 4];
    const grid = [];
    for (let week = 0; week < 26; week++) {
      for (let day = 0; day < 7; day++) {
        // Weighted random: more likely to be low levels
        const rand = Math.random();
        let level;
        if (rand < 0.35) level = 0;
        else if (rand < 0.55) level = 1;
        else if (rand < 0.75) level = 2;
        else if (rand < 0.9) level = 3;
        else level = 4;
        grid.push(level);
      }
    }
    return grid;
  }, []);

  const colors = [
    "bg-dark-700",
    "bg-accent-500/20",
    "bg-accent-500/40",
    "bg-accent-500/60",
    "bg-accent-500/80",
  ];

  return (
    <div className="mt-8 overflow-x-auto">
      <p className="mb-3 text-xs font-medium text-gray-500">Activity (placeholder — update with real data)</p>
      <div className="inline-grid grid-rows-7 grid-flow-col gap-1">
        {cells.map((level, i) => (
          <div
            key={i}
            className={`contrib-cell h-3 w-3 rounded-sm ${colors[level]}`}
            title={`Activity level: ${level}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProblemSolving() {
  const [ref, revealed] = useReveal(0.1);

  return (
    <section id="dsa" className="relative py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
          Problem Solving
        </h2>
        <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
          I regularly practice Data Structures and Algorithms to strengthen my
          problem-solving ability and prepare for software engineering interviews.
        </p>

        {/* DSA Topic Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {dsaTopics.map((topic) => (
            <div
              key={topic}
              className="dsa-cell glass rounded-xl px-4 py-3 text-center text-sm font-medium text-gray-300"
            >
              {topic}
            </div>
          ))}
        </div>

        {/* Platform links */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-300"
          >
            <GitHubIcon className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={personalInfo.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-gray-300"
          >
            {/* LeetCode icon */}
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z" />
            </svg>
            LeetCode
          </a>
        </div>

        {/* Contribution Grid */}
        <ContributionGrid />
      </div>
    </section>
  );
}
