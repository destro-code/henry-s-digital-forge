import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const roles = [
  {
    role: 'Independent / Freelance Full-Stack Developer',
    company: 'Independent',
    period: 'Present',
    location: 'Remote',
    points: [
      'Build and deploy independent web applications across frontend and full-stack projects.',
      'Develop responsive interfaces using React, TypeScript, Next.js and Tailwind CSS, alongside backend technologies including Node.js, Express, MongoDB and Supabase.',
      'Integrate external APIs and third-party services while continuing to deepen full-stack engineering skills through practical projects.',
    ],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Artemis Hiring',
    period: 'Jan 2024 – Jan 2025',
    location: 'Remote',
    points: [
      'Designed and developed frontend interfaces for a professional recruitment platform using React, Next.js, TypeScript and Tailwind CSS.',
      'Built responsive web experiences for recruitment services and job-related content across desktop and mobile devices.',
      'Developed reusable UI patterns and focused on information hierarchy, usability, responsive behaviour and polished visual presentation.',
    ],
  },
  {
    role: 'Frontend Web Developer',
    company: 'Fastlane',
    period: 'Feb 2023 – Dec 2023',
    location: 'Remote',
    points: [
      'Developed responsive frontend interfaces for a digital top-up platform across desktop and mobile devices.',
      'Translated product requirements into clear purchase flows, responsive layouts and consistent UI implementations.',
      'Collaborated around product and backend requirements to deliver frontend features and interface refinements.',
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border bg-surface/50 section-space">
      <div className="container-page">
        <SectionHeader
          index="04"
          chapter="Where I've worked"
          titleId="experience-title"
          title={
            <>
              Professional <span className="italic text-primary">experience.</span>
            </>
          }
          intro="Roles and responsibilities, most recent first."
        />

        <div className="border-t border-border">
          {roles.map((r) => (
            <Reveal key={`${r.company}-${r.period}`}>
              <article className="grid gap-4 border-b border-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <div className="md:col-span-4">
                  <p className="font-display text-3xl leading-none">{r.company}</p>
                  <p className="meta-label mt-3">
                    {r.period} <span aria-hidden="true">·</span> {r.location}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <h3 className="text-lg font-medium">{r.role}</h3>
                  <ul className="mt-4 space-y-3 leading-relaxed text-muted">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-[0.7em] h-px w-3 shrink-0 bg-primary" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
