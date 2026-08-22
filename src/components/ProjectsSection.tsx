import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';

type Project = {
  title: string;
  url: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  tech: string[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: 'Artemis Hiring',
    url: 'https://www.artemishiring.co.uk/',
    description: 'Professional recruitment platform for the UK market, presented through a polished and responsive web experience.',
    role: 'Frontend Developer',
    problem: 'The recruitment business needed a professional web presence for its services and recruitment-focused content.',
    solution: 'Designed and developed a responsive frontend with clear information hierarchy, reusable UI patterns, and a professional visual system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    featured: true,
  },
  {
    title: 'Adglam',
    url: 'https://adglam.vercel.app/',
    description: 'Beauty services website for a professional makeup artist brand in Benin City, focused on presenting services and brand identity.',
    role: 'Frontend Developer',
    problem: 'The brand needed a polished online presence where potential clients could discover its beauty services and information.',
    solution: 'Built a clean, responsive interface with strong visual hierarchy and a presentation suited to a beauty-focused brand.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Node.js'],
    featured: true,
  },
  {
    title: 'CarlSmith Group',
    url: 'https://carlsmithgroup.com.ng',
    description: 'Corporate website for a Nigerian business group, built around a modern, responsive presentation of the organization and its activities.',
    role: 'Frontend Developer',
    problem: 'The corporate group needed a professional digital presence that could communicate its brand and information clearly.',
    solution: 'Built a responsive corporate interface with a structured layout and mobile-first presentation.',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
    featured: true,
  },
  {
    title: 'NYSC Navigator',
    url: 'https://nysc-navigator.vercel.app/',
    description: 'A navigation and resource platform for Nigerian Youth Service Corps members, organizing useful information into one accessible experience.',
    role: 'Full-Stack Developer',
    problem: 'NYSC participants can encounter information spread across different sources, making useful resources harder to navigate.',
    solution: 'Created an information-rich platform with a clear structure, responsive UI, and straightforward navigation.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    featured: true,
  },
  {
    title: 'WorkFlow Pro',
    url: 'https://taskora-mauve.vercel.app/',
    description: 'Project management SaaS-style dashboard with authentication flows, project views, and Supabase-backed application groundwork.',
    role: 'Full-Stack Developer',
    problem: 'A workspace product needed a centralized interface for organizing projects and viewing activity.',
    solution: 'Developed a structured dashboard with reusable UI patterns, clear navigation, and Supabase integration.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    title: 'Crypto Pulse',
    url: 'https://cryptopulse-live.vercel.app/',
    description: 'Cryptocurrency tracking dashboard for following market prices, trends, and selected assets through live API data.',
    role: 'Full-Stack Developer',
    problem: 'Crypto users needed a cleaner way to monitor market information without a cluttered interface.',
    solution: 'Built a responsive dashboard with market data integration, charts, search, filtering, and watchlist-style functionality.',
    tech: ['React', 'TypeScript', 'Tailwind', 'API Integration', 'Supabase'],
  },
  {
    title: 'Sunny Gallery',
    url: 'https://sunny-gallery.vercel.app',
    description: 'Responsive visual gallery application with animated presentation and image-focused layouts.',
    role: 'Frontend Developer',
    problem: 'The project needed an attractive way to present visual content across different screen sizes.',
    solution: 'Built a responsive gallery with animated transitions, grid layouts, and lazy-loaded imagery.',
    tech: ['React', 'CSS3', 'JavaScript', 'Vercel'],
  },
  {
    title: 'Movie App',
    url: 'https://movie-app1-lake.vercel.app/',
    description: 'Movie discovery application with search, filtering, and detailed information powered by an external movie API.',
    role: 'Frontend Developer',
    problem: 'Users needed a simple interface for discovering and exploring movies with useful details.',
    solution: 'Integrated an external movie API into a responsive interface with search and filtering capabilities.',
    tech: ['React', 'API Integration', 'CSS3', 'JavaScript'],
  },
];

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.08 }}
      className="glass rounded-2xl overflow-hidden hover:box-glow transition-all duration-500"
    >
      <div className="p-7 md:p-10 lg:p-12">
        <div className="flex items-start justify-between gap-6 mb-7">
          <div>
            <span className="font-mono text-primary/60 text-sm">Featured {String(index + 1).padStart(2, '0')}</span>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-2">{project.title}</h3>
          </div>
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-primary/20 text-primary hover:bg-primary/10 transition-all shrink-0" aria-label={`Visit ${project.title}`}>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">{project.description}</p>

        <div className="mb-8">
          <span className="font-mono text-primary text-xs uppercase tracking-wider">Role</span>
          <p className="text-foreground/80 text-sm mt-1">{project.role}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-secondary/50 rounded-xl p-5">
            <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-2">Challenge</h4>
            <p className="text-foreground/70 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="bg-secondary/50 rounded-xl p-5">
            <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-2">Approach</h4>
            <p className="text-foreground/70 text-sm leading-relaxed">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="px-3 py-1.5 rounded-full text-xs font-mono border border-primary/20 text-primary/80 bg-primary/5">{tech}</span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function CompactProject({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }} className="glass rounded-xl p-6 hover:box-glow transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="font-mono text-primary/50 text-xs">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="text-xl font-bold text-foreground mt-1">{project.title}</h3>
        </div>
        <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-primary/70 hover:text-primary transition-colors" aria-label={`Visit ${project.title}`}>
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech) => <span key={tech} className="px-2.5 py-1 rounded-md text-[11px] font-mono border border-primary/15 text-primary/70">{tech}</span>)}
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const featured = projects.filter((project) => project.featured);
  const more = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }} className="mb-12 md:mb-16">
          <p className="font-mono text-primary text-sm tracking-widest uppercase mb-3">// Projects</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Selected <span className="text-primary text-glow">Work</span></h2>
          <p className="text-muted-foreground max-w-2xl mt-5 leading-relaxed">A selection of professional and personal projects demonstrating how I approach frontend interfaces, full-stack applications, and product-focused web experiences.</p>
        </motion.div>

        <div className="grid gap-8">
          {featured.map((project, index) => <FeaturedProject key={project.title} project={project} index={index} />)}
        </div>

        <div className="mt-20">
          <div className="mb-8">
            <p className="font-mono text-primary text-xs tracking-widest uppercase mb-2">// More Work</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Other Projects</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {more.map((project, index) => <CompactProject key={project.title} project={project} index={index} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
