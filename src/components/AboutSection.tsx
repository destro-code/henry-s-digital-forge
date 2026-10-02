import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

const stages = [
  { label: 'Frontend', text: 'Responsive interfaces and product UI for professional clients.' },
  { label: 'Full-stack', text: 'APIs, data and integrations behind the interface.' },
  { label: 'Independent', text: 'Forge, the product I am building on my own now.' },
];

const principles = [
  'Responsive interfaces',
  'Clear information architecture',
  'API integration',
  'Practical user experiences',
];

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="01"
          chapter="Who I am"
          titleId="about-title"
          title={
            <>
              From interfaces to <span className="italic text-primary">whole systems.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 text-base leading-relaxed text-muted md:text-lg lg:col-span-7">
            <p className="font-display text-2xl leading-snug text-foreground md:text-3xl">
              I am a Full-Stack Web Developer with 4+ years of hands-on development experience, building modern web applications across
              frontend and backend technologies.
            </p>
            <p>
              I started on the frontend and moved into broader full-stack work: services, APIs and integrations that sit behind the
              interface. I care about how a product looks, but just as much about how it is structured and how it behaves when someone
              actually uses it.
            </p>
            <p>
              Alongside professional projects, I am now building Forge, an interactive frontend engineering academy, as independent
              work. It is where I apply everything above in one product.
            </p>
          </Reveal>

          <div className="space-y-10 lg:col-span-5">
            <Reveal>
              <h3 className="meta-label mb-4">Progression</h3>
              <ol className="border-l border-border">
                {stages.map((stage, i) => (
                  <li key={stage.label} className="relative pb-6 pl-6 last:pb-0">
                    <span
                      className={`absolute -left-[5px] top-2 h-2.5 w-2.5 ${i === stages.length - 1 ? 'bg-primary' : 'border border-muted bg-background'}`}
                      aria-hidden="true"
                    />
                    <p className="font-display text-2xl leading-none">{stage.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{stage.text}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.08}>
              <h3 className="meta-label mb-4">What I focus on</h3>
              <ul className="border-t border-border">
                {principles.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-4 border-b border-border py-3.5">
                    <span className="font-mono text-xs text-primary">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-[0.95rem]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
