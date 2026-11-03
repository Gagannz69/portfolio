export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'system' | 'academic' | 'ai';
  featured: boolean;
  highlights?: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  category: 'languages' | 'frontend' | 'tools' | 'ai';
  iconName: string;
  badge?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  status: string;
  location?: string;
  description: string;
  coursework: string[];
  achievements?: string[];
}

export interface HighlightCard {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  accentColor: string;
}

export interface BackgroundVideoOption {
  id: string;
  label: string;
  src: string;
}

export interface PortfolioData {
  // Direct personal fields
  name: string;
  firstName: string;
  title: string;
  roles: string[];
  statusBadge: string;
  email: string;
  github: string;
  linkedin: string;
  instagram?: string;
  college: string;
  degree: string;
  year: string;
  location: string;
  shortIntro: string;
  about: string;

  // Background Videos per Section
  sectionBgs: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
  };
  availableBgs: BackgroundVideoOption[];

  // Structured website content
  aboutHighlights: HighlightCard[];
  skills: SkillItem[];
  projects: Project[];
  education: EducationItem[];
  navigation: {
    label: string;
    href: string;
  }[];
}
