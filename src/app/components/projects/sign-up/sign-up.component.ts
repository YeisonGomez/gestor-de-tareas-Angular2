import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
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
	formSubmitted: boolean;
	projectForm: NgForm;
	@ViewChild('projectForm') currentForm: NgForm;

	constructor(private projectService: ProjectService) { 
		this.newProject = new ProjectObject();
	}

	ngOnInit() {
	}

	ngAfterViewChecked() {
  		this.formChanged();
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

	formChanged() {
	  if (this.currentForm === this.projectForm) { return; }
	  this.projectForm = this.currentForm;
	  if (this.projectForm) {
	    this.projectForm.valueChanges
	      .subscribe(data => this.onValueChanged(data));
	  }
	}

	onValueChanged(data?: any) {
	  if (!this.projectForm) { return; }
	  const form = this.projectForm.form;

	  for (const field in this.formErrors) {
	    this.formErrors[field] = '';
	    const control = form.get(field);

	    if (control && control.dirty && !control.valid) {
	      const messages = this.validationMessages[field];
	      for (const key in control.errors) {
	        this.formErrors[field] += messages[key] + ' ';
	      }
	    }
	  }
	}

	formErrors = {
	  'name': '',
	  'description': ''
	};

	validationMessages = {
	  'name': {
	    'required':      'El nombre es requerido',
	    'minlength':     'Name must be at least 4 characters long.',
	    'maxlength':     'Name cannot be more than 24 characters long.',
	    'forbiddenName': 'Someone named "Bob" cannot be a hero.'
	  },
	  'description': {
	    'required': 'La descripción es necesaria.'
	  }
	};
}
