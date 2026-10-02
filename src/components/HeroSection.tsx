import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import NetworkField from './NetworkField';
import OutLink from './OutLink';
import { flagshipProject, hostOf, projects } from '@/data/projects';
import { SITE } from '@/data/site';

const facts = [
  { value: '4+', label: 'Years of hands-on development' },
  { value: String(projects.length), label: 'Live projects you can open below' },
  { value: 'React · TypeScript · Node.js', label: 'Core stack', small: true },
];

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const rise = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
  });

  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="grid-backdrop absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <NetworkField className="absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_75%_70%_at_75%_35%,black,transparent_80%)]" />

      <div className="container-page relative pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p {...rise(0.05)} className="eyebrow mb-6 flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="h-2 w-2 bg-signal animate-status-pulse" aria-hidden="true" />
              Full-Stack Web Developer
              <span className="text-muted">/</span>
              <span className="text-muted">{SITE.location}</span>
            </motion.p>

            <motion.h1
              {...rise(0.12)}
              id="hero-title"
              className="font-display text-[4.5rem] leading-[0.88] tracking-tight sm:text-[6.5rem] lg:text-[8rem]"
            >
              Henry
              <br />
              <span className="italic text-primary">Mosiali</span>
            </motion.h1>

            <motion.p {...rise(0.2)} className="mt-8 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
              Building modern, production-ready web applications with{' '}
              <strong className="font-medium text-foreground">4+ years of hands-on development experience</strong> across frontend and
              backend technologies.
            </motion.p>

            <motion.div {...rise(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="btn btn-primary sm:min-w-48">
                View My Work
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={SITE.cv} download={SITE.cvFilename} className="btn btn-secondary">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            <motion.div {...rise(0.34)} className="mt-4 flex flex-wrap items-center gap-x-6">
              <OutLink href={SITE.github} className="text-link no-underline text-muted">
                GitHub
              </OutLink>
              <OutLink href={SITE.linkedin} className="text-link no-underline text-muted">
                LinkedIn
              </OutLink>
              <a href={`mailto:${SITE.email}`} className="text-link no-underline text-muted">
                {SITE.email}
              </a>
            </motion.div>
          </div>

          <motion.aside {...rise(0.3)} className="lg:col-span-5" aria-label="Currently building">
            <a
              href="#forge"
              className="group block border border-border bg-surface/80 p-3 transition-colors hover:border-primary/60"
            >
              <div className="flex items-center justify-between px-1 pb-3">
                <span className="meta-label flex items-center gap-2 text-primary">
                  <span className="h-1.5 w-1.5 bg-primary animate-status-pulse" aria-hidden="true" />
                  Now building
                </span>
                <span className="meta-label">{hostOf(flagshipProject.url)}</span>
              </div>
              <div className="overflow-hidden border border-border">
                <img
                  src={flagshipProject.image}
                  alt="Screenshot of the Forge learning dashboard"
                  width={1440}
                  height={900}
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-4">
                <div>
                  <p className="font-display text-3xl leading-none">Forge</p>
                  <p className="mt-1.5 text-sm text-muted">{flagshipProject.subtitle}</p>
                </div>
                <span className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-primary">
                  Explore Forge
                  <ArrowDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </a>
          </motion.aside>
        </div>

        <motion.dl {...rise(0.42)} className="mt-14 grid grid-cols-1 border-y border-border sm:grid-cols-3 lg:mt-20">
          {facts.map((fact) => (
            <div key={fact.label} className="border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0">
              <dd className={fact.small ? 'font-mono text-sm leading-7 text-foreground' : 'font-display text-4xl leading-none'}>{fact.value}</dd>
              <dt className="meta-label mt-2">{fact.label}</dt>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
