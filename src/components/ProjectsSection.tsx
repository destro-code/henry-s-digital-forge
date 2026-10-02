import SectionHeader from './SectionHeader';
import FlagshipProject from './projects/FlagshipProject';
import ProfessionalProject from './projects/ProfessionalProject';
import OtherProject from './projects/OtherProject';
import { flagshipProject, otherProjects, professionalProjects } from '@/data/projects';

function Tier({ label, note }: { label: string; note?: string }) {
  return (
    <div className="mb-6 mt-20 flex flex-wrap items-baseline gap-x-4 gap-y-1">
      <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-foreground">{label}</h3>
      {note && <p className="text-sm text-muted">{note}</p>}
      <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="02"
          chapter="What I've built"
          titleId="projects-title"
          title={
            <>
              Products you can <span className="italic text-primary">open,</span> not just read about.
            </>
          }
          intro="Each project below links to the live site. Previews load on request, or automatically for Forge on desktop."
        />

        <FlagshipProject project={flagshipProject} />

        <Tier label="Featured professional work" note="Client-facing sites built as a frontend developer." />
        <div className="grid gap-6 md:grid-cols-2">
          {professionalProjects.map((project, i) => (
            <ProfessionalProject key={project.slug} project={project} delay={(i % 2) * 0.08} />
          ))}
        </div>

        <Tier label="Other projects" note="Independent and exploratory builds." />
        <div>
          {otherProjects.map((project, i) => (
            <OtherProject key={project.slug} project={project} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
