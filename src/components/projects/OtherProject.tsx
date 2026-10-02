import Reveal from '../Reveal';
import OutLink from '../OutLink';
import ProjectDetails from './ProjectDetails';
import { hostOf, type Project } from '@/data/projects';

export default function OtherProject({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal>
      <article
        aria-labelledby={`${project.slug}-title`}
        className="group grid gap-5 border-b border-border py-6 transition-colors first:border-t md:grid-cols-12 md:gap-8 md:py-8"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} live site (opens in a new tab)`}
          className="relative block overflow-hidden border border-border md:col-span-4"
        >
          <img
            src={project.image}
            alt={`Screenshot of the ${project.title} homepage`}
            width={1440}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute bottom-2 left-2 bg-background/90 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-muted">
            {hostOf(project.url)}
          </span>
        </a>

        <div className="md:col-span-8">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-xs text-primary">{String(index).padStart(2, '0')}</span>
            <h3 id={`${project.slug}-title`} className="font-display text-3xl leading-none sm:text-4xl">
              {project.title}
            </h3>
            <span className="meta-label ml-auto hidden sm:inline">{project.role}</span>
          </div>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="chip">
                {t}
              </li>
            ))}
          </ul>

          <details className="group/details mt-4 max-w-2xl">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-medium text-foreground/90 hover:text-primary [&::-webkit-details-marker]:hidden">
              <span className="font-mono text-primary group-open/details:hidden" aria-hidden="true">+</span>
              <span className="hidden font-mono text-primary group-open/details:inline" aria-hidden="true">−</span>
              Problem and approach
            </summary>
            <ProjectDetails project={project} className="pb-2 pt-1" />
          </details>

          <div className="mt-2 flex flex-wrap gap-x-6">
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
