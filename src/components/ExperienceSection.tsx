import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work' as const,
    role: 'Full-Stack Web Developer',
    company: 'Adglam',
    period: 'Jan 2024 – Jan 2025',
    location: 'Remote',
    points: [
      'Implemented dynamic product discovery UI with React + TypeScript + Tailwind with real-time filters and fast backend APIs.',
      'Built secure payment flows with Stripe integration, optimized database schemas and caching strategies.',
      'Drove feature iterations in cross-functional sprints, improved mobile accessibility and performance.',
    ],
  },
  {
    type: 'work' as const,
    role: 'Frontend Web Developer',
    company: 'Fastlane',
    period: 'Feb 2023 – Dec 2023',
    location: 'Remote',
    points: [
      'Led frontend for a high-traffic top-up platform (20,000+ monthly users), redesigning purchase flows.',
      'Improved mobile usability and accessibility, optimized asset delivery and caching to reduce page loads.',
      'Collaborated with backend engineers and product designers to deliver measurable UX improvements.',
    ],
  },
  {
    type: 'work' as const,
    role: 'Freelance Full-Stack Developer',
    company: 'Upwork',
    period: '2019 – Present',
    location: 'Remote',
    points: [
      'Delivered 8+ client projects across edtech, health-tech, e-commerce and creative industries.',
      'Built a React/Next.js edtech platform serving 3,000+ monthly users with improved engagement metrics.',
      'Designed mobile apps with React Native and Appwrite for secure authentication and retention-focused flows.',
    ],
  },
  {
    type: 'education' as const,
    role: 'ProDev Frontend — Professional Program',
    company: 'ALX Africa',
    period: '2024',
    location: '',
    points: [
      'Practical projects covering Next.js, React Native, CI/CD, Docker and modern frontend engineering practices.',
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
            Career <span className="text-primary text-glow">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
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
                {/* Node */}
                <div className="absolute left-2.5 md:left-4 top-1 w-3 h-3 rounded-full bg-primary box-glow" />

                <div className="glass rounded-xl p-6 md:p-8 hover:box-glow transition-all duration-300">
                  <div className="flex items-center gap-2 mb-1">
                    {exp.type === 'work' ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary" />
                    )}
                    <span className="font-mono text-primary text-xs">{exp.period}</span>
                    {exp.location && (
                      <span className="text-muted-foreground text-xs">· {exp.location}</span>
                    )}
                  </div>
                  <h3 className="text-foreground font-bold text-lg md:text-xl">{exp.role}</h3>
                  <p className="text-primary/70 font-semibold text-sm mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {point}
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
