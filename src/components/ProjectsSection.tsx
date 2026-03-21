import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Adglam',
    url: 'https://adglam.vercel.app/',
    description: 'Beauty services website for a professional makeup artist brand in Benin City, designed to present services, brand identity, and client information in a polished, modern way.',
    problem: 'The brand needed a professional online presence that could showcase its beauty services clearly and attract potential clients.',
    solution: 'Built a clean, responsive website with a strong visual hierarchy, smooth presentation, and mobile-friendly layout suited to a beauty brand.',
    impact: 'Improved brand credibility and gave the business a more professional digital presence for client discovery and inquiries.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Node.js'],
  },
  {
    title: 'Artemis Hiring',
    url: 'https://www.artemishiring.co.uk/',
    description: 'Professional recruitment platform for the UK market with streamlined candidate management and job listing workflows.',
    problem: 'Recruitment agency needed a professional web presence with integrated job management capabilities.',
    solution: 'Designed and developed a clean, professional frontend with optimized SEO and fast page loads.',
    impact: 'Established strong online presence for the recruitment agency with excellent user engagement metrics.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    title: 'CarlSmith Group',
    url: 'https://carlsmithgroup.com.ng',
    description: 'Corporate business website for a Nigerian conglomerate, featuring modern design and optimized performance.',
    problem: 'Corporate group needed a professional digital presence that reflects their brand authority.',
    solution: 'Built a sleek, responsive corporate site with optimized asset delivery and mobile-first design approach.',
    impact: 'Delivered a polished brand experience with fast load times and excellent cross-device compatibility.',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
  },
  {
    title: 'NYSC Navigator',
    url: 'https://nysc-navigator.vercel.app/',
    description: 'A navigation and resource tool for Nigerian Youth Service Corps members, providing essential information and guidance.',
    problem: 'NYSC participants needed a centralized resource hub for orientation and service year navigation.',
    solution: 'Created an intuitive, information-rich platform with clean UI and easy-to-navigate structure.',
    impact: 'Serves as a comprehensive guide for NYSC members with positive user feedback and engagement.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Sunny Gallery',
    url: 'https://sunny-gallery.vercel.app',
    description: 'Visual gallery application with smooth animations and responsive image layouts for creative showcase.',
    problem: 'Needed a beautiful, performant gallery experience that showcases visual content elegantly.',
    solution: 'Built an animated gallery with lazy loading, responsive grid layouts, and smooth transitions.',
    impact: 'Fast, visually stunning gallery experience with optimized image delivery.',
    tech: ['React', 'CSS3', 'JavaScript', 'Vercel'],
  },
  {
    title: 'WorkFlow Pro',
    url: 'https://taskora-mauve.vercel.app/',
    description: 'A modern project management SaaS dashboard built as the frontend and backend foundation for a workspace collaboration product, with auth flows, dashboard UI, project views, and Supabase-backed architecture groundwork.',
    problem: 'Teams needed a centralized dashboard experience to organize projects and track activity without relying on scattered tools.',
    solution: 'Developed a structured dashboard interface with clear navigation, scalable UI patterns, and a professional layout suited for task and project management.',
    impact: 'Delivered a strong product-style interface that improves workflow visibility and presents a polished SaaS experience.',
    tech: ['React', 'Typescript', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Movie App',
    url: 'https://movie-app1-lake.vercel.app/',
    description: 'Feature-rich movie discovery application with search, filtering, and detailed movie information powered by external APIs.',
    problem: 'Users needed an intuitive way to discover and explore movies with rich details.',
    solution: 'Integrated external movie APIs with a clean, responsive UI featuring search and filter capabilities.',
    impact: 'Smooth, engaging movie browsing experience with fast API responses and clean presentation.',
    tech: ['React', 'API Integration', 'CSS3', 'JavaScript'],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="min-h-screen flex items-center py-16 md:py-24 px-6"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="glass rounded-2xl overflow-hidden hover:box-glow transition-all duration-500">
          <div className="p-8 md:p-12 lg:p-16">
            <div className="flex items-start justify-between mb-8">
              <div>
                <span className="font-mono text-primary/60 text-sm">
                  Project {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                  {project.title}
                </h3>
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-all shrink-0"
                aria-label={`Visit ${project.title}`}
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
              {project.description}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'Problem', text: project.problem },
                { label: 'Solution', text: project.solution },
                { label: 'Impact', text: project.impact },
              ].map((item) => (
                <div key={item.label} className="bg-secondary/50 rounded-xl p-5">
                  <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-2">{item.label}</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-full text-xs font-mono border border-primary/20 text-primary/80 bg-primary/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="projects">
      <div ref={ref} className="max-w-6xl mx-auto px-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Featured <span className="text-primary text-glow">Case Studies</span>
          </h2>
        </motion.div>
      </div>
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} index={i} />
      ))}
    </section>
  );
}
