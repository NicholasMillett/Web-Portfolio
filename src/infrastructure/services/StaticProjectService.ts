import { Project } from '../../domain/models/Project';
import { IProjectService } from '../../domain/services/ProjectService';

// Static project data
const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart, and checkout functionality. Built with Next.js and integrated with Stripe payments.',
    slug: 'ecommerce-platform',
    imageUrl: '/images/project1.png',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
    createdAt: new Date('2023-01-15'),
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: 'A clean, modern portfolio website to showcase my projects and skills. Features a responsive design and contact form.',
    slug: 'portfolio-website',
    imageUrl: '/images/project2.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
    createdAt: new Date('2023-03-20'),
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with features like drag-and-drop, categories, and deadlines.',
    slug: 'task-management-app',
    imageUrl: '/images/project3.png',
    technologies: ['React', 'TypeScript', 'Firebase'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
    createdAt: new Date('2023-05-10'),
  },
  {
    id: '4',
    title: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts for any location. Integrates with a weather API for real-time data.',
    slug: 'weather-dashboard',
    imageUrl: '/images/project4.png',
    technologies: ['JavaScript', 'React', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: false,
    createdAt: new Date('2022-11-05'),
  },
  {
    id: '5',
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication, content management, and markdown support.',
    slug: 'blog-platform',
    imageUrl: '/images/project5.png',
    technologies: ['Next.js', 'MongoDB', 'Auth0'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: false,
    createdAt: new Date('2022-08-15'),
  },
  {
    id: '6',
    title: 'Recipe Finder',
    description: 'A recipe search application that allows users to find recipes based on ingredients they have on hand.',
    slug: 'recipe-finder',
    imageUrl: '/images/project6.png',
    technologies: ['React', 'Redux', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: false,
    createdAt: new Date('2022-06-20'),
  },
];

export class StaticProjectService implements IProjectService {
  async getAllProjects(): Promise<Project[]> {
    // Sort projects by creation date, newest first
    return [...projects].sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getProjectBySlug(slug: string): Promise<Project | null> {
    return projects.find(project => project.slug === slug) || null;
  }

  async getFeaturedProjects(limit?: number): Promise<Project[]> {
    const featuredProjects = projects.filter(project => project.featured);
    return limit ? featuredProjects.slice(0, limit) : featuredProjects;
  }
} 