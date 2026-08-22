import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Server, Layout, Database, Cloud } from 'lucide-react';

const highlights = [
  { icon: Server, label: 'Backend Development', desc: 'Node.js, Express, RESTful APIs' },
  { icon: Layout, label: 'Frontend Development', desc: 'React, Next.js, TypeScript' },
  { icon: Database, label: 'Data & Integration', desc: 'MongoDB, Redis, API integration' },
  { icon: Cloud, label: 'Tools & Deployment', desc: 'Docker, CI/CD, Vercel' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            Building for the Web<br />
            <span className="text-primary text-glow">Since 2020</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              I've been exploring and building for the web since 2020, starting with the fundamentals and gradually developing into full-stack development.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              Over the years, I've worked across frontend and backend technologies to build responsive websites, dashboards, APIs, business platforms, and full-stack applications.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Today, I focus on building clean, scalable, and user-focused web experiences while continuing to deepen my engineering skills and take on more complex challenges.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="glass rounded-xl p-5 hover:box-glow transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 text-primary mb-3 group-hover:text-glow transition-all" />
                <h3 className="text-foreground font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
