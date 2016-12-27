import { Component, OnInit, Input } from '@angular/core';
import { ProjectObject } from '../../../class/project';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'project-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	@Input() formActive: boolean;
	@Input() projects: ProjectObject[];
	newProject: ProjectObject;
	formSubmitted: boolean = false;

	constructor(private projectService: ProjectService) { 
		this.newProject = new ProjectObject();
	}

	ngOnInit() {
	}

	saveProject(): void{
		if(this.formSubmitted){
			this.newProject.id = this.projects[this.projects.length - 1].id + 1;
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
