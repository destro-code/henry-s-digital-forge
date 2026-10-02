import type { Project } from '@/data/projects';

export default function ProjectDetails({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <dl className={`grid gap-4 text-sm leading-relaxed ${className}`}>
      <div>
        <dt className="meta-label mb-1.5">Problem</dt>
        <dd className="text-muted">{project.problem}</dd>
      </div>
      <div>
        <dt className="meta-label mb-1.5">Approach</dt>
        <dd className="text-muted">{project.solution}</dd>
      </div>
    </dl>
  );
}
