import { Component, OnInit } from '@angular/core';

import { ProjectObject } from '../../class/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	projects: ProjectObject[];
	
	constructor(private projectService: ProjectService) { 
		this.projectService.getProjects().then(data => this.projects = data);
	}

	ngOnInit() {
	}

	
}
