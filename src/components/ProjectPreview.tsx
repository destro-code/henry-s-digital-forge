import { Loader2, MousePointerClick, Play, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import OutLink from './OutLink';
import { hostOf, type Project } from '@/data/projects';
import { cn } from '@/lib/utils';

type Phase = 'poster' | 'loading' | 'live' | 'failed';

const LOAD_TIMEOUT_MS = 15000;

function canAutoLoad() {
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
  if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) return false;
  return window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches;
}

type ProjectPreviewProps = { project: Project; autoLoad?: boolean; priority?: boolean; className?: string };

export default function ProjectPreview({ project, autoLoad = false, priority = false, className }: ProjectPreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [phase, setPhase] = useState<Phase>('poster');
  const [interactive, setInteractive] = useState(false);
  const [box, setBox] = useState({ width: 0, height: 0 });

  const host = hostOf(project.url);
  const mounted = phase !== 'poster';
  const narrow = box.width > 0 && box.width < 560;
  const compactFrame = narrow && mounted;

  const startLoading = useCallback(() => setPhase((current) => (current === 'poster' || current === 'failed' ? 'loading' : current)), []);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setBox({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoLoad || !rootRef.current || !canAutoLoad()) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startLoading();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(rootRef.current);
    return () => observer.disconnect();
  }, [autoLoad, startLoading]);

  useEffect(() => {
    if (phase !== 'loading') return;
    const timer = window.setTimeout(() => setPhase('failed'), LOAD_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (iframeRef.current) (iframeRef.current as HTMLIFrameElement & { inert: boolean }).inert = !interactive;
  }, [interactive, mounted]);

  const virtualWidth = narrow ? Math.min(Math.max(box.width, 360), 420) : box.width < 900 ? 1024 : 1280;
  const scale = box.width ? box.width / virtualWidth : 1;

  const statusLabel = { poster: 'Screenshot', loading: 'Loading', live: 'Live', failed: 'Screenshot' }[phase];

  return (
    <div ref={rootRef} className={cn('border border-border bg-background', className)}>
      <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-3 py-2">
        <span className="flex shrink-0 items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-muted">
          <span
            className={cn('h-1.5 w-1.5', phase === 'live' ? 'bg-signal' : phase === 'loading' ? 'bg-primary animate-status-pulse' : 'bg-muted')}
            aria-hidden="true"
          />
          {statusLabel}
        </span>
        <span className="min-w-0 flex-1 truncate border border-border bg-background px-2.5 py-1 font-mono text-xs text-foreground/80">
          {host}
        </span>
        <OutLink
          href={project.url}
          aria-label={`Open ${project.title} full site`}
          className="inline-flex min-h-9 shrink-0 items-center gap-1 px-1 text-xs font-medium text-foreground transition-colors hover:text-primary"
        >
          Open full site
        </OutLink>
      </div>

      <div
        ref={viewportRef}
        className="relative w-full overflow-hidden bg-surface"
        style={{ aspectRatio: compactFrame ? '4 / 5' : '16 / 10' }}
      >
        <img
          src={project.image}
          alt={`Screenshot of the ${project.title} homepage`}
          width={1440}
          height={900}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        {mounted && (
          <iframe
            ref={iframeRef}
            src={project.url}
            title={`${project.title} live preview`}
            loading="lazy"
            referrerPolicy="no-referrer"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            onLoad={() => setPhase('live')}
            tabIndex={interactive ? 0 : -1}
            className={cn('absolute left-0 top-0 max-w-none border-0 bg-white transition-opacity duration-500', phase === 'live' ? 'opacity-100' : 'opacity-0')}
            style={{
              width: virtualWidth,
              height: box.height / scale,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
            }}
          />
        )}

        {phase === 'poster' && (
          <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-background/90 via-background/10 to-transparent p-4">
            <button type="button" onClick={startLoading} className="btn btn-primary btn-sm">
              <Play className="h-4 w-4" aria-hidden="true" />
              Load live preview
            </button>
          </div>
        )}

        {phase === 'loading' && (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-gradient-to-t from-background/90 to-transparent p-4 font-mono text-xs text-foreground" role="status">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Loading live preview…
          </div>
        )}

        {phase === 'failed' && (
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-gradient-to-t from-background via-background/95 to-transparent p-4 pt-10 text-center" role="status">
            <p className="text-sm text-foreground">The live preview did not load here.</p>
            <OutLink href={project.url} className="btn btn-primary btn-sm">
              View Live Site
            </OutLink>
          </div>
        )}

        {phase === 'live' && !interactive && (
          <button
            type="button"
            onClick={() => setInteractive(true)}
            aria-label={`Interact with the ${project.title} live preview`}
            className="group absolute inset-0 flex items-end justify-center p-4"
          >
            <span className="inline-flex min-h-10 items-center gap-2 border border-foreground/30 bg-background/90 px-4 font-mono text-xs text-foreground transition-colors group-hover:border-primary group-hover:text-primary">
              <MousePointerClick className="h-4 w-4" aria-hidden="true" />
              Click to interact
            </span>
          </button>
        )}
      </div>

      {phase === 'live' && (
        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface-raised px-3 py-2">
          <p className="min-w-0 truncate font-mono text-xs text-muted">
            {interactive ? 'Interactive. Scroll and click inside the site.' : 'Live site, scaled to fit.'}
          </p>
          {interactive ? (
            <button type="button" onClick={() => setInteractive(false)} className="inline-flex min-h-9 shrink-0 items-center gap-1.5 px-2 text-xs font-medium hover:text-primary">
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Stop interacting
            </button>
          ) : null}
        </div>
      )}
    </div>
  );
}
