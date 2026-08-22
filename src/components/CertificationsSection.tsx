import { motion, useInView } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';

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
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  View Certificate <ExternalLink className="w-4 h-4" />
                </a>
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
    </section>
  );
}
