import { motion, useScroll, useSpring } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { NAV_ITEMS, SECTION_IDS, SITE } from '@/data/site';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const activeSection = useScrollSpy(SECTION_IDS);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  const closeMenu = useCallback((returnFocus = false) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    headerRef.current?.querySelector<HTMLElement>('#mobile-menu a')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu(true);
        return;
      }
      if (event.key !== 'Tab' || !headerRef.current) return;
      const focusable = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ).filter((el) => el.offsetParent !== null);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open, closeMenu]);

  const goTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    closeMenu();
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ block: 'start' });
      history.replaceState(null, '', href);
    });
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        open
          ? 'border-b border-border bg-background'
          : scrolled
            ? 'border-b border-border bg-background/90 backdrop-blur-md'
            : 'border-b border-transparent',
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <a
          href="#home"
          onClick={(e) => goTo(e, '#home')}
          className="flex min-h-11 items-center gap-3 font-medium"
          aria-label="Henry Mosiali, back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center border border-primary font-display text-lg leading-none text-primary">
            H
          </span>
          <span className="hidden text-[0.95rem] sm:inline">Henry Mosiali</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = item.sections.includes(activeSection);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => goTo(e, item.href)}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'relative flex min-h-11 items-center px-2.5 text-[0.82rem] transition-colors',
                      isActive ? 'text-foreground' : 'text-muted hover:text-foreground',
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute inset-x-2.5 bottom-1.5 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.cv}
            download={SITE.cvFilename}
            className="btn btn-primary btn-sm"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={() => (open ? closeMenu() : setOpen(true))}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center border border-border text-foreground transition-colors hover:border-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-primary"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex min-h-full flex-col pb-8 pt-4">
            <ul className="flex-1">
              {NAV_ITEMS.map((item, i) => {
                const isActive = item.sections.includes(activeSection);
                return (
                  <li key={item.href} className="border-b border-border">
                    <a
                      href={item.href}
                      onClick={(e) => goTo(e, item.href)}
                      aria-current={isActive ? 'location' : undefined}
                      className={cn(
                        'flex min-h-16 items-baseline gap-4 py-4 font-display text-4xl',
                        isActive ? 'text-primary' : 'text-foreground',
                      )}
                    >
                      <span className="font-mono text-xs text-muted">{String(i).padStart(2, '0')}</span>
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href={SITE.cv} download={SITE.cvFilename} onClick={() => closeMenu()} className="btn btn-primary mt-8 w-full">
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
