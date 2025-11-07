import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel = new EventEmitter()
  @Output() create = new EventEmitter<NewTaskData>()
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel(){
    this.cancel.emit()
  }

  onCreate(){
    this.create.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    })
  }
}
