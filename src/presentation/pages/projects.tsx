'use client';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { ProjectGrid } from '../components/ProjectGrid';
import { ProjectCardProps } from '../components/ProjectCard';

// Sample projects data (expanded for the projects page)
const projects: ProjectCardProps[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart, and checkout functionality. Built with Next.js and integrated with Stripe payments.',
    imageUrl: '/images/project1.png',
    technologies: ['Next.js', 'React', 'Stripe', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'ecommerce-platform',
  },
  {
    title: 'Portfolio Website',
    description: 'A clean, modern portfolio website to showcase my projects and skills. Features a responsive design and contact form.',
    imageUrl: '/images/project2.png',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'portfolio-website',
  },
  {
    title: 'Task Management App',
    description: 'A productivity application for managing tasks with features like drag-and-drop, categories, and deadlines.',
    imageUrl: '/images/project3.png',
    technologies: ['React', 'TypeScript', 'Firebase'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'task-management-app',
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays current conditions and forecasts for any location. Integrates with a weather API for real-time data.',
    imageUrl: '/images/project4.png',
    technologies: ['JavaScript', 'React', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'weather-dashboard',
  },
  {
    title: 'Blog Platform',
    description: 'A full-stack blog platform with user authentication, content management, and markdown support.',
    imageUrl: '/images/project5.png',
    technologies: ['Next.js', 'MongoDB', 'Auth0'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'blog-platform',
  },
  {
    title: 'Recipe Finder',
    description: 'A recipe search application that allows users to find recipes based on ingredients they have on hand.',
    imageUrl: '/images/project6.png',
    technologies: ['React', 'Redux', 'API Integration'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    slug: 'recipe-finder',
  },
];

export default function ProjectsPage() {
  return (
    <DefaultLayout>
      <div className="pt-16 md:pt-24">
        <ProjectGrid projects={projects} />
      </div>
    </DefaultLayout>
  );
} 