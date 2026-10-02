import Reveal from '../Reveal';
import OutLink from '../OutLink';
import ProjectPreview from '../ProjectPreview';
import ProjectDetails from './ProjectDetails';
import type { Project } from '@/data/projects';

export default function FlagshipProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article id="forge" aria-labelledby="forge-title" className="relative border border-primary/50 bg-surface p-3 sm:p-5 lg:p-6">
        <span className="absolute -left-px -top-px h-4 w-4 border-l-2 border-t-2 border-primary" aria-hidden="true" />
        <span className="absolute -bottom-px -right-px h-4 w-4 border-b-2 border-r-2 border-primary" aria-hidden="true" />

        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 bg-primary animate-status-pulse" aria-hidden="true" />
            Flagship project
          </p>
          <p className="meta-label">Independent / in active development</p>
        </div>

        <ProjectPreview project={project} autoLoad priority />

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <h3 id="forge-title" className="font-display text-5xl leading-none sm:text-6xl">
              {project.title}
            </h3>
            <p className="mt-2 font-display text-xl italic text-primary sm:text-2xl">{project.subtitle}</p>
            <p className="mt-5 leading-relaxed text-muted">{project.description}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <OutLink href={project.url} className="btn btn-primary">
                Explore Forge
              </OutLink>
              {project.github && (
                <OutLink href={project.github} className="btn btn-secondary">
                  View GitHub
                </OutLink>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <ProjectDetails project={project} />
          </div>

          <div className="lg:col-span-3">
            <p className="meta-label mb-1.5">Role</p>
            <p className="mb-5 text-sm">{project.role}</p>
            <p className="meta-label mb-2.5">Stack</p>
            <ul className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
