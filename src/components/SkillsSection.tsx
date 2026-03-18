import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'React Native', level: 80 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5 / CSS3', level: 98 },
    ],
  },
  {
    title: 'Backend & APIs',
    skills: [
      { name: 'Node.js', level: 95 },
      { name: 'Express', level: 92 },
      { name: 'MongoDB', level: 88 },
      { name: 'RESTful API Design', level: 93 },
      { name: 'Redis', level: 75 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 82 },
      { name: 'Git / GitHub', level: 95 },
      { name: 'Vercel', level: 90 },
      { name: 'Webpack / Vite', level: 88 },
    ],
  },
  {
    title: 'Testing & Quality',
    skills: [
      { name: 'Jest', level: 82 },
      { name: 'Performance Optimization', level: 90 },
      { name: 'Accessibility (WCAG)', level: 85 },
      { name: 'Cross-browser Testing', level: 88 },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Technical <span className="text-primary text-glow">Proficiency</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass rounded-xl p-6 md:p-8"
            >
              <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                {cat.title}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="font-mono text-primary text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.15 + i * 0.08, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-emerald-dim to-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
