import { Component, Input } from '@angular/core';
import { Task } from "./task/task";

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input() name?: string;
  // you can set as undefined type if you don't wanna use question mark with or (|) operation

}
