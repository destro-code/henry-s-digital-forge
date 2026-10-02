import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const milestones = [
  {
    year: '2022',
    kind: 'Learning',
    title: 'Programming fundamentals',
    text: 'Completed the Programming Fundamentals Certification Course with Programming Hub / Google Developers Launchpad, the first documented milestone.',
    date: 'July 10, 2022',
  },
  {
    year: '2023',
    kind: 'Professional',
    title: 'Frontend in practice',
    text: 'First professional role. Learned to turn product requirements into usable, responsive interfaces.',
    date: 'Feb – Dec 2023',
  },
  {
    year: '2024',
    kind: 'Professional',
    title: 'Deeper frontend craft',
    text: 'Moved into a larger product with React, Next.js, TypeScript and Tailwind CSS, with more focus on hierarchy and reusable UI.',
    date: 'Jan 2024 – Jan 2025',
  },
  {
    year: '2025',
    kind: 'Programme',
    title: 'Professional foundations',
    text: 'Completed Professional Development Skills for the Digital Age with ALX.',
    date: 'April 15, 2025',
  },
  {
    year: '2025',
    kind: 'Programme',
    title: 'ALX ProDev Frontend',
    text: 'Completed the 4-month ALX Software Engineering Programme in ProDev Frontend.',
    date: 'August 22, 2025',
  },
  {
    year: 'Now',
    kind: 'Independent',
    title: 'Full-stack, and Forge',
    text: 'Building and refining web applications across frontend and backend, with Forge as the current independent project.',
    date: 'Present',
    current: true,
  },
];

export default function JourneySection() {
  return (
    <section id="journey" aria-labelledby="journey-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="03"
          chapter="How I developed"
          titleId="journey-title"
          title={
            <>
              Learning, then <span className="italic text-primary">shipping,</span> then going full-stack.
            </>
          }
          intro="The milestones that shaped how I work. Role details follow in Experience."
        />

        <ol className="relative">
          <span className="absolute bottom-0 left-[4.5px] top-2 w-px bg-border sm:left-[7.25rem]" aria-hidden="true" />
          {milestones.map((m, i) => (
            <li key={`${m.year}-${m.title}`}>
              <Reveal delay={(i % 3) * 0.05}>
                <div className="relative grid gap-x-8 pb-10 pl-8 sm:grid-cols-[6.5rem_1fr] sm:pl-0 md:pb-12">
                  <span
                    className={`absolute left-0 top-2 h-[10px] w-[10px] sm:left-[6.75rem] ${m.current ? 'bg-primary' : 'border border-muted bg-background'}`}
                    aria-hidden="true"
                  />
                  <p className={`font-display text-4xl leading-none sm:text-right ${m.current ? 'text-primary' : 'text-foreground'}`}>{m.year}</p>
                  <div className="mt-3 sm:ml-8 sm:mt-0">
                    <p className="meta-label flex flex-wrap gap-x-3">
                      <span className="text-primary">{m.kind}</span>
                      <span>{m.date}</span>
                    </p>
                    <h3 className="mt-2 text-xl font-medium">{m.title}</h3>
                    <p className="mt-2 max-w-xl leading-relaxed text-muted">{m.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
