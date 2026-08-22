import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Frontend Web Developer',
    company: 'Artemis Hiring',
    period: 'Jan 2024 – Jan 2025',
    location: 'Remote',
    points: [
      'Designed and developed the frontend experience for a professional recruitment platform using React, Next.js, TypeScript and Tailwind CSS.',
      'Built responsive interfaces for presenting recruitment services and job-related content across desktop and mobile devices.',
      'Focused on clear information hierarchy, reusable UI patterns, responsive behaviour and polished visual presentation.',
    ],
  },
  {
    role: 'Independent / Freelance Full-Stack Developer',
    company: 'Independent',
    period: 'Present',
    location: 'Remote',
    points: [
      'Build and deploy independent web applications across frontend and full-stack projects.',
      'Develop responsive interfaces using React, TypeScript, Next.js and Tailwind CSS, alongside backend technologies including Node.js, Express, MongoDB and Supabase.',
      'Integrate external APIs and third-party services while continuing to deepen full-stack engineering skills through practical projects.',
    ],
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Experience</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Professional <span className="text-primary text-glow">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-5 leading-relaxed">
            Selected professional work and ongoing independent development across frontend and full-stack web applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-2.5 md:left-4 top-1 w-3 h-3 rounded-full bg-primary box-glow" />
                <div className="glass rounded-xl p-6 md:p-8 hover:box-glow transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    <Briefcase className="w-4 h-4 text-primary" />
                    <span className="font-mono text-primary text-xs">{exp.period}</span>
                    {exp.location && <span className="text-muted-foreground text-xs">· {exp.location}</span>}
                  </div>
                  <h3 className="text-foreground font-bold text-lg md:text-xl">{exp.role}</h3>
                  <p className="text-primary/70 font-semibold text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>{point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
