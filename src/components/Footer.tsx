import OutLink from './OutLink';
import { SITE } from '@/data/site';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-surface/60">
      <div className="container-page py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-display text-5xl leading-[0.95] sm:text-6xl">
              Henry <span className="italic text-primary">Mosiali</span>
            </p>
            <p className="mt-4 max-w-sm text-muted">Full-Stack Web Developer building production-ready web applications.</p>
            <a href={`mailto:${SITE.email}`} className="text-link mt-6">
              {SITE.email}
            </a>
          </div>

          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="meta-label mb-3">Navigate</h2>
            <ul>
              {[
                ['Home', '#home'],
                ['Projects', '#projects'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="flex min-h-11 items-center text-muted hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Elsewhere" className="md:col-span-3">
            <h2 className="meta-label mb-3">Elsewhere</h2>
            <ul>
              <li>
                <OutLink href={SITE.github} className="flex min-h-11 items-center gap-1 text-muted hover:text-foreground">
                  GitHub
                </OutLink>
              </li>
              <li>
                <OutLink href={SITE.linkedin} className="flex min-h-11 items-center gap-1 text-muted hover:text-foreground">
                  LinkedIn
                </OutLink>
              </li>
              <li>
                <a href={SITE.cv} download={SITE.cvFilename} className="flex min-h-11 items-center text-muted hover:text-foreground">
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 font-mono text-xs text-muted sm:flex-row sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Henry Mosiali</p>
          <p>Built with React, TypeScript and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
