'use client';

import { ProjectCard, ProjectCardProps } from './ProjectCard';

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
          {/* Left column with section title */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
            <div className="mt-4 h-1 w-20 bg-blue-600"></div>
            <p className="mt-6 text-gray-600">
              Here are some of the projects I've worked on. Each one taught me something new
              and helped me grow as a developer.
            </p>
          </div>

          {/* Right column with filter (optional) */}
          <div className="lg:col-span-3">
            {/* You could add project filters here in the future */}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}; 