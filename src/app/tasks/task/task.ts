import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TaskData } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({required: true}) taskData!: TaskData;
  @Output() complete = new EventEmitter();
  @Output() addTask = new EventEmitter()


  onCompleteTask(){
    this.complete.emit(this.taskData.id);
  }

  onAddTask(){
    this.addTask.emit(this.taskData)
  }

}
