import { Injectable } from '@angular/core';
import { Task } from '../constants/tasks';
import { TaskObject } from '../class/task';

@Injectable()
export class TaskService {

  constructor() { }

  getTasks(project_id: number){
    let tasks : TaskObject[] = [];
  	for (var i in Task) {
  		if(Task[i].project_id == project_id){
        tasks.push(Task[i]);
  		}
  	}
    return Promise.resolve(tasks);
  }

}
