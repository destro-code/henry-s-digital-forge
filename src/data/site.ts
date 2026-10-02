export const SITE = {
  name: 'Henry Mosiali',
  url: 'https://henrymosiali.vercel.app',
  email: 'henrymosiali@gmail.com',
  phone: '+234 813 425 5086',
  phoneHref: 'tel:+2348134255086',
  location: 'Lagos, Nigeria',
  github: 'https://github.com/destro-code',
  linkedin: 'https://www.linkedin.com/in/henrymosiali',
  cv: '/Henry-Mosiali-CV.pdf',
  cvFilename: 'Henry-Mosiali-CV.pdf',
} as const;

export type NavItem = { label: string; href: string; sections: string[] };

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', sections: ['home'] },
  { label: 'About', href: '#about', sections: ['about'] },
  { label: 'Projects', href: '#projects', sections: ['projects'] },
  { label: 'Journey', href: '#journey', sections: ['journey', 'experience'] },
  { label: 'Skills', href: '#skills', sections: ['skills'] },
  { label: 'Certifications', href: '#certifications', sections: ['certifications'] },
  { label: 'Contact', href: '#contact', sections: ['contact'] },
];

export const SECTION_IDS = ['home', 'about', 'projects', 'journey', 'experience', 'skills', 'certifications', 'contact'];
