import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { projects } from '@/data/projects';

const aliases: Record<string, string> = { tailwind: 'tailwind css' };
const normalize = (value: string) => aliases[value.toLowerCase()] ?? value.toLowerCase();

const groups = [
  {
    title: 'Frontend',
    use: 'Responsive interfaces and product UI. Where most of my professional work sits.',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Backend & APIs',
    use: 'The services and endpoints that sit behind the interface.',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Data & Integration',
    use: 'Persistence, and connecting to third-party data and services.',
    skills: ['MongoDB', 'Mongoose', 'Supabase', 'Redis', 'API Integration'],
  },
  {
    title: 'Tools & Deployment',
    use: 'Version control, build tooling and shipping to production.',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Vite', 'CI/CD'],
  },
];

function usedIn(skills: string[]) {
  const wanted = new Set(skills.map(normalize));
  return projects.filter((p) => p.tech.some((t) => wanted.has(normalize(t)))).map((p) => p.title);
}

export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="05"
          chapter="What I know"
          titleId="skills-title"
          title={
            <>
              Grouped by how I <span className="italic text-primary">use</span> them.
            </>
          }
          intro="No ratings or percentages. Where a technology appears in a project above, it is listed under its group."
        />

        <div className="grid border-l border-t border-border md:grid-cols-2">
          {groups.map((group, i) => {
            const seenIn = usedIn(group.skills);
            return (
              <Reveal key={group.title} delay={(i % 2) * 0.06}>
                <div className="h-full border-b border-r border-border p-6 sm:p-8">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl leading-none">{group.title}</h3>
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{group.use}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <li key={skill} className="chip">
                        {skill}
                      </li>
                    ))}
                  </ul>
                  {seenIn.length > 0 && (
                    <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted">
                      <span className="meta-label mr-2">Seen in</span>
                      {seenIn.join(', ')}
                    </p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
