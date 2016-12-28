import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { TaskObject } from '../../class/task';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	project_id : number;
	tasks: TaskObject[];

	constructor(private route: ActivatedRoute, private service: TaskService) {
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
		    if (params['id']) {
		    	this.project_id = params['id'];
		    	this.service.getTasks(this.project_id)
		    	.then(data => {
		    		this.tasks = data;
		    	});
		    }
	  	});
	}

}
