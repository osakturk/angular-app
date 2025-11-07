import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Input({required: true}) userId!: string
  @Output() close = new EventEmitter()
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit()
  }

  onCreate(){
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    }, this.userId
    )
    this.close.emit()
  }
}
