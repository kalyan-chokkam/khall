import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { Tasks } from '../list';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = Tasks;
   i =2;
  selectedTask: Task;
  newTask=false;
  constructor() { }
  
  
  ngOnInit() {
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }
  addTask(){
    this.newTask = true;
  }
  save(value1,value2){
    let newTask: Task= {
      id: this.i++,
      name: value1,
      description: value2
    }
    this.newTask=false;
    this.tasks.push(newTask);
  }
  cancel(){
    this.newTask=false;
  }

}
