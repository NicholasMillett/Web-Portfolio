import { Project } from '../models/Project';

export interface IProjectService {
  getAllProjects(): Promise<Project[]>;
  getProjectBySlug(slug: string): Promise<Project | null>;
  getFeaturedProjects(limit?: number): Promise<Project[]>;
} 