import { motion, useInView } from 'framer-motion';
import { ExternalLink, ShieldCheck, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const certifications = [
  {
    number: '01',
    title: 'ProDev Frontend',
    issuer: 'ALX Software Engineering',
    year: '2025',
    date: '22 August 2025',
    description: 'Completed a 4-month ALX Software Engineering Programme in ProDev Frontend.',
    file: '/certificates/alx-prodev-frontend-2025.png',
    verification: 'https://savanna.alxafrica.com/certificates/PBrhcCeNYE',
    verificationLabel: 'Verify Credential',
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
    verificationLabel: 'Verify Credential',
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

export default function CertificationsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-70px' });
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certifications)[number] | null>(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedCertificate(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section id="certifications" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 md:mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Certifications & Learning</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Documented <span className="text-primary text-glow">Milestones</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-5 leading-relaxed">
            A selection of completed learning programmes and certifications that mark key stages in my development journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {certifications.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 35 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-7 flex flex-col hover:box-glow transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-7">
                <span className="font-mono text-primary/60 text-sm">{certificate.number}</span>
                {certificate.verification && <ShieldCheck className="w-5 h-5 text-primary/70" aria-label="Credential can be verified" />}
              </div>

              <div className="flex-1">
                <p className="font-mono text-xs uppercase tracking-wider text-primary/70 mb-2">{certificate.issuer} · {certificate.year}</p>
                <h3 className="text-2xl font-bold text-foreground leading-tight">{certificate.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mt-4">{certificate.description}</p>
                <p className="font-mono text-xs text-foreground/45 mt-5">Issued {certificate.date}</p>
              </div>

              <div className="flex flex-wrap gap-3 mt-7 pt-5 border-t border-border/50">
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(certificate)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </button>
                {certificate.verification && (
                  <a
                    href={certificate.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/10 transition-colors"
                  >
                    {certificate.verificationLabel} <ShieldCheck className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedCertificate(null);
          }}
        >
          <div className="relative w-full max-w-5xl max-h-[92vh] flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-3 px-1">
              <h2 id="certificate-modal-title" className="text-sm md:text-base font-semibold text-foreground">
                {selectedCertificate.title} · {selectedCertificate.year}
              </h2>
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="p-2 rounded-lg bg-background/80 border border-border text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Close certificate viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full overflow-auto rounded-xl border border-border/70 bg-background/95 shadow-2xl">
              <img
                src={selectedCertificate.file}
                alt={`${selectedCertificate.title} certificate`}
                className="block w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
