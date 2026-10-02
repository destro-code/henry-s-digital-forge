import { X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import OutLink from './OutLink';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';

type Certificate = {
  number: string;
  title: string;
  issuer: string;
  year: string;
  date: string;
  description: string;
  file: string;
  verification?: string;
};

const certifications: Certificate[] = [
  {
    number: '01',
    title: 'ProDev Frontend',
    issuer: 'ALX Software Engineering',
    year: '2025',
    date: '22 August 2025',
    description: 'Completed a 4-month ALX Software Engineering Programme in ProDev Frontend.',
    file: '/certificates/alx-prodev-frontend-2025.png',
    verification: 'https://savanna.alxafrica.com/certificates/PBrhcCeNYE',
  },
  {
    number: '02',
    title: 'Professional Foundations',
    issuer: 'ALX',
    year: '2025',
    date: '15 April 2025',
    description: 'Completed Professional Development Skills for the Digital Age.',
    file: '/certificates/alx-professional-foundations-2025.png',
    verification: 'https://savanna.alxafrica.com/certificates/MLs5R9ecST',
  },
  {
    number: '03',
    title: 'Programming Fundamentals Certification',
    issuer: 'Programming Hub',
    year: '2022',
    date: '10 July 2022',
    description: 'Completed the Programming Fundamentals Certification Course, establishing a foundation in core programming concepts.',
    file: '/certificates/programming-fundamentals-2022.png',
  },
];

function CertificateDialog({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const opener = document.activeElement as HTMLElement | null;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
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
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      opener?.focus();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 sm:p-6" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cert-dialog-title"
        onClick={(e) => e.stopPropagation()}
        className="flex max-h-full w-full max-w-5xl flex-col border border-border bg-surface"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border p-4">
          <div className="min-w-0">
            <h3 id="cert-dialog-title" className="font-display text-2xl leading-tight sm:text-3xl">
              {cert.title}
            </h3>
            <p className="meta-label mt-1.5">
              {cert.issuer} <span aria-hidden="true">·</span> {cert.date}
            </p>
          </div>
          <button ref={closeRef} type="button" onClick={onClose} className="btn btn-secondary btn-sm shrink-0">
            <X className="h-4 w-4" aria-hidden="true" />
            Close
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-auto bg-black/40 p-2 sm:p-4">
          <img src={cert.file} alt={`${cert.title} certificate issued by ${cert.issuer}, ${cert.date}`} className="mx-auto h-auto max-h-[70vh] w-auto max-w-full object-contain" />
        </div>
        {cert.verification && (
          <div className="border-t border-border p-3">
            <OutLink href={cert.verification} className="text-link">
              Verify Credential
            </OutLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  return (
    <section id="certifications" aria-labelledby="certifications-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="06"
          chapter="Proof"
          titleId="certifications-title"
          title={
            <>
              Certificates, <span className="italic text-primary">as issued.</span>
            </>
          }
          intro="Select a certificate to view the original image."
        />

        <ul className="grid gap-6 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <li key={cert.number}>
              <Reveal delay={i * 0.06} className="h-full">
                <div className="flex h-full flex-col border border-border bg-surface p-3">
                  <button
                    type="button"
                    onClick={() => setSelected(cert)}
                    aria-label={`View ${cert.title} certificate`}
                    className="group relative block overflow-hidden border border-border"
                  >
                    <img
                      src={cert.file}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full bg-black/30 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-2 right-2 bg-background/90 px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider">
                      View certificate
                    </span>
                  </button>
                  <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
                    <p className="meta-label">
                      <span className="text-primary">{cert.number}</span> <span aria-hidden="true">·</span> {cert.year}
                    </p>
                    <h3 className="mt-2 font-display text-2xl leading-tight">{cert.title}</h3>
                    <p className="mt-1 text-sm text-foreground/80">{cert.issuer}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{cert.description}</p>
                    {cert.verification && (
                      <OutLink href={cert.verification} className="text-link mt-auto pt-3">
                        Verify Credential
                      </OutLink>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>

      {selected && <CertificateDialog cert={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
