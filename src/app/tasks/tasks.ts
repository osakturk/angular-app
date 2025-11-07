import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required: true}) userId!: string
  @Input() name?: string;
  // you can set as undefined type if you don't wanna use question mark with or (|) operation
  isAddingTask = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string){
    this.tasksService.removeTask(id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
