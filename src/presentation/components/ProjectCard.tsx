'use client';

import Link from 'next/link';
import Image from 'next/image';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  slug: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  githubUrl,
  slug,
}) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      {/* Project image */}
      <div className="relative h-48 overflow-hidden">
        {imageUrl ? (
          <div className="w-full h-full relative">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            Project Image
          </div>
        )}
      </div>
      
      {/* Project details */}
      <div className="p-6">
        <Link href={`/projects/${slug}`}>
          <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        
        <p className="mt-2 text-gray-600 line-clamp-3">
          {description}
        </p>
        
        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Links */}
        <div className="mt-6 flex space-x-4">
          {demoUrl && (
            <a
              href={demoUrl}
              className="text-sm font-medium text-blue-600 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              className="text-sm font-medium text-gray-600 hover:text-gray-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}; 