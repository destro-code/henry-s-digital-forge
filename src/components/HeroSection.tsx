import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import NeuralNetwork from './NeuralNetwork';

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NeuralNetwork />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-primary/80 text-sm md:text-base mb-4 tracking-widest uppercase">
            Full-Stack Web Developer
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
        >
          Henry{' '}
          <span className="text-primary text-glow">Mosiali</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building modern, production-ready web applications with{' '}
          <span className="text-primary">4+ years of hands-on development experience</span>{' '}
          across frontend and backend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all box-glow"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary hover:bg-primary/10 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            CV & Contact
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-primary/50 hover:text-primary transition-colors animate-bounce block" aria-label="Scroll to About section">
          <ArrowDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
