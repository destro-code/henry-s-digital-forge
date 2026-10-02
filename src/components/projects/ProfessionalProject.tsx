import Reveal from '../Reveal';
import OutLink from '../OutLink';
import ProjectPreview from '../ProjectPreview';
import ProjectDetails from './ProjectDetails';
import type { Project } from '@/data/projects';

export default function ProfessionalProject({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <article aria-labelledby={`${project.slug}-title`} className="flex h-full flex-col border border-border bg-surface p-3 transition-colors hover:border-foreground/30 sm:p-4">
        <ProjectPreview project={project} />

        <div className="flex flex-1 flex-col px-1 pb-1 pt-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 id={`${project.slug}-title`} className="font-display text-3xl leading-none">
              {project.title}
            </h3>
            <p className="meta-label shrink-0">{project.role}</p>
          </div>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <details className="group mt-5 border-t border-border">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between text-sm font-medium [&::-webkit-details-marker]:hidden">
              Problem and approach
              <span className="font-mono text-primary group-open:hidden" aria-hidden="true">+</span>
              <span className="hidden font-mono text-primary group-open:inline" aria-hidden="true">−</span>
            </summary>
            <ProjectDetails project={project} className="pb-3 pt-1" />
          </details>

          <div className="mt-auto flex flex-wrap gap-x-6 pt-3">
            <OutLink href={project.url} className="text-link">
              View Live Site
            </OutLink>
            {project.github && (
              <OutLink href={project.github} className="text-link">
                View GitHub
              </OutLink>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
