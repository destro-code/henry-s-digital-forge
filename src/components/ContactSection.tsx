import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Download } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:henrymosiali@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Let's <span className="text-primary text-glow">Connect</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass rounded-xl p-6 md:p-8 mb-6">
              <div className="font-mono text-sm mb-6">
                <p className="text-muted-foreground mb-1">
                  <span className="text-primary">{'>'}</span> Ready to build something remarkable?
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{'>'}</span> Let's talk.
                  <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse-glow" />
                </p>
              </div>

              <div className="space-y-4">
                <a href="mailto:henrymosiali@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">henrymosiali@gmail.com</span>
                </a>
                <a href="tel:+2348134255086" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">+234 813 425 5086</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm">Lagos, Nigeria</span>
                </div>
                <a href="https://henrymosiali.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="text-sm">henrymosiali.vercel.app</span>
                </a>
              </div>
            </div>

            <a
              href="/Henry-Mosiali-CV.pdf"
              download="Henry-Mosiali-CV.pdf"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all box-glow flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="glass rounded-xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="block text-foreground/80 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-foreground/80 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-foreground/80 text-sm font-medium mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all box-glow"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
