import { Injectable } from '@angular/core';
import { Projects } from '../constants/projects';
import { ProjectObject } from '../class/project';


@Injectable()
export class ProjectService {

  constructor() { }

  getProjects(): Promise<ProjectObject[]>{
  	return Promise.resolve(Projects);
  }

  saveProject(newProject: ProjectObject): Promise<boolean>{
  	Projects.push(newProject);
  	return Promise.resolve(true);
  }

}
