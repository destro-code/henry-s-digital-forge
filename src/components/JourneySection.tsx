import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Code2, GraduationCap, Rocket } from 'lucide-react';

const journey = [
  {
    year: '2020',
    title: 'Started Exploring Web Development',
    description: 'Began learning the fundamentals of programming and web development, experimenting with different technologies and building early projects.',
    icon: Code2,
  },
  {
    year: '2022',
    title: 'Programming Fundamentals Certification',
    subtitle: 'Programming Hub / Google Developers Launchpad',
    description: 'Completed the Programming Fundamentals Certification Course, marking an early documented milestone in the development journey.',
    date: 'July 10, 2022',
    icon: Award,
  },
  {
    year: '2025',
    title: 'ALX ProDev Frontend',
    subtitle: 'ALX Software Engineering',
    description: 'Completed a 4-month ALX Software Engineering Programme in ProDev Frontend.',
    date: 'August 22, 2025',
    icon: GraduationCap,
  },
  {
    year: 'Today',
    title: 'Full-Stack Web Development',
    description: 'Building and deploying modern web applications across frontend and backend technologies while continuing to deepen engineering skills.',
    icon: Rocket,
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Learning, Building & <span className="text-primary text-glow">Growing</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mt-5 leading-relaxed">
            A few milestones from the journey that led from learning the fundamentals to building full-stack applications.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

          <div className="space-y-8">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="relative pl-12 md:pl-16"
                >
                  <div className="absolute left-0.5 md:left-2 top-1 w-8 h-8 rounded-full border border-primary/30 bg-background flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>

                  <div className="glass rounded-xl p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-primary text-sm">{item.year}</span>
                      {item.date && <span className="text-muted-foreground text-xs">{item.date}</span>}
                    </div>
                    <h3 className="text-foreground font-bold text-lg md:text-xl">{item.title}</h3>
                    {item.subtitle && (
                      <p className="text-primary/70 font-medium text-sm mt-1">{item.subtitle}</p>
                    )}
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mt-4 max-w-3xl">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
