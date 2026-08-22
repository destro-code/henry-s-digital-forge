import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'React Native'],
  },
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose', 'Supabase', 'Redis', 'API Integration'],
  },
  {
    title: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Vercel', 'Vite', 'CI/CD'],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-16">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Technologies I <span className="text-primary text-glow">Work With</span></h2>
          <p className="text-muted-foreground max-w-2xl mt-5 leading-relaxed">A practical toolkit spanning frontend development, backend services, APIs, data, and modern development workflows.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div key={cat.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: catIndex * 0.15 }} className="glass rounded-xl p-6 md:p-8">
              <h3 className="text-foreground font-semibold text-lg mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-3 py-2 rounded-lg border border-primary/20 bg-primary/5 text-primary/90 text-sm font-mono">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
