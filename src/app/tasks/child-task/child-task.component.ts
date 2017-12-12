import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../task';
@Component({
  selector: 'app-child-task',
  templateUrl: './child-task.component.html',
  styleUrls: ['./child-task.component.css']
})
export class ChildTaskComponent implements OnInit {

  @Input() task:Task;
  
  constructor() { }

  ngOnInit() {
  }

}
