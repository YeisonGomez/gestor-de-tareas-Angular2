import { Component, OnInit } from '@angular/core';

import { ProjectObject } from '../../class/project';
import { ProjectService } from '../../services/project.service';
import { SignUpComponent } from '../../components/projects/sign-up/sign-up.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [SignUpComponent]
})
export class HomeComponent implements OnInit {

	projects: ProjectObject[];
	newProject: ProjectObject;
	formSubmitted: boolean = false;

	constructor(private projectService: ProjectService) { 
		this.newProject = new ProjectObject();
		this.projectService.getProjects().then(data => this.projects = data);
	}

	ngOnInit() {
	}

	saveProject(): void{
		if(this.formSubmitted){
			this.newProject.id = (this.projects[this.projects.length - 1].id + 1);
			this.projectService.saveProject(this.newProject).then(data => {
				if(data)
					this.newProject = new ProjectObject();
				else
					console.log("No se puedo guardar");
			});
		}else{
			console.log("Valide el formulario de registro");
		}
	}
}
