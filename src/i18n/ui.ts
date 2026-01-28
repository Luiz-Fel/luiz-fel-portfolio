export const languages = {
  en: 'English',
  'pt-br': 'Português',
} as const;

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    // Navigation
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    
    // Home
    'home.status': 'Available for new opportunities',
    'home.subtitle': 'Senior Web Developer crafting performant, accessible, and beautifully engineered digital experiences.',
    'home.viewProjects': 'View Projects',
    'home.resume': 'Resume',
    
    // Projects
    'projects.section': 'Selected Work',
    'projects.title': "Projects I've built",
    
    // Experience
    'experience.section': 'Professional Journey',
    'experience.title': "Where I've worked",
    'experience.subtitle': 'Solving complex problems through thoughtful engineering and collaborative leadership.',
    'experience.cta': 'Want to know more about my work?',
    'experience.viewProjects': 'View Projects',
    'experience.contact': 'Get in Touch',
    
    // Contact
    'contact.section': 'Get in Touch',
    'contact.title': "Let's build something great",
    'contact.subtitle': "I'm always interested in hearing about new opportunities, collaborations, or just connecting with fellow developers.",
    'contact.cta': 'Say Hello',
    
    // Footer
    'footer.role': 'Software Engineer',
    'footer.built': 'Built with Astro & Tailwind. Focused on performance and clarity.',
    
    // Meta
    'meta.title': 'Luiz Pereira | Portfolio',
    'meta.description': 'Portfolio of Luiz Pereira, web developer.',
  },
  'pt-br': {
    // Navigation
    'nav.projects': 'Projetos',
    'nav.experience': 'Experiência',
    'nav.contact': 'Contato',
    
    // Home
    'home.status': 'Disponível para novas oportunidades',
    'home.subtitle': 'Desenvolvedor Web Sênior criando experiências digitais performáticas, acessíveis e elegantes.',
    'home.viewProjects': 'Ver Projetos',
    'home.resume': 'Currículo',
    
    // Projects
    'projects.section': 'Trabalhos Selecionados',
    'projects.title': 'Projetos que construí',
    
    // Experience
    'experience.section': 'Jornada Profissional',
    'experience.title': 'Onde trabalhei',
    'experience.subtitle': 'Resolvendo problemas complexos através de engenharia cuidadosa e liderança colaborativa.',
    'experience.cta': 'Quer saber mais sobre meu trabalho?',
    'experience.viewProjects': 'Ver Projetos',
    'experience.contact': 'Entre em Contato',
    
    // Contact
    'contact.section': 'Entre em Contato',
    'contact.title': 'Vamos construir algo incrível',
    'contact.subtitle': 'Estou sempre interessado em ouvir sobre novas oportunidades, colaborações ou simplesmente conectar com outros desenvolvedores.',
    'contact.cta': 'Diga Olá',
    
    // Footer
    'footer.role': 'Engenheiro de Software',
    'footer.built': 'Feito com Astro & Tailwind. Focado em performance e clareza.',
    
    // Meta
    'meta.title': 'Luiz Pereira | Portfólio',
    'meta.description': 'Portfólio de Luiz Pereira, desenvolvedor web.',
  },
} as const;

// Helper para pegar o idioma da URL
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

// Helper para traduzir
export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

// Helper para gerar links com idioma
export function getLocalizedPath(path: string, lang: Lang): string {
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
