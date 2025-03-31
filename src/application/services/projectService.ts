import { Project } from '../../domain/models/Project';
import { IProjectService } from '../../domain/services/ProjectService';
import { StaticProjectService } from '../../infrastructure/services/StaticProjectService';

export class ProjectService {
  private static instance: ProjectService;
  private projectService: IProjectService;

  private constructor() {
    // We're using the StaticProjectService, but this could be swapped with a different implementation
    this.projectService = new StaticProjectService();
  }

  public static getInstance(): ProjectService {
    if (!ProjectService.instance) {
      ProjectService.instance = new ProjectService();
    }
    return ProjectService.instance;
  }

  public async getAllProjects(): Promise<Project[]> {
    return this.projectService.getAllProjects();
  }

  public async getProjectBySlug(slug: string): Promise<Project | null> {
    return this.projectService.getProjectBySlug(slug);
  }

  public async getFeaturedProjects(limit?: number): Promise<Project[]> {
    return this.projectService.getFeaturedProjects(limit);
  }
} 