'use client';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { ProjectGrid } from '../components/ProjectGrid';
import { ContactForm } from '../components/ContactForm';
import { ProjectCardProps } from '../components/ProjectCard';

// Sample projects data
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
];

export default function Home() {
  return (
    <DefaultLayout>
      <Hero />
      <About />
      <ProjectGrid projects={projects.slice(0, 3)} />
      <ContactForm />
    </DefaultLayout>
  );
} 