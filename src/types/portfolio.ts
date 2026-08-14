export type ProjectCategory = 
  | 'all'
  | 'wordpress'
  | 'nextjs'
  | 'landing'
  | 'apps';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'wordpress' | 'plugin' | 'cart' | 'api' | 'code' | 'layout';
  deliverables: string[];
  targetAudience: string;
  badge?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  isCurrent: boolean;
  type: 'Full-time' | 'Internship' | 'Freelance';
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    icon?: string;
    isPrimary?: boolean;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  duration?: string;
}

export interface WhyMeFeature {
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  iconName: 'zap' | 'shield' | 'check-circle' | 'users' | 'repeat' | 'trending-up';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  link: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}
