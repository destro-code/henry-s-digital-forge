export type ProjectTier = 'flagship' | 'professional' | 'other';

export type Project = {
  slug: string;
  tier: ProjectTier;
  title: string;
  subtitle?: string;
  url: string;
  github?: string;
  image: string;
  description: string;
  role: string;
  problem: string;
  solution: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    slug: 'forge',
    tier: 'flagship',
    title: 'Forge',
    subtitle: 'Frontend Engineering Academy',
    url: 'https://forge2-gamma.vercel.app/',
    github: 'https://github.com/destro-code/forge2',
    image: '/previews/forge.webp',
    description:
      'An interactive learning platform for frontend developers, built around hands-on coding practice, guided progression, and an in-browser development experience.',
    role: 'Full-Stack Developer',
    problem:
      'Frontend learners need more than passive tutorials. They need a practical environment where they can write code, run it, receive feedback, and progress through structured exercises.',
    solution:
      'Built an interactive learning experience with an in-browser Monaco editor, exercise validation, progression logic, responsive interfaces, and a foundation for guided frontend development.',
    tech: ['React', 'TypeScript', 'TanStack Start', 'Tailwind CSS', 'Monaco Editor'],
  },
  {
    slug: 'artemis-hiring',
    tier: 'professional',
    title: 'Artemis Hiring',
    url: 'https://www.artemishiring.co.uk/',
    image: '/previews/artemis.webp',
    description: 'Professional recruitment platform for the UK market, presented through a polished and responsive web experience.',
    role: 'Frontend Developer',
    problem: 'The recruitment business needed a professional web presence for its services and recruitment-focused content.',
    solution:
      'Designed and developed a responsive frontend with clear information hierarchy, reusable UI patterns, and a professional visual system.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
  },
  {
    slug: 'adglam',
    tier: 'professional',
    title: 'Adglam',
    url: 'https://adglam.vercel.app/',
    image: '/previews/adglam.webp',
    description:
      'Beauty services website for a professional makeup artist brand in Benin City, focused on presenting services and brand identity.',
    role: 'Frontend Developer',
    problem: 'The brand needed a polished online presence where potential clients could discover its beauty services and information.',
    solution: 'Built a clean, responsive interface with strong visual hierarchy and a presentation suited to a beauty-focused brand.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Stripe', 'Node.js'],
  },
  {
    slug: 'carlsmith-group',
    tier: 'professional',
    title: 'CarlSmith Group',
    url: 'https://carlsmithgroup.com.ng',
    image: '/previews/carlsmith.webp',
    description:
      'Corporate website for a Nigerian business group, built around a modern, responsive presentation of the organization and its activities.',
    role: 'Frontend Developer',
    problem: 'The corporate group needed a professional digital presence that could communicate its brand and information clearly.',
    solution: 'Built a responsive corporate interface with a structured layout and mobile-first presentation.',
    tech: ['React', 'Next.js', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'nysc-navigator',
    tier: 'other',
    title: 'NYSC Navigator',
    url: 'https://nysc-navigator.vercel.app/',
    github: 'https://github.com/destro-code/nysc-navigator',
    image: '/previews/nysc-navigator.webp',
    description:
      'A navigation and resource platform for Nigerian Youth Service Corps members, organizing useful information into one accessible experience.',
    role: 'Full-Stack Developer',
    problem: 'NYSC participants can encounter information spread across different sources, making useful resources harder to navigate.',
    solution: 'Created an information-rich platform with a clear structure, responsive UI, and straightforward navigation.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
  },
  {
    slug: 'workflow-pro',
    tier: 'other',
    title: 'WorkFlow Pro',
    url: 'https://taskora-mauve.vercel.app/',
    image: '/previews/workflow-pro.webp',
    description:
      'Project management SaaS-style dashboard with authentication flows, project views, and Supabase-backed application groundwork.',
    role: 'Full-Stack Developer',
    problem: 'A workspace product needed a centralized interface for organizing projects and viewing activity.',
    solution: 'Developed a structured dashboard with reusable UI patterns, clear navigation, and Supabase integration.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
  },
  {
    slug: 'crypto-pulse',
    tier: 'other',
    title: 'Crypto Pulse',
    url: 'https://cryptopulse-live.vercel.app/',
    image: '/previews/crypto-pulse.webp',
    description: 'Cryptocurrency tracking dashboard for following market prices, trends, and selected assets through live API data.',
    role: 'Full-Stack Developer',
    problem: 'Crypto users needed a cleaner way to monitor market information without a cluttered interface.',
    solution: 'Built a responsive dashboard with market data integration, charts, search, filtering, and watchlist-style functionality.',
    tech: ['React', 'TypeScript', 'Tailwind', 'API Integration', 'Supabase'],
  },
  {
    slug: 'sunny-gallery',
    tier: 'other',
    title: 'Sunny Gallery',
    url: 'https://sunny-gallery.vercel.app',
    image: '/previews/sunny-gallery.webp',
    description: 'Responsive visual gallery application with animated presentation and image-focused layouts.',
    role: 'Frontend Developer',
    problem: 'The project needed an attractive way to present visual content across different screen sizes.',
    solution: 'Built a responsive gallery with animated transitions, grid layouts, and lazy-loaded imagery.',
    tech: ['React', 'CSS3', 'JavaScript', 'Vercel'],
  },
  {
    slug: 'movie-app',
    tier: 'other',
    title: 'Movie App',
    url: 'https://movie-app1-lake.vercel.app/',
    image: '/previews/movie-app.webp',
    description: 'Movie discovery application with search, filtering, and detailed information powered by an external movie API.',
    role: 'Frontend Developer',
    problem: 'Users needed a simple interface for discovering and exploring movies with useful details.',
    solution: 'Integrated an external movie API into a responsive interface with search and filtering capabilities.',
    tech: ['React', 'API Integration', 'CSS3', 'JavaScript'],
  },
];

export const flagshipProject = projects.find((p) => p.tier === 'flagship')!;
export const professionalProjects = projects.filter((p) => p.tier === 'professional');
export const otherProjects = projects.filter((p) => p.tier === 'other');

export function hostOf(url: string) {
  return new URL(url).host.replace(/^www\./, '');
}
