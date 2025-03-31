export interface Project {
  id: string;
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  createdAt: Date;
} 