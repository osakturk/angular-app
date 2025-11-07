import { Component, inject, Input } from '@angular/core';
import { type TaskData } from './task.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({required: true}) taskData!: TaskData;
  private tasksService = inject(TasksService)

  onCompleteTask(){
    this.tasksService.removeTask(this.taskData.id);
  }

}
